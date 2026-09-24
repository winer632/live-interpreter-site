/**
 * 网站文案 · Filipino。英文写在三个页面的 HTML 里，是翻译的底本；
 * 键与 zh.js 一一对应，链接、<code>、邮箱原样保留（有测试盯着）。
 * 提到 App 里的按钮和菜单时，用 public/i18n/fil.js 里的原话；Apple 没有菲律宾语界面，Apple 的术语保留英文。
 * 语言名跟 App 里显示的一致（系统 fil 名称表：Chinese、Ingles、Japanese…）。
 */
siteI18n('fil', {
  'nav.support': '← Suporta',
  'nav.setup': 'Pagkuha ng API Key',
  'nav.privacy': 'Patakaran sa privacy',

  // setup.html
  'setup.doc.title': 'Pagkuha ng Qwen API Key · Duo Interpreter',
  'setup.title': 'Pagkuha ng Qwen API Key',
  'setup.sub': 'Mga sampung minuto. Gawin ito sa browser ng computer; ang huling hakbang lang ang gagawin sa phone.',
  'setup.intro':
    '<strong>Walang kasamang translation credit</strong> ang app. Kumokonekta ito sa Alibaba Cloud Model Studio gamit ang sarili mong account, ' +
    'at sinisingil ka ng Alibaba Cloud ayon sa nagamit mo. Hindi kailanman dumadaan sa mga server namin ang boses mo.',
  'setup.remember':
    '<strong>Dalawang bagay na dapat tandaan</strong> — halos lahat ng pagpalya ay dahil sa isa sa mga ito. Dapat gawin ang key sa region na ' +
    '<strong>Singapore</strong>; hindi gagana rito ang mga key mula sa ibang region. At <strong>isang beses lang ipinapakita nang buo</strong> ang key — ' +
    'kapag isinara mo ang dialog na iyon, hindi na ito mababasa ulit.',
  'setup.s1.title': 'Gumawa ng Alibaba Cloud account',
  'setup.s1.signup':
    'Mag-sign up sa <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Sapat na ang email address — <strong>hindi kailangan ng phone number sa mainland China</strong>.',
  'setup.s1.sso': 'Puwede ka ring mag-sign in gamit ang Google o GitHub account para hindi na mag-fill out ng form.',
  'setup.s1.card':
    'Kailangan mong magdagdag ng credit card o PayPal bago ma-activate ang mga service. Walang singil ang pagdaragdag nito; ' +
    'sisingilin ka lang ayon sa aktuwal na paggamit.',
  'setup.s1.alt': 'Sign-in page ng Alibaba Cloud',
  'setup.s2.title': 'Ilipat ang region sa Singapore',
  'setup.s2.p':
    'Buksan ang Model Studio console sa <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'at tiyaking <strong>Singapore ang nakalagay na region sa kanang itaas</strong>. Doon na nakaturo ang link, pero minsan ibinabalik ka ' +
    'ng pag-sign in sa default na region, kaya sulit itong silipin.',
  'setup.s2.alt': 'Model Studio console na Singapore ang region',
  'setup.s2.caption':
    'Nasa kanang itaas ang region. Ang <strong>API-KEY</strong> na button sa kaliwang ibaba ang susunod mong pupuntahan — wala ito sa main navigation.',
  'setup.s3.title': 'I-activate ang Model Studio',
  'setup.s3.p':
    'Sa unang pagbisita, hihilingin sa iyong i-activate ang service: tanggapin ang terms at kumpirmahin. ' +
    'Kung activated na ang account mo, hindi mo makikita ang screen na ito — dumiretso na sa susunod na hakbang.',
  'setup.s4.title': 'Buksan ang API Key page',
  'setup.s4.p':
    'I-click ang <strong>API-KEY</strong> na button sa <strong>kaliwang ibaba</strong> ng console. Hiwalay itong button na hugis-pill ' +
    'at hindi item sa main navigation, kaya madali itong makaligtaan sa unang beses.',
  'setup.s4.alt': 'Ang API Key page na may Create API Key na button',
  'setup.s4.caption': 'Pagdating mo sa page na ito, i-click ang <strong>Create API Key</strong> sa kanan.',
  'setup.s5.title': 'Gawin ang key',
  'setup.s5.p':
    'I-click ang <strong>Create API Key</strong>. Piliin ang default na workspace, itakda ang permissions sa <strong>All</strong>, ' +
    'puwedeng iwanang blangko ang description, at kumpirmahin.',
  'setup.s5.alt': 'Ang Create API Key na dialog',
  'setup.s6.title': 'Kopyahin agad ang buong key',
  'setup.s6.copy':
    'Nagsisimula ang key sa <code>sk-</code> at mahaba ito — <strong>kopyahin lahat</strong>. ' +
    'Ang key na kulang ng huling ilang character ay papalya nang eksakto gaya ng maling key. Gamitin ang copy button sa dialog.',
  'setup.s6.download':
    'May <strong>Download</strong> din sa dialog na nagse-save ng key sa isang file — mas ligtas kaysa umasa lang sa clipboard.',
  'setup.s6.note':
    '<strong>Kapag nagsara ang dialog na ito, hindi mo na makikita ang buong key.</strong> ' +
    'Kung mawala mo ito, burahin lang ang key na iyon at gumawa ng bago — walang ibang maaapektuhan.',
  'setup.s6.alt': 'Ang dialog na isang beses lang nagpapakita ng key, may Copy at Download',
  'setup.s6.caption': 'Tinakpan ng itim ang key at ang mga dedicated domain sa screenshot na ito.',
  'setup.s7.title': 'I-paste ito sa app at pindutin ang “Subukan”',
  'setup.s7.p':
    'Balik sa phone: <strong>Mga Setting → Paano magbayad</strong>, piliin ang “Gamitin ang sarili kong Alibaba Cloud key”, ' +
    'at lalabas ang seksyong <strong>Qwen API Key</strong>. Iwan ang site sa <strong>Internasyonal · Singapore</strong>, i-paste ang key, ' +
    'pindutin ang <strong>I-save</strong>, tapos <strong>Subukan</strong>. Kapag may berdeng “Nakakonekta — gumagana ang key”, tapos ka na.',
  'setup.s7.start':
    'Panghuli, isara ang Mga Setting, pumili ng wika sa “Wika ko” at “Wika ng kausap”, at magsimula. Libre ang Chinese ⇄ Ingles; ' +
    'isang bili lang ng “Lahat ng wika” sa Mga Setting para mabuksan ang iba pa.',
  'setup.s7.alt': 'Ang Mga Setting ng app na naka-save ang key at pasado ang test',
  'setup.s7.caption': 'Ang berdeng linyang iyan ang palatandaan na gumana.',
  'setup.help.title': 'Kung ayaw kumonekta',
  'setup.help.badKey':
    '<strong>“Invalid ang API Key”</strong> — siyam sa bawat sampung beses, mali ang region. Tingnan kung Singapore ang nasa kanang itaas ng console; ' +
    'kung hindi, lumipat at <strong>gumawa ng bagong key</strong>, dahil hindi naililipat ang key sa ibang region. ' +
    'Tiyakin din na walang naputol sa dulo nang i-paste mo ito.',
  'setup.help.forbidden':
    '<strong>“Hindi matawag ng key na ito ang model”</strong> — hindi pa na-activate ng account ang Model Studio, o wala itong magagamit na balance. Tingnan sa console.',
  'setup.help.timeout':
    '<strong>“Nag-time out ang koneksyon”</strong> — hindi maabot ng phone ang <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Subukan ang ibang network, halimbawa mobile data sa halip na Wi-Fi ng opisina.',
  'setup.help.noKey':
    '<strong>Gusto mo munang subukan, o hindi ka makakuha ng key?</strong> Hindi kailangan ng key: ' +
    '<strong>Mga Setting → Paano magbayad → Bumili ng oras (walang sign-up)</strong>. May 5 libreng minuto ang bagong device — ' +
    'pindutin ang “Simulan” para subukan; pagkatapos nito, bumili ng oras sa app at gagana ang lahat ng wika.',
  'setup.help.contact':
    'Ayaw pa rin? Sumulat sa <a href="mailto:winer632@qq.com">winer632@qq.com</a> at isama ang device mo, ang bersyon ng iOS, ' +
    'at ang eksaktong mensaheng ibinigay ng Subukan na button — mas mapapabilis nito ang pag-aayos. <strong>Huwag ipadala sa amin ang key mo.</strong>',

  // index.html
  'index.doc.title': 'Suporta · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Suporta',
  'index.sub':
    'Dalawahang pagsasalin para sa harapang pag-uusap. May subtitles at boses agad habang nagsasalita, at kusang natutukoy ang direksyon.',
  'index.trial.title': 'Subukan ito nang limang minuto nang libre',
  'index.trial.p':
    'Walang sign-up at walang key: sa unang beses mong buksan ang app sa bagong device, bibigyan ka nito ng <strong>limang libreng minuto</strong>, ' +
    'na makikita sa itaas. Piliin ang “Wika ko” at “Wika ng kausap” sa itaas ng subtitles, i-tap ang “Simulan” at magsalita lang — ' +
    'totoong pagsasalin ito, may subtitles at boses habang nag-uusap kayo. Isang beses lang makakakuha ng trial ang bawat device; ' +
    'pagkatapos nito, bumili ng oras sa app o gamitin ang sarili mong Alibaba Cloud key.',
  'index.pay.title': 'Regular na paggamit',
  'index.pay.intro': 'Dalawang paraan ng pagbabayad, na pinipili sa <strong>Mga Setting → Paano magbayad</strong>:',
  'index.pay.credit':
    '<strong>Bumili ng oras ng pagsasalin sa app</strong> (ang default) — walang anumang account; buksan lang at gamitin, ' +
    'may limang libreng minuto sa bagong device. May 1, 5 at 10 oras, at sakop nito ang lahat ng wika. ' +
    'Kapag may boses ang salin, isang minuto ang bawas sa bawat minuto; kapag subtitles lang, sangkatlo lang ang bawas.',
  'index.pay.key':
    '<strong>Gamitin ang sarili mong Alibaba Cloud key</strong> — direktang sisingilin ka ng Alibaba Cloud sa nagamit mo. ' +
    'Sa ganitong paraan, libre ang Chinese ⇄ Ingles; mabubuksan ang lahat ng iba sa isang bili lang ng “Lahat ng wika”, habambuhay, ' +
    'kasama ang mga wikang idadagdag pa. ' +
    '<a href="./setup.html">Step-by-step na gabay sa pagkuha ng API Key →</a>',
  'index.langs.title': 'Mga wika',
  'index.langs.intro':
    'Piliin ang mga ito sa dalawang column sa itaas ng subtitles: “Wika ko” sa kaliwa, “Wika ng kausap” sa kanan. ' +
    'Naisasalin sa isa’t isa ang 24 na wikang ito — maliban sa ilang kombinasyong nakalista sa ibaba — at kusang natutukoy ang direksyon:',
  'index.langs.list':
    'Chinese, Ingles, Japanese, Korean, German, French, Spanish, Portuguese, Italian, Russian, Hindi, Indonesian, Vietnamese, ' +
    'Arabic, Thai, Turkish, Filipino, Polish, Urdu, Hebrew, Persian, Malay, Dutch, Bangla',
  'index.langs.bangla':
    '<strong>Subtitles lang ang Bangla</strong>: ang sinasabi ng iba ay ipinapakita sa Bangla bilang text, hindi binibigkas; ' +
    'kapag Bangla ang sinasalita, may boses pa rin ang salin.',
  'index.langs.unpaired':
    'May ilang kombinasyong hindi kasama: Indonesian at Malay, at Hindi at Urdu (nagkakaintindihan na ang mga nagsasalita nito), ' +
    'pati ang Arabic, Urdu at Persian sa isa’t isa (iisa ang alpabeto; hindi pa matukoy ng app kung sino ang nagsasalita).',
  'index.langs.cantonese': '<strong>Cantonese ⇄ Mandarin</strong> — may boses sa isang direksyon, subtitles lang sa kabila.',
  'index.faq.title': 'Mga karaniwang tanong',
  'index.faq.sound.q': 'Walang tunog',
  'index.faq.sound.a':
    'Tingnan ang <strong>Ring/Silent switch</strong> sa itaas ng mga volume button sa kaliwang gilid — kapag may kulay orange, naka-silent ito. ' +
    'Pagkatapos, tiyaking hindi naka-“🔇 Walang boses” ang pagpili ng boses sa itaas, at hindi ka nagsasalin papuntang Bangla o Cantonese, ' +
    'na subtitles lang. Kung tahimik pa rin, lakasan ang volume: magkahiwalay ang volume ng earpiece at ng speaker.',
  'index.faq.earpiece.q': 'Pakikinig nang sarilinan sa halip na malakas',
  'index.faq.earpiece.a':
    'Ilipat ang pagpili ng boses sa itaas sa <strong>📞 Earpiece</strong> at sa receiver lalabas ang salin, habang nakadikit ang phone ' +
    'sa tainga na parang may kausap sa tawag. Puwede kang magpalit anumang oras, kahit nasa gitna ng session.',
  'index.faq.mic.q': '“Dinisconnect ng system ang mikropono”',
  'index.faq.mic.a':
    'Kadalasan, may ibang app na kumuha ng mikropono — tawag, voice message, recorder — o nagpalit ng mode ang Bluetooth headset. ' +
    'Ihinto at simulan ulit para bumalik ito sa ayos. Kung paulit-ulit itong nangyayari sa Bluetooth, subukan ang built-in na mikropono o wired na headset.',
  'index.faq.echo.q': 'Matinis na feedback o echo kapag naka-speaker',
  'index.faq.echo.a':
    'Sa iisang kuwarto, nasasagap ulit ng mikropono ang lumalabas sa speaker. Sa <strong>Mga Setting → Pag-iwas sa echo</strong>, ' +
    'piliin ang “Hinaan ang mic sa playback” o “I-mute ang mic sa playback”, o hinaan lang ang volume. ' +
    'Kapag earpiece ang gamit, hindi ito mangyayari.',
  'index.faq.stuck.q': 'Hindi na nag-a-update ang subtitles',
  'index.faq.stuck.a':
    'Ipinapakita ng bar sa itaas ang kalagayan ng session. Kadalasang dahilan ang naputol na network o ang pag-mute ng system sa mikropono ' +
    '(malinaw itong iniuulat). Karaniwang naaayos ito kapag inihinto at sinimulan ulit. Kung biniling oras ang gamit, tingnan ang natitirang oras ' +
    'sa itaas; kung sariling key, ipinapakita nang walang binago ang anumang problema sa quota mula sa Alibaba Cloud.',
  'index.faq.phone.q': 'Paglipat sa bagong phone',
  'index.faq.phone.a':
    'Nakatala sa account mo ang biniling oras — isang random na ID na ginagawa ng app at itinatago sa iCloud Keychain: ' +
    'mag-sign in sa parehong Apple Account sa bagong phone nang naka-on ang iCloud Keychain, at naroon na ang balance mo. ' +
    'Ang “Lahat ng wika”, na binili habang sariling key ang gamit, ay maibabalik nang libre sa ' +
    '<strong>Mga Setting → Lahat ng wika → I-restore ang mga binili</strong>.',
  'index.faq.cantonese.q': 'Bakit sa isang direksyon lang may boses ang Cantonese ⇄ Mandarin',
  'index.faq.cantonese.a':
    'Kaya ng model na <strong>umintindi</strong> at <strong>sumulat</strong> ng Cantonese, pero hindi nito kayang <strong>bigkasin</strong> ito — ' +
    'sa language table ng provider, subtitles lang ito. Kaya kapag Cantonese ang sinalita mo, Mandarin na may boses ang makukuha mo; ' +
    'kapag Mandarin ang sinalita mo, Cantonese na subtitles lang ang makukuha mo. Parehong Chinese characters ang gamit ng dalawa, ' +
    'kaya hindi awtomatikong matutukoy ang direksyon — itakda ito gamit ang pagpili ng direksyon.',
  'index.faq.direction.q': 'Paminsan-minsang bumabaligtad ang direksyon, hal. sa pagitan ng Spanish at Portuguese',
  'index.faq.direction.a':
    'Kapag iisa ang alpabeto ng dalawang wika (Ingles, Spanish, Portuguese, Italian, French, German, Indonesian, Vietnamese at iba pa), ' +
    'nakabatay sa pagpili ng salita ang pagtukoy at puwede itong mag-alinlangan sa maiikling parirala o pangalan. May dagdag na kontrol ' +
    'ng direksyon sa itaas ang mga kombinasyong ito — ilipat ito mula sa “Direksyon · awtomatiko” papunta sa isang nakapirming direksyon para i-lock ito.',
  'index.contact.title': 'Makipag-ugnayan',
  'index.contact.p':
    'Ipadala ang mga tanong, mungkahi at kahilingan sa refund sa <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'karaniwang sinasagot ito sa loob ng isa o dalawang araw ng trabaho. Mas mabilis ito kung sasabihin mo ang device, ang bersyon ng iOS, ' +
    'ang dalawang wika, at kung bumili ka ng oras o sariling key ang gamit mo. Para sa biniling oras, isama ang <strong>Account ID</strong> na nasa Mga Setting.',

  // privacy.html
  'privacy.doc.title': 'Patakaran sa Privacy · Duo Interpreter',
  'privacy.title': 'Patakaran sa Privacy',
  'privacy.sub': 'Duo Interpreter · Huling na-update noong Setyembre 24, 2026',
  'privacy.translated':
    'Salin ang patakarang ito. Kung may pagkakaiba ito sa <a href="?lang=en">bersyong Ingles</a>, ang bersyong Ingles ang masusunod.',
  'privacy.short':
    '<strong>Sa madaling salita:</strong> may dalawang paraan ng paggamit ang app. Bilang default, bumibili ka ng oras ng pagsasalin nang walang sign-up: ' +
    'direktang pumupunta ang boses mo mula sa phone mo papunta sa Alibaba Cloud Model Studio para isalin at <strong>hindi kailanman dumadaan sa server namin</strong>; ' +
    'ang itinatago lang ng server namin ay isang random na numero ng account, kung gaano karaming oras ang binili mo, at kung gaano karami ang nagamit mo. ' +
    'Kung sarili mong Alibaba Cloud key ang gamit mo, wala kaming kinokolekta. Walang analytics, advertising o tracking, ' +
    'at nananatili sa phone mo ang mga transcript.',
  'privacy.collect.title': 'Ano ang kinokolekta namin',
  'privacy.collect.intro': 'Depende ito sa pinili mo sa Mga Setting → Paano magbayad.',
  'privacy.credit.title': 'Pagbili ng oras (ang default, walang sign-up)',
  'privacy.credit.intro':
    'Para matandaan kung gaano karaming oras ang binili mo at para pigilan ang pang-aabuso, kumokonekta ang app sa server naming ' +
    '<code>api.duo-interpreter.com</code> (naka-host sa Microsoft Azure sa Singapore). Ito ang itinatago ng server:',
  'privacy.credit.id':
    '<strong>Isang random na account ID</strong>: isang numero (UUID) na ginagawa ng app sa unang beses mo itong gamitin. ' +
    'Wala itong kinalaman sa pangalan, email, phone number o Apple Account mo. Nakatago ito sa iCloud Keychain mo, kaya hindi nawawala ' +
    'ang balance mo kapag nag-reinstall ka, at sumusunod ito sa iyo sa bagong phone na may parehong Apple Account.',
  'privacy.credit.device':
    '<strong>Mga credential ng device</strong>: para sa bawat device, ang identifier at public key ng isang Apple App Attest key, ' +
    'kasama kung kailan ito nairehistro at kung kailan huling ginamit. Pinapatunayan ng mga ito na galing ang mga request sa tunay na kopya ' +
    'ng app na ito, hindi sa binagong bersyon.',
  'privacy.credit.purchases':
    '<strong>Mga binili</strong>: ang transaction ID ng Apple, ang produkto (1, 5 o 10 oras), kung kailan ito binili, ' +
    'kung test (sandbox) purchase ito, at kung na-refund ito.',
  'privacy.credit.usage':
    '<strong>Paggamit</strong>: kung kailan nagsimula at natapos ang bawat session ng pagsasalin, ang mode nito (may boses ang salin o subtitles lang), ' +
    'kung gaano karaming oras ang nagamit nito, ilang pansamantalang key ang hiningi nito, at bawat pagbabago sa balance mo.',
  'privacy.credit.trial':
    '<strong>Ang 5-minutong trial</strong> ay ibinibigay nang isang beses bawat device. Para maiwasan ang paulit-ulit na pag-claim, ' +
    'nagbibigay ang app sa server ng isang beses lang magagamit na Apple DeviceCheck token; ginagamit ito ng server para hilingin sa Apple ' +
    'na tingnan, at saka itakda, ang isang bit na itinatago ng Apple para sa device na ito sa ngalan namin (“nagamit na ang trial”). ' +
    'Isang beses lang ginagamit ang token at hindi ito itinatago, at ang bit lang na iyon ang itinatago ng Apple para sa amin, ' +
    'nang hindi sinasabi sa amin kung aling device ito.',
  'privacy.credit.never':
    '<strong>Hindi kailanman natatanggap</strong> ng server ang boses, subtitles o salin mo; ang pangalan, email, phone number, lokasyon ' +
    'o mga contact mo; o ang mga detalye ng pagbabayad mo.',
  'privacy.key.title': 'Paggamit ng sarili mong Alibaba Cloud key',
  'privacy.key.p': 'Sa mode na ito, hindi kumokonekta ang app sa server namin, at <strong>wala kaming kinokolekta</strong>.',
  'privacy.both.title': 'Alinman sa dalawa',
  'privacy.both.p':
    'Walang third-party na analytics, advertising o tracking sa app. Hindi kami nagpapatakbo ng analytics o ads, ' +
    'hindi ka namin tina-track sa iba’t ibang app o website, at hindi kami nagbebenta o nagbabahagi ng anumang data.',
  'privacy.logs.title': 'Mga server log at tagal ng pagtatago',
  'privacy.logs.ip':
    'Sa memory lang ginagamit ang IP address mo para limitahan ang dami ng request (para pigilan ang pang-aabuso), at tinatanggal ito ' +
    'isang oras pagkatapos ng huli mong request; hindi ito inilalagay sa log o itinatago. Mga event lang ang itinatala ng mga server log, ' +
    'gaya ng “may nag-register na device” (kasama lang ang unang 8 character ng account ID), “na-credit ang isang pagbili” ' +
    '(ang produkto at kung test purchase ito), “na-apply ang isang refund” (ang transaction ID), at mga error. ' +
    'Awtomatikong binubura ang mga server log pagkalipas ng 30 araw.',
  'privacy.logs.ledger':
    'Kumukuha ng snapshot ng ledger sa server bawat oras, at itinatago ang pinakabagong 48; may naka-encrypt na kopyang itinatago ' +
    'sa ibang lokasyon (off-site) nang 30 araw. Itinatago ang mga record ng account, pagbili at paggamit hangga’t umiiral ang account, ' +
    'dahil kailangan ang mga ito para ma-reconcile ang mga libro at maasikaso ang mga refund ng Apple.',
  'privacy.speech.title': 'Saan napupunta ang boses mo',
  'privacy.speech.intro':
    'Sa parehong mode, ang audio mula sa mikropono mo ay <strong>live at direktang pumupunta mula sa phone mo papunta sa Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Hindi ito kailanman dumadaan sa server namin; hindi namin ito naririnig at wala kaming maitatago:',
  'privacy.speech.credit':
    'Kapag bumibili ka ng oras, kumokonekta ang app sa <code>dashscope-intl.aliyuncs.com</code> (Singapore) gamit ang Alibaba Cloud account namin: ' +
    'pansamantalang key lang na nag-e-expire pagkalipas ng 60 segundo ang ibinibigay ng server namin sa app, at hinahawakan ang audio ' +
    'ayon sa kasunduan namin sa Alibaba Cloud.',
  'privacy.speech.key':
    'Kapag sarili mong key ang gamit, kumokonekta ang app sa site na pinili mo sa Mga Setting (<code>dashscope-intl.aliyuncs.com</code> o ' +
    '<code>dashscope.aliyuncs.com</code>) gamit ang key mo, at hinahawakan ang audio ayon sa kasunduan <strong>mo</strong> sa Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Para sa ginagawa ng Alibaba Cloud sa audio, tingnan ang ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">patakaran nila sa privacy</a>.',
  'privacy.speech.hosts':
    'Kumokonekta lang ang app sa Alibaba Cloud Model Studio, sa server namin (kapag bumibili lang ng oras), at sa mga serbisyo ng Apple ' +
    '(in-app purchase, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Bigkasin ang salin sa boses ng nagsasalita</strong> (naka-on bilang default, puwedeng i-off sa Mga Setting): live na ginagaya ' +
    'ng Alibaba Cloud ang boses ng nagsasalita mula sa mismong audio na isinasalin nito, at sinusundan kung sino ang nagsasalita — ' +
    'ang dalawang tao sa usapan. Ang app man o kami ay hindi hiwalay na nangongolekta, nagtatago o nag-a-upload ng anumang voiceprint; ' +
    'ito rin ang audio na naipadala na para isalin.',
  'privacy.device.title': 'Ano ang nananatili sa phone mo',
  'privacy.transcripts.title': 'Mga transcript',
  'privacy.transcripts.p':
    'Isinusulat ang mga pinal na linya sa isang file bawat araw sa loob ng sariling container ng app. <strong>Hindi kailanman ina-upload</strong> ' +
    'ang mga ito at hindi kasama sa iCloud backup. Puwede mong basahin, i-export o burahin ang mga ito sa “Kasaysayan” sa app; ' +
    'kapag binura ang app, mabubura rin ang mga ito.',
  'privacy.account.title': 'Account ID',
  'privacy.account.p':
    'Ang random na account ID na inilarawan sa itaas ay nakatago sa iOS Keychain at, kung naka-on ang iCloud Keychain, nagsi-sync ' +
    'sa pagitan ng mga device mo na may parehong Apple Account (end-to-end encrypted ng Apple). Hindi ito natatanggal kapag binura ang app, ' +
    'kaya naroon pa rin ang balance mo pagkatapos mag-reinstall.',
  'privacy.apikey.title': 'Mga API key',
  'privacy.apikey.p':
    'Ang mga API key na ikaw mismo ang naglagay ay nakatago sa iOS <strong>Keychain</strong>, na naka-mark na mababasa lang sa device na ito ' +
    'at habang naka-unlock lang ito. Hindi kailanman ina-upload ang mga ito at hindi lumilipat sa ibang device sa pamamagitan ng backup.',
  'privacy.mic.title': 'Mikropono',
  'privacy.mic.p':
    'Ginagamit lang ang mikropono pagkatapos mong pindutin ang “Simulan”. Tuloy ang pagre-record, pagsasalin at pag-save ng transcript ' +
    'ng aktibong session kahit lumipat ka ng app o i-lock mo ang screen. Pindutin ang “Ihinto” para tapusin ang pagkuha ng audio. ' +
    'Pinapahinto muna ng mga audio interruption ng system, gaya ng tawag, ang session; nagpapatuloy ito kapag pinayagan ng system. ' +
    'Ipinapakita ng orange na microphone indicator ng system kapag aktibo ang pagkuha ng audio.',
  'privacy.purchase.title': 'Mga pagbili',
  'privacy.purchase.p':
    'Parehong dumadaan sa <strong>in-app purchase ng Apple</strong> ang pagbili ng oras at ang “Lahat ng wika” (kapag sariling key ang gamit). ' +
    'Ang Apple ang humahawak sa buong proseso ng pagbabayad; <strong>hindi namin kailanman natatanggap o nakikita</strong> ang paraan ng pagbabayad, ' +
    'pangalan o billing details mo.',
  'privacy.purchase.credit':
    'Pagbili ng oras: hinihiling ng app sa Apple na itala ang account ID mo sa transaksyon, pagkatapos ay ipinapadala ang transaksyong ' +
    'pinirmahan ng Apple sa server namin para ma-verify at ma-credit; ang account lang na nakapangalan sa transaksyon ang kinikreditan ng server. ' +
    'Ang Apple ang humahawak sa mga refund, at inaabisuhan nito ang server namin para bawiin ang oras.',
  'privacy.purchase.all': '“Lahat ng wika”: tinatanong lang ng app sa system kung nabili na ito; hindi kasali ang server namin.',
  'privacy.delete.title': 'Pag-access at pagbura',
  'privacy.delete.p':
    'Nasa Mga Setting → Natitirang oras sa app ang account ID mo, may button na Kopyahin. Para makita o mabura ang itinatago ng server namin ' +
    'tungkol sa iyo, ipadala ito sa <a href="mailto:winer632@qq.com">winer632@qq.com</a> at buburahin namin ang lahat ng record ng account na iyon ' +
    'sa server (mag-e-expire ang mga snapshot at ang off-site na kopya pagkalipas ng kani-kanilang tagal ng pagtatago). ' +
    'Hindi na maibabalik ang natitirang oras pagkatapos ng pagbura. Sa Apple hinihingi ang refund para sa mga binili.',
  'privacy.children.title': 'Mga bata',
  'privacy.children.p':
    'Para sa pagsasalin sa negosyo at sa pang-araw-araw ang app na ito. Hindi ito nakatuon sa mga bata at hindi ito sadyang nangongolekta ' +
    'ng anuman mula sa kanila.',
  'privacy.changes.title': 'Mga pagbabago',
  'privacy.changes.p':
    'Kung magkaroon ng mahalagang pagbabago sa patakarang ito, ia-update namin ang petsa sa itaas. Walang sign-up ang app ' +
    'at wala kaming paraan para makontak ka, kaya ang page na ito ang magsisilbing talaan.',
  'privacy.contact.title': 'Contact',
  'privacy.contact.p': 'Anumang tanong tungkol sa privacy: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
