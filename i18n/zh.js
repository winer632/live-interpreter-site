/**
 * 网站文案 · 简体中文。英文写在三个页面的 HTML 里，是翻译的底本；
 * 这里的键和页面上的 data-i18n 一一对应，链接、<code>、邮箱都要原样保留（有测试盯着）。
 * 提到 App 里的按钮和菜单时，用 public/i18n/zh.js 里的原话，和用户在 App 里看到的一致。
 */
siteI18n('zh', {
  'nav.support': '← 技术支持',
  'nav.setup': '申请 API Key',
  'nav.privacy': '隐私政策',

  // setup.html
  'setup.doc.title': '申请通义千问 API Key · 实时同声传译',
  'setup.title': '申请通义千问 API Key',
  'setup.sub': '大约十分钟。全程在电脑浏览器里完成，最后一步回到手机。',
  'setup.intro':
    '这个 App <strong>不含翻译额度</strong>，它用你自己的账号直连阿里云百炼，费用由阿里云按用量向你收取。' +
    '语音不经过我们的服务器。',
  'setup.remember':
    '<strong>两件事先记住</strong>，出错基本都出在这两处：Key 必须建在<strong>新加坡（Singapore）</strong>区，' +
    '别的区建的 Key 这个 App 用不了；Key 创建后<strong>只完整显示一次</strong>，弹窗关掉就再也看不到。',
  'setup.s1.title': '注册阿里云国际站账号',
  'setup.s1.signup':
    '打开 <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a> 注册。' +
    '用邮箱即可，<strong>不需要中国大陆手机号</strong>。',
  'setup.s1.sso': '也可以直接用 Google 或 GitHub 账号登录，省掉填表。',
  'setup.s1.card': '注册后需要绑定一张信用卡或 PayPal 才能开通服务。绑卡本身不扣费，按实际用量计费。',
  'setup.s1.alt': '阿里云登录页',
  'setup.s2.title': '把区域切到新加坡',
  'setup.s2.p':
    '打开百炼控制台：<a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a>，' +
    '确认<strong>右上角的区域是 Singapore</strong>。这个链接已经指向新加坡，但登录过程有时会把你带回默认区域，所以要看一眼。',
  'setup.s2.alt': '区域为新加坡的百炼控制台',
  'setup.s2.caption':
    '右上角是区域，左下角那个 <strong>API-KEY</strong> 就是下一步要点的入口——它不在左侧主导航里。',
  'setup.s3.title': '开通百炼服务',
  'setup.s3.p': '第一次进入会提示开通，同意条款后点开通即可。已经开通过的账号看不到这一步，直接跳到下一步。',
  'setup.s4.title': '找到 API Key 页面',
  'setup.s4.p':
    '点控制台<strong>左下角</strong>的 <strong>API-KEY</strong> 按钮。它是个单独的胶囊按钮，' +
    '不在上面那排主导航里，第一次找容易找不到。',
  'setup.s4.alt': '带 Create API Key 按钮的 API Key 页面',
  'setup.s4.caption': '到了这一页，点右边的 <strong>Create API Key</strong>。',
  'setup.s5.title': '创建 API Key',
  'setup.s5.p':
    '点 <strong>Create API Key</strong>。工作区选默认的那个，权限选 <strong>All</strong>，描述可以留空，然后确定。',
  'setup.s5.alt': 'Create API Key 对话框',
  'setup.s6.title': '立刻复制整串 Key',
  'setup.s6.copy':
    'Key 会以 <code>sk-</code> 开头，很长——<strong>一定要复制完整的一整串</strong>，' +
    '漏掉尾巴几个字符的表现和填错一样，都是连不上。用弹窗里的复制按钮最稳。',
  'setup.s6.download': '弹窗里还有个 <strong>Download</strong>，会把 Key 存成文件，比只放在剪贴板保险。',
  'setup.s6.note':
    '<strong>关掉这个弹窗就再也看不到完整 Key 了。</strong>万一没存下来，删掉重建一把即可，不影响账号。',
  'setup.s6.alt': '只显示一次 Key 的弹窗，带 Copy 和 Download 按钮',
  'setup.s6.caption': '图中的 Key 和专属域名已打码。',
  'setup.s7.title': '填进 App，点「测试」',
  'setup.s7.p':
    '回到手机：<strong>设置 → 计费方式</strong>选「用自己的阿里云 Key」，下面会出现<strong>通义千问 API Key</strong>。' +
    '站点保持<strong>国际站 · 新加坡</strong>，把 Key 粘进输入框，点<strong>保存</strong>，再点<strong>测试</strong>。' +
    '看到绿色的「连接成功，Key 有效」就完成了。',
  'setup.s7.start':
    '最后关掉设置，在「我说」「对方说」里选好语言就可以开始了。中文 ⇄ 英语免费；其他语言在设置里买一次「全部语言」，全部解锁。',
  'setup.s7.alt': 'App 设置里 Key 已保存、测试通过',
  'setup.s7.caption': '绿色那行就是成功的样子。',
  'setup.help.title': '连不上怎么办',
  'setup.help.badKey':
    '<strong>提示 Key 无效</strong>——九成是区域不对。回控制台看右上角是不是 Singapore；' +
    '不是的话切过去<strong>重新建一把</strong>，别的区的 Key 换不过来。也顺便确认粘贴时没漏掉结尾。',
  'setup.help.forbidden': '<strong>提示无权调用该模型</strong>——账号还没开通百炼，或者没有可用余额。回控制台看一眼。',
  'setup.help.timeout':
    '<strong>提示连接超时</strong>——手机网络到 <code>dashscope-intl.aliyuncs.com</code> 不通。' +
    '换个网络（比如从公司 Wi-Fi 切到蜂窝数据）再试。',
  'setup.help.noKey':
    '<strong>想先试试，或者拿不到 Key？</strong>不用 Key：<strong>设置 → 计费方式 → 购买时长（免注册）</strong>。' +
    '新设备送 5 分钟，点「开始传译」就能试；之后在 App 里直接买时长，所有语言都能用。',
  'setup.help.contact':
    '还是不行的话写信到 <a href="mailto:winer632@qq.com">winer632@qq.com</a>，' +
    '附上机型、iOS 版本和「测试」按钮给出的那句提示，排查会快很多。<strong>不要把 Key 发给我们。</strong>',

  // index.html
  'index.doc.title': '技术支持 · 实时同声传译',
  'index.title': '🎙 实时同声传译 · 技术支持',
  'index.sub': '面对面的双向实时口译。说话即出字幕与译音，方向自动识别。',
  'index.trial.title': '先用送的 5 分钟试试',
  'index.trial.p':
    '不用注册，也不用填 Key：在一台新设备上第一次打开，App 会送 <strong>5 分钟试用</strong>，顶部显示剩余时长。' +
    '在字幕上方选好「我说」和「对方说」，点「开始传译」，直接说话——这就是真实的传译，字幕和译音都是现场出来的。' +
    '每台设备只送一次；用完了可以在 App 里买时长，或者改用自己的阿里云 Key。',
  'index.pay.title': '正式使用',
  'index.pay.intro': '两种付费方式，在<strong>设置 → 计费方式</strong>里选：',
  'index.pay.credit':
    '<strong>在 App 里买传译时长</strong>（默认）——不用注册任何账号，打开就能用，新设备送 5 分钟试用。' +
    '有 1 / 5 / 10 小时三档，所有语言都能用。开着译音 1 分钟扣 1 分钟，只看字幕扣三分之一。',
  'index.pay.key':
    '<strong>用自己的阿里云 Key</strong>——由阿里云直接按用量向你收费。这时「中文 ⇄ 英语」免费，' +
    '其余语言一次买断「全部语言」，永久有效，以后新增的语言也包含在内。' +
    '<a href="./setup.html">申请 API Key 的图文教程 →</a>',
  'index.langs.title': '支持的语言',
  'index.langs.intro':
    '在字幕上方的两栏里选：左边「我说」，右边「对方说」。下面 24 种语言之间都能互译（只有下面列出的几组除外），方向自动识别：',
  'index.langs.list':
    '中文、英语、日语、韩语、德语、法语、西班牙语、葡萄牙语、意大利语、俄语、印地语、印尼语、越南语、' +
    '阿拉伯语、泰语、土耳其语、菲律宾语、波兰语、乌尔都语、希伯来语、波斯语、马来语、荷兰语、孟加拉语',
  'index.langs.bangla':
    '<strong>孟加拉语只有字幕</strong>：别人的话译成孟加拉语时只出字幕、没有译音；说孟加拉语照样有译音。',
  'index.langs.unpaired':
    '不配对的几组：印尼语与马来语、印地语与乌尔都语（口语基本相通），以及阿拉伯语、乌尔都语、波斯语彼此之间' +
    '（同用阿拉伯字母，暂时分不出是谁在说）。',
  'index.langs.cantonese': '<strong>粤语 ⇄ 普通话</strong>——说粤语有译音，反过来只有字幕。',
  'index.faq.title': '常见问题',
  'index.faq.sound.q': '没有声音',
  'index.faq.sound.a':
    '先看 iPhone 左侧上方的<strong>静音拨片</strong>有没有拨到静音（露出橙色）。' +
    '再确认界面顶部的译音没有选成「🔇 译音关」，以及译成的那种语言不是只有字幕的孟加拉语或粤语。' +
    '还是没有的话，把音量调大一些——听筒和外放用的是两套独立的音量刻度。',
  'index.faq.earpiece.q': '想贴着耳朵听，不想外放',
  'index.faq.earpiece.a':
    '把顶部的译音切到 <strong>📞 译音 · 听筒</strong>，译音就从听筒出声，像打电话一样贴耳听。传译进行中也可以随时切换。',
  'index.faq.mic.q': '提示「麦克风已被系统断开」',
  'index.faq.mic.a':
    '通常是别的应用抢走了麦克风（来电、语音消息、录音类 App），或蓝牙耳机切换了模式。' +
    '停止后重新开始即可恢复。如果插着蓝牙耳机反复出现，换成内置麦克风或有线耳机试试。',
  'index.faq.echo.q': '外放时出现啸叫或回音',
  'index.faq.echo.a':
    '同一个房间里外放，扬声器的译音会被麦克风重新拾到。' +
    '在<strong>设置 → 回声处理</strong>里改成「播放时压低麦克风」或「播放时静音麦克风」，' +
    '也可以把扬声器音量调低一些。改用听筒则完全不会有这个问题。',
  'index.faq.stuck.q': '字幕停住不动了',
  'index.faq.stuck.a':
    '界面顶部会显示健康状态。常见原因是网络中断，或麦克风被系统静音——后者会有明确提示。' +
    '停止再开始通常就好；买时长的话看看顶部的剩余时长；自带 Key 时如果阿里云报额度问题，界面上会原样转述它的错误信息。',
  'index.faq.phone.q': '换了手机，买过的时长和语言怎么办',
  'index.faq.phone.a':
    '买的时长记在你的账号上。账号是 App 自动生成的随机 ID，存在 iCloud 钥匙串里：' +
    '新手机登录同一个 Apple 账户、打开 iCloud 钥匙串，余额就在。' +
    '自带 Key 时买的「全部语言」，在<strong>设置 → 全部语言 → 恢复购买</strong>里取回，不会二次收费。',
  'index.faq.cantonese.q': '「粤 ⇄ 普」为什么反过来没有声音',
  'index.faq.cantonese.a':
    '模型能<strong>听懂</strong>粤语，也能<strong>写</strong>粤语，但没法<strong>说</strong>粤语——' +
    '它在官方语言表里属于「只有字幕」那一档。所以说粤语时会听到普通话译音；说普通话时，粤语译文只会以字幕出现。' +
    '这一对两边都是汉字，方向自动判不出来，请用方向开关手动指定。',
  'index.faq.direction.q': '西班牙语和葡萄牙语这类组合，方向偶尔会判反',
  'index.faq.direction.a':
    '两种语言用同一套字母时（英、西、葡、意、法、德、印尼、越南语等之间），判别只能靠用词，短句或专有名词上可能拿不准。' +
    '这类组合的顶部会多出一个方向开关，把它从「方向 · 自动」改成固定方向即可按住。',
  'index.contact.title': '联系我们',
  'index.contact.p':
    '问题、建议、退款咨询都可以写信到 <a href="mailto:winer632@qq.com">winer632@qq.com</a>，一般一到两个工作日内回复。' +
    '描述问题时如果能附上机型、iOS 版本、用的是哪两种语言、买时长还是自带 Key，排查会快很多。' +
    '买时长的问题请附上<strong>设置里的账号 ID</strong>。',

  // privacy.html
  'privacy.doc.title': '隐私政策 · 实时同声传译',
  'privacy.title': '隐私政策',
  'privacy.sub': '实时同声传译 · 最后更新 2026 年 9 月 24 日',
  'privacy.short':
    '<strong>一句话版本：</strong>App 有两种用法。默认的「购买时长」不用注册：你的语音从手机直接发往阿里云百炼翻译，' +
    '<strong>不经过我们的服务器</strong>；我们的服务器只记一个随机生成的账号号码、你买了多少时长、用了多少时长。' +
    '选「用自己的阿里云 Key」时，我们什么都不收集。App 里没有统计、广告和追踪，字幕记录只存在你的手机里。',
  'privacy.collect.title': '我们收集什么',
  'privacy.collect.intro': '取决于你在「设置 → 计费方式」里选的是哪一种。',
  'privacy.credit.title': '购买时长（默认，免注册）',
  'privacy.credit.intro':
    '为了记住你买了多少时长、防止被盗刷，App 会连接我们的服务器 <code>api.duo-interpreter.com</code>' +
    '（部署在 Microsoft Azure 新加坡区域）。服务器保存这些：',
  'privacy.credit.id':
    '<strong>随机账号 ID</strong>：App 第一次用时随机生成的一串号码（UUID），和你的姓名、邮箱、电话、Apple 账户都没有关系。' +
    '它存在你的 iCloud 钥匙串里，所以重装 App、换同一 Apple 账户的新手机，余额都还在。',
  'privacy.credit.device':
    '<strong>设备凭证</strong>：每台设备一把 Apple App Attest 密钥的编号和公钥，以及登记时间、最后一次使用时间。' +
    '用来确认请求来自这个 App 的正版安装，而不是被篡改的程序。',
  'privacy.credit.purchases':
    '<strong>购买记录</strong>：Apple 的交易号、商品（1、5 或 10 小时）、购买时间、是否是测试（沙盒）购买、是否已退款。',
  'privacy.credit.usage':
    '<strong>使用记录</strong>：每次传译的开始和结束时间、模式（念出译文或只出字幕）、扣了多少时长、' +
    '这次传译向服务器要了几次临时密钥，以及余额的每一笔增减。',
  'privacy.credit.trial':
    '<strong>新设备送的 5 分钟试用</strong>每台设备只送一次。为了防止重复领，App 会把 Apple DeviceCheck 生成的一次性令牌交给服务器，' +
    '服务器拿它请 Apple 查一下、再标记 Apple 替我们给这台设备保存的 1 个比特（「领过试用」）。令牌用完即弃，服务器不保存；' +
    'Apple 只替我们记这 1 个比特，不会告诉我们这是哪台设备。',
  'privacy.credit.never':
    '服务器<strong>收不到</strong>：你的语音、字幕和翻译内容，你的姓名、邮箱、电话、位置、通讯录，以及你的付款方式。',
  'privacy.key.title': '用自己的阿里云 Key',
  'privacy.key.p': '这种用法下 App 不连接我们的服务器，<strong>我们什么都不收集</strong>。',
  'privacy.both.title': '两种用法都一样',
  'privacy.both.p': 'App 里没有第三方分析、广告或跟踪组件。我们不做统计、不投广告、不跨 App 或网站追踪你，也不出售或分享任何数据。',
  'privacy.logs.title': '服务器日志与保存期限',
  'privacy.logs.ip':
    '连接服务器时，你的 IP 地址只在内存里用来限制请求频率（防刷），最后一次请求一小时后清掉，不写日志、不进数据库。' +
    '服务器日志只记事件，比如「有一台设备登记」（只记账号 ID 的前 8 位）、「一笔购买入账」（商品和是否是测试购买）、' +
    '「一笔退款」（交易号），以及出错信息。服务器日志保留 30 天后自动删除。',
  'privacy.logs.ledger':
    '账本每小时在服务器上做一份快照，保留最近 48 份；另外加密后传到异地备份，保留 30 天。' +
    '账号、购买和使用记录在账号存续期间一直保留，对账和处理 Apple 的退款都要用到。',
  'privacy.speech.title': '你的语音去了哪里',
  'privacy.speech.intro':
    '两种用法下，传译时麦克风采集的音频都<strong>从手机直接实时发往阿里云百炼</strong>（通义千问 LiveTranslate），' +
    '不经过我们的服务器，我们听不到，也存不下：',
  'privacy.speech.credit':
    '购买时长时，连接的是 <code>dashscope-intl.aliyuncs.com</code>（新加坡），用的是我们的阿里云账户：' +
    '服务器只给 App 签发一把 60 秒内有效的临时密钥去连接，音频按我们和阿里云之间的协议处理。',
  'privacy.speech.key':
    '用自己的 Key 时，连接你在设置里选的站点（<code>dashscope-intl.aliyuncs.com</code> 或 <code>dashscope.aliyuncs.com</code>），' +
    '用的是你自己的 Key，音频按<strong>你和阿里云之间</strong>的协议处理。',
  'privacy.speech.alibaba':
    '阿里云如何处理音频，见 ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">其隐私政策</a>。',
  'privacy.speech.hosts': 'App 只连接这几处：阿里云百炼、我们的服务器（仅购买时长时），以及 Apple 的服务（App 内购买、App Attest、DeviceCheck）。',
  'privacy.speech.voice':
    '<strong>译音用说话人的声音</strong>（默认开启，可在设置里关闭）：阿里云用同一段语音实时模仿说话人的音色来念译文，' +
    '每句跟着当时说话的人走，双方说话时都是如此。App 和我们都不另外采集、保存或上传声纹，用的就是本来发去翻译的那段音频。',
  'privacy.device.title': '留在你手机上的东西',
  'privacy.transcripts.title': '字幕记录',
  'privacy.transcripts.p':
    '每句定稿的字幕会按天存成文件，放在 App 自己的沙盒目录里，<strong>不会上传</strong>，也不参与 iCloud 备份。' +
    '可以在 App 的「记录」里查看、导出或删除；卸载 App 即随之清除。',
  'privacy.account.title': '账号 ID',
  'privacy.account.p':
    '上面说的随机账号 ID 存在 iOS 钥匙串里，打开了 iCloud 钥匙串时会在你同一 Apple 账户的设备间同步（由 Apple 端到端加密）。' +
    '卸载 App 不会删掉它，重装后余额还在。',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    '你自己填写的 API Key 保存在 iOS <strong>钥匙串</strong>中，标记为「仅本机、解锁后可读」，既不上传也不随备份迁移到其他设备。',
  'privacy.mic.title': '麦克风',
  'privacy.mic.p':
    '只有在你点击「开始传译」之后才会使用麦克风。切换到其他 App 或锁屏后，正在进行的传译会继续采集、翻译并保存字幕；' +
    '点击「停止」结束采集。来电等系统音频中断会暂停会话，系统允许恢复时继续。系统的橙色麦克风指示点会显示采集状态。',
  'privacy.purchase.title': '购买',
  'privacy.purchase.p':
    '购买时长和「全部语言」（用自己的 Key 时）都通过 <strong>Apple 的 App 内购买</strong>完成。支付全过程由 Apple 处理，' +
    '我们<strong>收不到也看不到</strong>你的支付方式、姓名或账单信息。',
  'privacy.purchase.credit':
    '购买时长：App 把账号 ID 交给 Apple 写进这笔交易，再把 Apple 签名的交易凭证交给我们的服务器核验、入账；' +
    '服务器只给交易里写明的那个账号加时长。退款由 Apple 处理，Apple 会通知服务器扣回相应时长。',
  'privacy.purchase.all': '「全部语言」：App 只向系统询问「是否已购买」，不经过我们的服务器。',
  'privacy.delete.title': '查询与删除',
  'privacy.delete.p':
    '你的账号 ID 在 App 的「设置 → 剩余时长」里，可以复制。想查询或删除服务器上关于你的记录，把它写信发到 ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a>，我们会删除这个账号在服务器上的全部记录' +
    '（快照和异地备份在各自的保留期后过期）。删除后剩余时长无法恢复。购买的退款请向 Apple 申请。',
  'privacy.children.title': '儿童',
  'privacy.children.p': '本 App 面向商务与日常口译场景，不面向儿童，也不会有意收集儿童的任何信息。',
  'privacy.changes.title': '政策变更',
  'privacy.changes.p':
    '如果这份政策有实质性变化，我们会更新页面顶部的日期。App 不需要注册，我们没有你的联系方式，无法主动通知你，请以本页为准。',
  'privacy.contact.title': '联系',
  'privacy.contact.p': '有任何隐私相关的问题，写信到 <a href="mailto:winer632@qq.com">winer632@qq.com</a>。',
});
