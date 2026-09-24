/**
 * 网站文案 · Tiếng Việt。从英文底本翻译，键和顺序与 zh.js 一致（另有 privacy.translated）。
 * 链接、<code>、邮箱原样保留；提到 App 里的按钮和菜单时用 public/i18n/vi.js 的原话。
 */
siteI18n('vi', {
  'nav.support': '← Hỗ trợ',
  'nav.setup': 'Lấy API Key',
  'nav.privacy': 'Chính sách quyền riêng tư',

  // setup.html
  'setup.doc.title': 'Lấy API Key của Qwen · Duo Interpreter',
  'setup.title': 'Lấy API Key của Qwen',
  'setup.sub': 'Mất khoảng mười phút. Hãy làm trên trình duyệt máy tính; chỉ bước cuối cùng là làm trên điện thoại.',
  'setup.intro':
    'Ứng dụng <strong>không kèm sẵn hạn mức dịch</strong>. Ứng dụng dùng tài khoản của chính bạn để kết nối tới Alibaba Cloud Model Studio, ' +
    'và Alibaba Cloud tính phí bạn theo mức sử dụng. Giọng nói của bạn không bao giờ đi qua máy chủ của chúng tôi.',
  'setup.remember':
    '<strong>Hai điều cần nhớ</strong> — gần như mọi lỗi đều bắt nguồn từ một trong hai điều này. Khóa phải được tạo ở khu vực ' +
    '<strong>Singapore</strong>; khóa tạo ở khu vực khác sẽ không dùng được ở đây. Và khóa <strong>chỉ hiện đầy đủ một lần</strong> — ' +
    'đóng hộp thoại đó rồi thì không thể xem lại được nữa.',
  'setup.s1.title': 'Tạo tài khoản Alibaba Cloud',
  'setup.s1.signup':
    'Đăng ký tại <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Chỉ cần địa chỉ email — <strong>không cần số điện thoại Trung Quốc đại lục</strong>.',
  'setup.s1.sso': 'Bạn cũng có thể đăng nhập bằng tài khoản Google hoặc GitHub để khỏi phải điền biểu mẫu.',
  'setup.s1.card':
    'Bạn cần thêm thẻ tín dụng hoặc PayPal thì mới kích hoạt được dịch vụ. Việc thêm thẻ không trừ tiền; ' +
    'bạn chỉ bị tính phí theo mức sử dụng thực tế.',
  'setup.s1.alt': 'Trang đăng nhập Alibaba Cloud',
  'setup.s2.title': 'Chuyển khu vực sang Singapore',
  'setup.s2.p':
    'Mở bảng điều khiển Model Studio tại <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'và kiểm tra xem khu vực ở <strong>góc trên bên phải có phải là Singapore</strong> không. Liên kết này đã trỏ sẵn tới đó, ' +
    'nhưng đôi khi đăng nhập xong bạn lại bị đưa về khu vực mặc định, nên vẫn nên kiểm tra lại.',
  'setup.s2.alt': 'Bảng điều khiển Model Studio với khu vực là Singapore',
  'setup.s2.caption':
    'Khu vực nằm ở góc trên bên phải. Nút <strong>API-KEY</strong> ở góc dưới bên trái là chỗ bạn sẽ bấm tiếp theo — ' +
    'nút này không nằm trong thanh điều hướng chính.',
  'setup.s3.title': 'Kích hoạt Model Studio',
  'setup.s3.p':
    'Lần truy cập đầu tiên sẽ yêu cầu bạn kích hoạt dịch vụ: đồng ý với điều khoản rồi xác nhận. ' +
    'Nếu tài khoản đã được kích hoạt, bạn sẽ không thấy màn hình này — hãy chuyển thẳng sang bước tiếp theo.',
  'setup.s4.title': 'Mở trang API Key',
  'setup.s4.p':
    'Bấm nút <strong>API-KEY</strong> ở <strong>góc dưới bên trái</strong> bảng điều khiển. Đây là một nút riêng, bo tròn hình con nhộng, ' +
    'chứ không phải một mục trong thanh điều hướng chính, nên lần đầu rất dễ bỏ sót.',
  'setup.s4.alt': 'Trang API Key với nút Create API Key',
  'setup.s4.caption': 'Khi đã vào trang này, bấm <strong>Create API Key</strong> ở bên phải.',
  'setup.s5.title': 'Tạo khóa',
  'setup.s5.p':
    'Bấm <strong>Create API Key</strong>. Chọn không gian làm việc mặc định, đặt quyền là <strong>All</strong>, ' +
    'phần mô tả có thể để trống, rồi xác nhận.',
  'setup.s5.alt': 'Hộp thoại Create API Key',
  'setup.s6.title': 'Sao chép toàn bộ khóa ngay lập tức',
  'setup.s6.copy':
    'Khóa bắt đầu bằng <code>sk-</code> và khá dài — <strong>hãy sao chép toàn bộ</strong>. ' +
    'Khóa bị thiếu vài ký tự cuối sẽ báo lỗi y hệt khóa sai. Hãy dùng nút sao chép trong hộp thoại.',
  'setup.s6.download':
    'Hộp thoại còn có nút <strong>Download</strong> để lưu khóa ra tệp — an toàn hơn so với chỉ dựa vào bảng nhớ tạm.',
  'setup.s6.note':
    '<strong>Khi hộp thoại này đóng lại, bạn sẽ không xem được toàn bộ khóa nữa.</strong> ' +
    'Nếu làm mất, chỉ cần xóa khóa đó và tạo khóa khác — không ảnh hưởng gì khác.',
  'setup.s6.alt': 'Hộp thoại chỉ hiển thị khóa một lần, có nút Copy và Download',
  'setup.s6.caption': 'Khóa và các tên miền riêng đã được che đi trong ảnh chụp màn hình này.',
  'setup.s7.title': 'Dán khóa vào ứng dụng rồi chạm vào “Kiểm tra”',
  'setup.s7.p':
    'Quay lại điện thoại: vào <strong>Cài đặt → Cách thanh toán</strong>, chọn “Dùng khóa Alibaba Cloud của tôi”, ' +
    'phần <strong>API Key của Qwen</strong> sẽ hiện ra. Để nguyên lựa chọn <strong>Quốc tế · Singapore</strong>, dán khóa vào, ' +
    'chạm vào <strong>Lưu</strong>, rồi chạm vào <strong>Kiểm tra</strong>. Thấy dòng chữ xanh “Đã kết nối — khóa hoạt động” là xong.',
  'setup.s7.start':
    'Cuối cùng, đóng Cài đặt, chọn ngôn ngữ ở “Tôi nói” và “Người kia nói”, rồi bắt đầu. Tiếng Trung ⇄ tiếng Anh miễn phí; ' +
    'mua “Tất cả ngôn ngữ” một lần trong Cài đặt là mở khóa các ngôn ngữ còn lại.',
  'setup.s7.alt': 'Cài đặt của ứng dụng với khóa đã lưu và kiểm tra thành công',
  'setup.s7.caption': 'Dòng chữ xanh đó nghĩa là đã thành công.',
  'setup.help.title': 'Nếu không kết nối được',
  'setup.help.badKey':
    '<strong>“API Key không hợp lệ”</strong> — chín trên mười trường hợp là do sai khu vực. Hãy xem góc trên bên phải bảng điều khiển ' +
    'có ghi Singapore không; nếu không, hãy chuyển khu vực rồi <strong>tạo khóa mới</strong>, vì khóa không thể chuyển giữa các khu vực. ' +
    'Cũng hãy kiểm tra xem khi dán có bị mất ký tự nào ở cuối không.',
  'setup.help.forbidden':
    '<strong>“Khóa này không gọi được mô hình”</strong> — tài khoản chưa kích hoạt Model Studio, hoặc không còn số dư khả dụng. ' +
    'Hãy kiểm tra trong bảng điều khiển.',
  'setup.help.timeout':
    '<strong>“Hết thời gian kết nối”</strong> — điện thoại không kết nối được tới <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Hãy thử mạng khác, ví dụ dùng dữ liệu di động thay cho Wi-Fi văn phòng.',
  'setup.help.noKey':
    '<strong>Muốn dùng thử trước, hoặc không lấy được khóa?</strong> Không cần khóa: ' +
    '<strong>Cài đặt → Cách thanh toán → Mua thời gian (không cần đăng ký)</strong>. Thiết bị mới được tặng 5 phút miễn phí — ' +
    'chạm vào “Bắt đầu” để dùng thử; sau đó, mua thời gian ngay trong ứng dụng là dùng được mọi ngôn ngữ.',
  'setup.help.contact':
    'Vẫn chưa được? Hãy viết thư tới <a href="mailto:winer632@qq.com">winer632@qq.com</a>, ghi rõ thiết bị, phiên bản iOS ' +
    'và nguyên văn thông báo mà nút “Kiểm tra” hiện ra — như vậy sẽ xử lý nhanh hơn nhiều. ' +
    '<strong>Vui lòng không gửi khóa của bạn cho chúng tôi.</strong>',

  // index.html
  'index.doc.title': 'Hỗ trợ · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Hỗ trợ',
  'index.sub':
    'Phiên dịch hai chiều cho cuộc trò chuyện mặt đối mặt. Phụ đề và giọng đọc bản dịch có ngay trong lúc nói, ' +
    'chiều dịch được nhận biết tự động.',
  'index.trial.title': 'Dùng thử miễn phí năm phút',
  'index.trial.p':
    'Không cần đăng ký, không cần khóa: lần đầu mở ứng dụng trên một thiết bị mới, bạn được tặng <strong>năm phút miễn phí</strong>, ' +
    'hiển thị ở phía trên cùng. Chọn “Tôi nói” và “Người kia nói” phía trên phụ đề, chạm vào “Bắt đầu” rồi cứ thế nói — ' +
    'đây là phiên dịch thật, phụ đề và giọng đọc có ngay trong lúc nói. Mỗi thiết bị chỉ được dùng thử một lần; ' +
    'sau đó, hãy mua thời gian trong ứng dụng hoặc dùng khóa Alibaba Cloud của riêng bạn.',
  'index.pay.title': 'Sử dụng chính thức',
  'index.pay.intro': 'Có hai cách thanh toán, chọn trong <strong>Cài đặt → Cách thanh toán</strong>:',
  'index.pay.credit':
    '<strong>Mua thời gian phiên dịch trong ứng dụng</strong> (mặc định) — không cần bất kỳ tài khoản nào; mở ra là dùng, ' +
    'thiết bị mới được tặng năm phút miễn phí. Có các gói 1, 5 và 10 giờ, dùng được cho mọi ngôn ngữ. ' +
    'Khi có giọng đọc bản dịch, mỗi phút tính một phút; chỉ phụ đề thì chỉ tính một phần ba.',
  'index.pay.key':
    '<strong>Dùng khóa Alibaba Cloud của riêng bạn</strong> — Alibaba Cloud tính phí trực tiếp cho bạn theo mức sử dụng. ' +
    'Khi đó tiếng Trung ⇄ tiếng Anh miễn phí; mọi ngôn ngữ khác được mở khóa vĩnh viễn chỉ với một lần mua “Tất cả ngôn ngữ”, ' +
    'kể cả các ngôn ngữ được thêm sau này. ' +
    '<a href="./setup.html">Hướng dẫn từng bước để lấy API Key →</a>',
  'index.langs.title': 'Ngôn ngữ',
  'index.langs.intro':
    'Chọn ở hai cột phía trên phụ đề: “Tôi nói” ở bên trái, “Người kia nói” ở bên phải. 24 ngôn ngữ dưới đây ' +
    'phiên dịch qua lại được với nhau — trừ vài tổ hợp liệt kê bên dưới — và chiều dịch được nhận biết tự động:',
  'index.langs.list':
    'Tiếng Trung, tiếng Anh, tiếng Nhật, tiếng Hàn, tiếng Đức, tiếng Pháp, tiếng Tây Ban Nha, tiếng Bồ Đào Nha, tiếng Ý, ' +
    'tiếng Nga, tiếng Hindi, tiếng Indonesia, tiếng Việt, tiếng Ả Rập, tiếng Thái, tiếng Thổ Nhĩ Kỳ, tiếng Philippines, ' +
    'tiếng Ba Lan, tiếng Urdu, tiếng Do Thái, tiếng Ba Tư, tiếng Mã Lai, tiếng Hà Lan, tiếng Bangla',
  'index.langs.bangla':
    '<strong>Tiếng Bangla chỉ có phụ đề</strong>: lời người khác được dịch sang tiếng Bangla dưới dạng chữ, không đọc thành tiếng; ' +
    'còn nói tiếng Bangla thì vẫn có bản dịch đọc thành tiếng.',
  'index.langs.unpaired':
    'Có vài tổ hợp không được ghép cặp: tiếng Indonesia với tiếng Mã Lai và tiếng Hindi với tiếng Urdu (người nói vốn đã hiểu nhau), ' +
    'cùng tiếng Ả Rập, tiếng Urdu và tiếng Ba Tư với nhau (cùng bảng chữ cái; ứng dụng chưa phân biệt được ai đang nói).',
  'index.langs.cantonese':
    '<strong>Tiếng Quảng Đông ⇄ tiếng Quan Thoại</strong> — một chiều có giọng đọc, chiều kia chỉ có phụ đề.',
  'index.faq.title': 'Câu hỏi thường gặp',
  'index.faq.sound.q': 'Không có tiếng',
  'index.faq.sound.a':
    'Hãy kiểm tra <strong>nút gạt Chuông/Im lặng</strong> phía trên các nút âm lượng ở cạnh trái — thấy màu cam nghĩa là đang im lặng. ' +
    'Sau đó, đảm bảo bộ chọn giọng đọc ở phía trên không đặt ở “🔇 Tắt giọng đọc”, và bạn không dịch sang tiếng Bangla ' +
    'hoặc tiếng Quảng Đông, vốn chỉ có phụ đề. Nếu vẫn không nghe thấy, hãy tăng âm lượng: loa trong và loa ngoài có mức âm lượng riêng.',
  'index.faq.earpiece.q': 'Nghe riêng thay vì phát ra loa ngoài',
  'index.faq.earpiece.a':
    'Chuyển bộ chọn giọng đọc ở phía trên sang <strong>📞 Loa trong</strong>, bản dịch sẽ phát ra từ loa trong; ' +
    'bạn áp điện thoại lên tai như khi gọi điện. Bạn có thể chuyển bất cứ lúc nào, kể cả khi đang phiên dịch.',
  'index.faq.mic.q': '“Hệ thống đã ngắt kết nối micrô”',
  'index.faq.mic.a':
    'Thường là do một ứng dụng khác đã chiếm micrô — cuộc gọi, tin nhắn thoại, ứng dụng ghi âm — hoặc tai nghe Bluetooth đã đổi chế độ. ' +
    'Hãy dừng rồi bắt đầu lại để khôi phục. Nếu tình trạng này cứ lặp lại với Bluetooth, hãy thử micrô tích hợp hoặc tai nghe có dây.',
  'index.faq.echo.q': 'Bị hú hoặc vọng tiếng khi dùng loa ngoài',
  'index.faq.echo.a':
    'Trong cùng một phòng, âm thanh phát ra từ loa ngoài bị micrô thu lại. Trong <strong>Cài đặt → Xử lý tiếng vọng</strong>, ' +
    'chọn “Giảm micrô khi phát” hoặc “Tắt micrô khi phát”, hoặc đơn giản là giảm âm lượng. Dùng loa trong sẽ tránh được hoàn toàn chuyện này.',
  'index.faq.stuck.q': 'Phụ đề ngừng cập nhật',
  'index.faq.stuck.a':
    'Thanh ở phía trên cùng cho biết tình trạng của phiên dịch. Nguyên nhân thường gặp là mất mạng hoặc hệ thống tắt tiếng micrô — ' +
    'trường hợp này sẽ được báo rõ. Dừng rồi bắt đầu lại thường sẽ hết. Nếu dùng thời gian đã mua, hãy xem thời gian còn lại ở phía trên; ' +
    'nếu dùng khóa của riêng bạn, lỗi hạn mức từ Alibaba Cloud sẽ được hiển thị nguyên văn.',
  'index.faq.phone.q': 'Chuyển sang điện thoại mới',
  'index.faq.phone.a':
    'Thời gian đã mua thuộc về tài khoản của bạn — một ID ngẫu nhiên do ứng dụng tạo ra và lưu trong Chuỗi khóa iCloud: ' +
    'trên điện thoại mới, hãy đăng nhập cùng Tài khoản Apple và bật Chuỗi khóa iCloud, số dư sẽ vẫn còn nguyên. ' +
    '“Tất cả ngôn ngữ”, mua khi dùng khóa của riêng bạn, được khôi phục miễn phí trong ' +
    '<strong>Cài đặt → Tất cả ngôn ngữ → Khôi phục giao dịch mua</strong>.',
  'index.faq.cantonese.q': 'Vì sao tiếng Quảng Đông ⇄ tiếng Quan Thoại chỉ có giọng đọc một chiều',
  'index.faq.cantonese.a':
    'Mô hình có thể <strong>hiểu</strong> và <strong>viết</strong> tiếng Quảng Đông, nhưng không <strong>nói</strong> được — ' +
    'trong bảng ngôn ngữ của nhà cung cấp, tiếng Quảng Đông chỉ có phụ đề. Vì vậy, nói tiếng Quảng Đông thì bạn nghe được bản dịch ' +
    'tiếng Quan Thoại; nói tiếng Quan Thoại thì chỉ có phụ đề tiếng Quảng Đông. Cả hai bên đều dùng chữ Hán nên không thể tự nhận biết ' +
    'chiều dịch — hãy đặt chiều dịch bằng bộ chọn chiều dịch.',
  'index.faq.direction.q': 'Chiều dịch thỉnh thoảng bị đảo, ví dụ giữa tiếng Tây Ban Nha và tiếng Bồ Đào Nha',
  'index.faq.direction.a':
    'Khi hai ngôn ngữ dùng chung bảng chữ cái (tiếng Anh, Tây Ban Nha, Bồ Đào Nha, Ý, Pháp, Đức, Indonesia, Việt, v.v.), ' +
    'việc nhận biết dựa vào cách dùng từ và có thể dao động với câu ngắn hoặc tên riêng. Những tổ hợp này có thêm một nút chọn chiều dịch ' +
    'ở phía trên — đổi từ “Chiều dịch · tự động” sang một chiều cố định để giữ nguyên chiều dịch.',
  'index.contact.title': 'Liên hệ',
  'index.contact.p':
    'Mọi câu hỏi, góp ý và yêu cầu hoàn tiền xin gửi về <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'chúng tôi thường trả lời trong vòng một đến hai ngày làm việc. Cho chúng tôi biết thiết bị, phiên bản iOS, hai ngôn ngữ bạn dùng, ' +
    'và bạn mua thời gian hay dùng khóa riêng sẽ giúp xử lý nhanh hơn nhiều. Nếu dùng thời gian đã mua, ' +
    'hãy gửi kèm <strong>ID tài khoản</strong> hiển thị trong Cài đặt.',

  // privacy.html
  'privacy.doc.title': 'Chính sách quyền riêng tư · Duo Interpreter',
  'privacy.title': 'Chính sách quyền riêng tư',
  'privacy.sub': 'Duo Interpreter · Cập nhật lần cuối ngày 24 tháng 9 năm 2026',
  'privacy.translated':
    'Chính sách này là bản dịch. Nếu có khác biệt so với <a href="?lang=en">bản tiếng Anh</a>, bản tiếng Anh sẽ được áp dụng.',
  'privacy.short':
    '<strong>Tóm tắt:</strong> ứng dụng có hai cách sử dụng. Mặc định, bạn mua thời gian phiên dịch mà không cần đăng ký: ' +
    'giọng nói của bạn đi thẳng từ điện thoại tới Alibaba Cloud Model Studio để dịch và <strong>không bao giờ đi qua máy chủ của chúng tôi</strong>; ' +
    'máy chủ của chúng tôi chỉ lưu một số tài khoản được tạo ngẫu nhiên, lượng thời gian bạn đã mua và lượng thời gian bạn đã dùng. ' +
    'Nếu bạn dùng khóa Alibaba Cloud của riêng mình, chúng tôi không thu thập gì cả. Không có công cụ phân tích, quảng cáo hay theo dõi, ' +
    'và bản ghi chỉ nằm trên điện thoại của bạn.',
  'privacy.collect.title': 'Chúng tôi thu thập những gì',
  'privacy.collect.intro': 'Tùy vào lựa chọn của bạn trong Cài đặt → Cách thanh toán.',
  'privacy.credit.title': 'Mua thời gian (mặc định, không cần đăng ký)',
  'privacy.credit.intro':
    'Để ghi nhớ lượng thời gian bạn đã mua và ngăn chặn lạm dụng, ứng dụng liên lạc với máy chủ <code>api.duo-interpreter.com</code> ' +
    'của chúng tôi (đặt trên Microsoft Azure tại Singapore). Máy chủ lưu:',
  'privacy.credit.id':
    '<strong>Một ID tài khoản ngẫu nhiên</strong>: một mã số (UUID) do ứng dụng tạo ra trong lần đầu bạn sử dụng. ' +
    'ID này không liên quan gì đến tên, email, số điện thoại hay Tài khoản Apple của bạn. ID được lưu trong Chuỗi khóa iCloud của bạn, ' +
    'nên số dư vẫn còn sau khi cài lại ứng dụng và theo bạn sang điện thoại mới dùng cùng Tài khoản Apple.',
  'privacy.credit.device':
    '<strong>Thông tin xác thực thiết bị</strong>: với mỗi thiết bị, mã định danh và khóa công khai của một khóa Apple App Attest, ' +
    'cùng thời điểm đăng ký và thời điểm sử dụng gần nhất. Chúng chứng minh rằng các yêu cầu đến từ một bản chính hãng của ứng dụng này, ' +
    'không phải một bản đã bị sửa đổi.',
  'privacy.credit.purchases':
    '<strong>Giao dịch mua</strong>: mã giao dịch của Apple, sản phẩm (1, 5 hoặc 10 giờ), thời điểm mua, ' +
    'đó có phải là giao dịch mua thử nghiệm (sandbox) hay không, và đã được hoàn tiền hay chưa.',
  'privacy.credit.usage':
    '<strong>Mức sử dụng</strong>: thời điểm bắt đầu và kết thúc của mỗi lần phiên dịch, chế độ (có giọng đọc bản dịch hoặc chỉ phụ đề), ' +
    'lượng thời gian đã dùng, số khóa tạm thời đã yêu cầu, và mọi thay đổi trong số dư của bạn.',
  'privacy.credit.trial':
    '<strong>5 phút dùng thử</strong> chỉ được tặng một lần cho mỗi thiết bị. Để ngăn việc nhận lại nhiều lần, ứng dụng gửi cho máy chủ ' +
    'một mã thông báo Apple DeviceCheck dùng một lần; máy chủ dùng mã này để nhờ Apple kiểm tra, rồi đặt, một bit duy nhất ' +
    'mà Apple thay mặt chúng tôi lưu cho thiết bị này (“đã dùng thử”). Mã thông báo chỉ được dùng một lần và không được lưu lại, ' +
    'còn Apple chỉ lưu bit đó cho chúng tôi mà không cho chúng tôi biết đó là thiết bị nào.',
  'privacy.credit.never':
    'Máy chủ <strong>không bao giờ nhận</strong> giọng nói, phụ đề hay bản dịch của bạn; tên, email, số điện thoại, vị trí hay danh bạ của bạn; ' +
    'hay thông tin thanh toán của bạn.',
  'privacy.key.title': 'Dùng khóa Alibaba Cloud của riêng bạn',
  'privacy.key.p': 'Ở chế độ này, ứng dụng không liên lạc với máy chủ của chúng tôi, và <strong>chúng tôi không thu thập gì cả</strong>.',
  'privacy.both.title': 'Ở cả hai chế độ',
  'privacy.both.p':
    'Ứng dụng không chứa công cụ phân tích, quảng cáo hay theo dõi của bên thứ ba. Chúng tôi không chạy phân tích hay quảng cáo, ' +
    'không theo dõi bạn trên các ứng dụng hoặc trang web, và không bán hay chia sẻ bất kỳ dữ liệu nào.',
  'privacy.logs.title': 'Nhật ký máy chủ và thời gian lưu giữ',
  'privacy.logs.ip':
    'Địa chỉ IP của bạn chỉ được dùng trong bộ nhớ để giới hạn tần suất yêu cầu (nhằm ngăn lạm dụng) và bị loại bỏ sau một giờ ' +
    'kể từ yêu cầu cuối cùng của bạn; địa chỉ này không được ghi vào nhật ký hay lưu trữ. Nhật ký máy chủ chỉ ghi lại các sự kiện, ' +
    'chẳng hạn “một thiết bị đã đăng ký” (chỉ kèm 8 ký tự đầu của ID tài khoản), “một giao dịch mua đã được cộng thời gian” ' +
    '(sản phẩm và có phải giao dịch mua thử nghiệm hay không), “một khoản hoàn tiền đã được áp dụng” (mã giao dịch), và các lỗi. ' +
    'Nhật ký máy chủ được tự động xóa sau 30 ngày.',
  'privacy.logs.ledger':
    'Mỗi giờ, máy chủ tạo một bản chụp nhanh (snapshot) của sổ cái và giữ lại 48 bản gần nhất; ngoài ra, một bản sao đã mã hóa ' +
    'được lưu ở một địa điểm khác trong 30 ngày. Hồ sơ tài khoản, giao dịch mua và mức sử dụng được giữ chừng nào tài khoản còn tồn tại, ' +
    'vì chúng cần thiết để đối soát sổ sách và xử lý hoàn tiền của Apple.',
  'privacy.speech.title': 'Giọng nói của bạn đi đâu',
  'privacy.speech.intro':
    'Ở cả hai chế độ, âm thanh từ micrô <strong>được gửi trực tiếp, theo thời gian thực, từ điện thoại của bạn tới Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Âm thanh không bao giờ đi qua máy chủ của chúng tôi; chúng tôi không nghe được và cũng không có gì để lưu giữ:',
  'privacy.speech.credit':
    'Khi bạn mua thời gian, ứng dụng kết nối tới <code>dashscope-intl.aliyuncs.com</code> (Singapore) bằng tài khoản Alibaba Cloud ' +
    'của chúng tôi: máy chủ của chúng tôi chỉ cấp cho ứng dụng một khóa tạm thời hết hạn sau 60 giây, và âm thanh được xử lý ' +
    'theo thỏa thuận giữa chúng tôi với Alibaba Cloud.',
  'privacy.speech.key':
    'Khi dùng khóa của riêng bạn, ứng dụng kết nối tới trang bạn đã chọn trong cài đặt (<code>dashscope-intl.aliyuncs.com</code> ' +
    'hoặc <code>dashscope.aliyuncs.com</code>) bằng khóa của bạn, và âm thanh được xử lý theo thỏa thuận giữa <strong>bạn</strong> với Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Về cách Alibaba Cloud xử lý âm thanh, xem ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">chính sách quyền riêng tư của họ</a>.',
  'privacy.speech.hosts':
    'Ứng dụng chỉ kết nối tới Alibaba Cloud Model Studio, máy chủ của chúng tôi (chỉ khi mua thời gian) và các dịch vụ của Apple ' +
    '(Mua hàng trong ứng dụng, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Đọc bản dịch bằng giọng của người nói</strong> (bật theo mặc định, có thể tắt trong cài đặt): Alibaba Cloud mô phỏng giọng ' +
    'của người nói theo thời gian thực từ chính đoạn âm thanh đang được dịch, theo từng người đang nói — cả hai người trong cuộc trò chuyện. ' +
    'Cả ứng dụng lẫn chúng tôi đều không thu thập, lưu trữ hay tải lên riêng bất kỳ dấu vân giọng nói nào; ' +
    'đó chính là đoạn âm thanh vốn đã được gửi đi để dịch.',
  'privacy.device.title': 'Những gì ở lại trên điện thoại của bạn',
  'privacy.transcripts.title': 'Bản ghi',
  'privacy.transcripts.p':
    'Các câu đã hoàn chỉnh được ghi vào tệp, mỗi ngày một tệp, bên trong vùng chứa riêng của ứng dụng. Các tệp này ' +
    '<strong>không bao giờ được tải lên</strong> và không nằm trong bản sao lưu iCloud. Bạn có thể xem, xuất hoặc xóa chúng ' +
    'trong mục “Lịch sử” của ứng dụng; xóa ứng dụng cũng sẽ xóa chúng.',
  'privacy.account.title': 'ID tài khoản',
  'privacy.account.p':
    'ID tài khoản ngẫu nhiên nêu ở trên được lưu trong Chuỗi khóa của iOS và, nếu Chuỗi khóa iCloud được bật, được đồng bộ giữa ' +
    'các thiết bị dùng cùng Tài khoản Apple của bạn (được Apple mã hóa đầu cuối). Xóa ứng dụng không xóa ID này, ' +
    'nên số dư vẫn còn sau khi cài lại.',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    'Các API Key do bạn tự nhập được lưu trong <strong>Chuỗi khóa</strong> của iOS, được đánh dấu là chỉ đọc được trên thiết bị này ' +
    'và chỉ khi thiết bị đang mở khóa. Chúng không bao giờ được tải lên và không chuyển sang thiết bị khác qua bản sao lưu.',
  'privacy.mic.title': 'Micrô',
  'privacy.mic.p':
    'Micrô chỉ được dùng sau khi bạn chạm vào “Bắt đầu”. Khi đang phiên dịch, ứng dụng vẫn tiếp tục thu âm, dịch và lưu bản ghi ' +
    'khi bạn chuyển sang ứng dụng khác hoặc khóa màn hình. Chạm vào “Dừng” để ngừng thu âm. Các gián đoạn âm thanh của hệ thống, ' +
    'chẳng hạn cuộc gọi, sẽ tạm dừng phiên dịch; phiên dịch tiếp tục khi hệ thống cho phép. ' +
    'Chấm báo micrô màu cam của hệ thống cho biết khi nào đang thu âm.',
  'privacy.purchase.title': 'Giao dịch mua',
  'privacy.purchase.p':
    'Việc mua thời gian và mua “Tất cả ngôn ngữ” (khi dùng khóa của riêng bạn) đều thông qua ' +
    '<strong>tính năng Mua hàng trong ứng dụng của Apple</strong>. Apple xử lý toàn bộ việc thanh toán; ' +
    'chúng tôi <strong>không bao giờ nhận hay thấy</strong> phương thức thanh toán, tên hay thông tin hóa đơn của bạn.',
  'privacy.purchase.credit':
    'Mua thời gian: ứng dụng yêu cầu Apple ghi ID tài khoản của bạn vào giao dịch, sau đó gửi giao dịch đã được Apple ký ' +
    'tới máy chủ của chúng tôi để xác minh và cộng thời gian; máy chủ chỉ cộng cho đúng tài khoản ghi trong giao dịch. ' +
    'Việc hoàn tiền do Apple xử lý; Apple sẽ thông báo cho máy chủ của chúng tôi để thu hồi phần thời gian tương ứng.',
  'privacy.purchase.all':
    '“Tất cả ngôn ngữ”: ứng dụng chỉ hỏi hệ thống xem sản phẩm này đã được mua hay chưa; máy chủ của chúng tôi không tham gia.',
  'privacy.delete.title': 'Truy cập và xóa dữ liệu',
  'privacy.delete.p':
    'ID tài khoản của bạn nằm trong mục Cài đặt → Thời gian còn lại của ứng dụng, kèm nút “Sao chép”. Để xem hoặc xóa những gì ' +
    'máy chủ của chúng tôi lưu về bạn, hãy gửi ID đó tới <a href="mailto:winer632@qq.com">winer632@qq.com</a> và chúng tôi sẽ xóa ' +
    'toàn bộ hồ sơ của tài khoản đó trên máy chủ (các bản chụp nhanh và bản sao ở địa điểm khác sẽ hết hạn sau thời gian lưu giữ tương ứng). ' +
    'Thời gian còn lại không thể khôi phục sau khi xóa. Để được hoàn tiền cho giao dịch mua, hãy gửi yêu cầu tới Apple.',
  'privacy.children.title': 'Trẻ em',
  'privacy.children.p':
    'Ứng dụng này hướng đến việc phiên dịch trong công việc và đời sống hằng ngày. Ứng dụng không nhắm đến trẻ em ' +
    'và không cố ý thu thập bất kỳ thông tin nào từ trẻ em.',
  'privacy.changes.title': 'Thay đổi',
  'privacy.changes.p':
    'Nếu chính sách này có thay đổi quan trọng, chúng tôi sẽ cập nhật ngày ở đầu trang. Ứng dụng không yêu cầu đăng ký ' +
    'và chúng tôi không có cách nào liên lạc với bạn, vì vậy trang này là căn cứ chính thức.',
  'privacy.contact.title': 'Liên hệ',
  'privacy.contact.p': 'Mọi câu hỏi về quyền riêng tư: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
