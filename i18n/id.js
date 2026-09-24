/**
 * 网站文案 · Bahasa Indonesia。英文写在三个页面的 HTML 里，是翻译的底本；
 * 键与 zh.js 一一对应，链接、<code>、邮箱原样保留（有测试盯着）。
 * 提到 App 里的按钮和菜单时，用 public/i18n/id.js 里的原话；Apple 的术语用 Apple 印尼语官方叫法。
 */
siteI18n('id', {
  'nav.support': '← Dukungan',
  'nav.setup': 'Mendapatkan API Key',
  'nav.privacy': 'Kebijakan privasi',

  // setup.html
  'setup.doc.title': 'Mendapatkan API Key Qwen · Duo Interpreter',
  'setup.title': 'Mendapatkan API Key Qwen',
  'setup.sub': 'Sekitar sepuluh menit. Kerjakan di browser komputer; hanya langkah terakhir yang dilakukan di ponsel.',
  'setup.intro':
    'Aplikasi ini <strong>tidak menyertakan kredit terjemahan</strong>. Aplikasi terhubung ke Alibaba Cloud Model Studio ' +
    'dengan akun Anda sendiri, dan Alibaba Cloud menagih Anda sesuai pemakaian. Suara Anda tidak pernah melewati server kami.',
  'setup.remember':
    '<strong>Dua hal yang perlu diingat</strong> — hampir semua kegagalan berasal dari salah satunya. Key harus dibuat di region ' +
    '<strong>Singapore</strong>; Key dari region lain tidak akan berfungsi di sini. Selain itu, Key <strong>hanya ditampilkan utuh satu kali</strong> — ' +
    'setelah dialognya ditutup, Key tidak bisa dilihat lagi.',
  'setup.s1.title': 'Buat akun Alibaba Cloud',
  'setup.s1.signup':
    'Daftar di <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Alamat email saja sudah cukup — <strong>tidak perlu nomor telepon Tiongkok daratan</strong>.',
  'setup.s1.sso': 'Anda juga bisa masuk dengan akun Google atau GitHub tanpa perlu mengisi formulir.',
  'setup.s1.card':
    'Anda perlu menambahkan kartu kredit atau PayPal sebelum layanan bisa diaktifkan. Menambahkannya tidak dikenai biaya apa pun; ' +
    'Anda hanya ditagih sesuai pemakaian sebenarnya.',
  'setup.s1.alt': 'Halaman masuk Alibaba Cloud',
  'setup.s2.title': 'Ganti region ke Singapore',
  'setup.s2.p':
    'Buka konsol Model Studio di <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'dan pastikan region di <strong>kanan atas tertulis Singapore</strong>. Tautan itu sudah mengarah ke sana, tetapi setelah masuk ' +
    'Anda kadang dikembalikan ke region default, jadi sebaiknya diperiksa.',
  'setup.s2.alt': 'Konsol Model Studio dengan region Singapore',
  'setup.s2.caption':
    'Region ada di kanan atas. Tombol <strong>API-KEY</strong> di kiri bawah adalah tujuan berikutnya — tombol ini tidak ada di navigasi utama.',
  'setup.s3.title': 'Aktifkan Model Studio',
  'setup.s3.p':
    'Pada kunjungan pertama, Anda akan diminta mengaktifkan layanan: setujui ketentuannya, lalu konfirmasi. ' +
    'Jika akun Anda sudah aktif, layar ini tidak akan muncul — langsung saja ke langkah berikutnya.',
  'setup.s4.title': 'Buka halaman API Key',
  'setup.s4.p':
    'Klik tombol <strong>API-KEY</strong> di <strong>kiri bawah</strong> konsol. Tombol ini berbentuk kapsul dan berdiri sendiri, ' +
    'bukan salah satu item di navigasi utama, sehingga mudah terlewat saat pertama kali.',
  'setup.s4.alt': 'Halaman API Key dengan tombol Create API Key',
  'setup.s4.caption': 'Setelah berada di halaman ini, klik <strong>Create API Key</strong> di sebelah kanan.',
  'setup.s5.title': 'Buat Key',
  'setup.s5.p':
    'Klik <strong>Create API Key</strong>. Pilih workspace default, setel izin ke <strong>All</strong>, deskripsi boleh dikosongkan, lalu konfirmasi.',
  'setup.s5.alt': 'Dialog Create API Key',
  'setup.s6.title': 'Segera salin seluruh Key',
  'setup.s6.copy':
    'Key diawali dengan <code>sk-</code> dan cukup panjang — <strong>salin semuanya</strong>. ' +
    'Key yang kehilangan beberapa karakter terakhirnya akan gagal persis seperti Key yang salah. Gunakan tombol salin di dialog.',
  'setup.s6.download':
    'Dialog ini juga menyediakan <strong>Download</strong> untuk menyimpan Key ke file — lebih aman daripada hanya mengandalkan papan klip.',
  'setup.s6.note':
    '<strong>Begitu dialog ini ditutup, Key lengkapnya tidak bisa dilihat lagi.</strong> ' +
    'Jika Key hilang, hapus saja Key tersebut dan buat yang baru — tidak ada hal lain yang terpengaruh.',
  'setup.s6.alt': 'Dialog yang menampilkan Key satu kali, dengan tombol Copy dan Download',
  'setup.s6.caption': 'Key dan domain khusus disamarkan dalam tangkapan layar ini.',
  'setup.s7.title': 'Tempel di aplikasi, lalu ketuk “Uji”',
  'setup.s7.p':
    'Kembali ke ponsel: <strong>Pengaturan → Cara bayar</strong>, pilih “Pakai Key Alibaba Cloud saya sendiri”, ' +
    'lalu bagian <strong>API Key Qwen</strong> akan muncul. Biarkan situs tetap di <strong>Internasional · Singapore</strong>, ' +
    'tempel Key, ketuk <strong>Simpan</strong>, lalu <strong>Uji</strong>. Jika muncul tulisan hijau “Terhubung — Key berfungsi”, berarti sudah selesai.',
  'setup.s7.start':
    'Terakhir, tutup pengaturan, pilih bahasa di “Saya bicara” dan “Lawan bicara”, lalu mulai. Tionghoa ⇄ Inggris gratis; ' +
    'sekali beli “Semua bahasa” di pengaturan akan membuka semua bahasa lainnya.',
  'setup.s7.alt': 'Pengaturan aplikasi dengan Key tersimpan dan uji berhasil',
  'setup.s7.caption': 'Baris hijau itulah tanda berhasil.',
  'setup.help.title': 'Jika tidak bisa terhubung',
  'setup.help.badKey':
    '<strong>“API Key tidak valid”</strong> — sembilan dari sepuluh kasus, region-nya salah. Pastikan konsol menunjukkan Singapore di kanan atas; ' +
    'jika tidak, ganti region lalu <strong>buat Key baru</strong>, karena Key tidak bisa dipindahkan antar-region. ' +
    'Pastikan juga tidak ada bagian akhir yang terpotong saat menempel.',
  'setup.help.forbidden':
    '<strong>“Key ini tidak dapat memanggil model”</strong> — akun belum mengaktifkan Model Studio, atau tidak punya saldo yang bisa dipakai. Periksa di konsol.',
  'setup.help.timeout':
    '<strong>“Waktu koneksi habis”</strong> — ponsel tidak bisa menjangkau <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Coba jaringan lain, misalnya data seluler alih-alih Wi-Fi kantor.',
  'setup.help.noKey':
    '<strong>Ingin mencoba dulu, atau tidak bisa mendapatkan Key?</strong> Tidak perlu Key: ' +
    '<strong>Pengaturan → Cara bayar → Beli waktu (tanpa mendaftar)</strong>. Perangkat baru mendapat 5 menit gratis — ' +
    'ketuk “Mulai” untuk mencobanya; setelah itu, beli waktu di aplikasi dan semua bahasa bisa dipakai.',
  'setup.help.contact':
    'Masih belum berhasil? Kirim email ke <a href="mailto:winer632@qq.com">winer632@qq.com</a> dengan menyebutkan perangkat, versi iOS, ' +
    'dan pesan persis yang muncul saat menekan tombol Uji — dengan begitu masalahnya jauh lebih cepat ditemukan. ' +
    '<strong>Jangan kirimkan Key Anda kepada kami.</strong>',

  // index.html
  'index.doc.title': 'Dukungan · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Dukungan',
  'index.sub':
    'Penerjemahan dua arah untuk percakapan tatap muka. Subtitel dan suara terjemahan muncul seketika, dan arahnya dikenali otomatis.',
  'index.trial.title': 'Coba dengan lima menit gratis',
  'index.trial.p':
    'Tanpa mendaftar dan tanpa Key: saat pertama kali membuka aplikasi di perangkat baru, Anda mendapat <strong>lima menit gratis</strong>, ' +
    'yang ditampilkan di bagian atas. Pilih “Saya bicara” dan “Lawan bicara” di atas subtitel, ketuk “Mulai”, lalu bicara saja — ' +
    'ini penerjemahan sungguhan, dengan subtitel dan suara terjemahan secara langsung. Setiap perangkat hanya mendapat uji coba sekali; ' +
    'setelah itu, beli waktu di aplikasi atau pakai Key Alibaba Cloud Anda sendiri.',
  'index.pay.title': 'Pemakaian penuh',
  'index.pay.intro': 'Ada dua cara bayar, yang dipilih di <strong>Pengaturan → Cara bayar</strong>:',
  'index.pay.credit':
    '<strong>Beli waktu penerjemahan di aplikasi</strong> (default) — tanpa akun apa pun; buka dan langsung pakai, ' +
    'dengan lima menit gratis di perangkat baru. Tersedia paket 1, 5, dan 10 jam, berlaku untuk semua bahasa. ' +
    'Dengan suara terjemahan, satu menit memakai satu menit; hanya subtitel memakai sepertiganya.',
  'index.pay.key':
    '<strong>Pakai Key Alibaba Cloud Anda sendiri</strong> — Alibaba Cloud menagih Anda langsung sesuai pemakaian. ' +
    'Dengan cara ini Tionghoa ⇄ Inggris gratis; semua bahasa lain terbuka dengan sekali beli “Semua bahasa”, selamanya, ' +
    'termasuk bahasa yang ditambahkan nanti. ' +
    '<a href="./setup.html">Panduan langkah demi langkah mendapatkan API Key →</a>',
  'index.langs.title': 'Bahasa',
  'index.langs.intro':
    'Pilih di dua kolom di atas subtitel: “Saya bicara” di kiri, “Lawan bicara” di kanan. Ke-24 bahasa ini bisa saling diterjemahkan — ' +
    'kecuali beberapa kombinasi yang tercantum di bawah — dengan arah yang dikenali otomatis:',
  'index.langs.list':
    'Tionghoa, Inggris, Jepang, Korea, Jerman, Prancis, Spanyol, Portugis, Italia, Rusia, Hindi, Indonesia, Vietnam, ' +
    'Arab, Thai, Turki, Filipino, Polandia, Urdu, Ibrani, Persia, Melayu, Belanda, Bengali',
  'index.langs.bangla':
    '<strong>Bahasa Bengali hanya subtitel</strong>: ucapan orang lain ditampilkan dalam bahasa Bengali sebagai teks, tanpa suara; ' +
    'ucapan dalam bahasa Bengali tetap diterjemahkan dengan suara.',
  'index.langs.unpaired':
    'Beberapa kombinasi tidak disediakan: bahasa Indonesia dengan Melayu dan Hindi dengan Urdu (penuturnya sudah saling memahami), ' +
    'serta Arab, Urdu, dan Persia satu sama lain (abjadnya sama; aplikasi belum bisa membedakan siapa yang sedang berbicara).',
  'index.langs.cantonese': '<strong>Kanton ⇄ Mandarin</strong> — bersuara ke satu arah, hanya subtitel ke arah sebaliknya.',
  'index.faq.title': 'Pertanyaan umum',
  'index.faq.sound.q': 'Tidak ada suara',
  'index.faq.sound.a':
    'Periksa <strong>pengalih Dering/Hening</strong> di atas tombol volume di sisi kiri — jika warna oranye terlihat, berarti mode Hening aktif. ' +
    'Lalu pastikan pilihan suara di bagian atas tidak disetel ke “🔇 Suara mati”, dan Anda tidak sedang menerjemahkan ke bahasa Bengali ' +
    'atau Kanton, yang hanya berupa subtitel. Jika masih tidak terdengar, besarkan volume: earpiece dan pengeras suara punya level volume masing-masing.',
  'index.faq.earpiece.q': 'Mendengarkan sendiri, bukan lewat pengeras suara',
  'index.faq.earpiece.a':
    'Ganti pilihan suara di bagian atas ke <strong>📞 Di telinga</strong>, maka terjemahan keluar dari earpiece dan didengarkan ' +
    'dengan ponsel di telinga, seperti saat menelepon. Anda bisa menggantinya kapan saja, termasuk di tengah sesi.',
  'index.faq.mic.q': '“Sistem memutus sambungan mikrofon”',
  'index.faq.mic.a':
    'Biasanya ada aplikasi lain yang mengambil alih mikrofon — panggilan telepon, pesan suara, perekam — atau headset Bluetooth berganti mode. ' +
    'Hentikan lalu mulai lagi untuk memulihkannya. Jika sering terjadi dengan Bluetooth, coba mikrofon bawaan atau headset berkabel.',
  'index.faq.echo.q': 'Dengung atau gema saat memakai pengeras suara',
  'index.faq.echo.a':
    'Di satu ruangan, suara dari pengeras suara tertangkap lagi oleh mikrofon. Di <strong>Pengaturan → Penanganan gema</strong>, ' +
    'pilih “Kecilkan mikrofon saat diputar” atau “Bisukan mikrofon saat diputar”, atau cukup kecilkan volumenya. ' +
    'Dengan earpiece, masalah ini tidak terjadi sama sekali.',
  'index.faq.stuck.q': 'Subtitel berhenti diperbarui',
  'index.faq.stuck.a':
    'Bilah di bagian atas menunjukkan kondisi sesi. Penyebab yang paling umum adalah jaringan terputus atau sistem membisukan mikrofon ' +
    '(yang terakhir ini akan diberitahukan dengan jelas). Menghentikan lalu memulai lagi biasanya mengatasinya. ' +
    'Jika memakai waktu yang dibeli, periksa sisa waktu di bagian atas; jika memakai Key sendiri, masalah kuota dari Alibaba Cloud ditampilkan apa adanya.',
  'index.faq.phone.q': 'Pindah ke ponsel baru',
  'index.faq.phone.a':
    'Waktu yang dibeli tercatat di akun Anda, yaitu ID acak yang dibuat aplikasi dan disimpan di Rantai Kunci iCloud: ' +
    'masuk ke Akun Apple yang sama di ponsel baru dengan Rantai Kunci iCloud aktif, dan saldo Anda sudah ada di sana. ' +
    '“Semua bahasa”, yang dibeli saat memakai Key sendiri, bisa didapatkan kembali tanpa biaya lewat ' +
    '<strong>Pengaturan → Semua bahasa → Pulihkan pembelian</strong>.',
  'index.faq.cantonese.q': 'Mengapa Kanton ⇄ Mandarin hanya bersuara ke satu arah',
  'index.faq.cantonese.a':
    'Model dapat <strong>memahami</strong> dan <strong>menulis</strong> bahasa Kanton, tetapi tidak dapat <strong>mengucapkannya</strong> — ' +
    'di tabel bahasa penyedia layanan, bahasa ini tergolong hanya subtitel. Jadi, jika Anda berbicara bahasa Kanton, Anda mendapat ' +
    'terjemahan Mandarin bersuara; jika berbicara Mandarin, Anda hanya mendapat subtitel bahasa Kanton. Keduanya sama-sama memakai ' +
    'aksara Tionghoa, sehingga arahnya tidak bisa dikenali otomatis — atur dengan pilihan arah.',
  'index.faq.direction.q': 'Arah sesekali terbalik, misalnya antara Spanyol dan Portugis',
  'index.faq.direction.a':
    'Jika kedua bahasa memakai abjad yang sama (Inggris, Spanyol, Portugis, Italia, Prancis, Jerman, Indonesia, Vietnam, dan sebagainya), ' +
    'pengenalan arah bergantung pada pilihan kata dan bisa ragu pada frasa pendek atau nama. Kombinasi seperti ini mendapat pilihan arah ' +
    'tambahan di bagian atas — ubah dari “Arah · otomatis” ke arah tetap untuk menguncinya.',
  'index.contact.title': 'Hubungi kami',
  'index.contact.p':
    'Pertanyaan, saran, dan permintaan pengembalian dana bisa dikirim ke <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'biasanya dibalas dalam satu atau dua hari kerja. Sebutkan perangkat, versi iOS, kedua bahasa yang dipakai, dan apakah Anda membeli waktu ' +
    'atau memakai Key sendiri, agar penanganannya jauh lebih cepat. Untuk waktu yang dibeli, sertakan <strong>ID akun</strong> yang tertera di Pengaturan.',

  // privacy.html
  'privacy.doc.title': 'Kebijakan Privasi · Duo Interpreter',
  'privacy.title': 'Kebijakan Privasi',
  'privacy.sub': 'Duo Interpreter · Terakhir diperbarui 24 September 2026',
  'privacy.translated':
    'Kebijakan ini adalah terjemahan. Jika ada perbedaan dengan <a href="?lang=en">versi bahasa Inggris</a>, yang berlaku adalah versi bahasa Inggris.',
  'privacy.short':
    '<strong>Singkatnya:</strong> aplikasi ini bisa dipakai dengan dua cara. Secara default, Anda membeli waktu penerjemahan tanpa mendaftar: ' +
    'suara Anda dikirim langsung dari ponsel ke Alibaba Cloud Model Studio untuk diterjemahkan dan <strong>tidak pernah melewati server kami</strong>; ' +
    'server kami hanya menyimpan nomor akun yang dibuat secara acak, berapa banyak waktu yang Anda beli, dan berapa banyak yang sudah Anda pakai. ' +
    'Jika Anda memakai Key Alibaba Cloud sendiri, kami tidak mengumpulkan apa pun. Tidak ada analitik, iklan, atau pelacakan, ' +
    'dan transkrip tetap berada di ponsel Anda.',
  'privacy.collect.title': 'Apa yang kami kumpulkan',
  'privacy.collect.intro': 'Tergantung pilihan Anda di Pengaturan → Cara bayar.',
  'privacy.credit.title': 'Membeli waktu (default, tanpa mendaftar)',
  'privacy.credit.intro':
    'Untuk mencatat berapa banyak waktu yang Anda beli dan mencegah penyalahgunaan, aplikasi berkomunikasi dengan server kami ' +
    '<code>api.duo-interpreter.com</code> (di-hosting di Microsoft Azure di Singapura). Server menyimpan:',
  'privacy.credit.id':
    '<strong>ID akun acak</strong>: nomor (UUID) yang dibuat aplikasi saat pertama kali Anda memakainya. Nomor ini tidak berkaitan dengan ' +
    'nama, email, nomor telepon, atau Akun Apple Anda. ID ini disimpan di Rantai Kunci iCloud Anda, sehingga saldo Anda tetap ada ' +
    'setelah aplikasi dipasang ulang dan ikut pindah ke ponsel baru dengan Akun Apple yang sama.',
  'privacy.credit.device':
    '<strong>Kredensial perangkat</strong>: untuk setiap perangkat, pengenal dan kunci publik dari kunci Apple App Attest, ' +
    'beserta waktu pendaftarannya dan waktu terakhir dipakai. Data ini membuktikan bahwa permintaan berasal dari salinan asli aplikasi ini, ' +
    'bukan versi yang dimodifikasi.',
  'privacy.credit.purchases':
    '<strong>Pembelian</strong>: ID transaksi Apple, produk (1, 5, atau 10 jam), waktu pembelian, apakah itu pembelian uji (sandbox), ' +
    'dan apakah dananya sudah dikembalikan.',
  'privacy.credit.usage':
    '<strong>Pemakaian</strong>: kapan setiap sesi penerjemahan dimulai dan berakhir, modenya (suara terjemahan atau hanya subtitel), ' +
    'berapa banyak waktu yang terpakai, berapa kali sesi itu meminta kunci sementara, dan setiap perubahan saldo Anda.',
  'privacy.credit.trial':
    '<strong>Uji coba 5 menit</strong> diberikan sekali per perangkat. Untuk mencegah klaim berulang, aplikasi memberikan token ' +
    'Apple DeviceCheck sekali pakai kepada server; server memakainya untuk meminta Apple memeriksa, lalu menyetel, satu bit yang disimpan ' +
    'Apple untuk perangkat ini atas nama kami (“uji coba sudah dipakai”). Token hanya dipakai sekali dan tidak disimpan, dan Apple ' +
    'hanya menyimpan bit tersebut untuk kami, tanpa memberi tahu kami perangkat mana itu.',
  'privacy.credit.never':
    'Server <strong>tidak pernah menerima</strong> suara, subtitel, atau terjemahan Anda; nama, email, nomor telepon, lokasi, atau kontak Anda; ' +
    'maupun detail pembayaran Anda.',
  'privacy.key.title': 'Memakai Key Alibaba Cloud Anda sendiri',
  'privacy.key.p': 'Dalam mode ini aplikasi tidak menghubungi server kami, dan <strong>kami tidak mengumpulkan apa pun</strong>.',
  'privacy.both.title': 'Di kedua mode',
  'privacy.both.p':
    'Aplikasi ini tidak berisi analitik, iklan, atau pelacakan pihak ketiga. Kami tidak menjalankan analitik atau iklan, ' +
    'tidak melacak Anda di berbagai aplikasi atau situs web, dan tidak menjual atau membagikan data apa pun.',
  'privacy.logs.title': 'Log server dan masa penyimpanan',
  'privacy.logs.ip':
    'Alamat IP Anda hanya dipakai di memori untuk membatasi laju permintaan (mencegah penyalahgunaan) dan dibuang satu jam setelah ' +
    'permintaan terakhir Anda; alamat ini tidak dicatat di log maupun disimpan. Log server hanya mencatat peristiwa, seperti ' +
    '“perangkat terdaftar” (hanya dengan 8 karakter pertama ID akun), “pembelian dikreditkan” (produk dan apakah itu pembelian uji), ' +
    '“pengembalian dana diterapkan” (ID transaksi), serta kesalahan. Log server dihapus otomatis setelah 30 hari.',
  'privacy.logs.ledger':
    'Server membuat snapshot buku besar setiap jam dan menyimpan 48 snapshot terbaru; salinan terenkripsinya disimpan di lokasi terpisah ' +
    'selama 30 hari. Catatan akun, pembelian, dan pemakaian disimpan selama akun masih ada, karena diperlukan untuk rekonsiliasi pembukuan ' +
    'dan untuk menangani pengembalian dana dari Apple.',
  'privacy.speech.title': 'Ke mana suara Anda dikirim',
  'privacy.speech.intro':
    'Di kedua mode, audio dari mikrofon Anda dikirim <strong>secara real-time dan langsung dari ponsel Anda ke Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Audio ini tidak pernah melewati server kami; kami tidak bisa mendengarnya dan tidak ada yang bisa kami simpan:',
  'privacy.speech.credit':
    'Saat Anda membeli waktu, aplikasi terhubung ke <code>dashscope-intl.aliyuncs.com</code> (Singapura) dengan akun Alibaba Cloud kami: ' +
    'server kami hanya memberikan kunci sementara kepada aplikasi yang kedaluwarsa setelah 60 detik, dan audio ditangani berdasarkan ' +
    'perjanjian kami dengan Alibaba Cloud.',
  'privacy.speech.key':
    'Dengan Key Anda sendiri, aplikasi terhubung ke situs yang Anda pilih di pengaturan (<code>dashscope-intl.aliyuncs.com</code> atau ' +
    '<code>dashscope.aliyuncs.com</code>) memakai Key Anda, dan audio ditangani berdasarkan perjanjian <strong>Anda</strong> dengan Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Tentang apa yang dilakukan Alibaba Cloud dengan audio tersebut, lihat ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">kebijakan privasi mereka</a>.',
  'privacy.speech.hosts':
    'Aplikasi hanya terhubung ke Alibaba Cloud Model Studio, server kami (hanya saat membeli waktu), dan layanan Apple ' +
    '(pembelian in-app, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Ucapkan terjemahan dengan suara pembicara</strong> (aktif secara default, bisa dimatikan di pengaturan): Alibaba Cloud meniru ' +
    'suara pembicara secara langsung dari audio yang sama yang diterjemahkannya, mengikuti siapa pun yang sedang berbicara — kedua orang ' +
    'dalam percakapan. Baik aplikasi maupun kami tidak mengumpulkan, menyimpan, atau mengunggah sidik suara apa pun secara terpisah; ' +
    'yang dipakai adalah audio yang sama yang sudah dikirim untuk diterjemahkan.',
  'privacy.device.title': 'Yang tetap berada di ponsel Anda',
  'privacy.transcripts.title': 'Transkrip',
  'privacy.transcripts.p':
    'Kalimat final ditulis ke satu file per hari di dalam ruang penyimpanan milik aplikasi itu sendiri. Transkrip <strong>tidak pernah diunggah</strong> ' +
    'dan dikecualikan dari cadangan iCloud. Anda bisa membaca, mengekspor, atau menghapusnya di “Riwayat” dalam aplikasi; ' +
    'menghapus aplikasi juga akan menghapusnya.',
  'privacy.account.title': 'ID akun',
  'privacy.account.p':
    'ID akun acak yang dijelaskan di atas disimpan di Rantai Kunci iOS dan, jika Rantai Kunci iCloud aktif, disinkronkan di antara ' +
    'perangkat Anda yang memakai Akun Apple yang sama (terenkripsi menyeluruh oleh Apple). Menghapus aplikasi tidak menghapus ID ini, ' +
    'sehingga saldo Anda tetap ada setelah aplikasi dipasang ulang.',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    'API Key yang Anda masukkan sendiri disimpan di <strong>Rantai Kunci</strong> iOS, ditandai hanya dapat dibaca di perangkat ini dan hanya ' +
    'saat perangkat tidak terkunci. Key tidak pernah diunggah dan tidak berpindah ke perangkat lain melalui cadangan.',
  'privacy.mic.title': 'Mikrofon',
  'privacy.mic.p':
    'Mikrofon hanya digunakan setelah Anda mengetuk “Mulai”. Sesi yang sedang aktif tetap merekam, menerjemahkan, dan menyimpan transkrip ' +
    'saat Anda berpindah aplikasi atau mengunci layar. Ketuk “Berhenti” untuk mengakhiri perekaman. Gangguan audio sistem, seperti ' +
    'panggilan telepon, akan menjeda sesi; sesi dilanjutkan saat sistem mengizinkan. Indikator mikrofon oranye dari sistem menunjukkan ' +
    'kapan perekaman sedang aktif.',
  'privacy.purchase.title': 'Pembelian',
  'privacy.purchase.p':
    'Pembelian waktu maupun “Semua bahasa” (saat memakai Key sendiri) dilakukan melalui <strong>pembelian in-app Apple</strong>. ' +
    'Apple menangani pembayaran dari awal sampai akhir; kami <strong>tidak pernah menerima atau melihat</strong> metode pembayaran, ' +
    'nama, atau detail tagihan Anda.',
  'privacy.purchase.credit':
    'Membeli waktu: aplikasi meminta Apple mencatat ID akun Anda di dalam transaksi, lalu mengirim transaksi yang ditandatangani Apple ' +
    'ke server kami untuk diverifikasi dan dikreditkan; server hanya mengkreditkan akun yang tercantum dalam transaksi. ' +
    'Pengembalian dana ditangani oleh Apple, yang memberi tahu server kami untuk menarik kembali waktunya.',
  'privacy.purchase.all': '“Semua bahasa”: aplikasi hanya menanyakan kepada sistem apakah item ini sudah dibeli; server kami tidak terlibat.',
  'privacy.delete.title': 'Akses dan penghapusan',
  'privacy.delete.p':
    'ID akun Anda ada di Pengaturan → Sisa waktu dalam aplikasi, dengan tombol Salin. Untuk melihat atau menghapus data tentang Anda ' +
    'yang disimpan server kami, kirimkan ID tersebut ke <a href="mailto:winer632@qq.com">winer632@qq.com</a> dan kami akan menghapus ' +
    'semua catatan akun tersebut di server (snapshot dan salinan di lokasi terpisah akan kedaluwarsa setelah masa penyimpanannya berakhir). ' +
    'Sisa waktu tidak bisa dipulihkan setelah dihapus. Pengembalian dana untuk pembelian diajukan kepada Apple.',
  'privacy.children.title': 'Anak-anak',
  'privacy.children.p':
    'Aplikasi ini ditujukan untuk penerjemahan bisnis dan sehari-hari. Aplikasi ini tidak ditujukan untuk anak-anak dan tidak dengan sengaja ' +
    'mengumpulkan apa pun dari mereka.',
  'privacy.changes.title': 'Perubahan',
  'privacy.changes.p':
    'Jika kebijakan ini berubah secara material, kami akan memperbarui tanggal di bagian atas. Aplikasi ini tidak memerlukan pendaftaran ' +
    'dan kami tidak punya cara untuk menghubungi Anda, jadi halaman inilah yang menjadi acuan.',
  'privacy.contact.title': 'Kontak',
  'privacy.contact.p': 'Pertanyaan apa pun tentang privasi: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
