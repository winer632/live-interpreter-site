/**
 * 网站文案 · Türkçe。英文写在三个页面的 HTML 里，是翻译的底本；键和页面上的 data-i18n 一一对应。
 * 提到 App 里的按钮和菜单时，用 public/i18n/tr.js 里的原话，和用户在 App 里看到的一致。
 */
siteI18n('tr', {
  'nav.support': '← Destek',
  'nav.setup': 'API anahtarı alma',
  'nav.privacy': 'Gizlilik politikası',

  // setup.html
  'setup.doc.title': 'Qwen API anahtarı alma · Duo Interpreter',
  'setup.title': 'Qwen API anahtarı alma',
  'setup.sub': 'Yaklaşık on dakika sürer. Bilgisayarda bir tarayıcıdan yapın; yalnızca son adım telefonda.',
  'setup.intro':
    'Uygulamada <strong>çeviri kredisi bulunmaz</strong>. Uygulama, Alibaba Cloud Model Studio’ya kendi hesabınızla bağlanır ' +
    've kullandığınız kadarını Alibaba Cloud size faturalandırır. Konuşmanız hiçbir zaman sunucularımızdan geçmez.',
  'setup.remember':
    '<strong>Aklınızda tutmanız gereken iki şey var</strong> — hataların neredeyse hepsi bunlardan birinden kaynaklanır. ' +
    'Anahtar <strong>Singapore</strong> (Singapur) bölgesinde oluşturulmalıdır; diğer bölgelerin anahtarları burada çalışmaz. ' +
    'Ayrıca anahtar <strong>yalnızca bir kez tam olarak gösterilir</strong> — o pencereyi kapattıktan sonra bir daha okunamaz.',
  'setup.s1.title': 'Alibaba Cloud hesabı oluşturun',
  'setup.s1.signup':
    '<a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a> adresinden kaydolun. ' +
    'Bir e-posta adresi yeterlidir — <strong>Çin anakarasına ait telefon numarası gerekmez</strong>.',
  'setup.s1.sso': 'Formu doldurmak yerine Google veya GitHub hesabınızla da giriş yapabilirsiniz.',
  'setup.s1.card':
    'Hizmetleri etkinleştirebilmek için bir kredi kartı veya PayPal eklemeniz gerekir. Eklemek herhangi bir ücrete yol açmaz; ' +
    'yalnızca gerçek kullanımınız faturalandırılır.',
  'setup.s1.alt': 'Alibaba Cloud giriş sayfası',
  'setup.s2.title': 'Bölgeyi Singapore olarak değiştirin',
  'setup.s2.p':
    'Model Studio konsolunu <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'adresinden açın ve <strong>sağ üstteki bölgenin Singapore olduğunu</strong> kontrol edin. Bağlantı zaten oraya gider, ' +
    'ancak giriş yaptıktan sonra bazen varsayılan bölgeye dönülür; bu yüzden bir göz atmakta fayda var.',
  'setup.s2.alt': 'Bölgesi Singapore olarak ayarlanmış Model Studio konsolu',
  'setup.s2.caption':
    'Bölge sağ üsttedir. Sol alttaki <strong>API-KEY</strong> düğmesi bir sonraki adımdır — ana menüde yer almaz.',
  'setup.s3.title': 'Model Studio’yu etkinleştirin',
  'setup.s3.p':
    'İlk ziyaretinizde hizmeti etkinleştirmeniz istenir: koşulları kabul edip onaylayın. Hesabınız zaten etkinse bu ekranı ' +
    'görmezsiniz — doğrudan sonraki adıma geçin.',
  'setup.s4.title': 'API Key sayfasını açın',
  'setup.s4.p':
    'Konsolun <strong>sol altındaki</strong> <strong>API-KEY</strong> düğmesine tıklayın. Ana menüdeki bir öğe değil, ' +
    'ayrı ve hap biçiminde bir düğme olduğu için ilk seferde gözden kaçması kolaydır.',
  'setup.s4.alt': 'Create API Key düğmesinin bulunduğu API Key sayfası',
  'setup.s4.caption': 'Bu sayfaya geldiğinizde sağdaki <strong>Create API Key</strong> düğmesine tıklayın.',
  'setup.s5.title': 'Anahtarı oluşturun',
  'setup.s5.p':
    '<strong>Create API Key</strong> düğmesine tıklayın. Varsayılan çalışma alanını seçin, izinleri <strong>All</strong> ' +
    'olarak ayarlayın, isterseniz açıklamayı boş bırakın ve onaylayın.',
  'setup.s5.alt': 'Create API Key penceresi',
  'setup.s6.title': 'Anahtarın tamamını hemen kopyalayın',
  'setup.s6.copy':
    'Anahtar <code>sk-</code> ile başlar ve uzundur — <strong>tamamını kopyalayın</strong>. Son birkaç karakteri eksik olan ' +
    'bir anahtar, yanlış bir anahtarla tamamen aynı şekilde başarısız olur. Penceredeki kopyalama düğmesini kullanın.',
  'setup.s6.download':
    'Pencerede ayrıca anahtarı bir dosyaya kaydeden <strong>Download</strong> düğmesi de var; bu, yalnızca panoya ' +
    'güvenmekten daha güvenlidir.',
  'setup.s6.note':
    '<strong>Bu pencere kapandıktan sonra anahtarın tamamı bir daha görünmez.</strong> Kaybederseniz o anahtarı silip ' +
    'yenisini oluşturmanız yeterlidir — başka hiçbir şey etkilenmez.',
  'setup.s6.alt': 'Anahtarı bir kez gösteren, Copy ve Download düğmeli pencere',
  'setup.s6.caption': 'Bu ekran görüntüsünde anahtar ve özel alan adları karartılmıştır.',
  'setup.s7.title': 'Uygulamaya yapıştırın ve “Test Et” düğmesine dokunun',
  'setup.s7.p':
    'Telefona dönün: <strong>Ayarlar → Ödeme yöntemi</strong> bölümünde “Kendi Alibaba Cloud anahtarımı kullan” seçeneğini seçin; ' +
    '<strong>Qwen API anahtarı</strong> bölümü görünür. Siteyi <strong>Uluslararası · Singapur</strong> olarak bırakın, ' +
    'anahtarı yapıştırın, <strong>Kaydet</strong> düğmesine, ardından <strong>Test Et</strong> düğmesine dokunun. ' +
    'Yeşil renkte “Bağlandı — anahtar çalışıyor” yazısı çıkarsa işlem tamamdır.',
  'setup.s7.start':
    'Son olarak ayarları kapatın, “Benim dilim” ve “Karşı tarafın dili” bölümlerinden dilleri seçin ve başlayın. ' +
    'Çince ⇄ İngilizce ücretsizdir; geri kalan dillerin kilidini ayarlardaki tek bir “Tüm Diller” satın alımı açar.',
  'setup.s7.alt': 'Anahtarın kaydedildiği ve testin başarılı olduğu uygulama ayarları',
  'setup.s7.caption': 'Başarılı olduğunda bu yeşil satırı görürsünüz.',
  'setup.help.title': 'Bağlanamıyorsa',
  'setup.help.badKey':
    '<strong>“Geçersiz API anahtarı”</strong> — on durumun dokuzunda sorun yanlış bölgedir. Konsolun sağ üstünde Singapore ' +
    'yazdığını kontrol edin; yazmıyorsa bölgeyi değiştirip <strong>yeni bir anahtar oluşturun</strong>, çünkü anahtarlar ' +
    'bölgeler arasında taşınamaz. Yapıştırırken sonundan bir şey kesilmediğinden de emin olun.',
  'setup.help.forbidden':
    '<strong>“Bu anahtar modeli çağıramıyor”</strong> — hesapta Model Studio henüz etkinleştirilmemiş ya da kullanılabilir ' +
    'bakiye yok. Konsoldan kontrol edin.',
  'setup.help.timeout':
    '<strong>“Bağlantı zaman aşımına uğradı”</strong> — telefon <code>dashscope-intl.aliyuncs.com</code> adresine ulaşamıyor. ' +
    'Başka bir ağ deneyin; örneğin ofis Wi-Fi’ı yerine hücresel veri.',
  'setup.help.noKey':
    '<strong>Önce denemek mi istiyorsunuz, yoksa anahtar mı alamıyorsunuz?</strong> Anahtar gerekmez: ' +
    '<strong>Ayarlar → Ödeme yöntemi → Süre satın al (kayıt gerekmez)</strong>. Yeni bir cihaz 5 dakika ücretsiz süre alır — ' +
    'denemek için “Başlat” düğmesine dokunun; sonrasında uygulama içinden süre satın alın, tüm diller çalışır.',
  'setup.help.contact':
    'Hâlâ olmuyor mu? Cihazınızı, iOS sürümünü ve “Test Et” düğmesinin verdiği mesajın tam metnini ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a> adresine yazın; bu, sorunu çok daha hızlı çözmemizi sağlar. ' +
    '<strong>Lütfen anahtarınızı bize göndermeyin.</strong>',

  // index.html
  'index.doc.title': 'Destek · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Destek',
  'index.sub':
    'Yüz yüze konuşmalar için iki yönlü sözlü çeviri. Altyazı ve sesli çeviri siz konuştukça gelir; çeviri yönünü uygulama kendisi belirler.',
  'index.trial.title': 'Beş dakika ücretsiz deneyin',
  'index.trial.p':
    'Kayıt yok, anahtar yok: uygulamayı yeni bir cihazda ilk kez açtığınızda size <strong>beş dakika ücretsiz</strong> süre ' +
    'verilir ve kalan süre üstte gösterilir. Altyazıların üstündeki “Benim dilim” ve “Karşı tarafın dili” bölümlerinden ' +
    'dilleri seçin, “Başlat” düğmesine dokunun ve konuşun — bu gerçek bir sözlü çeviridir; altyazı ve ses siz konuştukça gelir. ' +
    'Deneme süresi her cihaza bir kez verilir; sonrasında uygulama içinden süre satın alabilir ya da kendi Alibaba Cloud ' +
    'anahtarınızı kullanabilirsiniz.',
  'index.pay.title': 'Düzenli kullanım',
  'index.pay.intro': '<strong>Ayarlar → Ödeme yöntemi</strong> bölümünden seçebileceğiniz iki ödeme yolu vardır:',
  'index.pay.credit':
    '<strong>Uygulama içinden çeviri süresi satın alın</strong> (varsayılan) — hiçbir hesap gerekmez; açın ve kullanın, ' +
    'yeni bir cihazda ilk beş dakika da ücretsizdir. 1, 5 ve 10 saatlik paketler vardır ve tüm dilleri kapsar. ' +
    'Sesli çeviride bir dakika bir dakika harcar; yalnızca altyazı bunun üçte biri kadar harcar.',
  'index.pay.key':
    '<strong>Kendi Alibaba Cloud anahtarınızı kullanın</strong> — kullandığınız kadarını Alibaba Cloud size doğrudan faturalandırır. ' +
    'Bu durumda Çince ⇄ İngilizce ücretsizdir; diğer her şeyin kilidi, sonradan eklenecek diller de dahil olmak üzere, ' +
    'tek bir “Tüm Diller” satın alımıyla kalıcı olarak açılır. <a href="./setup.html">Adım adım kılavuz: API anahtarı alma →</a>',
  'index.langs.title': 'Diller',
  'index.langs.intro':
    'Dilleri altyazıların üstündeki iki sütundan seçin: solda “Benim dilim”, sağda “Karşı tarafın dili”. Bu 24 dil, aşağıda ' +
    'listelenen birkaç eşleşme dışında birbirine çevrilebilir ve çeviri yönü otomatik olarak belirlenir:',
  'index.langs.list':
    'Çince, İngilizce, Japonca, Korece, Almanca, Fransızca, İspanyolca, Portekizce, İtalyanca, Rusça, Hintçe, Endonezce, ' +
    'Vietnamca, Arapça, Tayca, Türkçe, Filipince, Lehçe, Urduca, İbranice, Farsça, Malayca, Felemenkçe, Bengalce',
  'index.langs.bangla':
    '<strong>Bengalcede yalnızca altyazı vardır</strong>: başkalarının söyledikleri Bengalce olarak yalnızca metin halinde ' +
    'gösterilir, seslendirilmez; Bengalce konuşulduğunda ise çeviri yine sesli gelir.',
  'index.langs.unpaired':
    'Birkaç eşleşme dışarıda bırakıldı: Endonezce ile Malayca ve Hintçe ile Urduca (konuşanlar zaten birbirini anlar), ' +
    'ayrıca Arapça, Urduca ve Farsça kendi aralarında (aynı alfabe; uygulama henüz kimin konuştuğunu ayırt edemiyor).',
  'index.langs.cantonese': '<strong>Kantonca ⇄ Mandarin Çincesi</strong> — bir yönde sesli, diğer yönde yalnızca altyazı.',
  'index.faq.title': 'Sık sorulan sorular',
  'index.faq.sound.q': 'Ses gelmiyor',
  'index.faq.sound.a':
    'Sol kenarda, ses düğmelerinin üstündeki <strong>Zil/Sessiz anahtarını</strong> kontrol edin — turuncu görünüyorsa telefon ' +
    'sessizdedir. Ardından üstteki ses seçicinin “🔇 Ses kapalı” olarak ayarlanmadığından ve yalnızca altyazı sunan Bengalceye ' +
    'ya da Kantoncaya çeviri yapmadığınızdan emin olun. Hâlâ ses yoksa sesi açın: ahizenin ve hoparlörün ses seviyeleri ayrıdır.',
  'index.faq.earpiece.q': 'Çeviriyi hoparlörden değil, kulağınızda dinlemek',
  'index.faq.earpiece.a':
    'Üstteki ses seçiciyi <strong>📞 Ahize</strong> olarak değiştirin; çeviri, telefon görüşmesindeki gibi kulağınıza tuttuğunuz ' +
    'ahizeden gelir. İstediğiniz zaman, oturum sırasında bile geçiş yapabilirsiniz.',
  'index.faq.mic.q': '“Sistem mikrofonun bağlantısını kesti”',
  'index.faq.mic.a':
    'Genellikle mikrofonu başka bir uygulama almıştır — bir arama, sesli mesaj ya da ses kaydedici — veya bir Bluetooth kulaklık ' +
    'mod değiştirmiştir. Düzeltmek için durdurup yeniden başlatın. Bluetooth ile tekrarlanıyorsa yerleşik mikrofonu ya da ' +
    'kablolu bir kulaklığı deneyin.',
  'index.faq.echo.q': 'Hoparlör kullanırken ıslık sesi veya yankı',
  'index.faq.echo.a':
    'Aynı odada hoparlörden çıkan ses mikrofon tarafından yeniden algılanır. <strong>Ayarlar → Yankı işleme</strong> bölümünde ' +
    '“Çalarken mikrofonu kıs” veya “Çalarken mikrofonu kapat” seçeneğini seçin ya da sadece sesi kısın. Ahize kullanmak bu ' +
    'sorunu tamamen ortadan kaldırır.',
  'index.faq.stuck.q': 'Altyazılar güncellenmeyi bıraktı',
  'index.faq.stuck.a':
    'Üstteki çubuk oturumun durumunu gösterir. En yaygın nedenler ağ bağlantısının kopması ya da sistemin mikrofonu sessize ' +
    'almasıdır; ikincisi açıkça bildirilir. Durdurup yeniden başlatmak genellikle sorunu çözer. Süre satın aldıysanız üstteki ' +
    'kalan süreye bakın; kendi anahtarınızı kullanıyorsanız Alibaba Cloud’dan gelen kota hatası olduğu gibi gösterilir.',
  'index.faq.phone.q': 'Yeni telefona geçmek',
  'index.faq.phone.a':
    'Satın aldığınız süre hesabınıza aittir; hesabınız, uygulamanın oluşturup iCloud Anahtar Zinciri’nde sakladığı rastgele ' +
    'bir kimliktir. Yeni telefonda aynı Apple Hesabı ile giriş yapıp iCloud Anahtar Zinciri’ni açtığınızda bakiyeniz oradadır. ' +
    'Kendi anahtarınızı kullanırken satın aldığınız “Tüm Diller” ise ' +
    '<strong>Ayarlar → Tüm Diller → Satın Alınanları Geri Yükle</strong> ile ücretsiz olarak geri gelir.',
  'index.faq.cantonese.q': 'Kantonca ⇄ Mandarin Çincesi neden yalnızca tek yönde sesli',
  'index.faq.cantonese.a':
    'Model Kantoncayı <strong>anlayabilir</strong> ve <strong>yazabilir</strong>, ancak <strong>konuşamaz</strong> — ' +
    'sağlayıcının dil tablosunda Kantonca yalnızca altyazılıdır. Bu yüzden Kantonca konuştuğunuzda Mandarin Çincesi sesli ' +
    'çeviri duyarsınız; Mandarin Çincesi konuştuğunuzda ise yalnızca Kantonca altyazı görürsünüz. Her iki taraf da Çince ' +
    'karakterler kullandığı için yön otomatik olarak algılanamaz — yönü yön seçiciyle belirleyin.',
  'index.faq.direction.q': 'Yön bazen ters dönüyor, örneğin İspanyolca ile Portekizce arasında',
  'index.faq.direction.a':
    'İki dil aynı alfabeyi kullandığında (İngilizce, İspanyolca, Portekizce, İtalyanca, Fransızca, Almanca, Endonezce, ' +
    'Vietnamca vb.) algılama kelime seçimine dayanır ve kısa ifadelerde ya da adlarda kararsız kalabilir. Bu eşleşmelerde ' +
    'üstte ek bir yön seçici çıkar — yönü sabitlemek için “Yön · otomatik” yerine sabit bir yön seçin.',
  'index.contact.title': 'Bize ulaşın',
  'index.contact.p':
    'Sorularınızı, önerilerinizi ve iade taleplerinizi <a href="mailto:winer632@qq.com">winer632@qq.com</a> adresine gönderin; ' +
    'genellikle bir iki iş günü içinde yanıtlıyoruz. Cihazınızı, iOS sürümünü, iki dili ve süre mi satın aldığınızı yoksa ' +
    'kendi anahtarınızı mı kullandığınızı belirtirseniz çok daha hızlı yardımcı olabiliriz. Satın alınan süreyle ilgili ' +
    'konularda Ayarlar’da gösterilen <strong>hesap kimliğini</strong> de ekleyin.',

  // privacy.html
  'privacy.doc.title': 'Gizlilik Politikası · Duo Interpreter',
  'privacy.title': 'Gizlilik Politikası',
  'privacy.sub': 'Duo Interpreter · Son güncelleme: 24 Eylül 2026',
  'privacy.translated':
    'Bu politika bir çeviridir. <a href="?lang=en">İngilizce sürümle</a> arasında bir fark olursa İngilizce sürüm geçerlidir.',
  'privacy.short':
    '<strong>Kısaca:</strong> uygulama iki şekilde çalışır. Varsayılan olarak kayıt olmadan çeviri süresi satın alırsınız: ' +
    'konuşmanız çeviri için telefonunuzdan doğrudan Alibaba Cloud Model Studio’ya gider ve ' +
    '<strong>hiçbir zaman sunucumuzdan geçmez</strong>; sunucumuz yalnızca rastgele oluşturulmuş bir hesap numarasını, ' +
    'ne kadar süre satın aldığınızı ve ne kadarını kullandığınızı saklar. Bunun yerine kendi Alibaba Cloud anahtarınızı ' +
    'kullanırsanız hiçbir şey toplamayız. Analiz, reklam veya izleme yoktur; konuşma kayıtları telefonunuzda kalır.',
  'privacy.collect.title': 'Topladığımız bilgiler',
  'privacy.collect.intro': 'Bu, Ayarlar → Ödeme yöntemi bölümünde neyi seçtiğinize bağlıdır.',
  'privacy.credit.title': 'Süre satın alma (varsayılan, kayıt gerekmez)',
  'privacy.credit.intro':
    'Ne kadar süre satın aldığınızı hatırlamak ve kötüye kullanımı önlemek için uygulama, sunucumuz ' +
    '<code>api.duo-interpreter.com</code> ile iletişim kurar (Singapur’da, Microsoft Azure üzerinde barındırılır). ' +
    'Sunucu şunları saklar:',
  'privacy.credit.id':
    '<strong>Rastgele bir hesap kimliği</strong>: uygulamanın ilk kullanımda oluşturduğu bir numara (UUID). Adınız, e-posta ' +
    'adresiniz, telefon numaranız veya Apple Hesabınızla hiçbir ilgisi yoktur. iCloud Anahtar Zincirinizde saklanır; bu sayede ' +
    'bakiyeniz uygulamayı yeniden yüklediğinizde korunur ve aynı Apple Hesabı ile yeni telefonlarınıza taşınır.',
  'privacy.credit.device':
    '<strong>Cihaz kimlik bilgileri</strong>: her cihaz için bir Apple App Attest anahtarının tanımlayıcısı ve ortak anahtarı ' +
    'ile bu anahtarın ne zaman kaydedildiği ve en son ne zaman kullanıldığı. Bunlar, isteklerin bu uygulamanın değiştirilmiş ' +
    'bir kopyasından değil, orijinal bir kopyasından geldiğini kanıtlar.',
  'privacy.credit.purchases':
    '<strong>Satın almalar</strong>: Apple’ın işlem kimliği, ürün (1, 5 veya 10 saat), satın alma zamanı, test (sandbox) ' +
    'satın alımı olup olmadığı ve iade edilip edilmediği.',
  'privacy.credit.usage':
    '<strong>Kullanım</strong>: her çeviri oturumunun ne zaman başlayıp bittiği, modu (sesli çeviri veya yalnızca altyazı), ' +
    'ne kadar süre kullandığı, kaç geçici anahtar istediği ve bakiyenizdeki her değişiklik.',
  'privacy.credit.trial':
    '<strong>5 dakikalık deneme</strong> her cihaza bir kez verilir. Tekrar tekrar alınmasını önlemek için uygulama, sunucuya ' +
    'tek kullanımlık bir Apple DeviceCheck belirteci verir; sunucu bu belirteçle Apple’dan, Apple’ın bizim adımıza bu cihaz ' +
    'için tuttuğu tek bir biti (“deneme kullanıldı”) önce kontrol etmesini, sonra ayarlamasını ister. Belirteç bir kez ' +
    'kullanılır ve saklanmaz; Apple bizim için yalnızca o biti tutar ve bunun hangi cihaz olduğunu bize söylemez.',
  'privacy.credit.never':
    'Sunucu konuşmanızı, altyazılarınızı veya çevirilerinizi, adınızı, e-posta adresinizi, telefon numaranızı, konumunuzu ' +
    'veya kişilerinizi ya da ödeme bilgilerinizi <strong>hiçbir zaman almaz</strong>.',
  'privacy.key.title': 'Kendi Alibaba Cloud anahtarınızı kullanma',
  'privacy.key.p': 'Bu modda uygulama sunucumuzla iletişim kurmaz ve <strong>hiçbir şey toplamayız</strong>.',
  'privacy.both.title': 'Her iki durumda da',
  'privacy.both.p':
    'Uygulamada üçüncü taraf analiz, reklam veya izleme araçları yoktur. Analiz ya da reklam çalıştırmıyoruz, sizi uygulamalar ' +
    'veya web siteleri arasında izlemiyoruz ve hiçbir veriyi satmıyor ya da paylaşmıyoruz.',
  'privacy.logs.title': 'Sunucu günlükleri ve saklama süresi',
  'privacy.logs.ip':
    'IP adresiniz yalnızca bellekte, istek sıklığını sınırlamak (kötüye kullanımı önlemek) için kullanılır ve son isteğinizden ' +
    'bir saat sonra silinir; günlüğe yazılmaz ve saklanmaz. Sunucu günlükleri yalnızca olayları kaydeder; örneğin ' +
    '“bir cihaz kaydoldu” (hesap kimliğinin yalnızca ilk 8 karakteriyle), “bir satın alma hesaba işlendi” (ürün ve test ' +
    'satın alımı olup olmadığı), “bir iade uygulandı” (işlem kimliği) ve hatalar. Sunucu günlükleri 30 gün sonra otomatik ' +
    'olarak silinir.',
  'privacy.logs.ledger':
    'Hesap defterinin anlık görüntüsü sunucuda her saat alınır ve en son 48 tanesi tutulur; ayrıca şifrelenmiş bir kopyası ' +
    '30 gün boyunca başka bir konumda saklanır. Hesap, satın alma ve kullanım kayıtları, hesap mutabakatı ve Apple iadelerinin ' +
    'işlenmesi için gerekli olduğundan hesap var olduğu sürece saklanır.',
  'privacy.speech.title': 'Konuşmanız nereye gider',
  'privacy.speech.intro':
    'Her iki modda da mikrofonunuzdan gelen ses <strong>canlı olarak ve doğrudan telefonunuzdan Alibaba Cloud Model Studio’ya</strong> ' +
    '(Qwen LiveTranslate) gider. Hiçbir zaman sunucumuzdan geçmez; biz onu duyamayız ve saklayacak bir şeyimiz yoktur:',
  'privacy.speech.credit':
    'Süre satın aldığınızda uygulama, bizim Alibaba Cloud hesabımız üzerinden <code>dashscope-intl.aliyuncs.com</code> ' +
    'adresine (Singapur) bağlanır: sunucumuz uygulamaya yalnızca 60 saniye sonra geçerliliğini yitiren geçici bir anahtar ' +
    'verir ve ses, Alibaba Cloud ile aramızdaki sözleşme kapsamında işlenir.',
  'privacy.speech.key':
    'Kendi anahtarınızla uygulama, ayarlarda seçtiğiniz siteye (<code>dashscope-intl.aliyuncs.com</code> veya ' +
    '<code>dashscope.aliyuncs.com</code>) sizin anahtarınızla bağlanır ve ses, <strong>sizinle</strong> Alibaba Cloud ' +
    'arasındaki sözleşme kapsamında işlenir.',
  'privacy.speech.alibaba':
    'Alibaba Cloud’un sesle ne yaptığını öğrenmek için ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">şirketin gizlilik politikasına</a> bakın.',
  'privacy.speech.hosts':
    'Uygulama yalnızca Alibaba Cloud Model Studio’ya, sunucumuza (yalnızca süre satın alırken) ve Apple’ın hizmetlerine ' +
    '(uygulama içi satın alma, App Attest, DeviceCheck) bağlanır.',
  'privacy.speech.voice':
    '<strong>Çevirileri konuşanın sesiyle seslendirme</strong> (varsayılan olarak açık, ayarlardan kapatılabilir): Alibaba Cloud, ' +
    'çevirdiği sesin aynısından konuşan kişinin sesini canlı olarak taklit eder ve o anda kim konuşuyorsa onu izler — ' +
    'yani konuşmadaki her iki kişi için de geçerlidir. Hiçbir ses izi uygulama ya da bizim tarafımızdan ayrıca toplanmaz, ' +
    'saklanmaz veya yüklenmez; kullanılan ses, zaten çeviri için gönderilen sesin aynısıdır.',
  'privacy.device.title': 'Telefonunuzda kalanlar',
  'privacy.transcripts.title': 'Konuşma kayıtları',
  'privacy.transcripts.p':
    'Tamamlanan satırlar, uygulamanın kendi kapsayıcısında her gün için bir dosyaya yazılır. <strong>Hiçbir zaman yüklenmez</strong> ' +
    've iCloud yedeklemesinin dışında tutulur. Bunları uygulamadaki “Geçmiş” bölümünden okuyabilir, dışa aktarabilir veya ' +
    'silebilirsiniz; uygulamayı silmek bunları da siler.',
  'privacy.account.title': 'Hesap kimliği',
  'privacy.account.p':
    'Yukarıda açıklanan rastgele hesap kimliği iOS Anahtar Zinciri’nde saklanır ve iCloud Anahtar Zinciri açıksa aynı ' +
    'Apple Hesabı’ndaki cihazlarınız arasında eşzamanlanır (Apple tarafından uçtan uca şifrelenir). Uygulamayı silmek onu ' +
    'silmez; bu yüzden yeniden yükledikten sonra bakiyeniz yerinde durur.',
  'privacy.apikey.title': 'API anahtarları',
  'privacy.apikey.p':
    'Kendi girdiğiniz API anahtarları iOS <strong>Anahtar Zinciri</strong>’nde, yalnızca bu cihazda ve yalnızca cihazın ' +
    'kilidi açıkken okunabilir olarak işaretlenmiş şekilde saklanır. Hiçbir zaman yüklenmez ve yedekleme yoluyla başka bir ' +
    'cihaza taşınmaz.',
  'privacy.mic.title': 'Mikrofon',
  'privacy.mic.p':
    'Mikrofon yalnızca “Başlat” düğmesine dokunduktan sonra kullanılır. Etkin bir oturum, başka bir uygulamaya geçtiğinizde ' +
    'veya ekranı kilitlediğinizde kayıt yapmaya, çevirmeye ve konuşma kayıtlarını kaydetmeye devam eder. Kaydı bitirmek için ' +
    '“Durdur” düğmesine dokunun. Aramalar gibi sistem ses kesintileri oturumu duraklatır; sistem izin verdiğinde oturum ' +
    'devam eder. Sistemin turuncu mikrofon göstergesi, kaydın ne zaman etkin olduğunu gösterir.',
  'privacy.purchase.title': 'Satın almalar',
  'privacy.purchase.p':
    'Süre satın alma ve “Tüm Diller” (kendi anahtarınızı kullanırken) <strong>Apple’ın uygulama içi satın alma</strong> ' +
    'sistemiyle yapılır. Ödemeyi baştan sona Apple yürütür; ödeme yönteminizi, adınızı veya fatura bilgilerinizi ' +
    '<strong>hiçbir zaman almayız ve görmeyiz</strong>.',
  'privacy.purchase.credit':
    'Süre satın alma: uygulama, Apple’dan hesap kimliğinizi işleme kaydetmesini ister, ardından Apple tarafından imzalanmış ' +
    'işlemi doğrulanıp hesaba işlenmesi için sunucumuza gönderir; sunucu süreyi yalnızca işlemde belirtilen hesaba ekler. ' +
    'İadeleri Apple yürütür ve süreyi geri almamız için sunucumuzu bilgilendirir.',
  'privacy.purchase.all':
    '“Tüm Diller”: uygulama yalnızca sisteme bunun satın alınıp alınmadığını sorar; sunucumuz bu sürece dahil değildir.',
  'privacy.delete.title': 'Erişim ve silme',
  'privacy.delete.p':
    'Hesap kimliğiniz uygulamada Ayarlar → Kalan süre bölümündedir ve yanında bir “Kopyala” düğmesi bulunur. Sunucumuzun ' +
    'sizinle ilgili tuttuğu bilgileri görmek veya silmek için bu kimliği <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'adresine gönderin; o hesabın sunucudaki tüm kayıtlarını sileriz (anlık görüntüler ve başka konumdaki kopya, saklama ' +
    'sürelerinin sonunda kendiliğinden silinir). Silme işleminden sonra kalan süre geri getirilemez. Satın alımlar için ' +
    'iade talepleri Apple’a yapılır.',
  'privacy.children.title': 'Çocuklar',
  'privacy.children.p':
    'Bu uygulama iş hayatında ve günlük yaşamda sözlü çeviri için tasarlanmıştır. Çocuklara yönelik değildir ve bilerek ' +
    'onlardan hiçbir bilgi toplamaz.',
  'privacy.changes.title': 'Değişiklikler',
  'privacy.changes.p':
    'Bu politika önemli ölçüde değişirse en üstteki tarihi güncelleriz. Uygulamada kayıt olmadığından sizinle iletişime ' +
    'geçme imkânımız yoktur; bu nedenle esas alınacak kayıt bu sayfadır.',
  'privacy.contact.title': 'İletişim',
  'privacy.contact.p': 'Gizlilikle ilgili her türlü soru için: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
