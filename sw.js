// PARA MI PAW HECHO POR BENJAMIN FORTES EJEJEJE
const CACHE = 'serena-conecta-v1';


const ASSETS = [
  './',
  './index.html',
  './css/estilos.css',
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
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});


self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
