# Storyboard – Kapitel 1: Från en beställning till ett dataflöde

Status: FÖRSLAG FÖR GODKÄNNANDE. Ingen implementation har ändrats.

## Underlag och öppna frågor

Storyboarden följer användarens beskrivning av introduktionen och akterna 1–5. Den refererade artikeln finns inte i tillgängligt underlag. Artikelns faktiska disposition, formuleringar, systemnamn, statuskoder, adresser och uppdateringstider måste kontrolleras innan storyboarden låses. Endast adressändringen klockan 10.00 är angiven. Övriga tider ska hämtas ur artikeln, inte uppfinnas.

Nordhandel AB är den gemensamma fiktiva verksamheten. Köpintroduktionen använder Alex; artikelns adressändring använder Anna. Övergången mellan personerna görs uttrycklig. Leveranssystemet behöver läggas till i den centrala scenariomodellen före implementation; dess ansvar skiljs från lagrets. Inga kopplingar får ritas utan en motsvarande modelldefinition.

## Berättelsens rytm

Förslag: 12 korta scener fördelade på en introduktion och fem akter. Scenerna är visuella situationer, inte presentationsbilder. Varje scen ger ett problem eller en observation, en frågepaus och ett lärarstyrt avslöjande. Cirka 40–55 minuter inklusive samtal är en planeringsuppskattning, inte en tidsstyrning.

Bara introduktionen visar hela köpsekvensen. Därefter återanvänds ordern, kundkortet och överföringsobjektet som visuella ankare. Fullständig karta visas först i slutet. Ingen deltagarnavigation eller automatisk scenövergång.

Klick eller högerpil visar nästa stabila tillstånd. Vänsterpil visar exakt föregående tillstånd. Spela aktiverar endast den aktuella överföringen och stannar vid dess slut. Paus fryser rörelsen; fortsätt återupptar samma rörelse. Återställ återgår till scenens första tillstånd med samma ursprungsdata. Begrepp och lösningar har uttryckliga visningssteg och kan även döljas. Scenbyte avbryter alla pågående animationer.

## INTRO · Ett köp. Många system.

### Scen 1 – Det kunden ser

**Syfte:** Börja i en igenkännbar handling och skapa nyfikenhet. Inga tekniska begrepp.

**Bild:** En stor, avskalad webbutik på mörk scen. Alex visas som ett diskret kundkort. Ingen systemkarta eller teknisk teckenförklaring.

**Visuella steg:**
1. En produkt är i fokus. Läraren visar att Alex väljer den.
2. Produkten flyttas till varukorgen. Antal och produkt ligger kvar synligt.
3. Ett adresskort fälls fram med fördefinierade fiktiva uppgifter. Inmatning krävs inte under lektionen.
4. Läraren visar beställningen. Knappen byter till en tydlig orderbekräftelse med order-ID.
5. Bekräftelsen står kvar. Omgivningen tonas ned och frågan visas: ”Vad händer bakom kulisserna?” Här stannar berättelsen tills läraren väljer nästa scen.

**Läraranteckningar:**
- **Förstå:** Kundens bekräftelse visar en registrerad beställning; den bevisar inte att lager eller leverans har hanterat den.
- **Säg:** ”För Alex är det här ett köp. Produkten är vald, adressen är angiven och bekräftelsen har kommit. Men är företagets arbete färdigt nu?”
- **Gör:** Visa ett steg per handling. Stanna på bekräftelsen innan frågan visas. Vänta in deltagarnas svar.
- **Fråga:** ”Vad behöver hända för att Alex faktiskt ska få varan?”
- **Missförstånd:** Ett gränssnitt kan ge en lyckad bekräftelse även när senare överlämningar återstår.
- **Övergång:** ”Vi öppnar dörren till det som Alex inte ser.”

### Scen 2 – Bakom bekräftelsen

**Syfte:** Visa varför flera verksamhetsfunktioner behöver information innan de får tekniska benämningar.

**Bild:** Orderkortet ligger kvar i mitten. Bakom webbutiken finns tre mörka, ännu oidentifierade områden.

**Visuella steg:**
1. Orderbekräftelsen ligger kvar som ankare.
2. Lagret träder fram. Produkt och antal lyfts ur orderkortet till ett behovskort: ”Vad ska plockas?”
3. Ekonomisystemet träder fram. Belopp och fakturauppgifter lyfts till ”Vad ska faktureras?”
4. Leveranssystemet träder fram. Leveransadress lyfts till ”Vart ska paketet?”
5. Tre behovskort visas tillsammans. Frågan: ”Hur får de veta det?” Inga integrationspilar ännu.

**Läraranteckningar:**
- **Förstå:** Det här är en illustration av informationsbehov. Den fastställer ännu inte den tekniska vägen mellan systemen.
- **Säg:** ”Alla behöver information om samma köp, men de behöver inte samma delar.”
- **Gör:** Avslöja en mottagare i taget. Stanna efter varje behovskort. Visa inte resten av landskapet.
- **Fråga:** ”Behöver lagret känna till samma uppgifter som ekonomin?”
- **Missförstånd:** Kortens placering betyder inte att webbshoppen skickar direkt till alla. Den vägen definieras senare.
- **Övergång:** ”Nu följer vi en enda överlämning och ger delarna namn.”

## AKT 1 · Vart tar informationen vägen?

### Scen 3 – Avsändare, transport, mottagare

**Syfte:** Introducera källsystem, integration och konsument genom paketjämförelsen.

**Bild:** Ett paket mellan en avsändare och en mottagare. Därefter byts paketet mot ett informationskort i samma komposition.

**Visuella steg:**
1. Visa paketets avsändare.
2. Visa transporten, men starta ingen rörelse.
3. Visa mottagaren. Låt deltagarna beskriva de tre delarna.
4. Byt till en avgränsad systemöverföring. Namnge delarna: Källsystem → Integration → Konsument.
5. Läraren skickar informationskortet längs kopplingen. Ett stilla slutläge visar att mottagaren fått uppgifterna.

**Läraranteckningar:**
- **Förstå:** Källa och konsument är roller i ett visst flöde. Integration möjliggör överföringen.
- **Säg:** ”Paketet har en avsändare, en väg och en mottagare. Informationen behöver också komma från någon och fram till någon.”
- **Gör:** Visa vardagsbilden först. Klicka sedan fram begreppen ett i taget. Starta överföringen sist.
- **Fråga:** ”Vilken del saknas om vi vet var informationen finns men inte hur den når mottagaren?”
- **Missförstånd:** Information behöver inte försvinna från avsändaren när den skickas. Paketjämförelsen förklarar rollerna, inte alla tekniska egenskaper.
- **Övergång:** ”Källan kan vara något ni redan arbetat med: en kundtabell.”

### Scen 4 – Källan är inte alltid början

**Syfte:** Knyta an till SQL och skilja direkt källa från ursprunglig källa.

**Bild:** Ett litet utdrag ur en SQL-tabell, tre kolumner och ett fåtal rader. Ingen kodgenomgång.

**Visuella steg:**
1. Visa kundtabellen med Kund-ID, Namn och Adress.
2. Markera en kundrad och den konsument som läser dess uppgifter.
3. Visa överföringen. Märk tabellens system ”Direkt källa för denna mottagare”.
4. Avslöja till vänster den registrering där kunduppgiften först uppstod.
5. Markera hela kedjan. Läraren växlar fokus mellan ”Varifrån fick detta system uppgiften?” och ”Var uppstod den från början?”

**Läraranteckningar:**
- **Förstå:** Tabellen är en datamängd i ett system. En direkt källa kan själv ha tagit emot uppgifterna från ett annat system.
- **Säg:** ”Här hämtar mottagaren sin adress. Men det betyder inte att adressen först registrerades här.”
- **Gör:** Visa bara tabell och mottagare först. Avslöja ursprunget efter att deltagarna har pekat ut den direkta källan.
- **Fråga:** ”Om vi upptäcker ett fel här, vet vi då var felet uppstod?”
- **Missförstånd:** Ursprunglig källa, direkt källa och beslutad auktoritativ källa är inte nödvändigtvis samma sak. Artikelns konkreta kedja behöver bekräftas.
- **Övergång:** ”När uppgiften finns på flera ställen kan kopiorna börja skilja sig åt.”

## AKT 2 · Samma uppgift, flera versioner

### Scen 5 – Vilken adress gäller?

**Syfte:** Introducera System of Record och informationsansvar via en konkret konflikt i kundmasterdata.

**Bild:** Annas kundkort återkommer i tre system. Alla kort har samma kund-ID. Alex köp tonas bort när Anna introduceras.

**Visuella steg:**
1. Presentera Anna och samma kundidentitet i tre system. Adresserna är ännu dolda.
2. Visa första adressvärdet.
3. Visa de övriga värdena, med en avvikelse. Värden hämtas ur artikeln när den finns tillgänglig.
4. Visa frågan ”Vilken uppgift ska organisationen utgå ifrån?” Stanna utan facit.
5. Avslöja beslutat System of Record för adressuppgiften, tillsammans med informationsansvarig roll.
6. Visa att de andra systemen har kopior som behöver hållas uppdaterade. Behåll deras roller och användning synliga.

**Läraranteckningar:**
- **Förstå:** Auktoritet behöver vara beslutad för informationen. Att en uppgift är nyast eller finns i ett visst system avgör inte ensamt vilken organisationen ska utgå från.
- **Säg:** ”Det är samma kund, men vi ser olika adresser. Vi behöver veta både vilken källa vi ska lita på och vem som ansvarar för uppgiften.”
- **Gör:** Visa värden ett i taget. Vänta med ansvar och System of Record tills deltagarna har resonerat.
- **Fråga:** ”Hur skulle ni avgöra vilken adress som ska användas?”
- **Missförstånd:** System of Record gäller den definierade informationen; det gör inte systemet auktoritativt för all data. En kopia är inte automatiskt felaktig. Koppla kort till masterdata, utan en ny genomgång av golden records.
- **Övergång:** ”Även när vi är överens om källan kan det dröja innan alla ser samma uppgift.”

## AKT 3 · När och hur kommer informationen fram?

### Scen 6 – Informationen byter form

**Syfte:** Visa att integration kan göra uppgifterna användbara för mottagaren genom en enkel transformation.

**Bild:** Två fält på vänster sida, en tydlig transformationsyta i mitten och ett mottagarfält till höger.

**Visuella steg:**
1. Visa Förnamn: Anna och Efternamn: [artikelns efternamn].
2. Visa att mottagaren behöver ett fält: Fullständigt namn.
3. Flytta båda fälten till integrationsytan.
4. Visa sammanslagningen till ett fullständigt namn med ett mellanrum.
5. Visa mottagarens lagrade värde och behåll ursprungsfälten bredvid för jämförelse.

**Läraranteckningar:**
- **Förstå:** Transformation ändrar representationen enligt en regel. I detta exempel slås två värden samman; någon ny kund skapas inte.
- **Säg:** ”Avsändaren har två namnfält. Mottagaren behöver ett. Integrationen anpassar formen så att uppgiften kan användas.”
- **Gör:** Visa mottagarens behov innan sammanslagningen. Spela endast förflyttningen när du är redo.
- **Fråga:** ”Vad behöver vi veta om namnet om vi senare hittar ett fel i det fullständiga namnet?”
- **Missförstånd:** Alla integrationer transformerar inte data. Detta är en avsiktligt enkel namnregel, inte en fullständig lösning för alla personnamn.
- **Övergång:** ”Informationen kan också transporteras på olika sätt.”

### Scen 7 – Tre överföringssätt, olika behov

**Syfte:** Ge enkla bilder av API, fil och meddelanden utan kod eller avancerad infrastruktur.

**Bild:** Samma avsändarkort och en mottagare åt gången. Metoderna visas som tre korta, separata demonstrationer.

**Visuella steg:**
1. API: visa en begäran och ett svar i två lärarstyrda delsteg.
2. Fil: samla flera informationskort i en fil och visa överföringen.
3. Meddelande: publicera en händelse och visa när mottagaren behandlar den.
4. Dra tillbaka kameran ett steg: en uppgift behövs av flera konsumenter.
5. Visa en mottagare i taget med enbart de relevanta fälten. Använd artikelns mottagare och behov när underlaget finns.

**Läraranteckningar:**
- **Förstå:** Metod beskriver överföringssättet. Olika konsumenter kan behöva olika urval eller format från samma information.
- **Säg:** ”Vi kan fråga och få svar, skicka en samling uppgifter eller skicka ett meddelande om något som hänt.”
- **Gör:** Visa metoderna i ordning. Återställ transportytan mellan exemplen. Visa flera konsumenter först när metoderna är bekanta.
- **Fråga:** ”Behöver alla mottagare få alla fält?”
- **Missförstånd:** API innebär inte automatiskt realtid. Fil innebär inte automatiskt nattlig körning. Meddelande innebär inte att mottagaren behandlar det omedelbart. Svarspilen är en del av API-utbytet.
- **Övergång:** ”Sättet att skicka säger inte hela sanningen om när uppgiften syns.”

### Scen 8 – Klockan är 10.00

**Syfte:** Förklara olika uppdateringstidpunkter genom artikelns adressändring.

**Bild:** Annas adresskort och en tidslinje. Mottagarnas kort ligger längs tidslinjen, först med den gamla adressen.

**Visuella steg:**
1. Visa att Anna ändrar adress klockan 10.00 i artikelns angivna system.
2. Markera var den nya adressen nu finns. Övriga system behåller den gamla.
3. Läraren flyttar tiden till första uppdateringen enligt artikeln. Endast berörd mottagare ändras.
4. Flytta tiden till nästa dokumenterade uppdatering. Visa gammalt och nytt sida vid sida.
5. Visa sista uppdateringen och sammanfatta skillnaden mellan ändringstid och mottagarens uppdateringstid.

**Läraranteckningar:**
- **Förstå:** Giltiga kopior kan ha olika aktualitet. Uppdateringsfrekvens och faktisk överföringsfördröjning påverkar när en konsument ser ändringen.
- **Säg:** ”Anna har ändrat sin adress. Men vilket system menar vi när vi säger att adressen är uppdaterad?”
- **Gör:** Flytta tidslinjen med fördefinierade klick. Låt ingen klocka löpa automatiskt. Backa ett steg för att jämföra lägen.
- **Fråga:** ”Vilken adress ser personen som arbetar i det här systemet just nu?”
- **Missförstånd:** Löpande överföring betyder inte noll fördröjning. Inga mottagartider eller systemnamn är ännu låsta eftersom artikeln saknas.
- **Övergång:** ”Att informationen kommer fram räcker inte. Den måste också betyda rätt sak.”

## AKT 4 · När något går fel

### Scen 9 – Samma kod, olika betydelse

**Syfte:** Visa varför referensdata och identifierare i masterdata måste kunna tolkas av mottagaren.

**Bild:** En orderrad i mitten och två lokala kodförklaringar på varsin sida. Betydelserna är först täckta.

**Visuella steg:**
1. Visa order-ID och en statuskod från artikelns exempel.
2. Avslöja kodens betydelse i avsändarsystemet.
3. Skicka samma kod oförändrad till mottagaren och pausa före tolkningen.
4. Avslöja mottagarens betydelse. Markera konflikten med ord och symbol, inte enbart rött.
5. Visa artikelns korrekta översättning eller begreppsmappning, om den anges. Annars ställ frågan om hur betydelsen måste avtalas.
6. Gör en kort parallell till kund- eller produkt-ID: mottagaren måste kunna koppla identiteten rätt. Ingen ny matchningsalgoritm introduceras.

**Läraranteckningar:**
- **Förstå:** Samma tecken kan ha olika lokala betydelser. Att kopiera värdet korrekt garanterar inte en korrekt verksamhetstolkning.
- **Säg:** ”Vi har inte tappat ett enda tecken. Ändå kan ordern få fel betydelse.”
- **Gör:** Dölj mottagarens kodförklaring tills deltagarna har förutsett resultatet. Visa sedan skillnaden och till sist eventuell lösning.
- **Fråga:** ”Vad behöver systemen vara överens om utöver själva koden?”
- **Missförstånd:** En statuskod är referensdata; den aktuella orderns status är en uppgift om transaktionen. Faktiska koder och betydelser ska tas ur artikeln och är ännu inte definierade här.
- **Övergång:** ”Ibland kommer uppgiften fram med fel betydelse. Ibland kommer den inte fram alls.”

### Scen 10 – Beställningen som inte kom fram

**Syfte:** Skilja registrerad order från lyckad överföring och mottagning.

**Bild:** Återvänd till Alex orderbekräftelse. Visa bara den definierade vägen från webbshop till lager, med eventuellt mellanliggande system enligt scenariomodellen.

**Visuella steg:**
1. Visa webbshoppens order och bekräftelse.
2. Läraren startar överföringen. Orderkortet stannar vid en angiven punkt.
3. Visa lagrets orderlista utan beställningen. Lägg till tydligt ”Inte mottagen”.
4. Markera senaste verifierade punkt och första punkt där information saknas.
5. Visa kontrollfrågorna i ordning: ”Registrerad?” → ”Skickad?” → ”Mottagen?” Lösningen hålls dold om orsaken inte är känd.

**Läraranteckningar:**
- **Förstå:** En beställning kan vara korrekt registrerad samtidigt som en efterföljande överföring misslyckas. Synligt symtom avgör inte orsaken.
- **Säg:** ”Alex har sin bekräftelse. Lagret har ingen order. Var börjar vi leta?”
- **Gör:** Starta överföringen och låt den stanna på det fördefinierade stället. Visa lagrets tomma resultat innan du markerar kontrollpunkterna.
- **Fråga:** ”Vilken observation behöver vi för att avgränsa felet?”
- **Missförstånd:** Att ordern saknas hos lagret betyder inte automatiskt att lagersystemet är trasigt. Vi inför inte ett nytt tekniskt felhanteringsramverk i denna scen.
- **Övergång:** ”Samma sätt att undersöka samband hjälper oss när en rapport väcker frågor.”

## AKT 5 · Data Manager som detektiv

### Scen 11 – Varifrån kommer siffran?

**Syfte:** Introducera Data Lineage som spårbarhet till ursprung och bearbetning.

**Bild:** En rapport med ett enda markerat nyckeltal. Inga system bakom rapporten syns från början.

**Visuella steg:**
1. Visa rapportens siffra och frågan ”Hur blev det så här?” Mått och värde ska hämtas ur artikeln, alternativt uttryckligen märkas som fiktivt undervisningsexempel.
2. Avslöja rapportens direkta datakälla.
3. Följ ett steg bakåt och visa underlaget samt en enkel dokumenterad sammanställning, om artikeln beskriver en sådan.
4. Avslöja ursprungliga poster. Markera vilka som ingår i siffran.
5. Visa spåret som helhet och namnge ”Data Lineage – uppgifternas ursprung och bearbetning”.
6. Markera ett mellanliggande system: konsument i inkommande flöde, källa i utgående flöde. Pilarna för data behåller sin riktning även när vi undersöker bakåt.

**Läraranteckningar:**
- **Förstå:** Lineage dokumenterar hur uppgifter och resultat hänger ihop med sina källor och transformationer. En teknisk systemkoppling ensam förklarar inte alltid hur en siffra beräknades.
- **Säg:** ”Vi börjar i svaret som verksamheten ser och undersöker vilka uppgifter och bearbetningar som ligger bakom.”
- **Gör:** Avslöja en tidigare länk per klick. Stanna vid bearbetningen. Visa begreppet först när undersökningen blivit konkret.
- **Fråga:** ”Vad behöver vi kunna följa för att förklara den här siffran?”
- **Missförstånd:** Undersökning bakåt betyder inte att dataflödet går baklänges. Källa och konsument är roller i en relation, inte permanenta systemtyper. Lägg inte till avancerad lineage-teknik.
- **Övergång:** ”Nu vet vi vilka frågor en användbar dataflödeskarta behöver besvara.”

### Scen 12 – Kartan vi nu kan läsa

**Syfte:** Samla berättelsen i en enkel dokumenterad dataflödeskarta, med kända objekt och begrepp.

**Bild:** Börja med en av de överföringar som redan undersökts. Komplettera dess dokumentation visuellt innan övriga kända flöden tillkommer.

**Visuella steg:**
1. Visa avsändare och mottagare för den valda överföringen.
2. Lägg till datamängd med ett litet exempelobjekt.
3. Lägg till överföringssätt.
4. Lägg till frekvens separat från överföringssättet.
5. Lägg till informationsansvar och ansvar för överföringen, på den nivå artikeln stödjer.
6. Bygg ut till kapitlets övriga redan visade flöden. Obekräftade uppgifter märks ”Behöver verifieras”.
7. Avsluta med Alex beställning och den sammanhängande kartan: ”Nu kan vi följa vad som händer bakom kulisserna.”

**Läraranteckningar:**
- **Förstå:** Dokumentationen beskriver vem som skickar vad, till vem, hur, när och med vilket ansvar. Kartan omfattar kapitlets avgränsade flöden, inte automatiskt hela företagets IT-miljö.
- **Säg:** ”Den här kartan består av samma överlämningar som vi redan har följt. Nu kan vi beskriva dem så att någon annan kan undersöka och förvalta dem.”
- **Gör:** Lägg till ett dokumentationsfält i taget. Expandera först därefter till flera flöden. Avsluta i ett stilla helhetsläge.
- **Fråga:** ”Vilken uppgift på kartan skulle ni behöva först om Alex order inte når lagret?”
- **Missförstånd:** En ritad pil är inte bevis för en verifierad integration. Informationsansvar och tekniskt överföringsansvar behöver inte vara samma roll.
- **Övergång:** ”Nästa artikel kan bygga vidare på de här uppgifterna, flödena och ansvaren.”

## Visuell och teknisk riktning inför implementation

- Behåll marinblå bakgrund, tydliga kort och turkosa informationsöverföringar. Orange betyder väntan eller osäkerhet, rött ett observerat fel. Komplettera alltid färg med text eller symbol.
- Filmiskt betyder fokuserad inramning och lärarutlösta avslöjanden: butik → bakom kulisserna → en överlämning → flera kopior → undersökning → karta. Inga dekorativa bakgrundsanimationer.
- Introduktionen får en egen butiksscen. Tabell, adressjämförelse, transformation, tidslinje och rapportundersökning blir specialvisualiseringar. React Flow används där faktiska relationer hjälper förståelsen.
- Inga stora textblock på projektorn. Talmanus och nyanser ligger i lärarfönstret. Förklaringstext på scenen begränsas till objektetiketter, en fråga eller ett kort begrepp.
- Kapiteldefinitionen behåller gemensam navigation och lärarstöd. Varje scen får egen typad stegbeskrivning och visualiseringskomponent. Gemensamma dataobjekt och flöden återanvänds från scenariomodellen.
- Stabilt visuellt tillstånd ska beräknas från kapitel, scen och steg. Pausad animationsposition hålls separat från scenariodata. Bakåt, återställning och scenhopp får aldrig lämna kvar en tidigare orders eller adressändrings tillstånd.

## Det som ska godkännas före implementation

1. Tempot: två introscener innan begreppen introduceras, tolv scener totalt.
2. Pedagogisk progression: vardaglig handling → roller i ett flöde → auktoritet → form/metod/tid → betydelse och fel → spårbarhet → dokumenterad karta.
3. Artikeltrohet: kontrollera hela storyboarden mot den saknade artikeln och ersätt alla öppna exempel innan implementation.
