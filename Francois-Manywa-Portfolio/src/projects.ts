export interface Project {
  id: number;
  slug: string;
  title: string;
  line1: string;
  line2: string;
  category: string;
  context: string;
  description: string;
  color: string;
  accent: string;
  stack: string[];
  role: string;
  cover?: string;
  coverAlt?: string;
  sections: { title: string; body: string }[];
  deliverables: string[];
}
export const projects: Project[] = [
  {
    id: 1,
    slug: "tillit-genai",
    title: "Tillit · GenAI & data",
    line1: "TILLIT",
    line2: "GENAI & DATA",
    category: "Stage · full stack & AI",
    context: "Bedrijfsdata, in je eigen woorden.",
    description:
      "Tijdens mijn stage bij Tillit werk ik mee aan een full-stack platform waarmee gebruikers bedrijfsdata in natuurlijke taal kunnen bevragen.",
    color: "#17131f",
    accent: "#b794dd",
    stack: [
      ".NET 10 / C#",
      "Semantic Kernel",
      "Azure OpenAI",
      "React / TypeScript",
      "SQL Server",
      "Microsoft Fabric",
    ],
    role: "Stagiair Software Developer · vanaf februari 2026",
    sections: [
      {
        title: "Van vraag naar inzicht.",
        body: "Ik werk aan de .NET-backend, REST API’s en React-schermen. Semantic Kernel en Azure OpenAI ondersteunen schema-aware prompting, SQL-generatie en AI-workflows.",
      },
      {
        title: "Toegang is onderdeel van het ontwerp.",
        body: "De oplossing integreert SQL Server en Microsoft Fabric Lakehouse. Entra ID, rolgebaseerde toegang en beveiliging op rij- en kolomniveau bepalen welke data toegankelijk is.",
      },
    ],
    deliverables: [
      "GenAI-blueprint met AS-IS / TO-BE, use-cases en MVP-scope",
      "Wireframes, schermflows, UML, ERD, DFD en C4-diagrammen",
      "Chatinterface, adminschermen en dataweergave",
      "REST API’s, unit tests en Azure Pipelines",
    ],
  },
  {
    id: 2,
    slug: "btp-planning",
    title: "AP.BTP · Planning & onderhoud",
    cover: "btp-greenhouse.webp",
    coverAlt: "Conceptbeeld van een kas met geometrische plantenrijen in groen en warm licht.",
    line1: "BTP",
    line2: "PLANNING",
    category: "Teamproject · backend & Blazor",
    context: "Structuur voor een werkweek buiten.",
    description:
      "Een full-stack .NET 8-teamproject voor onderhoud en planning in een plant- en kasomgeving. Medewerkers voeren taken uit, supervisors volgen hun team op en administrators beheren de organisatie.",
    color: "#102b25",
    accent: "#d2e798",
    stack: [
      ".NET 8 / ASP.NET Core",
      "Blazor Server / WebAssembly",
      "CQRS / MediatR",
      "Entity Framework Core",
      "SQL Server",
      "Auth0 / JWT",
      "Gemini / PlantNet",
      "MSTest / Moq",
      "Docker / Nginx",
    ],
    role: "Softwareontwikkeling · teamproject",
    sections: [
      {
        title: "Planning, taken en bedrijfsregels.",
        body: "Sites, zones, planten en onderhoudsplannen komen samen in één planning. Medewerkers starten, pauzeren en stoppen taken en registreren hun werkuren. De backend controleert de geplande dag, volgorde en taakstatus. Ik werkte aan het domeinmodel, API-endpoints, bedrijfsregels en de web- en mobiele interfaces.",
      },
      {
        title: "Een duidelijke scheiding.",
        body: "Domain, Application en Infrastructure scheiden het bedrijfsmodel van opslag en integraties. CQRS en MediatR organiseren de use-cases. Entity Framework Core, repositories en Unit of Work verzorgen SQL Server-opslag. FluentValidation controleert invoer; middleware vertaalt fouten naar consistente API-responses.",
      },
      {
        title: "Eén backend, twee interfaces.",
        body: "De Blazor-webapp en mobiele WebAssembly-interface gebruiken dezelfde REST API. Auth0 verzorgt authenticatie; rolcontroles worden ook op de server uitgevoerd. QR-codes verbinden planten en onderhoudsinformatie. PlantNet herkent planten uit foto’s en de Gemini-chatbot krijgt context op basis van de ingelogde gebruiker.",
      },
      {
        title: "Testen en verder verfijnen.",
        body: "Ik werkte met MSTest, Moq en EF Core InMemory aan tests voor de belangrijkste workflows. API, web en mobiele interface hebben Docker-builds. Een aandachtspunt voor de volgende iteratie is consistente datum- en tijdlogica bij het berekenen van wekelijkse werkuren.",
      },
    ],
    deliverables: [
      "Weekplanning, taaktracking en tijdregistratie",
      "Blazor-webinterface en mobiele Blazor WebAssembly-app",
      "Auth0, JWT en server-side rolautorisatie",
      "QR-codes, uploads en plantherkenning met PlantNet",
      "Gemini-chatbot met context per gebruikersrol",
      "Unit tests met MSTest, Moq en EF Core InMemory",
    ],
  },
  {
    id: 3,
    slug: "maui-webshop",
    title: "Mobiele webshop",
    line1: "MOBILE",
    line2: "COMMERCE",
    category: "Mobiel project · .NET MAUI",
    context: ".NET, van backend naar mobiel.",
    description:
      "Een mobiele webshop ontwikkeld met .NET MAUI. Een project waarin mijn focus op .NET ook een mobiele vorm krijgt.",
    color: "#421917",
    accent: "#ffb154",
    stack: ["C#", ".NET MAUI"],
    role: "Mobiele softwareontwikkeling",
    sections: [
      {
        title: "Een mobiele verkenning.",
        body: "Voor dit project gebruikte ik .NET MAUI om een mobiele webshop te bouwen. De technologie en het projecttype vormen de basis van deze presentatie.",
      },
      {
        title: "C# op een ander scherm.",
        body: "Dit project verbindt C# met mobiele interfaceontwikkeling. De presentatie toont een conceptbeeld; echte appschermen zijn nog niet opgenomen.",
      },
    ],
    deliverables: ["Mobiele webshop in .NET MAUI"],
  },
  {
    id: 4,
    slug: "air-quality",
    title: "Air Quality · Monitoring",
    line1: "AIR",
    line2: "QUALITY",
    category: "Internationaal teamproject · full stack",
    context: "Sensordata zichtbaar maken.",
    description:
      "Een internationaal teamproject rond real-time luchtkwaliteitsmetingen in Dar es Salaam, met Java, Spring Boot en Angular.",
    color: "#112b38",
    accent: "#a4d6e7",
    stack: ["Java / Spring Boot", "Angular", "MySQL", "Docker", "Kubernetes"],
    role: "Softwareontwikkeling · internationaal team",
    sections: [
      {
        title: "Van sensor naar dashboard.",
        body: "Het platform verwerkt sensordata voor luchtkwaliteitsmonitoring. De focus ligt op backendservices, gegevensverwerking en dashboarding.",
      },
      {
        title: "Samenwerken over grenzen.",
        body: "Binnen een internationaal team werkte ik aan een toepassing met Spring Boot, Angular en MySQL. Docker en Kubernetes maken deel uit van de technische stack.",
      },
    ],
    deliverables: [
      "Verwerking van luchtkwaliteitsmetingen",
      "Backendservices en dashboarding",
      "Samenwerking in een internationaal team",
    ],
  },
  {
    id: 5,
    slug: "stapotech",
    title: "Stapotech · Bedrijfswebsite",
    line1: "STAPOTECH",
    line2: "WEB & API",
    category: "Bedrijfswebsite · full stack",
    context: "Van interface tot deployment.",
    description: "Een bedrijfswebsite met een React-frontend, Spring Boot-API’s en MySQL. Naast development werkte ik aan deployment, CI/CD en het onderhoud van de productieomgeving.",
    color: "#25132f", accent: "#d6b3f1",
    cover: "digital-systems.webp",
    coverAlt: "Abstract conceptbeeld van verbonden glazen structuren in violet en bordeaux.",
    stack: ["React", "Spring Boot", "MySQL", "Jenkins", "Traefik"],
    role: "Full-stack ontwikkeling en deployment",
    sections: [
      {title: "De onderdelen verbinden.", body: "De React-interface communiceert met backend-API’s in Spring Boot. MySQL verzorgt de database-integratie. Ik werkte aan de samenhang tussen frontend, backend en gegevensopslag."},
      {title: "Ook na de build.", body: "Het project omvat een CI/CD-pipeline met Jenkins en reverse-proxyconfiguratie met Traefik. Daardoor deed ik ervaring op met het publiceren en onderhouden van een productiegerichte webomgeving."},
    ],
    deliverables: ["React-frontend en Spring Boot-API’s", "MySQL-integratie", "CI/CD met Jenkins", "Deployment, reverse proxy en onderhoud"],
  },
  {
    id: 6,
    slug: "leen-app",
    title: "Tweedehands leen-app",
    line1: "LEEN",
    line2: "APP",
    category: "Mobiele app · Flutter",
    context: "Delen begint dichtbij.",
    description: "Een mobiele applicatie waarin huurders en verhuurders elkaar vinden. Zoeken, kaartweergave, afstandsfilters en chat ondersteunen het ontdekken en lenen van tweedehands spullen.",
    color: "#26332a", accent: "#d4e3a5",
    cover: "mobile.webp", coverAlt: "Abstract conceptbeeld van een amberkleurige glazen lus als symbool voor hergebruik.",
    stack: ["Flutter", "Dart", "Firebase"],
    role: "Mobiele applicatieontwikkeling",
    sections: [
      {title: "Vinden in de buurt.", body: "De app gebruikt een huurder- en verhuurdermodel. Gebruikers kunnen zoeken, aanbod op een kaart bekijken en op afstand filteren. Zo komen locatie en aanbod samen in één mobiele interface."},
      {title: "Van zoeken naar contact.", body: "Chatfunctionaliteit en gebruikersbeheer ondersteunen het contact tussen gebruikers. Flutter vormt de basis van de mobiele app, met Firebase als onderdeel van de technische stack."},
    ],
    deliverables: ["Huurder- en verhuurdermodel", "Zoeken, kaartweergave en afstandsfilter", "Chat en gebruikersbeheer"],
  },
  {
    id: 7,
    slug: "ufo-sightings",
    title: "UFO Sightings Map",
    line1: "UFO",
    line2: "SIGHTINGS",
    category: "Mobiele app · React Native",
    context: "Een plek voor elke waarneming.",
    description: "Een mobiele app voor UFO-waarnemingen met een kaart, een lijstweergave, foto-upload en lokale opslag. Een project rond mobiele interfaces, filtering en dataweergave.",
    color: "#201735", accent: "#c2abea",
    cover: "data.webp", coverAlt: "Abstract conceptbeeld van paarse lichtdraden en glasvormen, als verbeelding van waarnemingen.",
    stack: ["React Native", "Leaflet", "AsyncStorage"],
    role: "Mobiele applicatieontwikkeling",
    sections: [
      {title: "Kaart en lijst.", body: "Waarnemingen zijn zowel geografisch als in een lijst te bekijken. Met React Native en Leaflet werkte ik aan een mobiele presentatie waarin plaats en informatie bij elkaar komen."},
      {title: "Beeld en lokale gegevens.", body: "De app ondersteunt foto-upload en gebruikt AsyncStorage voor lokale opslag. De technische focus lag op mobile UI, filtering en het overzichtelijk tonen van gegevens."},
    ],
    deliverables: ["Kaart- en lijstweergave", "Foto-upload", "Lokale opslag met AsyncStorage", "Mobiele filtering en dataweergave"],
  },
  {
    id: 8,
    slug: "kerkwebsite",
    title: "Kerkwebsite · Vrijwilligersproject",
    line1: "KERK",
    line2: "WEBSITE",
    category: "Vrijwilligersproject · webontwikkeling",
    context: "Een digitale plek voor de gemeenschap.",
    description: "Een website voor een kerk in Nederland, gemaakt als vrijwilligersproject. Nieuws, media en een beheerflow brengen informatie voor de gemeenschap samen.",
    color: "#482c23", accent: "#f2d5ac",
    stack: ["JavaScript", "HTML / CSS", "PHP", "Spring Boot"],
    role: "Webontwikkeling · vrijwilliger",
    sections: [
      {title: "Informatie die mensen helpt.", body: "De website maakt ruimte voor nieuws en media. Het project gaf mij ervaring met praktische webontwikkeling voor een gemeenschap en het vertalen van gebruikersnoden naar een bruikbare website."},
      {title: "Ruimte voor nieuwe inhoud.", body: "Een beheerflow ondersteunt het bijwerken van content. Naast de zichtbare pagina’s vormde onderhoudbaarheid een belangrijk onderdeel van dit vrijwilligersproject."},
    ],
    deliverables: ["Website voor een kerk in Nederland", "Nieuws en media", "Beheerflow voor content"],
  },
  {
    id: 9,
    slug: "woods-knight",
    title: "Woods Knight",
    line1: "WOODS",
    line2: "KNIGHT",
    category: "2D-platformgame · C# & MonoGame",
    context: "Een wereld die op jouw input reageert.",
    description: "Een 2D-platformgame waarin een ridder door boslevels beweegt, vijanden ontwijkt of verslaat en power-ups verzamelt. Gebouwd met C# en MonoGame, met eigen beweging en collisionlogica.",
    color: "#102a29", accent: "#d5d99b",
    cover: "woods-knight.webp", coverAlt: "Pixel-art conceptillustratie van een ridder tussen bemoste platforms in een donker bos. Geen screenshot uit de game.",
    stack: ["C# / .NET 8", "MonoGame 3.8 / WindowsDX", "Tiled / .tmj", "System.Text.Json", "SpriteBatch"],
    role: "Gameontwikkeling · Windows desktop",
    sections: [
      {title: "Elke update telt.", body: "De game-loop scheidt Update en Draw. Input, beweging, zwaartekracht en botsingen worden eerst bijgewerkt; daarna worden wereld, personages en interface getekend. Een centrale GameManager coördineert levels, levens en de game-state."},
      {title: "Beweging zelf uitwerken.", body: "Ik schreef de collisionlogica met rechthoekige hitboxes, zonder externe physics-engine. Horizontale en verticale overlap worden apart gecorrigeerd. Een kleinere speler-hitbox en geleidelijk versnellen en afremmen maken de besturing nauwkeuriger."},
      {title: "States, vijanden en levels.", body: "Het State Pattern verdeelt de spelerlogica over idle, run, jump, fall en dead. Een MonsterFactory maakt verschillende vijandtypen aan. Tiled-JSON-bestanden beschrijven de achtergrond, platformen en gameplay-objecten; levels kunnen zo worden aangepast zonder de gameplaycode te herschrijven."},
      {title: "Wat ik verder zou verbeteren.", body: "Een camera-transform zou het verschuiven van alle wereldobjecten kunnen vervangen. Daarnaast wil ik collision- en stateovergangen gericht testen en tile-ID’s onderbrengen in benoemde configuratie. Deze stappen zouden de structuur beter testbaar en uitbreidbaar maken."},
    ],
    deliverables: ["Zelfgeschreven AABB-collision en bewegingslogica", "Character states en vijandgedrag", "Data-driven levels uit Tiled", "Sprite-animaties en scherpe pixel-artweergave", "Power-ups, side-scrolling en levelprogressie"],
  },
];
export const featuredProjects = [projects[0], projects[1], projects[3], projects[4], projects[8]];
export const experiments = [
  { n: "01", title: "Een tweede leven.", name: "Tweedehands leen-app", stack: "Flutter / Firebase", body: "Een mobiele leen-app met zoeken op afstand, kaartweergave en chat.", kind: "lend", projectId: 6, slug: "leen-app" },
  { n: "02", title: "Is er iemand daar?", name: "UFO Sightings Map", stack: "React Native / Leaflet", body: "Waarnemingen op een kaart, met foto-upload en lokale opslag.", kind: "ufo", projectId: 7, slug: "ufo-sightings" },
  { n: "03", title: "Het bos in.", name: "Woods Knight", stack: "C# / MonoGame", body: "Een 2D-platformgame met eigen collisionlogica, vijanden, power-ups en boslevels.", kind: "game", projectId: 9, slug: "woods-knight" },
];
