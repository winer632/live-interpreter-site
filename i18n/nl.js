/**
 * 网站文案 · Nederlands。从三个页面的英文 HTML 翻译，键和 zh.js 一一对应；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/nl.js 里的原话。
 */
siteI18n('nl', {
  'nav.support': '← Support',
  'nav.setup': 'Een API Key aanmaken',
  'nav.privacy': 'Privacybeleid',

  // setup.html
  'setup.doc.title': 'Een Qwen API Key aanmaken · Duo Interpreter',
  'setup.title': 'Een Qwen API Key aanmaken',
  'setup.sub': 'Ongeveer tien minuten. Doe het in een browser op je computer; alleen de laatste stap gebeurt op je telefoon.',
  'setup.intro':
    'De app <strong>bevat geen vertaaltegoed</strong>. Hij maakt met je eigen account verbinding met Alibaba Cloud Model Studio, ' +
    'en Alibaba Cloud rekent je verbruik met jou af. Wat je zegt, gaat nooit via onze servers.',
  'setup.remember':
    '<strong>Twee dingen om te onthouden</strong>: bijna elke fout komt door een van beide. ' +
    'De key moet in de regio <strong>Singapore</strong> worden aangemaakt; keys uit andere regio’s werken hier niet. ' +
    'En de key wordt <strong>maar één keer volledig getoond</strong>: zodra je dat venster sluit, kun je hem niet meer terugzien.',
  'setup.s1.title': 'Maak een Alibaba Cloud-account aan',
  'setup.s1.signup':
    'Registreer je op <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Een e-mailadres is genoeg: <strong>een telefoonnummer uit het Chinese vasteland is niet nodig</strong>.',
  'setup.s1.sso': 'Je kunt ook inloggen met een Google- of GitHub-account en het formulier overslaan.',
  'setup.s1.card':
    'Voordat je diensten kunt activeren, moet je een creditcard of PayPal toevoegen. ' +
    'Dat toevoegen kost niets; je betaalt alleen voor wat je echt gebruikt.',
  'setup.s1.alt': 'Inlogpagina van Alibaba Cloud',
  'setup.s2.title': 'Zet de regio op Singapore',
  'setup.s2.p':
    'Open de Model Studio-console via <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'en controleer of er <strong>rechtsboven Singapore staat</strong> als regio. De link wijst daar al naartoe, ' +
    'maar na het inloggen kom je soms weer in een standaardregio terecht, dus kijk het even na.',
  'setup.s2.alt': 'Model Studio-console met de regio op Singapore',
  'setup.s2.caption':
    'De regio staat rechtsboven. De knop <strong>API-KEY</strong> linksonder heb je voor de volgende stap nodig; die staat niet in de hoofdnavigatie.',
  'setup.s3.title': 'Activeer Model Studio',
  'setup.s3.p':
    'Bij je eerste bezoek word je gevraagd de dienst te activeren: accepteer de voorwaarden en bevestig. ' +
    'Is je account al geactiveerd, dan zie je dit scherm niet; ga dan meteen door naar de volgende stap.',
  'setup.s4.title': 'Open de API Key-pagina',
  'setup.s4.p':
    'Klik op de knop <strong>API-KEY</strong> <strong>linksonder</strong> in de console. ' +
    'Het is een losse, pilvormige knop en geen onderdeel van de hoofdnavigatie, waardoor je hem de eerste keer makkelijk over het hoofd ziet.',
  'setup.s4.alt': 'De API Key-pagina met de knop Create API Key',
  'setup.s4.caption': 'Klik op deze pagina rechts op <strong>Create API Key</strong>.',
  'setup.s5.title': 'Maak de key aan',
  'setup.s5.p':
    'Klik op <strong>Create API Key</strong>. Kies de standaardwerkruimte, zet de rechten op <strong>All</strong>, ' +
    'laat de beschrijving gerust leeg en bevestig.',
  'setup.s5.alt': 'Het venster Create API Key',
  'setup.s6.title': 'Kopieer meteen de hele key',
  'setup.s6.copy':
    'De key begint met <code>sk-</code> en is lang: <strong>kopieer hem helemaal</strong>. ' +
    'Een key waarvan de laatste paar tekens ontbreken, faalt precies zoals een verkeerde. Gebruik de kopieerknop in het venster.',
  'setup.s6.download':
    'Het venster biedt ook <strong>Download</strong>, waarmee je de key in een bestand bewaart: veiliger dan alleen op het klembord vertrouwen.',
  'setup.s6.note':
    '<strong>Zodra dit venster dicht is, is de volledige key weg.</strong> ' +
    'Ben je hem kwijt, verwijder die key dan gewoon en maak een nieuwe aan; verder verandert er niets.',
  'setup.s6.alt': 'Het venster dat de key één keer toont, met Copy en Download',
  'setup.s6.caption': 'De key en de toegewezen domeinen zijn op deze schermafbeelding zwart gemaakt.',
  'setup.s7.title': 'Plak hem in de app en tik op ‘Test’',
  'setup.s7.p':
    'Terug op je telefoon: <strong>Instellingen → Betaalwijze</strong>, kies ‘Mijn eigen Alibaba Cloud-key gebruiken’, ' +
    'en het onderdeel <strong>Qwen API Key</strong> verschijnt. Laat de site op <strong>Internationaal · Singapore</strong> staan, ' +
    'plak de key, tik op <strong>Bewaar</strong> en daarna op <strong>Test</strong>. ' +
    'Zie je een groene melding ‘Verbonden: de key werkt’, dan ben je klaar.',
  'setup.s7.start':
    'Sluit tot slot de instellingen, kies de talen bij ‘Ik spreek’ en ‘De ander spreekt’, en begin. ' +
    'Chinees ⇄ Engels is gratis; met één aankoop van ‘Alle talen’ in de instellingen ontgrendel je de rest.',
  'setup.s7.alt': 'De instellingen van de app, met de key bewaard en de test geslaagd',
  'setup.s7.caption': 'Zo ziet het eruit als het gelukt is: de groene regel.',
  'setup.help.title': 'Als er geen verbinding komt',
  'setup.help.badKey':
    '<strong>‘Ongeldige API Key’</strong>: negen van de tien keer is de regio verkeerd. ' +
    'Controleer of de console rechtsboven Singapore aangeeft; zo niet, wissel dan van regio en <strong>maak een nieuwe key aan</strong>, ' +
    'want een key kan niet naar een andere regio worden verplaatst. Controleer ook of er bij het plakken niets van het einde is weggevallen.',
  'setup.help.forbidden':
    '<strong>‘Deze key kan het model niet aanroepen’</strong>: het account heeft Model Studio nog niet geactiveerd, ' +
    'of heeft geen bruikbaar tegoed. Kijk het na in de console.',
  'setup.help.timeout':
    '<strong>‘Time-out van de verbinding’</strong>: je telefoon kan <code>dashscope-intl.aliyuncs.com</code> niet bereiken. ' +
    'Probeer een ander netwerk, bijvoorbeeld mobiele data in plaats van de wifi op kantoor.',
  'setup.help.noKey':
    '<strong>Wil je het eerst uitproberen, of lukt het niet om een key te krijgen?</strong> Een key is niet nodig: ' +
    '<strong>Instellingen → Betaalwijze → Tijd kopen (zonder registratie)</strong>. ' +
    'Een nieuw apparaat krijgt 5 gratis minuten: tik op ‘Start’ om het te proberen; koop daarna tijd in de app en alle talen werken.',
  'setup.help.contact':
    'Kom je er nog steeds niet uit? Mail naar <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'met je apparaat, je iOS-versie en de precieze melding die de knop ‘Test’ gaf; dan gaat het veel sneller. ' +
    '<strong>Stuur ons alsjeblieft niet je key.</strong>',

  // index.html
  'index.doc.title': 'Support · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Support',
  'index.sub':
    'Tolken in twee richtingen, voor gesprekken van aangezicht tot aangezicht. ' +
    'Ondertitels en spraak terwijl je praat, en de richting wordt voor je herkend.',
  'index.trial.title': 'Probeer het met vijf gratis minuten',
  'index.trial.p':
    'Geen registratie en geen key: de eerste keer dat je de app op een nieuw apparaat opent, krijg je <strong>vijf gratis minuten</strong>, ' +
    'bovenaan in beeld. Kies ‘Ik spreek’ en ‘De ander spreekt’ boven de ondertitels, tik op ‘Start’ en praat gewoon: ' +
    'dit is echt tolken, met ondertitels en spraak terwijl je praat. ' +
    'Elk apparaat krijgt de proefperiode één keer; koop daarna tijd in de app of gebruik je eigen Alibaba Cloud-key.',
  'index.pay.title': 'Echt aan de slag',
  'index.pay.intro': 'Er zijn twee manieren om te betalen, te kiezen onder <strong>Instellingen → Betaalwijze</strong>:',
  'index.pay.credit':
    '<strong>Tolktijd kopen in de app</strong> (standaard): geen enkel account nodig; openen en aan de slag, ' +
    'met vijf gratis minuten op een nieuw apparaat. Verkrijgbaar in 1, 5 en 10 uur, voor alle talen. ' +
    'Met gesproken vertaling kost een minuut een minuut; alleen ondertitels kosten een derde.',
  'index.pay.key':
    '<strong>Je eigen Alibaba Cloud-key gebruiken</strong>: Alibaba Cloud rekent je verbruik rechtstreeks met je af. ' +
    'Chinees ⇄ Engels is dan gratis; al het andere ontgrendel je voorgoed met één aankoop van ‘Alle talen’, ' +
    'inclusief talen die later worden toegevoegd. ' +
    '<a href="./setup.html">Stapsgewijze handleiding voor een API Key →</a>',
  'index.langs.title': 'Talen',
  'index.langs.intro':
    'Kies ze in de twee kolommen boven de ondertitels: ‘Ik spreek’ links, ‘De ander spreekt’ rechts. ' +
    'Tussen deze 24 talen wordt onderling getolkt (op de paar combinaties hieronder na), en de richting wordt voor je herkend:',
  'index.langs.list':
    'Chinees, Engels, Japans, Koreaans, Duits, Frans, Spaans, Portugees, Italiaans, Russisch, Hindi, Indonesisch, Vietnamees, ' +
    'Arabisch, Thai, Turks, Filipijns, Pools, Urdu, Hebreeuws, Perzisch, Maleis, Nederlands, Bengaals',
  'index.langs.bangla':
    '<strong>Bengaals heeft alleen ondertitels</strong>: wat anderen zeggen, verschijnt in het Bengaals als tekst, niet uitgesproken; ' +
    'wie Bengaals spreekt, krijgt wel een gesproken vertaling.',
  'index.langs.unpaired':
    'Een paar combinaties ontbreken: Indonesisch met Maleis en Hindi met Urdu (mensen verstaan elkaar al), ' +
    'en Arabisch, Urdu en Perzisch onderling (hetzelfde alfabet; de app kan nog niet zien wie er spreekt).',
  'index.langs.cantonese': '<strong>Kantonees ⇄ Mandarijn</strong>: de ene kant op gesproken, de andere kant op ondertitels.',
  'index.faq.title': 'Veelgestelde vragen',
  'index.faq.sound.q': 'Geen geluid',
  'index.faq.sound.a':
    'Controleer de <strong>belsignaal/stil-schakelaar</strong> boven de volumeknoppen aan de linkerkant: oranje betekent stil. ' +
    'Controleer daarna of de spraakkeuze bovenaan niet op ‘🔇 Stem uit’ staat, en of je niet naar het Bengaals of Kantonees vertaalt: ' +
    'die hebben alleen ondertitels. Is het nog steeds stil, zet het volume dan hoger: de oorspeaker en de luidspreker hebben elk hun eigen volume.',
  'index.faq.earpiece.q': 'Privé luisteren in plaats van hardop',
  'index.faq.earpiece.a':
    'Zet de spraakkeuze bovenaan op <strong>📞 Oorspeaker</strong>; de vertaling komt dan uit de oorspeaker, ' +
    'met de telefoon tegen je oor zoals bij een gesprek. Je kunt op elk moment wisselen, ook midden in een sessie.',
  'index.faq.mic.q': '‘Het systeem heeft de microfoon losgekoppeld’',
  'index.faq.mic.a':
    'Meestal heeft een andere app de microfoon overgenomen (een telefoontje, een spraakbericht, een opname-app) ' +
    'of is een Bluetooth-headset van modus gewisseld. Stop en start opnieuw om het te herstellen. ' +
    'Gebeurt het steeds met Bluetooth, probeer dan de ingebouwde microfoon of een bedrade headset.',
  'index.faq.echo.q': 'Rondzingen of echo via de luidspreker',
  'index.faq.echo.a':
    'In één ruimte vangt de microfoon het geluid van de luidspreker weer op. ' +
    'Kies bij <strong>Instellingen → Echo-afhandeling</strong> voor ‘Mic zachter bij afspelen’ of ‘Mic dempen bij afspelen’, ' +
    'of zet gewoon het volume lager. Met de oorspeaker heb je hier helemaal geen last van.',
  'index.faq.stuck.q': 'Ondertitels worden niet meer bijgewerkt',
  'index.faq.stuck.a':
    'De balk bovenaan toont de status van de sessie. De gebruikelijke oorzaken zijn een weggevallen netwerk ' +
    'of het systeem dat de microfoon dempt; dat laatste wordt expliciet gemeld. Stoppen en opnieuw starten lost het meestal op. ' +
    'Met gekochte tijd kun je bovenaan de resterende tijd controleren; met je eigen key wordt een quotumprobleem van Alibaba Cloud ongewijzigd doorgegeven.',
  'index.faq.phone.q': 'Overstappen op een nieuwe telefoon',
  'index.faq.phone.a':
    'Gekochte tijd hoort bij je account: een willekeurige ID die de app aanmaakt en in de iCloud-sleutelhanger bewaart. ' +
    'Log op de nieuwe telefoon in met hetzelfde Apple Account, met de iCloud-sleutelhanger aan, en je saldo staat er. ' +
    '‘Alle talen’, gekocht bij gebruik van je eigen key, haal je kosteloos terug via ' +
    '<strong>Instellingen → Alle talen → Herstel aankopen</strong>.',
  'index.faq.cantonese.q': 'Waarom Kantonees ⇄ Mandarijn maar één kant op spreekt',
  'index.faq.cantonese.a':
    'Het model kan Kantonees <strong>verstaan</strong> en <strong>schrijven</strong>, maar niet <strong>spreken</strong>: ' +
    'in de talentabel van de aanbieder staat het als ‘alleen ondertitels’. Wie Kantonees spreekt, hoort dus Mandarijn; ' +
    'wie Mandarijn spreekt, krijgt alleen Kantonese ondertitels. Beide kanten gebruiken Chinese karakters, ' +
    'dus de richting kan niet automatisch worden herkend: stel die in met de richtingskeuze.',
  'index.faq.direction.q': 'De richting slaat soms om, bijvoorbeeld tussen Spaans en Portugees',
  'index.faq.direction.a':
    'Als beide talen hetzelfde alfabet gebruiken (Engels, Spaans, Portugees, Italiaans, Frans, Duits, Indonesisch, Vietnamees enzovoort), ' +
    'gaat de herkenning op woordkeus en kan die bij korte zinnen of namen twijfelen. ' +
    'Deze combinaties krijgen bovenaan een extra richtingskeuze: zet die van ‘Richting · automatisch’ op een vaste richting om hem vast te zetten.',
  'index.contact.title': 'Contact',
  'index.contact.p':
    'Vragen, suggesties en verzoeken om terugbetaling kun je allemaal mailen naar <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'meestal krijg je binnen een of twee werkdagen antwoord. Het gaat veel sneller als je je apparaat, de iOS-versie en de twee talen vermeldt, ' +
    'en of je tijd hebt gekocht of je eigen key gebruikt. ' +
    'Vermeld bij gekochte tijd ook de <strong>Account-ID</strong> die in Instellingen staat.',

  // privacy.html
  'privacy.doc.title': 'Privacybeleid · Duo Interpreter',
  'privacy.title': 'Privacybeleid',
  'privacy.sub': 'Duo Interpreter · Laatst bijgewerkt op 24 september 2026',
  'privacy.translated':
    'Dit beleid is een vertaling. Als het afwijkt van de <a href="?lang=en">Engelse versie</a>, geldt de Engelse versie.',
  'privacy.short':
    '<strong>In het kort:</strong> de app werkt op twee manieren. Standaard koop je tolktijd, zonder registratie: ' +
    'je spraak gaat rechtstreeks van je telefoon naar Alibaba Cloud Model Studio om te worden vertaald en <strong>gaat nooit via onze server</strong>; ' +
    'onze server bewaart alleen een willekeurig aangemaakt accountnummer, hoeveel tijd je hebt gekocht en hoeveel je hebt gebruikt. ' +
    'Gebruik je in plaats daarvan je eigen Alibaba Cloud-key, dan verzamelen we niets. ' +
    'Er is geen analyse, geen advertenties en geen tracking, en transcripties blijven op je telefoon.',
  'privacy.collect.title': 'Wat we verzamelen',
  'privacy.collect.intro': 'Dat hangt af van wat je hebt gekozen onder Instellingen → Betaalwijze.',
  'privacy.credit.title': 'Tijd kopen (standaard, zonder registratie)',
  'privacy.credit.intro':
    'Om bij te houden hoeveel tijd je hebt gekocht en om misbruik te voorkomen, communiceert de app met onze server ' +
    '<code>api.duo-interpreter.com</code> (gehost op Microsoft Azure in Singapore). De server bewaart:',
  'privacy.credit.id':
    '<strong>Een willekeurige account-ID</strong>: een nummer (een UUID) dat de app aanmaakt de eerste keer dat je hem gebruikt. ' +
    'Dit nummer heeft niets te maken met je naam, e-mailadres, telefoonnummer of Apple Account. ' +
    'Het wordt bewaard in je iCloud-sleutelhanger, zodat je saldo een herinstallatie overleeft en met je meegaat naar een nieuwe telefoon met hetzelfde Apple Account.',
  'privacy.credit.device':
    '<strong>Apparaatreferenties</strong>: per apparaat de ID en de openbare sleutel van een Apple App Attest-sleutel, ' +
    'met wanneer die is geregistreerd en voor het laatst is gebruikt. ' +
    'Daarmee wordt aangetoond dat verzoeken van een echte kopie van deze app komen en niet van een aangepaste versie.',
  'privacy.credit.purchases':
    '<strong>Aankopen</strong>: de transactie-ID van Apple, het product (1, 5 of 10 uur), wanneer het is gekocht, ' +
    'of het een testaankoop (sandbox) was en of het is terugbetaald.',
  'privacy.credit.usage':
    '<strong>Gebruik</strong>: wanneer elke tolksessie begon en eindigde, de modus (gesproken vertaling of alleen ondertitels), ' +
    'hoeveel tijd die heeft gebruikt, hoeveel tijdelijke sleutels die heeft opgevraagd, en elke wijziging in je saldo.',
  'privacy.credit.trial':
    '<strong>De proefperiode van 5 minuten</strong> wordt één keer per apparaat gegeven. Om herhaald claimen te voorkomen, ' +
    'geeft de app de server een eenmalig Apple DeviceCheck-token; daarmee vraagt de server Apple om één bit te controleren en daarna in te stellen, ' +
    'die Apple namens ons voor dit apparaat bewaart (‘proefperiode gebruikt’). ' +
    'Het token wordt één keer gebruikt en niet opgeslagen, en Apple bewaart voor ons alleen die ene bit, zonder ons te vertellen om welk apparaat het gaat.',
  'privacy.credit.never':
    'De server <strong>ontvangt nooit</strong> je spraak, ondertitels of vertalingen, je naam, e-mailadres, telefoonnummer, ' +
    'locatie of contacten, of je betaalgegevens.',
  'privacy.key.title': 'Je eigen Alibaba Cloud-key gebruiken',
  'privacy.key.p': 'In deze modus maakt de app geen contact met onze server en <strong>verzamelen we niets</strong>.',
  'privacy.both.title': 'In beide gevallen',
  'privacy.both.p':
    'De app bevat geen analyse-, advertentie- of trackingsoftware van derden. Wij doen niet aan analyse of advertenties, ' +
    'volgen je niet over apps of websites heen en verkopen of delen geen gegevens.',
  'privacy.logs.title': 'Serverlogs en bewaartermijnen',
  'privacy.logs.ip':
    'Je IP-adres wordt alleen in het geheugen gebruikt om het aantal verzoeken te beperken (tegen misbruik) ' +
    'en wordt een uur na je laatste verzoek gewist; het wordt niet gelogd of opgeslagen. ' +
    'Serverlogs registreren alleen gebeurtenissen, zoals ‘een apparaat is geregistreerd’ (met alleen de eerste 8 tekens van de account-ID), ' +
    '‘een aankoop is bijgeschreven’ (het product en of het een testaankoop was), ‘een terugbetaling is verwerkt’ (de transactie-ID), en fouten. ' +
    'Serverlogs worden na 30 dagen automatisch verwijderd.',
  'privacy.logs.ledger':
    'Van het grootboek wordt elk uur een snapshot op de server gemaakt, waarvan de laatste 48 worden bewaard, ' +
    'en een versleutelde kopie wordt 30 dagen extern bewaard. ' +
    'Account-, aankoop- en gebruiksgegevens worden bewaard zolang het account bestaat, ' +
    'omdat ze nodig zijn om de boekhouding sluitend te maken en terugbetalingen van Apple af te handelen.',
  'privacy.speech.title': 'Waar je spraak naartoe gaat',
  'privacy.speech.intro':
    'In beide modi gaat het geluid van je microfoon <strong>live en rechtstreeks van je telefoon naar Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Het gaat nooit via onze server; wij kunnen het niet horen en hebben niets te bewaren:',
  'privacy.speech.credit':
    'Als je tijd koopt, maakt de app via ons Alibaba Cloud-account verbinding met <code>dashscope-intl.aliyuncs.com</code> (Singapore): ' +
    'onze server geeft de app alleen een tijdelijke sleutel die na 60 seconden verloopt, ' +
    'en het geluid wordt verwerkt onder onze overeenkomst met Alibaba Cloud.',
  'privacy.speech.key':
    'Met je eigen key maakt de app met jouw key verbinding met de site die je in de instellingen hebt gekozen ' +
    '(<code>dashscope-intl.aliyuncs.com</code> of <code>dashscope.aliyuncs.com</code>), ' +
    'en het geluid wordt verwerkt onder <strong>jouw</strong> overeenkomst met Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Wat Alibaba Cloud met het geluid doet, lees je in ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">hun privacybeleid</a>.',
  'privacy.speech.hosts':
    'De app maakt alleen verbinding met Alibaba Cloud Model Studio, onze server (alleen als je tijd koopt) ' +
    'en diensten van Apple (in-app-aankopen, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Vertaling in de stem van de spreker</strong> (standaard aan, uit te zetten in de instellingen): ' +
    'Alibaba Cloud bootst de stem van de spreker live na op basis van hetzelfde geluid dat het vertaalt, ' +
    'en volgt daarbij wie er op dat moment spreekt, dus beide mensen in een gesprek. ' +
    'Noch de app, noch wij verzamelen, bewaren of uploaden apart een stemafdruk; het is hetzelfde geluid dat al voor de vertaling wordt verstuurd.',
  'privacy.device.title': 'Wat op je telefoon blijft',
  'privacy.transcripts.title': 'Transcripties',
  'privacy.transcripts.p':
    'Afgeronde regels worden weggeschreven naar één bestand per dag in de eigen container van de app. ' +
    'Ze worden <strong>nooit geüpload</strong> en worden uitgesloten van de iCloud-reservekopie. ' +
    'Je kunt ze lezen, exporteren of verwijderen via ‘Geschiedenis’ in de app; als je de app verwijdert, worden ze ook verwijderd.',
  'privacy.account.title': 'Account-ID',
  'privacy.account.p':
    'De hierboven beschreven willekeurige account-ID wordt bewaard in de iOS-sleutelhanger en wordt, als de iCloud-sleutelhanger aanstaat, ' +
    'gesynchroniseerd tussen je apparaten met hetzelfde Apple Account (end-to-end versleuteld door Apple). ' +
    'Als je de app verwijdert, blijft de ID bestaan, zodat je saldo er na een herinstallatie nog is.',
  'privacy.apikey.title': 'API Keys',
  'privacy.apikey.p':
    'De API Keys die je zelf invoert, worden bewaard in de iOS-<strong>sleutelhanger</strong>, ' +
    'gemarkeerd als alleen leesbaar op dit apparaat en alleen als het ontgrendeld is. ' +
    'Ze worden nooit geüpload en gaan via een reservekopie niet mee naar een ander apparaat.',
  'privacy.mic.title': 'Microfoon',
  'privacy.mic.p':
    'De microfoon wordt pas gebruikt nadat je op ‘Start’ hebt getikt. ' +
    'Een actieve sessie blijft opnemen, vertalen en transcripties bewaren als je van app wisselt of het scherm vergrendelt. ' +
    'Tik op ‘Stop’ om de opname te beëindigen. Audio-onderbrekingen door het systeem, zoals telefoontjes, pauzeren de sessie; ' +
    'die gaat verder zodra het systeem het toestaat. De oranje microfoonindicator van het systeem laat zien wanneer er wordt opgenomen.',
  'privacy.purchase.title': 'Aankopen',
  'privacy.purchase.p':
    'Tijd kopen en ‘Alle talen’ (bij gebruik van je eigen key) lopen allebei via <strong>in-app-aankopen van Apple</strong>. ' +
    'Apple handelt de betaling volledig af; wij <strong>ontvangen of zien nooit</strong> je betaalmethode, naam of factuurgegevens.',
  'privacy.purchase.credit':
    'Tijd kopen: de app vraagt Apple om je account-ID in de transactie vast te leggen en stuurt de door Apple ondertekende transactie daarna ' +
    'naar onze server om te controleren en bij te schrijven; de server schrijft alleen tijd bij op het account dat in de transactie staat. ' +
    'Terugbetalingen worden door Apple afgehandeld; Apple laat het onze server weten, zodat die de tijd terugneemt.',
  'privacy.purchase.all': '‘Alle talen’: de app vraagt alleen aan het systeem of dit is gekocht; onze server komt er niet aan te pas.',
  'privacy.delete.title': 'Inzage en verwijdering',
  'privacy.delete.p':
    'Je account-ID staat in de app onder Instellingen → Resterende tijd, met een knop Kopieer. ' +
    'Wil je zien of verwijderen wat onze server over je bewaart, stuur die ID dan naar ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a>; we verwijderen dan alle gegevens van dat account op de server ' +
    '(snapshots en de externe kopie verlopen na hun bewaartermijn). ' +
    'Resterende tijd kan na verwijdering niet worden hersteld. Terugbetalingen voor aankopen vraag je aan bij Apple.',
  'privacy.children.title': 'Kinderen',
  'privacy.children.p':
    'Deze app is bedoeld voor tolken in zakelijke en alledaagse situaties. Hij is niet op kinderen gericht en verzamelt niet bewust iets van hen.',
  'privacy.changes.title': 'Wijzigingen',
  'privacy.changes.p':
    'Als dit beleid wezenlijk verandert, passen we de datum bovenaan aan. ' +
    'De app heeft geen registratie en we kunnen je op geen enkele manier bereiken, dus deze pagina is leidend.',
  'privacy.contact.title': 'Contact',
  'privacy.contact.p': 'Vragen over privacy: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
