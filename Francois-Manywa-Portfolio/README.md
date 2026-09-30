# François Manywa · Portfolio

Angular 22, TypeScript en Vite. Een persoonlijk portfolio met GSAP ScrollTrigger, Lenis en een Matter.js-speelruimte.

## Lokaal starten

Gebruik Node.js 22.12+ of 24. Open deze map in VS Code en voer uit:

```sh
npm ci
npm run dev
```

Open `http://localhost:4173`. Wijzigingen in `src` worden automatisch zichtbaar.

## Productiebuild

```sh
npm run build
```

Publiceer de map `dist`. De build maakt een eigen HTML-entry voor elke route, zodat projectlinks ook rechtstreeks op statische hosting kunnen openen. De site draait vanaf het hoofddomein (`/`). Er is geen backend nodig.

## Inhoud

Vijf uitgelichte scrollscènes op de homepage: Tillit, AP.BTP, Air Quality, Stapotech en Woods Knight. Alle negen projecten staan in de Work-index en hebben een detailpagina:

- `/work/tillit-genai`
- `/work/btp-planning`
- `/work/maui-webshop`
- `/work/air-quality`
- `/work/stapotech`
- `/work/leen-app`
- `/work/ufo-sightings`
- `/work/kerkwebsite`
- `/work/woods-knight`

Ook beschikbaar: `/`, `/work`, `/about`, `/play` en een 404-weergave. Play verwijst naar de leen-app, UFO Sightings Map en Woods Knight.

Nederlandse projectteksten en technologieën staan in `src/projects.ts`; de Engelse vertalingen in `src/projects.en.ts`. De GenAI-blueprint is onderdeel van Tillit. AP.BTP en Woods Knight bevatten de belangrijkste punten uit de aangeleverde projectbeschrijvingen. De MAUI-webshop heeft alleen de bevestigde gegevens: een mobiele webshop in C# en .NET MAUI.

## Bronbestanden

- `src/home.ts`: homepage en sticky projectscènes
- `src/pages.ts`: Work, details, About en Play
- `src/projects.ts`: inhoud, volgorde en uitgelichte projecten
- `src/visual.ts`: weergave van projectbeelden
- `src/media.ts`: drie beelden per project en vertaalde alt-teksten
- `src/language.ts`: taalkeuze, URL-parameters en metadata
- `src/styles.css`: typografie, compositie en responsive styling
- `src/motion.ts`: scrollgedrag en reduced motion
- `src/main.ts`: router, navigatie en openingsanimatie
- `public/assets`: lokaal geladen illustraties in WebP en projectinterfaces/websitescreenshots in JPEG
- `public/licenses`: lettertypelicenties

## Beelden en lettertypen

Elk van de negen projecten heeft drie beelden, samen 27. Stapotech en de kerkwebsite gebruiken echte screenshots van stapotech.be en nhcc.nl, vastgelegd op 28 september 2026. De screenshots zijn opnieuw vastgelegd zonder cursor op 1348 × 900 pixels en rechtstreeks als JPEG opgenomen, zonder een tweede compressiestap. Ze behouden hun oorspronkelijke verhoudingen en worden niet boven hun natuurlijke breedte opgeschaald op detailpagina’s.

Tillit, BTP en Air Quality gebruiken negen originele interface-exports uit het aangeleverde ZIP-bestand. Ze zijn zonder hercompressie opgenomen. Een proportionele CSS-uitsnede houdt de witte exportrand met het watermerk buiten beeld; de originele JPEG-bestanden blijven intact. Zie `docs/supplied-interfaces.md` voor de selectie en exacte beeldafmetingen.

De overige twaalf beelden zijn conceptillustraties, geen productscreenshots of bewijs van resultaten. Een bescheiden bijschrift onder het openingsbeeld geeft de aard van het materiaal aan. Woods Knight gebruikt illustraties, geen gameplaycaptures.

De NL/EN-knoppen wisselen alle pagina- en projectteksten, alt-teksten en metadata. De taal blijft behouden tijdens navigatie via `?lang=en` of `?lang=nl`, inclusief directe links en browsergeschiedenis. Zonder taalparameter opent de site in het Nederlands.

Archivo en Instrument Serif worden lokaal geladen onder de SIL Open Font License. Behoud de meegeleverde licentieteksten.

## Interacties

De vijf homepageprojecten hebben een sticky presentatie met previous/current/next-statussen. ScrollTrigger bepaalt de actieve scène in beide scrollrichtingen. Verborgen scènes zijn inert. Lenis en GSAP gebruiken één ticker. Kleine muisbewegingen werken alleen met een geschikte pointer.

Angular Router draagt geselecteerde titels en beelden over via de View Transitions API. Andere browsers gebruiken normale navigatie. Reduced motion slaat de overgangen over. Browsergeschiedenis herstelt scrollposities.

Matter.js wordt alleen op Play geladen. De simulatie pauzeert buiten beeld en bij een verborgen tab, en heeft een pauzeknop. Bij reduced motion blijven de cirkels stil.

## Laatste visuele update

De homepagebegroeting gebruikt afwisselend hoge en lage letters op wit. Beide hero-beelden worden op apparaten met een muis geleidelijk scherp bij hover of toetsenbordfocus en daarna opnieuw wazig. Op touch blijven ze scherp. Reduced motion schakelt deze overgang direct. Elke uitgelichte projectscène heeft een eigen compositie; de teller en scrolllengte volgen automatisch het aantal projecten.

Tillit, BTP en Air Quality zijn bijgewerkt met elk drie aangeleverde projectinterfaces, op de homepage, in de Work-index en op de detailpagina’s. Volledige schermverhoudingen blijven behouden. Mobiele schermen blijven binnen hun natuurlijke breedte op detailpagina’s. De overige projectbeelden zijn ongewijzigd.

## About-portret

De About-pagina gebruikt `public/assets/francois-portrait.jpg`, de oorspronkelijke aangeleverde foto zonder hercompressie. Het portret blijft schermvullend achter de About-secties staan. CSS regelt de uitsnede per schermformaat en voegt bordeaux transparante lagen toe voor tekstcontrast. De footer sluit met de bestaande effen kleur aan. Er is geen parallax of extra beweging aan het portret toegevoegd.
