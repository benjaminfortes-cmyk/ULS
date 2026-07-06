// PARA MI PAW HECHO POR BENJAMIN FORTES EJEJEJE
const CACHE = 'serena-conecta-v6';
// Caché que se llena a medida que se usa: Leaflet (unpkg) y las teselas
// del mapa (OpenStreetMap). Así los mapas también funcionan sin internet
// en las zonas que ya visitaste.
const RUNTIME = 'serena-conecta-runtime-v1';
const RUNTIME_HOSTS = ['unpkg.com', 'tile.openstreetmap.org'];
const RUNTIME_MAX = 500; // tope de archivos para no llenar el celular


const ASSETS = [
  './',
  './index.html',
  './css/estilos.css',
  './js/datos-i18n.js',
  './js/script.js',
  './js/planificador.js',
  './manifest.webmanifest',
  './assets/favicon-uls.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/portada.png',
  './assets/og-image.jpg',
  './assets/justicia.jpg',
  './assets/inclusion.jpg',
  './assets/sostenibilidad.jpg',
  './assets/muni-laserena-blanco.svg',
  './assets/uls blanco y color para fondo azul.png'
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== RUNTIME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Si el caché de teselas crece demasiado, borra las más antiguas
function recortarCache(cache, max) {
  return cache.keys().then((keys) => {
    if (keys.length <= max) return;
    return cache.delete(keys[0]).then(() => recortarCache(cache, max));
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Leaflet y teselas del mapa: responde del caché al instante y
  // actualiza por detrás cuando hay internet
  if (RUNTIME_HOSTS.some((h) => url.hostname.endsWith(h))) {
    event.respondWith(
      caches.open(RUNTIME).then((cache) =>
        cache.match(req).then((cached) => {
          const red = fetch(req)
            .then((resp) => {
              if (resp && resp.ok) {
                cache.put(req, resp.clone()).then(() => recortarCache(cache, RUNTIME_MAX));
              }
              return resp;
            })
            .catch(() => cached);
          return cached || red;
        })
      )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
