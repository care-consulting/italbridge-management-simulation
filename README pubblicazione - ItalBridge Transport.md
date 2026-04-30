# Pubblicazione | ItalBridge Transport Simulation

## File pronti

- `Pacchetto pubblicazione - ItalBridge Transport.zip`
- `benvenuto.html`
- `index.html`
- `game.html`
- `settings.html`
- `epilogo.html`
- `styles.css`
- `script.js`
- immagini collegate

## Entrata consigliata

Per l’uso reale, il link da aprire per primo è:

- `index.html`

Da lì puoi poi passare a:

- `settings.html` per il setup riservato dei mandati
- `game.html` per il game

## Modalità di pubblicazione consigliata

Il progetto è un sito statico puro. La soluzione più semplice è:

1. usare un hosting statico
2. caricare il contenuto dello zip
3. pubblicare senza build

Va bene, per esempio:

- Netlify
- Vercel in modalità static
- GitHub Pages

## Nota importante

La pagina `settings.html` salva i mandati in `localStorage`, quindi:

- il setup va fatto dallo stesso browser e dallo stesso dispositivo da cui poi verrà aperto il game
- se cambi browser o macchina, i mandati non vengono portati con sé

## Flusso consigliato in aula

1. Apri `settings.html`
2. Imposta e salva i mandati
3. Apri `index.html` sullo schermo condiviso
4. Quando sei pronto, entra in `game.html`
5. A fine percorso usa debrief ed epilogo
