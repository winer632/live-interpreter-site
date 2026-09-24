/**
 * 网站文案 · 한국어。从英文（三个页面的 HTML）翻译，键的顺序和 zh.js 一致；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/ko.js 里的原话。
 * 支持页和申请教程用 해요체（和 App 一致），隐私政策用 합니다체。
 */
siteI18n('ko', {
  'nav.support': '← 고객 지원',
  'nav.setup': 'API Key 발급받기',
  'nav.privacy': '개인정보 처리방침',

  // setup.html
  'setup.doc.title': 'Qwen API Key 발급받기 · Duo Interpreter',
  'setup.title': 'Qwen API Key 발급받기',
  'setup.sub': '10분 정도 걸려요. 컴퓨터 브라우저에서 진행하고, 마지막 단계만 휴대폰에서 해요.',
  'setup.intro':
    '이 앱에는 <strong>번역 이용 크레딧이 포함되어 있지 않아요</strong>. 내 계정으로 Alibaba Cloud Model Studio에 연결하고, ' +
    '사용한 만큼 Alibaba Cloud가 요금을 청구해요. 음성은 저희 서버를 거치지 않아요.',
  'setup.remember':
    '<strong>꼭 기억할 두 가지</strong> — 실패는 거의 다 이 둘 중 하나 때문이에요. ' +
    'Key는 반드시 <strong>Singapore(싱가포르)</strong> 리전에서 만들어야 해요. 다른 리전의 Key는 여기서 작동하지 않아요. ' +
    '그리고 Key는 <strong>딱 한 번만 전체가 표시돼요</strong>. 그 대화상자를 닫으면 다시 볼 수 없어요.',
  'setup.s1.title': 'Alibaba Cloud 계정 만들기',
  'setup.s1.signup':
    '<a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>에서 가입하세요. ' +
    '이메일 주소만 있으면 되고, <strong>중국 본토 전화번호는 필요 없어요</strong>.',
  'setup.s1.sso': 'Google이나 GitHub 계정으로 로그인하면 양식 작성을 건너뛸 수 있어요.',
  'setup.s1.card':
    '서비스를 활성화하려면 먼저 신용카드나 PayPal을 등록해야 해요. 등록만으로는 요금이 청구되지 않고, 실제 사용량만큼만 청구돼요.',
  'setup.s1.alt': 'Alibaba Cloud 로그인 페이지',
  'setup.s2.title': '리전을 싱가포르로 바꾸기',
  'setup.s2.p':
    'Model Studio 콘솔(<a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a>)을 열고 ' +
    '<strong>오른쪽 위의 리전이 Singapore인지</strong> 확인하세요. 링크가 이미 싱가포르를 가리키고 있지만, ' +
    '로그인하는 과정에서 기본 리전으로 돌아갈 때가 있어서 한 번 확인해 두는 게 좋아요.',
  'setup.s2.alt': '리전이 Singapore로 설정된 Model Studio 콘솔',
  'setup.s2.caption':
    '리전은 오른쪽 위에 있어요. 다음에 누를 곳은 왼쪽 아래의 <strong>API-KEY</strong> 버튼이에요. 메인 메뉴에는 없어요.',
  'setup.s3.title': 'Model Studio 활성화하기',
  'setup.s3.p':
    '처음 방문하면 서비스를 활성화하라는 안내가 나와요. 약관에 동의하고 확인하세요. ' +
    '이미 활성화된 계정이라면 이 화면이 보이지 않으니 바로 다음 단계로 넘어가세요.',
  'setup.s4.title': 'API Key 페이지 열기',
  'setup.s4.p':
    '콘솔 <strong>왼쪽 아래</strong>의 <strong>API-KEY</strong> 버튼을 클릭하세요. ' +
    '메인 메뉴 항목이 아니라 따로 떨어진 알약 모양 버튼이라서 처음에는 놓치기 쉬워요.',
  'setup.s4.alt': 'Create API Key 버튼이 있는 API Key 페이지',
  'setup.s4.caption': '이 페이지에 들어오면 오른쪽의 <strong>Create API Key</strong>를 클릭하세요.',
  'setup.s5.title': 'Key 만들기',
  'setup.s5.p':
    '<strong>Create API Key</strong>를 클릭하세요. 작업 공간은 기본값을 고르고, 권한은 <strong>All</strong>로 설정하세요. ' +
    '설명은 비워 둬도 돼요. 그런 다음 확인을 누르세요.',
  'setup.s5.alt': 'Create API Key 대화상자',
  'setup.s6.title': 'Key 전체를 바로 복사하기',
  'setup.s6.copy':
    'Key는 <code>sk-</code>로 시작하고 꽤 길어요. <strong>처음부터 끝까지 전부 복사하세요</strong>. ' +
    '끝의 몇 글자가 빠진 Key는 잘못된 Key와 똑같이 실패해요. 대화상자의 복사 버튼을 쓰세요.',
  'setup.s6.download':
    '대화상자에는 <strong>Download</strong>도 있어서 Key를 파일로 저장할 수 있어요. 클립보드에만 의존하는 것보다 안전해요.',
  'setup.s6.note':
    '<strong>이 대화상자를 닫으면 전체 Key는 다시 볼 수 없어요.</strong> ' +
    '잃어버렸다면 그 Key를 삭제하고 새로 만들면 돼요. 다른 것에는 아무 영향이 없어요.',
  'setup.s6.alt': 'Key를 한 번만 보여 주는 대화상자(Copy와 Download 버튼 포함)',
  'setup.s6.caption': '이 스크린샷에서는 Key와 전용 도메인을 가렸어요.',
  'setup.s7.title': '앱에 붙여 넣고 “테스트” 누르기',
  'setup.s7.p':
    '다시 휴대폰에서 <strong>설정 → 결제 방법</strong>으로 가서 “내 Alibaba Cloud Key 사용”을 선택하면 ' +
    '<strong>Qwen API Key</strong> 항목이 나타나요. 사이트는 <strong>국제 사이트 · 싱가포르</strong> 그대로 두고, ' +
    'Key를 붙여 넣은 뒤 <strong>저장</strong>, 이어서 <strong>테스트</strong>를 누르세요. ' +
    '초록색으로 “연결됐어요 — Key가 정상이에요”가 보이면 끝이에요.',
  'setup.s7.start':
    '마지막으로 설정을 닫고 “내 언어”와 “상대 언어”에서 언어를 고른 뒤 시작하세요. 중국어 ⇄ 영어는 무료이고, ' +
    '설정에서 “모든 언어”를 한 번 구입하면 나머지 언어도 모두 잠금 해제돼요.',
  'setup.s7.alt': 'Key가 저장되고 테스트를 통과한 앱 설정 화면',
  'setup.s7.caption': '이 초록색 줄이 보이면 성공이에요.',
  'setup.help.title': '연결되지 않을 때',
  'setup.help.badKey':
    '<strong>“API Key가 올바르지 않아요”</strong> — 십중팔구 리전이 잘못된 거예요. 콘솔 오른쪽 위에 Singapore라고 표시되는지 확인하고, ' +
    '아니라면 리전을 바꾼 뒤 <strong>새 Key를 만드세요</strong>. Key는 리전 간에 옮길 수 없어요. ' +
    '붙여 넣을 때 끝부분이 잘리지 않았는지도 확인하세요.',
  'setup.help.forbidden':
    '<strong>“이 Key로는 모델을 호출할 수 없어요”</strong> — 계정에서 아직 Model Studio를 활성화하지 않았거나, 사용할 수 있는 잔액이 없어요. 콘솔에서 확인하세요.',
  'setup.help.timeout':
    '<strong>“연결 시간이 초과됐어요”</strong> — 휴대폰이 <code>dashscope-intl.aliyuncs.com</code>에 연결하지 못하고 있어요. ' +
    '사무실 Wi-Fi 대신 셀룰러 데이터를 쓰는 식으로 다른 네트워크에서 시도해 보세요.',
  'setup.help.noKey':
    '<strong>먼저 써 보고 싶거나 Key를 받을 수 없나요?</strong> Key 없이도 돼요. ' +
    '<strong>설정 → 결제 방법 → 시간 구입(가입 불필요)</strong>을 선택하세요. 새 기기에는 무료 5분이 주어지니 “시작”을 눌러 써 보세요. ' +
    '그다음에는 앱에서 시간을 구입하면 모든 언어를 쓸 수 있어요.',
  'setup.help.contact':
    '그래도 안 되면 <a href="mailto:winer632@qq.com">winer632@qq.com</a>으로 기기 모델, iOS 버전, ' +
    '“테스트” 버튼에 표시된 메시지를 그대로 적어 보내 주세요. 훨씬 빨리 해결할 수 있어요. <strong>Key는 보내지 마세요.</strong>',

  // index.html
  'index.doc.title': '고객 지원 · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · 고객 지원',
  'index.sub': '마주 보고 대화할 때 쓰는 양방향 통역. 말하는 대로 자막과 음성이 나오고, 번역 방향은 알아서 감지해요.',
  'index.trial.title': '무료 5분으로 써 보기',
  'index.trial.p':
    '가입도 Key도 필요 없어요. 새 기기에서 앱을 처음 열면 <strong>무료 5분</strong>이 주어지고, 화면 위쪽에 표시돼요. ' +
    '자막 위에서 “내 언어”와 “상대 언어”를 고르고 “시작”을 누른 다음 그냥 말하세요. 실제 통역 그대로라서 자막과 음성이 바로바로 나와요. ' +
    '무료 체험은 기기당 한 번이에요. 그다음에는 앱에서 시간을 구입하거나 내 Alibaba Cloud Key를 사용하세요.',
  'index.pay.title': '본격적으로 쓰기',
  'index.pay.intro': '결제 방법은 두 가지이며, <strong>설정 → 결제 방법</strong>에서 고를 수 있어요.',
  'index.pay.credit':
    '<strong>앱에서 통역 시간 구입</strong>(기본값) — 어떤 계정도 필요 없고, 열면 바로 쓸 수 있어요. 새 기기에는 무료 5분도 있어요. ' +
    '1시간, 5시간, 10시간 중에서 고를 수 있고 모든 언어에 쓸 수 있어요. 음성 번역은 1분에 1분이 차감되고, 자막만 쓰면 3분의 1만 차감돼요.',
  'index.pay.key':
    '<strong>내 Alibaba Cloud Key 사용</strong> — 사용한 만큼 Alibaba Cloud가 직접 요금을 청구해요. ' +
    '이때 중국어 ⇄ 영어는 무료이고, 나머지 언어는 “모든 언어”를 한 번 구입하면 영구히 잠금 해제돼요. 나중에 추가되는 언어도 포함돼요. ' +
    '<a href="./setup.html">API Key 발급 단계별 안내 →</a>',
  'index.langs.title': '지원 언어',
  'index.langs.intro':
    '자막 위의 두 열에서 고르세요. 왼쪽이 “내 언어”, 오른쪽이 “상대 언어”예요. ' +
    '아래 24개 언어는 서로 통역할 수 있고(아래에 적은 몇 가지 조합만 빼고요), 방향은 알아서 감지해요:',
  'index.langs.list':
    '중국어, 영어, 일본어, 한국어, 독일어, 프랑스어, 스페인어, 포르투갈어, 이탈리아어, 러시아어, 힌디어, 인도네시아어, ' +
    '베트남어, 아랍어, 태국어, 튀르키예어, 필리핀어, 폴란드어, 우르두어, 히브리어, 페르시아어, 말레이어, 네덜란드어, 벵골어',
  'index.langs.bangla':
    '<strong>벵골어는 자막만 지원해요</strong>: 다른 사람의 말은 벵골어 텍스트로만 표시되고 소리로는 나오지 않아요. ' +
    '벵골어로 말하면 번역은 그대로 음성으로 나와요.',
  'index.langs.unpaired':
    '몇 가지 조합은 빠져 있어요. 인도네시아어와 말레이어, 힌디어와 우르두어(원래 서로 알아들을 수 있어요), ' +
    '그리고 아랍어·우르두어·페르시아어끼리예요(같은 문자를 써서 앱이 아직 누가 말하는지 구분하지 못해요).',
  'index.langs.cantonese': '<strong>광둥어 ⇄ 표준 중국어</strong> — 한쪽 방향은 음성이 나오고, 반대쪽은 자막만 나와요.',
  'index.faq.title': '자주 묻는 질문',
  'index.faq.sound.q': '소리가 안 나요',
  'index.faq.sound.a':
    '먼저 왼쪽 측면 음량 버튼 위에 있는 <strong>벨소리/무음 스위치</strong>를 확인하세요. 주황색이 보이면 무음 상태예요. ' +
    '그다음 화면 위쪽의 음성 선택이 “🔇 음성 끔”으로 되어 있지 않은지, 자막만 나오는 벵골어나 광둥어로 번역하고 있지 않은지 확인하세요. ' +
    '그래도 소리가 들리지 않으면 음량을 높이세요. 수화부와 스피커의 음량은 따로 조절돼요.',
  'index.faq.earpiece.q': '스피커 대신 혼자 조용히 듣고 싶어요',
  'index.faq.earpiece.a':
    '화면 위쪽의 음성 선택을 <strong>📞 수화부</strong>로 바꾸면 번역이 수화부에서 나와서, 전화처럼 귀에 대고 들을 수 있어요. ' +
    '통역 중에도 언제든 바꿀 수 있어요.',
  'index.faq.mic.q': '“시스템이 마이크 연결을 끊었어요”',
  'index.faq.mic.a':
    '대개 다른 앱이 마이크를 가져갔거나(전화, 음성 메시지, 녹음 앱 등) 블루투스 헤드셋의 모드가 바뀐 경우예요. ' +
    '중지했다가 다시 시작하면 복구돼요. 블루투스에서 계속 이런 일이 생기면 내장 마이크나 유선 헤드셋을 써 보세요.',
  'index.faq.echo.q': '스피커로 들을 때 하울링이나 에코가 생겨요',
  'index.faq.echo.a':
    '한 방에서는 스피커에서 나온 소리를 마이크가 다시 잡아요. ' +
    '<strong>설정 → 에코 처리</strong>에서 “재생 중 마이크 줄이기”나 “재생 중 마이크 음소거”를 고르거나, 그냥 음량을 낮추세요. ' +
    '수화부를 쓰면 이 문제가 아예 생기지 않아요.',
  'index.faq.stuck.q': '자막이 더 이상 업데이트되지 않아요',
  'index.faq.stuck.a':
    '화면 위쪽 막대에 세션 상태가 표시돼요. 흔한 원인은 네트워크 끊김이나 시스템의 마이크 음소거이고, 후자는 화면에 분명하게 알려 줘요. ' +
    '보통은 중지했다가 다시 시작하면 해결돼요. 시간을 구입해서 쓰고 있다면 위쪽의 남은 시간을 확인하세요. ' +
    '내 Key를 쓰고 있다면 Alibaba Cloud에서 온 할당량 오류가 그대로 표시돼요.',
  'index.faq.phone.q': '새 휴대폰으로 옮길 때',
  'index.faq.phone.a':
    '구입한 시간은 내 계정에 속해요. 계정은 앱이 만들어 iCloud 키체인에 보관하는 무작위 ID예요. ' +
    '새 휴대폰에서 같은 Apple 계정으로 로그인하고 iCloud 키체인을 켜면 잔액이 그대로 있어요. ' +
    '내 Key를 쓸 때 구입한 “모든 언어”는 <strong>설정 → 모든 언어 → 구입 항목 복원</strong>에서 무료로 되찾을 수 있어요.',
  'index.faq.cantonese.q': '광둥어 ⇄ 표준 중국어는 왜 한쪽으로만 음성이 나오나요',
  'index.faq.cantonese.a':
    '모델은 광둥어를 <strong>알아듣고</strong> <strong>쓸</strong> 수는 있지만 <strong>말하지</strong>는 못해요. ' +
    '서비스 제공업체의 언어표에서도 광둥어는 자막 전용이에요. 그래서 광둥어로 말하면 표준 중국어 음성이 나오지만, ' +
    '표준 중국어로 말하면 광둥어 자막만 나와요. 양쪽 모두 한자를 써서 방향을 자동으로 감지할 수 없으니, 방향 선택으로 직접 정하세요.',
  'index.faq.direction.q': '스페인어와 포르투갈어처럼 방향이 가끔 뒤바뀌어요',
  'index.faq.direction.a':
    '두 언어가 같은 문자를 쓰면(영어, 스페인어, 포르투갈어, 이탈리아어, 프랑스어, 독일어, 인도네시아어, 베트남어 등) ' +
    '단어로 언어를 판단하기 때문에 짧은 문구나 이름에서는 흔들릴 수 있어요. 이런 조합에서는 화면 위쪽에 방향 선택이 하나 더 나타나요. ' +
    '“방향 · 자동”을 고정된 방향으로 바꾸면 방향이 고정돼요.',
  'index.contact.title': '문의하기',
  'index.contact.p':
    '질문, 제안, 환불 문의는 모두 <a href="mailto:winer632@qq.com">winer632@qq.com</a>으로 보내 주세요. 보통 영업일 기준 1~2일 안에 답장드려요. ' +
    '기기, iOS 버전, 사용하는 두 언어, 시간을 구입했는지 내 Key를 쓰는지 알려 주시면 훨씬 빨리 해결할 수 있어요. ' +
    '시간을 구입했다면 설정에 표시된 <strong>계정 ID</strong>도 함께 적어 주세요.',

  // privacy.html
  'privacy.doc.title': '개인정보 처리방침 · Duo Interpreter',
  'privacy.title': '개인정보 처리방침',
  'privacy.sub': 'Duo Interpreter · 최종 업데이트: 2026년 9월 24일',
  'privacy.translated':
    '이 방침은 번역본입니다. <a href="?lang=en">영문판</a>과 내용이 다를 경우 영문판이 우선합니다.',
  'privacy.short':
    '<strong>요약:</strong> 이 앱은 두 가지 방식으로 작동합니다. 기본 방식에서는 가입 없이 통역 시간을 구입합니다. ' +
    '음성은 번역을 위해 휴대폰에서 Alibaba Cloud Model Studio로 곧바로 전송되며 <strong>저희 서버를 절대 거치지 않습니다</strong>. ' +
    '저희 서버에는 무작위로 생성된 계정 번호, 구입한 시간, 사용한 시간만 보관됩니다. ' +
    '대신 본인의 Alibaba Cloud Key를 사용하면 저희는 아무것도 수집하지 않습니다. 분석, 광고, 추적은 전혀 없으며, 통역 기록은 휴대폰에만 남습니다.',
  'privacy.collect.title': '수집하는 정보',
  'privacy.collect.intro': '설정 → 결제 방법에서 무엇을 선택했는지에 따라 다릅니다.',
  'privacy.credit.title': '시간 구입(기본값, 가입 불필요)',
  'privacy.credit.intro':
    '구입한 시간을 기록하고 악용을 막기 위해, 앱은 저희 서버 <code>api.duo-interpreter.com</code>' +
    '(싱가포르의 Microsoft Azure에서 호스팅)과 통신합니다. 서버에는 다음 정보가 보관됩니다:',
  'privacy.credit.id':
    '<strong>무작위 계정 ID</strong>: 앱을 처음 사용할 때 앱이 생성하는 번호(UUID)입니다. 이름, 이메일, 전화번호, Apple 계정과는 아무 관련이 없습니다. ' +
    'iCloud 키체인에 보관되므로 앱을 다시 설치해도 잔액이 유지되고, 같은 Apple 계정을 쓰는 새 휴대폰으로도 이어집니다.',
  'privacy.credit.device':
    '<strong>기기 자격 증명</strong>: 기기마다 Apple App Attest 키의 식별자와 공개 키, 그리고 등록 시각과 마지막 사용 시각입니다. ' +
    '요청이 변조된 앱이 아니라 이 앱의 정품에서 온 것임을 증명하는 데 쓰입니다.',
  'privacy.credit.purchases':
    '<strong>구입 내역</strong>: Apple의 거래 ID, 상품(1시간, 5시간 또는 10시간), 구입 시각, 테스트(샌드박스) 구입 여부, 환불 여부.',
  'privacy.credit.usage':
    '<strong>사용 내역</strong>: 각 통역 세션의 시작 및 종료 시각, 모드(음성 번역 또는 자막만), 사용한 시간, ' +
    '요청한 임시 키의 수, 그리고 잔액의 모든 변동 내역.',
  'privacy.credit.trial':
    '<strong>5분 무료 체험</strong>은 기기당 한 번만 제공됩니다. 중복 수령을 막기 위해 앱은 일회용 Apple DeviceCheck 토큰을 서버에 전달하고, ' +
    '서버는 이 토큰으로 Apple이 저희를 대신해 이 기기에 대해 보관하는 1비트(“체험 사용함”)를 확인한 다음 설정해 달라고 Apple에 요청합니다. ' +
    '토큰은 한 번만 쓰이고 저장되지 않으며, Apple은 저희를 위해 그 1비트만 보관할 뿐 그것이 어느 기기인지 저희에게 알려 주지 않습니다.',
  'privacy.credit.never':
    '서버는 사용자의 음성, 자막, 번역, 이름, 이메일, 전화번호, 위치, 연락처, 결제 정보를 <strong>절대 받지 않습니다</strong>.',
  'privacy.key.title': '내 Alibaba Cloud Key 사용',
  'privacy.key.p': '이 방식에서는 앱이 저희 서버에 접속하지 않으며, <strong>저희는 아무것도 수집하지 않습니다</strong>.',
  'privacy.both.title': '어느 방식이든',
  'privacy.both.p':
    '앱에는 제3자 분석, 광고, 추적 기능이 전혀 없습니다. 저희는 분석이나 광고를 하지 않고, 다른 앱이나 웹사이트에 걸쳐 사용자를 추적하지 않으며, ' +
    '어떤 데이터도 판매하거나 공유하지 않습니다.',
  'privacy.logs.title': '서버 로그와 보관 기간',
  'privacy.logs.ip':
    'IP 주소는 요청 빈도 제한(악용 방지)에만 메모리에서 사용되며, 마지막 요청 후 1시간이 지나면 폐기됩니다. 로그에 기록되거나 저장되지 않습니다. ' +
    '서버 로그에는 이벤트만 기록됩니다. 예를 들면 “기기가 등록됨”(계정 ID 앞 8자만), “구입이 적립됨”(상품과 테스트 구입 여부), ' +
    '“환불이 적용됨”(거래 ID), 그리고 오류입니다. 서버 로그는 30일 후 자동으로 삭제됩니다.',
  'privacy.logs.ledger':
    '장부는 서버에서 매시간 스냅샷을 만들어 최근 48개를 보관하며, 암호화된 사본을 외부 장소에 30일 동안 보관합니다. ' +
    '계정, 구입, 사용 기록은 장부 대조와 Apple 환불 처리에 필요하므로 계정이 존재하는 동안 보관됩니다.',
  'privacy.speech.title': '음성이 전송되는 곳',
  'privacy.speech.intro':
    '두 방식 모두 마이크의 오디오는 <strong>휴대폰에서 Alibaba Cloud Model Studio로 실시간으로 곧바로 전송됩니다</strong>(Qwen LiveTranslate). ' +
    '저희 서버를 절대 거치지 않으므로 저희는 들을 수 없고 보관할 것도 없습니다:',
  'privacy.speech.credit':
    '시간을 구입한 경우 앱은 저희 Alibaba Cloud 계정으로 <code>dashscope-intl.aliyuncs.com</code>(싱가포르)에 연결합니다. ' +
    '저희 서버는 앱에 60초 후 만료되는 임시 키를 발급할 뿐이며, 오디오는 저희와 Alibaba Cloud 간의 계약에 따라 처리됩니다.',
  'privacy.speech.key':
    '본인의 Key를 사용하는 경우 앱은 설정에서 고른 사이트(<code>dashscope-intl.aliyuncs.com</code> 또는 <code>dashscope.aliyuncs.com</code>)에 ' +
    '사용자의 Key로 연결하며, 오디오는 <strong>사용자</strong>와 Alibaba Cloud 간의 계약에 따라 처리됩니다.',
  'privacy.speech.alibaba':
    'Alibaba Cloud가 오디오를 어떻게 처리하는지는 ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">Alibaba Cloud의 개인정보 처리방침</a>을 참고하시기 바랍니다.',
  'privacy.speech.hosts':
    '앱이 연결하는 곳은 Alibaba Cloud Model Studio, 저희 서버(시간을 구입하는 경우에만), Apple 서비스(앱 내 구입, App Attest, DeviceCheck)뿐입니다.',
  'privacy.speech.voice':
    '<strong>말하는 사람의 목소리로 번역 읽기</strong>(기본적으로 켜져 있으며 설정에서 끌 수 있음): Alibaba Cloud는 번역하는 것과 같은 오디오로 ' +
    '말하는 사람의 목소리를 실시간으로 흉내 내며, 그때그때 말하는 사람을 따라갑니다. 대화하는 두 사람 모두에게 해당합니다. ' +
    '앱과 저희는 성문(목소리 특징 정보)을 별도로 수집, 저장, 업로드하지 않습니다. 쓰이는 것은 번역을 위해 이미 전송된 바로 그 오디오입니다.',
  'privacy.device.title': '휴대폰에 남는 것',
  'privacy.transcripts.title': '통역 기록',
  'privacy.transcripts.p':
    '확정된 문장은 앱 전용 컨테이너 안에 하루 한 파일씩 기록됩니다. <strong>절대 업로드되지 않으며</strong> iCloud 백업에서도 제외됩니다. ' +
    '앱의 “기록”에서 읽기, 내보내기, 삭제를 할 수 있고, 앱을 삭제하면 함께 삭제됩니다.',
  'privacy.account.title': '계정 ID',
  'privacy.account.p':
    '앞에서 설명한 무작위 계정 ID는 iOS 키체인에 보관되며, iCloud 키체인이 켜져 있으면 같은 Apple 계정을 쓰는 기기 간에 동기화됩니다' +
    '(Apple이 종단 간 암호화). 앱을 삭제해도 지워지지 않으므로 다시 설치한 뒤에도 잔액이 그대로 남아 있습니다.',
  'privacy.apikey.title': 'API Key',
  'privacy.apikey.p':
    '직접 입력한 API Key는 iOS <strong>키체인</strong>에 보관되며, 이 기기에서만, 그리고 잠금이 해제된 동안에만 읽을 수 있도록 설정됩니다. ' +
    '절대 업로드되지 않으며 백업을 통해 다른 기기로 옮겨지지도 않습니다.',
  'privacy.mic.title': '마이크',
  'privacy.mic.p':
    '마이크는 “시작”을 누른 뒤에만 사용됩니다. 진행 중인 세션은 다른 앱으로 전환하거나 화면을 잠가도 계속 녹음하고, 번역하고, 통역 기록을 저장합니다. ' +
    '녹음을 끝내려면 “중지”를 누르세요. 전화 등 시스템 오디오 중단이 있으면 세션이 일시 정지되고, 시스템이 허용하면 다시 이어집니다. ' +
    '녹음 중에는 시스템의 주황색 마이크 표시등이 나타납니다.',
  'privacy.purchase.title': '구입',
  'privacy.purchase.p':
    '시간 구입과 “모든 언어”(본인의 Key를 사용하는 경우)는 모두 <strong>Apple의 앱 내 구입</strong>으로 이루어집니다. ' +
    '결제의 모든 과정은 Apple이 처리하며, 저희는 결제 수단, 이름, 청구 정보를 <strong>절대 받거나 보지 않습니다</strong>.',
  'privacy.purchase.credit':
    '시간 구입: 앱은 Apple에 계정 ID를 거래에 기록해 달라고 요청한 다음, Apple이 서명한 거래 정보를 저희 서버로 보내 검증하고 적립합니다. ' +
    '서버는 거래에 명시된 계정에만 시간을 적립합니다. 환불은 Apple이 처리하며, Apple이 저희 서버에 알리면 해당 시간이 회수됩니다.',
  'privacy.purchase.all': '“모든 언어”: 앱은 구입 여부를 시스템에 확인할 뿐이며, 저희 서버는 관여하지 않습니다.',
  'privacy.delete.title': '열람 및 삭제',
  'privacy.delete.p':
    '계정 ID는 앱의 설정 → 남은 시간에서 확인할 수 있으며, “복사” 버튼이 있습니다. 저희 서버가 보관한 정보를 열람하거나 삭제하려면 계정 ID를 ' +
    '<a href="mailto:winer632@qq.com">winer632@qq.com</a>으로 보내 주세요. 해당 계정의 서버 기록을 모두 삭제합니다' +
    '(스냅샷과 외부 사본은 각각의 보관 기간이 지나면 만료됩니다). 삭제 후에는 남은 시간을 복구할 수 없습니다. 구입에 대한 환불은 Apple에 요청하세요.',
  'privacy.children.title': '아동',
  'privacy.children.p':
    '이 앱은 비즈니스와 일상 통역을 위한 앱입니다. 아동을 대상으로 하지 않으며, 아동으로부터 어떤 정보도 고의로 수집하지 않습니다.',
  'privacy.changes.title': '변경 사항',
  'privacy.changes.p':
    '이 방침이 중대하게 변경되면 페이지 상단의 날짜를 업데이트합니다. 앱에는 가입 절차가 없어 저희가 사용자에게 연락할 방법이 없으므로, ' +
    '이 페이지가 공식 기록입니다.',
  'privacy.contact.title': '문의',
  'privacy.contact.p': '개인정보 관련 문의는 <a href="mailto:winer632@qq.com">winer632@qq.com</a>으로 보내 주세요.',
});
