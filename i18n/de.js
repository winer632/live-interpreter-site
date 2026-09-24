/**
 * 网站文案 · Deutsch。从三个页面的英文 HTML 翻译，键和 zh.js 一一对应；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/de.js 里的原话。
 */
siteI18n('de', {
  'nav.support': '← Support',
  'nav.setup': 'API Key erstellen',
  'nav.privacy': 'Datenschutzerklärung',

  // setup.html
  'setup.doc.title': 'Qwen API Key erstellen · Duo Interpreter',
  'setup.title': 'Qwen API Key erstellen',
  'setup.sub': 'Dauert etwa zehn Minuten. Am besten im Browser am Computer; nur der letzte Schritt findet auf dem iPhone statt.',
  'setup.intro':
    'Die App <strong>enthält kein Übersetzungsguthaben</strong>. Sie verbindet sich mit deinem eigenen Konto bei Alibaba Cloud Model Studio, ' +
    'und Alibaba Cloud rechnet deinen Verbrauch direkt mit dir ab. Was du sagst, läuft nie über unsere Server.',
  'setup.remember':
    '<strong>Zwei Dinge solltest du dir merken</strong> – fast jeder Fehler geht auf eines davon zurück. ' +
    'Der Key muss in der Region <strong>Singapur (Singapore)</strong> erstellt werden; Keys aus anderen Regionen funktionieren hier nicht. ' +
    'Und der Key wird <strong>nur ein einziges Mal vollständig angezeigt</strong> – sobald du den Dialog schließt, lässt er sich nicht mehr abrufen.',
  'setup.s1.title': 'Konto bei Alibaba Cloud anlegen',
  'setup.s1.signup':
    'Registriere dich auf <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Eine E-Mail-Adresse genügt – <strong>eine Telefonnummer aus Festlandchina ist nicht nötig</strong>.',
  'setup.s1.sso': 'Du kannst dich auch mit einem Google- oder GitHub-Konto anmelden und dir das Formular sparen.',
  'setup.s1.card':
    'Bevor sich Dienste aktivieren lassen, musst du eine Kreditkarte oder PayPal hinterlegen. ' +
    'Das Hinterlegen kostet nichts; abgerechnet wird nur die tatsächliche Nutzung.',
  'setup.s1.alt': 'Anmeldeseite von Alibaba Cloud',
  'setup.s2.title': 'Region auf Singapur umstellen',
  'setup.s2.p':
    'Öffne die Model Studio-Konsole unter <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'und prüfe, ob <strong>oben rechts als Region Singapore steht</strong>. Der Link führt bereits dorthin, ' +
    'aber nach der Anmeldung landest du manchmal wieder in einer Standardregion – ein kurzer Blick lohnt sich.',
  'setup.s2.alt': 'Model Studio-Konsole mit der Region Singapore',
  'setup.s2.caption':
    'Die Region steht oben rechts. Die Schaltfläche <strong>API-KEY</strong> unten links ist dein nächstes Ziel – sie gehört nicht zur Hauptnavigation.',
  'setup.s3.title': 'Model Studio aktivieren',
  'setup.s3.p':
    'Beim ersten Besuch wirst du aufgefordert, den Dienst zu aktivieren: Bedingungen akzeptieren und bestätigen. ' +
    'Ist dein Konto bereits aktiviert, erscheint dieser Bildschirm nicht – dann geht es direkt mit dem nächsten Schritt weiter.',
  'setup.s4.title': 'Seite „API Key“ öffnen',
  'setup.s4.p':
    'Klicke <strong>unten links</strong> in der Konsole auf die Schaltfläche <strong>API-KEY</strong>. ' +
    'Sie ist eine eigene, pillenförmige Schaltfläche und kein Eintrag der Hauptnavigation – beim ersten Mal übersieht man sie leicht.',
  'setup.s4.alt': 'Die Seite „API Key“ mit der Schaltfläche Create API Key',
  'setup.s4.caption': 'Auf dieser Seite klickst du rechts auf <strong>Create API Key</strong>.',
  'setup.s5.title': 'Key erstellen',
  'setup.s5.p':
    'Klicke auf <strong>Create API Key</strong>. Wähle den Standard-Workspace, setze die Berechtigungen auf <strong>All</strong>, ' +
    'lass die Beschreibung ruhig leer und bestätige.',
  'setup.s5.alt': 'Der Dialog „Create API Key“',
  'setup.s6.title': 'Sofort den ganzen Key kopieren',
  'setup.s6.copy':
    'Der Key beginnt mit <code>sk-</code> und ist lang – <strong>kopiere ihn vollständig</strong>. ' +
    'Fehlen am Ende ein paar Zeichen, schlägt er genauso fehl wie ein falscher Key. Nimm am besten die Kopieren-Schaltfläche im Dialog.',
  'setup.s6.download':
    'Der Dialog bietet außerdem <strong>Download</strong> an: Damit wird der Key in einer Datei gespeichert – sicherer, als sich nur auf die Zwischenablage zu verlassen.',
  'setup.s6.note':
    '<strong>Sobald dieser Dialog geschlossen ist, ist der vollständige Key weg.</strong> ' +
    'Hast du ihn verloren, lösch den Key einfach und erstelle einen neuen – sonst ändert sich nichts.',
  'setup.s6.alt': 'Der Dialog, der den Key einmalig anzeigt, mit Copy und Download',
  'setup.s6.caption': 'Der Key und die dedizierten Domains sind auf diesem Screenshot geschwärzt.',
  'setup.s7.title': 'In die App einfügen und auf „Testen“ tippen',
  'setup.s7.p':
    'Zurück am iPhone: <strong>Einstellungen → Bezahlung</strong>, wähle „Eigenen Alibaba Cloud Key nutzen“, ' +
    'dann erscheint der Abschnitt <strong>Qwen API Key</strong>. Lass die Auswahl auf <strong>International · Singapur</strong>, ' +
    'füge den Key ein, tippe auf <strong>Sichern</strong> und dann auf <strong>Testen</strong>. ' +
    'Ein grünes „Verbunden – der Key funktioniert“ heißt: fertig.',
  'setup.s7.start':
    'Schließ zum Schluss die Einstellungen, wähle die Sprachen unter „Ich spreche“ und „Gegenüber spricht“ und leg los. ' +
    'Chinesisch ⇄ Englisch ist kostenlos; ein einziger Kauf von „Alle Sprachen“ in den Einstellungen schaltet den Rest frei.',
  'setup.s7.alt': 'Die App-Einstellungen mit gesichertem Key und bestandenem Test',
  'setup.s7.caption': 'So sieht Erfolg aus: die grüne Zeile.',
  'setup.help.title': 'Wenn keine Verbindung zustande kommt',
  'setup.help.badKey':
    '<strong>„Ungültiger API Key“</strong> – in neun von zehn Fällen stimmt die Region nicht. ' +
    'Prüfe, ob in der Konsole oben rechts Singapore steht; falls nicht, wechsle die Region und <strong>erstelle einen neuen Key</strong>, ' +
    'denn ein Key lässt sich nicht in eine andere Region übertragen. Achte außerdem darauf, dass beim Einfügen am Ende nichts abgeschnitten wurde.',
  'setup.help.forbidden':
    '<strong>„Dieser Key darf das Modell nicht aufrufen“</strong> – das Konto hat Model Studio noch nicht aktiviert ' +
    'oder hat kein nutzbares Guthaben. Prüfe das in der Konsole.',
  'setup.help.timeout':
    '<strong>„Zeitüberschreitung der Verbindung“</strong> – das iPhone erreicht <code>dashscope-intl.aliyuncs.com</code> nicht. ' +
    'Versuch es in einem anderen Netz, zum Beispiel über Mobilfunk statt über das WLAN im Büro.',
  'setup.help.noKey':
    '<strong>Willst du es erst ausprobieren, oder bekommst du keinen Key?</strong> Dann brauchst du keinen: ' +
    '<strong>Einstellungen → Bezahlung → Zeit kaufen (ohne Registrierung)</strong>. ' +
    'Ein neues Gerät bekommt 5 Gratisminuten – tippe auf „Starten“, um es auszuprobieren; danach kaufst du Zeit in der App, und alle Sprachen funktionieren.',
  'setup.help.contact':
    'Kommst du trotzdem nicht weiter? Schreib an <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'und nenne Gerät, iOS-Version und den genauen Wortlaut der Meldung, die „Testen“ angezeigt hat – dann geht es viel schneller. ' +
    '<strong>Bitte schick uns nicht deinen Key.</strong>',

  // index.html
  'index.doc.title': 'Support · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Support',
  'index.sub':
    'Dolmetschen in beide Richtungen für Gespräche von Angesicht zu Angesicht. ' +
    'Untertitel und Sprachausgabe entstehen, während ihr sprecht, und die Richtung erkennt die App von selbst.',
  'index.trial.title': 'Mit fünf Gratisminuten ausprobieren',
  'index.trial.p':
    'Keine Registrierung, kein Key: Wenn du die App auf einem neuen Gerät zum ersten Mal öffnest, bekommst du <strong>fünf Gratisminuten</strong>, ' +
    'oben angezeigt. Wähle über den Untertiteln „Ich spreche“ und „Gegenüber spricht“, tippe auf „Starten“ und sprich einfach los – ' +
    'das ist echtes Dolmetschen, mit Untertiteln und Sprachausgabe in Echtzeit. ' +
    'Jedes Gerät kann die Testphase einmal nutzen; danach kaufst du Zeit in der App oder nutzt deinen eigenen Alibaba Cloud Key.',
  'index.pay.title': 'Dauerhaft nutzen',
  'index.pay.intro': 'Es gibt zwei Bezahlwege, auswählbar unter <strong>Einstellungen → Bezahlung</strong>:',
  'index.pay.credit':
    '<strong>Dolmetschzeit in der App kaufen</strong> (Standard) – ganz ohne Konto: App öffnen und loslegen, ' +
    'auf einem neuen Gerät mit fünf Gratisminuten. Erhältlich mit 1, 5 oder 10 Stunden und für alle Sprachen gültig. ' +
    'Mit Sprachausgabe kostet eine Minute eine Minute; nur Untertitel kosten ein Drittel.',
  'index.pay.key':
    '<strong>Eigenen Alibaba Cloud Key nutzen</strong> – Alibaba Cloud rechnet deinen Verbrauch direkt mit dir ab. ' +
    'Chinesisch ⇄ Englisch ist dann kostenlos; alles andere schaltest du mit einem einzigen Kauf von „Alle Sprachen“ dauerhaft frei, ' +
    'auch Sprachen, die später dazukommen. ' +
    '<a href="./setup.html">Schritt-für-Schritt-Anleitung zum API Key →</a>',
  'index.langs.title': 'Sprachen',
  'index.langs.intro':
    'Du wählst sie in den beiden Spalten über den Untertiteln: links „Ich spreche“, rechts „Gegenüber spricht“. ' +
    'Diese 24 Sprachen lassen sich untereinander dolmetschen (bis auf die wenigen unten aufgeführten Kombinationen), ' +
    'und die Richtung erkennt die App von selbst:',
  'index.langs.list':
    'Chinesisch, Englisch, Japanisch, Koreanisch, Deutsch, Französisch, Spanisch, Portugiesisch, Italienisch, Russisch, Hindi, ' +
    'Indonesisch, Vietnamesisch, Arabisch, Thailändisch, Türkisch, Filipino, Polnisch, Urdu, Hebräisch, Persisch, Malaiisch, ' +
    'Niederländisch, Bengalisch',
  'index.langs.bangla':
    '<strong>Bengalisch gibt es nur als Untertitel</strong>: Was andere sagen, erscheint auf Bengalisch als Text, ohne Sprachausgabe; ' +
    'wer Bengalisch spricht, bekommt trotzdem eine gesprochene Übersetzung.',
  'index.langs.unpaired':
    'Einige Kombinationen fehlen: Indonesisch mit Malaiisch und Hindi mit Urdu (man versteht sich ohnehin) ' +
    'sowie Arabisch, Urdu und Persisch untereinander (dasselbe Alphabet; die App kann noch nicht erkennen, wer spricht).',
  'index.langs.cantonese': '<strong>Kantonesisch ⇄ Hochchinesisch</strong> – in die eine Richtung gesprochen, in die andere als Untertitel.',
  'index.faq.title': 'Häufige Fragen',
  'index.faq.sound.q': 'Kein Ton',
  'index.faq.sound.a':
    'Prüfe den <strong>Schalter „Klingeln/Aus“</strong> über den Lautstärketasten am linken Rand – ist Orange zu sehen, ist das iPhone stumm. ' +
    'Stell dann sicher, dass die Sprachausgabe oben nicht auf „🔇 Stimme aus“ steht und dass du nicht ins Bengalische oder Kantonesische übersetzt – ' +
    'dafür gibt es nur Untertitel. Ist es immer noch still, dreh die Lautstärke hoch: Hörmuschel und Lautsprecher haben getrennte Lautstärken.',
  'index.faq.earpiece.q': 'Privat mithören statt über den Lautsprecher',
  'index.faq.earpiece.a':
    'Stell die Sprachausgabe oben auf <strong>📞 Hörmuschel</strong>, dann kommt die Übersetzung aus der Hörmuschel – ' +
    'du hältst das iPhone ans Ohr wie beim Telefonieren. Du kannst jederzeit umschalten, auch mitten in einer Sitzung.',
  'index.faq.mic.q': '„Das System hat das Mikrofon getrennt“',
  'index.faq.mic.a':
    'Meist hat eine andere App das Mikrofon übernommen – ein Anruf, eine Sprachnachricht, eine Aufnahme-App – ' +
    'oder ein Bluetooth-Headset hat den Modus gewechselt. Stoppe und starte neu, dann läuft es wieder. ' +
    'Passiert das mit Bluetooth immer wieder, nimm das eingebaute Mikrofon oder ein kabelgebundenes Headset.',
  'index.faq.echo.q': 'Rückkopplung oder Echo über den Lautsprecher',
  'index.faq.echo.a':
    'Im selben Raum nimmt das Mikrofon die Ausgabe des Lautsprechers wieder auf. ' +
    'Wähle unter <strong>Einstellungen → Echo-Behandlung</strong> „Mikro leiser bei Wiedergabe“ oder „Mikro stumm bei Wiedergabe“, ' +
    'oder stell einfach die Lautstärke leiser. Mit der Hörmuschel tritt das Problem gar nicht erst auf.',
  'index.faq.stuck.q': 'Die Untertitel bleiben stehen',
  'index.faq.stuck.a':
    'Die Leiste oben zeigt den Zustand der Sitzung. Die üblichen Ursachen sind ein Netzwerkabbruch oder ein vom System stummgeschaltetes Mikrofon – ' +
    'das wird ausdrücklich gemeldet. Stoppen und neu starten behebt es normalerweise. ' +
    'Mit gekaufter Zeit wirf oben einen Blick auf die Restzeit; mit eigenem Key wird ein Kontingentproblem von Alibaba Cloud unverändert angezeigt.',
  'index.faq.phone.q': 'Umzug auf ein neues iPhone',
  'index.faq.phone.a':
    'Gekaufte Zeit gehört zu deinem Konto – einer zufälligen ID, die die App erstellt und im iCloud-Schlüsselbund aufbewahrt: ' +
    'Melde dich auf dem neuen iPhone mit demselben Apple Account an und schalte den iCloud-Schlüsselbund ein, dann ist das Guthaben da. ' +
    '„Alle Sprachen“, gekauft bei Nutzung mit eigenem Key, holst du unter <strong>Einstellungen → Alle Sprachen → Käufe wiederherstellen</strong> kostenlos zurück.',
  'index.faq.cantonese.q': 'Warum Kantonesisch ⇄ Hochchinesisch nur in eine Richtung spricht',
  'index.faq.cantonese.a':
    'Das Modell kann Kantonesisch <strong>verstehen</strong> und <strong>schreiben</strong>, aber nicht <strong>sprechen</strong> – ' +
    'in der Sprachtabelle des Anbieters ist es als „nur Untertitel“ geführt. Wer Kantonesisch spricht, hört also Hochchinesisch; ' +
    'wer Hochchinesisch spricht, bekommt nur kantonesische Untertitel. Beide Seiten schreiben mit chinesischen Schriftzeichen, ' +
    'daher lässt sich die Richtung nicht automatisch erkennen – leg sie mit der Richtungsauswahl fest.',
  'index.faq.direction.q': 'Die Richtung kippt gelegentlich, z. B. zwischen Spanisch und Portugiesisch',
  'index.faq.direction.a':
    'Wenn beide Sprachen dasselbe Alphabet nutzen (Englisch, Spanisch, Portugiesisch, Italienisch, Französisch, Deutsch, Indonesisch, Vietnamesisch usw.), ' +
    'erfolgt die Erkennung anhand der Wortwahl und kann bei kurzen Sätzen oder Namen schwanken. ' +
    'Für diese Kombinationen gibt es oben eine zusätzliche Richtungsauswahl – stell sie von „Richtung · automatisch“ auf eine feste Richtung, um sie festzulegen.',
  'index.contact.title': 'Kontakt',
  'index.contact.p':
    'Fragen, Vorschläge und Anfragen zu Erstattungen gehen an <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'die Antwort kommt meist innerhalb von ein bis zwei Werktagen. Es geht deutlich schneller, wenn du Gerät, iOS-Version und die beiden Sprachen nennst ' +
    'und dazuschreibst, ob du Zeit gekauft hast oder deinen eigenen Key nutzt. ' +
    'Bei gekaufter Zeit gib bitte die <strong>Konto-ID</strong> aus den Einstellungen mit an.',

  // privacy.html
  'privacy.doc.title': 'Datenschutzerklärung · Duo Interpreter',
  'privacy.title': 'Datenschutzerklärung',
  'privacy.sub': 'Duo Interpreter · Zuletzt aktualisiert am 24. September 2026',
  'privacy.translated':
    'Diese Erklärung ist eine Übersetzung. Weicht sie von der <a href="?lang=en">englischen Fassung</a> ab, gilt die englische Fassung.',
  'privacy.short':
    '<strong>Kurz gesagt:</strong> Die App funktioniert auf zwei Arten. Standardmäßig kaufst du Dolmetschzeit, ohne Registrierung: ' +
    'Deine Sprache geht zur Übersetzung direkt von deinem iPhone an Alibaba Cloud Model Studio und <strong>läuft nie über unseren Server</strong>; ' +
    'unser Server speichert nur eine zufällig erzeugte Kontonummer sowie wie viel Zeit du gekauft und wie viel du verbraucht hast. ' +
    'Nutzt du stattdessen deinen eigenen Alibaba Cloud Key, erfassen wir gar nichts. ' +
    'Es gibt keine Analyse, keine Werbung und kein Tracking, und Transkripte bleiben auf deinem iPhone.',
  'privacy.collect.title': 'Was wir erfassen',
  'privacy.collect.intro': 'Das hängt davon ab, was du unter Einstellungen → Bezahlung gewählt hast.',
  'privacy.credit.title': 'Zeit kaufen (Standard, ohne Registrierung)',
  'privacy.credit.intro':
    'Damit festgehalten wird, wie viel Zeit du gekauft hast, und um Missbrauch zu verhindern, kommuniziert die App mit unserem Server ' +
    '<code>api.duo-interpreter.com</code> (gehostet bei Microsoft Azure in Singapur). Der Server speichert:',
  'privacy.credit.id':
    '<strong>Eine zufällige Konto-ID</strong>: eine Nummer (eine UUID), die die App bei der ersten Nutzung erzeugt. ' +
    'Sie hat nichts mit deinem Namen, deiner E-Mail-Adresse, deiner Telefonnummer oder deinem Apple Account zu tun. ' +
    'Sie liegt in deinem iCloud-Schlüsselbund, sodass dein Guthaben Neuinstallationen übersteht und dich auf neue iPhones mit demselben Apple Account begleitet.',
  'privacy.credit.device':
    '<strong>Geräteanmeldedaten</strong>: für jedes Gerät die Kennung und der öffentliche Schlüssel eines Schlüssels von Apple App Attest, ' +
    'dazu wann er registriert und zuletzt verwendet wurde. Sie belegen, dass Anfragen von einer echten Kopie dieser App stammen und nicht von einer veränderten.',
  'privacy.credit.purchases':
    '<strong>Käufe</strong>: die Transaktions-ID von Apple, das Produkt (1, 5 oder 10 Stunden), der Kaufzeitpunkt, ' +
    'ob es ein Testkauf (Sandbox) war und ob er erstattet wurde.',
  'privacy.credit.usage':
    '<strong>Nutzung</strong>: wann jede Dolmetschsitzung begonnen und geendet hat, ihr Modus (Sprachausgabe oder nur Untertitel), ' +
    'wie viel Zeit sie verbraucht hat, wie viele temporäre Schlüssel sie angefordert hat, und jede Änderung deines Guthabens.',
  'privacy.credit.trial':
    '<strong>Die 5-minütige Testphase</strong> gibt es einmal pro Gerät. Um wiederholtes Einlösen zu verhindern, übergibt die App dem Server ' +
    'ein einmaliges Token von Apple DeviceCheck; damit bittet der Server Apple, ein einzelnes Bit zu prüfen und dann zu setzen, ' +
    'das Apple in unserem Auftrag für dieses Gerät speichert („Testphase genutzt“). Das Token wird einmal verwendet und nicht gespeichert, ' +
    'und Apple speichert für uns nur dieses eine Bit, ohne uns mitzuteilen, um welches Gerät es sich handelt.',
  'privacy.credit.never':
    'Der Server <strong>erhält niemals</strong> deine Sprache, Untertitel oder Übersetzungen, deinen Namen, deine E-Mail-Adresse, ' +
    'Telefonnummer, deinen Standort oder deine Kontakte und auch nicht deine Zahlungsdaten.',
  'privacy.key.title': 'Eigenen Alibaba Cloud Key nutzen',
  'privacy.key.p': 'In diesem Modus kontaktiert die App unseren Server nicht, und <strong>wir erfassen nichts</strong>.',
  'privacy.both.title': 'In beiden Fällen',
  'privacy.both.p':
    'Die App enthält keine Analyse-, Werbe- oder Tracking-Komponenten von Drittanbietern. Wir betreiben keine Analyse und keine Werbung, ' +
    'verfolgen dich nicht über Apps oder Websites hinweg und verkaufen oder teilen keinerlei Daten.',
  'privacy.logs.title': 'Serverprotokolle und Aufbewahrung',
  'privacy.logs.ip':
    'Deine IP-Adresse wird nur im Arbeitsspeicher verwendet, um die Anfragerate zu begrenzen (gegen Missbrauch), ' +
    'und eine Stunde nach deiner letzten Anfrage verworfen; sie wird weder protokolliert noch gespeichert. ' +
    'Serverprotokolle erfassen nur Ereignisse, etwa „ein Gerät wurde registriert“ (nur mit den ersten 8 Zeichen der Konto-ID), ' +
    '„ein Kauf wurde gutgeschrieben“ (das Produkt und ob es ein Testkauf war), „eine Erstattung wurde verbucht“ (die Transaktions-ID) sowie Fehler. ' +
    'Serverprotokolle werden nach 30 Tagen automatisch gelöscht.',
  'privacy.logs.ledger':
    'Von den Buchungsdaten wird auf dem Server stündlich ein Snapshot erstellt, die letzten 48 bleiben erhalten, ' +
    'und eine verschlüsselte Kopie wird 30 Tage lang an einem externen Standort aufbewahrt. ' +
    'Konto-, Kauf- und Nutzungsdaten werden aufbewahrt, solange das Konto besteht, ' +
    'weil sie für die Abstimmung der Buchhaltung und die Abwicklung von Erstattungen durch Apple benötigt werden.',
  'privacy.speech.title': 'Wohin deine Sprache geht',
  'privacy.speech.intro':
    'In beiden Modi geht der Ton deines Mikrofons <strong>live und direkt von deinem iPhone an Alibaba Cloud Model Studio</strong> (Qwen LiveTranslate). ' +
    'Er läuft nie über unseren Server; wir können ihn nicht hören und haben nichts, was wir speichern könnten:',
  'privacy.speech.credit':
    'Wenn du Zeit kaufst, verbindet sich die App über unser Konto bei Alibaba Cloud mit <code>dashscope-intl.aliyuncs.com</code> (Singapur): ' +
    'Unser Server stellt der App nur einen temporären Schlüssel aus, der nach 60 Sekunden abläuft, ' +
    'und der Ton wird im Rahmen unserer Vereinbarung mit Alibaba Cloud verarbeitet.',
  'privacy.speech.key':
    'Mit deinem eigenen Key verbindet sich die App mit dem Server, den du in den Einstellungen gewählt hast ' +
    '(<code>dashscope-intl.aliyuncs.com</code> oder <code>dashscope.aliyuncs.com</code>), und zwar mit deinem Key; ' +
    'der Ton wird im Rahmen <strong>deiner</strong> Vereinbarung mit Alibaba Cloud verarbeitet.',
  'privacy.speech.alibaba':
    'Was Alibaba Cloud mit dem Ton macht, steht in ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">deren Datenschutzerklärung</a>.',
  'privacy.speech.hosts':
    'Die App verbindet sich nur mit Alibaba Cloud Model Studio, mit unserem Server (nur wenn du Zeit kaufst) ' +
    'und mit Diensten von Apple (In-App-Kauf, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Übersetzung mit der Stimme der sprechenden Person</strong> (standardmäßig an, in den Einstellungen abschaltbar): ' +
    'Alibaba Cloud ahmt die Stimme der sprechenden Person live anhand desselben Tons nach, den es übersetzt, ' +
    'und folgt dabei jeweils der Person, die gerade spricht – also beiden Gesprächspartnern. ' +
    'Weder die App noch wir erfassen, speichern oder übertragen separat einen Stimmabdruck; es ist derselbe Ton, der ohnehin zur Übersetzung gesendet wird.',
  'privacy.device.title': 'Was auf deinem iPhone bleibt',
  'privacy.transcripts.title': 'Transkripte',
  'privacy.transcripts.p':
    'Fertige Zeilen werden in eine Datei pro Tag im eigenen Container der App geschrieben. ' +
    'Sie werden <strong>nie hochgeladen</strong> und sind vom iCloud-Backup ausgeschlossen. ' +
    'Du kannst sie in der App unter „Verlauf“ lesen, exportieren oder löschen; wenn du die App löschst, werden sie entfernt.',
  'privacy.account.title': 'Konto-ID',
  'privacy.account.p':
    'Die oben beschriebene zufällige Konto-ID liegt im iOS-Schlüsselbund und wird bei eingeschaltetem iCloud-Schlüsselbund ' +
    'zwischen deinen Geräten mit demselben Apple Account synchronisiert (von Apple Ende-zu-Ende-verschlüsselt). ' +
    'Beim Löschen der App wird sie nicht entfernt, daher ist dein Guthaben nach einer Neuinstallation noch da.',
  'privacy.apikey.title': 'API Keys',
  'privacy.apikey.p':
    'Die API Keys, die du selbst eingibst, werden im iOS-<strong>Schlüsselbund</strong> gespeichert und sind so markiert, ' +
    'dass sie nur auf diesem Gerät und nur im entsperrten Zustand lesbar sind. ' +
    'Sie werden nie hochgeladen und wandern nicht per Backup auf ein anderes Gerät.',
  'privacy.mic.title': 'Mikrofon',
  'privacy.mic.p':
    'Das Mikrofon wird erst verwendet, nachdem du auf „Starten“ getippt hast. ' +
    'Eine laufende Sitzung nimmt weiter auf, übersetzt und sichert Transkripte, auch wenn du die App wechselst oder den Bildschirm sperrst. ' +
    'Tippe auf „Stoppen“, um die Aufnahme zu beenden. Audiounterbrechungen durch das System, etwa Anrufe, pausieren die Sitzung; ' +
    'sie wird fortgesetzt, sobald das System es zulässt. Die orangefarbene Mikrofonanzeige des Systems zeigt an, wann aufgenommen wird.',
  'privacy.purchase.title': 'Käufe',
  'privacy.purchase.p':
    'Sowohl der Kauf von Zeit als auch „Alle Sprachen“ (bei eigenem Key) laufen über <strong>In-App-Käufe von Apple</strong>. ' +
    'Apple wickelt die Zahlung vollständig ab; wir <strong>erhalten oder sehen niemals</strong> deine Zahlungsmethode, deinen Namen oder deine Rechnungsdaten.',
  'privacy.purchase.credit':
    'Zeit kaufen: Die App bittet Apple, deine Konto-ID in der Transaktion zu vermerken, und sendet die von Apple signierte Transaktion ' +
    'dann zur Prüfung und Gutschrift an unseren Server; der Server schreibt nur dem Konto gut, das in der Transaktion genannt ist. ' +
    'Erstattungen wickelt Apple ab und benachrichtigt unseren Server, damit er die Zeit wieder abzieht.',
  'privacy.purchase.all': '„Alle Sprachen“: Die App fragt nur das System, ob es gekauft wurde; unser Server ist nicht beteiligt.',
  'privacy.delete.title': 'Auskunft und Löschung',
  'privacy.delete.p':
    'Deine Konto-ID findest du in der App unter Einstellungen → Restzeit, mit einer Schaltfläche „Kopieren“. ' +
    'Um einzusehen oder zu löschen, was unser Server über dich gespeichert hat, schick sie an ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a>; wir löschen dann alle Daten dieses Kontos auf dem Server ' +
    '(Snapshots und die externe Kopie verfallen nach Ablauf ihrer Aufbewahrungsfristen). ' +
    'Verbleibende Zeit kann nach der Löschung nicht wiederhergestellt werden. Erstattungen für Käufe beantragst du bei Apple.',
  'privacy.children.title': 'Kinder',
  'privacy.children.p':
    'Diese App ist für das Dolmetschen im Beruf und im Alltag gedacht. Sie richtet sich nicht an Kinder und erfasst wissentlich keine Daten von ihnen.',
  'privacy.changes.title': 'Änderungen',
  'privacy.changes.p':
    'Wenn sich diese Erklärung wesentlich ändert, aktualisieren wir das Datum oben. ' +
    'Die App hat keine Registrierung, und wir haben keine Möglichkeit, dich zu kontaktieren – daher ist diese Seite maßgeblich.',
  'privacy.contact.title': 'Kontakt',
  'privacy.contact.p': 'Bei allen Fragen zum Datenschutz: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
