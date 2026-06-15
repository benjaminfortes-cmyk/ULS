    //mi primer mapita
    const map = L.map('map').setView([-29.9032, -71.2496], 15);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    //Segundo mapa
    const map2 = L.map('map2').setView([-29.9032, -71.2496], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map2);

    //Tercer mapa recorridos de micro
    const map3 = L.map('map3').setView([-29.905, -71.24], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map3);

    const info = document.getElementById('info');
    const info2 = document.getElementById('info2');

    // Ubicación del usuario 
    let userCoords = null;

    // ===== Diccionario =====
    const traducciones = {
      es: {
        btnInmigrantes: 'Apoyo al migrante',
        btnTuristica: 'Ruta turística',
        btnMicro: 'Conéctate en Micro',
        btnTodos: 'Mostrar todo',
        idioma: 'Idioma',
        direccion: 'Dirección',
        contacto: 'Contacto',
        objetivo: 'Objetivo',
        horario: 'Horario de atención',
        descripcion: 'Descripción',
        micros: 'Micros cercanas',
        comoLlegar: 'Cómo llegar',
        estoyAqui: 'Estoy aquí',
        tuUbicacion: 'Estás aquí',
        ubicacionError: 'No pudimos obtener tu ubicación. Activa el GPS y dale permiso al navegador.',
        instruccion: 'Busca una institución en el buscador o haz click en un marcador del mapa.',
        instruccion2: 'Haz click en un punto de la ruta turística para ver su información.',
        quienesEtiqueta: 'Sobre nosotros',
        quienesTitulo: 'Quiénes somos',
        quienesTitulo1: 'Quiénes',
        quienesTitulo2: 'somos',
        quienesTexto: 'Somos estudiantes de Ingeniería Civil Industrial de la Universidad de La Serena, quienes actualmente se encuentran buscando crear este proyecto de creación de valor compartido mediante apoyo y ayuda a la comunidad migrante de la ciudad de La Serena, con el propósito de conseguir una ciudad multicultural.',
        mapaApoyoTitulo: 'Instituciones de Apoyo al Migrante',
        mapaRutaTitulo: 'Ruta turística',
        leyendaInmigrantes: 'Apoyo al migrante',
        leyendaTuristica: 'Ruta turística',
        filtroTodos: 'Todos',
        filtroCat1: 'Fiscalización y Control',
        filtroCat2: 'Educacional y Salud',
        filtroCat3: 'Intervención y Apoyo Legal',
        filtroCat4: 'Apoyo Laboral',
        filtroCat5: 'Consulados',
        buscadorPlaceholder: 'Busca una institución…',
        buscadorPlaceholder2: 'Busca un punto turístico…',
        buscadorVacio: 'No se encontraron resultados',
        mapasIntro: 'En esta página web podrán encontrar dos mapas. El primero “Apoyo al migrante”, el cual cuenta con diversas organizaciones que ofrecen una diversidad de ayuda a la comunidad, tanto públicas como privadas, además de instituciones del área de salud a las cuales pueden acceder. El segundo “Ruta turística” está enfocado a entregar los puntos principales de atracción turística de nuestra ciudad, donde encontrarán el detalle de cada uno de ellos.',
        microEyebrow: 'Muévete por la ciudad',
        microTitulo: 'Conéctate en Micro',
        microIntro: 'Selecciona una línea para ver su recorrido completo y todas sus paradas en el mapa.',
        buscadorMicroPh: 'Busca un paradero (ej: Mall Plaza La Serena)…',
        microLineasLabel: 'Líneas disponibles',
        microNearbyBtn: 'Micros cerca de mí',
        nearbyTitulo: 'Líneas cerca de ti',
        nearbyVacio: 'No hay paraderos a menos de 700 m de tu ubicación.',
        subeAqui: 'Sube aquí',
        turIrMicro: 'Ir en micro',
        tapTitulo: 'Líneas cerca de ese punto',
        microPanelHint: 'Toca un punto del mapa o usa «Micros cerca de mí», y aquí verás las líneas más cercanas.',
        guiaTitulo: '¿Cómo usar este mapa?',
        guia1T: 'Botones de línea',
        guia1D: 'Toca una línea de color para ver todas sus paradas dibujadas en el mapa.',
        guia2T: 'Buscar un paradero',
        guia2D: 'Escribe el nombre de un paradero y te mostramos qué líneas pasan por ahí.',
        guia3T: 'Micros cerca de ti (2 formas)',
        guia3D: '1) Toca cualquier punto del mapa, o 2) presiona el botón «Micros cerca de mí» para activar tu ubicación. En ambas, las líneas cercanas aparecen a la derecha del mapa, sin tener que desplazarte.'
      },
      en: {
        btnInmigrantes: 'Migrant support',
        btnTuristica: 'Tourist route',
        btnMicro: 'Get around by Bus',
        btnTodos: 'Show all',
        idioma: 'Language',
        direccion: 'Address',
        contacto: 'Contact',
        objetivo: 'Purpose',
        horario: 'Opening hours',
        descripcion: 'Description',
        micros: 'Nearby buses',
        comoLlegar: 'Get directions',
        estoyAqui: 'I am here',
        tuUbicacion: 'You are here',
        ubicacionError: 'We could not get your location. Turn on GPS and allow the browser.',
        instruccion: 'Search for an institution above or click a marker on the map.',
        instruccion2: 'Click a point on the tourist route to see its information.',
        quienesEtiqueta: 'About us',
        quienesTitulo: 'Who we are',
        quienesTitulo1: 'Who',
        quienesTitulo2: 'we are',
        quienesTexto: 'We are Industrial Engineering students at the University of La Serena, currently seeking to create this shared value creation project through support and help for the migrant community of La Serena, with the goal of building a multicultural city.',
        mapaApoyoTitulo: 'Migrant Support Institutions',
        mapaRutaTitulo: 'Tourist route',
        leyendaInmigrantes: 'Migrant support',
        leyendaTuristica: 'Tourist route',
        filtroTodos: 'All',
        filtroCat1: 'Inspection & Control',
        filtroCat2: 'Education & Health',
        filtroCat3: 'Legal Aid & Intervention',
        filtroCat4: 'Employment Support',
        filtroCat5: 'Consulates',
        buscadorPlaceholder: 'Search for an institution…',
        buscadorPlaceholder2: 'Search for a tourist spot…',
        buscadorVacio: 'No results found',
        mapasIntro: 'On this website you will find two maps. The first, “Migrant support”, includes various public and private organizations that offer different kinds of help to the community, as well as health institutions you can access. The second, “Tourist route”, focuses on the main tourist attractions of our city, where you will find details about each one.',
        microEyebrow: 'Get around the city',
        microTitulo: 'Connect by Bus',
        microIntro: 'Select a line to see its full route and all of its stops on the map.',
        buscadorMicroPh: 'Search for a stop (e.g. Mall Plaza La Serena)…',
        microLineasLabel: 'Available lines',
        microNearbyBtn: 'Buses near me',
        nearbyTitulo: 'Lines near you',
        nearbyVacio: 'No stops within 700 m of your location.',
        subeAqui: 'Board here',
        turIrMicro: 'Go by bus',
        tapTitulo: 'Lines near that point',
        microPanelHint: 'Tap a point on the map or use “Buses near me”, and the nearest lines will appear here.',
        guiaTitulo: 'How to use this map',
        guia1T: 'Line buttons',
        guia1D: 'Tap a colored line to see all of its stops drawn on the map.',
        guia2T: 'Find a stop',
        guia2D: 'Type a stop name and we’ll show you which lines pass through it.',
        guia3T: 'Buses near you (2 ways)',
        guia3D: '1) Tap anywhere on the map, or 2) press the “Buses near me” button to use your location. Either way, the nearby lines appear to the right of the map, with no scrolling.'
      },
      de: {
        btnInmigrantes: 'Migrantenhilfe',
        btnTuristica: 'Touristenroute',
        btnMicro: 'Mit dem Bus',
        btnTodos: 'Alle anzeigen',
        idioma: 'Sprache',
        direccion: 'Adresse',
        contacto: 'Kontakt',
        objetivo: 'Ziel',
        horario: 'Öffnungszeiten',
        descripcion: 'Beschreibung',
        micros: 'Buslinien in der Nähe',
        comoLlegar: 'Route anzeigen',
        estoyAqui: 'Ich bin hier',
        tuUbicacion: 'Sie sind hier',
        ubicacionError: 'Wir konnten Ihren Standort nicht ermitteln. Aktivieren Sie GPS und erlauben Sie es dem Browser.',
        instruccion: 'Suche oben nach einer Einrichtung oder klicke auf eine Markierung auf der Karte.',
        instruccion2: 'Klicken Sie auf einen Punkt der Touristenroute, um die Informationen anzuzeigen.',
        quienesEtiqueta: 'Über uns',
        quienesTitulo: 'Wer wir sind',
        quienesTitulo1: 'Wer',
        quienesTitulo2: 'wir sind',
        quienesTexto: 'Wir sind Studierende des Wirtschaftsingenieurwesens an der Universität von La Serena und arbeiten derzeit daran, dieses Projekt zur Schaffung gemeinsamer Werte durch Unterstützung und Hilfe für die Migrantengemeinschaft der Stadt La Serena zu verwirklichen, mit dem Ziel, eine multikulturelle Stadt zu schaffen.',
        mapaApoyoTitulo: 'Einrichtungen der Migrantenhilfe',
        mapaRutaTitulo: 'Touristenroute',
        leyendaInmigrantes: 'Migrantenhilfe',
        leyendaTuristica: 'Touristenroute',
        filtroTodos: 'Alle',
        filtroCat1: 'Kontrolle & Aufsicht',
        filtroCat2: 'Bildung & Gesundheit',
        filtroCat3: 'Rechtshilfe & Intervention',
        filtroCat4: 'Arbeitsförderung',
        filtroCat5: 'Konsulate',
        buscadorPlaceholder: 'Einrichtung suchen…',
        buscadorPlaceholder2: 'Sehenswürdigkeit suchen…',
        buscadorVacio: 'Keine Ergebnisse gefunden',
        mapasIntro: 'Auf dieser Website finden Sie zwei Karten. Die erste, „Migrantenhilfe“, umfasst verschiedene öffentliche und private Organisationen, die der Gemeinschaft vielfältige Hilfe anbieten, sowie Gesundheitseinrichtungen, die Sie nutzen können. Die zweite, „Touristenroute“, konzentriert sich auf die wichtigsten Sehenswürdigkeiten unserer Stadt, wo Sie Details zu jeder einzelnen finden.',
        microEyebrow: 'Beweg dich durch die Stadt',
        microTitulo: 'Verbunden per Bus',
        microIntro: 'Wählen Sie eine Linie, um ihre gesamte Route und alle Haltestellen auf der Karte zu sehen.',
        buscadorMicroPh: 'Haltestelle suchen (z. B. Mall Plaza La Serena)…',
        microLineasLabel: 'Verfügbare Linien',
        microNearbyBtn: 'Busse in der Nähe',
        nearbyTitulo: 'Linien in deiner Nähe',
        nearbyVacio: 'Keine Haltestellen im Umkreis von 700 m.',
        subeAqui: 'Hier einsteigen',
        turIrMicro: 'Mit dem Bus',
        tapTitulo: 'Linien in der Nähe dieses Punktes',
        microPanelHint: 'Tippe auf die Karte oder nutze „Busse in der Nähe“ – die nächsten Linien erscheinen hier.',
        guiaTitulo: 'So nutzt du diese Karte',
        guia1T: 'Linien-Buttons',
        guia1D: 'Tippe auf eine farbige Linie, um alle ihre Haltestellen auf der Karte zu sehen.',
        guia2T: 'Haltestelle suchen',
        guia2D: 'Gib den Namen einer Haltestelle ein und wir zeigen dir, welche Linien dort halten.',
        guia3T: 'Busse in deiner Nähe (2 Wege)',
        guia3D: '1) Tippe auf einen Punkt der Karte, oder 2) drücke „Busse in der Nähe“, um deinen Standort zu nutzen. In beiden Fällen erscheinen die nahen Linien rechts neben der Karte – ohne Scrollen.'
      },
      pt: {
        btnInmigrantes: 'Apoio ao migrante',
        btnTuristica: 'Rota turística',
        btnMicro: 'Conecte-se de Ônibus',
        btnTodos: 'Mostrar tudo',
        idioma: 'Idioma',
        direccion: 'Endereço',
        contacto: 'Contato',
        objetivo: 'Objetivo',
        horario: 'Horário de atendimento',
        descripcion: 'Descrição',
        micros: 'Ônibus próximos',
        comoLlegar: 'Como chegar',
        estoyAqui: 'Estou aqui',
        tuUbicacion: 'Você está aqui',
        ubicacionError: 'Não foi possível obter sua localização. Ative o GPS e permita o acesso no navegador.',
        instruccion: 'Pesquise uma instituição na busca ou clique em um marcador do mapa.',
        instruccion2: 'Clique em um ponto da rota turística para ver suas informações.',
        quienesEtiqueta: 'Sobre nós',
        quienesTitulo: 'Quem somos',
        quienesTitulo1: 'Quem',
        quienesTitulo2: 'somos',
        quienesTexto: 'Somos estudantes de Engenharia Civil Industrial da Universidade de La Serena, atualmente buscando criar este projeto de criação de valor compartilhado por meio de apoio e ajuda à comunidade migrante da cidade de La Serena, com o propósito de construir uma cidade multicultural.',
        mapaApoyoTitulo: 'Instituições de Apoio ao Migrante',
        mapaRutaTitulo: 'Rota turística',
        leyendaInmigrantes: 'Apoio ao migrante',
        leyendaTuristica: 'Rota turística',
        filtroTodos: 'Todos',
        filtroCat1: 'Fiscalização e Controle',
        filtroCat2: 'Educacional e Saúde',
        filtroCat3: 'Intervenção e Apoio Jurídico',
        filtroCat4: 'Apoio ao Trabalho',
        filtroCat5: 'Consulados',
        buscadorPlaceholder: 'Pesquise uma instituição…',
        buscadorPlaceholder2: 'Pesquise um ponto turístico…',
        buscadorVacio: 'Nenhum resultado encontrado',
        mapasIntro: 'Neste site você encontrará dois mapas. O primeiro, “Apoio ao migrante”, conta com diversas organizações públicas e privadas que oferecem diferentes tipos de ajuda à comunidade, além de instituições de saúde às quais você pode ter acesso. O segundo, “Rota turística”, está focado nos principais pontos de atração turística da nossa cidade, onde você encontrará os detalhes de cada um deles.',
        microEyebrow: 'Movimente-se pela cidade',
        microTitulo: 'Conecte-se de Ônibus',
        microIntro: 'Selecione uma linha para ver seu trajeto completo e todas as paradas no mapa.',
        buscadorMicroPh: 'Busque um ponto (ex: Mall Plaza La Serena)…',
        microLineasLabel: 'Linhas disponíveis',
        microNearbyBtn: 'Ônibus perto de mim',
        nearbyTitulo: 'Linhas perto de você',
        nearbyVacio: 'Não há pontos a menos de 700 m da sua localização.',
        subeAqui: 'Embarque aqui',
        turIrMicro: 'Ir de ônibus',
        tapTitulo: 'Linhas perto desse ponto',
        microPanelHint: 'Toque em um ponto do mapa ou use “Ônibus perto de mim”, e as linhas mais próximas aparecerão aqui.',
        guiaTitulo: 'Como usar este mapa',
        guia1T: 'Botões de linha',
        guia1D: 'Toque em uma linha colorida para ver todas as suas paradas no mapa.',
        guia2T: 'Buscar um ponto',
        guia2D: 'Digite o nome de um ponto e mostramos quais linhas passam por lá.',
        guia3T: 'Ônibus perto de você (2 formas)',
        guia3D: '1) Toque em qualquer ponto do mapa, ou 2) pressione o botão “Ônibus perto de mim” para usar sua localização. Nos dois casos, as linhas próximas aparecem à direita do mapa, sem rolar a tela.'
      }
    };

    let idiomaActual = 'es';
    // Último lugar mostrado en cada panel 
    let seleccionInfo = null;
    let seleccionInfo2 = null;

    
    function panelDe(lugar) {
      return lugar.grupo === 'turistica' ? info2 : info;
    }

    function mostrarInfo(lugar) {
      if (lugar.grupo === 'turistica') seleccionInfo2 = lugar;
      else seleccionInfo = lugar;

      const t = traducciones[idiomaActual];
      let html = `<h3>${lugar.nombre}</h3>`;
      html += `<p><strong>${t.direccion}:</strong> ${lugar.direccion}</p>`;
      if (lugar.contacto) html += `<p><strong>${t.contacto}:</strong> ${lugar.contacto}</p>`;
      if (lugar.horario) html += `<p><strong>${t.horario}:</strong> ${lugar.horario}</p>`;
      if (lugar.objetivo) html += `<p><strong>${t.objetivo}:</strong> ${lugar.objetivo}</p>`;
      if (lugar.descripcion) html += `<p><strong>${t.descripcion}:</strong> ${lugar.descripcion}</p>`;
      if (lugar.micros) html += `<p><strong>${t.micros}:</strong> ${lugar.micros}</p>`;
      if (lugar.grupo === 'turistica' && lugar.micros) {
        const disp = lineasDisponiblesDeTexto(lugar.micros);
        if (disp.length) {
          const chips = disp
            .map(
              (num) =>
                `<button type="button" class="micro-chip tur-micro-chip" data-tur-linea="${num}" data-lat="${lugar.coords[0]}" data-lng="${lugar.coords[1]}" style="--lc:${lineasMicro[num].color}">${num}</button>`
            )
            .join('');
          html += `<div class="tur-micros"><span class="tur-micros__label">${t.turIrMicro}:</span>${chips}</div>`;
        }
      }
      html += `
        <div class="info-acciones">
          <button type="button" class="btn-comollegar" data-lat="${lugar.coords[0]}" data-lng="${lugar.coords[1]}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            ${t.comoLlegar}
          </button>
        </div>`;
      panelDe(lugar).innerHTML = html;
    }

    // ===== Cómo llegar GOOGLE MAPSSSS=====
    function comoLlegar(lat, lng) {
      const destino = `${lat},${lng}`;
      let url = `https://www.google.com/maps/dir/?api=1&destination=${destino}&travelmode=walking`;
      if (userCoords) url += `&origin=${userCoords[0]},${userCoords[1]}`;
      window.open(url, '_blank');
    }

    // Delegación de clicks 
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-comollegar');
      if (btn) comoLlegar(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lng));
      const tur = e.target.closest('.tur-micro-chip');
      if (tur) {
        irEnMicro(tur.getAttribute('data-tur-linea'), [
          parseFloat(tur.dataset.lat),
          parseFloat(tur.dataset.lng)
        ]);
      }
    });

    function aplicarIdioma(codigo) {
      idiomaActual = codigo;
      document.documentElement.lang = codigo;
      const t = traducciones[codigo];

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const clave = el.getAttribute('data-i18n');
        if (t[clave]) el.textContent = t[clave];
      });

      // traducibles 
      document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
        const clave = el.getAttribute('data-i18n-ph');
        if (t[clave]) el.setAttribute('placeholder', t[clave]);
      });

      if (seleccionInfo) mostrarInfo(seleccionInfo);
      if (seleccionInfo2) mostrarInfo(seleccionInfo2);
    }

    // ===== Grupos  =====
    const lugares = [
      {
        nombre: 'Fundación Madre Josefa',
        direccion: 'Av. Balmaceda 2774, La Serena',
        contacto: '51 2290943 / direcionmisionlaserena@fundacionmadrejosefa.cl',
        objetivo: 'Atención psicosocial, apoyo legal gratuito para visas, kits de higiene y talleres de emprendimiento para mujeres y familias.',
        coords: [-29.92397540700319, -71.25649424725107],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'INCAMI (Instituto Católico Chileno de Migración)',
        direccion: 'Guatemala 2402, La Serena',
        contacto: 'laserena@incami.cl',
        objetivo: 'Brinda orientación legal, acompañamiento social, apoyo humanitario y redes de integración.',
        coords: [-29.878823814300493, -71.24594419143352],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'Sección de Migración y Diversidad (Municipalidad de La Serena)',
        direccion: 'Los Carrera 281, La Serena',
        contacto: 'migracion@laserena.cl / 512427823',
        objetivo: 'Ofrece orientación para regularización migratoria, asesoría jurídica, acompañamiento social y jornadas de sensibilización.',
        coords: [-29.90041515861478, -71.25135827608834],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'Oficina de atención al Migrante, Arzobispado de La Serena',
        direccion: 'Gregorio Cordovez 235, La Serena',
        contacto: '(+56) 9 3237237',
        objetivo: 'Otorga alimentación y abrigo, además de asistencia legal y acompañamiento espiritual.',
        coords: [-29.903285364507745, -71.25379219143237],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'Departamento de Extranjería y Policía Internacional (PDI)',
        direccion: 'Balmaceda 1010, La Serena',
        contacto: '(51) 267 1046 / pdimigraciones.sna@investigaciones.cl',
        objetivo: 'Controlar el ingreso y egreso de extranjeros en las fronteras, fiscalizar su permanencia legal y garantizar que el movimiento de personas sea seguro, ordenado y regular, conforme a la legislación nacional.',
        coords: [-29.908828075648508, -71.2498998625961],
        grupo: 'inmigrantes',
        categoria: 1
      },
      {
        nombre: 'Casa Migrantes Diversidad y Pueblos Originarios (Muni. La Serena)',
        direccion: 'Libertador Bernardo O´Higgins 150, La Serena',
        contacto: 'pamela.leon@laserena.cl',
        objetivo: 'Entrega atención integral de manera gratuita y con enfoque de derechos a toda persona que ha sido discriminada en el marco del programa municipal.',
        coords: [-29.898967256512737, -71.24797637608843],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'INDH (Instituto Nacional de Derechos Humanos)',
        direccion: 'Los Carrera 380, oficina 326, La Serena',
        contacto: '(51) 228878887',
        objetivo: 'Entrega orientación y patrocinio legal gratuito sobre visas, acceso al procedimiento de la condición de refugiado/a y acceso a beneficios sociales. Recibe denuncias de vulneraciones a los derechos humanos.',
        coords: [-29.901563962230824, -71.25092854725227],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'FOSIS',
        direccion: 'Av. Francisco de Aguirre 781, La Serena',
        contacto: '(51) 2207000',
        objetivo: 'Ofrece programas de emprendimiento, capacitación y apoyo económico para personas vulnerables y migrantes (con cédula de identidad).',
        coords: [-29.90681537231344, -71.24708194725196],
        grupo: 'inmigrantes',
        categoria: 4
      },
      {
        nombre: 'Fundación Casa De La Esperanza',
        direccion: 'Av. Balmaceda 1071, La Serena',
        contacto: '9 6787 2975',
        objetivo: 'Apoyo social y acompañamiento para personas y familias en situación vulnerable.',
        coords: [-29.909367676897187, -71.25033940492382],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'SERMIG',
        direccion: 'Av. El Santo 1462, La Serena',
        contacto: 'No especificado',
        objetivo: 'Proporciona acompañamiento en procesos migratorios y derivación a redes de apoyo.',
        coords: [-29.912714084283763, -71.25615303375967],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'ADRA Chile FAE PRO La Serena',
        direccion: 'Larrain Alcalde 1698, La Serena',
        contacto: '(51) 252 0476',
        objetivo: 'Programas sociales y apoyo a familias y niños en situación vulnerable.',
        coords: [-29.91636539136981, -71.24967073375949],
        grupo: 'inmigrantes',
        categoria: 3
      },
      {
        nombre: 'Servicio de Urgencias Hospital San Juan de Dios de La Serena',
        direccion: 'Anfión Muñoz 673, La Serena',
        contacto: '(51) 2 333378 / Urgencia: 131',
        objetivo: 'Entrega atención de urgencia.',
        coords: [-29.908667293602402, -71.24841958592594],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Servicio de Urgencias Hospital San Pablo de Coquimbo',
        direccion: 'Av. Videla esquina Darío Salas s/n, Coquimbo',
        contacto: '(51) 2 2336715 / Urgencia: 131',
        objetivo: 'Entrega atención de urgencia.',
        coords: [-29.96820868114863, -71.33620360492097],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Cruz Roja',
        direccion: 'Cienfuego 470, La Serena',
        contacto: '(51) 2224720',
        objetivo: 'Dispone de voluntarios que realizan labores para la comunidad y apoyan el desempeño de profesionales del sector de salud (matronas, fonoaudiólogo/a, técnico/a en enfermería y podólogo/a).',
        coords: [-29.90256296249031, -71.24709713376024],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'CESFAM - SAPU Tierras Blancas',
        direccion: 'Calle Linares 915, Tierras Blancas, Coquimbo',
        contacto: '(51) 2 239067 / cestierrasblancas@municoquimbo.cl',
        objetivo: 'Facilita servicios de atención primaria de salud, alta resolutividad, toma de muestras y rayos X sin riesgo vital.',
        coords: [-29.962027490250193, -71.25588114724918],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Consultorio SAR Dr. Emilio Schaffhauser',
        direccion: 'Colón 227, La Serena',
        contacto: '(51) 2 207823',
        objetivo: 'Facilita servicios de atención primaria de salud, alta resolutividad, toma de muestras y rayos X sin riesgo vital.',
        coords: [-29.89964965382399, -71.25322446259648],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'CESFAM Raúl Silva Henríquez',
        direccion: 'Cuatro Esquinas 89, sector La Pampa, La Serena',
        contacto: 'No especificado',
        objetivo: 'Facilita servicios de atención primaria de salud, alta resolutividad, toma de muestras y rayos X sin riesgo vital.',
        coords: [-29.93267542004474, -71.25864913673655],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'CESFAM - SAPU Las Compañías',
        direccion: 'Esmeralda s/n, costado Delegación Municipal',
        contacto: 'CESFAM: (51) 2 253882 / SAPU: (51) 2 253882',
        objetivo: 'Facilita servicios de atención primaria de salud, alta resolutividad, toma de muestras y rayos X sin riesgo vital.',
        coords: [-29.878067810416084, -71.24523650855056],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'SAPU Las Compañías',
        direccion: 'Teniente Merino 2150, La Serena',
        contacto: '(51) 2 253882',
        objetivo: 'Facilita servicios de atención primaria de salud, alta resolutividad, toma de muestras y rayos X sin riesgo vital.',
        coords: [-29.878206022436785, -71.24522317830619],
        grupo: 'inmigrantes',
        categoria: 2
      },

      // ===== Consulados =====
      {
        nombre: 'Consulado de Alemania',
        direccion: 'Matta 665, La Serena, Chile.',
        objetivo: 'Representación consular de Alemania para la atención y asistencia de connacionales y trámites oficiales.',
        coords: [-29.90513667442424, -71.25299380226544],
        grupo: 'inmigrantes',
        categoria: 5
      },
      {
        nombre: 'Consulado de Francia',
        direccion: 'Lycée Frédéric Mistral, Avenida Atlántico 900, Serena Golf, La Serena, Chile.',
        objetivo: 'Representación consular de Francia para la atención y asistencia de connacionales y trámites oficiales.',
        coords: [-29.843884377505706, -71.27214347417386],
        grupo: 'inmigrantes',
        categoria: 5
      },
      {
        nombre: 'Consulado de Hungría',
        direccion: 'Los Ibiscos N° 250, Coquimbo, Chile.',
        objetivo: 'Representación consular de Hungría para la atención y asistencia de connacionales y trámites oficiales.',
        coords: [-29.980709520751706, -71.3375101440005],
        grupo: 'inmigrantes',
        categoria: 5
      },
      {
        nombre: 'Consulado de Italia',
        direccion: 'Cienfuegos 361, La Serena, Chile.',
        objetivo: 'Representación consular de Italia para la atención y asistencia de connacionales y trámites oficiales.',
        coords: [-29.90131994300091, -71.24709486055373],
        grupo: 'inmigrantes',
        categoria: 5
      },
      {
        nombre: 'Consulado de Polonia',
        direccion: 'Las Añañucas 1060, La Serena, Chile.',
        objetivo: 'Representación consular de Polonia para la atención y asistencia de connacionales y trámites oficiales.',
        coords: [-29.92100796333494, -71.24659221645128],
        grupo: 'inmigrantes',
        categoria: 5
      },

      // ===== Ruta turística =====
      {
        nombre: 'Liceo Gregorio Cordovez',
        direccion: 'Gandarillas 940, Teatro Jorge Peña Hen, La Serena',
        horario: 'Lunes a Viernes de 07:00 a 18:00 hrs.',
        descripcion: 'Segundo colegio más antiguo de Chile, fundado en 1821, cuyo edificio actual data de 1869.',
        micros: 'Línea 1, 2, 3, 8 y 11, Línea E01 y E02',
        coords: [-29.90276926396383, -71.24348873376019],
        grupo: 'turistica'
      },
      {
        nombre: 'Liceo de Niñas Gabriela Mistral',
        direccion: 'Benavente N° 580, La Serena',
        horario: 'Lunes a Viernes de 08:30 a 16:30 hrs.',
        descripcion: 'Edificio de 1952, hito de la arquitectura educacional donde ejerció como inspectora la poetisa Gabriela Mistral.',
        micros: 'Línea 1, 2, 3, 8 y 11, Línea E01 y E02',
        coords: [-29.90328456497379, -71.24522777608811],
        grupo: 'turistica'
      },
      {
        nombre: 'Museo Arqueológico de La Serena',
        direccion: 'Cienfuegos esquina Cordovez S/N, La Serena',
        horario: 'Martes a Viernes: 09:30 a 17:30 hrs. Sábado: 10:30 a 17:30 hrs.',
        descripcion: 'Espacio cultural de conservación de la cultura diaguita y vestigios patrimoniales de la Región de Coquimbo.',
        micros: 'Línea 3, 8, 11 y 13, Línea E01 y E02',
        coords: [-29.903131463710725, -71.2469772337602],
        grupo: 'turistica'
      },
      {
        nombre: 'Iglesia San Francisco',
        direccion: 'Calle Balmaceda esquina Eduardo de la Barra, La Serena',
        horario: '9:30 AM a 1:30 PM de lunes a viernes, cerrado los sábados y con un horario especial de 10 AM a 12:30 PM los domingos.',
        descripcion: 'Primera iglesia construida en piedra de la ciudad, sobreviviente a incursiones de piratas en el periodo colonial.',
        micros: 'Línea 6 (Balmaceda), Línea E01 y E02',
        coords: [-29.9046623455967, -71.24994235099992],
        grupo: 'turistica'
      },
      {
        nombre: 'Secretaría Regional Ministerial de Educación (SECREDUC Coquimbo)',
        direccion: 'Avenida Francisco de Aguirre N° 260, La Serena',
        horario: 'Lunes a Viernes: 09:00 a 13:45 hrs.',
        descripcion: 'Edificio institucional diseñado por José Aracena en el marco del Plan Serena para la administración pública educativa.',
        micros: 'Línea 1 (La Florida - El Milagro) y 2 (La Florida - Olivar), Línea E01 y E02',
        coords: [-29.905079487378508, -71.25357470001845],
        grupo: 'turistica'
      },
      {
        nombre: 'Iglesia Santo Domingo',
        direccion: 'Gregorio Cordovez N° 235 (esquina Pedro Pablo Muñoz), La Serena',
        horario: 'Viernes: 12:00 hrs. Domingo: 11:30 hrs y 19:00 hrs (Misas). Abierto al público en horarios de liturgia.',
        descripcion: 'Templo religioso del siglo XVIII edificado con piedra caliza de Alto Peñuelas y maderas nobles.',
        micros: 'Línea 3, 8 y 11, Línea E01 y E02',
        coords: [-29.903275264019392, -71.25352993376028],
        grupo: 'turistica'
      },
      {
        nombre: 'Casa Museo Gabriel González Videla (Museo Histórico Regional)',
        direccion: 'Calle Manuel Antonio Matta N° 495 (esquina Cordovez), La Serena',
        horario: 'Lunes: 09:15 a 14:00 hrs. Martes a Jueves: 09:15 a 17:50 hrs. Viernes: 10:00 a 14:00 hrs.',
        descripcion: 'Antigua residencia presidencial que hoy alberga exhibiciones de historia regional y bellas artes.',
        micros: 'Línea 3, 8 y 11, Línea E01 y E02',
        coords: [-29.902975984802413, -71.25282309399604],
        grupo: 'turistica'
      },
      {
        nombre: 'Iglesia Catedral de La Serena',
        direccion: 'Calle Los Carrera esquina Gregorio Cordovez N°327, La Serena',
        horario: 'Domingo a Jueves: 12:00 hrs. Sábado: 18:00 hrs (Horarios de Misa). Abierta durante servicios litúrgicos.',
        descripcion: 'Sede episcopal de la arquidiócesis, construida en estilo neoclásico frente a la Plaza de Armas.',
        micros: 'Línea 3, 8 y 11, Línea E01 y E02',
        coords: [-29.90275836239489, -71.25118857608817],
        grupo: 'turistica'
      },
      {
        nombre: 'Intendencia Regional (Edificio del Gobierno Regional de Coquimbo)',
        direccion: 'Calle Arturo Prat N° 350, La Serena',
        horario: 'Lunes a Jueves: 08:30 a 17:30 hrs. Viernes: 08:30 a 16:30 hrs.',
        descripcion: 'Sede administrativa y gubernamental regional construida frente a la Plaza de Armas en 1952.',
        micros: 'Línea 3, 8 y 11, Línea E01 y E02',
        coords: [-29.90182956515259, -71.25180078283414],
        grupo: 'turistica'
      },
      {
        nombre: 'Casa Herreros',
        direccion: 'Calle Manuel Antonio Matta N° 347, La Serena',
        horario: 'Visualización desde el exterior (Inmueble privado protegido). Consultas en horario municipal.',
        descripcion: 'Residencia patrimonial del siglo XIX que destaca por su arquería de medio punto y carpintería ornamental.',
        micros: 'Línea 3, 8 y 11, Línea E01 y E02',
        coords: [-29.901283236065304, -71.25255954359812],
        grupo: 'turistica'
      },
      {
        nombre: 'Plaza de Armas de La Serena',
        direccion: 'Gregorio Cordovez 371, La Serena',
        horario: 'Libre de horario.',
        descripcion: 'Eje del trazado urbano inicial del siglo XVI.',
        micros: 'Línea 3, 8 y 11, Línea E01 y E02',
        coords: [-29.9024870639537, -71.25193260492432],
        grupo: 'turistica'
      },
      {
        nombre: 'Faro Monumental de La Serena',
        direccion: 'Avenida Del Mar esquina Avenida Francisco de Aguirre, La Serena',
        horario: 'Lunes a Sábado: 10:00 a 14:00 y 15:00 a 18:00 hrs. Domingo: 10:00 a 14:00 y 15:00 a 17:00 hrs.',
        descripcion: 'Estructura icónica y mirador costero de la ciudad, edificado originalmente bajo la gestión del Plan Serena.',
        micros: 'Línea 1 y 2, Línea E01 y E02',
        coords: [-29.90534126872925, -71.2742469319079],
        grupo: 'turistica'
      }
    ];

    
    // Inmigrantes azul
    const svgFaro = `
      <svg class="pin__glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 8 L7 8 L8.5 6 L15.5 6 L17 8 L20 8 A1.5 1.5 0 0 1 21.5 9.5 L21.5 17.5 A1.5 1.5 0 0 1 20 19 L4 19 A1.5 1.5 0 0 1 2.5 17.5 L2.5 9.5 A1.5 1.5 0 0 1 4 8 Z"/>
        <circle cx="12" cy="13" r="3.2"/>
      </svg>`;

    // Bandera para los consulados
    const svgConsulado = `
      <svg class="pin__glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 21 L5 4"/>
        <path d="M5 4.5 C8 2.5, 11 6.5, 14 4.5 C16 3.2, 18 4, 19.5 4 L19.5 12.5 C16 14.5, 12 10.5, 8.5 12.5 C7 13.3, 6 12.7, 5 12.5"/>
      </svg>`;

    function crearIcono(lugar) {
      if (lugar.grupo === 'turistica') {
        return L.divIcon({
          className: 'marcador-pin',
          html: `<span class="pin pin--verde pin--faro">${svgFaro}</span>`,
          iconSize: [32, 42],
          iconAnchor: [16, 40],
          popupAnchor: [0, -38]
        });
      }
      // Consulados pin diferenciado de bandera
      if (lugar.categoria === 5) {
        return L.divIcon({
          className: 'marcador-pin',
          html: `<span class="pin pin--cat5 pin--consulado">${svgConsulado}</span>`,
          iconSize: [32, 42],
          iconAnchor: [16, 40],
          popupAnchor: [0, -38]
        });
      }
      // Color del pin según la categoría de la institución (1 a 4)
      const claseCat = `pin--cat${lugar.categoria || 1}`;
      return L.divIcon({
        className: 'marcador-pin',
        html: `<span class="pin ${claseCat}"></span>`,
        iconSize: [28, 36],
        iconAnchor: [14, 32],
        popupAnchor: [0, -30]
      });
    }
    const marcadores = [];

    function mapaDe(lugar) {
      return lugar.grupo === 'turistica' ? map2 : map;
    }

    lugares.forEach((lugar) => {
      const marcador = L.marker(lugar.coords, { icon: crearIcono(lugar) });
      marcador.bindPopup(`<div class="popup-content"><h3>${lugar.nombre}</h3></div>`);
      marcador.on('click', () => {
        mostrarInfo(lugar);
      });
      marcador.addTo(mapaDe(lugar));
      marcadores.push({ marcador, grupo: lugar.grupo, lugar });
    });

    // Encuadra 
    const coordsTuristica = lugares.filter((l) => l.grupo === 'turistica').map((l) => l.coords);
    if (coordsTuristica.length) {
      map2.fitBounds(L.latLngBounds(coordsTuristica), { padding: [50, 50] });
    }

    // ===== Ir a un lugar =====
    function irALugar(lugar) {
      const registro = marcadores.find((m) => m.lugar === lugar);
      const mapa = mapaDe(lugar);
      mostrarInfo(lugar);
      mapa.setView(lugar.coords, 16, { animate: true });
      if (registro) registro.marcador.openPopup();
      const seccion = lugar.grupo === 'turistica' ? 'ruta' : 'apoyo';
      document.getElementById(seccion)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ===== Botones de la barra =====
    const controlesFiltro = document.querySelectorAll('[data-filtro]');
    controlesFiltro.forEach((el) => {
      el.addEventListener('click', () => {
        const filtro = el.getAttribute('data-filtro');
        const seccion = filtro === 'turistica' ? 'ruta' : 'apoyo';
        document.getElementById(seccion)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Botón de la top bar hacia la sección de micros
    document.getElementById('btnMicro')?.addEventListener('click', () => {
      document.getElementById('micros')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    
    const topbar = document.querySelector('.topbar');
    const refMapas = document.querySelector('.sc-mapas-intro');
    function actualizarTopbar() {
      if (!topbar || !refMapas) return;
      const limite = refMapas.getBoundingClientRect().bottom;
      topbar.classList.toggle('topbar--oculta', limite <= topbar.offsetHeight);
    }
    window.addEventListener('scroll', actualizarTopbar, { passive: true });
    window.addEventListener('resize', actualizarTopbar);
    actualizarTopbar();

    // ===== Filtro por categoría (mapa de apoyo al migrante) =====
    const botonesCategoria = document.querySelectorAll('[data-cat]');

    function aplicarFiltroCategoria(cat) {
      marcadores.forEach(({ marcador, lugar }) => {
        if (lugar.grupo !== 'inmigrantes') return;
        const visible = cat === 'todos' || String(lugar.categoria) === cat;
        if (visible && !map.hasLayer(marcador)) {
          marcador.addTo(map);
        } else if (!visible && map.hasLayer(marcador)) {
          map.removeLayer(marcador);
        }
      });
    }

    botonesCategoria.forEach((btn) => {
      btn.addEventListener('click', () => {
        botonesCategoria.forEach((b) => b.classList.remove('activo'));
        btn.classList.add('activo');
        aplicarFiltroCategoria(btn.getAttribute('data-cat'));
      });
    });

    // ===== Estoy aquí al usuario en el mapa =====
    function crearIconoUsuario() {
      return L.divIcon({
        className: 'marcador-pin marcador-usuario',
        html: `<span class="pin pin--usuario"></span>`,
        iconSize: [28, 36],
        iconAnchor: [14, 32],
        popupAnchor: [0, -30]
      });
    }

    const marcadoresUsuario = { map: null, map2: null };

    function mostrarUbicacion(mapa, clave) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          userCoords = [pos.coords.latitude, pos.coords.longitude];
          const t = traducciones[idiomaActual];
          if (marcadoresUsuario[clave]) mapa.removeLayer(marcadoresUsuario[clave]);
          marcadoresUsuario[clave] = L.marker(userCoords, { icon: crearIconoUsuario(), zIndexOffset: 1000 })
            .addTo(mapa)
            .bindPopup(`<div class="popup-content"><h3>${t.tuUbicacion}</h3></div>`);
          mapa.setView(userCoords, 16, { animate: true });
          marcadoresUsuario[clave].openPopup();
          botonesUbicacion.forEach((b) => b.classList.remove('cargando'));
        },
        () => {
          alert(traducciones[idiomaActual].ubicacionError);
          botonesUbicacion.forEach((b) => b.classList.remove('cargando'));
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }

    const botonesUbicacion = document.querySelectorAll('.btn-ubicacion');
    botonesUbicacion.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!navigator.geolocation) {
          alert(traducciones[idiomaActual].ubicacionError);
          return;
        }
        const clave = btn.getAttribute('data-mapa'); // 'map' o 'map2'
        const mapa = clave === 'map2' ? map2 : map;
        btn.classList.add('cargando');
        mostrarUbicacion(mapa, clave);
      });
    });

    // ===== Dropdown de idioma =====
    const btnIdioma = document.getElementById('btnIdioma');
    const menuIdioma = document.getElementById('menuIdioma');

    btnIdioma.addEventListener('click', (e) => {
      e.stopPropagation();
      menuIdioma.classList.toggle('oculto');
    });

    menuIdioma.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
        const codigo = item.getAttribute('data-idioma');
        aplicarIdioma(codigo);

        menuIdioma.querySelectorAll('li').forEach((l) => l.classList.remove('activo'));
        item.classList.add('activo');

        menuIdioma.classList.add('oculto');
      });
    });

    document.addEventListener('click', (e) => {
      if (!btnIdioma.contains(e.target) && !menuIdioma.contains(e.target)) {
        menuIdioma.classList.add('oculto');
      }
    });

    // ===== Buscador =====
    // Quita acentos y mayúsculas para comparar
    function normaliza(txt) {
      return txt.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    }

    function initBuscador(inputId, listaId, grupo) {
      const input = document.getElementById(inputId);
      const lista = document.getElementById(listaId);
      if (!input || !lista) return;

      function cerrar() {
        lista.classList.add('oculto');
        lista.innerHTML = '';
      }

      function render(consulta) {
        const q = normaliza(consulta.trim());
        if (!q) {
          cerrar();
          return;
        }

        const coincidencias = lugares.filter(
          (l) =>
            l.grupo === grupo &&
            (normaliza(l.nombre).includes(q) || normaliza(l.direccion).includes(q))
        );

        const t = traducciones[idiomaActual];
        lista.innerHTML = '';

        if (coincidencias.length === 0) {
          const vacio = document.createElement('li');
          vacio.className = 'vacio';
          vacio.textContent = t.buscadorVacio;
          lista.appendChild(vacio);
          lista.classList.remove('oculto');
          return;
        }

        coincidencias.forEach((lugar) => {
          const li = document.createElement('li');
          const colorPunto = lugar.grupo === 'inmigrantes' ? 'azul' : 'verde';
          const etiquetaGrupo =
            lugar.grupo === 'inmigrantes' ? t.leyendaInmigrantes : t.leyendaTuristica;
          li.innerHTML = `
            <span class="punto punto--${colorPunto}"></span>
            <span class="res-nombre">${lugar.nombre}</span>
            <span class="res-grupo">${etiquetaGrupo}</span>
          `;
          li.addEventListener('click', () => {
            input.value = lugar.nombre;
            cerrar();
            irALugar(lugar);
          });
          lista.appendChild(li);
        });

        lista.classList.remove('oculto');
      }

      input.addEventListener('input', () => render(input.value));
      input.addEventListener('focus', () => {
        if (input.value.trim()) render(input.value);
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const primero = lista.querySelector('li:not(.vacio)');
          if (primero) primero.click();
        } else if (e.key === 'Escape') {
          cerrar();
          input.blur();
        }
      });
    }

    // Mapa de arriba 
    initBuscador('buscador', 'buscadorResultados', 'inmigrantes');
    initBuscador('buscador2', 'buscadorResultados2', 'turistica');

    // Cerrar resultados al hacer click fuera de cualquier buscador
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.buscador')) {
        document.querySelectorAll('.buscador__resultados').forEach((l) => {
          l.classList.add('oculto');
          l.innerHTML = '';
        });
      }
    });

  
    const mapaPortada = document.querySelector('.sc-map');
    if (mapaPortada) {
      const respaldo = mapaPortada.nextElementSibling;
      const mostrarRespaldo = () => {
        mapaPortada.style.display = 'none';
        if (respaldo) respaldo.style.display = 'flex';
      };
      mapaPortada.addEventListener('error', mostrarRespaldo);
      if (mapaPortada.complete && mapaPortada.naturalWidth === 0) mostrarRespaldo();
    }

    // ===== Recorridos de micro  =====
    const lineasMicro = {
      '1': {
        color: '#E11D48',
        paradas: [
          { n: 'Terminal La Florida', c: [-29.919014272326415, -71.20060623556816] },
          { n: 'Las Orquídeas, 4369', c: [-29.915982747571565, -71.21294443555969] },
          { n: 'Arauco, 4254-4270', c: [-29.91853999999585, -71.21637317789167] },
          { n: 'El Lingue, 4241-4281', c: [-29.921000743220434, -71.21875672967865] },
          { n: 'Arauco, 83-86', c: [-29.91563868055336, -71.22285783557096] },
          { n: 'Emilio Bello Codesido, 924-930', c: [-29.915399217949137, -71.21897132156087] },
          { n: 'Emilio Bello Codesido, 830-842', c: [-29.91402987331815, -71.21787970674306] },
          { n: 'Colo Colo / Esq. Cristóbal Moya Miranda', c: [-29.912071062042756, -71.2191145490683] },
          { n: 'Colo Colo', c: [-29.911346942874278, -71.22032046315078] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo / Esq. Barros Arana', c: [-29.90977645733562, -71.22493263557416] },
          { n: 'Colo Colo, 2455-2499', c: [-29.909145251508953, -71.22809623558193] },
          { n: 'Colo Colo, 935', c: [-29.906576046674076, -71.24411169325421] },
          { n: 'Colo Colo, 802-898', c: [-29.906259241921386, -71.2462029768476] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Matta, 602-680', c: [-29.90507873583579, -71.2527054202373] },
          { n: 'Pasarela Lider', c: [-29.90258624317406, -71.25632643556372] },
          { n: 'Brasil, 201-291', c: [-29.900802834774527, -71.25267459324257] },
          { n: 'Brasil, 401-485', c: [-29.900684233114948, -71.24988373557136] },
          { n: 'Brasil, 601-689', c: [-29.900609833670547, -71.24699775091533] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460-1490', c: [-29.88790881461426, -71.2428456509129] },
          { n: 'Bandera', c: [-29.88601126909742, -71.24345185014354] },
          { n: 'Diecinueve De Junio, 1711-1777', c: [-29.884079896700662, -71.24519530673443] },
          { n: 'Gaspar Marín, 2741-2799', c: [-29.88199729704393, -71.24159043557316] },
          { n: 'México, 2202-2298', c: [-29.879327494387677, -71.23935879324087] },
          { n: 'México, 2441-2499', c: [-29.876192422673828, -71.23839320674013] },
          { n: 'Bolivia, 2669-2679', c: [-29.872559491462695, -71.23455230673827] },
          { n: 'Circunvalación Monjitas Oriente', c: [-29.871559375988717, -71.23184327558461] },
          { n: 'Ernesto Sábato, 3566-3594', c: [-29.864201161362143, -71.23603973556845] },
          { n: 'Jorge Inostroza, 2775-2795', c: [-29.86461876218473, -71.23720230674579] },
          { n: 'Monjitas Poniente', c: [-29.86568766433904, -71.23965920673646] }
        ],
        paradasVuelta: [
          { n: 'Monjitas Poniente', c: [-29.86568876433904, -71.23965920673646] },
          { n: 'Nicolás Munizaga, 2644', c: [-29.86873569729674, -71.24212150492589] },
          { n: 'Viña Del Mar, 2564-2592', c: [-29.87168960991441, -71.24269010492571] },
          { n: 'Monjitas, 2607-2633', c: [-29.873680580353774, -71.24565657790959] },
          { n: 'Pedro De Valdivia, 218-296', c: [-29.876834310218655, -71.25073673376151] },
          { n: 'El Brillador', c: [-29.880653020633353, -71.25020023376124] },
          { n: 'Alejandro Flores, 1946-1950', c: [-29.882755427135542, -71.24770043376127] },
          { n: 'Nicaragua, 1510-1580', c: [-29.886555408205965, -71.24263646441806] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'Higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Los Carrera, 216-260', c: [-29.89936122192691, -71.25076354907347] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899414717642706, -71.25361209325423] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Juan De Dios Peni, 761-799', c: [-29.907645548559397, -71.2468582355819] },
          { n: 'Juan De Dios Peni, 967-997', c: [-29.907845548899896, -71.24424043558189] },
          { n: 'Rodolfo Wagenknecht', c: [-29.913595085679614, -71.23617767608765] },
          { n: 'Juan Georgini Runi, 1543-1547', c: [-29.9195628937338, -71.23677850492342] },
          { n: 'San Joaquín, 1516-1532', c: [-29.923050200986636, -71.23762613375926] },
          { n: 'Alberto Aguirre Luco, 1277-1285', c: [-29.930655950061965, -71.24364494725079] },
          { n: 'Alberto Arenas Carvajal, 3211-3291', c: [-29.937867058530564, -71.24720791470989] },
          { n: 'Avenida Rodolfo Wagenknecht, 1485-1489', c: [-29.943402640370486, -71.24527577608617] },
          { n: 'Avenida Rodolfo Wagenknecht', c: [-29.945973138138616, -71.24628423375808] },
          { n: 'Los Plátanos, 1557-1561', c: [-29.949742737595216, -71.2439561049218] }
        ]
      },
      '2': {
        color: '#2563EB',
        paradas: [
          { n: 'Terminal La Florida', c: [-29.919014272326415, -71.20060623556816] },
          { n: 'Arauco, 4462-4474', c: [-29.919665171569026, -71.21328773558191] },
          { n: 'Arauco, 4254-4270', c: [-29.91853999999585, -71.21637317789167] },
          { n: 'Arauco, 4115-4301', c: [-29.917070767420938, -71.21959623558192] },
          { n: 'Los Placeres', c: [-29.914350725490714, -71.22511622883613] },
          { n: 'Emilio Bello Codesido, 924-930', c: [-29.915399217949137, -71.21897132156087] },
          { n: 'Emilio Bello Codesido, 830-842', c: [-29.91402987331815, -71.21787970674306] },
          { n: 'Colo Colo / Esq. Cristóbal Moya Miranda', c: [-29.912071062042756, -71.2191145490683] },
          { n: 'Colo Colo', c: [-29.911346942874278, -71.22032046315078] },
          { n: 'Colo Colo / Esq. Barros Arana', c: [-29.90977645733562, -71.22493263557416] },
          { n: 'Colo Colo, 2455-2499', c: [-29.909145251508953, -71.22809623558193] },
          { n: 'Colo Colo, 935', c: [-29.906576046674076, -71.24411169325421] },
          { n: 'Colo Colo, 802-898', c: [-29.906259241921386, -71.2462029768476] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Pasarela Lider', c: [-29.90258624317406, -71.25632643556372] },
          { n: 'Juan José Latorre, 480', c: [-29.88502989660634, -71.25345643558192] },
          { n: 'Juan José Latorre, 404-416', c: [-29.879615889580904, -71.25280200674577] },
          { n: 'Juan José Latorre, 306-350', c: [-29.87705297546627, -71.25189003557504] },
          { n: 'Monjitas, 2301-2399', c: [-29.878192492211678, -71.24618235092647] },
          { n: 'Gaspar Marín, 2741-2799', c: [-29.88199729704393, -71.24159043557316] },
          { n: 'Gaspar Marín, 3302-3400', c: [-29.88376479600169, -71.23506723558193] },
          { n: 'Argentina, 3640-3698', c: [-29.882136807084958, -71.23076500674578] },
          { n: 'Dionisio Argandoña, 4003-4063', c: [-29.88150429104572, -71.22579755092647] },
          { n: 'El Tofo, 4572', c: [-29.882908901231453, -71.22266473558196] },
          { n: 'Cabo 2° Pedro Méndez', c: [-29.885048500984546, -71.21769726441804] }
        ]
      },
      '3': {
        color: '#16A34A',
        paradas: [
          { n: 'Escul Virginio Arias, 3477-3479', c: [-29.868917408680453, -71.2281738337619] },
          { n: 'Capellán Nicolás Correa, 2907-2973', c: [-29.870303373589433, -71.2347561220827] },
          { n: 'Aurora, 2902-2992', c: [-29.86989406918672, -71.2403458778981] },
          { n: 'Circunvalación Monjitas Poniente, 2994-3006', c: [-29.86568876433904, -71.23965920673646] },
          { n: 'Monjitas, 2607-2633', c: [-29.873680580353774, -71.24565657790959] },
          { n: 'Monjitas, 2301-2399', c: [-29.878192492211678, -71.24618235092647] },
          { n: 'Diecinueve De Junio, 1711-1777', c: [-29.884079896700662, -71.24519530673443] },
          { n: 'La Conquista, 1605-1629', c: [-29.885485699781867, -71.24577466440887] },
          { n: 'Bandera', c: [-29.88601126909742, -71.24345185014354] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'Higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Los Carrera, 216-260', c: [-29.899482132936626, -71.25080646441206] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899554232258293, -71.25357990674578] },
          { n: 'Pasarela Lider', c: [-29.90258624317406, -71.25632643556372] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Juan De Dios Peni, 761-799', c: [-29.907645548559397, -71.2468582355819] },
          { n: 'Juan De Dios Peni, 967-997', c: [-29.907845548899896, -71.24424043558189] },
          { n: 'Esmeralda, 851-879', c: [-29.9068155931651, -71.24384071346725] }
        ]
      },
      '4': {
        color: '#EA580C',
        paradas: [
          { n: 'Cabo 2° Pedro Méndez', c: [-29.885048500984546, -71.21769726441804] },
          { n: 'Juan José Urizar, 4001-4061', c: [-29.881513593564172, -71.2253791355819] },
          { n: 'Argentina, 3640-3698', c: [-29.882136807084958, -71.23076500674578] },
          { n: 'Guatemala, 2749-2799', c: [-29.88050889664148, -71.24091450674578] },
          { n: 'Nicaragua, 1510-1580', c: [-29.886555408205965, -71.24263646441806] },
          { n: 'Nicaragua, 1460', c: [-29.891094715283362, -71.24371470674575] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'Higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Brasil, 601-689', c: [-29.900609833670547, -71.24699775091533] },
          { n: 'Brasil, 805-895', c: [-29.9006005343581, -71.24400440674577] },
          { n: 'Infante, 407-491', c: [-29.90175383606265, -71.24421359325422] },
          { n: 'Infante, 547-599', c: [-29.903944040662992, -71.2445086490735] },
          { n: 'Lautaro, 801-899', c: [-29.905273443736966, -71.24486186441426] },
          { n: 'Colo Colo, 802-898', c: [-29.906259241921386, -71.2462029768476] },
          { n: 'Esmeralda, 851-879', c: [-29.9068155931651, -71.24384071346725] },
          { n: 'Colo Colo', c: [-29.911346942874278, -71.22032046315078] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo, 2927', c: [-29.91092375532532, -71.22288996441807] },
          { n: 'Los Nardos, 157-162', c: [-29.91693126714083, -71.22056189325419] },
          { n: 'Pichanilla, 1026-1078', c: [-29.91902356834006, -71.21573385092651] },
          { n: 'Panorámica, 1001-1009', c: [-29.92056255393121, -71.21176957116383] },
          { n: 'Terminal La Florida', c: [-29.919014272326415, -71.20060623556816] }
        ]
      },
      '7': {
        color: '#7C3AED',
        paradas: [
          { n: 'Los Plátanos, 1557-1561', c: [-29.949928660346398, -71.24393464724974] },
          { n: 'Avenida Guillermo Ulriksen, 5100-5106', c: [-29.94703754334604, -71.24215360492192] },
          { n: 'Avenida Cuatro Esquinas', c: [-29.944415938891368, -71.24227164725006] },
          { n: 'Alberto Arenas Carvajal, 3030-3180', c: [-29.93613222678479, -71.24606970492246] },
          { n: 'Alberto Arenas Carvajal, 2803-2819', c: [-29.931037119389156, -71.24361273375892] },
          { n: 'Guillermo Ulriksen', c: [-29.927982715236844, -71.23710039143164] },
          { n: 'San Joaquín, 1516-1532', c: [-29.923068499625945, -71.23762613375929] },
          { n: 'Rodolfo Wagenknecht', c: [-29.913595085679614, -71.23617767608765] },
          { n: 'Iginio González', c: [-29.91376718603308, -71.23602753375972] },
          { n: 'Colo Colo, 935', c: [-29.906576046674076, -71.24411169325421] },
          { n: 'Colo Colo, 802-898', c: [-29.906259241921386, -71.2462029768476] },
          { n: 'Cienfuegos, 698', c: [-29.905641369841515, -71.24852653376013] },
          { n: 'Cienfuegos, 560-598', c: [-29.903669667028883, -71.24739473376017] },
          { n: 'Cienfuegos, 402-498', c: [-29.90189326224699, -71.24693337608826] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460-1490', c: [-29.88790881461426, -71.2428456509129] },
          { n: 'Salvador Reyes, 1958-1978', c: [-29.887322829783926, -71.24890203376103] },
          { n: 'Sady Zañartu, 2047-2075', c: [-29.883704324314728, -71.25046847608918] },
          { n: 'Alejandro Flores, 1946-1950', c: [-29.882755427135542, -71.24770043376127] },
          { n: 'Gaspar Marín, 2741-2799', c: [-29.88199729704393, -71.24159043557316] },
          { n: 'México, 2202-2298', c: [-29.879327494387677, -71.23935879324087] },
          { n: 'Aurora, 2436-2440', c: [-29.87646218593195, -71.24171912209042] },
          { n: 'Aurora, 2902-2992', c: [-29.86989406918672, -71.2403458778981] },
          { n: 'Monjitas Poniente', c: [-29.86568876433904, -71.23965920673646] }
        ]
      },
      '8': {
        color: '#0891B2',
        paradas: [
          { n: 'Pasarela Lider', c: [-29.90258624317406, -71.25632643556372] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Juan De Dios Peni, 761-799', c: [-29.907645548559397, -71.2468582355819] },
          { n: 'Esmeralda, 851-879', c: [-29.9068155931651, -71.24384071346725] },
          { n: 'Colo Colo', c: [-29.911346942874278, -71.22032046315078] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo, 2927', c: [-29.91092375532532, -71.22288996441807] },
          { n: 'Los Placeres', c: [-29.91455996296518, -71.22512159325422] },
          { n: 'Arauco, 83-86', c: [-29.91563868055336, -71.22285783557096] },
          { n: 'Los Nardos, 157-162', c: [-29.91693126714083, -71.22056189325419] },
          { n: 'Pichanilla, 1026-1078', c: [-29.91902356834006, -71.21573385092651] },
          { n: 'Terminal La Florida', c: [-29.919014272326415, -71.20060623556816] }
        ]
      },
      '6': {
        color: '#DB2777',
        paradas: [
          { n: 'Aurora, 3050-3068', c: [-29.86852638116364, -71.24050679324138] },
          { n: 'Jorge Rojas Miranda, 2892-2902', c: [-29.870256873499834, -71.23788896440303] },
          { n: 'Perú, 2735-2785', c: [-29.872443177882396, -71.23618303557292] },
          { n: 'Perú, 2335-2361', c: [-29.87851809005106, -71.23784600674581] },
          { n: 'Guatemala, 2749-2799', c: [-29.88050889664148, -71.24091450674578] },
          { n: 'Nicaragua, 1510-1580', c: [-29.886555408205965, -71.24263646441806] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'Higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Los Carrera, 216-260', c: [-29.899482132936626, -71.25080646441806] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899554232258293, -71.25357990674578] },
          { n: 'Pedro Pablo Muñoz, 340-390', c: [-29.901809634972654, -71.25411096441809] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Urgencia', c: [-29.908585575287535, -71.24844081656357] },
          { n: 'Balmaceda, 1101-1189', c: [-29.91002175312291, -71.25032369323732] },
          { n: 'Balmaceda, 1213-1299', c: [-29.911653812828224, -71.25096204418077] },
          { n: 'Paradero 2', c: [-29.916035032568875, -71.25280602883615] },
          { n: 'Balmaceda, 1701-1885', c: [-29.91765194474557, -71.25396611349153] },
          { n: 'Balmaceda, 2295-2735', c: [-29.92294307784552, -71.25655170674574] },
          { n: 'Balmaceda, 2295-2735', c: [-29.92294307784552, -71.25655170674574] },
          { n: 'Balmaceda, 2581-2865', c: [-29.92410068301468, -71.25714717976267] },
          { n: 'Paradero 6', c: [-29.92771548517216, -71.25837290674575] },
          { n: 'Paradero 7', c: [-29.93198559295166, -71.25971676441809] },
          { n: 'Paradero 8', c: [-29.93664712039143, -71.2613582355819] },
          { n: 'Paradero 9', c: [-29.939516512505783, -71.26244183558191] },
          { n: 'Paradero 10', c: [-29.942210321087448, -71.26424703558195] },
          { n: 'Paradero 11', c: [-29.945870825274707, -71.26688363558193] },
          { n: 'Micaela Godoy De Julia', c: [-29.95528076175616, -71.26785723558193] },
          { n: 'Micaela Godoy De Julia', c: [-29.95528076175616, -71.26785723558193] },
          { n: 'Linares, 321', c: [-29.961434351594686, -71.26361667976266] },
          { n: 'Linares, 801-899', c: [-29.962124432807485, -71.25644983558193] },
          { n: 'Talca, 1168-1198', c: [-29.961781737272865, -71.25234736441806] },
          { n: 'Bio Bio, 880-886', c: [-29.964113546302325, -71.25654633558189] },
          { n: 'Presidente Alessandri, 1001-1099', c: [-29.966836931009002, -71.26327335832644] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961222875924978, -71.26630963558192] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961269351278347, -71.26630963558192] }
        ]
      },
      '9C': {
        color: '#CA8A04',
        paradas: [
          { n: 'Terminal Pan De Azucar', c: [-30.001369428201052, -71.25945390674576] },
          { n: 'Cruce La Cantera', c: [-29.98344027273036, -71.26184103558192] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961213580851695, -71.26630963558192] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961222875924978, -71.26630963558192] },
          { n: 'Presidente Alessandri', c: [-29.967575846756205, -71.26327872209038] },
          { n: 'Llanquihue, 501-537', c: [-29.966530261373098, -71.26226482207916] },
          { n: 'Llanquihue, 866-898', c: [-29.966818372855606, -71.25694329325422] },
          { n: 'René Schneider, 798', c: [-29.964076372299346, -71.2562674490735] },
          { n: 'Alerce, 1201-1225', c: [-29.961966467662254, -71.25189003558197] },
          { n: 'Santiago, 800-898', c: [-29.959345247589734, -71.25605289140117] },
          { n: 'Santiago, 401-497', c: [-29.958722469962517, -71.26254376441807] },
          { n: 'Regimiento Arica, 310-364', c: [-29.952838335117296, -71.26409946441807] },
          { n: 'Regimiento Arica, 601-699', c: [-29.950319126364366, -71.26692120674579] },
          { n: 'Balmaceda Servicio', c: [-29.948952627670316, -71.26780092209037] },
          { n: 'Paradero 11', c: [-29.945870825274707, -71.26688363558193] },
          { n: 'El Chañar, 617', c: [-29.94591292535932, -71.2627794067458] },
          { n: 'Avenida Juan Cisternas, 4739', c: [-29.944395729070212, -71.25938390673203] },
          { n: 'Avenida Juan Cisternas, 3512', c: [-29.93654540653622, -71.25313124907348] },
          { n: 'Avenida Juan Cisternas, 3409', c: [-29.933476106120683, -71.25196181235891] },
          { n: 'Avenida Juan Cisternas, 3055-3119', c: [-29.930845290363568, -71.25055130064361] },
          { n: 'Avenida Juan Cisternas, 2716', c: [-29.927223950879753, -71.24846095461947] },
          { n: 'Avenida Juan Cisternas, 2414', c: [-29.923689198035447, -71.24703706440744] },
          { n: 'Avenida Juan Cisternas, 2062-2070', c: [-29.920310189734487, -71.24556422207044] },
          { n: 'Avenida Juan Cisternas, 1656', c: [-29.91746997856706, -71.24450836440548] },
          { n: 'Benavente, 1085', c: [-29.909221952863163, -71.24686893558193] },
          { n: 'Benavente, 892', c: [-29.906971345726195, -71.24656323558192] },
          { n: 'Cienfuegos, 698', c: [-29.905641369841515, -71.24852653376013] },
          { n: 'Cienfuegos, 402-498', c: [-29.90189326224699, -71.24693337608826] },
          { n: 'Cristóbal Colón, 686', c: [-29.898992218203247, -71.24671370674578] },
          { n: 'Los Carrera, 216-260', c: [-29.89936122192691, -71.25076354907347] },
          { n: 'Colón, 205-299', c: [-29.899414719642706, -71.25361209325423] },
          { n: 'Pedro Pablo Muñoz, 340-390', c: [-29.901716628689265, -71.2540680490735] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Juan José Latorre, 480', c: [-29.884936874663303, -71.25342424907349] },
          { n: 'Juan José Latorre, 404-416', c: [-29.87949491395527, -71.2528234720048] },
          { n: 'Juan José Latorre, 306-350', c: [-29.87699715784586, -71.25189003557095] },
          { n: 'Monjitas, 2302-2398', c: [-29.876424944305523, -71.24573169325421] }
        ]
      },
      '11': {
        color: '#4F46E5',
        paradas: [
          { n: 'Koyan, 3364-3392', c: [-29.8681589692823, -71.23083469325424] },
          { n: 'Janequeo, 3425-3445', c: [-29.870880278238847, -71.2285656220806] },
          { n: 'Jorge González Bastías, 3116', c: [-29.872693885021057, -71.22906576441807] },
          { n: 'Chañar Blanco, 2643', c: [-29.875364480658032, -71.22644129325423] },
          { n: 'Venezuela, 2496-2508', c: [-29.87833208688634, -71.2288016355819] },
          { n: 'Vicente Zorrilla, 1701-1851', c: [-29.88463919791884, -71.2330716355819] },
          { n: 'Vicente Zorrilla, 808-896', c: [-29.90113533811148, -71.24503436441807] },
          { n: 'Los Carrera, 216-260', c: [-29.899482132936626, -71.25080646441806] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899554232258293, -71.25357990674578] },
          { n: 'Pedro Pablo Muñoz, 340-390', c: [-29.901809634972654, -71.25411096441809] },
          { n: 'El Sto, 1060', c: [-29.909473052167, -71.25521603558192] },
          { n: 'Amunátegui, 401-489', c: [-29.90980785326717, -71.25080647790965] },
          { n: 'Benavente, 1085', c: [-29.909314952139624, -71.24690112209038] },
          { n: 'Benavente, 892', c: [-29.907064347103972, -71.24654177790963] }
        ]
      },
      '12': {
        color: '#0D9488',
        paradas: [
          { n: 'Ruta 43, 171', c: [-30.073935798648833, -71.24290456441808] },
          { n: 'Ruta 43, Sector Esfuerzo Campesino', c: [-30.05269122304382, -71.26154485092476] },
          { n: 'Ruta 43', c: [-29.961269351278347, -71.26630963558192] },
          { n: 'Cruce La Cantera - Ruta D43, Pan De Azucar', c: [-29.98207883971201, -71.26163182313118] },
          { n: 'Las Palmas, 3650-3698', c: [-29.97930017921923, -71.28801406441809] },
          { n: 'Card Jorge Medina Estévez', c: [-29.977395001577516, -71.29291713558192] },
          { n: 'Fray Pedro De Azuaga, 2705', c: [-29.98233899168395, -71.29702629325422] },
          { n: 'Las Torres', c: [-29.977950802803175, -71.29188339324] },
          { n: 'La Cantera, 2300-2398', c: [-29.97359379322016, -71.29877503558193] },
          { n: 'La Cantera, 1920-1968', c: [-29.971586282890385, -71.30165036441807] },
          { n: 'Acceso A La Cantera', c: [-29.969550872881207, -71.30515873558193] },
          { n: 'La Cantera, 4-500', c: [-29.964764263255418, -71.31367739325421] },
          { n: 'Puente Culebron', c: [-29.965926065591667, -71.32125730674579] },
          { n: 'Escuela Hogar', c: [-29.966841551022558, -71.32595126441805] },
          { n: 'Panamericana Norte, 1650', c: [-29.96601438195506, -71.3281238355819] },
          { n: 'Lider Sur', c: [-29.96597257107567, -71.33254950674578] },
          { n: 'Videla', c: [-29.96302064441141, -71.33637883558193] },
          { n: 'Pacomio Gómez, 2', c: [-29.96145986157959, -71.33710924907349] },
          { n: 'Varela, 1600-1678', c: [-29.95840645047214, -71.33820357790962] },
          { n: 'Unimarc', c: [-29.957188721904153, -71.33774220942023] },
          { n: 'Terminal De Buses', c: [-29.95509724820216, -71.33742030673304] },
          { n: 'Varela, 1102-1118', c: [-29.95410254183129, -71.33722726440672] },
          { n: 'Varela, 902-998', c: [-29.9522341544994, -71.3366693067343] }
        ]
      },
      '13': {
        color: '#9333EA',
        paradas: [
          { n: 'Cienfuegos, 698', c: [-29.905641369841515, -71.24852653376013] },
          { n: 'Cienfuegos, 560-598', c: [-29.903669667028883, -71.24739473376017] },
          { n: 'Cienfuegos, 416', c: [-29.902022137797154, -71.24715652209038] },
          { n: 'Peatonal La Recova, 742-786', c: [-29.901070236663834, -71.24677243556916] },
          { n: 'Los Carrera, 216-260', c: [-29.899482132936626, -71.25080646441806] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899554232258293, -71.25357990674578] },
          { n: 'Pasarela Lider', c: [-29.90258624317406, -71.25632643556372] },
          { n: 'Pedro Pablo Muñoz, 831', c: [-29.906276746319655, -71.25446189325419] },
          { n: 'Mall Plaza La Serena', c: [-29.9127138533838, -71.2564513146629] },
          { n: 'Mall Plaza La Serena', c: [-29.913820500346187, -71.25669807789762] },
          { n: 'Pasarela Jumbo', c: [-29.915922266541315, -71.26125637790963] },
          { n: 'Ruta 5 / 4 Esquinas', c: [-29.928322159765738, -71.27077281473233] },
          { n: 'Cuatro Esquinas, 325-399', c: [-29.932338893595375, -71.26197516441808] },
          { n: 'Paradero 8', c: [-29.93664712039143, -71.2613582355819] },
          { n: 'Paradero 9', c: [-29.939516512505783, -71.26244183558191] },
          { n: 'Paradero 10', c: [-29.942210321087448, -71.26424703558195] },
          { n: 'Paradero 11', c: [-29.945870825274707, -71.26688363558193] },
          { n: 'Ruta 43, 5995', c: [-29.94805542595094, -71.26807200674578] },
          { n: 'Pedro Lira, 172-198', c: [-29.950979135541598, -71.26669589325421] },
          { n: 'Regimiento Arica, 303', c: [-29.953748141107514, -71.26351809325422] },
          { n: 'Coquimbo, 396', c: [-29.95723724354886, -71.26262517790963] },
          { n: 'Curicó, 420', c: [-29.960173558873077, -71.26258399325422] },
          { n: 'Linares, 321', c: [-29.961434351594686, -71.26361667976266] },
          { n: 'Pedro Aguirre Cerda', c: [-29.961349531611763, -71.26022043558193] },
          { n: 'Linares, 801-899', c: [-29.962124432807485, -71.25644983558193] },
          { n: 'Calle Talca, 1000', c: [-29.961420861497533, -71.25497163558191] },
          { n: 'Talca, 1168-1198', c: [-29.961781737272865, -71.25234736441806] },
          { n: 'Antonio Vargas Figueroa, 501', c: [-29.962316453285787, -71.24866036441806] },
          { n: 'Talca, 1771', c: [-29.963078039394418, -71.24705893558192] },
          { n: 'Cabo Exequiel Aroca', c: [-29.961678347075453, -71.25033442209038] },
          { n: 'Cabo Exequiel Aroca, 991', c: [-29.966365366475074, -71.25089730674581] },
          { n: 'Calle Manuel Del Cruz V, 1011', c: [-29.968770171311128, -71.24868317790964] },
          { n: 'Calle Manuel Del Cruz V, 1171', c: [-29.97130317640541, -71.2495404355819] },
          { n: 'Reserva Nacional Los Ruiles, 1179', c: [-29.973276586448225, -71.25325760674583] },
          { n: 'Victor Taborga Vega, 1332', c: [-29.975144765391935, -71.25312616441809] },
          { n: 'Párroco Waldo Alcalde, 1340', c: [-29.978153070598943, -71.25321760674576] },
          { n: 'Calle Waldo Alcalde, 1751', c: [-29.97863369772535, -71.25124373558187] },
          { n: 'Luis Enrique Cerda, 1690', c: [-29.97761147613813, -71.24586999325422] },
          { n: 'Camino A Huachalalume, 37', c: [-29.97590488566115, -71.24141503558192] }
        ]
      },
      '20': {
        color: '#0EA5E9',
        paradas: [
          { n: 'Calle Montepatria', c: [-29.883583, -71.212333] },
          { n: 'Montepatria / Pedro Mendez', c: [-29.88256963198198, -71.21682510051308] },
          { n: 'Montepatria / Rafael Otarola', c: [-29.882781722421562, -71.21513437608917] },
          { n: 'Area Verde Villa Bicentenario', c: [-29.87956208946797, -71.2182122932542] },
          { n: 'Garita Lincosur', c: [-29.87887, -71.21693] },
          { n: 'Cementerio Las Compañias', c: [-29.87529498665709, -71.21829946441807] },
          { n: 'Parque Los Llanos', c: [-29.876417996318146, -71.2209963797785] },
          { n: 'Calle Pintor Mario Carreño, 3838', c: [-29.877286584703917, -71.22466930673093] },
          { n: 'Pasaje Tocopilla', c: [-29.878383962653643, -71.22620808161571] },
          { n: 'Circunvalación Álvarez Zorrilla, 3173', c: [-29.87358308015827, -71.22686633558192] },
          { n: 'Actor Pedro Sienna, 3147', c: [-29.871697883209663, -71.22778620674578] },
          { n: 'Janequeo, 3301', c: [-29.87216378405696, -71.23156557790962] },
          { n: 'Avenida Viña Del Mar, 3786', c: [-29.87255327475851, -71.23459139325422] },
          { n: 'Avenida Viña Del Mar, 3008', c: [-29.872058383865287, -71.23689106441809] },
          { n: 'Aurora, 2771-2799', c: [-29.871857083499194, -71.24085013558192] },
          { n: 'Viña Del Mar, 2564-2592', c: [-29.871675679750965, -71.24266327790963] },
          { n: 'Monjitas, 2607-2633', c: [-29.873680580353774, -71.24565657790959] },
          { n: 'Monjitas, 2301-2399', c: [-29.878192492211678, -71.24618235092647] },
          { n: 'Gaspar Marín, 2741-2799', c: [-29.88199729704393, -71.24159043557316] },
          { n: 'Nicaragua, 1510-1580', c: [-29.886555408205965, -71.24263646441806] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Almagro, 506', c: [-29.898161627573607, -71.24924550674578] },
          { n: 'Pedro Pablo Muñoz, 104', c: [-29.898454928216974, -71.25342803558193] },
          { n: 'Pedro Pablo Muñoz, 340-390', c: [-29.901809634972654, -71.25411096441809] },
          { n: 'Pedro Pablo Muñoz, 831', c: [-29.906220945062195, -71.25442970674578] },
          { n: 'El Sto, 1060', c: [-29.909473052167, -71.25521603558192] },
          { n: 'Mall Plaza La Serena', c: [-29.91268174404274, -71.25671960830657] }
        ]
      },
      'E01': {
        color: '#65A30D',
        paradas: [
          { n: 'Alberto Hurtado Cruchaga con Av. El Sauce', c: [-30.00540808359883, -71.32989157608313] },
          { n: 'Ramón Rodríguez', c: [-29.996197896655236, -71.33562369142766] },
          { n: 'Pasaje Enrique Fernández', c: [-29.99564745441705, -71.33374103375563] },
          { n: 'Av. Portugal Sur', c: [-29.996654848014018, -71.33379004724748] },
          { n: 'Carlos Muñoz Pizarro', c: [-29.995098875153566, -71.33178752449375] },
          { n: 'Glorias Navales', c: [-29.995377328254218, -71.331031141552] },
          { n: 'Las Vertientes', c: [-29.992561849497775, -71.33295696761822] },
          { n: 'Francisco Cabello Cárdenas', c: [-29.994795582174422, -71.32923964724755] },
          { n: 'Los Clarines', c: [-29.987905174952072, -71.33229132582102] },
          { n: 'Av. Presidente Arturo Alessandri', c: [-29.974386785887663, -71.3358714765664] },
          { n: 'Los Copihues', c: [-29.981127008386608, -71.33864004586601] },
          { n: 'Los Alelíes', c: [-29.97760265464216, -71.34145409434466] },
          { n: 'Diagonal Las Torres', c: [-29.977460094810898, -71.33915149830055] },
          { n: 'Los Tulipanes', c: [-29.977949103511037, -71.34226106108153] },
          { n: 'Luis Balanda', c: [-29.972741159152264, -71.33706292871318] },
          { n: 'Alessandri', c: [-29.97447480270236, -71.33573864592245] },
          { n: 'Manuel Jesús Rivera', c: [-29.96990431668145, -71.33686863349276] },
          { n: 'Av. Suecia', c: [-29.96881086435138, -71.31883394503546] },
          { n: 'Panamericana Norte', c: [-29.96572537099748, -71.3210163432037] },
          { n: 'La Cantera', c: [-29.975612569936782, -71.29562439457075] },
          { n: 'Av. José Joaquín Pérez', c: [-29.96099058792892, -71.30120790329677] },
          { n: 'Los Jardines', c: [-29.953815859898114, -71.2902188326153] },
          { n: 'Las Parcelas', c: [-29.956543016373306, -71.3033170583387] },
          { n: 'Regimiento Arica', c: [-29.95231311781832, -71.26401899814681] },
          { n: 'Los Lagos', c: [-29.95485352792116, -71.27489389140122] },
          { n: 'Av. Balmaceda', c: [-29.955070958137764, -71.26782740276592] },
          { n: 'Amunátegui', c: [-29.91007289944444, -71.24999645077202] },
          { n: 'Benavente', c: [-29.90908710375803, -71.24690648650848] },
          { n: 'Colo Colo', c: [-29.906508600968877, -71.2464370901918] },
          { n: 'Cienfuegos', c: [-29.905627444427758, -71.24853189321821] },
          { n: 'Puente Libertador', c: [-29.897983130068326, -71.24624656441809] },
          { n: 'Av. Islón', c: [-29.891484617635108, -71.24909756441807] },
          { n: 'Bandera', c: [-29.88648250399499, -71.2436492932542] },
          { n: 'La Conquista', c: [-29.885322912061813, -71.24573711349154] },
          { n: 'Gaspar Marín', c: [-29.88198799457962, -71.24160116440602] },
          { n: 'Los Morros', c: [-29.887942810859798, -71.21713200674579] }
        ]
      },
      'E02': {
        color: '#F59E0B',
        paradas: [
          { n: 'La Pampilla', c: [-29.96027587771848, -71.35025332366156] },
          { n: 'Guacolda', c: [-29.96357785570416, -71.34602365092653] },
          { n: 'Gabriela Mistral', c: [-29.960086553850005, -71.34365296441807] },
          { n: 'Buen Pastor', c: [-29.961824737145687, -71.34510135729818] },
          { n: 'Luis Cruz Martínez', c: [-29.948983093555555, -71.34863276441456] },
          { n: 'Manuel Rodríguez', c: [-29.958746751156305, -71.34547166441807] },
          { n: 'Camilo Henríquez', c: [-29.957259491326763, -71.34480647657682] },
          { n: 'Av. Pedro Nolasco Videla', c: [-29.958435357964525, -71.33821897122404] },
          { n: 'Domeyko', c: [-29.966764961814885, -71.33297283558191] },
          { n: 'Miraflores', c: [-29.966968487215595, -71.32823493002283] },
          { n: 'Panamericana Norte', c: [-29.96572537099748, -71.3210163432037] },
          { n: 'Av. La Cantera', c: [-29.975612569936782, -71.29562439457075] },
          { n: 'Av. José Joaquín Pérez', c: [-29.96099058792892, -71.30120790329677] },
          { n: 'Los Jardines', c: [-29.953815859898114, -71.2902188326153] },
          { n: 'Las Parcelas', c: [-29.956543016373306, -71.3033170583387] },
          { n: 'Regimiento Arica', c: [-29.95231311781832, -71.26401899814681] },
          { n: 'Av. Los Lagos', c: [-29.95485352792116, -71.27489389140122] },
          { n: 'Av. Balmaceda', c: [-29.955070958137764, -71.26782740276592] },
          { n: 'Av. Amunátegui', c: [-29.91007289944444, -71.24999645077202] },
          { n: 'Benavente', c: [-29.90908710375803, -71.24690648650848] },
          { n: 'Av. Colo Colo', c: [-29.906508600968877, -71.2464370901918] },
          { n: 'Cienfuegos', c: [-29.905627444427758, -71.24853189321821] },
          { n: 'Puente El Libertador', c: [-29.897983130068326, -71.24624656441809] },
          { n: 'Av. Islón', c: [-29.891484617635108, -71.24909756441807] },
          { n: 'Bandera', c: [-29.88648250399499, -71.2436492932542] },
          { n: 'La Conquista', c: [-29.885322912061813, -71.24573711349154] },
          { n: 'Gaspar Marín', c: [-29.88198799457962, -71.24160116440602] },
          { n: 'Monjitas', c: [-29.87369451023574, -71.24571559143375] },
          { n: 'Av. Viña del Mar', c: [-29.872402854978194, -71.23691359808748] }
        ]
      }
    };

    const capaLinea = L.layerGroup().addTo(map3);
    const capaViaje = L.layerGroup().addTo(map3); 
    let lineaActiva = '1';
    let animToken = 0;
    let sentidoActivo = 'ida';

    function paradasDe(linea) {
      return (sentidoActivo === 'vuelta' && linea.paradasVuelta) ? linea.paradasVuelta : linea.paradas;
    }

    // Distancia aproximada en metros 
    function distancia(a, b) {
      const dLat = (a[0] - b[0]) * 111320;
      const dLng = (a[1] - b[1]) * 111320 * Math.cos((a[0] * Math.PI) / 180);
      return Math.sqrt(dLat * dLat + dLng * dLng);
    }

    function mostrarLinea(num, opciones = {}) {
      const { animar = true, limpiarViaje = true } = opciones;
      const linea = lineasMicro[num];
      if (!linea) return;
      lineaActiva = num;
      if (!linea.paradasVuelta) sentidoActivo = 'ida';
      actualizarToggleSentido(linea);
      capaLinea.clearLayers();
      if (limpiarViaje) capaViaje.clearLayers();

      const paradas = paradasDe(linea);
      const sufijo = (sentidoActivo === 'vuelta' && linea.paradasVuelta) ? ' (vuelta)' : '';
      const puntos = paradas.map((p) => p.c);
      if (puntos.length) {
        map3.fitBounds(L.latLngBounds(puntos), { padding: [40, 40] });
      }

      const token = ++animToken;
      const paso = animar ? Math.min(75, Math.round(1500 / paradas.length)) : 0;

      paradas.forEach((p, i) => {
        const poner = () => {
          if (token !== animToken) return;
          L.circleMarker(p.c, {
            radius: 8,
            color: '#ffffff',
            weight: 2,
            fillColor: linea.color,
            fillOpacity: 1
          })
            .bindPopup(
              `<div class="popup-content"><h3>Línea ${num}${sufijo}</h3><p><strong>Parada ${i + 1}:</strong> ${p.n}</p></div>`
            )
            .addTo(capaLinea);
        };
        if (paso) setTimeout(poner, i * paso);
        else poner();
      });
    }

    const lineaBtns = document.querySelectorAll('[data-linea]');
    lineaBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        lineaBtns.forEach((b) => b.classList.remove('activo'));
        btn.classList.add('activo');
        sentidoActivo = 'ida';
        mostrarLinea(btn.getAttribute('data-linea'));
      });
    });

    function sincronizarBotonesLinea(num) {
      lineaBtns.forEach((b) => b.classList.toggle('activo', b.getAttribute('data-linea') === num));
    }

    // --- Interruptor  ---
    const sentidoToggle = document.getElementById('sentidoToggle');
    const sentidoBtns = sentidoToggle ? Array.from(sentidoToggle.querySelectorAll('[data-sentido]')) : [];
    function actualizarToggleSentido(linea) {
      if (!sentidoToggle) return;
      sentidoToggle.classList.toggle('oculto', !linea.paradasVuelta);
      sentidoBtns.forEach((b) => b.classList.toggle('activo', b.getAttribute('data-sentido') === sentidoActivo));
    }
    sentidoBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        sentidoActivo = btn.getAttribute('data-sentido');
        mostrarLinea(lineaActiva, { animar: true });
      });
    });

    mostrarLinea(lineaActiva, { animar: false });
    
    setTimeout(() => {
      map3.invalidateSize();
      mostrarLinea(lineaActiva, { animar: true });
    }, 350);

   
    function seleccionarLineaYCentrar(num, coords) {
      sincronizarBotonesLinea(num);
      sentidoActivo = 'ida';
      mostrarLinea(num, { animar: false });
      if (coords) {
        map3.setView(coords, 16, { animate: true });
        let abierto = false;
        capaLinea.eachLayer((layer) => {
          if (abierto || !layer.getLatLng) return;
          const ll = layer.getLatLng();
          if (Math.abs(ll.lat - coords[0]) < 1e-9 && Math.abs(ll.lng - coords[1]) < 1e-9) {
            layer.openPopup();
            abierto = true;
          }
        });
      }
      document.getElementById('map3')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ===== Buscador de paraderos =====
    function initBuscadorMicro() {
      const input = document.getElementById('buscadorMicro');
      const lista = document.getElementById('buscadorMicroResultados');
      if (!input || !lista) return;

      function cerrar() {
        lista.classList.add('oculto');
        lista.innerHTML = '';
      }

      function buscarParadas(q) {
        // Agrupa por nombre de parada y junta las líneas que la sirven
        const encontrados = new Map();
        Object.keys(lineasMicro).forEach((num) => {
          lineasMicro[num].paradas.forEach((p) => {
            if (!normaliza(p.n).includes(q)) return;
            const clave = normaliza(p.n);
            if (!encontrados.has(clave)) {
              encontrados.set(clave, { nombre: p.n, coords: p.c, lineas: [] });
            }
            const reg = encontrados.get(clave);
            if (!reg.lineas.includes(num)) reg.lineas.push(num);
          });
        });
        // Prioriza las paradas cuyo nombre empieza con la búsqueda
        return [...encontrados.values()].sort((a, b) => {
          const ea = normaliza(a.nombre).startsWith(q) ? 0 : 1;
          const eb = normaliza(b.nombre).startsWith(q) ? 0 : 1;
          return ea - eb;
        });
      }

      function render(consulta) {
        const q = normaliza(consulta.trim());
        if (!q) {
          cerrar();
          return;
        }

        const t = traducciones[idiomaActual];
        const resultados = buscarParadas(q).slice(0, 8);
        lista.innerHTML = '';

        if (resultados.length === 0) {
          const vacio = document.createElement('li');
          vacio.className = 'vacio';
          vacio.textContent = t.buscadorVacio;
          lista.appendChild(vacio);
          lista.classList.remove('oculto');
          return;
        }

        resultados.forEach((r) => {
          const li = document.createElement('li');
          const chips = r.lineas
            .map(
              (num) =>
                `<button type="button" class="micro-chip" data-linea-chip="${num}" style="--lc:${lineasMicro[num].color}">${num}</button>`
            )
            .join('');
          li.innerHTML = `
            <span class="res-nombre">${r.nombre}</span>
            <span class="micro-chips"><span class="micro-chips__label">${t.microLineasLabel}:</span>${chips}</span>
          `;
          li.querySelectorAll('.micro-chip').forEach((chip) => {
            chip.addEventListener('click', (e) => {
              e.stopPropagation();
              input.value = r.nombre;
              cerrar();
              seleccionarLineaYCentrar(chip.getAttribute('data-linea-chip'), r.coords);
            });
          });
          lista.appendChild(li);
        });

        lista.classList.remove('oculto');
      }

      input.addEventListener('input', () => render(input.value));
      input.addEventListener('focus', () => {
        if (input.value.trim()) render(input.value);
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const chip = lista.querySelector('.micro-chip');
          if (chip) chip.click();
        } else if (e.key === 'Escape') {
          cerrar();
          input.blur();
        }
      });

      document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !lista.contains(e.target)) cerrar();
      });
    }

    initBuscadorMicro();

    // Detecta qué líneas (
    function lineasDisponiblesDeTexto(txt) {
      const claves = Object.keys(lineasMicro);
      const encontradas = [];
      if (/9c/i.test(txt) && claves.includes('9C')) encontradas.push('9C');
      (txt.match(/\d+/g) || []).forEach((n) => {
        if (claves.includes(n) && !encontradas.includes(n)) encontradas.push(n);
      });
      return encontradas;
    }

    // Marca origen/destino/transbordo e
    function marcarHito(coords, texto, color) {
      L.circleMarker(coords, {
        radius: 10,
        color: '#ffffff',
        weight: 3,
        fillColor: color,
        fillOpacity: 1
      })
        .bindTooltip(texto, { permanent: true, direction: 'top', className: 'hito-tooltip', offset: [0, -8] })
        .addTo(capaViaje);
    }

    // ===== desde un punto turístico ir en micro =====
    function irEnMicro(num, coordsLugar) {
      document.getElementById('micros')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      sincronizarBotonesLinea(num);
      mostrarLinea(num, { animar: false });
      if (coordsLugar && lineasMicro[num]) {
        let mejor = null;
        lineasMicro[num].paradas.forEach((p) => {
          const d = distancia(coordsLugar, p.c);
          if (!mejor || d < mejor.d) mejor = { p, d };
        });
        if (mejor) {
          map3.setView(mejor.p.c, 15, { animate: true });
          const t = traducciones[idiomaActual];
          marcarHito(mejor.p.c, `${t.subeAqui}`, '#16A34A');
        }
      }
    }

    // ===== Lógica de cercanía compartida  =====
    // Para un punto devuelve la parada más cercana de cada línea dentro del radio
    function lineasCercaDe(coords, radio) {
      const res = [];
      Object.keys(lineasMicro).forEach((num) => {
        let mejor = null;
        lineasMicro[num].paradas.forEach((p) => {
          const d = distancia(coords, p.c);
          if (!mejor || d < mejor.d) mejor = { p, d };
        });
        if (mejor && mejor.d <= radio) res.push({ num, parada: mejor.p, dist: mejor.d });
      });
      res.sort((a, b) => a.dist - b.dist);
      return res;
    }

    function renderCercanas(panel, items, tituloOk, tituloVacio) {
      panel.classList.remove('oculto');
      panel.innerHTML = '';
      if (items.length === 0) {
        panel.innerHTML = `<p class="micro-panel__vacio">${tituloVacio}</p>`;
        return;
      }
      const h = document.createElement('p');
      h.className = 'micro-panel__titulo';
      h.textContent = tituloOk;
      panel.appendChild(h);
      items.slice(0, 8).forEach((c) => {
        const item = document.createElement('div');
        item.className = 'micro-resultado';
        item.innerHTML = `
          <button type="button" class="micro-chip" style="--lc:${lineasMicro[c.num].color}">${c.num}</button>
          <span class="micro-resultado__texto"><strong>${c.parada.n}</strong> · ${Math.round(c.dist)} m</span>`;
        item.addEventListener('click', () => seleccionarLineaYCentrar(c.num, c.parada.c));
        panel.appendChild(item);
      });
    }

    // Marcador temporal del punto consultado 
    let marcadorPuntoMicro = null;
    function crearIconoDestino() {
      return L.divIcon({
        className: 'marcador-pin',
        html: `<span class="pin pin--destino"></span>`,
        iconSize: [28, 36],
        iconAnchor: [14, 32],
        popupAnchor: [0, -30]
      });
    }
    function marcarPuntoEnMapa(coords, texto) {
      if (marcadorPuntoMicro) map3.removeLayer(marcadorPuntoMicro);
      marcadorPuntoMicro = L.marker(coords, { icon: crearIconoDestino(), zIndexOffset: 900 }).addTo(map3);
      if (texto) {
        marcadorPuntoMicro.bindPopup(`<div class="popup-content"><h3>${texto}</h3></div>`).openPopup();
      }
    }

    // ===== Micros cerca de mí =====
    let marcadorUsuarioMicro = null;
    function initMicrosCerca() {
      const btn = document.getElementById('microCercaBtn');
      const panel = document.getElementById('microPanelLateral');
      if (!btn || !panel) return;

      btn.addEventListener('click', () => {
        const t = traducciones[idiomaActual];
        if (!navigator.geolocation) {
          alert(t.ubicacionError);
          return;
        }
        btn.classList.add('cargando');
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            btn.classList.remove('cargando');
            const me = [pos.coords.latitude, pos.coords.longitude];
            const cercanas = lineasCercaDe(me, 700);

            if (marcadorUsuarioMicro) map3.removeLayer(marcadorUsuarioMicro);
            marcadorUsuarioMicro = L.marker(me, { icon: crearIconoUsuario(), zIndexOffset: 1000 })
              .addTo(map3)
              .bindPopup(`<div class="popup-content"><h3>${t.tuUbicacion}</h3></div>`);

            renderCercanas(panel, cercanas, t.nearbyTitulo, t.nearbyVacio);

            const pts = [me, ...cercanas.slice(0, 5).map((c) => c.parada.c)];
            map3.fitBounds(L.latLngBounds(cercanas.length ? pts : [me, me]), { padding: [60, 60], maxZoom: 16 });
            document.getElementById('map3')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          },
          () => {
            btn.classList.remove('cargando');
            alert(t.ubicacionError);
          },
          { enableHighAccuracy: true, timeout: 10000 }
        );
      });
    }

    initMicrosCerca();

    // ===== Tocar el mapa para ver qué micros pasan cerca =====
    map3.on('click', (e) => {
      if (window.planModoActivo) return; // PLANIFICADOR: en modo «Planificar un viaje» el click lo maneja js/planificador.js
      const t = traducciones[idiomaActual];
      const coords = [e.latlng.lat, e.latlng.lng];
      const cercanas = lineasCercaDe(coords, 500);
      marcarPuntoEnMapa(coords, null);
      const panel = document.getElementById('microPanelLateral');
      if (panel) renderCercanas(panel, cercanas, t.tapTitulo, t.nearbyVacio);
    });
