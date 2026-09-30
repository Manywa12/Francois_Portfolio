# Implementation and review

## Observed reference

Desktop: a small italic navigation, a centered typographic composition with serif connectors, a name offset on the left, two independently placed previews and a central italic introduction. The page proceeds to a near-black focus section, then layered full-screen project compositions with split WORK lettering and opposing counters. The About view uses burgundy, offset text columns and coloured circles.

Mobile (390 px embedded viewport): navigation and headline scale down, the introduction appears below the heading, and previews move lower. The dark focus and WORK sequence continue vertically. The reference was inspected at the opening, focus and WORK positions rather than only at the top.

## Implementation plan delivered

Home: brief burgundy greeting → white editorial hero → dark focus → four sticky project scenes → restrained Play bridge → SEE YOU footer.
Work: burgundy numbered index, rules, focus/hover response, ordinary project links.
Project details: shared structure with individual colour, title/context opening, concept visual, technologies, project story, deliverables and next/back navigation.
About: large italic introduction, offset columns, coloured circles and CV-grounded content.
Play: asymmetrical previews for documented side projects, followed by a bounded circle simulation.

## Deliberate approximations

Typeface shapes, line breaks, imagery and exact animation timings differ from the reference. Scroll rhythm was visually approximated rather than measured from its source. The original photographs and videos were replaced with clearly labelled new concepts. Native browser view transitions approximate the selected-layer page transition; unsupported browsers use direct navigation.

## Verification

Production TypeScript/build checks; direct-entry pages generated for every route. Browser checks covered route opening, keyboard project activation, browser back/forward, mobile and tablet composition, scene index in both directions, and the Play pause control. Viewport testing uses embedded viewports in the available desktop browser, not physical mobile devices.

Reduced motion is implemented in CSS and JavaScript and was reviewed in source; native OS-level media preference emulation was not available in the browser tool. Slow-network throttling was not available. Image dimensions, fixed scene boxes, local font assets and lazy loading reduce layout shifts; this is not a measured throttled-network result. No real project videos were supplied.

The final handoff should not be described as a pixel-identical reproduction or as exhaustively device-tested.

Checked embedded viewport sizes: 1440 × 900, 768 × 1024, 390 × 844 and 375 × 812. At the checked positions, document width equalled viewport content width (no horizontal page overflow). All four project routes, About and Play opened directly without application console errors; browser-extension metadata warnings are unrelated to the site.

## Update 27 september 2026

De Work-index bevat negen projecten met eigen routes. Vier homepageprojecten zijn uitgelicht: Tillit, AP.BTP, Stapotech en Woods Knight. De GenAI-blueprint is binnen Tillit opgenomen. Alle drie de Play-items linken naar hun projectpagina.

De aangeleverde beschrijvingen zijn samengevat voor AP.BTP en Woods Knight. Er worden geen niet-onderbouwde gebruikersaantallen, opbrengsten of volledig geslaagde testruns geclaimd. Het AP.BTP-aandachtspunt rond wekelijkse werkuren blijft benoemd; voor Woods Knight zijn mogelijke verbeteringen als toekomstige stappen geformuleerd.

Drie nieuwe conceptbeelden zijn toegevoegd en geoptimaliseerd als WebP. De labels maken duidelijk dat het geen echte productcaptures zijn. De beeldbestanden staan lokaal, met vaste beeldvakken en alt-teksten. Lettertypelicenties zijn behouden.

Alle negen projectroutes zijn in de browser rechtstreeks geopend binnen een mobiel testvenster van 390 px (375 px inhoud naast de scrollbar), zonder horizontale overflow. Ook de tabletindex, Play-link naar Woods Knight en desktop-scrollscènes zijn gecontroleerd. De scrollstatus werkt vooruit naar Woods Knight en terug naar AP.BTP. Geen applicatiefouten gezien; de browserextensie produceert eigen metadatawaarschuwingen. Productiecode bevat geen debuglogs of generator-meta-tag. De lange gedachtestreep is verwijderd uit zichtbare teksten en metadata.

Reduced motion blijft ondersteund zoals beschreven bij de oorspronkelijke controle. Voor deze update is geen nieuwe OS-emulatie of netwerkvertragingstest uitgevoerd.


## Update 28 september 2026

Alle negen projecten hebben nu drie eigen beelden. Negentien nieuwe conceptillustraties vullen de twee bestaande kas- en gamebeelden aan. Zes daadwerkelijke browsercaptures komen van de door de gebruiker opgegeven sites: homepage, About en Portfolio van stapotech.be; homepage, About en Visit van nhcc.nl. Alle 27 galerijbestanden bestaan lokaal als WebP (samen circa 5,8 MB). Overlaylabels zijn verwijderd. Conceptmateriaal wordt onder het openingsbeeld toegelicht; screenshots vermelden hun bron.

De NL/EN-keuze vertaalt de pagina’s, negen projectbeschrijvingen, bijschriften, alt-teksten en metadata. De queryparameter blijft behouden in interne links en kan rechtstreeks worden geopend. De homepage heeft drie overlappende beeldlagen per uitgelicht project.

De negen projectroutes zijn opnieuw rechtstreeks geopend en naar Engels geschakeld in een mobiel iframe van 390 px. Alle details bevatten drie afbeeldingen; de documentbreedte bleef gelijk aan de beschikbare breedte. De Engelse homepage, Work-index, toetsenbordnavigatie naar UFO en taalbehoud in links zijn gecontroleerd. De tabletweergave van Woods Knight (768 px) heeft geen horizontale overflow en alle drie beelden laden. Desktopscènes (1440 px) tonen drie geladen beeldlagen; de actieve teller wisselt vooruit naar Woods Knight en terug naar BTP.

Een JIT-laadfout door de importvolgorde van de Angular-compiler is tijdens de browsercontrole opgelost. TypeScript en de productiebuild slagen. De bundel bevat nog de Angular JIT-compiler en geeft een Vite-groottewaarschuwing; Matter.js wordt afzonderlijk geladen. Reduced motion en trage verbindingen zijn niet opnieuw met OS- of netwerkmiddelen geëmuleerd.


## Editorial update, 28 september 2026

De aangeleverde referenties tonen verspringende HELLO-letters, verschillende beeldformaten per scène, verticale stroken en een open vijfde compositie. De begroeting en navigatie zijn daarop aangepast. Hero-afbeeldingen wisselen met een CSS-overgang tussen 9px blur en scherp bij hover of toetsenbordfocus. Touch blijft scherp; reduced motion gebruikt directe wissels.

Er zijn nu vijf homepageprojecten: Tillit, BTP, Air Quality, Stapotech en Woods Knight. Elk heeft een andere beeldverdeling. De teller en sectiehoogte zijn gebaseerd op het werkelijke aantal projecten. Controle op 1440 px bevestigde 03/05 en 05/05; terugscroll naar 03 werkt. Op 390 px en 768 px bleef de documentbreedte binnen de viewport. De drie Stapotech-beelden laden in de tabletscène.

Zes screenshots zijn opnieuw opgenomen zonder muiscursor of scrollbar in het beeld. De JPEG-opnamen zijn 1348×900 en zonder aanvullende compressie gekopieerd. Stapotech toont de homepage, het bedrijfsverhaal en de projectlijst; NHCC toont home, About en Visit. Bestaande tekst of fotografie van die websites is niet gereconstrueerd. De browser biedt geen opname op een vrij instelbare hogere resolutie; de beelden worden daarom niet als 4K gepresenteerd of kunstmatig opgeschaald.

Nog open: de echte projectbeelden uit de drie Windows-downloadmappen zijn niet aangeleverd. Alleen C:-paden en een voorbeeld van een Visily-watermerk zijn beschikbaar. Tillit, BTP en Air Quality behouden voorlopig hun bestaande conceptbeelden. De geselecteerde screenshots en de gevraagde verwijdering van watermerken kunnen pas na ontvangst van die bestanden worden verwerkt.

## Supplied interfaces, 28 September 2026

Integrated nine original JPEG exports from the uploaded project folders: three each for Tillit, BTP and Air Quality. Original bytes are preserved and the website frames each application area with a proportional CSS viewport excluding the Visily export footer. No generated reconstruction or extra JPEG compression. The remaining project galleries are unchanged. Provenance and viewport coordinates are in `docs/supplied-interfaces.md`.

Checked direct project routes, the BTP sticky scene on desktop and at 390px, BTP mobile detail and Air Quality tablet detail at 768px. The displayed interfaces preserve their aspect ratios and tablet has no horizontal overflow. New image captions/alt text are available in Dutch and English. Production TypeScript/Vite build passed. Existing reduced-motion and navigation behaviour are unchanged.

## Consistent arrow icons, 28 September 2026

Replaced Unicode arrows in all Angular page templates with the shared decorative SVG ArrowComponent. This prevents mobile operating systems from substituting coloured emoji. Icons use currentColor and em sizing; translated link labels remain text and SVGs are hidden from assistive technology. Checked the homepage footer at a 390px viewport and verified SVG rendering on all four footer links. TypeScript and the production build passed.

## Full-screen About portrait, 28 September 2026

Added the supplied original portrait behind the entire About content. Desktop framing places François to the right of the introduction; mobile uses a tighter portrait crop with the heading below his face. Burgundy gradients and a translucent layer behind the detailed columns preserve contrast. The photograph remains a static viewport background and adds no motion. Inspected the desktop introduction, scrolled education/experience content and 390px mobile layout; no horizontal overflow. Existing NL/EN text, links and plain SVG arrows are retained. Original JPEG bytes are unchanged.
