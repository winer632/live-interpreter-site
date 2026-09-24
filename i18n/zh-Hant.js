/**
 * 网站文案 · 繁體中文（台湾用语）。从英文（三个页面的 HTML）翻译，键的顺序和 zh.js 一致；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/zh-Hant.js 里的原话。
 */
siteI18n('zh-Hant', {
  'nav.support': '← 技術支援',
  'nav.setup': '申請 API Key',
  'nav.privacy': '隱私權政策',

  // setup.html
  'setup.doc.title': '申請通義千問 API Key · Duo Interpreter',
  'setup.title': '申請通義千問 API Key',
  'setup.sub': '大約十分鐘。請在電腦的瀏覽器上操作，只有最後一步要用手機。',
  'setup.intro':
    '這個 App <strong>不含任何翻譯額度</strong>。它用你自己的帳號連線阿里雲百煉（Model Studio），' +
    '費用由阿里雲依實際用量向你收取。你的語音不會經過我們的伺服器。',
  'setup.remember':
    '<strong>有兩件事要記住</strong>，幾乎所有失敗都出在其中一處。Key 必須在<strong>新加坡（Singapore）</strong>區域建立，' +
    '其他區域的 Key 在這裡無法使用。另外，Key <strong>只會完整顯示一次</strong>，那個對話框一關就再也看不到了。',
  'setup.s1.title': '註冊阿里雲帳號',
  'setup.s1.signup':
    '到 <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a> 註冊。' +
    '只要有電子郵件地址就行，<strong>不需要中國大陸的手機號碼</strong>。',
  'setup.s1.sso': '也可以直接用 Google 或 GitHub 帳號登入，省去填寫表單。',
  'setup.s1.card': '啟用服務前，需要先綁定信用卡或 PayPal。綁定本身不會扣款，之後依實際用量計費。',
  'setup.s1.alt': '阿里雲登入頁面',
  'setup.s2.title': '把區域切換到新加坡',
  'setup.s2.p':
    '開啟百煉（Model Studio）主控台：<a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a>，' +
    '確認<strong>右上角的區域顯示為 Singapore</strong>。這個連結本來就指向新加坡，但登入時有時會被帶回預設區域，所以值得看一眼。',
  'setup.s2.alt': '區域設為 Singapore 的百煉主控台',
  'setup.s2.caption':
    '區域在右上角。左下角的 <strong>API-KEY</strong> 按鈕就是下一步要去的地方——它不在主導覽列裡。',
  'setup.s3.title': '啟用百煉服務',
  'setup.s3.p': '第一次進入時會要求你啟用服務：同意條款並確認即可。如果帳號已經啟用過，就不會看到這個畫面，直接進行下一步。',
  'setup.s4.title': '開啟 API Key 頁面',
  'setup.s4.p':
    '點主控台<strong>左下角</strong>的 <strong>API-KEY</strong> 按鈕。它是一顆獨立的膠囊形按鈕，' +
    '不是主導覽列裡的項目，第一次很容易漏看。',
  'setup.s4.alt': '有 Create API Key 按鈕的 API Key 頁面',
  'setup.s4.caption': '進到這個頁面後，點右側的 <strong>Create API Key</strong>。',
  'setup.s5.title': '建立 Key',
  'setup.s5.p':
    '點 <strong>Create API Key</strong>。工作空間選預設的那個，權限設為 <strong>All</strong>，描述可以留空，然後確認。',
  'setup.s5.alt': 'Create API Key 對話框',
  'setup.s6.title': '立刻拷貝整串 Key',
  'setup.s6.copy':
    'Key 以 <code>sk-</code> 開頭，而且很長——<strong>一定要整串拷貝</strong>。' +
    '少了最後幾個字元的 Key，失敗的情形和打錯的 Key 一模一樣。請用對話框裡的拷貝按鈕。',
  'setup.s6.download': '對話框裡還有 <strong>Download</strong>，可以把 Key 存成檔案，比只靠剪貼簿保險。',
  'setup.s6.note':
    '<strong>這個對話框一關，完整的 Key 就再也看不到了。</strong>萬一沒存下來，把那把 Key 刪掉、再建一把就好，其他都不受影響。',
  'setup.s6.alt': '只顯示一次 Key 的對話框，有 Copy 和 Download 按鈕',
  'setup.s6.caption': '截圖中的 Key 和專屬網域已經塗黑。',
  'setup.s7.title': '貼到 App 裡，按「測試」',
  'setup.s7.p':
    '回到手機：在<strong>設定 → 付費方式</strong>選「使用自己的阿里雲 Key」，就會出現<strong>通義千問 API Key</strong>。' +
    '站點維持<strong>國際站 · 新加坡</strong>，貼上 Key，按<strong>儲存</strong>，再按<strong>測試</strong>。' +
    '看到綠色的「連線成功，Key 有效」就完成了。',
  'setup.s7.start':
    '最後關閉設定，在「我說」和「對方說」選好語言，就可以開始了。中文 ⇄ 英文免費；在設定裡買一次「全部語言」，其他語言就全部解鎖。',
  'setup.s7.alt': 'App 設定畫面：Key 已儲存，測試通過',
  'setup.s7.caption': '出現這行綠字就代表成功了。',
  'setup.help.title': '連不上怎麼辦',
  'setup.help.badKey':
    '<strong>「API Key 無效」</strong>——十之八九是區域不對。確認主控台右上角顯示的是 Singapore；' +
    '如果不是，切換過去並<strong>建立新的 Key</strong>，因為 Key 無法在區域之間移轉。另外也確認貼上時結尾沒有被截掉。',
  'setup.help.forbidden': '<strong>「此 Key 無權呼叫該模型」</strong>——帳號還沒啟用百煉，或是沒有可用餘額。請到主控台確認。',
  'setup.help.timeout':
    '<strong>「連線逾時」</strong>——手機連不到 <code>dashscope-intl.aliyuncs.com</code>。' +
    '換個網路試試，例如從公司 Wi-Fi 改用行動網路。',
  'setup.help.noKey':
    '<strong>想先試用，或是拿不到 Key？</strong>不需要 Key：<strong>設定 → 付費方式 → 購買時間（免註冊）</strong>。' +
    '新裝置有 5 分鐘免費時間，按「開始口譯」就能試用；之後在 App 裡購買時間，所有語言都能用。',
  'setup.help.contact':
    '還是不行的話，請寫信到 <a href="mailto:winer632@qq.com">winer632@qq.com</a>，' +
    '附上裝置型號、iOS 版本，以及「測試」按鈕顯示的完整訊息，這樣處理會快很多。<strong>請不要把 Key 寄給我們。</strong>',

  // index.html
  'index.doc.title': '技術支援 · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · 技術支援',
  'index.sub': '面對面交談用的雙向口譯。邊說邊出字幕和語音，翻譯方向自動判斷。',
  'index.trial.title': '先用 5 分鐘免費時間試試',
  'index.trial.p':
    '不用註冊，也不用 Key：在新裝置上第一次開啟 App，就會送你 <strong>5 分鐘免費時間</strong>，顯示在畫面頂端。' +
    '在字幕上方選好「我說」和「對方說」，按「開始口譯」，直接說話就好——這就是真正的口譯，字幕和語音都是即時產生的。' +
    '每部裝置只能試用一次；之後可以在 App 裡購買時間，或改用自己的阿里雲 Key。',
  'index.pay.title': '正式使用',
  'index.pay.intro': '有兩種付費方式，在<strong>設定 → 付費方式</strong>裡選擇：',
  'index.pay.credit':
    '<strong>在 App 裡購買口譯時間</strong>（預設）——不需要任何帳號，打開就能用，新裝置還有 5 分鐘免費時間。' +
    '有 1、5、10 小時三種，所有語言都能用。含翻譯語音時用 1 分鐘扣 1 分鐘；只看字幕只扣三分之一。',
  'index.pay.key':
    '<strong>使用自己的阿里雲 Key</strong>——由阿里雲直接依用量向你收費。這時中文 ⇄ 英文免費；' +
    '其他語言只要買一次「全部語言」就永久解鎖，日後新增的語言也包含在內。' +
    '<a href="./setup.html">申請 API Key 的圖文教學 →</a>',
  'index.langs.title': '支援的語言',
  'index.langs.intro':
    '在字幕上方的兩欄選擇：左邊是「我說」，右邊是「對方說」。以下 24 種語言都能互相口譯（只有下方列出的幾組除外），方向自動判斷：',
  'index.langs.list':
    '中文、英文、日文、韓文、德文、法文、西班牙文、葡萄牙文、義大利文、俄文、印地文、印尼文、越南文、' +
    '阿拉伯文、泰文、土耳其文、菲律賓文、波蘭文、烏都文、希伯來文、波斯文、馬來文、荷蘭文、孟加拉文',
  'index.langs.bangla':
    '<strong>孟加拉文只有字幕</strong>：對方的話翻成孟加拉文時只顯示文字，不會唸出來；說孟加拉文的一方照樣有翻譯語音。',
  'index.langs.unpaired':
    '有幾組不能配對：印尼文與馬來文、印地文與烏都文（彼此本來就聽得懂），以及阿拉伯文、烏都文、波斯文彼此之間' +
    '（使用同一套字母，App 目前還分辨不出是誰在說話）。',
  'index.langs.cantonese': '<strong>粵語 ⇄ 普通話</strong>——一個方向有語音，另一個方向只有字幕。',
  'index.faq.title': '常見問題',
  'index.faq.sound.q': '沒有聲音',
  'index.faq.sound.a':
    '先檢查機身左側音量按鈕上方的<strong>響鈴/靜音切換開關</strong>——露出橘色代表處於靜音。' +
    '接著確認畫面頂端的語音選項不是「🔇 語音關閉」，也確認你不是翻成只有字幕的孟加拉文或粵語。' +
    '如果還是聽不到，把音量調大：聽筒和揚聲器的音量是分開的。',
  'index.faq.earpiece.q': '想自己聽，不要擴音',
  'index.faq.earpiece.a':
    '把頂端的語音選項切到 <strong>📞 語音 · 聽筒</strong>，翻譯語音就會從聽筒播出，像講電話一樣貼著耳朵聽。隨時都能切換，口譯進行中也可以。',
  'index.faq.mic.q': '「麥克風已被系統中斷連線」',
  'index.faq.mic.a':
    '通常是其他 App 占用了麥克風（來電、語音訊息、錄音 App），或是藍牙耳機切換了模式。' +
    '停止後重新開始即可恢復。如果用藍牙時一再發生，請改用內建麥克風或有線耳機試試。',
  'index.faq.echo.q': '擴音時出現回授嘯叫或回音',
  'index.faq.echo.a':
    '在同一個房間裡，揚聲器播出的聲音會再被麥克風收進去。' +
    '在<strong>設定 → 回音處理</strong>裡選擇「播放時降低麥克風」或「播放時將麥克風靜音」，' +
    '或者直接把音量調低。改用聽筒就完全不會有這個問題。',
  'index.faq.stuck.q': '字幕停住不動了',
  'index.faq.stuck.a':
    '畫面頂端的狀態列會顯示這次口譯的運作狀態。最常見的原因是網路斷線，或麥克風被系統靜音——後者會有明確提示。' +
    '停止後再重新開始，通常就能解決。購買時間的話，看看頂端的剩餘時間；使用自己的 Key 時，阿里雲回報的額度問題會原封不動地顯示出來。',
  'index.faq.phone.q': '換新手機',
  'index.faq.phone.a':
    '購買的時間記在你的帳號上。帳號是 App 自動產生的隨機 ID，存放在 iCloud 鑰匙圈裡：' +
    '在新手機登入同一個 Apple 帳號並開啟 iCloud 鑰匙圈，餘額就會在。' +
    '使用自己的 Key 時購買的「全部語言」，可以在<strong>設定 → 全部語言 → 回復購買項目</strong>裡免費取回。',
  'index.faq.cantonese.q': '為什麼粵語 ⇄ 普通話只有一個方向有語音',
  'index.faq.cantonese.a':
    '模型能<strong>聽懂</strong>粵語，也能<strong>寫</strong>粵語，但不會<strong>說</strong>粵語——' +
    '在服務商的語言表裡，粵語屬於「僅字幕」。所以說粵語時，你會聽到普通話語音；說普通話時，只會出現粵語字幕。' +
    '兩邊都用漢字，無法自動判斷方向，請用方向選項手動設定。',
  'index.faq.direction.q': '方向偶爾會判斷反，例如西班牙文和葡萄牙文之間',
  'index.faq.direction.a':
    '兩種語言使用同一套字母時（英文、西班牙文、葡萄牙文、義大利文、法文、德文、印尼文、越南文等），只能靠用詞來判斷，' +
    '遇到短句或人名、地名時可能拿不準。這類組合在頂端會多一個方向選項——把它從「方向 · 自動」改成固定的方向，就能鎖定。',
  'index.contact.title': '聯絡我們',
  'index.contact.p':
    '問題、建議和退款諮詢，都請寫信到 <a href="mailto:winer632@qq.com">winer632@qq.com</a>，通常在一到兩個工作天內回覆。' +
    '來信時如果能附上裝置型號、iOS 版本、使用的兩種語言，以及你是購買時間還是使用自己的 Key，處理起來會快很多。' +
    '購買時間的問題，請附上設定裡顯示的<strong>帳號 ID</strong>。',

  // privacy.html
  'privacy.doc.title': '隱私權政策 · Duo Interpreter',
  'privacy.title': '隱私權政策',
  'privacy.sub': 'Duo Interpreter · 最後更新：2026 年 9 月 24 日',
  'privacy.translated': '本政策為翻譯版本。如與<a href="?lang=en">英文版</a>有任何不一致，以英文版為準。',
  'privacy.short':
    '<strong>簡單來說：</strong>App 有兩種使用方式。預設是購買口譯時間，不需要註冊：你的語音從手機直接傳送到阿里雲百煉進行翻譯，' +
    '<strong>絕不經過我們的伺服器</strong>；我們的伺服器只保存一個隨機產生的帳號號碼、你購買了多少時間，以及用了多少時間。' +
    '如果改用自己的阿里雲 Key，我們什麼都不蒐集。App 沒有任何分析、廣告或追蹤，口譯紀錄只留在你的手機上。',
  'privacy.collect.title': '我們蒐集哪些資料',
  'privacy.collect.intro': '取決於你在「設定 → 付費方式」裡的選擇。',
  'privacy.credit.title': '購買時間（預設，免註冊）',
  'privacy.credit.intro':
    '為了記住你購買了多少時間並防止濫用，App 會連線到我們的伺服器 <code>api.duo-interpreter.com</code>' +
    '（架設在 Microsoft Azure 新加坡區域）。伺服器會保存：',
  'privacy.credit.id':
    '<strong>隨機帳號 ID</strong>：App 第一次使用時產生的一串號碼（UUID），與你的姓名、電子郵件、電話號碼或 Apple 帳號都沒有關聯。' +
    '它保存在你的 iCloud 鑰匙圈中，因此重新安裝 App 後餘額仍在，換成使用同一個 Apple 帳號的新手機也會跟著過去。',
  'privacy.credit.device':
    '<strong>裝置憑證</strong>：每部裝置一把 Apple App Attest 金鑰的識別碼和公開金鑰，以及登記時間和最後使用時間。' +
    '用來證明請求來自這個 App 的正版副本，而不是被修改過的版本。',
  'privacy.credit.purchases':
    '<strong>購買紀錄</strong>：Apple 的交易 ID、商品（1、5 或 10 小時）、購買時間、是否為測試（沙盒）購買，以及是否已退款。',
  'privacy.credit.usage':
    '<strong>使用紀錄</strong>：每次口譯的開始和結束時間、模式（翻譯語音或僅字幕）、用掉多少時間、' +
    '要求了幾次臨時金鑰，以及餘額的每一筆變動。',
  'privacy.credit.trial':
    '<strong>5 分鐘試用</strong>每部裝置只提供一次。為了防止重複領取，App 會把一次性的 Apple DeviceCheck 權杖交給伺服器；' +
    '伺服器用它請 Apple 查詢、再設定 Apple 代我們為這部裝置保存的一個位元（「已使用試用」）。' +
    '權杖只使用一次、不會保存；Apple 也只替我們保存那一個位元，不會告訴我們是哪一部裝置。',
  'privacy.credit.never':
    '伺服器<strong>絕不會收到</strong>：你的語音、字幕或譯文；你的姓名、電子郵件、電話號碼、位置或聯絡人；以及你的付款資訊。',
  'privacy.key.title': '使用自己的阿里雲 Key',
  'privacy.key.p': '在這種模式下，App 不會連線到我們的伺服器，<strong>我們什麼都不蒐集</strong>。',
  'privacy.both.title': '兩種方式都一樣',
  'privacy.both.p':
    'App 不含任何第三方分析、廣告或追蹤元件。我們不做分析、不投放廣告、不跨 App 或網站追蹤你，也不出售或分享任何資料。',
  'privacy.logs.title': '伺服器日誌與保存期限',
  'privacy.logs.ip':
    '你的 IP 位址只在記憶體中用來限制請求頻率（防止濫用），並在你最後一次請求的一小時後捨棄；不會寫入日誌，也不會儲存。' +
    '伺服器日誌只記錄事件，例如「一部裝置已登記」（只含帳號 ID 的前 8 個字元）、「一筆購買已入帳」（商品及是否為測試購買）、' +
    '「一筆退款已處理」（交易 ID），以及錯誤。伺服器日誌會在 30 天後自動刪除。',
  'privacy.logs.ledger':
    '帳本每小時在伺服器上建立一份快照，保留最近 48 份；另有一份加密副本存放在異地，保留 30 天。' +
    '帳號、購買和使用紀錄會在帳號存在期間一直保留，因為對帳和處理 Apple 退款都需要用到。',
  'privacy.speech.title': '你的語音去了哪裡',
  'privacy.speech.intro':
    '兩種模式下，麥克風的音訊都是<strong>從你的手機即時、直接傳送到阿里雲百煉</strong>（Qwen LiveTranslate）。' +
    '它從不經過我們的伺服器；我們聽不到，也沒有任何東西可以保存：',
  'privacy.speech.credit':
    '購買時間時，App 會透過我們的阿里雲帳戶連線到 <code>dashscope-intl.aliyuncs.com</code>（新加坡）：' +
    '我們的伺服器只會發給 App 一把 60 秒後失效的臨時金鑰，音訊依照我們與阿里雲之間的協議處理。',
  'privacy.speech.key':
    '使用自己的 Key 時，App 會用你的 Key 連線到你在設定中選擇的站點（<code>dashscope-intl.aliyuncs.com</code> 或 <code>dashscope.aliyuncs.com</code>），' +
    '音訊依照<strong>你</strong>與阿里雲之間的協議處理。',
  'privacy.speech.alibaba':
    '阿里雲如何處理音訊，請參閱' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">其隱私權政策</a>。',
  'privacy.speech.hosts':
    'App 只會連線到阿里雲百煉、我們的伺服器（僅限購買時間時），以及 Apple 的服務（App 內購買項目、App Attest、DeviceCheck）。',
  'privacy.speech.voice':
    '<strong>用說話者的聲音唸出譯文</strong>（預設開啟，可在設定中關閉）：阿里雲會根據送去翻譯的同一段音訊，即時模仿說話者的聲音，' +
    '並跟著當下說話的人切換——對話雙方都是如此。App 和我們都不會另外蒐集、儲存或上傳任何聲紋；用的就是原本已送去翻譯的那段音訊。',
  'privacy.device.title': '留在你手機上的資料',
  'privacy.transcripts.title': '口譯紀錄',
  'privacy.transcripts.p':
    '定稿的句子會寫入 App 自己的容器內，每天一個檔案。這些檔案<strong>絕不會上傳</strong>，也不包含在 iCloud 備份中。' +
    '你可以在 App 的「紀錄」裡查看、匯出或刪除；刪除 App 時會一併移除。',
  'privacy.account.title': '帳號 ID',
  'privacy.account.p':
    '上面提到的隨機帳號 ID 保存在 iOS 鑰匙圈中；如果開啟了 iCloud 鑰匙圈，會在你使用同一個 Apple 帳號的裝置之間同步（由 Apple 端對端加密）。' +
    '刪除 App 不會移除它，所以重新安裝後餘額仍在。',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    '你自行輸入的 API Key 保存在 iOS <strong>鑰匙圈</strong>中，並標記為只能在這部裝置上、且只在裝置解鎖時讀取。' +
    '它們絕不會上傳，也不會透過備份移轉到其他裝置。',
  'privacy.mic.title': '麥克風',
  'privacy.mic.p':
    '只有在你按下「開始口譯」之後才會使用麥克風。口譯進行中切換到其他 App 或鎖定螢幕時，仍會繼續收音、翻譯並儲存口譯紀錄；' +
    '按「停止」即可結束收音。來電等系統音訊中斷會暫停口譯，等系統允許時再繼續。收音期間，系統會顯示橘色的麥克風指示燈。',
  'privacy.purchase.title': '購買',
  'privacy.purchase.p':
    '購買時間和「全部語言」（使用自己的 Key 時）都透過 <strong>Apple 的 App 內購買項目</strong>完成。付款全程由 Apple 處理，' +
    '我們<strong>不會收到也看不到</strong>你的付款方式、姓名或帳單資訊。',
  'privacy.purchase.credit':
    '購買時間：App 會請 Apple 把你的帳號 ID 記錄在交易中，再把經 Apple 簽署的交易傳送到我們的伺服器驗證並入帳；' +
    '伺服器只會為交易中指定的帳號加值。退款由 Apple 處理，Apple 會通知我們的伺服器收回相應的時間。',
  'privacy.purchase.all': '「全部語言」：App 只向系統查詢是否已購買，不經過我們的伺服器。',
  'privacy.delete.title': '查詢與刪除',
  'privacy.delete.p':
    '你的帳號 ID 在 App 的「設定 → 剩餘時間」裡，旁邊有「拷貝」按鈕。如果想查看或刪除我們伺服器上與你有關的資料，請把帳號 ID 寄到 ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a>，我們會刪除該帳號在伺服器上的所有紀錄' +
    '（快照和異地副本會在各自的保存期限到期後失效）。刪除後，剩餘時間無法恢復。購買項目的退款請向 Apple 申請。',
  'privacy.children.title': '兒童',
  'privacy.children.p': '本 App 適用於商務與日常口譯，並非以兒童為對象，也不會在知情的情況下向兒童蒐集任何資料。',
  'privacy.changes.title': '政策變更',
  'privacy.changes.p':
    '如果本政策有重大變更，我們會更新頁面頂端的日期。App 不需要註冊，我們也無從聯絡你，因此一切以本頁為準。',
  'privacy.contact.title': '聯絡方式',
  'privacy.contact.p': '任何隱私相關問題，請寄信至 <a href="mailto:winer632@qq.com">winer632@qq.com</a>。',
});
