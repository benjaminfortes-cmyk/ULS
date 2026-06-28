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
      },
      ht: {
        btnInmigrantes: 'Sipò pou migran',
        btnTuristica: 'Wout touristik',
        btnMicro: 'Deplase an Bis',
        btnTodos: 'Montre tout',
        idioma: 'Lang',
        direccion: 'Adrès',
        contacto: 'Kontak',
        objetivo: 'Objektif',
        horario: 'Lè sèvis',
        descripcion: 'Deskripsyon',
        micros: 'Bis ki toupre',
        comoLlegar: 'Kijan pou rive',
        estoyAqui: 'Mwen isit la',
        tuUbicacion: 'Ou isit la',
        ubicacionError: 'Nou pa t kapab jwenn kote ou ye. Limen GPS la epi bay navigatè a pèmisyon.',
        instruccion: 'Chèche yon enstitisyon nan baret rechèch la oswa klike sou yon makè sou kat la.',
        instruccion2: 'Klike sou yon pwen nan wout touristik la pou wè enfòmasyon li.',
        quienesEtiqueta: 'Sou nou',
        quienesTitulo: 'Ki moun nou ye',
        quienesTitulo1: 'Ki moun',
        quienesTitulo2: 'nou ye',
        quienesTexto: 'Nou se etidyan Jeni Sivil Endistriyèl nan Inivèsite La Serena, k ap chèche kreye pwojè sa a pou kreye valè pataje atravè sipò ak èd pou kominote migran nan vil La Serena, ak objektif pou konstwi yon vil miltikiltirèl.',
        mapaApoyoTitulo: 'Enstitisyon ki Sipòte Migran yo',
        mapaRutaTitulo: 'Wout touristik',
        leyendaInmigrantes: 'Sipò pou migran',
        leyendaTuristica: 'Wout touristik',
        filtroTodos: 'Tout',
        filtroCat1: 'Sipèvizyon ak Kontwòl',
        filtroCat2: 'Edikasyon ak Sante',
        filtroCat3: 'Entèvansyon ak Asistans Legal',
        filtroCat4: 'Sipò pou Travay',
        filtroCat5: 'Konsila',
        buscadorPlaceholder: 'Chèche yon enstitisyon…',
        buscadorPlaceholder2: 'Chèche yon pwen touristik…',
        buscadorVacio: 'Pa jwenn okenn rezilta',
        mapasIntro: 'Sou sit entènèt sa a w ap jwenn de kat. Premye a, « Sipò pou migran », gen plizyè òganizasyon piblik ak prive ki ofri divès kalite èd pou kominote a, anplis enstitisyon sante ou ka ale. Dezyèm nan, « Wout touristik », konsantre sou pi gwo atraksyon touristik vil nou an, kote w ap jwenn detay sou chak grenn.',
        microEyebrow: 'Deplase nan vil la',
        microTitulo: 'Konekte an Bis',
        microIntro: 'Chwazi yon liy pou wè tout wout li ak tout estasyon li yo sou kat la.',
        buscadorMicroPh: 'Chèche yon estasyon (egz: Mall Plaza La Serena)…',
        microLineasLabel: 'Liy ki disponib',
        microNearbyBtn: 'Bis toupre m',
        nearbyTitulo: 'Liy ki toupre ou',
        nearbyVacio: 'Pa gen estasyon nan mwens pase 700 m de kote ou ye.',
        subeAqui: 'Monte isit la',
        turIrMicro: 'Ale an bis',
        tapTitulo: 'Liy ki toupre pwen sa a',
        microPanelHint: 'Tape yon pwen sou kat la oswa sèvi ak « Bis toupre m », epi liy ki pi pre yo ap parèt isit la.',
        guiaTitulo: 'Kijan pou itilize kat sa a',
        guia1T: 'Bouton liy yo',
        guia1D: 'Tape yon liy ki gen koulè pou wè tout estasyon li yo desine sou kat la.',
        guia2T: 'Jwenn yon estasyon',
        guia2D: 'Ekri non yon estasyon epi n ap montre w ki liy ki pase la.',
        guia3T: 'Bis toupre ou (2 fason)',
        guia3D: '1) Tape nenpòt kote sou kat la, oswa 2) peze bouton « Bis toupre m » pou sèvi ak kote ou ye. Nan toulède fason yo, liy ki toupre yo parèt sou bò dwat kat la, san ou pa bezwen woule.'
      }
    };

    // ===== Diccionario secciones de la landing  =====
    Object.assign(traducciones.es, {
      cardApoyoD: 'Brindamos orientación y recursos a quienes buscan nuevas oportunidades.',
      cardRutaD: 'Descubre los lugares, historias y atractivos que nos hacen únicos.',
      cardVisibilidadT: 'Visibilidad',
      cardVisibilidadD: 'Damos visibilidad a las historias, los aportes y las necesidades de la comunidad migrante.',
      cardComunidadT: 'Comunidad',
      cardComunidadD: 'Conecta, participa y sé parte de una comunidad que transforma.',
      propositoEyebrow: 'Lo que nos mueve',
      propositoTitulo: 'Nuestro propósito',
      propositoTexto: 'En Serena Conecta creemos que la información abre puertas. Reunimos en un solo lugar las redes de apoyo, los atractivos y transporte de La Serena, para que cada persona pueda orientarse, participar y sentirse parte de ella. Queremos fomentar el sello multicultural de la ciudad de La Serena, aportando para que la ciudad sea más equitativa, justa e inclusiva con la diversidad cultural. Queremos que las futuras generaciones se encuentren felices y orgullosas de vivir en nuestra ciudad.',
      propositoQuote: 'La diversidad cultural es una fuerza motriz del desarrollo',
      valorJusticiaT: 'Justicia',
      valorJusticiaD: 'Promovemos el acceso equitativo a la información y a las redes de apoyo, con una cultura de respeto y responsabilidad social.',
      valorInclusionT: 'Inclusión',
      valorInclusionD: 'Valoramos la diversidad de quienes llegan y de quienes acogen, y trabajamos por una ciudad sin barreras.',
      valorSostenibilidadT: 'Sostenibilidad',
      valorSostenibilidadD: 'Cuidamos nuestro entorno y promovemos un desarrollo que también beneficie a las generaciones futuras.',
      mapasTitulo: 'Nuestros mapas',
      stat1: 'instituciones de apoyo',
      stat2: 'puntos turísticos',
      stat3: 'líneas de micro',
      stat4: 'idiomas disponibles',
      footerFollow: 'Síguenos en Instagram'
    });
    Object.assign(traducciones.en, {
      cardApoyoD: 'We provide guidance and resources to those seeking new opportunities.',
      cardRutaD: 'Discover the places, stories and attractions that make us unique.',
      cardVisibilidadT: 'Visibility',
      cardVisibilidadD: 'We give visibility to the stories, contributions and needs of the migrant community.',
      cardComunidadT: 'Community',
      cardComunidadD: 'Connect, take part and be part of a community that transforms.',
      propositoEyebrow: 'What drives us',
      propositoTitulo: 'Our purpose',
      propositoTexto: 'At Serena Conecta we believe that information opens doors. We bring together in one place the support networks, attractions and transport of La Serena, so that everyone can find their way, take part and feel part of the city. We want to nurture the multicultural character of La Serena, helping the city become more equitable, fair and inclusive of cultural diversity. We want future generations to be happy and proud to live in our city.',
      propositoQuote: 'Cultural diversity is a driving force of development',
      valorJusticiaT: 'Justice',
      valorJusticiaD: 'We promote equitable access to information and support networks, with a culture of respect and social responsibility.',
      valorInclusionT: 'Inclusion',
      valorInclusionD: 'We value the diversity of those who arrive and those who welcome them, and we work for a city without barriers.',
      valorSostenibilidadT: 'Sustainability',
      valorSostenibilidadD: 'We care for our environment and promote development that also benefits future generations.',
      mapasTitulo: 'Our maps',
      stat1: 'support institutions',
      stat2: 'tourist spots',
      stat3: 'bus lines',
      stat4: 'available languages',
      footerFollow: 'Follow us on Instagram'
    });
    Object.assign(traducciones.de, {
      cardApoyoD: 'Wir bieten Orientierung und Ressourcen für alle, die neue Chancen suchen.',
      cardRutaD: 'Entdecke die Orte, Geschichten und Sehenswürdigkeiten, die uns einzigartig machen.',
      cardVisibilidadT: 'Sichtbarkeit',
      cardVisibilidadD: 'Wir machen die Geschichten, Beiträge und Bedürfnisse der Migrantengemeinschaft sichtbar.',
      cardComunidadT: 'Gemeinschaft',
      cardComunidadD: 'Verbinde dich, mach mit und sei Teil einer Gemeinschaft, die etwas verändert.',
      propositoEyebrow: 'Was uns antreibt',
      propositoTitulo: 'Unser Anliegen',
      propositoTexto: 'Bei Serena Conecta glauben wir, dass Information Türen öffnet. Wir bündeln an einem Ort die Unterstützungsnetzwerke, Sehenswürdigkeiten und Verkehrsmittel von La Serena, damit sich jede Person orientieren, teilnehmen und sich als Teil der Stadt fühlen kann. Wir möchten den multikulturellen Charakter der Stadt La Serena fördern und dazu beitragen, dass die Stadt gerechter, fairer und offener für kulturelle Vielfalt wird. Wir wünschen uns, dass zukünftige Generationen glücklich und stolz sind, in unserer Stadt zu leben.',
      propositoQuote: 'Kulturelle Vielfalt ist eine treibende Kraft der Entwicklung',
      valorJusticiaT: 'Gerechtigkeit',
      valorJusticiaD: 'Wir fördern den gerechten Zugang zu Informationen und Unterstützungsnetzwerken, mit einer Kultur des Respekts und der sozialen Verantwortung.',
      valorInclusionT: 'Inklusion',
      valorInclusionD: 'Wir schätzen die Vielfalt derer, die ankommen, und derer, die sie aufnehmen, und arbeiten für eine Stadt ohne Barrieren.',
      valorSostenibilidadT: 'Nachhaltigkeit',
      valorSostenibilidadD: 'Wir schützen unsere Umwelt und fördern eine Entwicklung, die auch künftigen Generationen zugutekommt.',
      mapasTitulo: 'Unsere Karten',
      stat1: 'Hilfseinrichtungen',
      stat2: 'Sehenswürdigkeiten',
      stat3: 'Buslinien',
      stat4: 'verfügbare Sprachen',
      footerFollow: 'Folge uns auf Instagram'
    });
    Object.assign(traducciones.pt, {
      cardApoyoD: 'Oferecemos orientação e recursos a quem busca novas oportunidades.',
      cardRutaD: 'Descubra os lugares, histórias e atrativos que nos tornam únicos.',
      cardVisibilidadT: 'Visibilidade',
      cardVisibilidadD: 'Damos visibilidade às histórias, contribuições e necessidades da comunidade migrante.',
      cardComunidadT: 'Comunidade',
      cardComunidadD: 'Conecte-se, participe e faça parte de uma comunidade que transforma.',
      propositoEyebrow: 'O que nos move',
      propositoTitulo: 'Nosso propósito',
      propositoTexto: 'Na Serena Conecta acreditamos que a informação abre portas. Reunimos em um só lugar as redes de apoio, os atrativos e o transporte de La Serena, para que cada pessoa possa se orientar, participar e se sentir parte dela. Queremos fomentar o caráter multicultural da cidade de La Serena, contribuindo para que a cidade seja mais equitativa, justa e inclusiva com a diversidade cultural. Queremos que as futuras gerações sejam felizes e orgulhosas de viver na nossa cidade.',
      propositoQuote: 'A diversidade cultural é uma força motriz do desenvolvimento',
      valorJusticiaT: 'Justiça',
      valorJusticiaD: 'Promovemos o acesso equitativo à informação e às redes de apoio, com uma cultura de respeito e responsabilidade social.',
      valorInclusionT: 'Inclusão',
      valorInclusionD: 'Valorizamos a diversidade de quem chega e de quem acolhe, e trabalhamos por uma cidade sem barreiras.',
      valorSostenibilidadT: 'Sustentabilidade',
      valorSostenibilidadD: 'Cuidamos do nosso ambiente e promovemos um desenvolvimento que também beneficie as gerações futuras.',
      mapasTitulo: 'Nossos mapas',
      stat1: 'instituições de apoio',
      stat2: 'pontos turísticos',
      stat3: 'linhas de ônibus',
      stat4: 'idiomas disponíveis',
      footerFollow: 'Siga-nos no Instagram'
    });
    Object.assign(traducciones.ht, {
      cardApoyoD: 'Nou bay oryantasyon ak resous pou moun k ap chèche nouvo opòtinite.',
      cardRutaD: 'Dekouvri kote, istwa ak atraksyon ki fè nou inik.',
      cardVisibilidadT: 'Vizibilite',
      cardVisibilidadD: 'Nou bay vizibilite a istwa, kontribisyon ak bezwen kominote migran an.',
      cardComunidadT: 'Kominote',
      cardComunidadD: 'Konekte, patisipe epi vin yon pati nan yon kominote k ap transfòme.',
      propositoEyebrow: 'Sa k ap motive nou',
      propositoTitulo: 'Objektif nou',
      propositoTexto: 'Nan Serena Conecta nou kwè enfòmasyon ouvri pòt. Nou rasanble nan yon sèl kote rezo sipò, atraksyon ak transpò La Serena, pou chak moun ka oryante tèt yo, patisipe epi santi yo fè pati vil la. Nou vle ankouraje karaktè miltikiltirèl vil La Serena, pou ede vil la vin pi ekitab, jis epi enklizif ak divèsite kiltirèl. Nou vle jenerasyon k ap vini yo kontan epi fyè pou yo viv nan vil nou an.',
      propositoQuote: 'Divèsite kiltirèl se yon fòs ki pouse devlopman',
      valorJusticiaT: 'Jistis',
      valorJusticiaD: 'Nou ankouraje aksè ekitab a enfòmasyon ak rezo sipò, ak yon kilti respè ak responsablite sosyal.',
      valorInclusionT: 'Enklizyon',
      valorInclusionD: 'Nou valorize divèsite moun k ap rive yo ak moun k ap akeyi yo, epi nou travay pou yon vil san baryè.',
      valorSostenibilidadT: 'Dirabilite',
      valorSostenibilidadD: 'Nou pran swen anviwònman nou epi nou ankouraje yon devlopman ki benefisye jenerasyon k ap vini yo tou.',
      mapasTitulo: 'Kat nou yo',
      stat1: 'enstitisyon sipò',
      stat2: 'pwen touristik',
      stat3: 'liy bis',
      stat4: 'lang disponib',
      footerFollow: 'Swiv nou sou Instagram'
    });

    // ===== Diccion formulario de contacto  =====
    Object.assign(traducciones.es, {
      contactoEyebrow: 'Soporte',
      contactoTitulo: 'Comentarios y sugerencias',
      contactoIntro: '¿Tienes una sugerencia para mejorar la plataforma o detectaste algo que podemos arreglar? Cuéntanos y lo tendremos en cuenta.',
      contactoNombre: 'Tu nombre',
      contactoCorreo: 'Tu correo',
      contactoMensaje: 'Tu comentario, sugerencia o reporte de un problema…',
      contactoEnviar: 'Enviar mensaje',
      contactoEnviando: 'Enviando…',
      contactoOk: '¡Gracias! Tu mensaje fue enviado correctamente.',
      contactoError: 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.',
      contactoCampos: 'Completa todos los campos con un correo válido.'
    });
    Object.assign(traducciones.en, {
      contactoEyebrow: 'Support',
      contactoTitulo: 'Comments and suggestions',
      contactoIntro: 'Do you have a suggestion to improve the platform or spotted something we can fix? Tell us and we’ll take it into account.',
      contactoNombre: 'Your name',
      contactoCorreo: 'Your email',
      contactoMensaje: 'Your comment, suggestion or problem report…',
      contactoEnviar: 'Send message',
      contactoEnviando: 'Sending…',
      contactoOk: 'Thank you! Your message was sent successfully.',
      contactoError: 'The message could not be sent. Please try again later.',
      contactoCampos: 'Please fill in all fields with a valid email.'
    });
    Object.assign(traducciones.de, {
      contactoEyebrow: 'Support',
      contactoTitulo: 'Kommentare und Vorschläge',
      contactoIntro: 'Haben Sie einen Vorschlag zur Verbesserung der Plattform oder etwas entdeckt, das wir beheben können? Sagen Sie es uns und wir berücksichtigen es.',
      contactoNombre: 'Ihr Name',
      contactoCorreo: 'Ihre E-Mail',
      contactoMensaje: 'Ihr Kommentar, Vorschlag oder Ihre Problemmeldung…',
      contactoEnviar: 'Nachricht senden',
      contactoEnviando: 'Wird gesendet…',
      contactoOk: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      contactoError: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
      contactoCampos: 'Bitte füllen Sie alle Felder mit einer gültigen E-Mail aus.'
    });
    Object.assign(traducciones.pt, {
      contactoEyebrow: 'Suporte',
      contactoTitulo: 'Comentários e sugestões',
      contactoIntro: 'Tem uma sugestão para melhorar a plataforma ou encontrou algo que podemos corrigir? Conte para nós e levaremos em consideração.',
      contactoNombre: 'Seu nome',
      contactoCorreo: 'Seu e-mail',
      contactoMensaje: 'Seu comentário, sugestão ou relato de um problema…',
      contactoEnviar: 'Enviar mensagem',
      contactoEnviando: 'Enviando…',
      contactoOk: 'Obrigado! Sua mensagem foi enviada com sucesso.',
      contactoError: 'Não foi possível enviar a mensagem. Tente novamente mais tarde.',
      contactoCampos: 'Preencha todos os campos com um e-mail válido.'
    });
    Object.assign(traducciones.ht, {
      contactoEyebrow: 'Sipò',
      contactoTitulo: 'Kòmantè ak sijesyon',
      contactoIntro: 'Èske ou gen yon sijesyon pou amelyore platfòm nan oswa ou jwenn yon bagay nou ka ranje? Di nou epi n ap pran l an kont.',
      contactoNombre: 'Non ou',
      contactoCorreo: 'Imèl ou',
      contactoMensaje: 'Kòmantè, sijesyon oswa rapò yon pwoblèm ou…',
      contactoEnviar: 'Voye mesaj',
      contactoEnviando: 'Ap voye…',
      contactoOk: 'Mèsi! Mesaj ou a voye avèk siksè.',
      contactoError: 'Nou pa t kapab voye mesaj la. Tanpri eseye ankò pita.',
      contactoCampos: 'Tanpri ranpli tout chan yo ak yon imèl ki valab.'
    });

    let idiomaActual = 'es';
    // Último lugar mostrado en cada panel 
    let seleccionInfo = null;
    let seleccionInfo2 = null;

    
    function panelDe(lugar) {
      return lugar.grupo === 'turistica' ? info2 : info;
    }

    // Traduce un dato sino deuvle españl
    function trDato(s) {
      if (!s || typeof datosI18n === 'undefined') return s;
      const m = datosI18n[s];
      return (m && m[idiomaActual]) ? m[idiomaActual] : s;
    }

    function mostrarInfo(lugar) {
      if (lugar.grupo === 'turistica') seleccionInfo2 = lugar;
      else seleccionInfo = lugar;

      const t = traducciones[idiomaActual];
      let html = `<h3>${lugar.nombre}</h3>`;
      html += `<p><strong>${t.direccion}:</strong> ${lugar.direccion}</p>`;
      if (lugar.contacto) html += `<p><strong>${t.contacto}:</strong> ${lugar.contacto}</p>`;
      if (lugar.horario) html += `<p><strong>${t.horario}:</strong> ${trDato(lugar.horario)}</p>`;
      if (lugar.objetivo) html += `<p><strong>${t.objetivo}:</strong> ${trDato(lugar.objetivo)}</p>`;
      if (lugar.descripcion) html += `<p><strong>${t.descripcion}:</strong> ${trDato(lugar.descripcion)}</p>`;
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
      if (typeof favPanelVisible === 'function' && favPanelVisible()) renderFavoritos();
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
        nombre: 'Fondo de Solidaridad e Inversión Social (FOSIS)',
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
        nombre: 'Servicio Nacional de Migraciones de Chile (SERMIG)',
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

      // ===== Instituciones de salud =====
      {
        nombre: 'Servicio de Atención Primaria de Urgencia Cardenal Caro',
        direccion: 'Avenida 4 Esquinas n° 89',
        contacto: '512571836',
        horario: '17:00 a 00:00 hrs.',
        objetivo: 'Servicio de Atención Primaria de Urgencia (SAPU): atención de urgencia de baja complejidad fuera del horario hábil.',
        coords: [-29.93272362217175, -71.2581718368054],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Servicio de Atención Primaria de Urgencia Emilio Schaffhauser',
        direccion: 'Avenida Francisco de Aguirre n° 542',
        contacto: '512221203',
        horario: 'Lunes a Jueves: 17:00 a 08:00 hrs. Viernes: 16:00 a 08:00 hrs. Fines de semana y festivos: 24 horas.',
        objetivo: 'Servicio de Atención Primaria de Urgencia (SAPU): atención de urgencia de baja complejidad fuera del horario hábil.',
        coords: [-29.90581086228118, -71.24970393005945],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Servicio de Atención Primaria de Urgencia Juan Pablo II',
        direccion: 'Avenida Isidoro Campaña N° 3397',
        contacto: '512672985',
        horario: 'Lunes a Viernes: 18:00 a 00:00 hrs. Sábados, Domingos y Festivos: 24 horas.',
        objetivo: 'Servicio de Atención Primaria de Urgencia (SAPU): atención de urgencia de baja complejidad fuera del horario hábil.',
        coords: [-29.867356012996893, -71.22985654233099],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Servicio de Atención Primaria de Urgencia Las Compañías',
        direccion: 'Calle Esmeralda N° 2422',
        contacto: '512253882',
        horario: 'Lunes a Jueves: 17:00 a 00:00 hrs. Viernes: 16:00 a 00:00 hrs. Sábados, domingos y festivos: 08:00 a 00:00 hrs.',
        objetivo: 'Servicio de Atención Primaria de Urgencia (SAPU): atención de urgencia de baja complejidad fuera del horario hábil.',
        coords: [-29.877911675262645, -71.24489462698378],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Servicio de Atención Primaria de Urgencia Pedro Aguirre Cerda',
        direccion: 'Calle Emilio Bello número 918',
        contacto: '512270680',
        horario: 'Lunes a Viernes: 17:00 a 00:00 hrs. Sábados, domingos y festivos: 08:00 a 12:00 hrs.',
        objetivo: 'Servicio de Atención Primaria de Urgencia (SAPU): atención de urgencia de baja complejidad fuera del horario hábil.',
        coords: [-29.91611561295196, -71.2187834920649],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Servicio de Atención Primaria de Urgencia Raúl Silva Henríquez',
        direccion: 'Avenida La Paz número 2070',
        contacto: '512333893 – 512333892',
        horario: 'Lunes a Jueves: 17:00 a 08:00 hrs. Viernes: 16:00 a 08:00 hrs. Fines de semana y festivos: 24 horas.',
        objetivo: 'Servicio de Atención Primaria de Urgencia (SAPU): atención de urgencia de baja complejidad fuera del horario hábil.',
        coords: [-29.880799687116657, -71.22454345767207],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro de Salud Familiar Cardenal Caro',
        direccion: 'Avenida 4 Esquinas n° 89',
        contacto: '512296963',
        horario: 'Lunes a Jueves: 08:00 a 17:00 hrs. Viernes: 08:00 a 16:00 hrs.',
        objetivo: 'Centro de Salud Familiar (CESFAM): atención primaria de salud, controles, exámenes y derivaciones.',
        coords: [-29.932608495366214, -71.25838645767209],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro de Salud Familiar Cardenal Raúl Silva Henríquez',
        direccion: 'Avenida La Paz n° 2470',
        contacto: '512257782',
        horario: 'Lunes a Jueves: 08:00 a 17:00 hrs. Viernes: 08:00 a 16:00 hrs.',
        objetivo: 'Centro de Salud Familiar (CESFAM): atención primaria de salud, controles, exámenes y derivaciones.',
        coords: [-29.881010687982766, -71.22459],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro de Salud Familiar Dr. Emilio Schaffhauser',
        direccion: 'Avenida Francisco de Aguirre n° 255',
        contacto: '512221087',
        horario: 'Lunes a Viernes: 08:00 a 16:30 hrs.',
        objetivo: 'Centro de Salud Familiar (CESFAM): atención primaria de salud, controles, exámenes y derivaciones.',
        coords: [-29.905381589586316, -71.24971391534415],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro de Salud Familiar Juan Pablo II (La Serena)',
        direccion: 'Calle Isidora Campaña n° 3397',
        horario: 'Lunes a Jueves: 08:00 a 17:00 hrs. Viernes: 08:00 a 16:00 hrs.',
        objetivo: 'Centro de Salud Familiar (CESFAM): atención primaria de salud, controles, exámenes y derivaciones.',
        coords: [-29.868093770566144, -71.23016084747597],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro de Salud Familiar Las Compañías',
        direccion: 'Calle Esmeralda n° 2422',
        contacto: '512253882',
        horario: '08:00 a 13:00 hrs.',
        objetivo: 'Centro de Salud Familiar (CESFAM): atención primaria de salud, controles, exámenes y derivaciones.',
        coords: [-29.878229871724436, -71.24516845380931],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro de Salud Familiar Pedro Aguirre Cerda',
        direccion: 'Calle Emilio Bello n° 918',
        contacto: '512253882',
        horario: '08:00 a 17:00 hrs.',
        objetivo: 'Centro de Salud Familiar (CESFAM): atención primaria de salud, controles, exámenes y derivaciones.',
        coords: [-29.91620535436629, -71.21896506686765],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro Comunitario de Salud Familiar Arcos de Pinamar',
        direccion: 'Calle Salvador Reyes esquina Brillador N° 2061',
        horario: 'Lunes a Viernes: 08:00 a 16:30 hrs.',
        objetivo: 'Centro Comunitario de Salud Familiar (CECOSF): atención primaria de salud cercana a la comunidad.',
        coords: [-29.886637008233787, -71.25179016065873],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro Comunitario de Salud Familiar Lambert',
        direccion: 'Pasaje Ernestina Aguirre número 4270',
        contacto: '512251532',
        objetivo: 'Centro Comunitario de Salud Familiar (CECOSF): atención primaria de salud cercana a la comunidad.',
        coords: [-29.886264428795407, -71.22635844483246],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro Comunitario de Salud Familiar Villa Alemania',
        direccion: 'Calle Antonio n° 2834',
        contacto: '512281570',
        objetivo: 'Centro Comunitario de Salud Familiar (CECOSF): atención primaria de salud cercana a la comunidad.',
        coords: [-29.871570282460475, -71.23841357809462],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Centro Comunitario de Salud Familiar Villa el Indio',
        direccion: 'Calle Las Araucarias 4840, 4848',
        contacto: '512336020',
        objetivo: 'Centro Comunitario de Salud Familiar (CECOSF): atención primaria de salud cercana a la comunidad.',
        coords: [-29.943836389117482, -71.2619491453181],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Posta de Salud Rural Algarrobito',
        direccion: 'Calle Callejón Carlos Mery N° S/N',
        objetivo: 'Posta de Salud Rural: atención primaria de salud para sectores rurales.',
        coords: [-29.94081490580648, -71.14648666031118],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Posta de Salud Rural El Romero',
        direccion: 'D-255 113, El Romero, La Serena, Coquimbo',
        objetivo: 'Posta de Salud Rural: atención primaria de salud para sectores rurales.',
        coords: [-29.88947320431564, -71.14063703523772],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Posta de Salud Rural Lambert',
        direccion: 'Calle única # S/N',
        objetivo: 'Posta de Salud Rural: atención primaria de salud para sectores rurales.',
        coords: [-29.841345579853993, -71.1192126296],
        grupo: 'inmigrantes',
        categoria: 2
      },
      {
        nombre: 'Posta de Salud Rural Las Rojas',
        direccion: 'Las Rojas, La Serena, Coquimbo',
        objetivo: 'Posta de Salud Rural: atención primaria de salud para sectores rurales.',
        coords: [-29.977389259209932, -71.05832997538751],
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
      },
      {
        nombre: 'Biblioteca Regional Gabriela Mistral',
        direccion: 'Juan José Latorre 782, 1700000 La Serena, Coquimbo',
        horario: 'Martes a viernes 10:00 - 19:00 hrs. Sábado 11:30 - 18:00 hrs (Cerrado temporalmente por obras).',
        descripcion: 'Hito de arquitectura moderna que rinde homenaje a la poetisa local. Funciona como un centro cultural clave para resguardar la memoria identitaria de la Región de Coquimbo.',
        coords: [-29.905416502645867, -71.2635752706745],
        grupo: 'turistica'
      },
      {
        nombre: 'Iglesia de Santa Inés (Centro Cultural Santa Inés)',
        direccion: 'Manuel Antonio Matta 35-21, 1710007 La Serena, Coquimbo',
        horario: 'Lunes a viernes 9:00 - 17:30 hrs.',
        descripcion: 'Construida en 1544, sufriendo diversos daños de infraestructura a lo largo de los años. En 2010 se convirtió en un importante espacio cultural para las distintas expresiones artísticas de la comuna. Es la única iglesia en nuestro país en transformarse en un centro cultural y combinar su rescate patrimonial con un punto de encuentro turístico, que permite el desarrollo artístico y cultural con eventos.',
        coords: [-29.898168237025587, -71.2522091642139],
        grupo: 'turistica'
      },
      {
        nombre: 'Iglesia San Juan De Dios',
        direccion: 'Av. Balmaceda 915, La Serena, Coquimbo',
        horario: 'Martes y viernes 10:00 - 13:00 hrs. Miércoles y jueves 10:00 - 16:00 hrs. Domingo 8:30 - 11:30 hrs.',
        descripcion: 'Templo colonial de madera y adobe construido a inicios del siglo XIX en La Serena.',
        coords: [-29.9076254645411, -71.24947728305116],
        grupo: 'turistica'
      },
      {
        nombre: 'Capilla y Claustro Casa de La Provincia',
        direccion: 'Justo Donoso 460, 1700000 La Serena, Coquimbo',
        horario: 'Cerrada al público.',
        descripcion: 'Conjunto arquitectónico neoclásico construido en adobe y ladrillo a finales del siglo XIX en La Serena. Destaca por sus grandes patios interiores, coloridos vitrales y por haber albergado históricamente un convento, un orfanato y un colegio de las Hermanas de la Providencia.',
        coords: [-29.902288338768614, -71.24045759861995],
        grupo: 'turistica'
      },
      {
        nombre: 'Casa Museo Gabriela Mistral',
        direccion: 'Avda. Fco de Aguirre 0300, La Serena, Coquimbo',
        horario: 'Lunes a viernes 9:00 - 17:00 hrs.',
        descripcion: 'La Casa de Las Palmeras es el único hogar propio que Gabriela Mistral compró en Chile, adquirido en 1925 tras su regreso de México. Hoy es un Monumento Histórico que funciona como centro cultural, preservando el sueño de la poetisa de crear una escuela experimental en su tierra natal.',
        coords: [-29.905416502645867, -71.2635752706745],
        grupo: 'turistica'
      },
      {
        nombre: 'Sitio de Memoria Cuartel Casa de Piedra (ex CNI)',
        direccion: 'Colo Colo 10, La Serena, Coquimbo',
        horario: 'El recinto no mantiene un horario de atención fijo. Las aperturas y los recorridos guiados se gestionan de forma excepcional o durante fechas conmemorativas.',
        descripcion: 'Inmueble neocolonial en La Serena que funcionó entre 1982 y 1985 como un centro clandestino de detención, operaciones y tortura a cargo de la Central Nacional de Informaciones (CNI).',
        coords: [-29.907910092451488, -71.23477892672764],
        grupo: 'turistica'
      },
      {
        nombre: 'Parque Santa Lucía',
        direccion: 'Parque Santa Lucía, Regimiento, 1700000 La Serena, Coquimbo',
        horario: 'Todos los días 9:00 - 18:00 hrs.',
        descripcion: 'Histórico mirador urbano de La Serena rediseñado por el paisajista alemán Óscar Prager durante el Plan Serena. Destaca por albergar atractivos como un carillón colonial, la escultura Susana saliendo del baño y coloridas bancas de azulejos españoles.',
        coords: [-29.904929711595344, -71.24101848840681],
        grupo: 'turistica'
      },
      {
        nombre: 'Ex Estación de Trenes La Serena (Centro Cultural)',
        direccion: 'Ruta 5 272, La Serena, Coquimbo',
        horario: 'Lunes a viernes 9:00 - 17:30 hrs.',
        descripcion: 'Edificio neocolonial construido en 1944 como parte del Plan Serena. Funcionó hasta 1975 como un eje clave para el transporte y el histórico "Tren Elquino". Hoy funciona como centro cultural, destacando en su vestíbulo el monumental mural "Historia de La Serena" de Gregorio de la Fuente.',
        coords: [-29.902621627424374, -71.25666398089075],
        grupo: 'turistica'
      },
      {
        nombre: 'Plaza de Los Periodistas',
        direccion: 'Arturo Prat 300, 1710088 La Serena, Coquimbo',
        horario: 'Abierto las 24 horas.',
        descripcion: 'Espacio público en el centro histórico de La Serena que rinde homenaje a los profesionales de la prensa.',
        coords: [-29.901805504927413, -71.25133958037269],
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

    // Cruz médica para las instituciones de salud
    const svgSalud = `
      <svg class="pin__glyph" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M9.6 3 h4.8 v6.2 h6.2 v4.8 h-6.2 v6.2 h-4.8 v-6.2 h-6.2 v-4.8 h6.2 z"/>
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
      // Instituciones de salud pin con cruz médica
      if (lugar.categoria === 2) {
        return L.divIcon({
          className: 'marcador-pin',
          html: `<span class="pin pin--cat2 pin--salud">${svgSalud}</span>`,
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
        ],
        paradasVuelta: [
          { n: 'Cabo 2° Pedro Méndez', c: [-29.885048500984546, -71.21769726441804] },
          { n: 'Rector Jorge Miranda, 1680', c: [-29.886792628646464, -71.22520210492502] },
          { n: 'Rector Jorge Miranda', c: [-29.888439080621993, -71.22566338772853] },
          { n: 'Alejandro Flores, 3692', c: [-29.88716002998281, -71.23190757423734] },
          { n: 'La Estrella, 3204-3294', c: [-29.887401941661448, -71.23758069936817] },
          { n: 'Nicaragua, 1510-1580', c: [-29.886555408205965, -71.24263646441806] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'Higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Los Carrera, 216-260', c: [-29.89936122192691, -71.25076354907347] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899414719642706, -71.25361209325423] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Juan De Dios Peni, 761-799', c: [-29.907645548559397, -71.2468582355819] },
          { n: 'Esmeralda, 851-879', c: [-29.9068155931651, -71.24384071346725] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo', c: [-29.909589203937166, -71.22709030865056] },
          { n: 'Colo Colo, 2927', c: [-29.910919080429608, -71.2228846049238] },
          { n: 'Colo Colo', c: [-29.91177465592574, -71.22034187078188] },
          { n: 'Colo Colo', c: [-29.91234193562954, -71.21879691838858] },
          { n: 'Emilio Bello Codesido, 804', c: [-29.913369593896373, -71.21781532026783] },
          { n: 'Juan Pablo I, 837-841', c: [-29.915113203026877, -71.21483806259563] },
          { n: 'Los Girasoles, 4285-4299', c: [-29.92023702635131, -71.21636157793952] },
          { n: 'Panorámica, 1103-1159', c: [-29.922496633365157, -71.21260644725113] },
          { n: 'El Lingue', c: [-29.920674128229066, -71.21875400492334] }
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
        ],
        paradasVuelta: [
          { n: 'Benavente, 892', c: [-29.906971345726195, -71.24656323558192] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Matta, 602-680', c: [-29.905111261940018, -71.25275370492409] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Brasil, 201-291', c: [-29.900649347795227, -71.25267996259639] },
          { n: 'Brasil, 401-485', c: [-29.90072606137503, -71.24989983376034] },
          { n: 'Brasil, 601-689', c: [-29.90040984263141, -71.24693874725226] },
          { n: 'Brasil, 805-895', c: [-29.900372641040484, -71.2440205049243] },
          { n: 'Peatonal La Recova, 742-786', c: [-29.900860945834538, -71.24679926259635] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460-1490', c: [-29.88790881461426, -71.2428456509129] },
          { n: 'Vicente Zorrilla, 1701-1851', c: [-29.884615917354232, -71.23307700492515] },
          { n: 'Dionisio Argandoña, 4003-4063', c: [-29.881536824862458, -71.2257814625973] },
          { n: 'Calle Pintor Mario Carreño, 3902', c: [-29.877364312847703, -71.22375378958134] },
          { n: 'Las Rosas, 3491-3503', c: [-29.87822668414149, -71.23227506074527] },
          { n: 'Rosamel Del Valle, 3096-3140', c: [-29.87228040087645, -71.2300515049257] },
          { n: 'Pintor Luis Vargas Rojas, 3450-3478', c: [-29.868893893930004, -71.22785210492592] },
          { n: 'Capellán Nicolás Correa, 2907-2973', c: [-29.87013123251723, -71.23475076259797] },
          { n: 'Aurora, 2902-2992', c: [-29.86989869599105, -71.24036197608991] }
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
        ],
        paradasVuelta: [
          { n: 'El Lingue', c: [-29.920729921388514, -71.21875400492334] },
          { n: 'Panorámica, 1001-1009', c: [-29.920590425531984, -71.21178030492334] },
          { n: 'Arauco, 4254-4270', c: [-29.918275012218352, -71.21638296259553] },
          { n: 'Arauco, 4115-4301', c: [-29.916917305505997, -71.21962306259557] },
          { n: 'Emilio Bello Codesido, 924-930', c: [-29.915708404050235, -71.21906517793977] },
          { n: 'Emilio Bello Codesido, 830-842', c: [-29.914080995442166, -71.21789580492356] },
          { n: 'Colo Colo / Esq. Cristóbal Moya Miranda', c: [-29.912375288601137, -71.21925818957963] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo, 2455-2499', c: [-29.909159176408604, -71.22813379143201] },
          { n: 'Colo Colo, 935', c: [-29.906348167020425, -71.24407414725196] },
          { n: 'Colo Colo, 802-898', c: [-29.90605286580745, -71.24627616259608] },
          { n: 'Benavente', c: [-29.909207977955898, -71.24685284725182] },
          { n: 'Vicente Zorrilla, 808-896', c: [-29.900926047431494, -71.24509337794056] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460-1490', c: [-29.88790881461426, -71.2428456509129] },
          { n: 'Alejandro Flores, 3616-3620', c: [-29.886801886759567, -71.23294830492502] },
          { n: 'Alejandro Flores, 3692', c: [-29.88669027832084, -71.23199340492499] },
          { n: 'Rector Jorge Miranda, 1601-1617', c: [-29.88787163477297, -71.22549176259702] },
          { n: 'Cabo 2° Pedro Méndez', c: [-29.885048500984546, -71.21769726441804] }
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
        ],
        paradasVuelta: [
          { n: 'Monjitas Poniente', c: [-29.86568876433904, -71.23965920673646] },
          { n: 'Aurora, 3050-3068', c: [-29.86866787054253, -71.24049252950579] },
          { n: 'Aurora, 2771-2799', c: [-29.871861710212418, -71.24082331725793] },
          { n: 'Aurora, 2436-2440', c: [-29.876634266085993, -71.24168157492916] },
          { n: 'Monjitas, 2301-2399', c: [-29.878364569378924, -71.24615553260064] },
          { n: 'El Brillador', c: [-29.88086698015799, -71.25018950376477] },
          { n: 'Sady Zañartu, 2046-2074', c: [-29.884206579533092, -71.25015740376462] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'Higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Los Carrera, 216-260', c: [-29.89936122192691, -71.25076354907347] },
          { n: 'Colón, 335-399', c: [-29.899503032988246, -71.25217975091144] },
          { n: 'Colón, 205-299', c: [-29.899414719642706, -71.25361209325423] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Juan De Dios Peni, 761-799', c: [-29.907645548559397, -71.2468582355819] },
          { n: 'Esmeralda, 851-879', c: [-29.9068155931651, -71.24384071346725] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo', c: [-29.909589203937166, -71.22709030865056] },
          { n: 'Colo Colo, 2927', c: [-29.910919080429608, -71.2228846049238] },
          { n: 'Colo Colo', c: [-29.91177465592574, -71.22034187078188] },
          { n: 'Colo Colo', c: [-29.91234193562954, -71.21879691838858] },
          { n: 'Las Orquídeas, 4369', c: [-29.9159501749816, -71.21294980376328] },
          { n: 'Arauco, 4462-4474', c: [-29.919892970728434, -71.21323945958436] },
          { n: 'Los Girasoles, 4485-4499', c: [-29.921994580028883, -71.21395827677753] },
          { n: 'Los Girasoles, 5288-5316', c: [-29.923844970680616, -71.20884063259882] },
          { n: 'Los Girasoles, 5320-5672', c: [-29.92485847192224, -71.20550395958418] },
          { n: 'Terminal La Florida', c: [-29.91910258793259, -71.20056868842] }
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
        ],
        paradasVuelta: [
          { n: 'Terminal La Florida', c: [-29.91910258793259, -71.20056868842] },
          { n: 'La Foresta', c: [-29.923249886030344, -71.18808030376304] },
          { n: 'Los Girasoles, 5320-5672', c: [-29.92485847192224, -71.20550395958418] },
          { n: 'Los Girasoles, 5288-5316', c: [-29.923844970680616, -71.20884063259882] },
          { n: 'Los Girasoles, 4485-4499', c: [-29.921994580028883, -71.21395827677753] },
          { n: 'Las Orquídeas, 4369', c: [-29.9159501749816, -71.21294980376328] },
          { n: 'Emilio Bello Codesido, 830-842', c: [-29.914415776090138, -71.21789580376335] },
          { n: 'Colo Colo', c: [-29.91220948943755, -71.21878087516961] },
          { n: 'Colo Colo, 2455-2499', c: [-29.909159176408604, -71.22813379143201] },
          { n: 'Colo Colo, 935', c: [-29.90605286580745, -71.24627616259608] },
          { n: 'Colo Colo, 802-898', c: [-29.90605286580745, -71.24627616259608] },
          { n: 'Cienfuegos, 698', c: [-29.905418163200526, -71.24853726259619] },
          { n: 'Cienfuegos, 402-498', c: [-29.902088574988735, -71.24695483259964] },
          { n: 'Colón, 205-299', c: [-29.899414719642706, -71.25361209325423] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Benavente', c: [-29.90323024348975, -71.2456962845477] },
          { n: 'Vicente Zorrilla, 808-896', c: [-29.90131667633082, -71.24503973259976] }
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
          { n: 'Balmaceda, 2581-2865', c: [-29.92410068301468, -71.25714717976267] },
          { n: 'Paradero 6', c: [-29.92771548517216, -71.25837290674575] },
          { n: 'Paradero 7', c: [-29.93198559295166, -71.25971676441809] },
          { n: 'Paradero 8', c: [-29.93664712039143, -71.2613582355819] },
          { n: 'Paradero 9', c: [-29.939516512505783, -71.26244183558191] },
          { n: 'Paradero 10', c: [-29.942210321087448, -71.26424703558195] },
          { n: 'Paradero 11', c: [-29.945870825274707, -71.26688363558193] },
          { n: 'Micaela Godoy De Julia', c: [-29.95528076175616, -71.26785723558193] },
          { n: 'Linares, 321', c: [-29.961434351594686, -71.26361667976266] },
          { n: 'Linares, 801-899', c: [-29.962124432807485, -71.25644983558193] },
          { n: 'Talca, 1168-1198', c: [-29.961781737272865, -71.25234736441806] },
          { n: 'Bio Bio, 880-886', c: [-29.964113546302325, -71.25654633558189] },
          { n: 'Presidente Alessandri, 1001-1099', c: [-29.966836931009002, -71.26327335832644] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961222875924978, -71.26630963558192] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961269351278347, -71.26630963558192] }
        ],
        paradasVuelta: [
          { n: 'Cruce La Cantera', c: [-29.98340772219868, -71.2618571337563] },
          { n: 'Parque Nacional La Campaña, 1514-1562', c: [-29.97094039770912, -71.25993133375687] },
          { n: 'René Schneider, 798', c: [-29.964118173881435, -71.25631573375722] },
          { n: 'Alerce, 1201-1225', c: [-29.961989680132774, -71.25187394724932] },
          { n: 'René Schneider, 470-480', c: [-29.96130188868976, -71.25596166259339] },
          { n: 'Talca, 146', c: [-29.960620972556935, -71.26419339142947] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961273973777924, -71.26633646259336] },
          { n: 'Balmaceda Servicio', c: [-29.94897584318941, -71.26778483375803] },
          { n: 'Paradero 11', c: [-29.946179921452973, -71.2666006723815] },
          { n: 'Paradero 10', c: [-29.94251244323952, -71.26408074354566] },
          { n: 'Paradero 9', c: [-29.93973496914165, -71.26220044169358] },
          { n: 'Paradero 8', c: [-29.93685627762762, -71.26107392634952] },
          { n: 'Paradero 7', c: [-29.93218547055633, -71.25949682820196] },
          { n: 'Paradero 6', c: [-29.927893285869146, -71.25807790121847] },
          { n: 'Balmaceda, 2750-2850', c: [-29.92394264227129, -71.2568306625952] },
          { n: 'Balmaceda, 2420-2500', c: [-29.92273382614702, -71.2562191202674] },
          { n: 'Paradero 4', c: [-29.920818200516823, -71.25518913375929] },
          { n: 'Balmaceda, 1802-1940', c: [-29.91832149726336, -71.25382663375956] },
          { n: 'Paradero 2', c: [-29.916062905440445, -71.25281676259569] },
          { n: 'Paradero 1', c: [-29.912421081732, -71.25084933375976] },
          { n: 'Balmaceda, 1100-1136', c: [-29.90967298067755, -71.25002322026802] },
          { n: 'Hospital La Serena', c: [-29.907794373908988, -71.24983546259611] },
          { n: 'Juan De Dios Peni, 761-799', c: [-29.907645548559397, -71.2468582355819] },
          { n: 'Benavente, 892', c: [-29.906971345726195, -71.24656323558192] },
          { n: 'Cienfuegos, 698', c: [-29.905418163200526, -71.24853726259619] },
          { n: 'Cienfuegos, 560-598', c: [-29.903783597477485, -71.24737595829814] },
          { n: 'Cienfuegos, 402-498', c: [-29.901716550382673, -71.24696556259637] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460-1490', c: [-29.88790881461426, -71.2428456509129] },
          { n: 'Bandera', c: [-29.886319692912842, -71.24367612026916] },
          { n: 'Diecinueve De Junio, 1711-1777', c: [-29.88407522055767, -71.24525432026931] },
          { n: 'Canadá, 2170-2186', c: [-29.878448313530065, -71.2437307337614] },
          { n: 'Baquedano, 2712-2792', c: [-29.87200130369068, -71.2422609049257] },
          { n: 'Nicolás Munizaga, 2644', c: [-29.86873569729674, -71.24212150492589] },
          { n: 'Isaac Varas C, 2655-2689', c: [-29.866009684069905, -71.2407695914342] },
          { n: 'Aurora, 3050-3068', c: [-29.86850309684136, -71.24054434910606] }
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
        ],
        paradasVuelta: [
          { n: 'Monjitas 2302-2398', c: [-29.87674459283542, -71.24573424488504] },
          { n: 'Isaac Varas C, 2655-2689', c: [-29.86621437106242, -71.24073740376531] },
          { n: 'Janequeo, 3425-3445', c: [-29.871043064524283, -71.22850661725786] },
          { n: 'Circunvalación monjitas oriente', c: [-29.87231757838019, -71.23185400376522] },
          { n: 'Colombia, 2804-2846', c: [-29.87377772807155, -71.2343227712014] },
          { n: 'Lautaro, 3362', c: [-29.876076915130128, -71.23328917327636] },
          { n: 'Venezuela, 2496-2508', c: [-29.878545209122358, -71.22880803200918] },
          { n: 'Dionisio Argandoña, 4003-4063', c: [-29.881722874999067, -71.22576000376476] },
          { n: 'Gaspar Marín, 3202-3298', c: [-29.883471682008167, -71.23640300376466] },
          { n: 'Gaspar Marín, 2741-2799', c: [-29.882206577452685, -71.24158507492892] },
          { n: 'Nicaragua, 1510-1580', c: [-29.886555408205965, -71.24263646441806] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Liber Bernardo O\'higgins, 101-199', c: [-29.899131030562174, -71.2482637355721] },
          { n: 'Los carrera, 216-260', c: [-29.89936122192691, -71.25076354907347] },
          { n: 'Colón, 205-299', c: [-29.899414719642706, -71.25361209325423] },
          { n: 'Pasarela Líder', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Liceo Tecnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Bomberos', c: [-29.905398380101314, -71.24991022691012] },
          { n: 'Urgencias', c: [-29.90866455171419, -71.24824889826108] },
          { n: 'Larraín Alcalde, 1454-1496', c: [-29.91508571571116, -71.2496111887568] },
          { n: 'Gabriel González Videla, 1645', c: [-29.91635231619403, -71.24742539322061] },
          { n: 'Gabriel González Videla, 1900-1932', c: [-29.919372273964516, -71.24912737492738] },
          { n: 'Tretert', c: [-29.922273472406477, -71.24974967492723] },
          { n: 'Gabriel González Videla, 2793', c: [-29.926500409553665, -71.25088250376294] },
          { n: 'Gabriel González Videla, 3178-3248', c: [-29.930630701926237, -71.25270988656926] },
          { n: 'Cuatro Esquinas, 119-785', c: [-29.935114785594426, -71.25542569055698] },
          { n: 'Paradero 11', c: [-29.946179921452973, -71.2666006723815] },
          { n: 'Pedro Lira, 172-198', c: [-29.951188270975305, -71.26669053259755] },
          { n: 'Juan Antonio Ríos, 10-76', c: [-29.955573574961598, -71.26236143259744] },
          { n: 'Santiago, 800-898', c: [-29.959526479728552, -71.2561011749258] },
          { n: 'General Oscar Bonilla, 323-379', c: [-29.960000499034365, -71.2519383749257] },
          { n: 'Valdivia, 961-999', c: [-29.966135158800505, -71.25252843259699] },
          { n: 'Valdivia, 924-998', c: [-29.965939974956346, -71.25633720376119] },
          { n: 'Presidente Alessandri, 1001-1099', c: [-29.96701818589587, -71.26328944608964] },
          { n: 'Ruta 43 A Ovalle', c: [-29.961469170008844, -71.26631500376143] },
          { n: 'Ruta 43', c: [-29.977628907015653, -71.26301494755391] },
          { n: 'Terminal Pan de Azucar', c: [-30.001541292339898, -71.25947000375972] }
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
        ],
        paradasVuelta: [
          { n: 'Vicente Zorrilla, 808-896', c: [-29.90132597700039, -71.24502900376399] },
          { n: 'Brasil, 805-895', c: [-29.900791174270676, -71.244020503764] },
          { n: 'Vicente Zorrilla, 1701-1851', c: [-29.88486707720306, -71.23306627492886] },
          { n: 'Venezuela, 2496-2508', c: [-29.878559980589525, -71.22880700376487] },
          { n: 'Rosamel Del Valle, 3096-3140', c: [-29.87248507500382, -71.23006223260093] },
          { n: 'Koyan, 3364-3392', c: [-29.86837758249413, -71.23080787492955] }
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
        ],
        paradasVuelta: [
          { n: 'Varela, 902-998', c: [-29.952471174963133, -71.33669613259751] },
          { n: 'Plaza De Armas', c: [-29.953134774902242, -71.33773378180373] },
          { n: 'Varela, 1201-1299', c: [-29.955241742197824, -71.33770299512922] },
          { n: 'Varela, 1401-1499', c: [-29.957156184056277, -71.33812307492578] },
          { n: 'Eleuterio Ramírez, 302-394', c: [-29.961343674958737, -71.33808020376132] },
          { n: 'Hospital Coquimbo', c: [-29.967608374955564, -71.33613820376112] },
          { n: 'Romana', c: [-29.968472774955117, -71.33532820376115] },
          { n: 'Lider Norte', c: [-29.96681827495589, -71.33262993259696] },
          { n: 'Miraflores, 77', c: [-29.96611190133171, -71.3303983706032] },
          { n: 'Escuela Hogar', c: [-29.967320194014746, -71.32599954793999] },
          { n: 'Sodimac', c: [-29.96660456409687, -71.3222765460897] },
          { n: 'Puente Culebron', c: [-29.966107285725837, -71.32127340376118] },
          { n: 'Card Raúl Silva Henríquez', c: [-29.967083185907846, -71.31030323259698] },
          { n: 'La Cantera, 627-655', c: [-29.969443963564196, -71.30638723259689] },
          { n: 'La Cantera, 2300-2398', c: [-29.973802881056564, -71.29879113259668] },
          { n: 'Su Santidad Pío Xii, 3315-3341', c: [-29.974648668769422, -71.30038973259668] },
          { n: 'Card Jorge Medina Estévez, 2344-2356', c: [-29.977594800791774, -71.29855517492494] },
          { n: 'Fray Pedro De Azuaga, 2705', c: [-29.982548061105568, -71.29702093259634] },
          { n: 'Narciso Herrera, 3786-3810', c: [-29.97795718144316, -71.28394246143226] },
          { n: 'Ruta 43', c: [-29.977571574950492, -71.26303727492488] },
          { n: 'Ruta 43, Sector Esfuerzo Campesino', c: [-30.05271014313339, -71.2605452556731] },
          { n: 'Ruta 43, 171', c: [-30.074283967323307, -71.24337126878615] }
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
        ],
        paradasVuelta: [
          { n: 'Camino A Huachalalume, 37', c: [-29.976202283600788, -71.24140430674578] },
          { n: 'Camino A Huachalalume, 1740', c: [-29.97717178905866, -71.24532793558191] },
          { n: 'Esteban Del Canto, 1485', c: [-29.97812102871339, -71.2514197877658] },
          { n: 'Camino A Huachalalume, 36', c: [-29.978120084335554, -71.25905510859877] },
          { n: 'Parque Magallanes, 1643', c: [-29.975757146856754, -71.25420531163847] },
          { n: 'Parque Magallanes, 1504', c: [-29.971760105913127, -71.25272385277957] },
          { n: 'Calle Parque Nacional Hornopirén, 1329', c: [-29.971785041599357, -71.25091217116264] },
          { n: 'Calle Manuel Del Cruz V, 1185', c: [-29.972016870558708, -71.24957111163762] },
          { n: 'Calle Santo Cura De Ars, 1608', c: [-29.97223571821263, -71.24656264729356] },
          { n: 'Calle Santo Cura De Ars / El Kiwal', c: [-29.969508881374853, -71.24645763558198] },
          { n: 'El Kiwal', c: [-29.96855838953748, -71.24902477040274] },
          { n: 'Calle Cabo Exequiel Aroca, 1002', c: [-29.96776099710826, -71.25022775463037] },
          { n: 'Calle Cabo Exequiel Aroca, 942', c: [-29.96615982695602, -71.25084427486762] },
          { n: 'Calle Cabo Exequiel Aroca, 716', c: [-29.964345043183524, -71.24794108213102] },
          { n: 'Aroca / Talca', c: [-29.963317964575438, -71.24653828681629] },
          { n: 'Talca / Antonio Vargas Figueroa', c: [-29.962509244015173, -71.24849592683695] },
          { n: 'Cabo Exequiel Aroca', c: [-29.96109740598673, -71.2503290576723] },
          { n: 'René Schneider, 470-480', c: [-29.96130188868976, -71.25596166259339] },
          { n: 'Talca, 500-598', c: [-29.960888245634496, -71.26026930674578] },
          { n: 'Talca, 402-496', c: [-29.960665155013317, -71.2627584067458] },
          { n: 'Santiago, 401-497', c: [-29.958759651182234, -71.2625437644181] },
          { n: 'Juan Antonio Ríos, 10-76', c: [-29.955392335613165, -71.26236679325422] },
          { n: 'Regimiento Arica, 310-364', c: [-29.952610586363736, -71.26410482883615] },
          { n: 'Regimiento Arica, 601-699', c: [-29.95030053417763, -71.26692120674575] },
          { n: 'Balmaceda Servicio', c: [-29.94897584318941, -71.26778483375803] },
          { n: 'Paradero 11', c: [-29.946179921452973, -71.2666006723815] },
          { n: 'Paradero 10', c: [-29.94251244323952, -71.26408074354566] },
          { n: 'Paradero 9', c: [-29.93973496914165, -71.26220044169358] },
          { n: 'Paradero 8', c: [-29.93685627762762, -71.26107392634952] },
          { n: 'Terminal El Santo', c: [-29.93173918594235, -71.26308023558191] },
          { n: '4 Esquinas Norte', c: [-29.928322193759776, -71.27076207790962] },
          { n: 'Pasarela Jumbo', c: [-29.915796725826866, -71.26129392883612] },
          { n: 'Mall', c: [-29.911994312615594, -71.25625348587879] },
          { n: 'Francisco De Aguirre, 107-141', c: [-29.90553908752631, -71.25632102883615] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Matta, 602-680', c: [-29.905111261940018, -71.25275370492409] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Brasil, 201-291', c: [-29.900649347795227, -71.25267996259639] },
          { n: 'Brasil, 401-485', c: [-29.90072606137503, -71.24989983376034] },
          { n: 'Brasil, 601-689', c: [-29.90040984263141, -71.24693874725226] },
          { n: 'Brasil, 805-895', c: [-29.900372641040484, -71.2440205049243] },
          { n: 'Infante, 407-491', c: [-29.901581774273776, -71.24418677116385] },
          { n: 'Infante, 547-599', c: [-29.903962641510745, -71.24455156441807] },
          { n: 'Lautaro, 801-899', c: [-29.905273443736966, -71.24487259325419] },
          { n: 'Colo Colo, 802-898', c: [-29.90605286580745, -71.24627616259608] },
          { n: 'Cienfuegos, 698', c: [-29.905418163200526, -71.24853726259619] }
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
          { n: 'Almagro, 506', c: [-29.898161627573607, -71.24924550674578] },
          { n: 'Pedro Pablo Muñoz, 104', c: [-29.898454928216974, -71.25342803558193] },
          { n: 'Pedro Pablo Muñoz, 340-390', c: [-29.901809634972654, -71.25411096441809] },
          { n: 'Pedro Pablo Muñoz, 831', c: [-29.906220945062195, -71.25442970674578] },
          { n: 'El Sto, 1060', c: [-29.909473052167, -71.25521603558192] },
          { n: 'Mall Plaza La Serena', c: [-29.91268174404274, -71.25671960830657] }
        ],
        paradasVuelta: [
          { n: 'Mall Plaza La Serena', c: [-29.911994312615594, -71.25625348587879] },
          { n: 'Santo Tomas', c: [-29.9088374423401, -71.25807487627199] },
          { n: 'Francisco De Aguirre, 107-141', c: [-29.905994774986695, -71.25632103259952] },
          { n: 'Liceo Técnico', c: [-29.905622789277697, -71.25366028650846] },
          { n: 'Pasarela Lider', c: [-29.902381630830945, -71.25631570674578] },
          { n: 'Brasil, 201-291', c: [-29.900649347795227, -71.25267996259639] },
          { n: 'Brasil, 401-485', c: [-29.90072606137503, -71.24989983376034] },
          { n: 'Brasil, 601-689', c: [-29.90040984263141, -71.24693874725226] },
          { n: 'Nicaragua, 1460', c: [-29.891094715297562, -71.24373616440414] },
          { n: 'Nicaragua, 1460-1490', c: [-29.88790881461426, -71.2428456509129] },
          { n: 'Bandera', c: [-29.886560074996652, -71.24348403260035] },
          { n: 'La Conquista, 1605-1629', c: [-29.885704274997, -71.24579076143604] },
          { n: 'Diecinueve De Junio, 1711-1777', c: [-29.884298474997834, -71.24521140376459] },
          { n: 'Monjitas, 2302-2398', c: [-29.876773780923653, -71.24573706143644] },
          { n: 'Baquedano, 2712-2792', c: [-29.872205978390543, -71.24226090376516] },
          { n: 'Perú, 2735-2785', c: [-29.872633871657744, -71.23618840376521] },
          { n: 'Bolivia, 2669-2679', c: [-29.872694364985545, -71.23458986143666] },
          { n: 'Rosamel Del Valle, 3096-3140', c: [-29.87245716491935, -71.23007296143669] },
          { n: 'Chañar Blanco, 2643', c: [-29.87559354050625, -71.22643314184457] },
          { n: 'Calle Pintor Mario Carreño, 3902', c: [-29.877364312847703, -71.22375378958134] },
          { n: 'Cementerio', c: [-29.875527588616336, -71.21831080942654] }
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
        ],
        paradasVuelta: [
          { n: 'Las Pircas', c: [-29.88844993057041, -71.21840978862011] },
          { n: 'Las Vertientes', c: [-29.889478527829823, -71.21872619717402] },
          { n: 'Av. Islón', c: [-29.891484617635108, -71.24909756441807] },
          { n: 'Ruta 5', c: [-29.903201749950345, -71.25673034063533] },
          { n: 'Av. Francisco de Aguirre', c: [-29.905877544519957, -71.25523954739721] },
          { n: 'Pedro Pablo Muñoz', c: [-29.906253121957906, -71.25432755594056] },
          { n: 'Av. El Santo', c: [-29.9096420542056, -71.25521698067627] },
          { n: 'Huanhualí', c: [-29.915009296198807, -71.25279325208902] },
          { n: 'Balmaceda', c: [-29.939440888764747, -71.26223787647668] },
          { n: 'Regimiento Arica', c: [-29.949485608032816, -71.27071649036561] },
          { n: 'Miramar', c: [-29.952814992542812, -71.28599534310645] },
          { n: 'José Joaquín Pérez', c: [-29.96163229394761, -71.30104101573413] },
          { n: 'Gerónimo Méndez Arancibia', c: [-29.960917560646973, -71.3061902153615] },
          { n: 'Panamericana Norte', c: [-29.961247580150435, -71.31065529550811] },
          { n: 'Av. Suecia', c: [-29.968837655490848, -71.31892007953496] },
          { n: 'Manuel Jesús Rivera', c: [-29.97000162954182, -71.32824318807891] },
          { n: 'Av. Presidente Alessandri', c: [-29.971853875102923, -71.3364203964599] },
          { n: 'Luis Balanda', c: [-29.97286749887974, -71.33698392523654] },
          { n: 'Los Tulipanes', c: [-29.974730863849356, -71.33921545879319] },
          { n: 'Los Diamelos', c: [-29.976906629938515, -71.34024014865864] },
          { n: 'Las Azucenas', c: [-29.978611480103247, -71.34068377111414] },
          { n: 'Los Clarines', c: [-29.98788357223184, -71.33248068123974] },
          { n: 'Francisco Cabello Cardenas', c: [-29.99468109371575, -71.32864773380021] },
          { n: 'Las Vertientes', c: [-29.994897441541955, -71.32987586538901] },
          { n: 'Glorias Navales', c: [-29.995052561201494, -71.33075474475459] },
          { n: 'Carlos Muñoz Pizarro', c: [-29.994760358087575, -71.33199600544636] },
          { n: 'Av. Portugal Sur', c: [-29.99667030430963, -71.33381339229238] },
          { n: 'Av. El Sauce', c: [-30.001408623161193, -71.33310592265439] },
          { n: 'Av. Alberto Hurtado Cruchaga', c: [-30.00501044954528, -71.32914606056121] }
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
        ],
        paradasVuelta: [
          { n: 'Lautaro', c: [-29.8741350046185, -71.24654695769784] },
          { n: 'Monjitas', c: [-29.87369451023574, -71.24571559143375] },
          { n: 'Gaspar Marín', c: [-29.88198799457962, -71.24160116440602] },
          { n: 'La Conquista', c: [-29.885322912061813, -71.24573711349154] },
          { n: 'Alejandro Flores', c: [-29.882622389133225, -71.24824050018049] },
          { n: 'El Brillador', c: [-29.884310292920194, -71.2512428257082] },
          { n: 'Salvador Reyes', c: [-29.887547892075094, -71.24889762236577] },
          { n: 'La Reconquista', c: [-29.888443532843464, -71.24868611155505] },
          { n: 'Jorge Peña Hen', c: [-29.8893690174736, -71.24832701329365] },
          { n: 'Av. Islón', c: [-29.891628742705795, -71.24912438800116] },
          { n: 'Ruta 5', c: [-29.903201749950345, -71.25673034063533] },
          { n: 'Av. Francisco de Aguirre', c: [-29.905877544519957, -71.25523954739721] },
          { n: 'Pedro Pablo Muñoz', c: [-29.906253121957906, -71.25432755594056] },
          { n: 'Av. El Santo', c: [-29.9096420542056, -71.25521698067627] },
          { n: 'Huanhuali', c: [-29.915009296198807, -71.25279325208902] },
          { n: 'Av. Balmaceda', c: [-29.939440888764747, -71.26223787647668] },
          { n: 'Av. Regimiento Arica', c: [-29.949485608032816, -71.27071649036561] },
          { n: 'Miramar', c: [-29.952814992542812, -71.28599534310645] },
          { n: 'José Joaquín Pérez', c: [-29.96163229394761, -71.30104101573413] },
          { n: 'av. La Cantera', c: [-29.964954960409703, -71.3136581510741] },
          { n: 'Panamericana norte', c: [-29.965616252321855, -71.32079619974095] },
          { n: 'Chorrillos', c: [-29.966005302167574, -71.32847512685424] },
          { n: 'Domeyko', c: [-29.965426274196037, -71.33085104807608] },
          { n: 'Los Nogales', c: [-29.96723206762506, -71.33468008827494] },
          { n: 'Av. Pedro Nolasco Videla', c: [-29.963144385213127, -71.33656044411201] },
          { n: 'Av. Varela', c: [-29.954920533263564, -71.33755922016897] },
          { n: 'Las Heras', c: [-29.95205885715408, -71.33784236604683] },
          { n: 'Aníbal Pinto', c: [-29.951829556730424, -71.33884201826422] },
          { n: 'Balmaceda', c: [-29.958803316053142, -71.34096005875642] },
          { n: 'Bernardo O’Higgins', c: [-29.959333438957668, -71.34172611389525] },
          { n: 'Pedro Montt', c: [-29.959354310203185, -71.34332567769528] },
          { n: 'Manuel Rodríguez', c: [-29.959396664714287, -71.34572273620013] },
          { n: 'Luis Cruz Martinez', c: [-29.95999437590536, -71.34660938203994] },
          { n: 'Buen Pastor', c: [-29.959802049213472, -71.34808929266987] },
          { n: 'La Pampilla', c: [-29.960352811226457, -71.34910477773765] },
          { n: 'Guacolda', c: [-29.963684695664902, -71.3459539157331] },
          { n: 'Wenceslao Vargas', c: [-29.96862348359715, -71.34081890161947] },
          { n: 'Dario Salas', c: [-29.971218221650695, -71.33907904357888] },
          { n: 'Panamericana norte', c: [-29.973019419103743, -71.34097289051752] },
          { n: 'Los Clarines', c: [-29.97826546650779, -71.34524199974891] },
          { n: 'Merino Jarpa', c: [-29.980741577512603, -71.34654128775713] },
          { n: 'Av. El Sauce', c: [-29.994968444975203, -71.33869902134437] },
          { n: 'Av. Alberto Hurtado Cruchaga', c: [-30.00501044954528, -71.32914606056121] }
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

      const t = traducciones[idiomaActual];
      const paradas = paradasDe(linea);
      const sufijo = (sentidoActivo === 'vuelta' && linea.paradasVuelta) ? ` (${t.sentidoVuelta.toLowerCase()})` : '';
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
              `<div class="popup-content"><h3>${t.lineaLabel} ${num}${sufijo}</h3><p><strong>${t.paradaLabel} ${i + 1}:</strong> ${p.n}</p><button type="button" class="popup-fav" data-fav="${datosFav(p)}">★ <span></span></button></div>`
            )
            .addTo(capaLinea);
        };
        if (paso) setTimeout(poner, i * paso);
        else poner();
      });
    }

    // ===== Paraderos favoritos =====
    Object.assign(traducciones.es, { favBtn: 'Mis paraderos', favTitulo: 'Mis paraderos favoritos', favVacio: 'Aún no guardas paraderos. Abre una línea, toca un paradero del mapa y pulsa la estrella ★.', favGuardar: 'Guardar paradero', favQuitar: 'Quitar de favoritos', lineaLabel: 'Línea', paradaLabel: 'Parada' });
    Object.assign(traducciones.en, { favBtn: 'My stops', favTitulo: 'My favorite stops', favVacio: 'You haven’t saved any stops yet. Open a line, tap a stop on the map and press the star ★.', favGuardar: 'Save stop', favQuitar: 'Remove from favorites', lineaLabel: 'Line', paradaLabel: 'Stop' });
    Object.assign(traducciones.de, { favBtn: 'Meine Haltestellen', favTitulo: 'Meine Lieblingshaltestellen', favVacio: 'Du hast noch keine Haltestellen gespeichert. Öffne eine Linie, tippe auf eine Haltestelle und drücke den Stern ★.', favGuardar: 'Haltestelle speichern', favQuitar: 'Aus Favoriten entfernen', lineaLabel: 'Linie', paradaLabel: 'Haltestelle' });
    Object.assign(traducciones.pt, { favBtn: 'Meus pontos', favTitulo: 'Meus pontos favoritos', favVacio: 'Você ainda não salvou pontos. Abra uma linha, toque em um ponto no mapa e pressione a estrela ★.', favGuardar: 'Salvar ponto', favQuitar: 'Remover dos favoritos', lineaLabel: 'Linha', paradaLabel: 'Parada' });
    Object.assign(traducciones.ht, { favBtn: 'Estasyon mwen yo', favTitulo: 'Estasyon mwen pi renmen yo', favVacio: 'Ou poko sove okenn estasyon. Louvri yon liy, tape yon estasyon sou kat la epi peze zetwal la ★.', favGuardar: 'Sove estasyon', favQuitar: 'Retire nan favori', lineaLabel: 'Liy', paradaLabel: 'Estasyon' });

    const FAV_KEY = 'sc_favoritos';
    const capaFav = L.layerGroup().addTo(map3);

    function cargarFav() {
      try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (e) { return []; }
    }
    function guardarFav(arr) {
      try { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); } catch (e) {}
    }
    function favId(p) { return p.n + '@' + p.c[0].toFixed(5) + ',' + p.c[1].toFixed(5); }
    function esFav(p) { return cargarFav().some((f) => favId(f) === favId(p)); }
    function toggleFav(p) {
      const arr = cargarFav();
      const i = arr.findIndex((f) => favId(f) === favId(p));
      if (i >= 0) arr.splice(i, 1); else arr.push({ n: p.n, c: p.c });
      guardarFav(arr);
    }
    function datosFav(p) { return encodeURIComponent(JSON.stringify({ n: p.n, c: p.c })); }

    function favPanelVisible() {
      const panel = document.getElementById('microPanelLateral');
      return !!(panel && panel.querySelector('.fav-panel'));
    }

    function renderFavoritos() {
      const panel = document.getElementById('microPanelLateral');
      if (!panel) return;
      const t = traducciones[idiomaActual];
      const favs = cargarFav();
      if (!favs.length) {
        panel.innerHTML = `<div class="fav-panel"><h3 class="fav-panel__tit">★ ${t.favTitulo}</h3><p class="fav-vacio">${t.favVacio}</p></div>`;
        return;
      }
      const items = favs.map((f, idx) =>
        `<li class="fav-item"><button type="button" class="fav-ir" data-fav-idx="${idx}"><span class="fav-estrella">★</span><span>${f.n}</span></button><button type="button" class="fav-del" data-fav-del="${idx}" title="${t.favQuitar}" aria-label="${t.favQuitar}">×</button></li>`
      ).join('');
      panel.innerHTML = `<div class="fav-panel"><h3 class="fav-panel__tit">★ ${t.favTitulo}</h3><ul class="fav-lista">${items}</ul></div>`;
    }

    function mostrarFavEnMapa(f) {
      capaFav.clearLayers();
      map3.setView(f.c, 16, { animate: true });
      L.circleMarker(f.c, { radius: 9, color: '#ffffff', weight: 3, fillColor: '#f59e0b', fillOpacity: 1 })
        .bindPopup(`<div class="popup-content"><h3>★ ${f.n}</h3><button type="button" class="popup-fav" data-fav="${datosFav(f)}">★ <span></span></button></div>`)
        .addTo(capaFav)
        .openPopup();
      document.getElementById('map3')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Estrella dentro de los popups de paradero
    map3.on('popupopen', (e) => {
      const el = e.popup.getElement();
      if (!el) return;
      const btn = el.querySelector('.popup-fav');
      if (!btn) return;
      let p;
      try { p = JSON.parse(decodeURIComponent(btn.getAttribute('data-fav'))); } catch (err) { return; }
      const sync = () => {
        const fav = esFav(p);
        const t = traducciones[idiomaActual];
        btn.classList.toggle('is-fav', fav);
        btn.setAttribute('aria-pressed', fav ? 'true' : 'false');
        const span = btn.querySelector('span');
        if (span) span.textContent = fav ? t.favQuitar : t.favGuardar;
      };
      sync();
      btn.onclick = () => {
        toggleFav(p);
        sync();
        if (favPanelVisible()) renderFavoritos();
      };
    });

    // Panel de favoritos ir al paradero o quitarlo
    const microPanelFavEl = document.getElementById('microPanelLateral');
    if (microPanelFavEl) {
      microPanelFavEl.addEventListener('click', (e) => {
        const del = e.target.closest('[data-fav-del]');
        if (del) {
          const arr = cargarFav();
          arr.splice(+del.getAttribute('data-fav-del'), 1);
          guardarFav(arr);
          renderFavoritos();
          return;
        }
        const ir = e.target.closest('[data-fav-idx]');
        if (ir) {
          const f = cargarFav()[+ir.getAttribute('data-fav-idx')];
          if (f) mostrarFavEnMapa(f);
        }
      });
    }

    document.getElementById('microFavBtn')?.addEventListener('click', renderFavoritos);

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
        // Prioriza las paradas enn nombre empieza con la búsqueda
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

    // ===== Formulario de contacto =====
    const contactoForm = document.getElementById('contactoForm');
    if (contactoForm) {
      const FORM_ENDPOINT = 'https://formsubmit.co/ajax/benjamin.fortes@userena.cl';
      contactoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const t = traducciones[idiomaActual];
        const btn = document.getElementById('cfEnviar');
        const btnSpan = btn.querySelector('span');
        const msg = document.getElementById('cfMsg');
        const nombre = document.getElementById('cfNombre').value.trim();
        const correo = document.getElementById('cfCorreo').value.trim();
        const mensaje = document.getElementById('cfMensaje').value.trim();
        const honey = document.getElementById('cfHoney').value;

        msg.className = 'sc-contacto__msg';
        const correoOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
        if (!nombre || !mensaje || !correoOk) {
          msg.textContent = t.contactoCampos;
          msg.classList.add('sc-contacto__msg--error', 'visible');
          return;
        }
        if (honey) return; 

        const original = btnSpan.textContent;
        btn.disabled = true;
        btnSpan.textContent = t.contactoEnviando;
        msg.textContent = '';

        try {
          const resp = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              nombre,
              correo,
              mensaje,
              _subject: 'Nuevo mensaje desde Serena Conecta'
            })
          });
          if (!resp.ok) throw new Error('FormSubmit respondió ' + resp.status);
          msg.textContent = t.contactoOk;
          msg.classList.add('sc-contacto__msg--ok', 'visible');
          contactoForm.reset();
        } catch (err) {
          console.warn('Error al enviar el formulario de contacto:', err);
          msg.textContent = t.contactoError;
          msg.classList.add('sc-contacto__msg--error', 'visible');
        } finally {
          btn.disabled = false;
          btnSpan.textContent = original;
        }
      });
    }
