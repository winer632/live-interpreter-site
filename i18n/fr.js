/**
 * 网站文案 · Français。从三个页面的英文 HTML 翻译，键和 zh.js 一一对应；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/fr.js 里的原话。
 * « »、冒号、分号、问号前后用不换行空格（U+00A0），和 App 一致。
 */
siteI18n('fr', {
  'nav.support': '← Assistance',
  'nav.setup': 'Obtenir une API Key',
  'nav.privacy': 'Politique de confidentialité',

  // setup.html
  'setup.doc.title': 'Obtenir une API Key Qwen · Duo Interpreter',
  'setup.title': 'Obtenir une API Key Qwen',
  'setup.sub': 'Comptez une dizaine de minutes. Faites-le dans un navigateur sur ordinateur ; seule la dernière étape se passe sur le téléphone.',
  'setup.intro':
    'L’app <strong>n’inclut aucun crédit de traduction</strong>. Elle se connecte à Alibaba Cloud Model Studio avec votre propre compte, ' +
    'et Alibaba Cloud vous facture ce que vous consommez. Ce que vous dites ne passe jamais par nos serveurs.',
  'setup.remember':
    '<strong>Deux choses à retenir</strong>, car presque toutes les erreurs viennent de l’une d’elles. ' +
    'La clé doit être créée dans la région <strong>Singapour (Singapore)</strong> ; les clés d’autres régions ne fonctionnent pas ici. ' +
    'Et la clé ne s’affiche <strong>en entier qu’une seule fois</strong> : une fois la fenêtre fermée, impossible de la relire.',
  'setup.s1.title': 'Créer un compte Alibaba Cloud',
  'setup.s1.signup':
    'Inscrivez-vous sur <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Une adresse e-mail suffit : <strong>aucun numéro de téléphone de Chine continentale n’est requis</strong>.',
  'setup.s1.sso': 'Vous pouvez aussi vous connecter avec un compte Google ou GitHub et sauter le formulaire.',
  'setup.s1.card':
    'Avant de pouvoir activer des services, vous devrez ajouter une carte bancaire ou PayPal. ' +
    'Cet ajout ne vous coûte rien ; seule l’utilisation réelle est facturée.',
  'setup.s1.alt': 'Page de connexion d’Alibaba Cloud',
  'setup.s2.title': 'Passer la région sur Singapour',
  'setup.s2.p':
    'Ouvrez la console Model Studio à l’adresse <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'et vérifiez que la région <strong>en haut à droite indique Singapore</strong>. Le lien y mène déjà, ' +
    'mais la connexion vous renvoie parfois vers une région par défaut : mieux vaut vérifier.',
  'setup.s2.alt': 'Console Model Studio avec la région réglée sur Singapore',
  'setup.s2.caption':
    'La région se trouve en haut à droite. Le bouton <strong>API-KEY</strong> en bas à gauche vous servira à l’étape suivante : ' +
    'il ne fait pas partie de la navigation principale.',
  'setup.s3.title': 'Activer Model Studio',
  'setup.s3.p':
    'À la première visite, on vous demande d’activer le service : acceptez les conditions et confirmez. ' +
    'Si votre compte est déjà activé, cet écran n’apparaît pas ; passez directement à l’étape suivante.',
  'setup.s4.title': 'Ouvrir la page API Key',
  'setup.s4.p':
    'Cliquez sur le bouton <strong>API-KEY</strong> <strong>en bas à gauche</strong> de la console. ' +
    'C’est un bouton à part, en forme de pilule, et non une entrée de la navigation principale : on le rate facilement la première fois.',
  'setup.s4.alt': 'La page API Key avec le bouton Create API Key',
  'setup.s4.caption': 'Une fois sur cette page, cliquez sur <strong>Create API Key</strong> à droite.',
  'setup.s5.title': 'Créer la clé',
  'setup.s5.p':
    'Cliquez sur <strong>Create API Key</strong>. Choisissez l’espace de travail par défaut, réglez les autorisations sur <strong>All</strong>, ' +
    'laissez la description vide si vous le souhaitez, puis confirmez.',
  'setup.s5.alt': 'La fenêtre Create API Key',
  'setup.s6.title': 'Copier toute la clé, tout de suite',
  'setup.s6.copy':
    'La clé commence par <code>sk-</code> et elle est longue : <strong>copiez-la en entier</strong>. ' +
    'Une clé amputée de ses derniers caractères échoue exactement comme une mauvaise clé. Utilisez le bouton de copie de la fenêtre.',
  'setup.s6.download':
    'La fenêtre propose aussi <strong>Download</strong>, qui enregistre la clé dans un fichier : plus sûr que de compter uniquement sur le presse-papiers.',
  'setup.s6.note':
    '<strong>Une fois cette fenêtre fermée, la clé complète est perdue.</strong> ' +
    'Si vous l’avez perdue, supprimez simplement cette clé et créez-en une autre : rien d’autre n’est affecté.',
  'setup.s6.alt': 'La fenêtre qui affiche la clé une seule fois, avec Copy et Download',
  'setup.s6.caption': 'La clé et les domaines dédiés sont masqués sur cette capture d’écran.',
  'setup.s7.title': 'La coller dans l’app et toucher « Tester »',
  'setup.s7.p':
    'De retour sur le téléphone : <strong>Réglages → Mode de paiement</strong>, choisissez « Utiliser ma clé Alibaba Cloud », ' +
    'et la section <strong>API Key Qwen</strong> apparaît. Laissez le site sur <strong>International · Singapour</strong>, collez la clé, ' +
    'touchez <strong>Enregistrer</strong>, puis <strong>Tester</strong>. Un message vert « Connecté : la clé fonctionne » signifie que c’est terminé.',
  'setup.s7.start':
    'Pour finir, fermez les réglages, choisissez les langues sous « Je parle » et « L’autre parle », et lancez-vous. ' +
    'Chinois ⇄ anglais est gratuit ; un seul achat « Toutes les langues » dans les réglages débloque le reste.',
  'setup.s7.alt': 'Les réglages de l’app, avec la clé enregistrée et le test réussi',
  'setup.s7.caption': 'La ligne verte signifie que tout fonctionne.',
  'setup.help.title': 'Si la connexion échoue',
  'setup.help.badKey':
    '<strong>« API Key non valide »</strong> : neuf fois sur dix, la région n’est pas la bonne. ' +
    'Vérifiez que la console indique Singapore en haut à droite ; sinon, changez de région et <strong>créez une nouvelle clé</strong>, ' +
    'car une clé ne peut pas passer d’une région à l’autre. Vérifiez aussi que rien n’a été coupé à la fin lors du collage.',
  'setup.help.forbidden':
    '<strong>« Cette clé ne peut pas appeler le modèle »</strong> : le compte n’a pas encore activé Model Studio, ' +
    'ou n’a pas de solde utilisable. Vérifiez dans la console.',
  'setup.help.timeout':
    '<strong>« Délai de connexion dépassé »</strong> : le téléphone n’arrive pas à joindre <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Essayez un autre réseau, par exemple les données cellulaires au lieu du Wi-Fi du bureau.',
  'setup.help.noKey':
    '<strong>Envie d’essayer d’abord, ou impossible d’obtenir une clé ?</strong> Pas besoin de clé : ' +
    '<strong>Réglages → Mode de paiement → Acheter du temps (sans inscription)</strong>. ' +
    'Un nouvel appareil reçoit 5 minutes gratuites : touchez « Démarrer » pour essayer ; ensuite, achetez du temps dans l’app et toutes les langues fonctionnent.',
  'setup.help.contact':
    'Toujours pas de connexion ? Écrivez à <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'en indiquant votre appareil, la version d’iOS et le message exact affiché par le bouton « Tester » : cela accélère beaucoup les choses. ' +
    '<strong>Ne nous envoyez pas votre clé.</strong>',

  // index.html
  'index.doc.title': 'Assistance · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Assistance',
  'index.sub':
    'L’interprétation dans les deux sens, pour parler en face à face. ' +
    'Sous-titres et voix au fil de la conversation, et le sens de traduction est détecté pour vous.',
  'index.trial.title': 'Essayez avec cinq minutes gratuites',
  'index.trial.p':
    'Sans inscription ni clé : la première fois que vous ouvrez l’app sur un nouvel appareil, elle vous offre <strong>cinq minutes gratuites</strong>, ' +
    'affichées en haut. Choisissez « Je parle » et « L’autre parle » au-dessus des sous-titres, touchez « Démarrer » et parlez, tout simplement : ' +
    'c’est une vraie interprétation, avec sous-titres et voix au fil de la conversation. ' +
    'Chaque appareil n’a droit à l’essai qu’une fois ; ensuite, achetez du temps dans l’app ou utilisez votre propre clé Alibaba Cloud.',
  'index.pay.title': 'Pour un usage régulier',
  'index.pay.intro': 'Deux façons de payer, au choix dans <strong>Réglages → Mode de paiement</strong> :',
  'index.pay.credit':
    '<strong>Acheter du temps d’interprétation dans l’app</strong> (par défaut) : aucun compte d’aucune sorte ; ouvrez l’app et c’est parti, ' +
    'avec cinq minutes gratuites sur un nouvel appareil. Disponible en 1, 5 ou 10 heures, pour toutes les langues. ' +
    'Avec traduction vocale, une minute coûte une minute ; en sous-titres seuls, un tiers.',
  'index.pay.key':
    '<strong>Utiliser votre propre clé Alibaba Cloud</strong> : Alibaba Cloud vous facture directement ce que vous consommez. ' +
    'Chinois ⇄ anglais est alors gratuit ; tout le reste se débloque définitivement avec un seul achat « Toutes les langues », ' +
    'y compris les langues ajoutées plus tard. ' +
    '<a href="./setup.html">Guide pas à pas pour obtenir une API Key →</a>',
  'index.langs.title': 'Langues',
  'index.langs.intro':
    'Choisissez-les dans les deux colonnes au-dessus des sous-titres : « Je parle » à gauche, « L’autre parle » à droite. ' +
    'Ces 24 langues s’interprètent entre elles (sauf les quelques combinaisons indiquées plus bas), et le sens est détecté pour vous :',
  'index.langs.list':
    'Chinois, anglais, japonais, coréen, allemand, français, espagnol, portugais, italien, russe, hindi, indonésien, vietnamien, ' +
    'arabe, thaï, turc, filipino, polonais, ourdou, hébreu, persan, malais, néerlandais, bengali',
  'index.langs.bangla':
    '<strong>Le bengali n’a que des sous-titres</strong> : ce que disent les autres s’affiche en bengali sous forme de texte, sans voix ; ' +
    'si vous parlez bengali, vous obtenez quand même une traduction vocale.',
  'index.langs.unpaired':
    'Quelques combinaisons sont exclues : l’indonésien avec le malais et le hindi avec l’ourdou (les locuteurs se comprennent déjà), ' +
    'ainsi que l’arabe, l’ourdou et le persan entre eux (même alphabet ; l’app ne sait pas encore distinguer qui parle).',
  'index.langs.cantonese': '<strong>Cantonais ⇄ mandarin</strong> : traduction vocale dans un sens, sous-titres dans l’autre.',
  'index.faq.title': 'Questions fréquentes',
  'index.faq.sound.q': 'Pas de son',
  'index.faq.sound.a':
    'Vérifiez le <strong>commutateur Sonnerie/Silence</strong> au-dessus des boutons de volume, sur la tranche gauche : ' +
    'si vous voyez de l’orange, le mode silencieux est activé. Assurez-vous ensuite que le sélecteur de voix en haut n’est pas sur « 🔇 Voix coupée », ' +
    'et que vous ne traduisez pas vers le bengali ou le cantonais, qui n’ont que des sous-titres. ' +
    'Si c’est toujours silencieux, montez le volume : l’écouteur et le haut-parleur ont des niveaux de volume distincts.',
  'index.faq.earpiece.q': 'Écouter discrètement plutôt qu’à voix haute',
  'index.faq.earpiece.a':
    'Réglez le sélecteur de voix en haut sur <strong>📞 Écouteur</strong> : la traduction sort alors de l’écouteur, ' +
    'téléphone contre l’oreille comme pour un appel. Vous pouvez changer à tout moment, y compris en pleine session.',
  'index.faq.mic.q': '« Le système a déconnecté le micro »',
  'index.faq.mic.a':
    'En général, une autre app a pris le micro (un appel, un message vocal, un enregistreur) ou un casque Bluetooth a changé de mode. ' +
    'Arrêtez puis redémarrez pour rétablir la situation. Si cela se répète en Bluetooth, essayez le micro intégré ou un casque filaire.',
  'index.faq.echo.q': 'Larsen ou écho sur le haut-parleur',
  'index.faq.echo.a':
    'Dans une même pièce, le micro capte à nouveau ce que diffuse le haut-parleur. ' +
    'Dans <strong>Réglages → Gestion de l’écho</strong>, choisissez « Micro baissé en lecture » ou « Micro coupé en lecture », ' +
    'ou baissez simplement le volume. Avec l’écouteur, le problème ne se pose pas du tout.',
  'index.faq.stuck.q': 'Les sous-titres ne se mettent plus à jour',
  'index.faq.stuck.a':
    'La barre en haut indique l’état de la session. Les causes habituelles sont une coupure réseau ou le système qui coupe le micro, ' +
    'ce qui est signalé explicitement. Arrêter puis redémarrer règle généralement le problème. ' +
    'Avec du temps acheté, vérifiez le temps restant en haut ; avec votre propre clé, un problème de quota renvoyé par Alibaba Cloud s’affiche tel quel.',
  'index.faq.phone.q': 'Passer à un nouveau téléphone',
  'index.faq.phone.a':
    'Le temps acheté appartient à votre compte, un identifiant aléatoire que l’app crée et conserve dans le trousseau iCloud : ' +
    'connectez-vous au même compte Apple sur le nouveau téléphone, avec le trousseau iCloud activé, et votre solde est là. ' +
    '« Toutes les langues », acheté en utilisant votre propre clé, se récupère gratuitement dans ' +
    '<strong>Réglages → Toutes les langues → Restaurer les achats</strong>.',
  'index.faq.cantonese.q': 'Pourquoi la paire cantonais ⇄ mandarin ne parle que dans un sens',
  'index.faq.cantonese.a':
    'Le modèle sait <strong>comprendre</strong> et <strong>écrire</strong> le cantonais, mais pas le <strong>parler</strong> : ' +
    'dans la table des langues du fournisseur, il est en sous-titres uniquement. Parler cantonais vous donne donc du mandarin parlé ; ' +
    'parler mandarin ne vous donne que des sous-titres en cantonais. Les deux côtés utilisent les caractères chinois, ' +
    'le sens ne peut donc pas être détecté automatiquement : fixez-le avec le sélecteur de sens.',
  'index.faq.direction.q': 'Le sens s’inverse parfois, par exemple entre espagnol et portugais',
  'index.faq.direction.a':
    'Quand les deux langues partagent un alphabet (anglais, espagnol, portugais, italien, français, allemand, indonésien, vietnamien, etc.), ' +
    'la détection se fait sur le choix des mots et peut hésiter sur des phrases courtes ou des noms propres. ' +
    'Ces combinaisons ont un sélecteur de sens supplémentaire en haut : passez-le de « Sens · automatique » à un sens fixe pour le bloquer.',
  'index.contact.title': 'Nous contacter',
  'index.contact.p':
    'Questions, suggestions et demandes de remboursement : écrivez à <a href="mailto:winer632@qq.com">winer632@qq.com</a>, ' +
    'nous répondons en général sous un ou deux jours ouvrés. Indiquez l’appareil, la version d’iOS, les deux langues, ' +
    'et si vous avez acheté du temps ou utilisez votre propre clé : cela accélère beaucoup les choses. ' +
    'Pour du temps acheté, joignez l’<strong>identifiant du compte</strong> affiché dans les réglages.',

  // privacy.html
  'privacy.doc.title': 'Politique de confidentialité · Duo Interpreter',
  'privacy.title': 'Politique de confidentialité',
  'privacy.sub': 'Duo Interpreter · Dernière mise à jour : 24 septembre 2026',
  'privacy.translated':
    'Cette politique est une traduction. En cas de divergence avec la <a href="?lang=en">version anglaise</a>, la version anglaise prévaut.',
  'privacy.short':
    '<strong>En bref :</strong> l’app fonctionne de deux façons. Par défaut, vous achetez du temps d’interprétation, sans inscription : ' +
    'votre voix va directement de votre téléphone à Alibaba Cloud Model Studio pour être traduite et <strong>ne passe jamais par notre serveur</strong> ; ' +
    'notre serveur conserve uniquement un numéro de compte généré aléatoirement, le temps que vous avez acheté et celui que vous avez utilisé. ' +
    'Si vous utilisez plutôt votre propre clé Alibaba Cloud, nous ne collectons rien. ' +
    'Il n’y a ni outil d’analyse, ni publicité, ni pistage, et les transcriptions restent sur votre téléphone.',
  'privacy.collect.title': 'Ce que nous collectons',
  'privacy.collect.intro': 'Cela dépend de votre choix dans Réglages → Mode de paiement.',
  'privacy.credit.title': 'Achat de temps (par défaut, sans inscription)',
  'privacy.credit.intro':
    'Pour mémoriser le temps que vous avez acheté et empêcher les abus, l’app communique avec notre serveur ' +
    '<code>api.duo-interpreter.com</code> (hébergé sur Microsoft Azure à Singapour). Le serveur conserve :',
  'privacy.credit.id':
    '<strong>Un identifiant de compte aléatoire</strong> : un numéro (un UUID) que l’app génère lors de la première utilisation. ' +
    'Il n’a aucun lien avec votre nom, votre e-mail, votre numéro de téléphone ou votre compte Apple. ' +
    'Il est conservé dans votre trousseau iCloud : votre solde survit ainsi aux réinstallations et vous suit sur un nouveau téléphone utilisant le même compte Apple.',
  'privacy.credit.device':
    '<strong>Justificatifs de l’appareil</strong> : pour chaque appareil, l’identifiant et la clé publique d’une clé Apple App Attest, ' +
    'avec la date de son enregistrement et de sa dernière utilisation. Ils prouvent que les requêtes proviennent d’une copie authentique de cette app, ' +
    'et non d’une version modifiée.',
  'privacy.credit.purchases':
    '<strong>Achats</strong> : l’identifiant de transaction Apple, le produit (1, 5 ou 10 heures), la date d’achat, ' +
    's’il s’agissait d’un achat de test (sandbox), et s’il a été remboursé.',
  'privacy.credit.usage':
    '<strong>Utilisation</strong> : le début et la fin de chaque session d’interprétation, son mode (traduction vocale ou sous-titres uniquement), ' +
    'le temps utilisé, le nombre de clés temporaires demandées, et chaque modification de votre solde.',
  'privacy.credit.trial':
    '<strong>L’essai de 5 minutes</strong> est accordé une fois par appareil. Pour éviter les demandes répétées, ' +
    'l’app remet au serveur un jeton Apple DeviceCheck à usage unique ; le serveur s’en sert pour demander à Apple de vérifier, puis de définir, ' +
    'un unique bit qu’Apple conserve pour cet appareil en notre nom (« essai utilisé »). ' +
    'Le jeton n’est utilisé qu’une fois et n’est pas conservé, et Apple ne garde pour nous que ce bit, sans nous dire de quel appareil il s’agit.',
  'privacy.credit.never':
    'Le serveur <strong>ne reçoit jamais</strong> votre voix, vos sous-titres ou vos traductions, ni votre nom, votre e-mail, ' +
    'votre numéro de téléphone, votre position ou vos contacts, ni vos informations de paiement.',
  'privacy.key.title': 'Utiliser votre propre clé Alibaba Cloud',
  'privacy.key.p': 'Dans ce mode, l’app ne contacte pas notre serveur, et <strong>nous ne collectons rien</strong>.',
  'privacy.both.title': 'Dans les deux cas',
  'privacy.both.p':
    'L’app ne contient aucun outil tiers d’analyse, de publicité ou de pistage. Nous n’effectuons aucune analyse d’utilisation ni aucune publicité, ' +
    'ne vous suivons pas d’une app ou d’un site web à l’autre, et ne vendons ni ne partageons aucune donnée.',
  'privacy.logs.title': 'Journaux du serveur et conservation',
  'privacy.logs.ip':
    'Votre adresse IP n’est utilisée qu’en mémoire pour limiter le rythme des requêtes (contre les abus), ' +
    'et elle est effacée une heure après votre dernière requête ; elle n’est ni journalisée ni stockée. ' +
    'Les journaux du serveur n’enregistrent que des événements, comme « un appareil s’est enregistré » ' +
    '(avec seulement les 8 premiers caractères de l’identifiant du compte), « un achat a été crédité » (le produit et s’il s’agissait d’un achat de test), ' +
    '« un remboursement a été appliqué » (l’identifiant de transaction), ainsi que les erreurs. ' +
    'Les journaux du serveur sont supprimés automatiquement au bout de 30 jours.',
  'privacy.logs.ledger':
    'Le registre des soldes fait l’objet d’un instantané sur le serveur toutes les heures, les 48 derniers étant conservés, ' +
    'et une copie chiffrée est gardée hors site pendant 30 jours. ' +
    'Les données de compte, d’achat et d’utilisation sont conservées tant que le compte existe, ' +
    'car elles sont nécessaires au rapprochement comptable et au traitement des remboursements Apple.',
  'privacy.speech.title': 'Où va votre voix',
  'privacy.speech.intro':
    'Dans les deux modes, l’audio de votre micro est envoyé <strong>en direct et directement de votre téléphone à Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Il ne passe jamais par notre serveur ; nous ne pouvons pas l’entendre et n’avons rien à conserver :',
  'privacy.speech.credit':
    'Quand vous achetez du temps, l’app se connecte à <code>dashscope-intl.aliyuncs.com</code> (Singapour) avec notre compte Alibaba Cloud : ' +
    'notre serveur remet seulement à l’app une clé temporaire qui expire au bout de 60 secondes, ' +
    'et l’audio est traité dans le cadre de notre contrat avec Alibaba Cloud.',
  'privacy.speech.key':
    'Avec votre propre clé, l’app se connecte au site choisi dans les réglages ' +
    '(<code>dashscope-intl.aliyuncs.com</code> ou <code>dashscope.aliyuncs.com</code>) avec votre clé, ' +
    'et l’audio est traité dans le cadre de <strong>votre</strong> contrat avec Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Pour savoir ce qu’Alibaba Cloud fait de l’audio, consultez ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">sa politique de confidentialité</a>.',
  'privacy.speech.hosts':
    'L’app se connecte uniquement à Alibaba Cloud Model Studio, à notre serveur (seulement si vous achetez du temps) ' +
    'et aux services d’Apple (achats intégrés, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Traduire avec la voix de la personne qui parle</strong> (activé par défaut, désactivable dans les réglages) : ' +
    'Alibaba Cloud imite en direct la voix de la personne qui parle à partir du même audio qu’il traduit, ' +
    'en suivant celle qui parle à chaque instant, donc les deux personnes d’une conversation. ' +
    'Ni l’app ni nous ne collectons, ne stockons ou ne téléversons séparément d’empreinte vocale ; ' +
    'il s’agit du même audio, déjà envoyé pour la traduction.',
  'privacy.device.title': 'Ce qui reste sur votre téléphone',
  'privacy.transcripts.title': 'Transcriptions',
  'privacy.transcripts.p':
    'Les lignes finalisées sont écrites dans un fichier par jour, à l’intérieur du conteneur propre à l’app. ' +
    'Elles ne sont <strong>jamais téléversées</strong> et sont exclues de la sauvegarde iCloud. ' +
    'Vous pouvez les lire, les exporter ou les supprimer dans « Historique » ; supprimer l’app les efface.',
  'privacy.account.title': 'Identifiant du compte',
  'privacy.account.p':
    'L’identifiant de compte aléatoire décrit plus haut est conservé dans le trousseau iOS et, si le trousseau iCloud est activé, ' +
    'se synchronise entre vos appareils utilisant le même compte Apple (chiffré de bout en bout par Apple). ' +
    'Supprimer l’app ne l’efface pas : votre solde est donc toujours là après une réinstallation.',
  'privacy.apikey.title': 'API Keys',
  'privacy.apikey.p':
    'Les API Keys que vous saisissez vous-même sont conservées dans le <strong>trousseau</strong> iOS, ' +
    'marquées comme lisibles uniquement sur cet appareil et seulement lorsqu’il est déverrouillé. ' +
    'Elles ne sont jamais téléversées et ne migrent pas vers un autre appareil par sauvegarde.',
  'privacy.mic.title': 'Microphone',
  'privacy.mic.p':
    'Le micro n’est utilisé qu’après que vous avez touché « Démarrer ». ' +
    'Une session en cours continue d’enregistrer, de traduire et de sauvegarder les transcriptions lorsque vous changez d’app ou verrouillez l’écran. ' +
    'Touchez « Arrêter » pour mettre fin à la capture. Les interruptions audio du système, comme les appels, mettent la session en pause ; ' +
    'elle reprend dès que le système le permet. L’indicateur orange du micro, affiché par le système, signale quand la capture est active.',
  'privacy.purchase.title': 'Achats',
  'privacy.purchase.p':
    'L’achat de temps et « Toutes les langues » (avec votre propre clé) passent tous deux par les <strong>achats intégrés d’Apple</strong>. ' +
    'Apple gère le paiement de bout en bout ; nous ne <strong>recevons ni ne voyons jamais</strong> votre moyen de paiement, ' +
    'votre nom ou vos informations de facturation.',
  'privacy.purchase.credit':
    'Achat de temps : l’app demande à Apple d’inscrire votre identifiant de compte dans la transaction, ' +
    'puis envoie la transaction, signée par Apple, à notre serveur pour vérification et crédit ; ' +
    'le serveur ne crédite que le compte indiqué dans la transaction. ' +
    'Les remboursements sont gérés par Apple, qui prévient notre serveur pour qu’il reprenne le temps correspondant.',
  'privacy.purchase.all': '« Toutes les langues » : l’app demande seulement au système si cet achat a été effectué ; notre serveur n’intervient pas.',
  'privacy.delete.title': 'Accès et suppression',
  'privacy.delete.p':
    'Votre identifiant de compte se trouve dans l’app sous Réglages → Temps restant, avec un bouton Copier. ' +
    'Pour consulter ou supprimer ce que notre serveur détient sur vous, envoyez-le à ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a> et nous supprimerons toutes les données de ce compte sur le serveur ' +
    '(les instantanés et la copie hors site expirent à la fin de leur durée de conservation). ' +
    'Le temps restant ne peut pas être rétabli après la suppression. Les remboursements d’achats se demandent auprès d’Apple.',
  'privacy.children.title': 'Enfants',
  'privacy.children.p':
    'Cette app est destinée à l’interprétation professionnelle et à celle du quotidien. ' +
    'Elle ne s’adresse pas aux enfants et ne collecte sciemment aucune donnée les concernant.',
  'privacy.changes.title': 'Modifications',
  'privacy.changes.p':
    'Si cette politique change de manière importante, nous mettrons à jour la date en haut de la page. ' +
    'L’app ne demande aucune inscription et nous n’avons aucun moyen de vous contacter : c’est donc cette page qui fait foi.',
  'privacy.contact.title': 'Contact',
  'privacy.contact.p': 'Pour toute question sur la confidentialité : <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
