/**
 * 网站文案 · Italiano。从英文（三个页面的 HTML）翻译，键和页面上的 data-i18n 一一对应；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/it.js 里的原话。
 */
siteI18n('it', {
  'nav.support': '← Supporto',
  'nav.setup': 'Come ottenere una API Key',
  'nav.privacy': 'Informativa sulla privacy',

  // setup.html
  'setup.doc.title': 'Come ottenere una API Key di Qwen · Duo Interpreter',
  'setup.title': 'Come ottenere una API Key di Qwen',
  'setup.sub': 'Circa dieci minuti. Fallo da un browser sul computer; solo l’ultimo passaggio si fa sul telefono.',
  'setup.intro':
    'L’app <strong>non include credito di traduzione</strong>. Si collega ad Alibaba Cloud Model Studio con il tuo account, ' +
    'e Alibaba Cloud ti addebita ciò che usi. La tua voce non passa mai dai nostri server.',
  'setup.remember':
    '<strong>Due cose da tenere a mente</strong>: quasi tutti i problemi nascono da una di queste. ' +
    'La chiave va creata nella regione <strong>Singapore</strong>; le chiavi di altre regioni qui non funzionano. ' +
    'E la chiave <strong>viene mostrata per intero una sola volta</strong>: chiusa quella finestra, non si può più leggere.',
  'setup.s1.title': 'Crea un account Alibaba Cloud',
  'setup.s1.signup':
    'Registrati su <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Basta un indirizzo email: <strong>non serve un numero di telefono della Cina continentale</strong>.',
  'setup.s1.sso': 'Puoi anche accedere con un account Google o GitHub e saltare il modulo.',
  'setup.s1.card':
    'Prima di poter attivare i servizi dovrai aggiungere una carta di credito o PayPal. ' +
    'Aggiungerla non comporta alcun addebito: paghi solo l’uso effettivo.',
  'setup.s1.alt': 'Pagina di accesso di Alibaba Cloud',
  'setup.s2.title': 'Imposta la regione su Singapore',
  'setup.s2.p':
    'Apri la console di Model Studio su <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'e controlla che la regione <strong>in alto a destra sia Singapore</strong>. Il link punta già lì, ' +
    'ma a volte l’accesso ti riporta a una regione predefinita, quindi conviene dare un’occhiata.',
  'setup.s2.alt': 'La console di Model Studio con la regione impostata su Singapore',
  'setup.s2.caption':
    'La regione è in alto a destra. Il pulsante <strong>API-KEY</strong> in basso a sinistra è il passo successivo: ' +
    'non si trova nella navigazione principale.',
  'setup.s3.title': 'Attiva Model Studio',
  'setup.s3.p':
    'Alla prima visita ti viene chiesto di attivare il servizio: accetta i termini e conferma. ' +
    'Se il tuo account è già attivo, questa schermata non compare: passa direttamente al passaggio successivo.',
  'setup.s4.title': 'Apri la pagina API Key',
  'setup.s4.p':
    'Fai clic sul pulsante <strong>API-KEY</strong> in <strong>basso a sinistra</strong> nella console. ' +
    'È un pulsante a sé, a forma di pillola, non una voce della navigazione principale: per questo la prima volta è facile non vederlo.',
  'setup.s4.alt': 'La pagina API Key con il pulsante Create API Key',
  'setup.s4.caption': 'Una volta in questa pagina, fai clic su <strong>Create API Key</strong> a destra.',
  'setup.s5.title': 'Crea la chiave',
  'setup.s5.p':
    'Fai clic su <strong>Create API Key</strong>. Scegli il workspace predefinito, imposta le autorizzazioni su <strong>All</strong>, ' +
    'lascia pure vuota la descrizione e conferma.',
  'setup.s5.alt': 'La finestra Create API Key',
  'setup.s6.title': 'Copia subito la chiave intera',
  'setup.s6.copy':
    'La chiave inizia con <code>sk-</code> ed è lunga: <strong>copiala tutta</strong>. ' +
    'Una chiave a cui mancano gli ultimi caratteri fallisce esattamente come una sbagliata. Usa il pulsante di copia nella finestra.',
  'setup.s6.download':
    'La finestra offre anche <strong>Download</strong>, che salva la chiave in un file: ' +
    'più sicuro che affidarsi solo agli appunti.',
  'setup.s6.note':
    '<strong>Una volta chiusa questa finestra, la chiave completa non è più visibile.</strong> ' +
    'Se la perdi, elimina quella chiave e creane un’altra: non cambia nient’altro.',
  'setup.s6.alt': 'La finestra che mostra la chiave una sola volta, con Copy e Download',
  'setup.s6.caption': 'In questo screenshot la chiave e i domini dedicati sono oscurati.',
  'setup.s7.title': 'Incollala nell’app e tocca «Prova»',
  'setup.s7.p':
    'Torna sul telefono: in <strong>Impostazioni → Metodo di pagamento</strong> scegli «Usa la mia chiave Alibaba Cloud» ' +
    'e compare la sezione <strong>API Key di Qwen</strong>. Lascia il sito su <strong>Internazionale · Singapore</strong>, ' +
    'incolla la chiave, tocca <strong>Salva</strong> e poi <strong>Prova</strong>. ' +
    'Se compare in verde «Connesso: la chiave funziona», hai finito.',
  'setup.s7.start':
    'Infine chiudi le impostazioni, scegli le lingue in «Io parlo» e «L’altra persona» e inizia. ' +
    'Cinese ⇄ inglese è gratis; un solo acquisto di «Tutte le lingue» nelle impostazioni sblocca il resto.',
  'setup.s7.alt': 'Le impostazioni dell’app con la chiave salvata e la prova superata',
  'setup.s7.caption': 'La riga verde indica che è andato tutto bene.',
  'setup.help.title': 'Se non si connette',
  'setup.help.badKey':
    '<strong>«API Key non valida»</strong>: nove volte su dieci la regione è sbagliata. ' +
    'Controlla che in alto a destra la console indichi Singapore; se non è così, cambiala e <strong>crea una nuova chiave</strong>, ' +
    'perché una chiave non si può spostare da una regione all’altra. Verifica anche che incollandola non sia rimasto fuori nulla alla fine.',
  'setup.help.forbidden':
    '<strong>«Questa chiave non può usare il modello»</strong>: l’account non ha ancora attivato Model Studio, ' +
    'oppure non ha credito disponibile. Controlla nella console.',
  'setup.help.timeout':
    '<strong>«Connessione scaduta»</strong>: il telefono non riesce a raggiungere <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Prova un’altra rete, per esempio la rete cellulare invece del Wi-Fi dell’ufficio.',
  'setup.help.noKey':
    '<strong>Vuoi provarla prima, o non riesci a ottenere una chiave?</strong> Non serve nessuna chiave: ' +
    '<strong>Impostazioni → Metodo di pagamento → Acquista tempo (senza registrazione)</strong>. ' +
    'Un nuovo dispositivo riceve 5 minuti gratis: tocca «Avvia» per provare; poi acquista tempo nell’app e funzionano tutte le lingue.',
  'setup.help.contact':
    'Ancora niente? Scrivi a <a href="mailto:winer632@qq.com">winer632@qq.com</a> indicando dispositivo, versione di iOS ' +
    'e il messaggio esatto mostrato dal pulsante «Prova»: così facciamo molto prima. ' +
    '<strong>Per favore, non inviarci la tua chiave.</strong>',

  // index.html
  'index.doc.title': 'Supporto · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Supporto',
  'index.sub':
    'Interpretazione bidirezionale per parlare faccia a faccia. Sottotitoli e voce mentre si parla, con la direzione riconosciuta automaticamente.',
  'index.trial.title': 'Provala con cinque minuti gratis',
  'index.trial.p':
    'Niente registrazione e niente chiave: la prima volta che apri l’app su un nuovo dispositivo ricevi ' +
    '<strong>cinque minuti gratis</strong>, indicati in alto. Scegli «Io parlo» e «L’altra persona» sopra i sottotitoli, ' +
    'tocca «Avvia» e parla: è vera interpretazione, con sottotitoli e voce in tempo reale. ' +
    'Ogni dispositivo riceve la prova una sola volta; dopo, acquista tempo nell’app o usa la tua chiave Alibaba Cloud.',
  'index.pay.title': 'Per l’uso vero e proprio',
  'index.pay.intro': 'Due modi di pagare, da scegliere in <strong>Impostazioni → Metodo di pagamento</strong>:',
  'index.pay.credit':
    '<strong>Acquistare tempo di interpretazione nell’app</strong> (l’opzione predefinita): nessun account di alcun tipo; ' +
    'apri l’app e parti, con cinque minuti gratis su un nuovo dispositivo. Disponibile in pacchetti da 1, 5 e 10 ore, ' +
    'vale per tutte le lingue. Con la traduzione vocale un minuto costa un minuto; con i soli sottotitoli, un terzo.',
  'index.pay.key':
    '<strong>Usare la tua chiave Alibaba Cloud</strong>: Alibaba Cloud ti addebita direttamente ciò che usi. ' +
    'In questo caso cinese ⇄ inglese è gratis; tutto il resto si sblocca con un solo acquisto di «Tutte le lingue», per sempre, ' +
    'comprese le lingue aggiunte in futuro. ' +
    '<a href="./setup.html">Guida passo passo per ottenere una API Key →</a>',
  'index.langs.title': 'Lingue',
  'index.langs.intro':
    'Si scelgono nelle due colonne sopra i sottotitoli: «Io parlo» a sinistra, «L’altra persona» a destra. ' +
    'Queste 24 lingue si traducono tra loro (tutte le combinazioni tranne le poche elencate sotto), ' +
    'con la direzione riconosciuta automaticamente:',
  'index.langs.list':
    'Cinese, inglese, giapponese, coreano, tedesco, francese, spagnolo, portoghese, italiano, russo, hindi, indonesiano, vietnamita, ' +
    'arabo, thailandese, turco, filippino, polacco, urdu, ebraico, persiano, malese, olandese, bengalese',
  'index.langs.bangla':
    '<strong>Il bengalese ha solo sottotitoli</strong>: ciò che dicono gli altri appare in bengalese come testo, senza voce; ' +
    'chi parla bengalese riceve comunque la traduzione vocale.',
  'index.langs.unpaired':
    'Restano fuori alcune combinazioni: indonesiano con malese e hindi con urdu (chi le parla si capisce già), ' +
    'e arabo, urdu e persiano tra loro (stesso alfabeto; l’app non riesce ancora a capire chi sta parlando).',
  'index.langs.cantonese': '<strong>Cantonese ⇄ mandarino</strong>: con la voce in un senso, solo sottotitoli nell’altro.',
  'index.faq.title': 'Domande frequenti',
  'index.faq.sound.q': 'Non si sente niente',
  'index.faq.sound.a':
    'Controlla l’<strong>interruttore Suoneria/Silenzioso</strong> sopra i tasti del volume, sul lato sinistro: ' +
    'se si vede l’arancione, è in modalità silenziosa. Poi verifica che il selettore della voce in alto non sia su «🔇 Senza voce» ' +
    'e che tu non stia traducendo in bengalese o cantonese, che hanno solo sottotitoli. ' +
    'Se ancora non si sente, alza il volume: ricevitore e altoparlante hanno livelli di volume separati.',
  'index.faq.earpiece.q': 'Ascoltare in privato invece che ad alta voce',
  'index.faq.earpiece.a':
    'Imposta il selettore della voce in alto su <strong>📞 Ricevitore</strong>: la traduzione esce dal ricevitore ' +
    'e la ascolti con il telefono all’orecchio, come in una chiamata. Puoi cambiare in qualsiasi momento, anche a sessione in corso.',
  'index.faq.mic.q': '«Il sistema ha scollegato il microfono»',
  'index.faq.mic.a':
    'Di solito un’altra app ha preso il microfono (una chiamata, un messaggio vocale, un registratore) ' +
    'oppure delle cuffie Bluetooth hanno cambiato modalità. Tocca «Ferma» e poi di nuovo «Avvia» per ripristinare. ' +
    'Se con il Bluetooth succede spesso, prova il microfono integrato o delle cuffie con filo.',
  'index.faq.echo.q': 'Effetto larsen o eco con l’altoparlante',
  'index.faq.echo.a':
    'Nella stessa stanza, il microfono riprende di nuovo il suono dell’altoparlante. ' +
    'In <strong>Impostazioni → Gestione dell’eco</strong> scegli «Mic basso in riproduzione» o «Mic muto in riproduzione», ' +
    'oppure abbassa semplicemente il volume. Con il ricevitore il problema non si presenta affatto.',
  'index.faq.stuck.q': 'I sottotitoli non si aggiornano più',
  'index.faq.stuck.a':
    'La barra in alto mostra lo stato della sessione. Le cause più comuni sono una caduta della rete o il microfono silenziato dal sistema, ' +
    'che viene segnalato esplicitamente. Di solito basta fermare e avviare di nuovo. ' +
    'Con il tempo acquistato, controlla il tempo rimasto in alto; con la tua chiave, ' +
    'un problema di quota di Alibaba Cloud viene riportato così com’è.',
  'index.faq.phone.q': 'Passare a un nuovo telefono',
  'index.faq.phone.a':
    'Il tempo acquistato appartiene al tuo account, un ID casuale che l’app crea e conserva nel Portachiavi iCloud: ' +
    'accedi con lo stesso Account Apple sul nuovo telefono, con Portachiavi iCloud attivo, e il saldo è lì. ' +
    '«Tutte le lingue», acquistato usando la tua chiave, si recupera gratuitamente da ' +
    '<strong>Impostazioni → Tutte le lingue → Ripristina acquisti</strong>.',
  'index.faq.cantonese.q': 'Perché cantonese ⇄ mandarino ha la voce in un solo senso',
  'index.faq.cantonese.a':
    'Il modello sa <strong>capire</strong> e <strong>scrivere</strong> il cantonese, ma non <strong>parlarlo</strong>: ' +
    'nella tabella delle lingue del fornitore è indicato come solo sottotitoli. Quindi, se parli cantonese senti la traduzione in mandarino; ' +
    'se parli mandarino ricevi solo sottotitoli in cantonese. Entrambi usano caratteri cinesi, perciò la direzione ' +
    'non si può rilevare automaticamente: impostala con il selettore della direzione.',
  'index.faq.direction.q': 'A volte la direzione si inverte, per esempio tra spagnolo e portoghese',
  'index.faq.direction.a':
    'Quando le due lingue condividono l’alfabeto (inglese, spagnolo, portoghese, italiano, francese, tedesco, indonesiano, vietnamita ' +
    'e così via), il rilevamento si basa sulle parole e può oscillare con frasi brevi o nomi. ' +
    'Per queste combinazioni in alto c’è un controllo della direzione in più: ' +
    'passa da «Direzione · automatica» a una direzione fissa per bloccarla.',
  'index.contact.title': 'Contatti',
  'index.contact.p':
    'Per domande, suggerimenti e informazioni sui rimborsi scrivi a <a href="mailto:winer632@qq.com">winer632@qq.com</a>: ' +
    'di solito rispondiamo entro uno o due giorni lavorativi. Indicare il dispositivo, la versione di iOS, le due lingue ' +
    'e se hai acquistato tempo o usi la tua chiave rende tutto molto più rapido. ' +
    'Per il tempo acquistato, includi l’<strong>ID account</strong> che trovi nelle Impostazioni.',

  // privacy.html
  'privacy.doc.title': 'Informativa sulla privacy · Duo Interpreter',
  'privacy.title': 'Informativa sulla privacy',
  'privacy.sub': 'Duo Interpreter · Ultimo aggiornamento: 24 settembre 2026',
  'privacy.translated':
    'Questa informativa è una traduzione. In caso di differenze rispetto alla <a href="?lang=en">versione inglese</a>, prevale la versione inglese.',
  'privacy.short':
    '<strong>In breve:</strong> l’app funziona in due modi. Per impostazione predefinita acquisti tempo di interpretazione, senza registrazione: ' +
    'la tua voce va direttamente dal telefono ad Alibaba Cloud Model Studio per essere tradotta e <strong>non passa mai dal nostro server</strong>; ' +
    'il nostro server conserva solo un numero di account generato casualmente, quanto tempo hai acquistato e quanto ne hai usato. ' +
    'Se invece usi la tua chiave Alibaba Cloud, non raccogliamo nulla. Non ci sono strumenti di analisi, pubblicità o tracciamento, ' +
    'e le trascrizioni restano sul tuo telefono.',
  'privacy.collect.title': 'Cosa raccogliamo',
  'privacy.collect.intro': 'Dipende da cosa hai scelto in Impostazioni → Metodo di pagamento.',
  'privacy.credit.title': 'Acquisto di tempo (predefinito, senza registrazione)',
  'privacy.credit.intro':
    'Per ricordare quanto tempo hai acquistato e prevenire abusi, l’app comunica con il nostro server <code>api.duo-interpreter.com</code> ' +
    '(ospitato su Microsoft Azure a Singapore). Il server conserva:',
  'privacy.credit.id':
    '<strong>Un ID account casuale</strong>: un numero (un UUID) che l’app genera la prima volta che la usi. ' +
    'Non ha nulla a che fare con il tuo nome, la tua email, il tuo numero di telefono o il tuo Account Apple. ' +
    'È conservato nel tuo Portachiavi iCloud, quindi il saldo resta anche se reinstalli l’app e ti segue sui nuovi telefoni ' +
    'con lo stesso Account Apple.',
  'privacy.credit.device':
    '<strong>Credenziali del dispositivo</strong>: per ogni dispositivo, l’identificatore e la chiave pubblica di una chiave Apple App Attest, ' +
    'con la data di registrazione e dell’ultimo utilizzo. Servono a dimostrare che le richieste provengono da una copia autentica ' +
    'di questa app e non da una versione modificata.',
  'privacy.credit.purchases':
    '<strong>Acquisti</strong>: l’ID della transazione Apple, il prodotto (1, 5 o 10 ore), la data di acquisto, ' +
    'se si trattava di un acquisto di prova (sandbox) e se è stato rimborsato.',
  'privacy.credit.usage':
    '<strong>Utilizzo</strong>: quando è iniziata e finita ogni sessione di interpretazione, la modalità (traduzione vocale o solo sottotitoli), ' +
    'quanto tempo ha consumato, quante chiavi temporanee ha richiesto e ogni variazione del saldo.',
  'privacy.credit.trial':
    '<strong>La prova di 5 minuti</strong> viene concessa una sola volta per dispositivo. Per evitare richieste ripetute, ' +
    'l’app consegna al server un token monouso di Apple DeviceCheck; il server lo usa per chiedere ad Apple di verificare, ' +
    'e poi impostare, un singolo bit che Apple conserva per questo dispositivo per conto nostro («prova usata»). ' +
    'Il token viene usato una volta e non viene conservato, e Apple conserva per noi solo quel bit, senza dirci di quale dispositivo si tratta.',
  'privacy.credit.never':
    'Il server <strong>non riceve mai</strong> la tua voce, i sottotitoli o le traduzioni, il tuo nome, email, numero di telefono, ' +
    'posizione o contatti, né i tuoi dati di pagamento.',
  'privacy.key.title': 'Uso della tua chiave Alibaba Cloud',
  'privacy.key.p': 'In questa modalità l’app non contatta il nostro server e <strong>non raccogliamo nulla</strong>.',
  'privacy.both.title': 'In entrambi i casi',
  'privacy.both.p':
    'L’app non contiene strumenti di analisi, pubblicità o tracciamento di terze parti. Non facciamo analisi né pubblicità, ' +
    'non ti tracciamo tra app o siti web, e non vendiamo né condividiamo alcun dato.',
  'privacy.logs.title': 'Log del server e conservazione',
  'privacy.logs.ip':
    'Il tuo indirizzo IP è usato solo in memoria per limitare la frequenza delle richieste (per prevenire abusi) ' +
    'e viene scartato un’ora dopo la tua ultima richiesta; non viene registrato né conservato. ' +
    'I log del server registrano solo eventi, come «un dispositivo si è registrato» (con solo i primi 8 caratteri dell’ID account), ' +
    '«un acquisto è stato accreditato» (il prodotto e se era un acquisto di prova), «è stato applicato un rimborso» (l’ID della transazione) ' +
    'ed errori. I log del server vengono eliminati automaticamente dopo 30 giorni.',
  'privacy.logs.ledger':
    'Ogni ora sul server viene salvato uno snapshot del registro contabile, conservando gli ultimi 48, ' +
    'e una copia cifrata viene conservata in un’altra sede per 30 giorni. I dati di account, acquisti e utilizzo ' +
    'vengono conservati finché l’account esiste, perché servono a riconciliare la contabilità e a gestire i rimborsi di Apple.',
  'privacy.speech.title': 'Dove va la tua voce',
  'privacy.speech.intro':
    'In entrambe le modalità, l’audio del microfono va <strong>in tempo reale e direttamente dal tuo telefono ad Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Non passa mai dal nostro server; non possiamo ascoltarlo e non abbiamo nulla da conservare:',
  'privacy.speech.credit':
    'Quando acquisti tempo, l’app si collega a <code>dashscope-intl.aliyuncs.com</code> (Singapore) tramite il nostro account Alibaba Cloud: ' +
    'il nostro server rilascia all’app solo una chiave temporanea che scade dopo 60 secondi, ' +
    'e l’audio è trattato in base al nostro contratto con Alibaba Cloud.',
  'privacy.speech.key':
    'Con la tua chiave, l’app si collega al sito che hai scelto nelle impostazioni ' +
    '(<code>dashscope-intl.aliyuncs.com</code> o <code>dashscope.aliyuncs.com</code>) usando la tua chiave, ' +
    'e l’audio è trattato in base al <strong>tuo</strong> contratto con Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Per sapere cosa fa Alibaba Cloud con l’audio, consulta la ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">sua informativa sulla privacy</a>.',
  'privacy.speech.hosts':
    'L’app si collega solo ad Alibaba Cloud Model Studio, al nostro server (solo quando acquisti tempo) ' +
    'e ai servizi Apple (acquisti in-app, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Traduzioni con la voce di chi parla</strong> (attiva per impostazione predefinita, disattivabile nelle impostazioni): ' +
    'Alibaba Cloud imita in tempo reale la voce di chi parla a partire dallo stesso audio che traduce, seguendo chiunque stia parlando, ' +
    'cioè entrambe le persone della conversazione. Né l’app né noi raccogliamo, conserviamo o carichiamo separatamente ' +
    'alcuna impronta vocale; è lo stesso audio già inviato per la traduzione.',
  'privacy.device.title': 'Cosa resta sul tuo telefono',
  'privacy.transcripts.title': 'Trascrizioni',
  'privacy.transcripts.p':
    'Le frasi definitive vengono scritte in un file al giorno all’interno del contenitore dell’app. ' +
    '<strong>Non vengono mai caricate</strong> e sono escluse dal backup di iCloud. ' +
    'Puoi leggerle, esportarle o eliminarle da «Cronologia» nell’app; eliminando l’app vengono rimosse.',
  'privacy.account.title': 'ID account',
  'privacy.account.p':
    'L’ID account casuale descritto sopra è conservato nel portachiavi di iOS e, se Portachiavi iCloud è attivo, ' +
    'si sincronizza tra i tuoi dispositivi con lo stesso Account Apple (con crittografia end-to-end di Apple). ' +
    'Eliminare l’app non lo rimuove, quindi dopo una reinstallazione il saldo è ancora lì.',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    'Le API Key che inserisci tu sono conservate nel <strong>portachiavi</strong> di iOS, contrassegnate come leggibili ' +
    'solo su questo dispositivo e solo quando è sbloccato. Non vengono mai caricate e non passano su un altro dispositivo tramite backup.',
  'privacy.mic.title': 'Microfono',
  'privacy.mic.p':
    'Il microfono viene usato solo dopo che tocchi «Avvia». Una sessione attiva continua a registrare, tradurre e salvare le trascrizioni ' +
    'quando cambi app o blocchi lo schermo. Tocca «Ferma» per terminare l’acquisizione. ' +
    'Le interruzioni audio del sistema, come le chiamate, mettono in pausa la sessione, che riprende quando il sistema lo consente. ' +
    'L’indicatore arancione del microfono del sistema mostra quando l’acquisizione è attiva.',
  'privacy.purchase.title': 'Acquisti',
  'privacy.purchase.p':
    'Sia l’acquisto di tempo sia «Tutte le lingue» (quando usi la tua chiave) passano dagli <strong>acquisti in-app di Apple</strong>. ' +
    'Apple gestisce il pagamento dall’inizio alla fine; <strong>non riceviamo né vediamo mai</strong> il tuo metodo di pagamento, ' +
    'il tuo nome o i dati di fatturazione.',
  'privacy.purchase.credit':
    'Acquisto di tempo: l’app chiede ad Apple di registrare il tuo ID account nella transazione, poi invia la transazione, ' +
    'firmata da Apple, al nostro server per la verifica e l’accredito; il server accredita solo l’account indicato nella transazione. ' +
    'I rimborsi sono gestiti da Apple, che avvisa il nostro server di togliere il tempo corrispondente.',
  'privacy.purchase.all': '«Tutte le lingue»: l’app chiede soltanto al sistema se è stato acquistato; il nostro server non è coinvolto.',
  'privacy.delete.title': 'Accesso e cancellazione',
  'privacy.delete.p':
    'Il tuo ID account si trova nell’app in Impostazioni → Tempo rimasto, con un pulsante «Copia». ' +
    'Per vedere o cancellare ciò che il nostro server conserva su di te, invialo a <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'e cancelleremo tutti i dati di quell’account sul server (gli snapshot e la copia in un’altra sede scadono al termine ' +
    'dei rispettivi periodi di conservazione). Dopo la cancellazione il tempo rimasto non può essere ripristinato. ' +
    'I rimborsi degli acquisti vanno richiesti ad Apple.',
  'privacy.children.title': 'Minori',
  'privacy.children.p':
    'Questa app è pensata per l’interpretazione in ambito professionale e quotidiano. Non è rivolta ai minori ' +
    'e non raccoglie consapevolmente alcun dato da loro.',
  'privacy.changes.title': 'Modifiche',
  'privacy.changes.p':
    'Se questa informativa cambia in modo sostanziale, aggiorneremo la data in alto. L’app non richiede registrazione ' +
    'e non abbiamo modo di contattarti, quindi fa fede questa pagina.',
  'privacy.contact.title': 'Contatti',
  'privacy.contact.p': 'Per qualsiasi domanda sulla privacy: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
