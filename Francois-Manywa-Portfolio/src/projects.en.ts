import type { Project } from './projects';
export const englishProjects: Record<number, Partial<Project>> = {
  1: {
    category: 'Internship · full stack & AI', context: 'Business data, in your own words.',
    description: 'During my internship at Tillit, I contribute to a full-stack platform that lets users query business data in natural language.',
    role: 'Software Developer Intern · since February 2026',
    sections: [
      {title: 'From question to insight.', body: 'I work on the .NET backend, REST APIs and React interfaces. Semantic Kernel and Azure OpenAI support schema-aware prompting, SQL generation and AI workflows.'},
      {title: 'Access is part of the design.', body: 'The solution integrates SQL Server and Microsoft Fabric Lakehouse. Entra ID, role-based access and row- and column-level security determine which data is accessible.'},
    ],
    deliverables: ['GenAI blueprint with AS-IS / TO-BE analysis, use cases and MVP scope', 'Wireframes, screen flows, UML, ERD, DFD and C4 diagrams', 'Chat interface, admin screens and data views', 'REST APIs, unit tests and Azure Pipelines'],
  },
  2: {
    title: 'AP.BTP · Planning & maintenance', category: 'Team project · backend & Blazor', context: 'Structure for a working week.',
    description: 'A full-stack .NET 8 team project for maintenance and planning in a plant nursery and greenhouse setting. Employees carry out tasks, supervisors follow their teams and administrators manage the organisation.',
    role: 'Software development · team project',
    sections: [
      {title: 'Planning, tasks and business rules.', body: 'Sites, zones, plants and maintenance plans come together in one schedule. Employees start, pause and stop tasks and record their working hours. The backend checks the scheduled day, task order and status. I worked on the domain model, API endpoints, business rules, and web and mobile interfaces.'},
      {title: 'A clear separation.', body: 'Domain, Application and Infrastructure separate the business model from storage and integrations. CQRS and MediatR organise the use cases. Entity Framework Core, repositories and Unit of Work handle SQL Server persistence. FluentValidation checks input; middleware converts errors into consistent API responses.'},
      {title: 'One backend, two interfaces.', body: 'The Blazor web app and mobile WebAssembly interface share a REST API. Auth0 handles authentication, with role checks also enforced on the server. QR codes connect plants to maintenance information. PlantNet recognises plants from photos and the Gemini chatbot receives context based on the signed-in user.'},
      {title: 'Testing and refining.', body: 'I worked with MSTest, Moq and EF Core InMemory to test key workflows. The API, web app and mobile interface have Docker builds. A focus for the next iteration is consistent date and time handling when calculating weekly working hours.'},
    ],
    deliverables: ['Weekly planning, task tracking and time recording', 'Blazor web interface and mobile Blazor WebAssembly app', 'Auth0, JWT and server-side role authorisation', 'QR codes, uploads and PlantNet plant recognition', 'Gemini chatbot with context per user role', 'Unit tests with MSTest, Moq and EF Core InMemory'],
  },
  3: {
    title: 'Mobile webshop', category: 'Mobile project · .NET MAUI', context: '.NET, from backend to mobile.',
    description: 'A mobile webshop developed with .NET MAUI. A project that brings my focus on .NET to a mobile interface.', role: 'Mobile software development',
    sections: [
      {title: 'Exploring mobile development.', body: 'For this project I used .NET MAUI to build a mobile webshop. The technology and project type form the basis of this presentation.'},
      {title: 'C# on a different screen.', body: 'This project connects C# with mobile interface development. The images are visual concepts; actual app screens are not yet included.'},
    ], deliverables: ['Mobile webshop in .NET MAUI'],
  },
  4: {
    category: 'International team project · full stack', context: 'Making sensor data visible.',
    description: 'An international team project about real-time air quality measurements in Dar es Salaam, using Java, Spring Boot and Angular.', role: 'Software development · international team',
    sections: [
      {title: 'From sensor to dashboard.', body: 'The platform processes sensor data for air quality monitoring. The focus is on backend services, data processing and dashboards.'},
      {title: 'Working across borders.', body: 'Within an international team, I worked on an application with Spring Boot, Angular and MySQL. Docker and Kubernetes are part of the technical stack.'},
    ], deliverables: ['Processing air quality measurements', 'Backend services and dashboards', 'Collaboration in an international team'],
  },
  5: {
    title: 'Stapotech · Company website', category: 'Company website · full stack', context: 'From interface to deployment.',
    description: 'A company website with a React frontend, Spring Boot APIs and MySQL. Alongside development, I worked on deployment, CI/CD and maintaining the production environment.', role: 'Full-stack development and deployment',
    sections: [
      {title: 'Connecting the parts.', body: 'The React interface communicates with backend APIs in Spring Boot. MySQL handles database integration. I worked on connecting the frontend, backend and data storage.'},
      {title: 'Beyond the build.', body: 'The project includes a CI/CD pipeline with Jenkins and reverse-proxy configuration with Traefik. It gave me experience in publishing and maintaining a production-oriented web environment.'},
    ], deliverables: ['React frontend and Spring Boot APIs', 'MySQL integration', 'CI/CD with Jenkins', 'Deployment, reverse proxy and maintenance'],
  },
  6: {
    title: 'Second-hand lending app', line1: 'LENDING', line2: 'APP', category: 'Mobile app · Flutter', context: 'Sharing starts nearby.',
    description: 'A mobile app that connects borrowers and lenders. Search, a map, distance filters and chat support finding and borrowing second-hand items.', role: 'Mobile app development',
    sections: [
      {title: 'Finding things nearby.', body: 'The app uses a borrower and lender model. Users can search, explore items on a map and filter by distance, bringing location and availability together in one mobile interface.'},
      {title: 'From search to conversation.', body: 'Chat and user management support communication between users. Flutter forms the basis of the mobile app, with Firebase as part of the technical stack.'},
    ], deliverables: ['Borrower and lender model', 'Search, map view and distance filter', 'Chat and user management'],
  },
  7: {
    category: 'Mobile app · React Native', context: 'A place for every sighting.',
    description: 'A mobile app for UFO sightings with a map, list view, photo uploads and local storage. A project exploring mobile interfaces, filtering and data presentation.', role: 'Mobile app development',
    sections: [
      {title: 'Map and list.', body: 'Sightings can be explored geographically or in a list. Using React Native and Leaflet, I worked on a mobile interface that connects places with information.'},
      {title: 'Images and local data.', body: 'The app supports photo uploads and uses AsyncStorage for local storage. The technical focus was mobile UI, filtering and clear data presentation.'},
    ], deliverables: ['Map and list views', 'Photo uploads', 'Local storage with AsyncStorage', 'Mobile filtering and data presentation'],
  },
  8: {
    title: 'NHCC · Church website', line1: 'CHURCH', line2: 'WEBSITE', category: 'Volunteer project · web development', context: 'A digital place for the community.',
    description: 'A website for a church in the Netherlands, built as a volunteer project. News, media and a content management flow bring information for the community together.', role: 'Web development · volunteer',
    sections: [
      {title: 'Information that helps people.', body: 'The website makes room for news and media. The project gave me experience in practical web development for a community and translating user needs into a useful website.'},
      {title: 'Room for new content.', body: 'A management flow supports updating content. Alongside the public pages, maintainability was an important part of this volunteer project.'},
    ], deliverables: ['Website for a church in the Netherlands', 'News and media', 'Content management flow'],
  },
  9: {
    category: '2D platform game · C# & MonoGame', context: 'A world that responds to your input.',
    description: 'A 2D platform game in which a knight explores forest levels, avoids or defeats enemies and collects power-ups. Built with C# and MonoGame, with custom movement and collision logic.', role: 'Game development · Windows desktop',
    sections: [
      {title: 'Every update counts.', body: 'The game loop separates Update and Draw. Input, movement, gravity and collisions are updated first; the world, characters and interface are then rendered. A central GameManager coordinates levels, lives and game state.'},
      {title: 'Building movement from scratch.', body: 'I wrote collision logic using rectangular hitboxes without an external physics engine. Horizontal and vertical overlaps are corrected separately. A smaller player hitbox and gradual acceleration and deceleration improve control precision.'},
      {title: 'States, enemies and levels.', body: 'The State Pattern divides player logic into idle, run, jump, fall and dead states. A MonsterFactory creates different enemy types. Tiled JSON files describe backgrounds, platforms and gameplay objects, allowing levels to change without rewriting gameplay code.'},
      {title: 'What I would improve next.', body: 'A camera transform could replace moving every world object. I also want to add focused tests for collisions and state transitions and replace tile IDs with named configuration. These steps would make the structure easier to test and extend.'},
    ], deliverables: ['Custom AABB collision and movement logic', 'Character states and enemy behaviour', 'Data-driven levels from Tiled', 'Sprite animations and crisp pixel-art rendering', 'Power-ups, side-scrolling and level progression'],
  },
};
