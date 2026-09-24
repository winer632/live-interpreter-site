/**
 * 网站文案 · Bahasa Melayu。英文写在三个页面的 HTML 里，是翻译的底本；
 * 键与 zh.js 一一对应，链接、<code>、邮箱原样保留（有测试盯着）。
 * 提到 App 里的按钮和菜单时，用 public/i18n/ms.js 里的原话（apl、Seting、kunci、sari kata）。
 */
siteI18n('ms', {
  'nav.support': '← Sokongan',
  'nav.setup': 'Mendapatkan API Key',
  'nav.privacy': 'Dasar privasi',

  // setup.html
  'setup.doc.title': 'Mendapatkan API Key Qwen · Duo Interpreter',
  'setup.title': 'Mendapatkan API Key Qwen',
  'setup.sub': 'Kira-kira sepuluh minit. Lakukan dalam pelayar komputer; hanya langkah terakhir dibuat pada telefon.',
  'setup.intro':
    'Apl ini <strong>tidak menyertakan sebarang kredit terjemahan</strong>. Ia berhubung dengan Alibaba Cloud Model Studio ' +
    'menggunakan akaun anda sendiri, dan Alibaba Cloud mengebil anda mengikut penggunaan. Pertuturan anda tidak pernah melalui pelayan kami.',
  'setup.remember':
    '<strong>Dua perkara yang perlu diingat</strong> — hampir setiap kegagalan berpunca daripada salah satunya. Kunci mesti dicipta di rantau ' +
    '<strong>Singapore</strong>; kunci dari rantau lain tidak akan berfungsi di sini. Dan kunci itu <strong>dipaparkan sepenuhnya sekali sahaja</strong> — ' +
    'sebaik sahaja dialog itu ditutup, ia tidak boleh dibaca lagi.',
  'setup.s1.title': 'Cipta akaun Alibaba Cloud',
  'setup.s1.signup':
    'Daftar di <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Alamat e-mel sudah memadai — <strong>nombor telefon tanah besar China tidak diperlukan</strong>.',
  'setup.s1.sso': 'Anda juga boleh log masuk dengan akaun Google atau GitHub tanpa perlu mengisi borang.',
  'setup.s1.card':
    'Anda perlu menambah kad kredit atau PayPal sebelum perkhidmatan boleh diaktifkan. Menambahnya tidak dikenakan sebarang caj; ' +
    'anda dibilkan mengikut penggunaan sebenar.',
  'setup.s1.alt': 'Halaman log masuk Alibaba Cloud',
  'setup.s2.title': 'Tukar rantau kepada Singapore',
  'setup.s2.p':
    'Buka konsol Model Studio di <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'dan pastikan rantau di <strong>bahagian atas kanan tertulis Singapore</strong>. Pautan itu sudah menghala ke sana, tetapi proses log masuk ' +
    'kadangkala membawa anda kembali ke rantau lalai, jadi elok disemak.',
  'setup.s2.alt': 'Konsol Model Studio dengan rantau ditetapkan kepada Singapore',
  'setup.s2.caption':
    'Rantau terletak di bahagian atas kanan. Butang <strong>API-KEY</strong> di bahagian bawah kiri ialah destinasi seterusnya — ia tiada dalam navigasi utama.',
  'setup.s3.title': 'Aktifkan Model Studio',
  'setup.s3.p':
    'Pada lawatan pertama, anda akan diminta mengaktifkan perkhidmatan: terima terma dan sahkan. ' +
    'Jika akaun anda sudah diaktifkan, skrin ini tidak akan muncul — terus ke langkah seterusnya.',
  'setup.s4.title': 'Buka halaman API Key',
  'setup.s4.p':
    'Klik butang <strong>API-KEY</strong> di <strong>bahagian bawah kiri</strong> konsol. Ia butang berbentuk kapsul yang berasingan, ' +
    'bukan item dalam navigasi utama, jadi mudah terlepas pandang pada kali pertama.',
  'setup.s4.alt': 'Halaman API Key dengan butang Create API Key',
  'setup.s4.caption': 'Sebaik sahaja anda berada di halaman ini, klik <strong>Create API Key</strong> di sebelah kanan.',
  'setup.s5.title': 'Cipta kunci',
  'setup.s5.p':
    'Klik <strong>Create API Key</strong>. Pilih ruang kerja lalai, tetapkan kebenaran kepada <strong>All</strong>, ' +
    'biarkan penerangan kosong jika mahu, kemudian sahkan.',
  'setup.s5.alt': 'Dialog Create API Key',
  'setup.s6.title': 'Salin keseluruhan kunci dengan segera',
  'setup.s6.copy':
    'Kunci bermula dengan <code>sk-</code> dan panjang — <strong>salin kesemuanya</strong>. ' +
    'Kunci yang tertinggal beberapa aksara terakhirnya akan gagal sama seperti kunci yang salah. Gunakan butang salin dalam dialog.',
  'setup.s6.download':
    'Dialog itu juga menawarkan <strong>Download</strong>, yang menyimpan kunci ke dalam fail — lebih selamat daripada bergantung pada papan keratan sahaja.',
  'setup.s6.note':
    '<strong>Sebaik sahaja dialog ini ditutup, kunci penuh tidak dapat dilihat lagi.</strong> ' +
    'Jika anda kehilangannya, padam sahaja kunci itu dan cipta yang baharu — tiada perkara lain yang terjejas.',
  'setup.s6.alt': 'Dialog yang memaparkan kunci sekali sahaja, dengan Copy dan Download',
  'setup.s6.caption': 'Kunci dan domain khusus dihitamkan dalam tangkapan skrin ini.',
  'setup.s7.title': 'Tampalkan dalam apl dan ketik “Uji”',
  'setup.s7.p':
    'Kembali ke telefon: <strong>Seting → Cara membayar</strong>, pilih “Guna kunci Alibaba Cloud saya sendiri”, ' +
    'dan bahagian <strong>API Key Qwen</strong> akan muncul. Biarkan tapak pada <strong>Antarabangsa · Singapura</strong>, ' +
    'tampalkan kunci, ketik <strong>Simpan</strong>, kemudian <strong>Uji</strong>. Jika “Bersambung — kunci berfungsi” muncul dalam warna hijau, anda sudah selesai.',
  'setup.s7.start':
    'Akhir sekali, tutup seting, pilih bahasa di bawah “Saya bercakap” dan “Dia bercakap”, dan mulakan. Cina ⇄ Inggeris percuma; ' +
    'satu pembelian “Semua bahasa” dalam seting membuka kunci bahasa selebihnya.',
  'setup.s7.alt': 'Seting apl dengan kunci disimpan dan ujian berjaya',
  'setup.s7.caption': 'Baris hijau itulah tandanya berjaya.',
  'setup.help.title': 'Jika ia tidak dapat bersambung',
  'setup.help.badKey':
    '<strong>“API Key tidak sah”</strong> — sembilan daripada sepuluh kali, rantaunya salah. Pastikan konsol menunjukkan Singapore di bahagian atas kanan; ' +
    'jika tidak, tukar rantau dan <strong>cipta kunci baharu</strong>, kerana kunci tidak boleh dipindahkan antara rantau. ' +
    'Pastikan juga tiada bahagian hujung yang terpotong semasa menampal.',
  'setup.help.forbidden':
    '<strong>“Kunci ini tidak dapat memanggil model”</strong> — akaun belum mengaktifkan Model Studio, atau tiada baki yang boleh digunakan. Semak dalam konsol.',
  'setup.help.timeout':
    '<strong>“Sambungan tamat masa”</strong> — telefon tidak dapat mencapai <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Cuba rangkaian lain, contohnya data selular dan bukannya Wi-Fi pejabat.',
  'setup.help.noKey':
    '<strong>Mahu mencuba dahulu, atau tidak dapat memperoleh kunci?</strong> Kunci tidak diperlukan: ' +
    '<strong>Seting → Cara membayar → Beli masa (tanpa pendaftaran)</strong>. Peranti baharu mendapat 5 minit percuma — ' +
    'ketik “Mula” untuk mencuba; selepas itu, beli masa dalam apl dan semua bahasa boleh digunakan.',
  'setup.help.contact':
    'Masih tidak berjaya? Tulis kepada <a href="mailto:winer632@qq.com">winer632@qq.com</a> dengan menyatakan peranti anda, versi iOS ' +
    'dan mesej tepat yang diberikan oleh butang Uji — ini menjadikan semakan jauh lebih cepat. <strong>Jangan hantar kunci anda kepada kami.</strong>',

  // index.html
  'index.doc.title': 'Sokongan · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Sokongan',
  'index.sub':
    'Terjemahan lisan dua hala untuk perbualan bersemuka. Sari kata dan terjemahan suara keluar serta-merta, dan arahnya dikesan secara automatik.',
  'index.trial.title': 'Cuba dengan lima minit percuma',
  'index.trial.p':
    'Tanpa pendaftaran dan tanpa kunci: kali pertama anda membuka apl pada peranti baharu, anda diberi <strong>lima minit percuma</strong>, ' +
    'yang dipaparkan di bahagian atas. Pilih “Saya bercakap” dan “Dia bercakap” di atas sari kata, ketik “Mula” dan bercakap sahaja — ' +
    'ini terjemahan lisan sebenar, dengan sari kata dan terjemahan suara secara langsung. Setiap peranti mendapat percubaan ini sekali sahaja; ' +
    'selepas itu, beli masa dalam apl atau guna kunci Alibaba Cloud anda sendiri.',
  'index.pay.title': 'Penggunaan sepenuhnya',
  'index.pay.intro': 'Dua cara membayar, dipilih di <strong>Seting → Cara membayar</strong>:',
  'index.pay.credit':
    '<strong>Beli masa terjemahan dalam apl</strong> (lalai) — tiada sebarang akaun diperlukan; buka dan terus guna, ' +
    'dengan lima minit percuma pada peranti baharu. Ditawarkan dalam pakej 1, 5 dan 10 jam dan meliputi semua bahasa. ' +
    'Dengan terjemahan suara, seminit menggunakan seminit; sari kata sahaja hanya menggunakan satu pertiga.',
  'index.pay.key':
    '<strong>Guna kunci Alibaba Cloud anda sendiri</strong> — Alibaba Cloud mengebil anda secara terus untuk apa yang anda gunakan. ' +
    'Dengan cara ini Cina ⇄ Inggeris percuma; semua bahasa lain dibuka kunci dengan satu pembelian “Semua bahasa”, untuk selama-lamanya, ' +
    'termasuk bahasa yang ditambah kemudian. ' +
    '<a href="./setup.html">Panduan langkah demi langkah untuk mendapatkan API Key →</a>',
  'index.langs.title': 'Bahasa',
  'index.langs.intro':
    'Pilih dalam dua lajur di atas sari kata: “Saya bercakap” di kiri, “Dia bercakap” di kanan. Kesemua 24 bahasa ini boleh diterjemah ' +
    'antara satu sama lain — kecuali beberapa gabungan yang disenaraikan di bawah — dengan arah dikesan secara automatik:',
  'index.langs.list':
    'Cina, Inggeris, Jepun, Korea, Jerman, Perancis, Sepanyol, Portugis, Itali, Rusia, Hindi, Indonesia, Vietnam, ' +
    'Arab, Thai, Turki, Filipina, Poland, Urdu, Ibrani, Parsi, Melayu, Belanda, Benggali',
  'index.langs.bangla':
    '<strong>Bahasa Benggali sari kata sahaja</strong>: apa yang dikatakan orang lain dipaparkan dalam bahasa Benggali sebagai teks, ' +
    'bukan dituturkan; pertuturan dalam bahasa Benggali tetap mendapat terjemahan suara.',
  'index.langs.unpaired':
    'Beberapa gabungan tidak disediakan: bahasa Indonesia dengan bahasa Melayu dan Hindi dengan Urdu (penuturnya sudah saling memahami), ' +
    'serta Arab, Urdu dan Parsi sesama sendiri (abjadnya sama; apl belum dapat membezakan siapa yang sedang bercakap).',
  'index.langs.cantonese': '<strong>Kantonis ⇄ Mandarin</strong> — bersuara pada satu arah, sari kata sahaja pada arah sebaliknya.',
  'index.faq.title': 'Soalan lazim',
  'index.faq.sound.q': 'Tiada bunyi',
  'index.faq.sound.a':
    'Semak <strong>suis Dering/Senyap</strong> di atas butang kelantangan pada sisi kiri — jika warna oren kelihatan, mod Senyap sedang aktif. ' +
    'Kemudian pastikan pemilih suara di bahagian atas tidak ditetapkan kepada “🔇 Suara mati”, dan anda tidak sedang menterjemah ke dalam ' +
    'bahasa Benggali atau Kantonis, yang hanya ada sari kata. Jika masih senyap, kuatkan kelantangan: corong dengar dan pembesar suara ' +
    'mempunyai tahap kelantangan yang berasingan.',
  'index.faq.earpiece.q': 'Mendengar sendiri, bukan melalui pembesar suara',
  'index.faq.earpiece.a':
    'Tukar pemilih suara di bahagian atas kepada <strong>📞 Corong dengar</strong> dan terjemahan akan keluar dari corong dengar, ' +
    'didengar dengan telefon di telinga seperti membuat panggilan. Anda boleh menukarnya bila-bila masa, termasuk ketika sesi sedang berjalan.',
  'index.faq.mic.q': '“Sistem telah memutuskan sambungan mikrofon”',
  'index.faq.mic.a':
    'Biasanya apl lain telah mengambil alih mikrofon — panggilan, mesej suara, perakam — atau set kepala Bluetooth telah bertukar mod. ' +
    'Henti dan mula semula untuk memulihkannya. Jika ia kerap berlaku dengan Bluetooth, cuba mikrofon terbina dalam atau set kepala berwayar.',
  'index.faq.echo.q': 'Bunyi berdengung atau gema apabila menggunakan pembesar suara',
  'index.faq.echo.a':
    'Dalam satu bilik, bunyi daripada pembesar suara ditangkap semula oleh mikrofon. Di <strong>Seting → Pengendalian gema</strong>, ' +
    'pilih “Perlahankan mik semasa main balik” atau “Senyapkan mik semasa main balik”, atau perlahankan sahaja kelantangan. ' +
    'Menggunakan corong dengar mengelakkan masalah ini sepenuhnya.',
  'index.faq.stuck.q': 'Sari kata berhenti dikemas kini',
  'index.faq.stuck.a':
    'Bar di bahagian atas menunjukkan kesihatan sesi. Punca biasa ialah rangkaian terputus atau sistem menyenyapkan mikrofon ' +
    '(yang ini akan dimaklumkan dengan jelas). Henti dan mula semula biasanya menyelesaikannya. Jika menggunakan masa yang dibeli, ' +
    'semak baki masa di bahagian atas; jika menggunakan kunci sendiri, masalah kuota daripada Alibaba Cloud dipaparkan sebagaimana adanya.',
  'index.faq.phone.q': 'Berpindah ke telefon baharu',
  'index.faq.phone.a':
    'Masa yang dibeli ialah milik akaun anda, iaitu ID rawak yang dicipta oleh apl dan disimpan dalam Rantai Kunci iCloud: ' +
    'daftar masuk ke Akaun Apple yang sama pada telefon baharu dengan Rantai Kunci iCloud diaktifkan, dan baki anda sudah ada di situ. ' +
    '“Semua bahasa”, yang dibeli semasa menggunakan kunci sendiri, boleh didapatkan semula tanpa caj di ' +
    '<strong>Seting → Semua bahasa → Pulihkan Pembelian</strong>.',
  'index.faq.cantonese.q': 'Mengapa Kantonis ⇄ Mandarin hanya bersuara pada satu arah',
  'index.faq.cantonese.a':
    'Model ini boleh <strong>memahami</strong> dan <strong>menulis</strong> bahasa Kantonis, tetapi tidak boleh <strong>menuturkannya</strong> — ' +
    'dalam jadual bahasa penyedia, ia tersenarai sebagai sari kata sahaja. Jadi, bercakap dalam bahasa Kantonis memberi anda terjemahan ' +
    'Mandarin yang dituturkan; bercakap dalam bahasa Mandarin hanya memberi anda sari kata Kantonis. Kedua-duanya menggunakan aksara Cina, ' +
    'jadi arahnya tidak dapat dikesan secara automatik — tetapkannya dengan pemilih arah.',
  'index.faq.direction.q': 'Arah kadangkala terbalik, contohnya antara bahasa Sepanyol dan Portugis',
  'index.faq.direction.a':
    'Apabila kedua-dua bahasa berkongsi abjad (Inggeris, Sepanyol, Portugis, Itali, Perancis, Jerman, Indonesia, Vietnam dan sebagainya), ' +
    'pengesanan bergantung pada pilihan perkataan dan boleh goyah pada frasa pendek atau nama. Gabungan ini mendapat kawalan arah tambahan ' +
    'di bahagian atas — tukarkannya daripada “Arah · automatik” kepada arah tetap untuk menguncinya.',
  'index.contact.title': 'Hubungi kami',
  'index.contact.p':
    'Soalan, cadangan dan pertanyaan tentang bayaran balik boleh dihantar ke <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'biasanya dibalas dalam satu atau dua hari bekerja. Nyatakan peranti, versi iOS, dua bahasa yang digunakan, dan sama ada anda membeli masa ' +
    'atau menggunakan kunci sendiri — ini menjadikan semakan jauh lebih cepat. Bagi masa yang dibeli, sertakan <strong>ID akaun</strong> yang dipaparkan dalam Seting.',

  // privacy.html
  'privacy.doc.title': 'Dasar Privasi · Duo Interpreter',
  'privacy.title': 'Dasar Privasi',
  'privacy.sub': 'Duo Interpreter · Kemas kini terakhir 24 September 2026',
  'privacy.translated':
    'Dasar ini ialah terjemahan. Jika terdapat perbezaan dengan <a href="?lang=en">versi bahasa Inggeris</a>, versi bahasa Inggeris yang terpakai.',
  'privacy.short':
    '<strong>Ringkasnya:</strong> apl ini berfungsi dalam dua cara. Secara lalai, anda membeli masa terjemahan tanpa pendaftaran: ' +
    'pertuturan anda dihantar terus dari telefon anda ke Alibaba Cloud Model Studio untuk diterjemah dan <strong>tidak pernah melalui pelayan kami</strong>; ' +
    'pelayan kami hanya menyimpan nombor akaun yang dijana secara rawak, jumlah masa yang anda beli dan jumlah yang telah anda gunakan. ' +
    'Jika anda menggunakan kunci Alibaba Cloud anda sendiri, kami tidak mengumpul apa-apa. Tiada analitik, pengiklanan atau penjejakan, ' +
    'dan transkrip kekal dalam telefon anda.',
  'privacy.collect.title': 'Apa yang kami kumpul',
  'privacy.collect.intro': 'Ia bergantung pada pilihan anda di Seting → Cara membayar.',
  'privacy.credit.title': 'Membeli masa (lalai, tanpa pendaftaran)',
  'privacy.credit.intro':
    'Untuk mengingati jumlah masa yang anda beli dan menghalang penyalahgunaan, apl berhubung dengan pelayan kami ' +
    '<code>api.duo-interpreter.com</code> (dihoskan di Microsoft Azure di Singapura). Pelayan menyimpan:',
  'privacy.credit.id':
    '<strong>ID akaun rawak</strong>: nombor (UUID) yang dijana oleh apl kali pertama anda menggunakannya. Ia tiada kaitan dengan nama, ' +
    'e-mel, nombor telefon atau Akaun Apple anda. Ia disimpan dalam Rantai Kunci iCloud anda, jadi baki anda kekal selepas apl dipasang semula ' +
    'dan mengikut anda ke telefon baharu dengan Akaun Apple yang sama.',
  'privacy.credit.device':
    '<strong>Bukti kelayakan peranti</strong>: bagi setiap peranti, pengecam dan kunci awam bagi kunci Apple App Attest, ' +
    'berserta masa ia didaftarkan dan kali terakhir digunakan. Ia membuktikan bahawa permintaan datang daripada salinan tulen apl ini, ' +
    'bukan versi yang diubah suai.',
  'privacy.credit.purchases':
    '<strong>Pembelian</strong>: ID transaksi Apple, produk (1, 5 atau 10 jam), masa ia dibeli, sama ada ia pembelian ujian (sandbox), ' +
    'dan sama ada ia telah dibayar balik.',
  'privacy.credit.usage':
    '<strong>Penggunaan</strong>: masa setiap sesi terjemahan bermula dan tamat, modnya (terjemahan suara atau sari kata sahaja), ' +
    'jumlah masa yang digunakan, berapa kali ia meminta kunci sementara, dan setiap perubahan pada baki anda.',
  'privacy.credit.trial':
    '<strong>Percubaan 5 minit</strong> diberikan sekali bagi setiap peranti. Untuk menghalang tuntutan berulang, apl memberikan token ' +
    'Apple DeviceCheck sekali guna kepada pelayan; pelayan menggunakannya untuk meminta Apple menyemak, kemudian menetapkan, satu bit ' +
    'yang disimpan oleh Apple untuk peranti ini bagi pihak kami (“percubaan telah digunakan”). Token itu digunakan sekali dan tidak disimpan, ' +
    'dan Apple hanya menyimpan bit itu untuk kami, tanpa memberitahu kami peranti yang mana.',
  'privacy.credit.never':
    'Pelayan <strong>tidak pernah menerima</strong> pertuturan, sari kata atau terjemahan anda; nama, e-mel, nombor telefon, lokasi ' +
    'atau kenalan anda; atau butiran pembayaran anda.',
  'privacy.key.title': 'Menggunakan kunci Alibaba Cloud anda sendiri',
  'privacy.key.p': 'Dalam mod ini, apl tidak menghubungi pelayan kami, dan <strong>kami tidak mengumpul apa-apa</strong>.',
  'privacy.both.title': 'Dalam kedua-dua mod',
  'privacy.both.p':
    'Apl ini tidak mengandungi analitik, pengiklanan atau penjejakan pihak ketiga. Kami tidak menjalankan analitik atau iklan, ' +
    'tidak menjejak anda merentas apl atau laman web, dan tidak menjual atau berkongsi sebarang data.',
  'privacy.logs.title': 'Log pelayan dan tempoh penyimpanan',
  'privacy.logs.ip':
    'Alamat IP anda hanya digunakan dalam memori untuk mengehadkan kadar permintaan (bagi menghalang penyalahgunaan) dan dibuang sejam ' +
    'selepas permintaan terakhir anda; ia tidak dilog atau disimpan. Log pelayan hanya merekodkan peristiwa, seperti “peranti didaftarkan” ' +
    '(dengan hanya 8 aksara pertama ID akaun), “pembelian dikreditkan” (produk dan sama ada ia pembelian ujian), ' +
    '“bayaran balik dilaksanakan” (ID transaksi), dan ralat. Log pelayan dipadam secara automatik selepas 30 hari.',
  'privacy.logs.ledger':
    'Syot kilat lejar diambil pada pelayan setiap jam, dengan 48 yang terkini disimpan, dan satu salinan yang disulitkan disimpan ' +
    'di luar tapak selama 30 hari. Rekod akaun, pembelian dan penggunaan disimpan selagi akaun wujud, kerana ia diperlukan untuk ' +
    'menyelaraskan rekod kewangan dan mengendalikan bayaran balik Apple.',
  'privacy.speech.title': 'Ke mana pertuturan anda pergi',
  'privacy.speech.intro':
    'Dalam kedua-dua mod, audio daripada mikrofon anda dihantar <strong>secara langsung dan terus dari telefon anda ke Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Ia tidak pernah melalui pelayan kami; kami tidak dapat mendengarnya dan tiada apa-apa untuk kami simpan:',
  'privacy.speech.credit':
    'Apabila anda membeli masa, apl bersambung ke <code>dashscope-intl.aliyuncs.com</code> (Singapura) menggunakan akaun Alibaba Cloud kami: ' +
    'pelayan kami hanya memberi apl satu kunci sementara yang tamat tempoh selepas 60 saat, dan audio dikendalikan di bawah perjanjian kami ' +
    'dengan Alibaba Cloud.',
  'privacy.speech.key':
    'Dengan kunci anda sendiri, apl bersambung ke tapak yang anda pilih dalam seting (<code>dashscope-intl.aliyuncs.com</code> atau ' +
    '<code>dashscope.aliyuncs.com</code>) menggunakan kunci anda, dan audio dikendalikan di bawah perjanjian <strong>anda</strong> dengan Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Untuk mengetahui apa yang dilakukan oleh Alibaba Cloud terhadap audio, lihat ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">dasar privasi mereka</a>.',
  'privacy.speech.hosts':
    'Apl hanya bersambung ke Alibaba Cloud Model Studio, pelayan kami (hanya apabila membeli masa), dan perkhidmatan Apple ' +
    '(pembelian dalam apl, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Tuturkan terjemahan dengan suara penutur</strong> (diaktifkan secara lalai, boleh dimatikan dalam seting): Alibaba Cloud meniru ' +
    'suara penutur secara langsung daripada audio yang sama yang diterjemahkannya, mengikut sesiapa yang sedang bercakap — kedua-dua orang ' +
    'dalam perbualan. Apl mahupun kami tidak mengumpul, menyimpan atau memuat naik sebarang cap suara secara berasingan; ' +
    'ia ialah audio yang sama yang sudah dihantar untuk diterjemah.',
  'privacy.device.title': 'Apa yang kekal dalam telefon anda',
  'privacy.transcripts.title': 'Transkrip',
  'privacy.transcripts.p':
    'Baris yang telah dimuktamadkan ditulis ke satu fail sehari di dalam ruang storan apl itu sendiri. Ia <strong>tidak pernah dimuat naik</strong> ' +
    'dan dikecualikan daripada sandaran iCloud. Anda boleh membaca, mengeksport atau memadamnya di bawah “Sejarah” dalam apl; ' +
    'memadam apl akan turut memadamnya.',
  'privacy.account.title': 'ID akaun',
  'privacy.account.p':
    'ID akaun rawak yang diterangkan di atas disimpan dalam Rantai Kunci iOS dan, jika Rantai Kunci iCloud diaktifkan, disegerakkan antara ' +
    'peranti anda pada Akaun Apple yang sama (disulitkan hujung ke hujung oleh Apple). Memadam apl tidak membuangnya, ' +
    'jadi baki anda masih ada selepas apl dipasang semula.',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    'API Key yang anda masukkan sendiri disimpan dalam <strong>Rantai Kunci</strong> iOS, ditanda sebagai boleh dibaca hanya pada peranti ini ' +
    'dan hanya semasa peranti tidak berkunci. Ia tidak pernah dimuat naik dan tidak berpindah ke peranti lain melalui sandaran.',
  'privacy.mic.title': 'Mikrofon',
  'privacy.mic.p':
    'Mikrofon hanya digunakan selepas anda mengetik “Mula”. Sesi yang aktif terus merakam, menterjemah dan menyimpan transkrip apabila anda ' +
    'menukar apl atau mengunci skrin. Ketik “Henti” untuk menamatkan rakaman. Gangguan audio sistem, seperti panggilan, menjeda sesi; ' +
    'ia disambung semula apabila sistem membenarkan. Penunjuk mikrofon oren sistem menunjukkan bila rakaman sedang aktif.',
  'privacy.purchase.title': 'Pembelian',
  'privacy.purchase.p':
    'Pembelian masa dan “Semua bahasa” (apabila menggunakan kunci sendiri) kedua-duanya dibuat melalui <strong>pembelian dalam apl Apple</strong>. ' +
    'Apple mengendalikan pembayaran dari awal hingga akhir; kami <strong>tidak pernah menerima atau melihat</strong> kaedah pembayaran, ' +
    'nama atau butiran pengebilan anda.',
  'privacy.purchase.credit':
    'Membeli masa: apl meminta Apple merekodkan ID akaun anda dalam transaksi, kemudian menghantar transaksi yang ditandatangani oleh Apple ' +
    'ke pelayan kami untuk disahkan dan dikreditkan; pelayan hanya mengkreditkan akaun yang dinamakan dalam transaksi. ' +
    'Bayaran balik dikendalikan oleh Apple, yang memaklumkan pelayan kami untuk menarik balik masa tersebut.',
  'privacy.purchase.all': '“Semua bahasa”: apl hanya bertanya kepada sistem sama ada ia telah dibeli; pelayan kami tidak terlibat.',
  'privacy.delete.title': 'Akses dan pemadaman',
  'privacy.delete.p':
    'ID akaun anda terdapat di Seting → Baki masa dalam apl, dengan butang Salin. Untuk melihat atau memadam apa yang disimpan oleh pelayan kami ' +
    'tentang anda, hantarkannya ke <a href="mailto:winer632@qq.com">winer632@qq.com</a> dan kami akan memadam semua rekod akaun itu pada pelayan ' +
    '(syot kilat dan salinan luar tapak akan luput selepas tempoh penyimpanan masing-masing). Baki masa tidak boleh dipulihkan selepas pemadaman. ' +
    'Bayaran balik untuk pembelian dimohon daripada Apple.',
  'privacy.children.title': 'Kanak-kanak',
  'privacy.children.p':
    'Apl ini ditujukan untuk terjemahan lisan dalam urusan perniagaan dan harian. Ia tidak ditujukan kepada kanak-kanak ' +
    'dan tidak mengumpul apa-apa daripada mereka secara sedar.',
  'privacy.changes.title': 'Perubahan',
  'privacy.changes.p':
    'Jika dasar ini berubah secara ketara, kami akan mengemas kini tarikh di bahagian atas. Apl ini tiada pendaftaran dan kami tiada cara ' +
    'untuk menghubungi anda, jadi halaman ini menjadi rekodnya.',
  'privacy.contact.title': 'Hubungi',
  'privacy.contact.p': 'Sebarang soalan tentang privasi: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
