# AI Product Builder – kurssida

Lösenordsskyddad sida för deltagarna i AI Product Builder (Berghs). Samlar modellen
Discover → Define → Build → Validate → Launch & Grow med take-aways, steg, uppgifter,
resurser och checklistor för varje fas.

## Ändra innehåll
Allt innehåll finns i [`lib/content.ts`](lib/content.ts). `**fetstil**` fungerar i alla texter.

## Lösenord
Sidan skyddas av ett gemensamt lösenord som sätts i miljövariabeln `SITE_PASSWORD`.
Utan variabeln går det inte att logga in.

## Publicera på Vercel
1. Importera repot på vercel.com (Add New → Project).
2. Lägg till miljövariabeln `SITE_PASSWORD` under Environment Variables.
3. Klicka Deploy.

Byter du lösenord behöver alla logga in igen.

## Köra lokalt
```
npm install
SITE_PASSWORD=test npm run dev
```
