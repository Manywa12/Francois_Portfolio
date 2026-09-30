export interface ProjectImage { src: string; nl: string; en: string; viewport?: { width: number; height: number; fullWidth: number; fullHeight: number; x: number; y: number }; }
export const galleries: Record<number, ProjectImage[]> = {
  1: [
    {src:'tillit-interface-1.jpg',nl:'Chatinterface met een vraag in natuurlijke taal en een grafiek.',en:'Chat interface with a natural-language question and a chart.',viewport:{width:1440,height:1103,fullWidth:1488,fullHeight:1191,x:24,y:24}},
    {src:'tillit-interface-2.jpg',nl:'Validatiescherm voor het controleren van een gegenereerd dataresultaat.',en:'Validation screen for reviewing a generated data result.',viewport:{width:1440,height:1201,fullWidth:1488,fullHeight:1289,x:24,y:24}},
    {src:'tillit-interface-3.jpg',nl:'Rapportinterface met filters, grafieken en een regionaal overzicht.',en:'Report interface with filters, charts and a regional overview.',viewport:{width:1440,height:1789,fullWidth:1488,fullHeight:1877,x:24,y:24}},
  ],  2: [
    {src:'btp-interface-1.jpg',nl:'BTP-dashboard met medewerkers en hun taakvoortgang.',en:'BTP dashboard showing employees and task progress.',viewport:{width:1440,height:900,fullWidth:1488,fullHeight:988,x:24,y:24}},
    {src:'btp-interface-2.jpg',nl:'Weekplanning met toegewezen taken en voortgang per dag.',en:'Weekly planning with assigned tasks and daily progress.',viewport:{width:1440,height:900,fullWidth:1488,fullHeight:988,x:24,y:24}},
    {src:'btp-interface-3.jpg',nl:'Mobiele weekplanning met taken voor de medewerker.',en:'Mobile weekly planning with employee tasks.',viewport:{width:375,height:878,fullWidth:423,fullHeight:966,x:24,y:24}},
  ],  3: [
    {src:'commerce-1.webp',nl:'Een sculpturale smartphone en winkeltas in amberkleurig licht.',en:'A sculptural smartphone and shopping bag in amber light.'},
    {src:'commerce-2.webp',nl:'Een productcompositie met een glazen vorm als verwijzing naar mobiel winkelen.',en:'A product arrangement with a glass form suggesting mobile shopping.'},
    {src:'commerce-3.webp',nl:'Een bovenaanzicht van een modulaire productcompositie.',en:'An overhead view of a modular product arrangement.'},
  ],
  4: [
    {src:'air-interface-1.jpg',nl:'Air Quality-dashboard met een kaart, meetwaarden en sensoroverzicht.',en:'Air Quality dashboard with a map, readings and a sensor overview.',viewport:{width:1440,height:926,fullWidth:1488,fullHeight:1014,x:24,y:24}},
    {src:'air-interface-2.jpg',nl:'Sensorinterface met grafieken en een tabel met meetwaarden.',en:'Sensor interface with charts and a readings table.',viewport:{width:1440,height:926,fullWidth:1488,fullHeight:1014,x:24,y:24}},
    {src:'air-interface-3.jpg',nl:'Mobiele interface met locatiekeuze en sensorgrafieken.',en:'Mobile interface with location selection and sensor charts.',viewport:{width:393,height:852,fullWidth:441,fullHeight:940,x:24,y:24}},
  ],  5: [
    {src:'stapotech-hq-1.jpg',nl:'Screenshot van de homepage van stapotech.be.',en:'Screenshot of the stapotech.be homepage.'},
    {src:'stapotech-hq-2.jpg',nl:'Screenshot van de About-pagina van stapotech.be.',en:'Screenshot of the About page on stapotech.be.'},
    {src:'stapotech-hq-3.jpg',nl:'Screenshot van de Portfolio-pagina van stapotech.be.',en:'Screenshot of the Portfolio page on stapotech.be.'},
  ],
  6: [
    {src:'lend-1.webp',nl:'Een stilleven van bruikbare alledaagse voorwerpen om te delen.',en:'A still life of useful everyday objects to share.'},
    {src:'lend-2.webp',nl:'Twee handen die een huishoudelijk voorwerp doorgeven.',en:'Two hands passing a household object.'},
    {src:'lend-3.webp',nl:'Een cirkelvormige compositie over hergebruik en delen.',en:'A circular composition about reuse and sharing.'},
  ],
  7: [
    {src:'ufo-1.webp',nl:'Een fictieve UFO-waarneming boven een nachtelijk landschap.',en:'A fictional UFO sighting over a night landscape.'},
    {src:'ufo-2.webp',nl:'Gloeiende locatiepunten op een abstract nachtelijk terrein.',en:'Glowing location points on abstract night terrain.'},
    {src:'ufo-3.webp',nl:'Een fictieve reflecterende schotel boven een mistig bos.',en:'A fictional reflective saucer over a misty forest.'},
  ],
  8: [
    {src:'nhcc-hq-1.jpg',nl:'Screenshot van de homepage van New Hope Christian Church.',en:'Screenshot of the New Hope Christian Church homepage.'},
    {src:'nhcc-hq-2.jpg',nl:'Screenshot van de About-pagina van NHCC.',en:'Screenshot of the NHCC About page.'},
    {src:'nhcc-hq-3.jpg',nl:'Screenshot van de Visit-pagina van NHCC.',en:'Screenshot of the NHCC Visit page.'},
  ],
  9: [
    {src:'woods-knight.webp',nl:'Een ridder tussen bosplatforms in een pixel-artwereld.',en:'A knight among forest platforms in a pixel-art world.'},
    {src:'woods-2.webp',nl:'Een bosplatform met een vijand en een gloeiende power-up.',en:'A forest platform with an enemy and a glowing power-up.'},
    {src:'woods-3.webp',nl:'Een kleine ridder op een vervallen brug in het bos.',en:'A small knight on a ruined bridge in a forest.'},
  ],
};
export const liveWebsites: Record<number, string> = {5: 'https://stapotech.be/',8: 'https://nhcc.nl/'};
