/**
 * 网站文案 · 日本語。从英文（三个页面的 HTML）翻译，键的顺序和 zh.js 一致；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/ja.js 里的原话。
 */
siteI18n('ja', {
  'nav.support': '← サポート',
  'nav.setup': 'API Key の取得',
  'nav.privacy': 'プライバシーポリシー',

  // setup.html
  'setup.doc.title': 'Qwen API Key の取得方法 · Duo Interpreter',
  'setup.title': 'Qwen API Key の取得方法',
  'setup.sub': '所要時間は 10 分ほどです。パソコンのブラウザで進め、最後の手順だけ iPhone で行います。',
  'setup.intro':
    'このアプリには<strong>翻訳の利用枠は含まれていません</strong>。ご自身のアカウントで Alibaba Cloud Model Studio に接続し、' +
    '使った分の料金が Alibaba Cloud から請求されます。音声が私たちのサーバーを経由することはありません。',
  'setup.remember':
    '<strong>覚えておいてほしいことが 2 つあります</strong>。うまくいかない原因のほとんどは、このどちらかです。' +
    'まず、Key は必ず <strong>Singapore（シンガポール）</strong>リージョンで作成してください。ほかのリージョンの Key はこのアプリでは使えません。' +
    '次に、Key が<strong>すべて表示されるのは 1 回だけ</strong>です。そのダイアログを閉じると、二度と確認できません。',
  'setup.s1.title': 'Alibaba Cloud のアカウントを作成する',
  'setup.s1.signup':
    '<a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a> で登録します。' +
    'メールアドレスがあれば十分で、<strong>中国本土の電話番号は必要ありません</strong>。',
  'setup.s1.sso': 'Google や GitHub のアカウントでサインインすれば、フォームの入力を省けます。',
  'setup.s1.card':
    'サービスを有効にする前に、クレジットカードか PayPal を登録する必要があります。登録しただけでは料金はかからず、実際に使った分だけ請求されます。',
  'setup.s1.alt': 'Alibaba Cloud のサインインページ',
  'setup.s2.title': 'リージョンをシンガポールに切り替える',
  'setup.s2.p':
    'Model Studio コンソール（<a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a>）を開き、' +
    '<strong>右上のリージョンが Singapore になっている</strong>ことを確認します。リンク自体はシンガポールを指していますが、' +
    'サインインの途中でデフォルトのリージョンに戻されることがあるので、念のため確認してください。',
  'setup.s2.alt': 'リージョンが Singapore に設定された Model Studio コンソール',
  'setup.s2.caption':
    'リージョンは右上にあります。次に使うのは左下の <strong>API-KEY</strong> ボタンです。メインのナビゲーションにはありません。',
  'setup.s3.title': 'Model Studio を有効にする',
  'setup.s3.p':
    '初めてアクセスすると、サービスの有効化を求められます。利用規約に同意して確定してください。' +
    'すでに有効になっているアカウントではこの画面は表示されないので、そのまま次の手順に進みます。',
  'setup.s4.title': 'API Key のページを開く',
  'setup.s4.p':
    'コンソールの<strong>左下</strong>にある <strong>API-KEY</strong> ボタンをクリックします。' +
    'メインのナビゲーションの項目ではなく、独立したカプセル型のボタンなので、初めてだと見落としがちです。',
  'setup.s4.alt': 'Create API Key ボタンがある API Key のページ',
  'setup.s4.caption': 'このページが開いたら、右側の <strong>Create API Key</strong> をクリックします。',
  'setup.s5.title': 'Key を作成する',
  'setup.s5.p':
    '<strong>Create API Key</strong> をクリックします。ワークスペースはデフォルトのものを選び、権限は <strong>All</strong> に設定します。' +
    '説明は空欄のままでもかまいません。最後に確定します。',
  'setup.s5.alt': 'Create API Key ダイアログ',
  'setup.s6.title': 'すぐに Key 全体をコピーする',
  'setup.s6.copy':
    'Key は <code>sk-</code> で始まる長い文字列です。<strong>最後まで全部コピー</strong>してください。' +
    '末尾の数文字が欠けた Key は、間違った Key とまったく同じように失敗します。ダイアログのコピーボタンを使いましょう。',
  'setup.s6.download':
    'ダイアログには <strong>Download</strong> もあり、Key をファイルとして保存できます。クリップボードだけに頼るより安全です。',
  'setup.s6.note':
    '<strong>このダイアログを閉じると、Key 全体は二度と表示されません。</strong>' +
    'なくしてしまった場合は、その Key を削除して新しく作り直すだけで大丈夫です。ほかには何も影響しません。',
  'setup.s6.alt': 'Key を 1 回だけ表示するダイアログ（Copy と Download ボタン付き）',
  'setup.s6.caption': 'このスクリーンショットでは、Key と専用ドメインを黒く塗りつぶしています。',
  'setup.s7.title': 'アプリに貼り付けて「テスト」を押す',
  'setup.s7.p':
    'iPhone に戻り、<strong>「設定」→「お支払い方法」</strong>で「自分の Alibaba Cloud Key を使う」を選ぶと、' +
    '<strong>Qwen API Key</strong> の欄が表示されます。サイトは<strong>国際サイト · シンガポール</strong>のままにして Key を貼り付け、' +
    '<strong>保存</strong>を押してから<strong>テスト</strong>を押します。緑色で「接続できました。Key は有効です」と表示されれば完了です。',
  'setup.s7.start':
    '最後に設定を閉じ、「私が話す」と「相手が話す」で言語を選んで開始します。中国語 ⇄ 英語は無料です。' +
    'それ以外の言語は、設定で「すべての言語」を 1 回購入すると使えるようになります。',
  'setup.s7.alt': 'Key を保存し、テストに成功したアプリの設定画面',
  'setup.s7.caption': 'この緑色の行が表示されれば成功です。',
  'setup.help.title': '接続できない場合',
  'setup.help.badKey':
    '<strong>「API Key が無効です」</strong>：十中八九、リージョンが間違っています。コンソールの右上が Singapore になっているか確認し、' +
    '違っていれば切り替えて<strong>新しい Key を作成</strong>してください。Key はリージョン間で移せません。' +
    '貼り付けたときに末尾が欠けていないかも確認しましょう。',
  'setup.help.forbidden':
    '<strong>「この Key ではモデルを呼び出せません」</strong>：アカウントで Model Studio がまだ有効になっていないか、使える残高がありません。コンソールで確認してください。',
  'setup.help.timeout':
    '<strong>「接続がタイムアウトしました」</strong>：iPhone から <code>dashscope-intl.aliyuncs.com</code> に接続できていません。' +
    'オフィスの Wi-Fi ではなくモバイルデータ通信を使うなど、別のネットワークで試してください。',
  'setup.help.noKey':
    '<strong>まず試してみたい、または Key を取得できない場合は？</strong>Key は不要です：' +
    '<strong>「設定」→「お支払い方法」→「時間を購入（登録不要）」</strong>。新しいデバイスなら 5 分間無料で使えるので、' +
    '「開始」を押して試してみてください。その後はアプリで時間を購入すれば、すべての言語が使えます。',
  'setup.help.contact':
    'それでも解決しない場合は、<a href="mailto:winer632@qq.com">winer632@qq.com</a> までご連絡ください。' +
    'デバイスの機種、iOS のバージョン、「テスト」ボタンで表示されたメッセージをそのまま書いていただけると、ずっと早く対応できます。' +
    '<strong>Key は送らないでください。</strong>',

  // index.html
  'index.doc.title': 'サポート · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · サポート',
  'index.sub': '対面での会話のための双方向通訳。話すそばから字幕と音声が出て、翻訳の方向も自動で判別します。',
  'index.trial.title': '無料の 5 分間で試してみる',
  'index.trial.p':
    '登録も Key も要りません。新しいデバイスで初めてアプリを開くと、<strong>5 分間の無料時間</strong>が付与され、画面上部に表示されます。' +
    '字幕の上にある「私が話す」と「相手が話す」を選び、「開始」を押して話すだけ。これは本物の通訳で、字幕も音声もその場で出てきます。' +
    '無料体験はデバイスごとに 1 回限りです。その後は、アプリで時間を購入するか、自分の Alibaba Cloud Key を使ってください。',
  'index.pay.title': '本格的に使う',
  'index.pay.intro': 'お支払い方法は 2 つあり、<strong>「設定」→「お支払い方法」</strong>で選びます：',
  'index.pay.credit':
    '<strong>アプリで通訳時間を購入</strong>（デフォルト）：アカウントは一切不要で、開けばすぐに使えます。新しいデバイスには 5 分間の無料時間付き。' +
    '1 時間・5 時間・10 時間の 3 種類があり、すべての言語で使えます。音声ありなら 1 分で 1 分、字幕のみなら 3 分の 1 しか消費しません。',
  'index.pay.key':
    '<strong>自分の Alibaba Cloud Key を使う</strong>：使った分だけ Alibaba Cloud から直接請求されます。この場合、中国語 ⇄ 英語は無料で、' +
    'それ以外の言語は「すべての言語」を 1 回購入すればずっと使えます。今後追加される言語も含まれます。' +
    '<a href="./setup.html">API Key の取得手順（画像付き）→</a>',
  'index.langs.title': '対応言語',
  'index.langs.intro':
    '字幕の上にある 2 つの列で選びます。左が「私が話す」、右が「相手が話す」です。' +
    '次の 24 言語は互いに通訳でき（下に挙げたいくつかの組み合わせを除く）、方向は自動で判別されます：',
  'index.langs.list':
    '中国語、英語、日本語、韓国語、ドイツ語、フランス語、スペイン語、ポルトガル語、イタリア語、ロシア語、ヒンディー語、インドネシア語、' +
    'ベトナム語、アラビア語、タイ語、トルコ語、フィリピノ語、ポーランド語、ウルドゥー語、ヘブライ語、ペルシア語、マレー語、オランダ語、ベンガル語',
  'index.langs.bangla':
    '<strong>ベンガル語は字幕のみ</strong>：相手の話はベンガル語の文字で表示され、読み上げはされません。ベンガル語で話した場合は、翻訳が音声でも読み上げられます。',
  'index.langs.unpaired':
    'いくつかの組み合わせは対象外です。インドネシア語とマレー語、ヒンディー語とウルドゥー語（もともと互いに通じるため）、' +
    'そしてアラビア語・ウルドゥー語・ペルシア語どうし（同じ文字を使うため、アプリがまだ話し手を区別できません）。',
  'index.langs.cantonese': '<strong>広東語 ⇄ 標準中国語</strong>：一方向は音声あり、逆方向は字幕のみです。',
  'index.faq.title': 'よくある質問',
  'index.faq.sound.q': '音が出ない',
  'index.faq.sound.a':
    'まず、左側面の音量ボタンの上にある<strong>着信/サイレントスイッチ</strong>を確認してください。オレンジ色が見えていればサイレントモードです。' +
    '次に、画面上部の音声の出力先が「🔇 音声オフ」になっていないか、字幕のみのベンガル語や広東語に翻訳していないかを確認します。' +
    'それでも聞こえない場合は音量を上げてください。受話口とスピーカーの音量は別々に設定されています。',
  'index.faq.earpiece.q': '周りに聞こえないように聞きたい',
  'index.faq.earpiece.a':
    '画面上部の音声の出力先を <strong>📞 受話口</strong> に切り替えると、翻訳音声が受話口から流れ、電話のように耳に当てて聞けます。' +
    '通訳の途中でも、いつでも切り替えられます。',
  'index.faq.mic.q': '「システムによりマイクが切断されました」と表示される',
  'index.faq.mic.a':
    '多くの場合、ほかのアプリ（通話、音声メッセージ、録音アプリなど）がマイクを使い始めたか、Bluetooth ヘッドセットのモードが切り替わったことが原因です。' +
    '停止してから開始し直すと復帰します。Bluetooth で繰り返し起こる場合は、内蔵マイクか有線ヘッドセットを試してください。',
  'index.faq.echo.q': 'スピーカー使用時にハウリングやエコーが起きる',
  'index.faq.echo.a':
    '同じ部屋では、スピーカーから出た音をマイクがもう一度拾ってしまいます。' +
    '<strong>「設定」→「エコー対策」</strong>で「再生中はマイク感度を下げる」か「再生中はマイクをミュート」を選ぶか、単に音量を下げてください。' +
    '受話口を使えば、この問題はまったく起きません。',
  'index.faq.stuck.q': '字幕が更新されなくなった',
  'index.faq.stuck.a':
    '画面上部のバーに、セッションの状態が表示されます。よくある原因はネットワークの切断か、システムによるマイクのミュートで、後者の場合ははっきりと表示されます。' +
    'たいていは停止してから開始し直せば直ります。時間を購入している場合は、上部の残り時間を確認してください。' +
    '自分の Key を使っている場合、Alibaba Cloud からの利用枠に関するエラーはそのまま表示されます。',
  'index.faq.phone.q': '新しい iPhone に移行する',
  'index.faq.phone.a':
    '購入した時間はあなたのアカウントにひも付いています。アカウントはアプリが作成するランダムな ID で、iCloud キーチェーンに保存されます。' +
    '新しい iPhone で同じ Apple アカウントにサインインし、iCloud キーチェーンをオンにすれば、残高はそのまま使えます。' +
    '自分の Key を使う場合に購入した「すべての言語」は、<strong>「設定」→「すべての言語」→「購入を復元」</strong>から無料で復元できます。',
  'index.faq.cantonese.q': '広東語 ⇄ 標準中国語で、音声が片方向しか出ないのはなぜ？',
  'index.faq.cantonese.a':
    'モデルは広東語を<strong>聞き取る</strong>ことも<strong>書く</strong>こともできますが、<strong>話す</strong>ことはできません。' +
    '提供元の言語表でも、広東語は字幕のみの扱いです。そのため、広東語で話すと標準中国語の音声が出ますが、標準中国語で話した場合は広東語の字幕だけになります。' +
    'どちらも漢字を使うので方向を自動で判別できません。方向の切り替えで指定してください。',
  'index.faq.direction.q': 'スペイン語とポルトガル語などで、方向がときどき逆になる',
  'index.faq.direction.a':
    '2 つの言語が同じアルファベットを使う場合（英語、スペイン語、ポルトガル語、イタリア語、フランス語、ドイツ語、インドネシア語、ベトナム語など）、' +
    '判別は語彙に頼るため、短いフレーズや固有名詞では揺れることがあります。こうした組み合わせでは、画面上部に方向の切り替えが追加されます。' +
    '「方向 · 自動」から固定の方向に切り替えれば、方向が固定されます。',
  'index.contact.title': 'お問い合わせ',
  'index.contact.p':
    'ご質問、ご提案、返金に関するお問い合わせは、すべて <a href="mailto:winer632@qq.com">winer632@qq.com</a> までお送りください。' +
    '通常 1〜2 営業日以内にお返事します。デバイスの機種、iOS のバージョン、使っている 2 つの言語、時間を購入しているか自分の Key を使っているかを' +
    '書いていただけると、ずっと早く対応できます。時間を購入している場合は、「設定」に表示される<strong>アカウント ID</strong> も記載してください。',

  // privacy.html
  'privacy.doc.title': 'プライバシーポリシー · Duo Interpreter',
  'privacy.title': 'プライバシーポリシー',
  'privacy.sub': 'Duo Interpreter · 最終更新日：2026年9月24日',
  'privacy.translated':
    'このポリシーは翻訳版です。<a href="?lang=en">英語版</a>と内容が異なる場合は、英語版が優先されます。',
  'privacy.short':
    '<strong>概要：</strong>このアプリには 2 つの使い方があります。デフォルトでは、登録なしで通訳時間を購入します。' +
    '音声は翻訳のために端末から Alibaba Cloud Model Studio へ直接送られ、<strong>私たちのサーバーを経由することはありません</strong>。' +
    '私たちのサーバーが保存するのは、ランダムに生成されたアカウント番号、購入した時間、使用した時間だけです。' +
    '代わりに自分の Alibaba Cloud Key を使う場合、私たちは何も収集しません。分析、広告、トラッキングは一切なく、通訳記録は端末の中に残ります。',
  'privacy.collect.title': '収集する情報',
  'privacy.collect.intro': '「設定」→「お支払い方法」で何を選んだかによって異なります。',
  'privacy.credit.title': '時間を購入する場合（デフォルト、登録不要）',
  'privacy.credit.intro':
    '購入した時間を記録し、不正利用を防ぐため、アプリは私たちのサーバー <code>api.duo-interpreter.com</code>' +
    '（Microsoft Azure のシンガポールリージョンでホスト）と通信します。サーバーが保存するのは次の情報です：',
  'privacy.credit.id':
    '<strong>ランダムなアカウント ID</strong>：アプリを初めて使ったときにアプリが生成する番号（UUID）です。' +
    'あなたの名前、メールアドレス、電話番号、Apple アカウントとは一切関係ありません。' +
    'iCloud キーチェーンに保存されるため、再インストールしても残高は失われず、同じ Apple アカウントの新しい端末にも引き継がれます。',
  'privacy.credit.device':
    '<strong>デバイスの認証情報</strong>：デバイスごとの Apple App Attest キーの識別子と公開鍵、およびその登録日時と最終使用日時です。' +
    'リクエストが改変されたアプリからではなく、正規のアプリから送られていることを証明するために使います。',
  'privacy.credit.purchases':
    '<strong>購入</strong>：Apple のトランザクション ID、商品（1 時間、5 時間、10 時間のいずれか）、購入日時、' +
    'テスト（サンドボックス）購入かどうか、返金されたかどうか。',
  'privacy.credit.usage':
    '<strong>利用状況</strong>：各通訳セッションの開始・終了日時、モード（音声翻訳または字幕のみ）、使用した時間、' +
    '要求した一時キーの数、残高のすべての変動。',
  'privacy.credit.trial':
    '<strong>5 分間の無料体験</strong>は、デバイスごとに 1 回だけ提供されます。繰り返し受け取るのを防ぐため、' +
    'アプリは 1 回限り有効な Apple DeviceCheck トークンをサーバーに渡します。サーバーはそれを使って、' +
    'Apple が私たちに代わってこのデバイスについて保持している 1 ビット（「無料体験を使用済み」）の確認と設定を Apple に依頼します。' +
    'トークンは 1 回使うだけで保存されません。Apple が私たちのために保持するのはその 1 ビットだけで、それがどのデバイスなのかを私たちに知らせることはありません。',
  'privacy.credit.never':
    'サーバーが、あなたの音声、字幕、翻訳、名前、メールアドレス、電話番号、位置情報、連絡先、支払い情報を<strong>受け取ることはありません</strong>。',
  'privacy.key.title': '自分の Alibaba Cloud Key を使う場合',
  'privacy.key.p': 'このモードでは、アプリは私たちのサーバーと通信せず、<strong>私たちは何も収集しません</strong>。',
  'privacy.both.title': 'どちらの場合も',
  'privacy.both.p':
    'アプリには、サードパーティの分析、広告、トラッキングは含まれていません。私たちは分析や広告を行わず、' +
    'ほかのアプリやウェブサイトをまたいであなたをトラッキングすることもなく、いかなるデータも販売・共有しません。',
  'privacy.logs.title': 'サーバーログと保存期間',
  'privacy.logs.ip':
    'IP アドレスは、リクエスト頻度の制限（不正利用の防止）のためにメモリ上でのみ使用し、最後のリクエストから 1 時間後に破棄します。' +
    'ログに記録したり保存したりすることはありません。サーバーログに記録するのはイベントだけです。たとえば、' +
    '「デバイスが登録された」（アカウント ID の先頭 8 文字のみ）、「購入分が加算された」（商品とテスト購入かどうか）、' +
    '「返金が適用された」（トランザクション ID）、そしてエラーです。サーバーログは 30 日後に自動的に削除されます。',
  'privacy.logs.ledger':
    '台帳は 1 時間ごとにサーバー上でスナップショットを取り、最新の 48 件を保持します。また、暗号化したコピーを別の場所に 30 日間保管します。' +
    'アカウント、購入、利用状況の記録は、帳簿の照合と Apple の返金処理に必要なため、アカウントが存在する限り保持します。',
  'privacy.speech.title': '音声の送信先',
  'privacy.speech.intro':
    'どちらのモードでも、マイクの音声は<strong>端末からリアルタイムで Alibaba Cloud Model Studio に直接送られます</strong>（Qwen LiveTranslate）。' +
    '私たちのサーバーを経由することはないため、私たちが聞くことはできず、保存するものもありません：',
  'privacy.speech.credit':
    '時間を購入した場合、アプリは私たちの Alibaba Cloud アカウントで <code>dashscope-intl.aliyuncs.com</code>（シンガポール）に接続します。' +
    '私たちのサーバーがアプリに発行するのは 60 秒で失効する一時キーだけで、音声は私たちと Alibaba Cloud との契約に基づいて処理されます。',
  'privacy.speech.key':
    '自分の Key を使う場合、アプリは設定で選んだサイト（<code>dashscope-intl.aliyuncs.com</code> または <code>dashscope.aliyuncs.com</code>）に' +
    'あなたの Key で接続し、音声は<strong>あなた</strong>と Alibaba Cloud との契約に基づいて処理されます。',
  'privacy.speech.alibaba':
    'Alibaba Cloud が音声をどのように扱うかについては、' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">同社のプライバシーポリシー</a>をご覧ください。',
  'privacy.speech.hosts':
    'アプリの接続先は、Alibaba Cloud Model Studio、私たちのサーバー（時間を購入する場合のみ）、Apple のサービス（App内課金、App Attest、DeviceCheck）だけです。',
  'privacy.speech.voice':
    '<strong>話し手の声で翻訳を読み上げる</strong>（デフォルトでオン、設定でオフにできます）：Alibaba Cloud が、翻訳するのと同じ音声から' +
    '話し手の声をリアルタイムでまね、そのとき話している人に合わせて切り替えます。会話の双方が対象です。' +
    'アプリも私たちも、声紋を別途収集・保存・アップロードすることはありません。使われるのは、翻訳のためにすでに送られているのと同じ音声です。',
  'privacy.device.title': '端末に残るもの',
  'privacy.transcripts.title': '通訳記録',
  'privacy.transcripts.p':
    '確定した文は、アプリ専用のコンテナ内に 1 日 1 ファイルで書き込まれます。<strong>アップロードされることはなく</strong>、' +
    'iCloud バックアップの対象からも除外されています。アプリの「履歴」で閲覧、書き出し、削除ができ、アプリを削除すると記録も消去されます。',
  'privacy.account.title': 'アカウント ID',
  'privacy.account.p':
    '前述のランダムなアカウント ID は iOS のキーチェーンに保存され、iCloud キーチェーンがオンの場合は、' +
    '同じ Apple アカウントのデバイス間で同期されます（Apple によりエンドツーエンドで暗号化されます）。' +
    'アプリを削除しても消えないため、再インストール後も残高はそのまま残ります。',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    'ご自身で入力した API Key は iOS の<strong>キーチェーン</strong>に保存され、このデバイス上で、かつロック解除中にのみ読み取れるよう設定されています。' +
    'アップロードされることはなく、バックアップを通じてほかのデバイスに移行することもありません。',
  'privacy.mic.title': 'マイク',
  'privacy.mic.p':
    'マイクは「開始」を押した後にのみ使用されます。通訳中のセッションは、ほかのアプリに切り替えたり画面をロックしたりしても、' +
    '録音、翻訳、通訳記録の保存を続けます。音声の取り込みを終えるには「停止」を押してください。' +
    '通話などシステムによる音声の中断があるとセッションは一時停止し、システムが許可すると再開します。' +
    '取り込み中は、システムのオレンジ色のマイクインジケータが表示されます。',
  'privacy.purchase.title': '購入',
  'privacy.purchase.p':
    '時間の購入と「すべての言語」（自分の Key を使う場合）は、どちらも <strong>Apple の App内課金</strong>で行われます。' +
    '支払いはすべて Apple が処理し、私たちがあなたの支払い方法、名前、請求情報を<strong>受け取ったり見たりすることはありません</strong>。',
  'privacy.purchase.credit':
    '時間の購入：アプリは Apple にアカウント ID をトランザクションに記録するよう依頼し、Apple が署名したトランザクションを' +
    '私たちのサーバーに送って検証・加算します。サーバーが時間を加算するのは、トランザクションに記載されたアカウントだけです。' +
    '返金は Apple が処理し、Apple からの通知を受けてサーバーが該当する時間を差し引きます。',
  'privacy.purchase.all':
    '「すべての言語」：アプリはシステムに購入済みかどうかを問い合わせるだけで、私たちのサーバーは関与しません。',
  'privacy.delete.title': '開示と削除',
  'privacy.delete.p':
    'アカウント ID は、アプリの「設定」→「残り時間」にあり、「コピー」ボタンが付いています。' +
    '私たちのサーバーが保持しているあなたの情報を確認または削除したい場合は、この ID を ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a> までお送りください。そのアカウントのサーバー上の記録をすべて削除します' +
    '（スナップショットと別の場所のコピーは、それぞれの保存期間が過ぎると消えます）。削除後、残り時間は復元できません。' +
    '購入の返金は Apple に申請してください。',
  'privacy.children.title': '子ども',
  'privacy.children.p':
    'このアプリはビジネスや日常の通訳を目的としています。子どもを対象としておらず、子どもから故意に情報を収集することはありません。',
  'privacy.changes.title': '変更',
  'privacy.changes.p':
    'このポリシーに重要な変更があった場合は、ページ上部の日付を更新します。アプリには登録がなく、私たちからあなたに連絡する手段がないため、' +
    'このページが正式な記録となります。',
  'privacy.contact.title': 'お問い合わせ',
  'privacy.contact.p': 'プライバシーに関するご質問は、<a href="mailto:winer632@qq.com">winer632@qq.com</a> までお寄せください。',
});
