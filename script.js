const GAME_DATA = {
  scenarioIntro: {
    title: "ItalBridge Transport | Operatore integrato di trasporti e logistica sotto pressione",
    internalSignals: [
      "ItalBridge Transport opera su spedizioni, trasporto e logistica integrata per clienti industriali e commerciali",
      "Ricavi iniziali: 123 M€",
      "EBITDA % iniziale: 3,0% | Cash Flow operativo: 4,3 M€ | PFN: 27,0 M€",
      "DSO: 90 giorni | Qualità del Servizio: 92% | Tempo Strategico disponibile: 100/100",
      "La capacità operativa è vicina al limite: saturazione al 91% e piccoli scostamenti si riflettono rapidamente sul servizio",
    ],
    marketSignals: [
      "Il mercato resta competitivo, con prezzi tesi, costi esterni instabili e clienti che chiedono flessibilità",
      "Concentrazione clienti: 35% del business su pochi account rilevanti",
      "Fragilità operativa iniziale: 68/100, segnale di una struttura già tesa e più esposta a eccezioni, urgenze e perdita di controllo",
      "Il game simula un anno di decisioni in 3 round: ogni squadra deve trovare un equilibrio credibile tra crescita, cassa, servizio, tempo strategico e tenuta organizzativa",
    ],
  },
  teams: [
    { id: "team-a", name: "Squadra A", note: "Osserva il profilo economico-finanziario e la tenuta della cassa." },
    { id: "team-b", name: "Squadra B", note: "Osserva la forza commerciale dei clienti principali e le richieste del mercato." },
    { id: "team-c", name: "Squadra C", note: "Osserva la rete operativa, la capacità residua e il livello di servizio." },
    { id: "team-d", name: "Squadra D", note: "Osserva il bilanciamento tra priorità del business e pressioni di governance." },
  ],
  objectives: [
    {
      id: "margin",
      name: "Difendere la marginalità",
      shortLabel: "Marginalità",
      description: "Proteggere l'EBITDA % anche a costo di rinunciare a parte della crescita.",
    },
    {
      id: "cash",
      name: "Proteggere la cassa",
      shortLabel: "Cassa",
      description: "Migliorare la tenuta finanziaria, riducendo assorbimento di cassa e tensione sugli incassi.",
    },
    {
      id: "growth",
      name: "Sostenere la crescita",
      shortLabel: "Crescita",
      description: "Difendere lo sviluppo dei ricavi senza perdere il controllo complessivo del business.",
    },
    {
      id: "service",
      name: "Mettere in sicurezza servizio e struttura",
      shortLabel: "Servizio",
      description: "Ridurre la fragilità operativa, proteggendo qualità del servizio e sostenibilità organizzativa.",
    },
  ],
  visibleKpis: [
    { key: "revenue", label: "Ricavi", suffix: " M€", decimals: 0, positiveIsGood: true },
    { key: "ebitdaMargin", label: "EBITDA %", suffix: "%", decimals: 1, positiveIsGood: true },
    { key: "cashFlow", label: "Cash Flow", suffix: " M€", decimals: 1, positiveIsGood: true },
    { key: "serviceLevel", label: "Qualità del Servizio", suffix: "%", decimals: 0, positiveIsGood: true },
    { key: "strategicTime", label: "Tempo Strategico", suffix: " / 100", decimals: 0, positiveIsGood: true },
  ],
  initialVisibleState: {
    revenue: 123.0,
    ebitdaMargin: 3.0,
    cashFlow: 4.3,
    serviceLevel: 92,
    strategicTime: 100,
    dso: 90,
    pfn: 27.0,
    clientConcentration: 35,
    capacity: 91,
    fragilityIndex: 68,
  },
  initialHiddenState: {
    managementCohesion: 60,
    ownershipAlignment: 60,
    organizationalTension: 58,
    managerialPressure: 52,
    foresight: 55,
    negotiation: 55,
  },
  rounds: [
    {
      id: 1,
      label: "Round 1",
      strategyTitle: "Scelta strategica del round",
      involvementContext:
        "Dopo la proposta del cliente e l'escalation sul servizio, resta da capire se chiudere subito nel nucleo ristretto oppure sentire anche Operations, Commerciale e Finanza prima di confermare la linea.",
      involvementQuestion:
        "Prima di confermare la risposta al cliente, volete coinvolgere anche Operations, Commerciale e Finanza?",
      strategyEvent:
        "Un cliente chiave propone di aumentare i volumi annuali del 12%, ma senza riconoscere un adeguamento economico e chiedendo più flessibilità operativa.",
      strategyOptions: [
        {
          id: "r1-strategy-1",
          label: "Accettare subito l'espansione per difendere la relazione e consolidare i volumi.",
          chip: "Crescita difensiva",
          description: "La squadra accetta la richiesta del cliente con l'obiettivo di non perdere ricavi e visibilità commerciale.",
          impact: "Spinge i ricavi, ma aumenta tensione su servizio, cassa e dipendenza da pochi clienti.",
          cluster: "growth_defensive",
          deltas: { revenue: 8, ebitdaMargin: -0.3, cashFlow: -0.5, serviceLevel: -2, strategicTime: -5, dso: 3, clientConcentration: 4, capacity: 3, fragilityIndex: 4 },
          shadow: { organizationalTension: 5, managerialPressure: 4, negotiation: -4, foresight: -3 },
        },
        {
          id: "r1-strategy-2",
          label: "Accettare l'espansione solo dopo aver ridefinito condizioni economiche e limiti di servizio.",
          chip: "Selettività negoziata",
          description: "La squadra prova a tenere il cliente, ma solo con condizioni sostenibili e confini operativi più chiari.",
          impact: "Bilancia crescita e sostenibilità, ma richiede qualità negoziale ed esecuzione coerente.",
          cluster: "selective_negotiation",
          deltas: { revenue: 4, ebitdaMargin: 0.2, cashFlow: 0.1, serviceLevel: 0, strategicTime: -4, dso: 0, clientConcentration: 1, capacity: 1, fragilityIndex: -1 },
          shadow: { managementCohesion: 2, ownershipAlignment: 1, organizationalTension: 1, negotiation: 4, foresight: 3 },
        },
        {
          id: "r1-strategy-3",
          label: "Non assorbire nuova crescita su questo cliente e riequilibrare il portafoglio.",
          chip: "Disciplina di portafoglio",
          description: "La squadra rinuncia alla crescita su un singolo cliente e prova a riequilibrare il mix commerciale.",
          impact: "Protegge marginalità e struttura, ma può aprire tensioni con il mercato e con la proprietà.",
          cluster: "portfolio_discipline",
          deltas: { revenue: -3, ebitdaMargin: 0.5, cashFlow: 0.4, serviceLevel: 1, strategicTime: -3, dso: -2, clientConcentration: -3, capacity: -2, fragilityIndex: -3 },
          shadow: { ownershipAlignment: -3, managementCohesion: 1, foresight: 4, negotiation: 1 },
        },
      ],
      operationalTitle: "Gestione operativa",
      operationalEvent:
        "Nella stessa settimana, un cliente strategico apre un'escalation per ritardi e chiede un intervento immediato del management.",
      operationalOptions: [
        {
          id: "r1-op-1",
          label: "Il direttore interviene direttamente sul cliente e segue personalmente la chiusura del problema.",
          chip: "Micro-management",
          description: "La squadra sceglie un presidio diretto e ravvicinato della criticità.",
          impact: "Riduce il rischio di escalation nel brevissimo, ma consuma molto tempo strategico.",
          cluster: "micro_management",
          deltas: { serviceLevel: 1, strategicTime: -16, cashFlow: -0.1, fragilityIndex: 2 },
          shadow: { managerialPressure: 8, organizationalTension: 3, managementCohesion: -2, foresight: -2 },
        },
        {
          id: "r1-op-2",
          label: "Si chiede a Operations e Commerciale un piano congiunto entro fine giornata, con aggiornamento finale al management.",
          chip: "Delega strutturata",
          description: "La squadra chiede un piano con responsabilità chiare e si riserva un aggiornamento finale, senza entrare nella gestione di dettaglio.",
          impact: "Preserva più tempo strategico e migliora l'allineamento tra funzioni.",
          cluster: "structured_delegation",
          deltas: { serviceLevel: 1, strategicTime: -7, fragilityIndex: -1 },
          shadow: { managementCohesion: 3, managerialPressure: -1, organizationalTension: -1, foresight: 1 },
        },
        {
          id: "r1-op-3",
          label: "Si rinvia l'intervento diretto al giorno successivo per chiudere prima la decisione sul portafoglio clienti.",
          chip: "Filtro strategico",
          description: "La squadra protegge il focus, ma rimanda la gestione della criticità.",
          impact: "Difende il tempo, ma può peggiorare il servizio e la relazione nel breve.",
          cluster: "strategic_filter",
          deltas: { serviceLevel: -2, strategicTime: 3, clientConcentration: 1, fragilityIndex: 2 },
          shadow: { ownershipAlignment: -1, foresight: 2, negotiation: -1 },
        },
      ],
      extraordinaryEvent: {
        type: "ad",
        title: "Intervento AD",
        description: "L'AD chiede esplicitamente di non perdere il cliente bandiera e di dare un segnale rapido al mercato.",
        options: [
          {
            id: "r1-extra-1",
            label: "Accogliere subito l'indicazione dell'AD e confermare massima priorità al cliente.",
            chip: "Allineamento passivo",
            description: "La squadra segue l'indicazione senza ridefinire perimetro economico e operativo.",
            impact: "Riduce il conflitto con la proprietà, ma aumenta l'esposizione del business.",
            cluster: "passive_alignment",
            deltas: { revenue: 2, ebitdaMargin: -0.2, cashFlow: -0.2, strategicTime: -6, serviceLevel: -1, clientConcentration: 2 },
            shadow: { ownershipAlignment: 4, organizationalTension: 2, negotiation: -3, foresight: -2 },
          },
          {
            id: "r1-extra-2",
            label: "Recepire l'indicazione, ma riportare la scelta entro vincoli economici e operativi chiari.",
            chip: "Mediazione manageriale",
            description: "La squadra assorbe la pressione ma prova a governarla con una risposta strutturata.",
            impact: "Richiede più negoziazione, ma migliora la tenuta complessiva della decisione.",
            cluster: "managerial_mediation",
            deltas: { strategicTime: -4, ebitdaMargin: 0.1, cashFlow: 0.1 },
            shadow: { ownershipAlignment: 2, managementCohesion: 1, negotiation: 3, foresight: 2 },
          },
          {
            id: "r1-extra-3",
            label: "Argomentare che, senza correzioni di perimetro, la richiesta aumenta il rischio per margine e servizio.",
            chip: "Difesa della linea",
            description: "La squadra difende apertamente la sostenibilità della propria scelta.",
            impact: "Protegge la logica economica, ma può aumentare la tensione con la proprietà.",
            cluster: "line_defense",
            deltas: { ebitdaMargin: 0.2, cashFlow: 0.2, serviceLevel: 1, strategicTime: -6 },
            shadow: { ownershipAlignment: -4, managementCohesion: 1, negotiation: 2, foresight: 3 },
          },
        ],
      },
    },
    {
      id: 2,
      label: "Round 2",
      strategyTitle: "Scelta strategica del round",
      involvementContext:
        "Tra costi in aumento e rete sotto pressione, la squadra deve decidere se rivedere la scelta con un confronto più ampio oppure chiudere rapidamente nel gruppo ristretto.",
      involvementQuestion:
        "Prima di ridefinire clienti, costi e perimetro operativo, volete aprire il confronto anche ad altre funzioni?",
      strategyEvent:
        "L'aumento dei costi di rete e trasporto sta comprimendo ulteriormente il margine su più clienti.",
      strategyOptions: [
        {
          id: "r2-strategy-1",
          label: "Rivedere i listini e chiedere un adeguamento economico ai clienti più esposti.",
          chip: "Trasferimento della pressione",
          description: "La squadra prova a recuperare margine spostando parte della tensione sul mercato.",
          impact: "Aiuta la marginalità, ma può creare attrito commerciale e perdita di volume.",
          cluster: "pressure_transfer",
          deltas: { revenue: -2, ebitdaMargin: 0.5, cashFlow: 0.3, serviceLevel: 0, strategicTime: -4, dso: -1 },
          shadow: { negotiation: 3, ownershipAlignment: -1, foresight: 1 },
        },
        {
          id: "r2-strategy-2",
          label: "Assorbire l'aumento dei costi per non aprire tensioni commerciali nel breve.",
          chip: "Difesa della continuità",
          description: "La squadra protegge relazione e volumi, rimandando una parte della correzione.",
          impact: "Difende la continuità commerciale, ma peggiora la tenuta economica.",
          cluster: "continuity_defense",
          deltas: { revenue: 1, ebitdaMargin: -0.4, cashFlow: -0.3, serviceLevel: 0, strategicTime: -3, fragilityIndex: 2 },
          shadow: { ownershipAlignment: 1, negotiation: -2, foresight: -2 },
        },
        {
          id: "r2-strategy-3",
          label: "Rivedere mix clienti, priorità operative e perimetro di servizio per recuperare tenuta.",
          chip: "Riequilibrio strutturale",
          description: "La squadra agisce su più leve invece di scaricare tutto sul prezzo o assorbire passivamente il colpo.",
          impact: "Richiede maggiore coerenza interna, ma migliora la robustezza del modello.",
          cluster: "structural_rebalance",
          deltas: { revenue: -1, ebitdaMargin: 0.4, cashFlow: 0.4, serviceLevel: 1, strategicTime: -5, capacity: -2, fragilityIndex: -3 },
          shadow: { managementCohesion: 2, foresight: 4, negotiation: 1 },
        },
      ],
      operationalTitle: "Gestione operativa",
      operationalEvent:
        "Una parte della rete segnala saturazione crescente e aumento delle eccezioni operative.",
      operationalOptions: [
        {
          id: "r2-op-1",
          label: "Il management apre un presidio diretto quotidiano fino a stabilizzazione.",
          chip: "Presidio diretto",
          description: "La squadra entra nel dettaglio della gestione per contenere subito il problema.",
          impact: "Riduce il rischio immediato, ma consuma attenzione e aumenta dipendenza dal vertice.",
          cluster: "direct_control",
          deltas: { serviceLevel: 1, strategicTime: -13, fragilityIndex: 1 },
          shadow: { managerialPressure: 7, organizationalTension: 2, managementCohesion: -1 },
        },
        {
          id: "r2-op-2",
          label: "Si crea una task force rapida con responsabilita chiare e reporting sintetico.",
          chip: "Coordinamento rapido",
          description: "La squadra gestisce la criticità con un presidio interfunzionale ma non centralizzato.",
          impact: "Contiene il problema salvaguardando maggiormente la qualità del presidio manageriale.",
          cluster: "rapid_coordination",
          deltas: { serviceLevel: 1, strategicTime: -6, fragilityIndex: -2 },
          shadow: { managementCohesion: 3, organizationalTension: -2, managerialPressure: -1 },
        },
        {
          id: "r2-op-3",
          label: "Si limita l'intervento diretto del management e si fissano solo soglie di escalation.",
          chip: "Filtro operativo",
          description: "La squadra difende il focus strategico e interviene solo in caso di peggioramento.",
          impact: "Protegge il tempo, ma può lasciare più esposta l'operatività.",
          cluster: "operational_filter",
          deltas: { serviceLevel: -1, strategicTime: 2, fragilityIndex: 2 },
          shadow: { foresight: 2, managerialPressure: -1, ownershipAlignment: -1 },
        },
      ],
      extraordinaryEvent: {
        type: "external",
        title: "Evento esterno",
        description: "Un forte aumento del costo carburante ed energia impatta la rete in modo immediato.",
        options: [
          {
            id: "r2-extra-1",
            label: "Assorbire l'impatto nel breve per non toccare clienti e servizio.",
            chip: "Assorbimento passivo",
            description: "La squadra sceglie di proteggere il fronte commerciale assorbendo l'urto.",
            impact: "Riduce frizione esterna, ma aumenta pressione su marginalità e cassa.",
            cluster: "passive_absorption",
            deltas: { ebitdaMargin: -0.5, cashFlow: -0.5, strategicTime: -4 },
            shadow: { ownershipAlignment: 1, foresight: -2, negotiation: -2 },
          },
          {
            id: "r2-extra-2",
            label: "Scaricare rapidamente una parte del costo su clienti e offerte in rinnovo.",
            chip: "Reazione commerciale",
            description: "La squadra reagisce spostando subito parte della pressione sul mercato.",
            impact: "Aiuta la tenuta economica, ma richiede forza negoziale e può erodere ricavi.",
            cluster: "commercial_reaction",
            deltas: { revenue: -1, ebitdaMargin: 0.3, cashFlow: 0.2, strategicTime: -4 },
            shadow: { negotiation: 4, ownershipAlignment: -1, foresight: 1 },
          },
          {
            id: "r2-extra-3",
            label: "Ridefinire priorità operative e commerciali per ridurre esposizione e complessità.",
            chip: "Adattamento selettivo",
            description: "La squadra ridisegna il perimetro per contenere impatto e fragilità.",
            impact: "Riduce il danno sistemico, ma richiede maggiore disciplina organizzativa.",
            cluster: "selective_adaptation",
            deltas: { revenue: -2, ebitdaMargin: 0.2, cashFlow: 0.4, serviceLevel: 1, strategicTime: -5, fragilityIndex: -2 },
            shadow: { managementCohesion: 2, foresight: 4, negotiation: 1 },
          },
        ],
      },
    },
    {
      id: 3,
      label: "Round 3",
      strategyTitle: "Scelta strategica del round",
      involvementContext:
        "A fine anno la decisione tocca insieme clienti, margini, servizio e tenuta della struttura: il team può chiuderla rapidamente oppure allargare il confronto prima dell'ultima scelta.",
      involvementQuestion:
        "Prima di chiudere l'anno, volete coinvolgere un perimetro manageriale più ampio sulla decisione finale?",
      strategyEvent:
        "Serve decidere come chiudere l'anno su clienti, struttura e priorità economiche.",
      strategyOptions: [
        {
          id: "r3-strategy-1",
          label: "Difendere il risultato economico di fine anno, anche con scelte commerciali più dure.",
          chip: "Chiusura economica",
          description: "La squadra concentra gli sforzi sulla tenuta di margine e cassa.",
          impact: "Rafforza il profilo economico, ma può creare attriti con clienti e proprietà.",
          cluster: "economic_close",
          deltas: { revenue: -2, ebitdaMargin: 0.5, cashFlow: 0.4, serviceLevel: -1, strategicTime: -4 },
          shadow: { ownershipAlignment: -1, negotiation: 3, foresight: 1 },
        },
        {
          id: "r3-strategy-2",
          label: "Proteggere continuità e clienti chiave, rinviando parte delle correzioni strutturali.",
          chip: "Continuita relazionale",
          description: "La squadra difende ricavi e relazioni anche a costo di lasciare aperte tensioni.",
          impact: "Preserva continuità e volumi, ma riduce la forza della chiusura economica.",
          cluster: "relational_continuity",
          deltas: { revenue: 2, ebitdaMargin: -0.3, cashFlow: -0.2, serviceLevel: 0, strategicTime: -3, clientConcentration: 2 },
          shadow: { ownershipAlignment: 2, foresight: -2, negotiation: -1 },
        },
        {
          id: "r3-strategy-3",
          label: "Mettere in sicurezza struttura e servizio, anche sacrificando una parte del volume di fine anno.",
          chip: "Messa in sicurezza",
          description: "La squadra sceglie di chiudere l'anno costruendo più robustezza per il seguito.",
          impact: "Riduce il rischio sistemico, ma può penalizzare la chiusura commerciale.",
          cluster: "stabilization_close",
          deltas: { revenue: -3, ebitdaMargin: 0.3, cashFlow: 0.2, serviceLevel: 2, strategicTime: -4, fragilityIndex: -4 },
          shadow: { managementCohesion: 2, foresight: 5, negotiation: 1 },
        },
      ],
      operationalTitle: "Gestione operativa",
      operationalEvent:
        "Negli ultimi mesi dell'anno aumentano urgenze, richieste trasversali ed eccezioni operative.",
      operationalOptions: [
        {
          id: "r3-op-1",
          label: "Centralizzare le decisioni operative chiave sul management per chiudere l'anno senza sorprese.",
          chip: "Centralizzazione",
          description: "La squadra accentra il presidio per controllare la chiusura del periodo.",
          impact: "Aumenta il controllo, ma spinge forte la pressione manageriale.",
          cluster: "centralization",
          deltas: { serviceLevel: 1, strategicTime: -14, fragilityIndex: 1 },
          shadow: { managerialPressure: 9, managementCohesion: -1, organizationalTension: 2 },
        },
        {
          id: "r3-op-2",
          label: "Distribuire responsabilita con check-point rapidi e presidio leggero.",
          chip: "Coordinamento distribuito",
          description: "La squadra prova a chiudere l'anno con un presidio meno invasivo e più diffuso.",
          impact: "Aiuta la tenuta del team e mantiene una buona qualità di esecuzione.",
          cluster: "distributed_coordination",
          deltas: { serviceLevel: 1, strategicTime: -7, fragilityIndex: -1 },
          shadow: { managementCohesion: 3, managerialPressure: -2, organizationalTension: -1 },
        },
        {
          id: "r3-op-3",
          label: "Filtrare le urgenze e intervenire solo sui casi che minacciano davvero obiettivo e KPI.",
          chip: "Filtro strategico",
          description: "La squadra seleziona gli interventi, evitando di inseguire ogni eccezione.",
          impact: "Protegge il tempo, ma richiede disciplina e può lasciare esposti alcuni fronti.",
          cluster: "final_filter",
          deltas: { serviceLevel: -1, strategicTime: 2, fragilityIndex: 1 },
          shadow: { foresight: 3, negotiation: 1, ownershipAlignment: -1 },
        },
      ],
      extraordinaryEvents: [
        {
          type: "ad",
          title: "Intervento AD",
          description: "L'AD chiede di chiudere l'anno senza dare segnali di debolezza su un cliente simbolico e vuole una risposta immediata.",
          options: [
            {
              id: "r3-ad-1",
              label: "Allinearsi subito alla richiesta e proteggere il cliente a ogni costo.",
              chip: "Allineamento passivo",
              description: "La squadra segue l'indicazione del vertice anche a costo di sacrificare equilibrio economico o operativo.",
              impact: "Migliora il rapporto con la proprietà, ma può aumentare il prezzo pagato dal business.",
              cluster: "passive_alignment",
              deltas: { revenue: 1, ebitdaMargin: -0.2, cashFlow: -0.2, serviceLevel: -1, strategicTime: -5, clientConcentration: 1 },
              shadow: { ownershipAlignment: 4, organizationalTension: 2, negotiation: -2, foresight: -2 },
            },
            {
              id: "r3-ad-2",
              label: "Confermare l'attenzione al cliente, ma entro condizioni sostenibili.",
              chip: "Mediazione manageriale",
              description: "La squadra assorbe la pressione e prova a governarla senza rompere la coerenza della linea.",
              impact: "Richiede più lavoro manageriale, ma migliora la qualità del compromesso.",
              cluster: "managerial_mediation",
              deltas: { strategicTime: -4, ebitdaMargin: 0.1, cashFlow: 0.1 },
              shadow: { ownershipAlignment: 2, negotiation: 3, foresight: 2 },
            },
            {
              id: "r3-ad-3",
              label: "Argomentare che difendere il cliente senza correttivi compromette l'obiettivo annuale.",
              chip: "Difesa della linea",
              description: "La squadra difende la priorità scelta, anche aumentando la tensione politica.",
              impact: "Migliora la coerenza economica e strategica, ma può irrigidire il rapporto con la proprietà.",
              cluster: "line_defense",
              deltas: { ebitdaMargin: 0.2, cashFlow: 0.2, serviceLevel: 1, strategicTime: -5 },
              shadow: { ownershipAlignment: -4, negotiation: 2, foresight: 3 },
            },
          ],
        },
        {
          type: "external",
          title: "Evento esterno",
          description: "Uno sciopero operativo improvviso mette sotto pressione capacità e servizio negli ultimi giorni del periodo.",
          options: [
            {
              id: "r3-ext-1",
              label: "Difendere il servizio sui clienti principali, anche aumentando eccezioni e costo operativo.",
              chip: "Difesa reattiva",
              description: "La squadra protegge i clienti chiave a costo di maggiore complessità e pressione interna.",
              impact: "Aiuta il servizio nel brevissimo, ma aumenta eccezioni e carico organizzativo.",
              cluster: "reactive_defense",
              deltas: { serviceLevel: 1, cashFlow: -0.2, strategicTime: -8, fragilityIndex: 2 },
              shadow: { organizationalTension: 4, managerialPressure: 3, foresight: -1 },
            },
            {
              id: "r3-ext-2",
              label: "Ridurre selettivamente il perimetro di servizio per proteggere la tenuta complessiva.",
              chip: "Selettivita operativa",
              description: "La squadra sacrifica una parte del perimetro per evitare un peggioramento più ampio.",
              impact: "Protegge la tenuta del sistema, ma può creare frizione esterna e perdita di volume.",
              cluster: "operational_selectivity",
              deltas: { revenue: -1, serviceLevel: 0, cashFlow: 0.1, strategicTime: -5, fragilityIndex: -1 },
              shadow: { negotiation: 2, foresight: 3, ownershipAlignment: -1 },
            },
            {
              id: "r3-ext-3",
              label: "Ridefinire subito priorità e comunicazione ai clienti per contenere impatto e disallineamenti.",
              chip: "Contenimento coordinato",
              description: "La squadra prova a gestire l'urto con chiarezza di priorità e allineamento esterno.",
              impact: "Richiede coordinamento e negoziazione, ma riduce il danno sistemico.",
              cluster: "coordinated_containment",
              deltas: { serviceLevel: 1, strategicTime: -6, fragilityIndex: -2 },
              shadow: { managementCohesion: 2, negotiation: 3, foresight: 3 },
            },
          ],
        },
      ],
    },
  ],
};

const STATE_LIMITS = {
  revenue: [100, 140],
  ebitdaMargin: [1.8, 6.0],
  cashFlow: [2.5, 7.0],
  serviceLevel: [84, 97],
  strategicTime: [0, 100],
  dso: [70, 110],
  clientConcentration: [20, 45],
  capacity: [78, 98],
  fragilityIndex: [35, 90],
  managementCohesion: [25, 90],
  ownershipAlignment: [20, 90],
  organizationalTension: [20, 90],
  managerialPressure: [20, 95],
  foresight: [20, 90],
  negotiation: [20, 90],
};

const DEFAULT_TEAM_STATE = {
  objectiveId: null,
  currentRound: 1,
  completedRounds: [],
  roundHistory: [],
  pendingEffects: [],
  visible: structuredClone(GAME_DATA.initialVisibleState),
  hidden: {
    managementCohesion: GAME_DATA.initialHiddenState.managementCohesion,
    ownershipAlignment: GAME_DATA.initialHiddenState.ownershipAlignment,
    organizationalTension: GAME_DATA.initialHiddenState.organizationalTension,
    managerialPressure: GAME_DATA.initialHiddenState.managerialPressure,
    foresight: GAME_DATA.initialHiddenState.foresight,
    negotiation: GAME_DATA.initialHiddenState.negotiation,
  },
  lastOutcome: null,
  status: "In attesa obiettivo",
};

const appState = {
  activeTeamId: GAME_DATA.teams[0].id,
  debriefTeamId: GAME_DATA.teams[0].id,
  debriefStep: 1,
  objectivesLocked: false,
  viewedContractTeams: [],
  selections: {},
  teams: {},
  overlay: null,
  view: "game",
};

const teamSelector = document.getElementById("team-selector");
const teamName = document.getElementById("team-name");
const teamNote = document.getElementById("team-note");
const teamObjectiveTitle = document.getElementById("team-objective-title");
const teamObjectiveCopy = document.getElementById("team-objective-copy");
const teamRoundTitle = document.getElementById("team-round-title");
const teamRoundCopy = document.getElementById("team-round-copy");
const kpiGrid = document.getElementById("kpi-grid");
const strategyContainer = document.getElementById("strategy-options");
const noiseContainer = document.getElementById("noise-options");
const scenarioText = document.getElementById("scenario-text");
const directImpact = document.getElementById("direct-impact");
const emergingRisk = document.getElementById("emerging-risk");
const timeLeft = document.getElementById("time-left");
const managerialReading = document.getElementById("managerial-reading");
const comparisonBody = document.getElementById("comparison-body");
const outcomeBadges = document.getElementById("outcome-badges");
const shareInfoCheckbox = document.getElementById("share-info");
const shareModeOff = document.getElementById("share-mode-off");
const shareModeOn = document.getElementById("share-mode-on");
const shareFootnote = document.getElementById("share-footnote");
const involvementKicker = document.getElementById("involvement-kicker");
const involvementCopy = document.getElementById("involvement-copy");
const involvementQuestion = document.getElementById("involvement-question");
const simulateButton = document.getElementById("simulate-button");
const resetButton = document.getElementById("reset-button");
const revealEventButton = document.getElementById("reveal-event-button");
const roundEventTitle = document.getElementById("round-event-title");
const roundEventIntro = document.getElementById("round-event-intro");
const extraEventsContainer = document.getElementById("extra-events-container");
const comparisonSummary = document.getElementById("comparison-summary");
const comparisonChoiceGrid = document.getElementById("comparison-choice-grid");
const backToTeamsButton = document.getElementById("back-to-teams-button");
const roundMainTitle = document.getElementById("round-main-title");
const strategyPanelTitle = document.getElementById("strategy-panel-title");
const operationalPanelTitle = document.getElementById("operational-panel-title");
const finalPanel = document.getElementById("final-panel");
const finalTitle = document.getElementById("final-title");
const finalTeamSelector = document.getElementById("final-team-selector");
const finalObjectiveOutcome = document.getElementById("final-objective-outcome");
const finalObjectiveReason = document.getElementById("final-objective-reason");
const finalProfile = document.getElementById("final-profile");
const finalProfileReason = document.getElementById("final-profile-reason");
const finalKpiGrid = document.getElementById("final-kpi-grid");
const finalNarrativeCopy = document.getElementById("final-narrative-copy");
const finalRobustnessCopy = document.getElementById("final-robustness-copy");
const finalDetailsToggle = document.getElementById("final-details-toggle");
const finalDetailsGrid = document.getElementById("final-details-grid");
const finalPricePaid = document.getElementById("final-price-paid");
const finalCapabilities = document.getElementById("final-capabilities");
const openDebriefButton = document.getElementById("open-debrief-button");
const workshopSummary = document.getElementById("workshop-summary");
const plenaryRound = document.getElementById("plenary-round");
const plenaryRoundCopy = document.getElementById("plenary-round-copy");
const activeTeamWorkshop = document.getElementById("active-team-workshop");
const activeTeamWorkshopCopy = document.getElementById("active-team-workshop-copy");
const roundProgressGrid = document.getElementById("round-progress-grid");
const allTeamsPanel = document.getElementById("all-teams-panel");
const allTeamsSummary = document.getElementById("all-teams-summary");
const allTeamsHighlights = document.getElementById("all-teams-highlights");
const allTeamsDebriefTable = document.getElementById("all-teams-debrief-table");
const allTeamsFinalGrid = document.getElementById("all-teams-final-grid");
const debriefTeamSelector = document.getElementById("debrief-team-selector");
const debriefEndButton = document.getElementById("debrief-end-button");
const debriefEpilogueRow = document.getElementById("debrief-epilogue-row");
const debriefPrevButton = document.getElementById("debrief-prev-button");
const debriefNextButton = document.getElementById("debrief-next-button");
const debriefStepLabel = document.getElementById("debrief-step-label");
const loadFinalDemoButton = document.getElementById("load-final-demo-button");
const loadFinalDemoAltButton = document.getElementById("load-final-demo-alt-button");
const eventActorShell = document.getElementById("event-actor-shell");
const eventActorName = document.getElementById("event-actor-name");
const eventActorCopy = document.getElementById("event-actor-copy");
const characterOverlay = document.getElementById("character-overlay");
const characterOverlayClose = document.getElementById("character-overlay-close");
const characterOverlayDismiss = document.getElementById("character-overlay-dismiss");
const characterOverlayImage = document.getElementById("character-overlay-image");
const characterOverlayKicker = document.getElementById("character-overlay-kicker");
const characterOverlayTitle = document.getElementById("character-overlay-title");
const characterOverlayCopy = document.getElementById("character-overlay-copy");
const characterOverlayOptions = document.getElementById("character-overlay-options");
const characterOverlayActions = document.getElementById("character-overlay-actions");

function initializeAppState() {
  appState.view = "game";
  appState.overlay = null;
  appState.activeTeamId = GAME_DATA.teams[0].id;
  appState.debriefTeamId = GAME_DATA.teams[0].id;
  appState.debriefStep = 1;
  const savedObjectives = readSavedObjectives();
  appState.teams = {};
  appState.selections = {};
  GAME_DATA.teams.forEach((team, index) => {
    appState.teams[team.id] = createInitialTeamState(index);
    if (savedObjectives[team.id]) {
      appState.teams[team.id].objectiveId = savedObjectives[team.id];
    }
    appState.selections[team.id] = createDefaultSelectionState(1);
  });
  appState.objectivesLocked = GAME_DATA.teams.every((team) => Boolean(appState.teams[team.id].objectiveId));
}

function createInitialTeamState(index) {
  return {
    ...structuredClone(DEFAULT_TEAM_STATE),
    objectiveId: null,
    status: "Pronta al Round 1",
  };
}

function createDefaultSelectionState(roundId) {
  const round = getRound(roundId);
  const extraordinaryCount = round.extraordinaryEvents ? round.extraordinaryEvents.length : round.extraordinaryEvent ? 1 : 0;
  return {
    strategyId: round.strategyOptions[0].id,
    operationalId: round.operationalOptions[0].id,
    sharedInfo: true,
    extraordinaryRevealed: false,
    extraordinaryIds: Array.from({ length: extraordinaryCount }, (_, index) => getExtraordinaryEvent(round, index).options[0].id),
  };
}

function createSelectionStateFromChoices(roundId, config) {
  const round = getRound(roundId);
  const extraordinaryCount = round.extraordinaryEvents ? round.extraordinaryEvents.length : round.extraordinaryEvent ? 1 : 0;
  const extraordinaryIds = Array.from({ length: extraordinaryCount }, (_, index) => config.extraordinaryIds[index]);
  return {
    strategyId: config.strategyId,
    operationalId: config.operationalId,
    sharedInfo: config.sharedInfo,
    extraordinaryRevealed: true,
    extraordinaryIds,
  };
}

function summarizeExtraordinaryEvent(round) {
  const events = round.extraordinaryEvents || (round.extraordinaryEvent ? [round.extraordinaryEvent] : []);
  if (events.length === 0) {
    return "Nessun evento straordinario in questo round.";
  }
  if (events.length === 1) {
    return `${events[0].title}: ${events[0].description}`;
  }
  return `${events.map((event) => `${event.title}: ${event.description}`).join(" ")}`;
}

function getRound(roundId) {
  return GAME_DATA.rounds.find((round) => round.id === roundId);
}

function getExtraordinaryEvent(round, index = 0) {
  if (round.extraordinaryEvents) {
    return round.extraordinaryEvents[index];
  }
  return round.extraordinaryEvent;
}

function activeTeamState() {
  return appState.teams[appState.activeTeamId];
}

function activeSelectionState() {
  return appState.selections[appState.activeTeamId];
}

function getObjectiveById(objectiveId) {
  return GAME_DATA.objectives.find((entry) => entry.id === objectiveId) || GAME_DATA.objectives[0];
}

function readSavedObjectives() {
  try {
    const raw = localStorage.getItem("itlm-objectives");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function formatValue(value, decimals, suffix) {
  return `${Number(value).toFixed(decimals)}${suffix}`;
}

function formatSignedDelta(delta, decimals = 1) {
  const sign = delta > 0 ? "+" : "";
  return `${sign}${delta.toFixed(decimals)}`;
}

function formatDelta(delta, positiveIsGood) {
  if (!delta) {
    return { text: "Stabile rispetto alla base", tone: "neutral", arrow: "•" };
  }

  const sign = delta > 0 ? "+" : "";
  const decimals = Math.abs(delta) >= 10 ? 0 : 1;
  const tone = delta > 0 ? (positiveIsGood ? "positive" : "negative") : positiveIsGood ? "negative" : "positive";
  const arrow = delta > 0 ? "↑" : "↓";
  return { text: `${sign}${delta.toFixed(decimals)}`, tone, arrow };
}

function formatDeltaMarkup(deltaState) {
  return `<strong class="comparison-delta ${deltaState.tone}">${deltaState.arrow} ${deltaState.text}</strong>`;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeCharacterOverlay() {
  if (appState.overlay?.type === "contract" && appState.overlay.teamId) {
    if (!appState.viewedContractTeams.includes(appState.overlay.teamId)) {
      appState.viewedContractTeams = [...appState.viewedContractTeams, appState.overlay.teamId];
    }
  }
  appState.overlay = null;
  renderAll();
}

function openNarratorOverlay(result, nextTeamId) {
  appState.overlay = {
    type: "narrator",
    result,
    nextTeamId,
  };
}

function openDebriefOverlay() {
  appState.overlay = {
    type: "debrief",
  };
}

function openContractOverlay() {
  appState.overlay = {
    type: "contract",
    teamId: appState.debriefTeamId,
  };
}

function openAdOverlay(event, eventIndex = 0) {
  appState.overlay = {
    type: "ad",
    teamId: appState.activeTeamId,
    roundId: activeTeamState().currentRound,
    event,
    eventIndex,
  };
}

function advanceAfterNarrator() {
  if (appState.overlay?.type !== "narrator") {
    closeCharacterOverlay();
    return;
  }

  const { nextTeamId } = appState.overlay;
  appState.activeTeamId = nextTeamId;
  appState.overlay = null;
  renderAll();
  scrollToSection("comparison-panel");
}

function openDebriefPage() {
  appState.overlay = null;
  appState.view = "debrief";
  appState.debriefStep = 1;
  renderAll();
  scrollToSection("all-teams-panel");
}

function openGamePage() {
  appState.view = "game";
  appState.overlay = null;
  renderAll();
}

function clampValue(key, value) {
  const limits = STATE_LIMITS[key];
  if (!limits) {
    return Number(value.toFixed ? value.toFixed(1) : value);
  }
  const [min, max] = limits;
  const normalized = Math.min(max, Math.max(min, value));
  return Number(normalized.toFixed(1));
}

function applyDeltas(target, deltas) {
  Object.entries(deltas || {}).forEach(([key, delta]) => {
    target[key] = clampValue(key, (target[key] ?? 0) + delta);
  });
}

function getTimeBand(timeValue) {
  if (timeValue >= 85) return "high";
  if (timeValue >= 70) return "watch";
  if (timeValue >= 40) return "fragile";
  return "critical";
}

function applyInvolvementEffects(baseState, isWide) {
  if (isWide) {
    applyDeltas(baseState, { strategicTime: -3 });
    applyDeltas(baseState, { serviceLevel: 1, cashFlow: 0.1, ebitdaMargin: 0.1 });
    return {
      managementCohesion: 4,
      managerialPressure: -1,
      foresight: 2,
      reading:
        "Il confronto è stato più lento, ma ha migliorato la qualità informativa e la robustezza della decisione.",
    };
  }

  applyDeltas(baseState, { strategicTime: 4 });
  return {
    managementCohesion: -3,
    managerialPressure: 2,
    foresight: -1,
    reading:
      "La chiusura è stata più rapida, ma con maggiore rischio di lasciare fuori elementi utili alla tenuta dei round successivi.",
  };
}

function applyTimeBandEffects(state, shadow) {
  const band = getTimeBand(state.strategicTime);
  if (band === "watch") {
    applyDeltas(state, { serviceLevel: -0.3 });
    shadow.managerialPressure += 1;
  }
  if (band === "fragile") {
    applyDeltas(state, { serviceLevel: -0.7, cashFlow: -0.1 });
    shadow.managerialPressure += 3;
    shadow.foresight -= 1;
  }
  if (band === "critical") {
    applyDeltas(state, { serviceLevel: -1.5, cashFlow: -0.2, ebitdaMargin: -0.1 });
    shadow.managerialPressure += 5;
    shadow.managementCohesion -= 1;
    shadow.foresight -= 3;
  }
  return band;
}

function buildRoundResult(teamState, selectionState) {
  const round = getRound(teamState.currentRound);
  const strategy = round.strategyOptions.find((option) => option.id === selectionState.strategyId);
  const operational = round.operationalOptions.find((option) => option.id === selectionState.operationalId);
  const extraEvents = round.extraordinaryEvents || (round.extraordinaryEvent ? [round.extraordinaryEvent] : []);
  const chosenExtraordinary = extraEvents.map((event, index) => event.options.find((option) => option.id === selectionState.extraordinaryIds[index]));

  const visible = structuredClone(teamState.visible);
  const shadow = {
    managementCohesion: teamState.hidden.managementCohesion,
    ownershipAlignment: teamState.hidden.ownershipAlignment,
    organizationalTension: teamState.hidden.organizationalTension,
    managerialPressure: teamState.hidden.managerialPressure,
    foresight: teamState.hidden.foresight,
    negotiation: teamState.hidden.negotiation,
  };

  applyDeltas(visible, strategy.deltas);
  applyDeltas(visible, operational.deltas);
  chosenExtraordinary.forEach((option) => applyDeltas(visible, option.deltas));

  [strategy, operational, ...chosenExtraordinary].forEach((option) => applyDeltas(shadow, option.shadow));

  const involvementFeedback = applyInvolvementEffects(visible, selectionState.sharedInfo);
  applyDeltas(shadow, {
    managementCohesion: involvementFeedback.managementCohesion,
    managerialPressure: involvementFeedback.managerialPressure,
    foresight: involvementFeedback.foresight,
  });

  const timeBand = applyTimeBandEffects(visible, shadow);
  Object.keys(shadow).forEach((key) => {
    shadow[key] = clampValue(key, shadow[key]);
  });

  const status = computeStatus(visible, shadow);
  return {
    roundId: round.id,
    roundLabel: round.label,
    objectiveId: teamState.objectiveId,
    strategy,
    operational,
    extraordinary: chosenExtraordinary,
    sharedInfo: selectionState.sharedInfo,
    before: structuredClone(teamState.visible),
    after: visible,
    shadowBefore: structuredClone(teamState.hidden),
    shadowAfter: shadow,
    timeBand,
    status,
    involvementReading: involvementFeedback.reading,
  };
}

function computeStatus(visible, shadow) {
  if (visible.ebitdaMargin >= 3.6 && visible.cashFlow >= 4.8 && visible.serviceLevel >= 92 && visible.strategicTime >= 70) {
    return "Solida";
  }
  if (visible.ebitdaMargin >= 2.8 && visible.cashFlow >= 3.8 && visible.serviceLevel >= 89 && shadow.organizationalTension < 72) {
    return "In equilibrio";
  }
  return "Esposta";
}

function commitRoundResult(teamId, result) {
  appState.teams[teamId] = {
    ...appState.teams[teamId],
    visible: result.after,
    hidden: result.shadowAfter,
    currentRound: Math.min(3, result.roundId + 1),
    completedRounds: [...appState.teams[teamId].completedRounds, result.roundId],
    roundHistory: [...appState.teams[teamId].roundHistory, result],
    lastOutcome: result,
    status: result.roundId === 3 ? "Gioco completato" : `Pronta al Round ${Math.min(3, result.roundId + 1)}`,
  };

  if (result.roundId < 3) {
    appState.selections[teamId] = createDefaultSelectionState(result.roundId + 1);
  }
}

function computeObjectiveSummary(teamState) {
  const objective = getObjectiveById(teamState.objectiveId);
  const visible = teamState.visible;
  const hidden = teamState.hidden;
  let score = 0;
  let penalty = 0;

  if (objective.id === "margin") {
    score += visible.ebitdaMargin >= 3.6 ? 45 : visible.ebitdaMargin >= 3.2 ? 30 : 18;
    score += visible.cashFlow >= 4.8 ? 25 : visible.cashFlow >= 4.2 ? 18 : 10;
    score += visible.serviceLevel >= 90 ? 15 : 8;
    score += visible.strategicTime >= 55 ? 15 : visible.strategicTime >= 40 ? 10 : 5;
  }
  if (objective.id === "cash") {
    score += visible.cashFlow >= 5.0 ? 45 : visible.cashFlow >= 4.4 ? 30 : 18;
    score += visible.dso <= 84 ? 25 : visible.dso <= 90 ? 18 : 10;
    score += visible.ebitdaMargin >= 3.1 ? 15 : 8;
    score += visible.strategicTime >= 55 ? 15 : visible.strategicTime >= 40 ? 10 : 5;
  }
  if (objective.id === "growth") {
    score += visible.revenue >= 128 ? 45 : visible.revenue >= 124 ? 30 : 18;
    score += visible.ebitdaMargin >= 2.8 ? 20 : 10;
    score += visible.serviceLevel >= 89 ? 20 : 10;
    score += visible.cashFlow >= 4.0 ? 15 : 7;
    if (visible.ebitdaMargin < 2.4) penalty += 8;
    if (visible.cashFlow < 3.2) penalty += 6;
    if (visible.serviceLevel < 90) penalty += 4;
  }
  if (objective.id === "service") {
    score += visible.serviceLevel >= 93 ? 35 : visible.serviceLevel >= 91 ? 25 : 15;
    score += visible.strategicTime >= 60 ? 25 : visible.strategicTime >= 45 ? 18 : 10;
    score += visible.fragilityIndex <= 60 ? 25 : visible.fragilityIndex <= 68 ? 18 : 10;
    score += visible.ebitdaMargin >= 2.8 ? 15 : 7;
  }

  if (hidden.managerialPressure >= 80) penalty += 8;
  if (hidden.organizationalTension >= 75) penalty += 6;
  if (hidden.ownershipAlignment < 40) penalty += 4;
  if (visible.strategicTime < 35) penalty += 6;

  const finalScore = Math.max(0, Math.min(100, score - penalty));

  const outcome = finalScore >= 75 ? "Raggiunto pienamente" : finalScore >= 58 ? "Raggiunto parzialmente" : "Non raggiunto";
  return { objective, score: finalScore, baseScore: score, penalty, outcome };
}

function describeBand(value, positiveThreshold, middleThreshold, labels) {
  if (value >= positiveThreshold) return labels.high;
  if (value >= middleThreshold) return labels.mid;
  return labels.low;
}

function getFinalNarrative(teamState) {
  const summary = computeObjectiveSummary(teamState);
  const { hidden } = teamState;
  let finalProfileLabel = "Coerente e robusta";
  let finalProfileReasonText = "La squadra ha mantenuto buona coerenza con l'obiettivo dichiarato senza rompere l'equilibrio generale del sistema.";

  if (summary.score < 58) {
    finalProfileLabel = "Reattiva ma fragile";
    finalProfileReasonText = "La squadra ha reagito alle pressioni del contesto, ma senza consolidare abbastanza la tenuta del percorso.";
  } else if (hidden.managerialPressure >= 75 || hidden.organizationalTension >= 72 || teamState.visible.strategicTime < 40) {
    finalProfileLabel = "Coerente ma esposta";
    finalProfileReasonText = "La squadra ha protetto la propria priorità, ma pagando un prezzo visibile su tempo, pressione organizzativa o presidio manageriale.";
  } else if (hidden.foresight >= 75 && hidden.negotiation >= 65) {
    finalProfileLabel = "Selettiva e robusta";
    finalProfileReasonText = "La squadra ha combinato coerenza con l'obiettivo, lettura prospettica e buona qualità di negoziazione.";
  }

  return {
    summary,
    finalProfile: {
      label: finalProfileLabel,
      reason: finalProfileReasonText,
    },
    pricePaid: {
      managementCohesion: {
        label: describeBand(hidden.managementCohesion, 70, 55, { high: "Tenuta", mid: "Indebolita", low: "Critica" }),
        reason:
          hidden.managementCohesion >= 70
            ? "Il confronto interno ha retto e le funzioni hanno collaborato con buona continuità."
            : hidden.managementCohesion >= 55
              ? "La collaborazione ha retto solo in parte e alcune scelte hanno ristretto troppo il perimetro informativo."
              : "Le scelte hanno aumentato il lavoro per silos e indebolito la qualità del confronto tra funzioni.",
      },
      ownershipAlignment: {
        label: describeBand(hidden.ownershipAlignment, 70, 50, { high: "Stabile", mid: "Sotto tensione", low: "Critico" }),
        reason:
          hidden.ownershipAlignment >= 70
            ? "La relazione con la proprietà è rimasta leggibile e governata."
            : hidden.ownershipAlignment >= 50
              ? "Il rapporto con la proprietà ha richiesto mediazioni continue e non sempre facili."
              : "Le scelte hanno aumentato la distanza tra priorità del management e aspettative del vertice.",
      },
      organizationalTension: {
        label: hidden.organizationalTension <= 52 ? "Contenuta" : hidden.organizationalTension <= 68 ? "Elevata" : "Molto elevata",
        reason:
          hidden.organizationalTension <= 52
            ? "La macchina ha retto con un livello gestibile di eccezioni e complessità."
            : hidden.organizationalTension <= 68
              ? "Le scelte hanno aumentato il carico organizzativo e la presenza di eccezioni operative."
              : "Il percorso ha spinto il sistema in una condizione di forte pressione e complessità diffusa.",
      },
      managerialPressure: {
        label: hidden.managerialPressure <= 52 ? "Sostenibile" : hidden.managerialPressure <= 68 ? "Alta" : "Critica",
        reason:
          hidden.managerialPressure <= 52
            ? "Il team di direzione ha mantenuto un presidio sostenibile."
            : hidden.managerialPressure <= 68
              ? "Il management ha assorbito molte urgenze e ha lavorato con pressione crescente."
              : "La chiusura dell'anno è avvenuta con un carico manageriale molto alto e poco sostenibile.",
      },
    },
    capabilities: {
      foresight: {
        label: describeBand(hidden.foresight, 70, 55, { high: "Alto", mid: "Medio", low: "Debole" }),
        reason:
          hidden.foresight >= 70
            ? "Le scelte hanno mostrato capacità di leggere i segnali deboli e prevenire effetti differiti."
            : hidden.foresight >= 55
              ? "La squadra ha anticipato alcuni effetti futuri, ma non sempre con continuità."
              : "La squadra ha privilegiato spesso il breve, lasciando emergere tardi diversi costi del percorso.",
      },
      negotiation: {
        label: hidden.negotiation >= 70 ? "Efficace" : hidden.negotiation >= 55 ? "Discontinua" : "Difensiva",
        reason:
          hidden.negotiation >= 70
            ? "La squadra ha trasformato le pressioni in condizioni più sostenibili con buona qualità negoziale."
            : hidden.negotiation >= 55
              ? "In alcune situazioni la squadra ha negoziato bene, in altre ha assorbito o irrigidito troppo la pressione."
              : "La squadra ha reagito in modo più difensivo che negoziale, concedendo o irrigidendo senza sufficiente mediazione.",
      },
    },
  };
}

function generateRoundComment(result) {
  const objective = getObjectiveById(result.objectiveId);
  const revenueDelta = Number((result.after.revenue - result.before.revenue).toFixed(1));
  const marginDelta = Number((result.after.ebitdaMargin - result.before.ebitdaMargin).toFixed(1));
  const serviceDelta = Number((result.after.serviceLevel - result.before.serviceLevel).toFixed(0));
  const timeDelta = Number((result.after.strategicTime - result.before.strategicTime).toFixed(0));
  const extraordinaryReading = result.extraordinary.map((entry) => entry.chip.toLowerCase()).join(", ");

  const comment =
    revenueDelta > 0 && marginDelta < 0
      ? `La squadra ha difeso sviluppo e relazione, ma ha accettato un prezzo economico più alto per sostenere il volume.`
      : marginDelta > 0 && revenueDelta <= 0
        ? `La squadra ha protetto meglio la tenuta economica, accettando maggiore disciplina su crescita o perimetro.`
        : `La squadra ha cercato un equilibrio tra obiettivo annuale, tenuta economica e sostenibilità operativa.`;

  const kpiReading =
    timeDelta < -10
      ? "Il cambiamento dei KPI si spiega anche con un forte assorbimento di tempo manageriale nel round."
      : marginDelta > 0 && revenueDelta <= 0
        ? "I numeri migliorano soprattutto per maggiore selettività e disciplina del perimetro."
        : revenueDelta > 0 && marginDelta < 0
          ? "I numeri riflettono una crescita sostenuta da concessioni economiche e maggiore pressione sulla struttura."
          : "I numeri mostrano un riequilibrio, senza una spinta univoca su un solo asse.";

  const risk =
    result.after.strategicTime < 50
      ? "Il rischio più visibile è il consumo eccessivo di tempo strategico, che rende più fragile la qualità della guida manageriale."
      : result.after.serviceLevel < 89
        ? "Il rischio più visibile si sta spostando sul servizio, con possibili ricadute su clienti e tenuta operativa."
        : "Il rischio principale riguarda la sostenibilità del percorso scelto se il contesto diventerà più duro nel round successivo.";

  const reading = `${comment} ${kpiReading} ${result.involvementReading} Evento straordinario gestito: ${extraordinaryReading}. L'obiettivo annuale selezionato resta "${objective.name}".`;
  const title = `Voce narrante | ${result.roundLabel}`;

  return {
    title,
    narrative: `La squadra ha scelto una linea centrata su "${result.strategy.label}". Sul piano operativo ha deciso di "${result.operational.label.toLowerCase()}". ${result.extraordinary.length ? `Di fronte all'evento straordinario ha poi scelto di "${result.extraordinary.map((entry) => entry.label.toLowerCase()).join(' e ')}".` : ""}`,
    directImpact: `Ricavi ${revenueDelta >= 0 ? "in aumento" : "in calo"}, EBITDA % ${marginDelta >= 0 ? "in miglioramento" : "sotto pressione"}, servizio ${serviceDelta >= 0 ? "più stabile" : "più esposto"}.`,
    risk,
    timeText: `${result.after.strategicTime.toFixed(0)} / 100`,
    managerialReading: reading,
    badges: [
      `Stato squadra: ${result.status}`,
      `Obiettivo: ${objective.shortLabel}`,
      `Tempo: ${result.timeBand}`,
    ],
  };
}

function updateScenarioIntro() {
  const title = document.querySelector("#scenario-intro-panel h2");
  if (title) {
    title.textContent = GAME_DATA.scenarioIntro.title;
  }

  const lists = document.querySelectorAll("#scenario-intro-panel .scenario-columns .signal-list");
  if (lists[0]) {
    lists[0].innerHTML = GAME_DATA.scenarioIntro.internalSignals.map((item) => `<li>${item}</li>`).join("");
  }
  if (lists[1]) {
    lists[1].innerHTML = GAME_DATA.scenarioIntro.marketSignals.map((item) => `<li>${item}</li>`).join("");
  }

  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.textContent =
      "I direttori entrano nella cabina di regia di ItalBridge Transport e affrontano un anno di decisioni su clienti, marginalità, cassa, servizio e pressioni del contesto. Ogni round traduce una parte di questo anno in scelte concrete e conseguenze cumulative.";
  }
}

function renderTeamSelector() {
  teamSelector.innerHTML = "";

  GAME_DATA.teams.forEach((team) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `team-button${team.id === appState.activeTeamId ? " active" : ""}`;
    button.textContent = team.name;
    button.addEventListener("click", () => {
      appState.activeTeamId = team.id;
      renderAll();
    });
    teamSelector.appendChild(button);
  });
}

function renderOptionCards(container, options, selectedId, groupName, onSelect) {
  container.innerHTML = "";
  options.forEach((option) => {
    const label = document.createElement("label");
    label.className = `option-card${option.id === selectedId ? " selected" : ""}`;
    label.innerHTML = `
      <input type="radio" name="${groupName}" value="${option.id}" ${option.id === selectedId ? "checked" : ""} />
      <div class="option-topline">
        <p class="option-title">${option.label}</p>
      </div>
      <p class="option-description">${option.description}</p>
    `;
    label.addEventListener("click", () => onSelect(option.id));
    container.appendChild(label);
  });
}

function renderKpis() {
  const state = activeTeamState();
  const base = GAME_DATA.initialVisibleState;
  kpiGrid.innerHTML = "";

  GAME_DATA.visibleKpis.forEach((kpi) => {
    const currentValue = state.visible[kpi.key];
    const delta = Number((currentValue - base[kpi.key]).toFixed(1));
    const deltaState = formatDelta(delta, kpi.positiveIsGood);
    const card = document.createElement("div");
    card.className = "kpi-card";
    card.innerHTML = `
      <p class="kpi-label">${kpi.label}</p>
      <p class="kpi-value">${formatValue(currentValue, kpi.decimals, kpi.suffix)}</p>
      <p class="kpi-delta ${deltaState.tone}">
        <span class="kpi-arrow">${deltaState.arrow}</span>
        <span class="kpi-delta-copy">${deltaState.text}</span>
      </p>
    `;
    kpiGrid.appendChild(card);
  });
}

function renderRoundOptions() {
  const state = activeTeamState();
  const selection = activeSelectionState();
  const round = getRound(state.currentRound);
  const extraordinaryEvents = round.extraordinaryEvents || (round.extraordinaryEvent ? [round.extraordinaryEvent] : []);

  roundMainTitle.textContent = `ROUND ${round.id}`;
  const strategyHeading = strategyPanelTitle;
  strategyHeading.textContent = "Scelta strategica";
  const strategyPanel = strategyContainer.parentElement;
  const existingStrategyEvent = strategyPanel.querySelector(".dynamic-round-event");
  if (existingStrategyEvent) {
    existingStrategyEvent.remove();
  }
  const strategyEvent = document.createElement("p");
  strategyEvent.className = "dynamic-round-event";
  strategyEvent.textContent = round.strategyEvent;
  strategyHeading.insertAdjacentElement("afterend", strategyEvent);
  renderOptionCards(strategyContainer, round.strategyOptions, selection.strategyId, `strategy-${round.id}`, (id) => {
    selection.strategyId = id;
    renderAll();
  });

  const operationalHeading = operationalPanelTitle;
  operationalHeading.textContent = "Scelta operativa";
  const existingOperationalEvent = noiseContainer.parentElement.querySelector(".dynamic-operational-event");
  if (existingOperationalEvent) {
    existingOperationalEvent.remove();
  }
  const operationalEvent = document.createElement("p");
  operationalEvent.className = "dynamic-round-event dynamic-operational-event";
  operationalEvent.textContent = round.operationalEvent;
  operationalHeading.insertAdjacentElement("afterend", operationalEvent);
  renderOptionCards(noiseContainer, round.operationalOptions, selection.operationalId, `operational-${round.id}`, (id) => {
    selection.operationalId = id;
    renderAll();
  });

  involvementKicker.textContent = `${round.label} | Coinvolgimento`;
  involvementCopy.textContent = round.involvementContext;
  involvementQuestion.textContent = round.involvementQuestion;
  renderExtraordinarySection(round, selection, extraordinaryEvents);
}

function renderExtraordinarySection(round, selection, extraordinaryEvents) {
  const multiple = extraordinaryEvents.length > 1;
  const adEvent = extraordinaryEvents.find((event) => event.type === "ad");
  roundEventTitle.textContent = multiple ? `${round.label} | Eventi straordinari finali` : `${round.label} | Evento straordinario`;
  roundEventIntro.textContent = selection.extraordinaryRevealed
    ? "L'evento è ora visibile. La squadra deve reagire prima di chiudere il round."
    : "L'evento straordinario non viene mostrato all'inizio. Il facilitatore lo attiva nel momento opportuno del round.";
  revealEventButton.hidden = selection.extraordinaryRevealed;
  revealEventButton.textContent = multiple ? "Attiva eventi del round" : "Attiva evento del round";
  extraEventsContainer.innerHTML = "";
  if (eventActorShell) {
    eventActorShell.hidden = !(selection.extraordinaryRevealed && adEvent);
    if (selection.extraordinaryRevealed && adEvent) {
      eventActorName.textContent = "AD";
      eventActorCopy.textContent = adEvent.description;
    }
  }

  if (!selection.extraordinaryRevealed) {
    return;
  }

  extraordinaryEvents.forEach((event, index) => {
    if (event.type === "ad") {
      const selectedOption = event.options.find((option) => option.id === selection.extraordinaryIds[index]);
      const wrapper = document.createElement("div");
      wrapper.className = "dynamic-extra-event";
      wrapper.innerHTML = `
        <div class="label-row">
          <p class="panel-label">${event.title}</p>
        </div>
        <h2>${event.description}</h2>
        <p class="comparison-copy">L'intervento dell'AD si apre in overlay. La scelta attuale è: <strong>${selectedOption?.label || "non selezionata"}</strong>.</p>
      `;
      extraEventsContainer.appendChild(wrapper);
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "dynamic-extra-event";
    wrapper.innerHTML = `
      <div class="label-row">
        <p class="panel-label">${event.title}</p>
      </div>
      <h2>${event.description}</h2>
      <div class="option-list compact extra-list" id="extra-options-${index}"></div>
    `;
    extraEventsContainer.appendChild(wrapper);
    renderOptionCards(wrapper.querySelector(".extra-list"), event.options, selection.extraordinaryIds[index], `extra-${round.id}-${index}`, (id) => {
      selection.extraordinaryIds[index] = id;
      renderAll();
    });
  });
}

function renderActiveTeamInfo() {
  const team = GAME_DATA.teams.find((entry) => entry.id === appState.activeTeamId);
  const state = activeTeamState();
  const objective = getObjectiveById(state.objectiveId);
  teamName.textContent = team.name;
  teamNote.textContent = `${team.note} Stato: ${state.status}.`;
  teamObjectiveTitle.textContent = appState.objectivesLocked ? "Mandato riservato" : "Obiettivo da impostare";
  teamObjectiveCopy.textContent = appState.objectivesLocked
    ? "L'obiettivo della squadra resta nascosto durante il game e verrà reso esplicito solo nel debrief finale."
    : "Il facilitatore deve ancora impostare il mandato di questa squadra.";
  teamRoundTitle.textContent = state.completedRounds.length === 3 ? "Percorso completato" : `${getRound(state.currentRound).label} in preparazione`;
  teamRoundCopy.textContent =
    state.completedRounds.length === 3
      ? "La squadra ha completato i tre round ed è pronta per la lettura finale del percorso."
      : `${state.completedRounds.length} round completati su 3. La simulazione prosegue dallo stato già generato.`;
  shareInfoCheckbox.checked = activeSelectionState().sharedInfo;
  updateShareModeUI(activeSelectionState().sharedInfo);
}

function updateShareModeUI(isWide) {
  shareModeOn.classList.toggle("active", isWide);
  shareModeOff.classList.toggle("active", !isWide);
  shareModeOn.setAttribute("aria-pressed", String(isWide));
  shareModeOff.setAttribute("aria-pressed", String(!isWide));
  shareFootnote.textContent = isWide
    ? "La squadra allarga il confronto alle funzioni coinvolte e accetta più tempo decisionale per chiudere una scelta più robusta."
    : "La squadra chiude nel nucleo ristretto e guadagna velocità, ma con più rischio di lasciare fuori elementi utili.";
}

function renderOutcome() {
  const state = activeTeamState();
  if (!state.lastOutcome) {
    const round = getRound(state.currentRound);
    scenarioText.textContent = `La squadra è pronta per ${round.label}. Il mandato resta riservato fino al debrief finale.`;
    directImpact.textContent = "Le variazioni KPI verranno lette dopo la simulazione del round.";
    emergingRisk.textContent = "Il rischio emergerà in base al mix di crescita, cassa, servizio, tempo strategico ed eventi straordinari.";
    timeLeft.textContent = `${state.visible.strategicTime.toFixed(0)} / 100`;
    managerialReading.textContent = "La voce narrante commenta il round in modo statico, ma il motore è già strutturato per una futura sostituzione del commento con un layer AI.";
    outcomeBadges.innerHTML = `<span>${round.label}</span><span>Stato squadra: ${state.status}</span>`;
    return;
  }

  const comment = generateRoundComment(state.lastOutcome);
  scenarioText.textContent = `${comment.narrative} La squadra ha ora chiuso formalmente il round e il sistema aggiorna il punto di partenza del turno successivo.`;
  directImpact.textContent = comment.directImpact;
  emergingRisk.textContent = comment.risk;
  timeLeft.textContent = comment.timeText;
  managerialReading.textContent = comment.managerialReading;
  const closedBanner = `<span class="round-complete-banner">${state.lastOutcome.roundLabel} chiuso per ${GAME_DATA.teams.find((team) => team.id === appState.activeTeamId).name}</span>`;
  outcomeBadges.innerHTML = closedBanner + comment.badges.map((badge) => `<span>${badge}</span>`).join("");
}

function renderCharacterOverlay() {
  if (!characterOverlay) {
    return;
  }

  if (!appState.overlay) {
    characterOverlay.hidden = true;
    characterOverlayOptions.innerHTML = "";
    characterOverlayActions.innerHTML = "";
    return;
  }

  characterOverlay.hidden = false;
  const overlayPanel = characterOverlay.querySelector(".character-overlay-panel");
  overlayPanel?.classList.remove("narrator-mode", "ad-mode");
  characterOverlayOptions.innerHTML = "";
  characterOverlayActions.innerHTML = "";

  if (appState.overlay.type === "narrator") {
    const { result } = appState.overlay;
    const comment = generateRoundComment(result);
    overlayPanel?.classList.add("narrator-mode");
    characterOverlayImage.src = "./voce-narrante-clean.png";
    characterOverlayImage.alt = "Voce narrante";
    characterOverlayKicker.textContent = "Voce narrante";
    characterOverlayTitle.textContent = `Chiusura round | ${result.roundLabel}`;
    characterOverlayCopy.textContent = comment.managerialReading;

    const actionWrap = document.createElement("div");
    actionWrap.className = "character-overlay-actions-stack";
    const continueButton = document.createElement("button");
    continueButton.type = "button";
    continueButton.className = "primary-button";
    continueButton.textContent = "Continua";
    continueButton.addEventListener("click", advanceAfterNarrator);
    const hint = document.createElement("p");
    hint.className = "overlay-hint";
    hint.textContent = "La simulazione passa alla squadra successiva e riporta il focus sul confronto del round.";
    actionWrap.appendChild(continueButton);
    characterOverlayActions.appendChild(actionWrap);
    characterOverlayActions.appendChild(hint);
    return;
  }

  if (appState.overlay.type === "debrief") {
    overlayPanel?.classList.add("narrator-mode");
    characterOverlayImage.src = "./voce-narrante-clean.png";
    characterOverlayImage.alt = "Voce narrante";
    characterOverlayKicker.textContent = "Voce narrante";
    characterOverlayTitle.textContent = "Scopriamo com'è andata?";
    characterOverlayCopy.textContent =
      "I tre round sono chiusi. Ora il gioco esce dalla logica del singolo risultato e apre una lettura più profonda: obiettivi centrati o mancati, prezzo pagato, capacità emerse e traiettorie future delle squadre.";

    const actionWrap = document.createElement("div");
    actionWrap.className = "character-overlay-actions-stack";
    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.className = "primary-button";
    openButton.textContent = "Apri debrief finale";
    openButton.addEventListener("click", openDebriefPage);
    const hint = document.createElement("p");
    hint.className = "overlay-hint";
    hint.textContent = "La pagina finale confronta le squadre non solo sui numeri, ma anche su costo pagato e robustezza per l'anno successivo.";
    actionWrap.appendChild(openButton);
    characterOverlayActions.appendChild(actionWrap);
    characterOverlayActions.appendChild(hint);
    return;
  }

  if (appState.overlay.type === "contract") {
    const team = GAME_DATA.teams.find((entry) => entry.id === appState.overlay.teamId);
    const teamState = appState.teams[appState.overlay.teamId];
    overlayPanel?.classList.add("ad-mode");
    characterOverlayImage.src = "./ad-clean.png";
    characterOverlayImage.alt = "Amministratore delegato";
    characterOverlayKicker.textContent = `AD | ${team.name}`;
    characterOverlayTitle.textContent = `Squadra ${team.name.slice(-1)}, mi avete convinto: il vostro contratto è rinnovato.`;
    const contractCopy = buildContractClosure(teamState);
    const payoff = "Per questa volta...";
    const mainCopy = contractCopy.replace(payoff, "").trim();
    characterOverlayCopy.innerHTML = `${mainCopy} <span class="overlay-contract-payoff">${payoff}</span>`;

    const actionWrap = document.createElement("div");
    actionWrap.className = "character-overlay-actions-stack";
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "primary-button";
    closeButton.textContent = "Chiudi";
    closeButton.addEventListener("click", closeCharacterOverlay);
    actionWrap.appendChild(closeButton);
    characterOverlayActions.appendChild(actionWrap);
    return;
  }

  if (appState.overlay.type === "ad") {
    const { event, eventIndex, roundId, teamId } = appState.overlay;
    const selection = appState.selections[teamId];
    overlayPanel?.classList.add("ad-mode");
    characterOverlayImage.src = "./ad-clean.png";
    characterOverlayImage.alt = "Amministratore delegato";
    characterOverlayKicker.textContent = "Intervento AD";
    characterOverlayTitle.textContent = event.title;
    characterOverlayCopy.textContent = event.description;

    renderOptionCards(
      characterOverlayOptions,
      event.options,
      selection.extraordinaryIds[eventIndex],
      `overlay-ad-${roundId}-${eventIndex}`,
      (id) => {
        selection.extraordinaryIds[eventIndex] = id;
        renderAll();
      },
    );

    const actionWrap = document.createElement("div");
    actionWrap.className = "character-overlay-actions-stack";
    const confirmButton = document.createElement("button");
    confirmButton.type = "button";
    confirmButton.className = "primary-button";
    confirmButton.textContent = "Conferma intervento AD";
    confirmButton.addEventListener("click", () => {
      closeCharacterOverlay();
    });
    const hint = document.createElement("p");
    hint.className = "overlay-hint";
    hint.textContent = "La scelta viene salvata nel round e rientra nella valutazione finale della squadra.";
    actionWrap.appendChild(confirmButton);
    characterOverlayActions.appendChild(actionWrap);
    characterOverlayActions.appendChild(hint);
  }
}

function renderComparison() {
  comparisonBody.innerHTML = "";
  comparisonChoiceGrid.innerHTML = "";
  const base = GAME_DATA.initialVisibleState;

  GAME_DATA.teams.forEach((team) => {
    const state = appState.teams[team.id];
    const objective = getObjectiveById(state.objectiveId);
    const outcome = state.lastOutcome;
    const row = document.createElement("tr");
    const timeDelta = formatDelta(Number((state.visible.strategicTime - base.strategicTime).toFixed(0)), true);
    const marginDelta = formatDelta(Number((state.visible.ebitdaMargin - base.ebitdaMargin).toFixed(1)), true);
    const cashDelta = formatDelta(Number((state.visible.cashFlow - base.cashFlow).toFixed(1)), true);
    const serviceDelta = formatDelta(Number((state.visible.serviceLevel - base.serviceLevel).toFixed(0)), true);
    const pillClass =
      state.status === "Solida"
        ? "strong"
        : state.status === "In equilibrio"
          ? "mixed"
          : state.status === "Gioco completato"
            ? "strong"
            : "pending";
    row.innerHTML = `
      <td>${team.name}</td>
      <td>${outcome ? `${outcome.strategy.label}` : `Obiettivo | ${objective.shortLabel}`}</td>
      <td><strong>${state.visible.strategicTime.toFixed(0)} / 100</strong> (${formatDeltaMarkup(timeDelta)})</td>
      <td><strong>${state.visible.ebitdaMargin.toFixed(1)}%</strong> (${formatDeltaMarkup(marginDelta)})</td>
      <td><strong>${state.visible.cashFlow.toFixed(1)} M€</strong> (${formatDeltaMarkup(cashDelta)})</td>
      <td><strong>${state.visible.serviceLevel.toFixed(0)}%</strong> (${formatDeltaMarkup(serviceDelta)})</td>
      <td><span class="status-pill ${pillClass}">${state.status}</span></td>
    `;
    comparisonBody.appendChild(row);
  });

  const evaluatedTeams = GAME_DATA.teams.filter((team) => Boolean(appState.teams[team.id].lastOutcome));
  if (evaluatedTeams.length === 0) {
    comparisonSummary.textContent = "Il confronto generale si popola man mano che le squadre chiudono i round.";
    return;
  }

  const bestMargin = [...evaluatedTeams].sort((a, b) => appState.teams[b.id].visible.ebitdaMargin - appState.teams[a.id].visible.ebitdaMargin)[0];
  const bestCash = [...evaluatedTeams].sort((a, b) => appState.teams[b.id].visible.cashFlow - appState.teams[a.id].visible.cashFlow)[0];
  const bestService = [...evaluatedTeams].sort((a, b) => appState.teams[b.id].visible.serviceLevel - appState.teams[a.id].visible.serviceLevel)[0];
  comparisonSummary.textContent = `Lettura comparativa del momento: miglior tenuta di marginalità ${bestMargin.name}, miglior tenuta di cassa ${bestCash.name}, miglior tenuta del servizio ${bestService.name}.`;
  comparisonChoiceGrid.innerHTML = evaluatedTeams
    .map((team) => {
      const state = appState.teams[team.id];
      const outcome = state.lastOutcome;
      if (!outcome) return "";
      return `
        <div class="comparison-choice-card">
          <p class="mini-label">${team.name}</p>
          <p><strong>Strategia:</strong> ${outcome.strategy.label}</p>
          <p><strong>Operativa:</strong> ${outcome.operational.label}</p>
          <p><strong>Coinvolgimento:</strong> ${outcome.sharedInfo ? "Ampio" : "Selettivo"}</p>
          <p><strong>Evento:</strong> ${outcome.extraordinary.map((entry) => entry.label).join(" / ")}</p>
        </div>
      `;
    })
    .join("");
}

function getNextTeamId() {
  const teamIds = GAME_DATA.teams.map((team) => team.id);
  const currentIndex = teamIds.indexOf(appState.activeTeamId);

  for (let offset = 1; offset <= teamIds.length; offset += 1) {
    const nextId = teamIds[(currentIndex + offset) % teamIds.length];
    const nextState = appState.teams[nextId];
    if (nextState.completedRounds.length < 3 && !nextState.completedRounds.includes(nextState.currentRound)) {
      return nextId;
    }
  }

  return appState.activeTeamId;
}

function getRobustAlternative(teamState) {
  const objectiveId = teamState.objectiveId;

  if (objectiveId === "margin") {
    return 'Nel vostro percorso, la linea più robusta sarebbe stata quella orientata a maggiore selettività commerciale, minore concentrazione su pochi clienti e maggiore difesa del perimetro economico. Non perché fosse "giusta" in assoluto, ma perché avrebbe protetto meglio margine, cassa e struttura in un contesto già teso.';
  }

  if (objectiveId === "cash") {
    return 'Nel vostro percorso, la linea più robusta sarebbe stata quella che scaricava meno pressione sul breve e interveniva prima su incassi, mix clienti e perimetro operativo. Non come soluzione scolastica, ma come scelta capace di proteggere la cassa senza lasciare troppi costi nascosti in eredità.';
  }

  if (objectiveId === "growth") {
    return 'Nel vostro percorso, la linea più robusta sarebbe stata quella che sosteneva crescita solo entro condizioni economiche e operative più negoziate. In questo contesto la robustezza non coincide con il massimo volume, ma con la capacità di crescere senza erodere troppo margine, servizio e tempo strategico.';
  }

  return 'Nel vostro percorso, la linea più robusta sarebbe stata quella che proteggeva servizio e struttura senza eccedere in centralizzazione o sovraccarico manageriale. Qui la robustezza significa difendere la tenuta del sistema, non solo evitare problemi nel breve.';
}

function getRoundChoiceComment(result) {
  const revenueDelta = Number((result.after.revenue - result.before.revenue).toFixed(1));
  const marginDelta = Number((result.after.ebitdaMargin - result.before.ebitdaMargin).toFixed(1));
  const serviceDelta = Number((result.after.serviceLevel - result.before.serviceLevel).toFixed(0));

  let focus = "ha cercato un equilibrio complessivo";
  if (revenueDelta > 0 && marginDelta < 0) focus = "ha privilegiato la crescita rispetto alla qualità economica";
  if (marginDelta > 0 && revenueDelta <= 0) focus = "ha privilegiato selettività e tenuta economica";
  if (serviceDelta > 0 && result.after.strategicTime < result.before.strategicTime) focus = "ha protetto il servizio pagando più tempo manageriale";

  return `Nel ${result.roundLabel.toLowerCase()} la squadra ${focus}. La combinazione tra "${result.strategy.label}", "${result.operational.label.toLowerCase()}" e coinvolgimento ${result.sharedInfo ? "ampio" : "selettivo"} ha prodotto il profilo descritto dalla voce narrante.`;
}

function renderFinalPanel() {
  const completedTeams = GAME_DATA.teams.filter((team) => appState.teams[team.id].completedRounds.length === 3);
  if (completedTeams.length === 0) {
    finalPanel.hidden = true;
    return;
  }

  const activeCompleted = completedTeams.some((team) => team.id === appState.activeTeamId)
    ? appState.activeTeamId
    : completedTeams[0].id;
  const state = appState.teams[activeCompleted];
  const team = GAME_DATA.teams.find((entry) => entry.id === activeCompleted);
  const objective = getObjectiveById(state.objectiveId);
  const finalData = getFinalNarrative(state);
  finalPanel.hidden = false;
  finalTitle.textContent = `Esito finale | ${team.name} | ${objective.name}`;

  finalTeamSelector.innerHTML = completedTeams
    .map(
      (teamEntry) => `
        <button type="button" class="team-button${teamEntry.id === activeCompleted ? " active" : ""}" data-final-team="${teamEntry.id}">
          ${teamEntry.name}
        </button>
      `,
    )
    .join("");

  finalTeamSelector.querySelectorAll("[data-final-team]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.activeTeamId = button.getAttribute("data-final-team");
      renderAll();
    });
  });

  finalObjectiveOutcome.textContent = `${finalData.summary.outcome} (${finalData.summary.score}/100)`;
  finalObjectiveReason.textContent = `La squadra ha dichiarato come obiettivo annuale "${objective.name}". Il punteggio finale misura quanto lo ha raggiunto senza compromettere in modo eccessivo tenuta economica, servizio, tempo strategico e qualità del presidio manageriale.`;
  finalProfile.textContent = finalData.finalProfile.label;
  finalProfileReason.textContent = finalData.finalProfile.reason;
  finalNarrativeCopy.textContent = `A fine simulazione ${team.name} chiude con ${state.visible.revenue.toFixed(0)} M€ di ricavi, EBITDA % al ${state.visible.ebitdaMargin.toFixed(1)}%, cash flow a ${state.visible.cashFlow.toFixed(1)} M€, qualità del servizio al ${state.visible.serviceLevel.toFixed(0)}% e tempo strategico residuo pari a ${state.visible.strategicTime.toFixed(0)}/100. Questo profilo finale spiega perché la squadra viene letta come "${finalData.finalProfile.label}" e perché l'obiettivo risulta ${finalData.summary.outcome.toLowerCase()}.`;
  finalRobustnessCopy.textContent = getRobustAlternative(state);
  finalDetailsGrid.hidden = true;
  finalDetailsToggle.textContent = "Vedi dettaglio scelte e commenti";
  finalDetailsGrid.innerHTML = state.roundHistory
    .map((result) => {
      const roundComment = generateRoundComment(result);
      return `
        <div class="final-detail-card">
          <p class="mini-label">${result.roundLabel}</p>
          <p><strong>Strategia:</strong> ${result.strategy.label}</p>
          <p><strong>Operativa:</strong> ${result.operational.label}</p>
          <p><strong>Coinvolgimento:</strong> ${result.sharedInfo ? "Ampio" : "Selettivo"}</p>
          <p><strong>Evento:</strong> ${result.extraordinary.map((entry) => entry.label).join(" / ")}</p>
          <p><strong>Commento:</strong> ${getRoundChoiceComment(result)}</p>
          <p><strong>Lettura del round:</strong> ${roundComment.managerialReading}</p>
        </div>
      `;
    })
    .join("");

  finalKpiGrid.innerHTML = GAME_DATA.visibleKpis
    .map((kpi) => {
      const currentValue = state.visible[kpi.key];
      const baseValue = GAME_DATA.initialVisibleState[kpi.key];
      const delta = Number((currentValue - baseValue).toFixed(1));
      const deltaState = formatDelta(delta, kpi.positiveIsGood);
      return `
        <div class="final-kpi-card">
          <p class="mini-label">${kpi.label}</p>
          <p class="final-kpi-value">${formatValue(currentValue, kpi.decimals, kpi.suffix)}</p>
          <p class="final-kpi-delta ${deltaState.tone}">${deltaState.arrow} ${deltaState.text} vs base iniziale</p>
        </div>
      `;
    })
    .join("");

  finalPricePaid.innerHTML = Object.entries(finalData.pricePaid)
    .map(
      ([key, entry]) => `
        <div class="final-pill-card">
          <p class="mini-label">Prezzo pagato</p>
          <p class="final-pill-title">${labelForFinalKey(key)}: ${entry.label}</p>
          <p>${entry.reason}</p>
        </div>
      `,
    )
    .join("");

  finalCapabilities.innerHTML = Object.entries(finalData.capabilities)
    .map(
      ([key, entry]) => `
        <div class="final-pill-card">
          <p class="mini-label">Capacità emersa</p>
          <p class="final-pill-title">${labelForFinalKey(key)}: ${entry.label}</p>
          <p>${entry.reason}</p>
        </div>
      `,
    )
    .join("");

  const allCompleted = GAME_DATA.teams.every((teamEntry) => appState.teams[teamEntry.id].completedRounds.length === 3);
  openDebriefButton.hidden = !allCompleted;
}

function labelForFinalKey(key) {
  const labels = {
    managementCohesion: "Coesione del management",
    ownershipAlignment: "Rapporto con la proprietà",
    organizationalTension: "Tensione organizzativa",
    managerialPressure: "Pressione manageriale",
    foresight: "Foresight",
    negotiation: "Negoziazione",
  };
  return labels[key] || key;
}

function buildManagementStyle(state, finalData) {
  const { visible, hidden } = state;
  if (visible.revenue >= 127 && hidden.organizationalTension >= 65) {
    return "Più espansiva";
  }
  if (hidden.foresight >= 70 && hidden.negotiation >= 65 && visible.strategicTime >= 45) {
    return "Più selettiva";
  }
  if (visible.serviceLevel >= 91 && hidden.managerialPressure <= 60) {
    return "Più resiliente";
  }
  if (finalData.summary.score < 58 || visible.strategicTime < 40) {
    return "Più esposta";
  }
  return "Più bilanciata";
}

function getMostVisiblePricePaid(state) {
  const checks = [
    { key: "organizationalTension", value: state.hidden.organizationalTension, mode: "high" },
    { key: "managerialPressure", value: state.hidden.managerialPressure, mode: "high" },
    { key: "managementCohesion", value: state.hidden.managementCohesion, mode: "low" },
    { key: "ownershipAlignment", value: state.hidden.ownershipAlignment, mode: "low" },
  ];

  const ranked = checks
    .map((entry) => ({
      key: entry.key,
      severity: entry.mode === "high" ? entry.value : 100 - entry.value,
    }))
    .sort((a, b) => b.severity - a.severity);

  return labelForFinalKey(ranked[0].key);
}

function buildFutureTrajectory(state, finalData) {
  if (state.hidden.foresight >= 70 && state.visible.strategicTime >= 45 && state.visible.serviceLevel >= 90) {
    return "Ha costruito più opzioni per l'anno successivo e appare più pronta a reggere un contesto che si irrigidisce.";
  }
  if (state.visible.revenue >= 127 && state.hidden.organizationalTension >= 65) {
    return "Può mostrare forza nel breve, ma rischia di portarsi nel prossimo anno una struttura più tirata e meno selettiva.";
  }
  if (state.visible.strategicTime < 40 || finalData.summary.score < 58) {
    return "Chiude l'anno con fragilità evidenti: se il contesto peggiora, la squadra parte da una base più esposta.";
  }
  return "Chiude con una traiettoria intermedia: ha difeso parti importanti del sistema, ma non ancora abbastanza da trasformarle in vero vantaggio futuro.";
}

function buildAdEvaluation(teamState) {
  const objective = getObjectiveById(teamState.objectiveId);
  const summary = computeObjectiveSummary(teamState);
  if (summary.score >= 75) {
    return `Rispetto al mandato iniziale "${objective.name}", il risultato è leggibile e coerente con la priorità dichiarata.`;
  }
  if (summary.score >= 58) {
    return `Rispetto al mandato iniziale "${objective.name}", il risultato è parziale: la direzione è riconoscibile, ma non completamente consolidata.`;
  }
  return `Rispetto al mandato iniziale "${objective.name}", l'esito non è abbastanza coerente o convincente.`;
}

function buildNarratorEvaluation(teamState, finalData) {
  if (teamState.hidden.foresight >= 70 && teamState.visible.serviceLevel >= 90 && teamState.visible.strategicTime >= 45) {
    return "Il sistema ha costruito robustezza: non perfetta, ma capace di portarsi nel futuro con più opzioni aperte.";
  }
  if (teamState.visible.strategicTime < 40 || teamState.hidden.organizationalTension >= 70) {
    return "Il sistema arriva alla fine dell'anno più stanco e più esposto: i numeri non bastano a nascondere il prezzo pagato.";
  }
  return `La traiettoria resta intermedia: ${buildFutureTrajectory(teamState, finalData)}`;
}

function buildContractClosure(teamState) {
  const summary = computeObjectiveSummary(teamState);
  if (summary.score >= 75) {
    return "Avete dato risultati, tenuta e abbastanza lucidità per meritare fiducia. Per questa volta...";
  }
  if (summary.score >= 58) {
    return "Non senza riserve, ma avete tenuto la barra abbastanza dritta. Per questa volta...";
  }
  return "Più per prudenza che per entusiasmo, quindi non sprecatelo. Per questa volta...";
}

function getTeamDisplayStatus(teamState) {
  if (teamState.completedRounds.length === 3) {
    return "Completata";
  }
  if (teamState.completedRounds.length === 0) {
    return "Non ancora simulata";
  }
  return `${teamState.completedRounds.length}/3 round completati`;
}

function computeWorkshopProgress() {
  const teams = Object.values(appState.teams);
  const completedByRound = [1, 2, 3].map((roundId) => teams.filter((team) => team.completedRounds.includes(roundId)));
  const allCompleted = teams.every((team) => team.completedRounds.length === 3);
  const currentPlenaryRound = allCompleted ? 3 : completedByRound.findIndex((teamsDone) => teamsDone.length < GAME_DATA.teams.length) + 1;
  return { completedByRound, allCompleted, currentPlenaryRound };
}

function renderWorkshopPanel() {
  const progress = computeWorkshopProgress();
  const activeTeam = GAME_DATA.teams.find((team) => team.id === appState.activeTeamId);
  const activeState = activeTeamState();

  plenaryRound.textContent = progress.allCompleted ? "Percorso completato" : `Round ${progress.currentPlenaryRound} in corso`;
  plenaryRoundCopy.textContent = progress.allCompleted
    ? "Tutte le squadre hanno chiuso il percorso annuale simulato. La pagina è pronta per il confronto finale."
    : `${progress.completedByRound[progress.currentPlenaryRound - 1].length} squadre su ${GAME_DATA.teams.length} hanno già chiuso questo round.`;

  activeTeamWorkshop.textContent = activeTeam.name;
  activeTeamWorkshopCopy.textContent = `${getTeamDisplayStatus(activeState)}. ${appState.objectivesLocked ? "Mandato riservato fino al debrief finale." : "Mandato da impostare."}`;

  workshopSummary.textContent = progress.allCompleted
    ? "Il facilitatore può ora usare la pagina per confrontare esiti finali, prezzo pagato e capacità manageriali emerse."
    : "Il facilitatore può selezionare una squadra, inserire le scelte del round e leggere subito gli effetti prima di passare al team successivo.";

  roundProgressGrid.innerHTML = [1, 2, 3]
    .map((roundId) => {
      const teamsDone = progress.completedByRound[roundId - 1];
      const pills = GAME_DATA.teams
        .map((team) => {
          const isDone = appState.teams[team.id].completedRounds.includes(roundId);
          return `<span class="progress-pill ${isDone ? "done" : "pending"}">${team.name}</span>`;
        })
        .join("");

      return `
        <div class="round-progress-card">
          <p class="mini-label">Round ${roundId}</p>
          <p class="round-progress-main">${teamsDone.length}/${GAME_DATA.teams.length} squadre completate</p>
          <div class="round-progress-list">${pills}</div>
        </div>
      `;
    })
    .join("");

  allTeamsPanel.hidden = !progress.allCompleted;
  if (progress.allCompleted) {
    const finished = GAME_DATA.teams.map((team) => {
      const state = appState.teams[team.id];
      const summary = computeObjectiveSummary(state);
      return {
        team,
        state,
        summary,
        objective: getObjectiveById(state.objectiveId),
        finalData: getFinalNarrative(state),
      };
    });

    const bestScore = [...finished].sort((a, b) => b.summary.score - a.summary.score)[0];
    const bestService = [...finished].sort((a, b) => b.state.visible.serviceLevel - a.state.visible.serviceLevel)[0];
    const bestCash = [...finished].sort((a, b) => b.state.visible.cashFlow - a.state.visible.cashFlow)[0];
    const bestForesight = [...finished].sort((a, b) => b.state.hidden.foresight - a.state.hidden.foresight)[0];

    allTeamsSummary.textContent = `${bestScore.team.name} interpreta meglio il mandato dichiarato (${bestScore.summary.score}/100). ${bestService.team.name} difende meglio il servizio (${bestService.state.visible.serviceLevel.toFixed(0)}%). ${bestCash.team.name} chiude con la miglior tenuta di cassa (${bestCash.state.visible.cashFlow.toFixed(1)} M€). La lettura finale va oltre i numeri e tiene insieme risultato, costo pagato e qualità della traiettoria costruita.`;

    const step = appState.debriefStep;
    debriefStepLabel.textContent = `Sezione ${step} di 3`;
    debriefPrevButton.disabled = step === 1;
    debriefNextButton.disabled = step === 3;
    debriefEndButton.hidden = step !== 3;
    debriefEpilogueRow.hidden = !(step === 3 && appState.viewedContractTeams.length === GAME_DATA.teams.length);

    allTeamsHighlights.hidden = step !== 1;
    allTeamsFinalGrid.hidden = step !== 3;

    allTeamsHighlights.innerHTML = `
      <div class="final-pill-card">
        <p class="mini-label">Lettura trasversale</p>
        <p class="final-pill-title">Obiettivo centrato meglio</p>
        <p>${bestScore.team.name} ha il punteggio più alto (${bestScore.summary.score}/100) rispetto al mandato che si era dato all'inizio.</p>
      </div>
      <div class="final-pill-card">
        <p class="mini-label">Lettura trasversale</p>
        <p class="final-pill-title">Tenuta del servizio</p>
        <p>${bestService.team.name} difende meglio la qualità del servizio (${bestService.state.visible.serviceLevel.toFixed(0)}%).</p>
      </div>
      <div class="final-pill-card">
        <p class="mini-label">Lettura trasversale</p>
        <p class="final-pill-title">Tenuta della cassa</p>
        <p>${bestCash.team.name} chiude con la miglior tenuta di cassa (${bestCash.state.visible.cashFlow.toFixed(1)} M€).</p>
      </div>
      <div class="final-pill-card">
        <p class="mini-label">Lettura trasversale</p>
        <p class="final-pill-title">Lettura prospettica</p>
        <p>${bestForesight.team.name} mostra la maggiore robustezza prospettica sul finale.</p>
      </div>
    `;

    debriefTeamSelector.innerHTML = finished
      .map(
        ({ team }) => `
          <button type="button" class="team-button${team.id === appState.debriefTeamId ? " active" : ""}" data-debrief-team="${team.id}">
            ${team.name}
          </button>
        `,
      )
      .join("");

    debriefTeamSelector.querySelectorAll("[data-debrief-team]").forEach((button) => {
      button.addEventListener("click", () => {
        appState.debriefTeamId = button.getAttribute("data-debrief-team");
        renderAll();
      });
    });

    const rows = [
      { label: "Obiettivo scelto", cells: finished.map(({ objective }) => objective.name) },
      { label: "Esito rispetto all'obiettivo", cells: finished.map(({ summary, team }) => `<span class="debrief-tag${team.id === bestScore.team.id ? "" : " warning"}">${summary.outcome} (${summary.score}/100)</span>`) },
      { label: "Profilo emerso", cells: finished.map(({ finalData }) => `<span class="debrief-cell-strong">${finalData.finalProfile.label}</span><br>${finalData.finalProfile.reason}`) },
      { label: "Ricavi", cells: finished.map(({ state }) => `${state.visible.revenue.toFixed(0)} M€`) },
      { label: "EBITDA %", cells: finished.map(({ state }) => `${state.visible.ebitdaMargin.toFixed(1)}%`) },
      { label: "Cash Flow", cells: finished.map(({ state, team }) => `<span class="${team.id === bestCash.team.id ? "debrief-cell-strong" : ""}">${state.visible.cashFlow.toFixed(1)} M€</span>`) },
      { label: "Qualità del Servizio", cells: finished.map(({ state, team }) => `<span class="${team.id === bestService.team.id ? "debrief-cell-strong" : ""}">${state.visible.serviceLevel.toFixed(0)}%</span>`) },
      { label: "Tempo Strategico", cells: finished.map(({ state }) => `${state.visible.strategicTime.toFixed(0)}/100`) },
      { label: "Prezzo pagato più visibile", cells: finished.map(({ state }) => getMostVisiblePricePaid(state)) },
      { label: "Capacità emersa più forte", cells: finished.map(({ state }) => (state.hidden.foresight >= state.hidden.negotiation ? "Foresight" : "Negoziazione")) },
      { label: "Lettura sul mandato", cells: finished.map(({ state }) => buildAdEvaluation(state)) },
      { label: "Lettura di sistema", cells: finished.map(({ state, finalData }) => buildNarratorEvaluation(state, finalData)) },
      { label: "Cosa ha fatto meglio", cells: finished.map(({ team, objective, summary }) => (team.id === bestScore.team.id ? `Ha interpretato meglio il proprio mandato: ${objective.shortLabel.toLowerCase()}.` : summary.outcome === "Raggiunto pienamente" ? "Ha centrato bene l'obiettivo scelto." : "Ha difeso solo una parte del mandato iniziale.")) },
      { label: "Cosa l'ha esposta di più", cells: finished.map(({ state, finalData }) => `${getMostVisiblePricePaid(state)}. ${finalData.finalProfile.label === "Reattiva ma fragile" ? "La squadra arriva a fine anno con poca riserva manageriale." : "Il prezzo pagato resta visibile nella chiusura del percorso."}`) },
      { label: "Traiettoria futura", cells: finished.map(({ state, finalData, team }) => `<span class="debrief-cell-strong">${team.id === bestForesight.team.id ? "Più robusta" : buildManagementStyle(state, finalData)}</span><br>${buildFutureTrajectory(state, finalData)}`) },
    ];

    const rowGroups = {
      1: rows.slice(0, 6),
      2: rows.slice(6, 12),
      3: rows.slice(12),
    };

    allTeamsDebriefTable.innerHTML = `
      <thead>
        <tr>
          <th>Lettura finale</th>
          ${finished.map(({ team }) => `<th>${team.name}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rowGroups[step]
          .map(
            (row) => `
          <tr>
            <td class="debrief-row-label">${row.label}</td>
            ${row.cells.map((cell) => `<td>${cell}</td>`).join("")}
          </tr>`,
          )
          .join("")}
      </tbody>
    `;

    allTeamsFinalGrid.innerHTML = finished
      .map(
        ({ team, summary, objective, finalData, state }) => `
          <div class="trajectory-card">
            <p class="mini-label">${team.name}</p>
            <p><strong>Se questo anno continuasse:</strong></p>
            <p>${buildFutureTrajectory(state, finalData)}</p>
            <p><strong>Suggerimento:</strong> ${state.hidden.foresight >= state.hidden.negotiation ? "Approfondire come il team costruisce decisioni prospettiche e se riesce a tradurle in maggiore allineamento interno." : "Approfondire come il team media bene la pressione ma rischia di costruire meno visione sul medio periodo."}</p>
          </div>
        `,
      )
      .join("");
  }
}

function renderViewMode() {
  const hero = document.querySelector(".hero");
  const quickNav = document.querySelector(".quick-nav");
  const sections = Array.from(document.querySelectorAll("main > section"));
  const isDebrief = appState.view === "debrief";

  if (hero) {
    hero.hidden = isDebrief;
  }
  if (quickNav) {
    quickNav.hidden = isDebrief;
  }

  sections.forEach((section) => {
    if (section.id === "all-teams-panel") {
      section.hidden = !isDebrief || !computeWorkshopProgress().allCompleted;
      return;
    }
    if (isDebrief) {
      section.hidden = true;
    }
  });

  if (appState.view === "game") {
    allTeamsPanel.hidden = true;
  }
}

function loadFinalDemo(variant = "default") {
  initializeAppState();
  appState.viewedContractTeams = [];

  const demoSets = {
    default: {
      "team-a": [
        { strategyId: "r1-strategy-2", operationalId: "r1-op-2", sharedInfo: true, extraordinaryIds: ["r1-extra-2"] },
        { strategyId: "r2-strategy-3", operationalId: "r2-op-2", sharedInfo: true, extraordinaryIds: ["r2-extra-3"] },
        { strategyId: "r3-strategy-1", operationalId: "r3-op-2", sharedInfo: true, extraordinaryIds: ["r3-ad-2", "r3-ext-3"] },
      ],
      "team-b": [
        { strategyId: "r1-strategy-1", operationalId: "r1-op-1", sharedInfo: false, extraordinaryIds: ["r1-extra-1"] },
        { strategyId: "r2-strategy-2", operationalId: "r2-op-1", sharedInfo: false, extraordinaryIds: ["r2-extra-1"] },
        { strategyId: "r3-strategy-2", operationalId: "r3-op-1", sharedInfo: false, extraordinaryIds: ["r3-ad-1", "r3-ext-1"] },
      ],
      "team-c": [
        { strategyId: "r1-strategy-3", operationalId: "r1-op-2", sharedInfo: true, extraordinaryIds: ["r1-extra-3"] },
        { strategyId: "r2-strategy-3", operationalId: "r2-op-3", sharedInfo: true, extraordinaryIds: ["r2-extra-3"] },
        { strategyId: "r3-strategy-3", operationalId: "r3-op-2", sharedInfo: true, extraordinaryIds: ["r3-ad-2", "r3-ext-2"] },
      ],
      "team-d": [
        { strategyId: "r1-strategy-2", operationalId: "r1-op-3", sharedInfo: false, extraordinaryIds: ["r1-extra-2"] },
        { strategyId: "r2-strategy-1", operationalId: "r2-op-2", sharedInfo: true, extraordinaryIds: ["r2-extra-2"] },
        { strategyId: "r3-strategy-1", operationalId: "r3-op-3", sharedInfo: false, extraordinaryIds: ["r3-ad-3", "r3-ext-3"] },
      ],
    },
    alt: {
      "team-a": [
        { strategyId: "r1-strategy-1", operationalId: "r1-op-2", sharedInfo: false, extraordinaryIds: ["r1-extra-1"] },
        { strategyId: "r2-strategy-1", operationalId: "r2-op-2", sharedInfo: true, extraordinaryIds: ["r2-extra-2"] },
        { strategyId: "r3-strategy-2", operationalId: "r3-op-3", sharedInfo: false, extraordinaryIds: ["r3-ad-1", "r3-ext-3"] },
      ],
      "team-b": [
        { strategyId: "r1-strategy-2", operationalId: "r1-op-2", sharedInfo: true, extraordinaryIds: ["r1-extra-2"] },
        { strategyId: "r2-strategy-3", operationalId: "r2-op-2", sharedInfo: true, extraordinaryIds: ["r2-extra-3"] },
        { strategyId: "r3-strategy-3", operationalId: "r3-op-2", sharedInfo: true, extraordinaryIds: ["r3-ad-2", "r3-ext-2"] },
      ],
      "team-c": [
        { strategyId: "r1-strategy-3", operationalId: "r1-op-3", sharedInfo: true, extraordinaryIds: ["r1-extra-3"] },
        { strategyId: "r2-strategy-1", operationalId: "r2-op-3", sharedInfo: false, extraordinaryIds: ["r2-extra-2"] },
        { strategyId: "r3-strategy-1", operationalId: "r3-op-1", sharedInfo: false, extraordinaryIds: ["r3-ad-3", "r3-ext-1"] },
      ],
      "team-d": [
        { strategyId: "r1-strategy-2", operationalId: "r1-op-1", sharedInfo: true, extraordinaryIds: ["r1-extra-2"] },
        { strategyId: "r2-strategy-2", operationalId: "r2-op-1", sharedInfo: false, extraordinaryIds: ["r2-extra-1"] },
        { strategyId: "r3-strategy-2", operationalId: "r3-op-2", sharedInfo: true, extraordinaryIds: ["r3-ad-2", "r3-ext-1"] },
      ],
    },
  };

  const demoPaths = demoSets[variant] || demoSets.default;

  GAME_DATA.teams.forEach((team) => {
    demoPaths[team.id].forEach((config, index) => {
      const roundId = index + 1;
      const teamState = appState.teams[team.id];
      const selectionState = createSelectionStateFromChoices(roundId, config);
      const result = buildRoundResult(teamState, selectionState);
      commitRoundResult(team.id, result);
    });
  });

  appState.activeTeamId = GAME_DATA.teams[0].id;
  renderAll();
  scrollToSection("final-panel");
}

function simulateRound() {
  const teamState = activeTeamState();
  if (teamState.completedRounds.includes(teamState.currentRound)) {
    return;
  }

  if (!activeSelectionState().extraordinaryRevealed) {
    revealEventButton.focus();
    return;
  }

  const result = buildRoundResult(teamState, activeSelectionState());
  commitRoundResult(appState.activeTeamId, result);
  const nextTeamId = getNextTeamId();
  simulateButton.blur();
  const allCompleted = GAME_DATA.teams.every((team) => appState.teams[team.id].completedRounds.length === 3);
  if (result.roundId === 3 && allCompleted) {
    openDebriefOverlay();
    renderAll();
    return;
  }
  openNarratorOverlay(result, nextTeamId);
  renderAll();
}

function resetActiveTeam() {
  const index = GAME_DATA.teams.findIndex((team) => team.id === appState.activeTeamId);
  appState.teams[appState.activeTeamId] = createInitialTeamState(index);
  appState.selections[appState.activeTeamId] = createDefaultSelectionState(1);
  renderAll();
}

function renderAll() {
  updateScenarioIntro();
  renderWorkshopPanel();
  renderTeamSelector();
  renderActiveTeamInfo();
  renderRoundOptions();
  renderKpis();
  renderOutcome();
  renderComparison();
  renderFinalPanel();
  updateActionButtons();
  renderViewMode();
  renderCharacterOverlay();
}

function updateActionButtons() {
  const state = activeTeamState();
  const isComplete = state.completedRounds.length === 3;
  const selection = activeSelectionState();
  simulateButton.disabled = isComplete || !selection.extraordinaryRevealed;
  simulateButton.textContent = isComplete ? "Squadra completata" : "Chiudi round squadra";
  resetButton.textContent = isComplete ? "Ripristina squadra completata" : "Ripristina squadra";
}

simulateButton.addEventListener("click", simulateRound);
resetButton.addEventListener("click", resetActiveTeam);
revealEventButton.addEventListener("click", () => {
  const selection = activeSelectionState();
  const round = getRound(activeTeamState().currentRound);
  const extraordinaryEvents = round.extraordinaryEvents || (round.extraordinaryEvent ? [round.extraordinaryEvent] : []);
  selection.extraordinaryRevealed = true;
  const adEventIndex = extraordinaryEvents.findIndex((event) => event.type === "ad");
  if (adEventIndex >= 0) {
    openAdOverlay(extraordinaryEvents[adEventIndex], adEventIndex);
  }
  revealEventButton.blur();
  renderAll();
});
shareInfoCheckbox.addEventListener("change", (event) => {
  activeSelectionState().sharedInfo = event.target.checked;
  updateShareModeUI(event.target.checked);
});

shareModeOn.addEventListener("click", () => {
  activeSelectionState().sharedInfo = true;
  renderAll();
});

shareModeOff.addEventListener("click", () => {
  activeSelectionState().sharedInfo = false;
  renderAll();
});

backToTeamsButton?.addEventListener("click", () => {
  scrollToSection("team-panel");
});

debriefEndButton?.addEventListener("click", () => {
  openContractOverlay();
  renderAll();
});

debriefPrevButton?.addEventListener("click", () => {
  appState.debriefStep = Math.max(1, appState.debriefStep - 1);
  renderAll();
});

debriefNextButton?.addEventListener("click", () => {
  appState.debriefStep = Math.min(3, appState.debriefStep + 1);
  renderAll();
});

loadFinalDemoButton?.addEventListener("click", () => {
  loadFinalDemo();
});

loadFinalDemoAltButton?.addEventListener("click", () => {
  loadFinalDemo("alt");
});

openDebriefButton?.addEventListener("click", () => {
  openDebriefPage();
});

finalDetailsToggle?.addEventListener("click", () => {
  const shouldShow = finalDetailsGrid.hidden;
  finalDetailsGrid.hidden = !shouldShow;
  finalDetailsToggle.textContent = shouldShow ? "Nascondi dettaglio scelte e commenti" : "Vedi dettaglio scelte e commenti";
});

characterOverlayClose?.addEventListener("click", () => {
  if (appState.overlay?.type === "narrator") {
    advanceAfterNarrator();
    return;
  }
  closeCharacterOverlay();
});

characterOverlayDismiss?.addEventListener("click", () => {
  if (appState.overlay?.type === "narrator") {
    advanceAfterNarrator();
    return;
  }
  closeCharacterOverlay();
});

initializeAppState();
renderAll();
