# The evaluation of the development process

## Vilka olika funktionaliteter finns i ditt program? Finns det några buggar? Kan programmet krascha?
Min sida är en webshop där man kan köpa ljus. Man kan skapa ett konto, logga in och ut. Man kan lägga till fler produkter och även lägga dem i sin kundvagn som också går att tömma.

## Är användargränssnittet tydligt och snyggt?
Jag skulle säga att gränssnittet är tydligt och relativt snyggt. Alla knappar och funktioner är tydliga och lättillgängliga. Dock lyckades jag inte lösa sök funktionen samt kundvagnen vilket gör sidan mindre användbar

## Var något svårt? Var något lätt?
Passport var klurigt till en början. Men efter ett tag förstod jag mig på det. Användningen av bootstrap var generellt lätt.

## Stötte du på några problem du fastnade på? Hur löste du dem?
Hur jag skulle hantera kundvagnen var ett stort problem. Först försökte jag spara kundvagnen i databasen vilket funkade till en del saker jag ville åstadkomma. Jag kunde exempelvis visa upp mycket lätt vad som låg i  kundvagnen, å andra sidan räckte inte mina kunskaper till i MongoDB som gjorde att jag inte lyckades göra kundvagnen bete sig på precis det sättet jag ville. Jag löste de problemen genom att byta från att lagra kundvagnen i databasen till att istället lagra den hon klienten i localStorage. Detta gjorde dock det väldigt omständigt att visa vad som låg i kundvagnen, något som jag inte visste hur jag skulle lösa på grund av bootstraps sätt att skapa deras popovers som jag använde för kundvagnen.

Ett annat problem jag stötte på var när jag försökte göra en sökmetod. Jag lyckades aldrig få den att funka och förstår inte varför det är så. Jag testade att göra funktionerna på flera olika sätt innan jag fick nöja mig med den jag har vid detta tillfället.

## Hade du tillräckligt med förkunskaper? Vad (om några) saknade du för förkunskaper?
Jag hade inte tillräckligt med förkunskaper när det kom till MongoDB och hantering av localStorage. Att jag saknade kunskaper i båda dessa ledde till att jag inte lyckades visa upp min kundvagn på det sättet jag ville.

## Ser du några förbättringar som kan göras? Förklara bara vad och hur man hade kunnat göra.
Den största förbättringen är nog att göra sidan mer mobilanpassad. Sedan är det nog att göra lösenorden till de privata rummen hashade, kanske även meddelandena om man verkligen vill göra konversationerna där privata.

## Är det någon funktion du hade velat lägga till men som du saknar kunskaper för att göra?
Sökfunktionen och kundvagnen. Dock tror jag att med mer tid och ork att jag hade löst även dessa.

## Hur fungerar programmet? Beskriv programflödet.
Användare går in på sidan → kan logga in/skapa konto eller inte
sedan kan användaren:
kolla på produkter och läsa om sidan, om den är inloggad kan den också lägga produkter i kundvagnen
Om användaren dessutom är admin kan hen lägga till nya produkter i databasen




# Självbedömning:

## Min planering är noggrant och utförligt gjord
Jag lade relativt mycket tid på min planering. Även om jag inte gjorde wireframes på alla mina sidor (något jag inte behövde göra enligt lärare) hade jag en plan på hur alla mina sidor skulle se ut. Dock skedde det mindre förändringar på sidan utseende under arbetets gång. När det kom till sidans back-end planering hade den kunnat vara mer genomtänkt. Anledningen till att den inte var det har mycket med att göra att sakerna jag gjorde under projektet var första gången för mig, jag visste alltså inte hur saker och ting skulle fungera i förväg. Därför tror jag att nästa gång jag gör ett sådant här projekt kommer planeringen och även resten av projektet bli mycket bättre.

## Mitt program är av robust karaktär
Jag har själva inte hittat något sätt att ta sönder programmet på och våra kod lösningar är genomtänkta och borde klara av en del oförutsedda problem. 

## Mitt program kommunicerar med användaren på ett tydligt sätt
Gränssnittet är tydligt och lättnavigerat. Dock funkar inte sökfunktionen som den ska, detsamma gäller kundvagnen vilket gör det lite mer otydligt för användaren.

## Mina kommentarer/dokumentation är noggrant och utförligt gjorda
Jag har kommenterat den mesta koden som behöver förklaring. Kommentarerna är också noggranna och förklarar tydligt det som händer.

## Min källkod är tydlig, strukturerad och lättläslig
Koden är uppdelad efter funktion och syfte. Detta gör den lätt navigerad om det blir något fel eller annan förändring som måste göras.

# Självskattning:

## Hur mycket tid la du på uppgiften? Var det tillräckligt för att du blev nöjd med resultatet?
Jag tycker jag la mycket tid på min uppgift. Uppenbarligen inte tillräckligt eftersom jag inte blev nöjd.

## Nu i efterhand, hade du önskat att du gjort något annorlunda? (Planerat mer/mindre, lagt ned mer tid, varit bättre förberedd, etc.)
Gjort mer research innan jag började planeringen. Kanske också gjort mindre testprojekt för att se hur saker och ting fungerade. Detta är något jag hade velat göra men något jag inte hade tid för.

