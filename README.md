# Systemlabbet

Lärarstyrd lokal webbapp för Referens- och masterdata. Kapitel 1 består av sju scener om Nordhandel AB.

## Kör lokalt

Node.js 20.19+ eller 22.12+ rekommenderas.

    npm install
    npm run dev

Öppna adressen som Vite skriver ut. Produktionsbygge: `npm run build`. Modelltester: `npm test`.

Piltangenter navigerar steg/scener. Mellanslag spelar eller pausar ett steg. Alla animationer startas av läraren. Klicka på system för ansvar och kopplingar, på flöden för metadata. Återställ rensar scenens lokala val. Lärarstöd kan öppnas i sidopanel eller separat fönster; placera det separata fönstret på egen skärm så att anteckningarna inte visas på projektorn.

## Avgränsningar och förenklingar

- All data är fiktiv, fördefinierad och lokal. Inga externa API-anrop eller typsnitt under körning.
- Integrationerna är pedagogiska simuleringar, inte körbara integrationsmotorer. Datapulser visas som animerade kanter. Spela visar en enda övergång och stannar; paus återgår till stabilt presentationsläge.
- API, fil och kö använder varsin definierad koppling. Frekvens och teknik dokumenteras separat.
- Konsekvensanalysen använder verifierade riktade beroenden, utan buffertar, återförsök eller reservrutiner. ERP-avbrott gäller leverans av ny information. Fördröjning och dubbelregistrering är illustrativa fall, inte mätvärden.
- Navigering till en scen återställer dess interaktionsval, vilket ger ett förutsägbart utgångsläge. Inget sparas mellan presentationstillfällen utöver lokal synkronisering av lärarfönstret.
- Sidopanelen är synlig på samma skärm. Använd separat fönster för privata anteckningar.
- Kapitelmenyn innehåller endast det färdiga kapitel 1. Artikelkopplingarna följer avsnitten i uppdragsbeskrivningen; ingen separat originalartikel har tillhandahållits.

Se ADDING_CHAPTERS.md för utbyggnad.
