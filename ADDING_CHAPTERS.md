# Lägga till kapitel i Systemlabbet

## Innehåll och registrering
Skapa `src/chapters/mitt-kapitel.ts` och exportera ett objekt av typen `Chapter` från `src/model.ts`. Ge kapitlet ett unikt `id`, titel, beskrivning, begrepp och en lista av scener. Importera objektet i `src/chapters/index.ts` och lägg till det i `chapters`. Befintliga innehållsfiler behöver inte ändras.

## Scener och presentationssteg
Varje `Scene` har ett unikt id inom kapitlet, titel, undertitel, artikelavsnitt (`section`), `steps`, begrepp, diskussionsfråga och anteckningar. Första steget har index 0. En scen ska kunna rekonstrueras enbart från sitt steg och sina uttryckliga val. Mutera inte tidigare scener. Navigering över scengränser återställer tillfälliga val; tillbaka går till föregående scens sista steg.

Välj en befintlig `kind` för gemensam visualisering eller ange `visual` med en React-komponent som tar `{step:number}`. Specialkomponenten ersätter kartytan och kan använda egna kontroller. Håll egna tillstånd lokala och återställ dem när steg/scen ändras. Lägg aldrig viktiga animationer i en automatiskt startande effekt. Scenernas visualisering kan vid mer omfattande kapitel brytas ut ur `main.tsx` till egna renderare.

`steps` definierar de stabila visningslägena. Spela startar en 1,8 sekunders övergång till nästa steg och stannar där. Pausa avbryter övergången, behåller aktuellt stabilt steg och återstart börjar samma övergång igen. För animerade kartflöden används React Flows animerade kanter. Klicka på stegindikatorerna för direkt åtkomst.

## Läraranteckningar
Fyll samtliga fält i `TeachingNotes`: `understand`, `say`, `action`, `question`, `misconceptions`, `transition`. Dokumentera tekniska förenklingar i `misconceptions`. Anteckningar visas i panelen eller i `?notes=1`. Separat fönster följer presentationsfönstret via lokal storage på samma origin. Dra lärarfönstret till lärarens egen skärm och visa endast presentationsfönstret på projektorn. Undvik flera samtidiga presentationsfönster eftersom de delar samma synkroniseringsnyckel.

## Gemensam verksamhet
Återanvänd `systems`, `connections` och `example` från `src/model.ts`. Varje koppling har avsändare, mottagare, innehåll, metod, frekvens och verifieringsstatus. Lägg till verkligt nya scenariokopplingar där innan de visualiseras. Nya system kräver också ikon i `main.tsx`. Antaganden ritas streckade och ingår inte i `downstream`.

## Kontrollera
Kör `npm test` och `npm run build`. Prova samtliga steg framåt, bakåt, återställning, metod- och problemval samt lärarfönstret. Kontrollera på 1280×720 och 1920×1080. All synlig text ska vara svenska. Använd inga externa API:er eller typsnitt under körning.
