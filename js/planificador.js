
(function initPlanificador() {
  const zonaPlan = document.getElementById('microModoPlan');
  if (!zonaPlan) return; // si las pestañas no están en el HTML, no hace nada

  // --- Textos del planificador para i18n internaci ---
  Object.assign(traducciones.es, {
    planTabExplorarT: 'Explorar recorridos',
    planTabExplorarD: 'Conoce las líneas: mira el recorrido completo de cada micro y todas sus paradas.',
    planTabPlanT: 'Planificar un viaje',
    planTabPlanD: 'Te calculamos qué micro tomar: dónde subirte y dónde bajarte.',
    planIntro: 'Marca dónde estás, elige a dónde quieres ir, y te decimos qué micro tomar, en qué paradero subirte y dónde bajarte.',
    planPaso1: '¿Dónde estás?',
    planUsarUbicacion: 'Usar mi ubicación',
    planOrigenHint: 'o toca el mapa para marcar tu punto de partida',
    planPaso2: '¿A dónde vas?',
    planDestinoPh: 'Busca una institución o lugar turístico…',
    planLimpiar: 'Empezar de nuevo',
    planHint: 'Completa los pasos 1 y 2, y aquí verás qué micros te sirven para ese viaje.',
    planFaltaDestino: '¡Punto de partida listo! Ahora elige tu destino en el paso 2.',
    planFaltaOrigen: '¡Destino listo! Ahora marca dónde estás en el paso 1.',
    planTitOpciones: 'Micros que te sirven',
    planVacio: 'No encontramos una línea directa entre esos dos puntos caminando hasta 800 m. Prueba marcando otro punto de partida.',
    planSubeAqui: 'Sube aquí',
    planBajaAqui: 'Bájate aquí',
    planResumen: 'Camina {dO} m hasta «{sube}», viaja {n} paradas y bájate en «{baja}», a {dD} m de tu destino.',
    planCaminando: 'min caminando en total'
  });
  Object.assign(traducciones.en, {
    planTabExplorarT: 'Explore routes',
    planTabExplorarD: "Get to know the lines: see each bus's full route and all its stops.",
    planTabPlanT: 'Plan a trip',
    planTabPlanD: 'We work out which bus to take: where to get on and where to get off.',
    planIntro: 'Mark where you are, choose where you want to go, and we tell you which bus to take, where to get on and where to get off.',
    planPaso1: 'Where are you?',
    planUsarUbicacion: 'Use my location',
    planOrigenHint: 'or tap the map to set your starting point',
    planPaso2: 'Where are you going?',
    planDestinoPh: 'Search for an institution or tourist spot…',
    planLimpiar: 'Start over',
    planHint: 'Complete steps 1 and 2, and the buses that work for your trip will appear here.',
    planFaltaDestino: 'Starting point set! Now choose your destination in step 2.',
    planFaltaOrigen: 'Destination set! Now mark where you are in step 1.',
    planTitOpciones: 'Buses that work for you',
    planVacio: 'We could not find a direct line between those points within an 800 m walk. Try a different starting point.',
    planSubeAqui: 'Get on here',
    planBajaAqui: 'Get off here',
    planResumen: 'Walk {dO} m to “{sube}”, ride {n} stops and get off at “{baja}”, {dD} m from your destination.',
    planCaminando: 'min walking in total'
  });
  Object.assign(traducciones.de, {
    planTabExplorarT: 'Strecken erkunden',
    planTabExplorarD: 'Lerne die Linien kennen: sieh dir die komplette Strecke jedes Busses und alle Haltestellen an.',
    planTabPlanT: 'Fahrt planen',
    planTabPlanD: 'Wir berechnen, welchen Bus du nimmst: wo du einsteigst und wo du aussteigst.',
    planIntro: 'Markiere, wo du bist, wähle dein Ziel, und wir sagen dir, welchen Bus du nimmst, wo du einsteigst und wo du aussteigst.',
    planPaso1: 'Wo bist du?',
    planUsarUbicacion: 'Meinen Standort verwenden',
    planOrigenHint: 'oder tippe auf die Karte, um deinen Startpunkt zu setzen',
    planPaso2: 'Wohin möchtest du?',
    planDestinoPh: 'Suche eine Institution oder Sehenswürdigkeit…',
    planLimpiar: 'Neu beginnen',
    planHint: 'Erledige Schritt 1 und 2 – hier erscheinen dann die passenden Buslinien.',
    planFaltaDestino: 'Startpunkt gesetzt! Wähle jetzt dein Ziel in Schritt 2.',
    planFaltaOrigen: 'Ziel gesetzt! Markiere jetzt in Schritt 1, wo du bist.',
    planTitOpciones: 'Passende Buslinien',
    planVacio: 'Keine direkte Linie zwischen diesen Punkten gefunden (max. 800 m Fußweg). Versuche einen anderen Startpunkt.',
    planSubeAqui: 'Hier einsteigen',
    planBajaAqui: 'Hier aussteigen',
    planResumen: 'Gehe {dO} m bis „{sube}“, fahre {n} Haltestellen und steige bei „{baja}“ aus, {dD} m von deinem Ziel.',
    planCaminando: 'Min. Fußweg insgesamt'
  });
  Object.assign(traducciones.pt, {
    planTabExplorarT: 'Explorar percursos',
    planTabExplorarD: 'Conheça as linhas: veja o percurso completo de cada micro e todas as suas paradas.',
    planTabPlanT: 'Planejar uma viagem',
    planTabPlanD: 'Calculamos qual micro pegar: onde subir e onde descer.',
    planIntro: 'Marque onde você está, escolha para onde quer ir, e dizemos qual micro pegar, onde subir e onde descer.',
    planPaso1: 'Onde você está?',
    planUsarUbicacion: 'Usar minha localização',
    planOrigenHint: 'ou toque no mapa para marcar seu ponto de partida',
    planPaso2: 'Para onde você vai?',
    planDestinoPh: 'Busque uma instituição ou ponto turístico…',
    planLimpiar: 'Começar de novo',
    planHint: 'Complete os passos 1 e 2 e aqui aparecerão os micros que servem para a sua viagem.',
    planFaltaDestino: 'Ponto de partida pronto! Agora escolha seu destino no passo 2.',
    planFaltaOrigen: 'Destino pronto! Agora marque onde você está no passo 1.',
    planTitOpciones: 'Micros que servem para você',
    planVacio: 'Não encontramos uma linha direta entre esses pontos caminhando até 800 m. Tente outro ponto de partida.',
    planSubeAqui: 'Suba aqui',
    planBajaAqui: 'Desça aqui',
    planResumen: 'Caminhe {dO} m até «{sube}», viaje {n} paradas e desça em «{baja}», a {dD} m do seu destino.',
    planCaminando: 'min caminhando no total'
  });


  const zonaExplorar = document.getElementById('microModoExplorar');
  const tabExplorar = document.getElementById('planTabExplorar');
  const tabPlan = document.getElementById('planTabPlanificar');
  const panelExplorar = document.getElementById('microPanelLateral');
  const panel = document.getElementById('planPanel');

  // Capa propia del planificador se agrega a map3 solo en modo planificar
  const capaPlan = L.layerGroup();

  const RADIO_CAMINATA = 800; 

  let origen = null;  
  let destino = null;  
  let opciones = [];

  function tPlan() {
    return traducciones[idiomaActual];
  }

  // Recibe la CLAVE de traducción para que el cambio de idioma
  function mensajePanel(clave) {
    panel.innerHTML = `<p data-i18n="${clave}">${tPlan()[clave]}</p>`;
  }

  // --- Cambio de modo  ---
  function activarModo(modo) {
    const esPlan = modo === 'plan';
    window.planModoActivo = esPlan; // lo lee el click de map3 en script.js
    tabPlan.classList.toggle('activo', esPlan);
    tabExplorar.classList.toggle('activo', !esPlan);
    zonaPlan.classList.toggle('oculto', !esPlan);
    zonaExplorar.classList.toggle('oculto', esPlan);
    panel.classList.toggle('oculto', !esPlan);
    panelExplorar.classList.toggle('oculto', esPlan);

    if (esPlan) {
      map3.removeLayer(capaLinea);
      map3.removeLayer(capaViaje);
      if (marcadorPuntoMicro) map3.removeLayer(marcadorPuntoMicro);
      if (marcadorUsuarioMicro) map3.removeLayer(marcadorUsuarioMicro);
      capaPlan.addTo(map3);
    } else {
      map3.removeLayer(capaPlan);
      capaLinea.addTo(map3);
      capaViaje.addTo(map3);
    }
    // la altura de la sección cambia al alternar herramientas
    setTimeout(() => map3.invalidateSize(), 200);
    if (esPlan) refrescar();
  }

  tabExplorar.addEventListener('click', () => activarModo('explorar'));
  tabPlan.addEventListener('click', () => activarModo('plan'));

  // Si eligen Ir en micro desde la ruta turística esa func dibuuja
  document.addEventListener('click', (e) => {
    if (e.target.closest('.tur-micro-chip') && window.planModoActivo) activarModo('explorar');
  });

  // Mejor tramo de una línea
  function mejorTramo(linea) {
    const paradas = linea.paradas;
    let mejor = null;
    let minO = Infinity;
    let idxO = -1;
    for (let j = 1; j < paradas.length; j++) {
      const dOant = distancia(origen, paradas[j - 1].c);
      if (dOant < minO) {
        minO = dOant;
        idxO = j - 1;
      }
      if (minO > RADIO_CAMINATA) continue;
      const dD = distancia(destino.coords, paradas[j].c);
      if (dD > RADIO_CAMINATA) continue;
      
      const score = minO + dD + (j - idxO) * 10;
      if (!mejor || score < mejor.score) {
        mejor = { i: idxO, j, dO: minO, dD, score };
      }
    }
    return mejor;
  }

  function calcular() {
    opciones = [];
    Object.keys(lineasMicro).forEach((num) => {
      const tramo = mejorTramo(lineasMicro[num]);
      if (tramo) opciones.push({ num, ...tramo });
    });
    opciones.sort((a, b) => a.score - b.score);
    opciones = opciones.slice(0, 3);

    if (!opciones.length) {
      dibujarExtremos();
      mensajePanel('planVacio');
      return;
    }
    renderOpciones();
    dibujarOpcion(opciones[0]);
  }

  // Solo origendestino en el mapa 
  function dibujarExtremos() {
    capaPlan.clearLayers();
    const t = tPlan();
    const puntos = [];
    if (origen) {
      L.marker(origen, { icon: crearIconoUsuario(), zIndexOffset: 1000 })
        .bindPopup(`<div class="popup-content"><h3>${t.tuUbicacion}</h3></div>`)
        .addTo(capaPlan);
      puntos.push(origen);
    }
    if (destino) {
      L.marker(destino.coords, { icon: crearIconoDestino(), zIndexOffset: 1000 })
        .bindPopup(`<div class="popup-content"><h3>${destino.nombre}</h3></div>`)
        .addTo(capaPlan);
      puntos.push(destino.coords);
    }
    if (puntos.length === 1) map3.setView(puntos[0], 15, { animate: true });
    if (puntos.length === 2) map3.fitBounds(L.latLngBounds(puntos), { padding: [60, 60] });
  }

  function dibujarOpcion(op) {
    capaPlan.clearLayers();
    const t = tPlan();
    const linea = lineasMicro[op.num];
    const sube = linea.paradas[op.i];
    const baja = linea.paradas[op.j];

    L.marker(origen, { icon: crearIconoUsuario(), zIndexOffset: 1000 })
      .bindPopup(`<div class="popup-content"><h3>${t.tuUbicacion}</h3></div>`)
      .addTo(capaPlan);
    L.marker(destino.coords, { icon: crearIconoDestino(), zIndexOffset: 1000 })
      .bindPopup(`<div class="popup-content"><h3>${destino.nombre}</h3></div>`)
      .addTo(capaPlan);

    // tramo del recorrido en micro
    const tramo = linea.paradas.slice(op.i, op.j + 1);
    const coordsTramo = tramo.map((p) => p.c);
    L.polyline(coordsTramo, { color: linea.color, weight: 5, opacity: 0.85 }).addTo(capaPlan);
    tramo.forEach((p) => {
      L.circleMarker(p.c, { radius: 4.5, color: '#fff', weight: 1.5, fillColor: linea.color, fillOpacity: 1 })
        .bindPopup(`<div class="popup-content"><h3>Línea ${op.num}</h3><p>${p.n}</p></div>`)
        .addTo(capaPlan);
    });

    // caminatas 
    L.polyline([origen, sube.c], { color: '#16A34A', weight: 3, dashArray: '6 8', opacity: 0.9 }).addTo(capaPlan);
    L.polyline([baja.c, destino.coords], { color: '#D2492F', weight: 3, dashArray: '6 8', opacity: 0.9 }).addTo(capaPlan);

    // paraderos de subida y bajada destacados
    L.circleMarker(sube.c, { radius: 9, color: '#fff', weight: 2.5, fillColor: '#16A34A', fillOpacity: 1 })
      .bindTooltip(t.planSubeAqui, { permanent: true, direction: 'top', offset: [0, -10], className: 'plan-tip plan-tip--sube' })
      .addTo(capaPlan);
    L.circleMarker(baja.c, { radius: 9, color: '#fff', weight: 2.5, fillColor: '#D2492F', fillOpacity: 1 })
      .bindTooltip(t.planBajaAqui, { permanent: true, direction: 'top', offset: [0, -10], className: 'plan-tip plan-tip--baja' })
      .addTo(capaPlan);

    map3.fitBounds(L.latLngBounds([origen, destino.coords, ...coordsTramo]), { padding: [50, 50] });
  }

  function renderOpciones() {
    const t = tPlan();
    panel.innerHTML = `<p class="micro-panel__titulo">${t.planTitOpciones}</p>`;
    opciones.forEach((op, idx) => {
      const linea = lineasMicro[op.num];
      const sube = linea.paradas[op.i];
      const baja = linea.paradas[op.j];
      const minCaminata = Math.max(1, Math.round((op.dO + op.dD) / 75));
      const resumen = t.planResumen
        .replace('{dO}', Math.round(op.dO))
        .replace('{sube}', sube.n)
        .replace('{n}', op.j - op.i)
        .replace('{baja}', baja.n)
        .replace('{dD}', Math.round(op.dD));

      const item = document.createElement('div');
      item.className = 'micro-resultado plan-opcion' + (idx === 0 ? ' activo' : '');
      item.innerHTML = `
        <button type="button" class="micro-chip" style="--lc:${linea.color}">${op.num}</button>
        <span class="micro-resultado__texto"><strong>Línea ${op.num}</strong> · ~${minCaminata} ${t.planCaminando}<br>${resumen}</span>`;
      item.addEventListener('click', () => {
        panel.querySelectorAll('.plan-opcion').forEach((el) => el.classList.remove('activo'));
        item.classList.add('activo');
        dibujarOpcion(op);
      });
      panel.appendChild(item);
    });
  }

  // Con cada cambio de orgien igual destino decide qué mostrar
  function refrescar() {
    if (origen && destino) {
      calcular();
    } else {
      dibujarExtremos();
      if (origen) mensajePanel('planFaltaDestino');
      else if (destino) mensajePanel('planFaltaOrigen');
      else mensajePanel('planHint');
    }
  }

  // --- Paso 1 origen por GPS o tocando el mapa ---
  const btnUbicacion = document.getElementById('planUbicacionBtn');
  btnUbicacion.addEventListener('click', () => {
    const t = tPlan();
    if (!navigator.geolocation) {
      alert(t.ubicacionError);
      return;
    }
    btnUbicacion.classList.add('cargando');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        btnUbicacion.classList.remove('cargando');
        origen = [pos.coords.latitude, pos.coords.longitude];
        userCoords = origen;
        refrescar();
      },
      () => {
        btnUbicacion.classList.remove('cargando');
        alert(t.ubicacionError);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });

  // En modo planificar el click en map3 fija el origen
  map3.on('click', (e) => {
    if (!window.planModoActivo) return;
    origen = [e.latlng.lat, e.latlng.lng];
    refrescar();
  });

  // --- Paso 2 destino con buscador sobre los lugares del sitio ---
  const inputDestino = document.getElementById('planDestinoInput');
  const listaDestino = document.getElementById('planDestinoResultados');

  function cerrarLista() {
    listaDestino.classList.add('oculto');
    listaDestino.innerHTML = '';
  }

  function renderDestinos(consulta) {
    const q = normaliza(consulta.trim());
    if (q.length < 2) {
      cerrarLista();
      return;
    }
    const coincidencias = lugares
      .filter((l) => normaliza(l.nombre + ' ' + (l.direccion || '')).includes(q))
      .slice(0, 7);
    listaDestino.innerHTML = '';
    const t = tPlan();
    if (!coincidencias.length) {
      const vacio = document.createElement('li');
      vacio.className = 'vacio';
      vacio.textContent = t.buscadorVacio;
      listaDestino.appendChild(vacio);
    }
    coincidencias.forEach((lugar) => {
      const li = document.createElement('li');
      const colorPunto = lugar.grupo === 'inmigrantes' ? 'azul' : 'verde';
      li.innerHTML = `<span class="punto punto--${colorPunto}"></span><span>${lugar.nombre}</span>`;
      li.addEventListener('click', () => {
        destino = lugar;
        inputDestino.value = lugar.nombre;
        cerrarLista();
        refrescar();
      });
      listaDestino.appendChild(li);
    });
    listaDestino.classList.remove('oculto');
  }

  inputDestino.addEventListener('input', () => renderDestinos(inputDestino.value));
  inputDestino.addEventListener('focus', () => renderDestinos(inputDestino.value));
  inputDestino.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const primero = listaDestino.querySelector('li:not(.vacio)');
      if (primero) primero.click();
    }
    if (e.key === 'Escape') cerrarLista();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.buscador--plan')) cerrarLista();
  });

  // --- Empezar de nuevo ---
  document.getElementById('planLimpiarBtn').addEventListener('click', () => {
    origen = null;
    destino = null;
    opciones = [];
    inputDestino.value = '';
    cerrarLista();
    capaPlan.clearLayers();
    mensajePanel('planHint');
  });
})();
