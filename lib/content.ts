// Allt innehåll på sidan. Ändra texterna här.
// **fetstil** fungerar i alla texter.

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "copy"; label: string; text: string }
  | { type: "download"; label: string; file: string; note?: string };

export type Resource = {
  title: string;
  by?: string;
  blocks: Block[];
};

export type Takeaway = { text: string; by?: string };

export type Phase = {
  slug: string;
  name: string;
  week: string;
  question: string;
  color: string;
  icon: string;
  intro: string;
  takeaways: Takeaway[];
  steps: string[];
  tasks: string[];
  resources: Resource[];
  checklist: string[];
};

export const securityPrompt = `Granska min produkt ur ett data-, integritets- och säkerhetsperspektiv. Utgå från hur produkten faktiskt är byggd, inte bara hur den är tänkt att fungera.

Undersök följande:
1. Data: Vilken information samlar produkten in, var lagras den och vilka externa tjänster får tillgång till den?
2. Personuppgifter och GDPR: Behandlar vi personuppgifter? Finns risker kring samtycke, rättslig grund, lagring, radering eller överföring till tredje land?
3. Behörigheter: Kan användare komma åt varandras data? Är inloggning, databasregler och API-nycklar säkert hanterade?
4. AI och externa tjänster: Vilken data skickas till AI-modeller eller andra API:er? Finns risk att känslig information exponeras?
5. Cookies och spårning: Använder produkten cookies eller analysverktyg som kräver information eller samtycke?
6. Publicering: Vilka säkerhetsrisker behöver åtgärdas innan produkten delas publikt?

Presentera resultatet som en prioriterad checklista med risknivå (hög, medel, låg), förklaring och rekommenderad åtgärd.

Var kritisk. Anta inte att produkten är säker bara för att den fungerar. Skilj på sådant du har verifierat i koden och sådant som behöver undersökas manuellt. Gör inga ändringar innan jag godkänt dem.`;

export const prdTemplate = `# PRD – [Produktens namn]

## 1. Product Overview
Vad bygger vi och varför?

## 2. Problem & Opportunity
Vilket problem eller vilken möjlighet adresserar vi?

## 3. Target Users
Vilka ska använda produkten?

## 4. Value Proposition
Vilket värde skapar lösningen?

## 5. User Stories & Journey
Vad ska användarna kunna göra och hur?

## 6. MVP Scope & Priorities
Vad ingår i första versionen och vad ingår inte?

## 7. Functional Requirements
Vad måste lösningen faktiskt kunna göra?

## 8. Success Metrics & Validation
Hur mäter och testar vi att lösningen skapar värde?

## 9. Technical Requirements
Data, integrationer, säkerhet, prestanda och tillgänglighet.

## 10. Assumptions, Questions & Next Steps
Vad vet vi, vad antar vi och vad behöver undersökas?`;

export const phases: Phase[] = [
  {
    slug: "discover",
    name: "Discover",
    week: "Vecka 1",
    question: "Vilket problem är värt att lösa?",
    color: "discover",
    icon: "🔍",
    intro:
      "Allt börjar i behovet. Innan du bygger något behöver du förstå vem som har problemet, när det uppstår och hur det löses i dag.",
    takeaways: [
      {
        text: "**Börja med behovet och värdet.** Vem hjälper du, med vad, och är en ny produkt rätt sätt att lösa det?",
        by: "Emelie Fågelstedt",
      },
      {
        text: "**Förstå människan och vardagen.** Formulera vem du hjälper, vad personen vill göra och vilket hinder som finns.",
        by: "Anders Mellbratt",
      },
      {
        text: "**Utforska flera idéer.** Den första lösningen är en möjlighet bland flera. Använd AI för att bredda alternativen.",
        by: "Anders Mellbratt",
      },
      {
        text: "Den bästa kunskapen finns ofta i silos: hos support, HR, experter, kunder och leverantörer. Prata med dem.",
      },
      {
        text: "**Idé ≠ produkt ≠ värde.** Bara för att du kan bygga något betyder det inte att du borde.",
      },
    ],
    steps: [
      "Skriv ner problem i din vardag som du önskar att någon byggde bort.",
      "Välj ett problem och beskriv vem som har det och när det uppstår.",
      "Ta reda på hur personen löser problemet i dag.",
      "Utforska flera möjliga lösningar innan du väljer en.",
    ],
    tasks: [
      "Svara på: **Vilket problem i din arbetsvardag önskar du att någon hade byggt bort åt dig?** Hur hade du kunnat bygga lösningen själv?",
      "Prata med en person som har problemet. Fråga hur de gör i dag.",
      "Be din AI-assistent ge dig fem olika sätt att lösa problemet.",
    ],
    resources: [
      {
        title: "Exempel: problem som byggts bort",
        blocks: [
          {
            type: "list",
            items: [
              "**Ekonomiavdelningen** som byggde ett budgetverktyg så att alla team fick överblick över sina budgetar, och slapp massa admin-frågor.",
              "**Receptionisten** som byggde ett eget incheckningsverktyg och samtidigt kunde samla besöksdata.",
              "**Designern** som byggde en generator där hela organisationen kunde skapa brand assets enligt den grafiska manualen.",
              "**Marknadsföraren** som byggde en kampanjgenerator för rätt format, copy och budskap i olika kanaler.",
              "**Jobbsökaren** som byggde ett verktyg som varje morgon söker igenom jobbsajter och föreslår hur hen ska söka.",
            ],
          },
        ],
      },
      {
        title: "Var finns kunskapen?",
        blocks: [
          {
            type: "p",
            text: "Leta efter problem där kunskapen finns: supportteam, HR, utvecklare, ingenjörer, snart pensionerade experter, ledningsgruppen, yngre medarbetare, kunder och leverantörer. ”What if customer support worked together with the dev team on the solution the end user actually needs?”",
          },
        ],
      },
    ],
    checklist: [
      "Jag kan beskriva problemet i en mening",
      "Jag vet vem som har problemet",
      "Jag vet hur de löser det i dag",
      "Jag har pratat med minst en person i målgruppen",
      "Jag har utforskat mer än en möjlig lösning",
    ],
  },
  {
    slug: "define",
    name: "Define",
    week: "Vecka 1",
    question: "Vad ska vi bygga, och för vem?",
    color: "define",
    icon: "💡",
    intro:
      "Gör idén konkret och möjlig att testa. Här skriver du din PRD, utmanar idén och bestämmer vad som ska ingå i första versionen.",
    takeaways: [
      {
        text: "**Gör idén konkret och möjlig att testa.** Beskriv vad du vill bygga, för vem och varför i en första PRD. Bygg sedan en liten version att lära av.",
        by: "Emelie Fågelstedt",
      },
      {
        text: "PRD:n är ett **styrdokument** innan du börjar bygga. Den kan uppdateras under resans gång, men hjälper dig att komma tillbaka till det viktigaste.",
      },
      {
        text: "**Bygga med AI eller bygga in AI?** Med AI skapar du design och kod. Med AI i produkten kostar varje användning tokens. Det påverkar kostnad och komplexitet.",
      },
      {
        text: "**En enkel produktidé kan vara svårare än en svår.** Keep it simple.",
      },
    ],
    steps: [
      "Skriv en första PRD med mallen nedan.",
      "Gör en Product Reality Check med någon annan.",
      "Avgränsa MVP:n: vad ingår i första versionen, och vad väljer du bort?",
      "Bestäm om du bygger med AI, bygger in AI, eller båda.",
    ],
    tasks: [
      "Fyll i en första version av PRD:n. Det får vara kort.",
      "Skriv klart meningen: **Det viktigaste jag behöver ta reda på om min produkt just nu är ____.**",
      "Svara på: **Vilket är ditt viktigaste antagande, och hur kan du testa det med minsta möjliga bygge?**",
    ],
    resources: [
      {
        title: "PRD-mall (Product Requirement Document)",
        blocks: [
          {
            type: "table",
            head: ["Rubrik", "Vad den innehåller"],
            rows: [
              ["1. Product Overview", "Vad bygger vi och varför?"],
              ["2. Problem & Opportunity", "Vilket problem eller vilken möjlighet adresserar vi?"],
              ["3. Target Users", "Vilka ska använda produkten?"],
              ["4. Value Proposition", "Vilket värde skapar lösningen?"],
              ["5. User Stories & Journey", "Vad ska användarna kunna göra och hur?"],
              ["6. MVP Scope & Priorities", "Vad ingår i första versionen och vad ingår inte?"],
              ["7. Functional Requirements", "Vad måste lösningen faktiskt kunna göra?"],
              ["8. Success Metrics & Validation", "Hur mäter och testar vi att lösningen skapar värde?"],
              ["9. Technical Requirements", "Data, integrationer, säkerhet, prestanda och tillgänglighet"],
              ["10. Assumptions, Questions & Next Steps", "Vad vet vi, vad antar vi och vad behöver undersökas?"],
            ],
          },
          { type: "copy", label: "Kopiera PRD-mallen", text: prdTemplate },
        ],
      },
      {
        title: "Product Reality Check",
        by: "Övning i par, 10 minuter per produkt",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Vilket problem försöker du lösa, och för vem?",
              "Hur vet du att det här är ett verkligt problem?",
              "Hur löser användaren problemet i dag?",
              "Vad är ditt största antagande just nu? (Vad måste vara sant för att produkten ska skapa värde?)",
              "Vad skulle du behöva testa innan du bygger vidare?",
            ],
          },
          {
            type: "p",
            text: "Skriv ner: **Det viktigaste jag behöver ta reda på om min produkt just nu är ____.**",
          },
        ],
      },
      {
        title: "Bygga med AI, eller bygga in AI?",
        blocks: [
          {
            type: "table",
            head: ["", "AI hjälper dig bygga", "AI är en funktion i produkten"],
            rows: [
              ["Vad", "Du använder AI för design, kod och felsökning", "Produkten använder AI för att analysera, generera innehåll eller svara på frågor"],
              ["Exempel", "En hemsida, en bokningslösning, en dashboard med fasta beräkningar", "En dokumentassistent, ett verktyg som tolkar data och föreslår åtgärder"],
              ["Kostnad", "Tokens när du bygger och vidareutvecklar", "Tokens varje gång någon använder AI-funktionen"],
            ],
          },
        ],
      },
    ],
    checklist: [
      "Jag har en första version av min PRD",
      "Jag har gjort en Product Reality Check med någon",
      "Jag vet mitt viktigaste antagande",
      "Jag har bestämt vad som ingår i MVP:n och vad som inte gör det",
      "Jag vet om jag bygger med AI, bygger in AI, eller båda",
    ],
  },
  {
    slug: "build",
    name: "Build",
    week: "Vecka 2",
    question: "Hur kan jag skapa en fungerande lösning med AI?",
    color: "build",
    icon: "💻",
    intro:
      "Bygg en första fungerande version. Börja med det viktigaste användarflödet, håll det enkelt och se till att du kan bedöma det AI:n skapar.",
    takeaways: [
      {
        text: "**Du behöver inte kunna skriva kod för att börja.** Men du behöver kunna bedöma resultatet och förstå när du behöver mer teknisk hjälp.",
      },
      {
        text: "**Begränsa idén till det viktigaste först.** Bygg det viktigaste användarflödet så att kärnidén fungerar. Du kan bygga vidare sen.",
      },
      {
        text: "**Be AI att förenkla.** När bygget växer: stanna upp, rensa och fråga om samma sak kan lösas med mindre kod och färre delar.",
        by: "Tomas Seo",
      },
      {
        text: "**Skriv ned vad som ska fungera.** Ett testprotokoll hjälper dig kontrollera att tidigare funktioner fortfarande fungerar efter en ändring.",
        by: "Tomas Seo",
      },
      {
        text: "**Med AI hoppar vi ofta direkt till att utveckla.** Stanna upp och förstå kontexten och behoven först.",
        by: "Karolina Meijer",
      },
      {
        text: "**Använd versionshantering.** Samla koden, följ förändringar och skapa förutsättningar för samarbete och överlämning.",
        by: "Stefan Persson",
      },
      {
        text: "**Fastnar du? Fråga din AI-assistent.** Den är ditt bollplank och din support.",
      },
    ],
    steps: [
      "Välj ett verktyg, och ha en plan (din PRD).",
      "Berätta för AI:n vad du vill göra.",
      "Bygg, testa och fortsätt prata med AI:n.",
      "Koppla projektet till ett privat GitHub-repo.",
    ],
    tasks: [
      "Vilken är **den viktigaste uppgiften** användaren ska kunna genomföra i produkten?",
      "Vilka steg behöver fungera **från start till mål**?",
      "Vad **väljer du bort** i dag?",
      "Vilken del av ditt bygge kan bli **enklare**, och hur kontrollerar du att allt fortfarande fungerar?",
    ],
    resources: [
      {
        title: "Välj verktyg att bygga med",
        blocks: [
          {
            type: "p",
            text: "Det finns inget bästa verktyg, bara det som passar ditt bygge just nu. Många börjar i ett verktyg och flyttar vidare när produkten växer. Med koden på GitHub kan du byta när du vill.",
          },
          {
            type: "table",
            head: ["Verktyg", "Funkar bäst när", "Fördelar", "Nackdelar"],
            rows: [
              [
                "**Lovable**",
                "Du vill gå snabbt från idé till en klickbar prototyp, landningssida eller enkel app med inloggning och databas.",
                "Inget kodande. Visuellt och snabbt. Inbyggd databas och publicering med ett klick. Synkar till GitHub.",
                "Krediter tar slut snabbt vid felsökning. Svårare med komplex logik. Låst till en viss teknisk stack.",
              ],
              [
                "**Replit**",
                "Produkten behöver mer logik i bakgrunden: skript, automationer, API-kopplingar eller bottar.",
                "Hel utvecklingsmiljö i webbläsaren. Många programspråk. Agent som bygger åt dig. Databas och hosting ingår.",
                "Mer tekniskt gränssnitt. Kostnaden kan dra iväg med användning. Mindre fokus på design.",
              ],
              [
                "**Claude** (Claude Code och Claude.ai)",
                "Du vill bygga vidare på riktigt, jobba i ett GitHub-repo eller ta en prototyp till något stabilare. I Claude.ai kan du också snabbt göra små verktyg och sidor.",
                "Starkt på kod, struktur och resonemang. Jobbar direkt i din kod på GitHub. Bra på granskning, förenkling och säkerhetsgenomgångar.",
                "Kräver lite mer vana vid GitHub och filer. Publicering sköter du själv, till exempel via Vercel.",
              ],
              [
                "**Codex** (OpenAI)",
                "Koden ligger redan på GitHub och du vill lämna över avgränsade uppgifter eller få en andra åsikt.",
                "Tar uppgifter och föreslår ändringar direkt i repot. Bra för granskning. Finns i ChatGPT som många redan använder.",
                "Kräver ett GitHub-repo. Mindre visuellt. Hosting sköts separat.",
              ],
            ],
          },
          {
            type: "p",
            text: "**Tips:** Låt verktygen granska varandra. Bygg i ett verktyg och be ett annat att leta efter fel, förenklingar och säkerhetsrisker.",
          },
        ],
      },
      {
        title: "Din AI-assistent: bollplank genom hela projektet",
        blocks: [
          {
            type: "p",
            text: "Ha en AI-assistent som du diskuterar projektet med, vid sidan av byggverktyget. Där kan du tänka högt, utmana idén och få hjälp när du fastnar.",
          },
          {
            type: "list",
            items: [
              "Välj en du trivs med: **ChatGPT**, **Gemini**, **Claude** eller **Copilot**.",
              "Skapa ett **projekt** i assistenten och samla allt där: PRD, anteckningar, testresultat, skärmbilder och feedback.",
              "Be den formulera prompts till byggverktyget, sammanfatta användartester eller uppdatera din PRD.",
              "Fastnar du? Klistra in felmeddelandet eller beskriv vad som händer och fråga vad nästa steg är.",
            ],
          },
        ],
      },
      {
        title: "GitHub: din kod, oavsett verktyg",
        blocks: [
          {
            type: "p",
            text: "Skaffa ett konto på **GitHub** och spara koden i ett **privat repo**. Det fungerar oavsett om du bygger i Lovable, Replit, Claude eller Codex.",
          },
          {
            type: "list",
            items: [
              "**Backup:** koden finns kvar även om du slutar använda ett verktyg.",
              "**Historik:** du kan se vad som ändrats och gå tillbaka om något går sönder.",
              "**Flytta och samarbeta:** byt verktyg, låt andra AI-verktyg granska koden eller lämna över till en utvecklare.",
              "**Publicera:** tjänster som Vercel hämtar koden direkt från GitHub.",
            ],
          },
        ],
      },
      {
        title: "Termer när du bygger med AI",
        blocks: [
          {
            type: "p",
            text: "Orden fungerar i flera verktyg, till exempel Claude Code, Codex och Replit. Även i Lovable möter du dem om projektet är kopplat till GitHub. Du kan skriva till AI:n på svenska.",
          },
          {
            type: "table",
            head: ["Ord", "Vad det betyder"],
            rows: [
              ["**Repo**", "Där projektets kod och versionshistorik finns."],
              ["**Branch**", "En separat gren där du kan göra ändringar i koden."],
              ["**Diff**", "En jämförelse som visar vad som lagts till, ändrats eller tagits bort."],
              ["**Commit**", "En uppsättning ändringar sparad i Gits historik."],
              ["**Push**", "Skicka commits till ett annat repo, till exempel på GitHub."],
              ["**Pull request (PR)**", "Ett förslag att föra in ändringar från en branch i en annan, så att de kan granskas först."],
              ["**Build**", "Steget som förbereder koden så att appen kan köras eller publiceras."],
              ["**Deploy**", "Lägga ut en version av appen i en miljö där den kan köras."],
              ["**Preview / production**", "Preview är en förhandsversion. Production är den skarpa miljön som användarna möter."],
              ["**Rollback**", "Återställa en tidigare version i miljön där appen körs."],
            ],
          },
          {
            type: "p",
            text: "**Kom ihåg:** commit sparar ändringarna i Git, push skickar dem till till exempel GitHub, och deploy gör en version tillgänglig. I vissa projekt startar en push automatiskt en deploy.",
          },
          {
            type: "copy",
            label: "Kopiera startprompten",
            text: "Jag vill ändra [funktionen]. Visa först vad du planerar att ändra. När du är klar, sammanfatta ändringarna och visa hur jag kan testa dem. Om projektet använder Git, visa också diffen. Vänta med att pusha eller publicera tills jag har granskat ändringarna.",
          },
          { type: "download", label: "Termer – AI-bygge", file: "/material/termer-ai-bygge.pdf", note: "PDF · 2 sidor · med färdiga fraser att be AI:n om" },
        ],
      },
      {
        title: "Vercel: publicera det du bygger med Claude",
        blocks: [
          {
            type: "p",
            text: "Bygger du i Claude eller Codex behöver du någonstans att publicera. **Vercel** kopplas till ditt GitHub-repo och lägger ut sidan på en egen adress.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Logga in på vercel.com med ditt GitHub-konto (gratisnivån räcker för att börja).",
              "Klicka **Add New → Project** och välj ditt repo.",
              "Lägg in hemligheter som lösenord och API-nycklar under **Environment Variables**, aldrig i koden.",
              "Klicka **Deploy**. Varje gång koden uppdateras på GitHub publiceras en ny version automatiskt.",
            ],
          },
          {
            type: "p",
            text: "Lovable och Replit har egen publicering inbyggd, så där behövs inte Vercel.",
          },
        ],
      },
      {
        title: "UX när vi bygger med AI",
        by: "Karolina Meijer",
        blocks: [
          {
            type: "p",
            text: "UX är hur användaren upplever din produkt från start till slut: från första kontakten till att uppgiften är klar. Målet är att lämna användaren med en känsla av förståelse, lättnad, glädje eller att ha bemästrat något.",
          },
          {
            type: "p",
            text: "**Double diamond:** Discover (utforska kontexten) → Define (definiera problem och behov) → Develop (utveckla lösningen) → Deliver (leverera). Iterera: gör om, gör rätt.",
          },
          {
            type: "p",
            text: "**De 3 W:na.** Använd AI som sparringpartner för att vattentäta din research:",
          },
          {
            type: "list",
            items: [
              "**Vem:** för vem gör vi detta?",
              "**Vad:** vad ska levereras? En dashboard, en tjänst, en öppen hemsida?",
              "**Varför:** varför gör vi detta?",
              "Extra: **Hur** (tillvägagångssätt) och **Effekt** (vilken effekt vill vi uppnå?)",
            ],
          },
          {
            type: "p",
            text: "**Utveckla och leverera:** Ta inspiration från andra. Testa med användare, inte bara med dig själv. Kill your darlings. Släpp i små doser, inga big bangs.",
          },
        ],
      },
      {
        title: "UX-ramverk att göra till AI-skills",
        by: "Karolina Meijer",
        blocks: [
          {
            type: "p",
            text: "Använd ramverken till sådant du gör om och om igen. Skapa egna AI-skills i till exempel Claude, Figma eller Copilot, och skräddarsy dem till det du faktiskt behöver svar på.",
          },
          {
            type: "list",
            items: [
              "**Användarhistorier:** från punkt A till B",
              "**Jakob Nielsens 10 heuristiker** för användbarhet",
              "**Don Normans principer** för bra design",
              "**WCAG** för tillgänglighet",
            ],
          },
        ],
      },
      {
        title: "Vad mer kan du behöva?",
        blocks: [
          {
            type: "table",
            head: ["Område", "Exempel på underlag och tillgångar"],
            rows: [
              ["Varumärke & innehåll", "Grafisk manual, logotyp, bilder, typsnitt, tonalitet och kommunikationsriktlinjer"],
              ["Kunskap & verksamhet", "Befintliga dokument, processbeskrivningar, regler och expertkunskap"],
              ["Data", "Intern eller extern data, exempeldata och information om vad som får användas"],
              ["System & integrationer", "API:er, dokumentation, API-nycklar och rätt behörigheter"],
              ["Lagring & inloggning", "Behöver produkten komma ihåg något, spara filer eller skilja mellan användare?"],
              ["Publicering & ansvar", "Var ska produkten finnas, vem får använda den och vem ansvarar för den?"],
            ],
          },
          { type: "download", label: "Checklista över behov av underlag och tillgångar", file: "/material/checklista-underlag-och-tillgangar.pdf", note: "PDF · 3 sidor · inkl. säkerhet, integritet, test och publicering" },
        ],
      },
      {
        title: "När ska man använda vad?",
        blocks: [
          {
            type: "table",
            head: ["AI-assisterat produktbygge", "Traditionell utveckling"],
            rows: [
              ["Tidiga hypoteser", "System med säkerhet och känslig data"],
              ["Affärsdrivet fokus och experimenterande", "Skalbara lösningar"],
              ["Utforskande, interna verktyg", "Komplexa system"],
              ["Proof-of-concept", "…i alla fall just nu"],
            ],
          },
          {
            type: "p",
            text: "Vibe coding kan hjälpa organisationer att avgöra vilka projekt som förtjänar utvecklingstid. Fler idéer kan testas snabbare av dem som äger domänkunskapen.",
          },
        ],
      },
    ],
    checklist: [
      "Jag har valt verktyg",
      "Jag har en AI-assistent med projektets filer samlade",
      "Jag har svarat på Vem, Vad och Varför",
      "Jag har listat vilket underlag och vilka tillgångar jag behöver",
      "Det viktigaste användarflödet fungerar från start till mål",
      "Koden är synkad till ett privat GitHub-repo",
      "Jag har ett enkelt testprotokoll (vad ska fungera?)",
      "Jag har bett AI:n förenkla där bygget vuxit",
      "Jag har låtit AI granska designen mot Nielsens heuristiker och WCAG",
    ],
  },
  {
    slug: "validate",
    name: "Validate",
    week: "Vecka 3",
    question: "Hur vet jag om lösningen faktiskt skapar värde?",
    color: "validate",
    icon: "🧪",
    intro:
      "Testa med riktiga användare, mät det som spelar roll och gå igenom säkerhet och ansvar innan fler får tillgång.",
    takeaways: [
      {
        text: "**Ge användaren ett tydligt mål.** Observera och ställ öppna frågor. Låt det du ser påverka nästa version.",
        by: "Karolina Meijer",
      },
      {
        text: "**The prototype illusion.** Något som ser färdigt ut behöver inte vara färdigt. Definiera vad ”klart” betyder.",
        by: "Fredrik Jonsson",
      },
      {
        text: "**Prototypen hjälper dig förstå problemet.** Ju mer du testar, desto mer förstår du vad som saknas. Användartester ”förstör” snabbt din tänkta användarresa.",
        by: "Fredrik Jonsson",
      },
      {
        text: "**Max fem testpersoner** räcker ofta för att hitta det mesta som fungerar och fallerar.",
        by: "Karolina Meijer",
      },
      {
        text: "**Iterera.** Testa flera gånger. Lär. Gör om. Och gör om igen.",
      },
    ],
    steps: [
      "Sätt ett mätvärde utifrån nyttan i din PRD.",
      "Låt någon i målgruppen testa med en konkret uppgift.",
      "Observera, skriv ner och bygg vidare.",
      "Gå igenom data, säkerhet och ansvar innan fler får testa.",
    ],
    tasks: [
      "Välj **ett mätvärde** som visar om prototypen ger nyttan du beskrev i PRD:n.",
      "Låt någon testa. Ge dem en uppgift, säg inget, och skriv ner var de fastnar.",
      "Klistra in säkerhetsprompten nedan i ditt AI-verktyg och gå igenom svaret.",
      "Svara på: **Kan en tänkt användare klara den viktigaste uppgiften utan din hjälp?**",
    ],
    resources: [
      {
        title: "Tre frågor att ställa sig",
        blocks: [
          {
            type: "table",
            head: ["Fråga", "Exempel att mäta"],
            rows: [
              ["**Användarnytta:** Löser produkten ett verkligt problem?", "Lyckade uppgifter, sparad tid, användarfeedback"],
              ["**Faktisk användning:** Använder människor produkten?", "Besökare, aktiva användare, återkommande användning, nöjda användare"],
              ["**Driftkostnader:** Vad kostar det att driva produkten?", "AI-tokens, API-anrop, databas, hosting"],
            ],
          },
        ],
      },
      {
        title: "Så gör du ett användartest",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ge personen en konkret uppgift att lösa.",
              "Låt personen försöka utan att du visar vägen.",
              "Be personen tänka högt, och observera var hen fastnar.",
              "Skriv ner: Vad fungerade? Vad blev otydligt? Vad ändrar jag först?",
            ],
          },
          { type: "download", label: "Användartest – Mitt första mätmål", file: "/material/anvandartest-ai-product-builder.pdf", note: "PDF · 2 sidor · fyll i under testet" },
        ],
      },
      {
        title: "Testtips",
        by: "Karolina Meijer",
        blocks: [
          {
            type: "list",
            items: [
              "Säg att det inte är ett prov på deras förmåga. Skapa en bekväm miljö.",
              "Ge kontext (”du är inloggad på 1177”) och ett mål (”hitta din journal”).",
              "Vägled inte. Lär dig sitta tyst och observera.",
              "Ta inte orden för sanning. Det folk gör och det de säger går inte alltid ihop.",
              "Spelar du in för att transkribera? Tänk på GDPR.",
            ],
          },
        ],
      },
      {
        title: "Vad kan du mäta i ett test?",
        blocks: [
          {
            type: "table",
            head: ["Om du vill veta…", "Titta på"],
            rows: [
              ["Om användaren klarar uppgiften", "Slutför personen uppgiften själv, med hjälp eller inte alls? Var fastnar de?"],
              ["Om produkten sparar tid", "Hur lång tid tar uppgiften med prototypen jämfört med det vanliga arbetssättet? Räkna in tiden för att rätta eller göra om."],
              ["Om resultatet går att använda", "Vad kan personen använda direkt? Vad behöver de ändra, kontrollera eller ta bort?"],
              ["Om produkten används igen", "När behovet dyker upp nästa gång, väljer personen produkten? Följ upp efter testet."],
            ],
          },
        ],
      },
      {
        title: "Fem områden innan du publicerar",
        blocks: [
          {
            type: "table",
            head: ["Område", "Fråga", "För ditt bygge"],
            rows: [
              ["Data och rättigheter", "Vilken information behöver produkten, varifrån kommer den, och får vi använda den?", "Vad behöver du reda ut innan du testar med riktig data? Vad kan du testa med exempeldata?"],
              ["Kvalitet och mänsklig kontroll", "Hur vet du att produkten fungerar, och vad händer när den gör fel?", "Testa ett vanligt fall, ett otydligt fall och ett fall där ett fel får konsekvenser."],
              ["Värde och ekonomi", "Är nyttan stor nog för att motivera bygget och driften?", "Vilken nytta behöver du visa för att nästa investering av tid eller pengar ska vara värd det?"],
              ["Faktisk användning", "Vad får någon att prova produkten, och att använda den igen?", "Vilket beteende vill du se hos nästa testperson?"],
              ["Ansvar och fortsatt drift", "Vem tar hand om produkten efter kursen?", "Om någon annan tog över i morgon, vad skulle de behöva för att göra sin första ändring?"],
            ],
          },
        ],
      },
      {
        title: "Säkerhetsprompt",
        by: "Klistra in i ditt AI-verktyg",
        blocks: [
          { type: "copy", label: "Kopiera prompten", text: securityPrompt },
          { type: "download", label: "Säkerhetsprompt att testa med din produkt", file: "/material/sakerhetsprompt.pdf", note: "PDF · 1 sida" },
        ],
      },
    ],
    checklist: [
      "Jag har ett konkret mätvärde",
      "Minst en person i målgruppen har testat utan min hjälp",
      "Jag har skrivit ner vad som fungerade och vad som var otydligt",
      "Jag har kört säkerhetsprompten och gått igenom resultatet",
      "Jag vet vilken data produkten hanterar och om personuppgifter ingår",
      "Jag har testat ett lyckat flöde, ett felaktigt värde och ett misslyckat flöde",
      "Jag vet vad produkten kostar att driva",
      "Jag har definierat vad ”klart” betyder för första versionen",
    ],
  },
  {
    slug: "launch-grow",
    name: "Launch & Grow",
    week: "Vecka 4",
    question: "Hur når jag användare och utvecklar produkten vidare?",
    color: "grow",
    icon: "🚀",
    intro:
      "Att bygga är bara början. När vem som helst kan bygga vad som helst behöver du också en plan för att nå ut, mäta och ta produkten vidare.",
    takeaways: [
      {
        text: "**En bra produkt + en story + community.** Om vem som helst kan bygga vad som helst behöver du också förstärka ditt bygge.",
        by: "Emelie Fågelstedt",
      },
      {
        text: "**Vad är att lyckas enligt dig?** Framgång kan se olika ut för olika personer.",
        by: "Emelie Fågelstedt",
      },
      {
        text: "**Gör bygget möjligt att ta vidare.** Verktyg, behörigheter, säkerhet och förvaltning behöver finnas med när lösningen ska användas i en organisation.",
        by: "Stefan Persson",
      },
      {
        text: "**Defining done.** Vad är det minsta du behöver för att produkten ska gå att lansera?",
        by: "Fredrik Jonsson",
      },
      {
        text: "**Lesson learned:** Don’t overcomplicate things!",
        by: "Emelie Fågelstedt",
      },
    ],
    steps: [
      "Bestäm vad din version är redo för.",
      "Välj vad du vill mäta när produkten är live.",
      "Dela bygget publikt och samla feedback.",
      "Planera ägarskap och nästa steg.",
    ],
    tasks: [
      "Fyll i **Would you ship it?** nedan.",
      "Skriv tre meningar om **varför du byggde produkten**. Det är början på din story.",
      "Bestäm **ett ställe** där du delar ditt bygge den här veckan.",
      "Be ditt AI-verktyg att **kontinuerligt testa produkten** när du gör ändringar, så att inget går sönder.",
    ],
    resources: [
      {
        title: "Growth framework",
        by: "Emelie Fågelstedt",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "**Keep it simple.** Don’t overcomplicate things. Start with your key features and make them work first.",
              "**Building in public.** Don’t get stuck trying to perfect things before you try them live. Share and get user feedback.",
              "**The founder story.** With millions of vibe-coded apps out there, the founder story can make the whole difference.",
              "**Distribution strategy.** Building is just the beginning. You need a clear growth and distribution strategy.",
            ],
          },
        ],
      },
      {
        title: "Would you ship it?",
        by: "Mall för demo",
        blocks: [
          {
            type: "list",
            items: [
              "Det här är min version redo för …",
              "Det vet jag eftersom jag har testat …",
              "Innan nästa släpp eller överlämning behöver jag …",
            ],
          },
          {
            type: "copy",
            label: "Kopiera mallen",
            text: "Det här är min version redo för …\nDet vet jag eftersom jag har testat …\nInnan nästa släpp eller överlämning behöver jag …",
          },
        ],
      },
      {
        title: "Att mäta när produkten är live",
        blocks: [
          {
            type: "table",
            head: ["Vad vill du veta?", "Vad kan du mäta?", "Exempel: Digital Fika"],
            rows: [
              ["Hittar folk dit?", "Besökare, trafikkällor, sign-ups", "Hur många besöker sidan, varifrån kommer de och hur många registrerar sig?"],
              ["Kommer de igång?", "Andel som slutför ett viktigt första steg, tid till första resultat", "Hur många får sin första matchning, och hur lång tid tar det?"],
              ["Skapar det värde?", "Användbara resultat, tidsbesparing, vad användaren gör efteråt", "Hur många matchningar leder till en fika?"],
              ["Kommer de tillbaka?", "Återkommande användning över en period som passar behovet", "Hur många väljer att matchas igen?"],
              ["Vad krävs för att leverera?", "Svarstid, fel, AI-anrop, tokens, kostnad per uppgift", "Hur ofta misslyckas en matchning och vad kostar driften per matchning?"],
            ],
          },
        ],
      },
      {
        title: "Loopen",
        blocks: [
          {
            type: "p",
            text: "**Pick a problem** → **Time-box it** → **Build it** → **Ship it** → **Build in public** → **Grow community** → **Learn and repeat**",
          },
        ],
      },
      {
        title: "Påminnelser innan du lanserar",
        blocks: [
          {
            type: "list",
            items: [
              "**Ägarskap:** Vem har tillgång till kod, konton, data och publicering?",
              "**Vardagen:** Vem fångar upp fel, svarar på frågor och håller koll på kostnader?",
              "**Dokumentation:** Vad behöver finnas nedskrivet för att någon ska kunna ta över?",
              "**Paus eller stängning:** Vad behöver hanteras om du pausar eller stänger produkten?",
              "**Uppdatera din PRD** med det du lärt dig.",
            ],
          },
        ],
      },
    ],
    checklist: [
      "Jag vet vad min version är redo för",
      "Jag har bestämt vad framgång betyder för mig",
      "Jag har valt 1–2 mätvärden att följa när produkten är live",
      "Jag har delat bygget publikt eller med fler testare",
      "Jag har en enkel story om varför jag byggde det",
      "Någon äger produkten, kostnaderna och supporten",
      "Jag har dokumenterat nog för att någon annan ska kunna ta över",
      "Jag har uppdaterat min PRD",
    ],
  },
];

export const navigate: Takeaway[] = [
  {
    text: "**Verktygen förändras.** Att formulera problem, experimentera och bedöma resultat är förmågor du tar med dig till nästa bygge.",
    by: "Emelie Fågelstedt",
  },
  {
    text: "**Keep it simple.** En enkel produktidé kan vara svårare än en svår.",
  },
  {
    text: "**Samverka.** Du måste blanda in andra. Användaren.",
    by: "Lina Bjerke",
  },
  {
    text: "Creativity is not having the best idea, but about being curious.",
    by: "Karin Gandini",
  },
];

export function getPhase(slug: string) {
  return phases.find((p) => p.slug === slug);
}

export const downloads = [
  { label: "Användartest – Mitt första mätmål", file: "/material/anvandartest-ai-product-builder.pdf", phase: "Validate" },
  { label: "Säkerhetsprompt att testa med din produkt", file: "/material/sakerhetsprompt.pdf", phase: "Validate" },
  { label: "Checklista över behov av underlag och tillgångar", file: "/material/checklista-underlag-och-tillgangar.pdf", phase: "Build" },
  { label: "Termer – AI-bygge", file: "/material/termer-ai-bygge.pdf", phase: "Build" },
];

export const COURSE_URL = "https://www.berghs.se/kurs/ai-product-builder-professional-dagtid/";

export const course = {
  lead: "AI har redan förändrat hur vi arbetar, som assistent, bollplank och i innehålls- och processarbete. AI Product Builder handlar om nästa steg: att gå från idé till produkt genom att bygga, testa och lansera egna tjänster och verktyg med AI.",
  highlights: [
    "Från idé till fungerande prototyp",
    "Vibe coding i verktyg som Lovable, Replit och Claude Code",
    "Mäta effekt och utveckla över tid",
  ],
  facts: [
    ["Format", "Fyra heldagar på Berghs + Zoom-avstämningar på fredagar"],
    ["Period", "10 november – 1 december 2026"],
    ["Kursansvarig", "Emelie Fågelstedt"],
    ["Gästföreläsare", "Tomas Seo, Anders Mellbratt, Karolina Meijer, Stefan Persson, Fredrik Jonsson"],
  ],
  weeks: [
    ["Vecka 1", "Discover & Define", "En tydlig produktidé och en första PRD"],
    ["Vecka 2", "Build", "En fungerande prototyp"],
    ["Vecka 3", "Validate", "Användarfeedback och insikter"],
    ["Vecka 4", "Launch & Grow", "Demo och en plan för nästa steg"],
  ],
};
