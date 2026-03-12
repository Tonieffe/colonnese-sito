import { config, fields, collection } from '@keystatic/core';

export default config({
  // Modalità GitHub: i contenuti verranno salvati sul tuo account Tonieffe
  storage: {
    kind: 'github',
    repository: 'Tonieffe/colonnese-sito',
  },
  
  ui: {
    brand: { name: 'Colonnese Editore' },
    navigation: {
      'Catalogo': ['libri', 'autori', 'collane'],
      'Contenuti': ['faq'],
    },
  },

  collections: {
    // --- COLLEZIONE LIBRI ---
    libri: collection({
      label: 'Libri',
      slugField: 'titolo',
      path: 'src/content/libri/*',
      format: { data: 'json' },
      schema: {
        titolo: fields.slug({ name: { label: 'Titolo del Libro' } }),
        prezzo: fields.text({ label: 'Prezzo (es. 18,00 €)' }),
        copertina: fields.image({
          label: 'Immagine Copertina',
          directory: 'public/images/libri',
          publicPath: '/images/libri/',
        }),
        // Il campo fondamentale per i tuoi redirect
        linkECommerce: fields.url({
          label: 'Link Acquisto (Sito Esterno)',
          description: 'Inserisci la URL della scheda prodotto sull’e-commerce originale'
        }),
        autore: fields.relationship({
          label: 'Autore',
          collection: 'autori',
        }),
        collana: fields.relationship({
          label: 'Collana',
          collection: 'collane',
        }),
        sinossi: fields.document({
          label: 'Sinossi / Descrizione',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),

    // --- COLLEZIONE AUTORI ---
    autori: collection({
      label: 'Autori',
      slugField: 'nome',
      path: 'src/content/autori/*',
      format: { data: 'json' },
      schema: {
        nome: fields.slug({ name: { label: 'Nome e Cognome' } }),
        foto: fields.image({
          label: 'Foto Autore',
          directory: 'public/images/autori',
          publicPath: '/images/autori/',
        }),
        bio: fields.document({ label: 'Biografia', formatting: true }),
      },
    }),

    // --- COLLEZIONE COLLANE ---
    collane: collection({
      label: 'Collane',
      slugField: 'nome',
      path: 'src/content/collane/*',
      format: { data: 'json' },
      schema: {
        nome: fields.slug({ name: { label: 'Nome Collana' } }),
        descrizione: fields.text({ label: 'Breve descrizione', multiline: true }),
      },
    }),

    // --- COLLEZIONE FAQ ---
    faq: collection({
      label: 'FAQ',
      slugField: 'domanda',
      path: 'src/content/faq/*',
      format: { data: 'json' },
      schema: {
        domanda: fields.slug({ name: { label: 'Domanda' } }),
        risposta: fields.document({ label: 'Risposta', formatting: true }),
      },
    }),
  },
});