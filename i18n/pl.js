/**
 * 网站文案 · Polski。英文写在三个页面的 HTML 里，是翻译的底本；键和页面上的 data-i18n 一一对应。
 * 提到 App 里的按钮和菜单时，用 public/i18n/pl.js 里的原话，和用户在 App 里看到的一致。
 */
siteI18n('pl', {
  'nav.support': '← Pomoc',
  'nav.setup': 'Jak uzyskać klucz API',
  'nav.privacy': 'Polityka prywatności',

  // setup.html
  'setup.doc.title': 'Jak uzyskać klucz API Qwen · Duo Interpreter',
  'setup.title': 'Jak uzyskać klucz API Qwen',
  'setup.sub': 'Około dziesięciu minut. Zrób to w przeglądarce na komputerze; tylko ostatni krok wykonasz na telefonie.',
  'setup.intro':
    'Aplikacja <strong>nie zawiera żadnego pakietu tłumaczeń</strong>. Łączy się z Alibaba Cloud Model Studio przez twoje własne konto, ' +
    'a Alibaba Cloud rozlicza cię za faktyczne użycie. Twoja mowa nigdy nie przechodzi przez nasze serwery.',
  'setup.remember':
    '<strong>Dwie rzeczy, o których trzeba pamiętać</strong> — niemal każdy problem wynika z jednej z nich. Klucz musi zostać ' +
    'utworzony w regionie <strong>Singapore</strong> (Singapur); klucze z innych regionów tu nie zadziałają. Poza tym klucz jest ' +
    '<strong>wyświetlany w całości tylko raz</strong> — po zamknięciu tego okna nie da się go już odczytać.',
  'setup.s1.title': 'Załóż konto Alibaba Cloud',
  'setup.s1.signup':
    'Zarejestruj się na <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Wystarczy adres e-mail — <strong>numer telefonu z Chin kontynentalnych nie jest potrzebny</strong>.',
  'setup.s1.sso': 'Możesz też zalogować się kontem Google lub GitHub i pominąć formularz.',
  'setup.s1.card':
    'Zanim aktywujesz usługi, musisz dodać kartę kredytową lub PayPal. Samo dodanie nic nie kosztuje; płacisz za faktyczne użycie.',
  'setup.s1.alt': 'Strona logowania Alibaba Cloud',
  'setup.s2.title': 'Przełącz region na Singapore',
  'setup.s2.p':
    'Otwórz konsolę Model Studio pod adresem <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'i sprawdź, czy <strong>w prawym górnym rogu widnieje Singapore</strong>. Link już tam prowadzi, ale po zalogowaniu ' +
    'czasem wracasz do regionu domyślnego, więc warto zerknąć.',
  'setup.s2.alt': 'Konsola Model Studio z regionem ustawionym na Singapore',
  'setup.s2.caption':
    'Region jest w prawym górnym rogu. Przycisk <strong>API-KEY</strong> w lewym dolnym rogu to następny krok — nie ma go w głównej nawigacji.',
  'setup.s3.title': 'Aktywuj Model Studio',
  'setup.s3.p':
    'Przy pierwszej wizycie pojawi się prośba o aktywację usługi: zaakceptuj warunki i potwierdź. Jeśli konto jest już aktywne, ' +
    'nie zobaczysz tego ekranu — przejdź od razu do następnego kroku.',
  'setup.s4.title': 'Otwórz stronę API Key',
  'setup.s4.p':
    'Kliknij przycisk <strong>API-KEY</strong> w <strong>lewym dolnym rogu</strong> konsoli. To osobny, zaokrąglony przycisk, ' +
    'a nie pozycja w głównej nawigacji, więc za pierwszym razem łatwo go przeoczyć.',
  'setup.s4.alt': 'Strona API Key z przyciskiem Create API Key',
  'setup.s4.caption': 'Gdy jesteś już na tej stronie, kliknij <strong>Create API Key</strong> po prawej.',
  'setup.s5.title': 'Utwórz klucz',
  'setup.s5.p':
    'Kliknij <strong>Create API Key</strong>. Wybierz domyślną przestrzeń roboczą, ustaw uprawnienia na <strong>All</strong>, ' +
    'opcjonalnie zostaw pusty opis i potwierdź.',
  'setup.s5.alt': 'Okno Create API Key',
  'setup.s6.title': 'Od razu skopiuj cały klucz',
  'setup.s6.copy':
    'Klucz zaczyna się od <code>sk-</code> i jest długi — <strong>skopiuj go w całości</strong>. Klucz bez kilku ostatnich znaków ' +
    'zawodzi dokładnie tak samo jak błędny. Użyj przycisku kopiowania w oknie.',
  'setup.s6.download':
    'W oknie jest też przycisk <strong>Download</strong>, który zapisuje klucz do pliku — to bezpieczniejsze niż poleganie wyłącznie na schowku.',
  'setup.s6.note':
    '<strong>Po zamknięciu tego okna pełnego klucza już nie zobaczysz.</strong> Jeśli go zgubisz, po prostu usuń ten klucz ' +
    'i utwórz nowy — nic poza tym się nie zmieni.',
  'setup.s6.alt': 'Okno, które pokazuje klucz tylko raz, z przyciskami Copy i Download',
  'setup.s6.caption': 'Klucz i dedykowane domeny są na tym zrzucie ekranu zakryte.',
  'setup.s7.title': 'Wklej klucz w aplikacji i stuknij „Testuj”',
  'setup.s7.p':
    'Wróć do telefonu: <strong>Ustawienia → Sposób płatności</strong>, wybierz „Użyj własnego klucza Alibaba Cloud”, a pojawi się ' +
    'sekcja <strong>Klucz API Qwen</strong>. Zostaw ustawienie <strong>Międzynarodowy · Singapur</strong>, wklej klucz, ' +
    'stuknij <strong>Zachowaj</strong>, a potem <strong>Testuj</strong>. Zielony komunikat „Połączono — klucz działa” oznacza, że wszystko gotowe.',
  'setup.s7.start':
    'Na koniec zamknij ustawienia, wybierz języki w polach „Mówię” i „Rozmówca mówi” i zaczynaj. Chiński ⇄ angielski jest za darmo; ' +
    'resztę odblokowuje jeden zakup „Wszystkie języki” w ustawieniach.',
  'setup.s7.alt': 'Ustawienia aplikacji z zachowanym kluczem i udanym testem',
  'setup.s7.caption': 'Zielony wiersz oznacza, że wszystko działa.',
  'setup.help.title': 'Jeśli nie da się połączyć',
  'setup.help.badKey':
    '<strong>„Nieprawidłowy klucz API”</strong> — w dziewięciu przypadkach na dziesięć to zły region. Sprawdź, czy w prawym górnym ' +
    'rogu konsoli widnieje Singapore; jeśli nie, przełącz region i <strong>utwórz nowy klucz</strong>, bo klucza nie da się przenieść ' +
    'między regionami. Upewnij się też, że przy wklejaniu nic nie ucięło się na końcu.',
  'setup.help.forbidden':
    '<strong>„Ten klucz nie może wywołać modelu”</strong> — na koncie nie aktywowano jeszcze Model Studio albo brak na nim dostępnych środków. ' +
    'Sprawdź to w konsoli.',
  'setup.help.timeout':
    '<strong>„Przekroczono limit czasu połączenia”</strong> — telefon nie może połączyć się z <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Spróbuj innej sieci, na przykład danych komórkowych zamiast firmowego Wi-Fi.',
  'setup.help.noKey':
    '<strong>Chcesz najpierw wypróbować albo nie możesz zdobyć klucza?</strong> Klucz nie jest potrzebny: ' +
    '<strong>Ustawienia → Sposób płatności → Kup czas (bez rejestracji)</strong>. Nowe urządzenie dostaje 5 darmowych minut — ' +
    'stuknij „Start”, aby spróbować; potem kupuj czas w aplikacji, a wszystkie języki będą działać.',
  'setup.help.contact':
    'Nadal nie działa? Napisz na <a href="mailto:winer632@qq.com">winer632@qq.com</a>, podając urządzenie, wersję iOS ' +
    'i dokładny komunikat z przycisku „Testuj” — to bardzo przyspieszy sprawę. <strong>Nie wysyłaj nam swojego klucza.</strong>',

  // index.html
  'index.doc.title': 'Pomoc · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Pomoc',
  'index.sub':
    'Dwukierunkowe tłumaczenie do rozmów twarzą w twarz. Napisy i głos na bieżąco, a kierunek tłumaczenia rozpoznawany automatycznie.',
  'index.trial.title': 'Wypróbuj przez pięć minut za darmo',
  'index.trial.p':
    'Bez rejestracji i bez klucza: gdy pierwszy raz otworzysz aplikację na nowym urządzeniu, dostaniesz ' +
    '<strong>pięć darmowych minut</strong> — pozostały czas widać u góry. Wybierz języki w polach „Mówię” i „Rozmówca mówi” ' +
    'nad napisami, stuknij „Start” i po prostu mów — to prawdziwe tłumaczenie, z napisami i głosem na bieżąco. ' +
    'Każde urządzenie dostaje darmowe minuty tylko raz; potem kup czas w aplikacji albo użyj własnego klucza Alibaba Cloud.',
  'index.pay.title': 'Korzystanie na co dzień',
  'index.pay.intro': 'Są dwa sposoby płatności — wybierasz je w sekcji <strong>Ustawienia → Sposób płatności</strong>:',
  'index.pay.credit':
    '<strong>Kupowanie czasu tłumaczenia w aplikacji</strong> (domyślnie) — bez zakładania jakiegokolwiek konta: otwierasz i działasz, ' +
    'a na nowym urządzeniu masz pięć darmowych minut. Pakiety na 1, 5 i 10 godzin obejmują wszystkie języki. ' +
    'Z tłumaczeniem głosowym minuta kosztuje minutę; same napisy — jedną trzecią.',
  'index.pay.key':
    '<strong>Własny klucz Alibaba Cloud</strong> — Alibaba Cloud rozlicza cię bezpośrednio za faktyczne użycie. ' +
    'Chiński ⇄ angielski jest wtedy za darmo; wszystko inne odblokowuje jeden zakup „Wszystkie języki”, na zawsze, ' +
    'łącznie z językami dodanymi w przyszłości. <a href="./setup.html">Instrukcja krok po kroku: jak uzyskać klucz API →</a>',
  'index.langs.title': 'Języki',
  'index.langs.intro':
    'Wybierasz je w dwóch kolumnach nad napisami: „Mówię” po lewej, „Rozmówca mówi” po prawej. Między tymi 24 językami ' +
    'można tłumaczyć w obie strony — z wyjątkiem kilku par wymienionych niżej — a kierunek rozpoznawany jest automatycznie:',
  'index.langs.list':
    'Chiński, angielski, japoński, koreański, niemiecki, francuski, hiszpański, portugalski, włoski, rosyjski, hindi, indonezyjski, ' +
    'wietnamski, arabski, tajski, turecki, filipiński, polski, urdu, hebrajski, perski, malajski, niderlandzki, bengalski',
  'index.langs.bangla':
    '<strong>Bengalski ma tylko napisy</strong>: to, co mówią inni, pojawia się po bengalsku jako tekst, bez głosu; ' +
    'gdy ktoś mówi po bengalsku, tłumaczenie nadal jest czytane na głos.',
  'index.langs.unpaired':
    'Kilka par pominięto: indonezyjski z malajskim i hindi z urdu (ich użytkownicy i tak się rozumieją) oraz arabski, urdu ' +
    'i perski między sobą (ten sam alfabet; aplikacja nie potrafi jeszcze rozpoznać, kto mówi).',
  'index.langs.cantonese': '<strong>Kantoński ⇄ mandaryński</strong> — w jedną stronę z głosem, w drugą tylko napisy.',
  'index.faq.title': 'Częste pytania',
  'index.faq.sound.q': 'Nie ma dźwięku',
  'index.faq.sound.a':
    'Sprawdź <strong>przełącznik Dzwonek/Cisza</strong> nad przyciskami głośności na lewym boku — widoczny pomarańczowy kolor ' +
    'oznacza wyciszenie. Następnie upewnij się, że wybór wyjścia głosu u góry nie jest ustawiony na „🔇 Bez głosu” i że nie ' +
    'tłumaczysz na bengalski ani kantoński, które mają tylko napisy. Jeśli nadal jest cicho, zwiększ głośność: słuchawka ' +
    'i głośnik mają osobne poziomy głośności.',
  'index.faq.earpiece.q': 'Słuchanie dyskretnie zamiast na głos',
  'index.faq.earpiece.a':
    'Przełącz wybór wyjścia głosu u góry na <strong>📞 Słuchawka</strong>, a tłumaczenie popłynie ze słuchawki — przyłóż telefon ' +
    'do ucha jak podczas rozmowy. Możesz przełączać w dowolnej chwili, także w trakcie sesji.',
  'index.faq.mic.q': '„System odłączył mikrofon”',
  'index.faq.mic.a':
    'Zwykle mikrofon przejęła inna aplikacja — połączenie, wiadomość głosowa, dyktafon — albo zestaw słuchawkowy Bluetooth ' +
    'zmienił tryb. Aby to naprawić, zatrzymaj i uruchom ponownie. Jeśli z Bluetooth to się powtarza, spróbuj wbudowanego ' +
    'mikrofonu albo przewodowego zestawu słuchawkowego.',
  'index.faq.echo.q': 'Sprzężenie lub echo przy głośniku',
  'index.faq.echo.a':
    'W jednym pomieszczeniu mikrofon ponownie wyłapuje to, co płynie z głośnika. W sekcji ' +
    '<strong>Ustawienia → Obsługa echa</strong> wybierz „Odtwarzanie ścisza mikrofon” lub „Odtwarzanie wycisza mikrofon” ' +
    'albo po prostu zmniejsz głośność. Przy słuchawce ten problem w ogóle nie występuje.',
  'index.faq.stuck.q': 'Napisy przestały się aktualizować',
  'index.faq.stuck.a':
    'Pasek u góry pokazuje stan sesji. Najczęstsze przyczyny to zerwane połączenie sieciowe albo wyciszenie mikrofonu przez ' +
    'system — o tym aplikacja informuje wprost. Zwykle pomaga zatrzymanie i ponowne uruchomienie. Przy kupionym czasie sprawdź ' +
    'pozostały czas u góry; przy własnym kluczu problem z limitem zgłoszony przez Alibaba Cloud jest wyświetlany bez zmian.',
  'index.faq.phone.q': 'Przejście na nowy telefon',
  'index.faq.phone.a':
    'Kupiony czas należy do twojego konta — losowego identyfikatora, który aplikacja tworzy i przechowuje w pęku kluczy iCloud: ' +
    'zaloguj się na nowym telefonie na to samo konto Apple z włączonym pękiem kluczy iCloud, a saldo będzie na miejscu. ' +
    '„Wszystkie języki”, kupione przy korzystaniu z własnego klucza, odzyskasz bezpłatnie przez ' +
    '<strong>Ustawienia → Wszystkie języki → Przywróć zakupy</strong>.',
  'index.faq.cantonese.q': 'Dlaczego kantoński ⇄ mandaryński ma głos tylko w jedną stronę',
  'index.faq.cantonese.a':
    'Model potrafi <strong>rozumieć</strong> kantoński i w nim <strong>pisać</strong>, ale nie <strong>mówić</strong> — w tabeli ' +
    'języków dostawcy kantoński ma tylko napisy. Dlatego gdy ktoś mówi po kantońsku, słychać tłumaczenie po mandaryńsku; ' +
    'gdy mówi po mandaryńsku, tłumaczenie na kantoński pojawia się tylko w napisach. Obie strony piszą chińskimi znakami, ' +
    'więc kierunku nie da się wykryć automatycznie — ustaw go przełącznikiem kierunku.',
  'index.faq.direction.q': 'Kierunek czasem się odwraca, np. między hiszpańskim a portugalskim',
  'index.faq.direction.a':
    'Gdy oba języki mają ten sam alfabet (angielski, hiszpański, portugalski, włoski, francuski, niemiecki, indonezyjski, ' +
    'wietnamski itd.), rozpoznawanie opiera się na słownictwie i przy krótkich zwrotach lub nazwach własnych może się wahać. ' +
    'W takich parach u góry pojawia się dodatkowy przełącznik kierunku — zmień „Kierunek · automatycznie” na stały kierunek, ' +
    'aby go zablokować.',
  'index.contact.title': 'Kontakt',
  'index.contact.p':
    'Pytania, sugestie i sprawy zwrotów kieruj na <a href="mailto:winer632@qq.com">winer632@qq.com</a> — zwykle odpowiadamy ' +
    'w ciągu jednego–dwóch dni roboczych. Podaj urządzenie, wersję iOS, oba języki oraz to, czy kupujesz czas, czy używasz ' +
    'własnego klucza — to znacznie przyspieszy sprawę. W sprawach kupionego czasu dołącz <strong>ID konta</strong> widoczne w ustawieniach.',

  // privacy.html
  'privacy.doc.title': 'Polityka prywatności · Duo Interpreter',
  'privacy.title': 'Polityka prywatności',
  'privacy.sub': 'Duo Interpreter · Ostatnia aktualizacja: 24 września 2026 r.',
  'privacy.translated':
    'Ta polityka jest tłumaczeniem. Jeśli różni się od <a href="?lang=en">wersji angielskiej</a>, obowiązuje wersja angielska.',
  'privacy.short':
    '<strong>W skrócie:</strong> aplikacja działa na dwa sposoby. Domyślnie kupujesz czas tłumaczenia, bez rejestracji: ' +
    'twoja mowa trafia prosto z telefonu do Alibaba Cloud Model Studio w celu przetłumaczenia i ' +
    '<strong>nigdy nie przechodzi przez nasz serwer</strong>; nasz serwer przechowuje tylko losowo wygenerowany numer konta ' +
    'oraz informację, ile czasu kupiono i ile go zużyto. Jeśli zamiast tego używasz własnego klucza Alibaba Cloud, ' +
    'nie zbieramy niczego. Nie ma żadnej analityki, reklam ani śledzenia, a transkrypcje zostają na twoim telefonie.',
  'privacy.collect.title': 'Co zbieramy',
  'privacy.collect.intro': 'Zależy to od opcji wybranej w sekcji „Ustawienia” → „Sposób płatności”.',
  'privacy.credit.title': 'Kupowanie czasu (domyślnie, bez rejestracji)',
  'privacy.credit.intro':
    'Aby pamiętać, ile czasu kupiono, i zapobiegać nadużyciom, aplikacja łączy się z naszym serwerem ' +
    '<code>api.duo-interpreter.com</code> (hostowanym w Microsoft Azure w Singapurze). Serwer przechowuje:',
  'privacy.credit.id':
    '<strong>Losowe ID konta</strong>: numer (UUID), który aplikacja generuje przy pierwszym użyciu. Nie ma on nic wspólnego ' +
    'z twoim imieniem i nazwiskiem, adresem e-mail, numerem telefonu ani kontem Apple. Jest przechowywany w twoim pęku kluczy ' +
    'iCloud, więc saldo przetrwa ponowną instalację i przejdzie na nowe telefony z tym samym kontem Apple.',
  'privacy.credit.device':
    '<strong>Poświadczenia urządzenia</strong>: dla każdego urządzenia identyfikator klucza Apple App Attest i jego klucz publiczny ' +
    'oraz czas rejestracji i ostatniego użycia. Potwierdzają one, że żądania pochodzą z oryginalnej kopii tej aplikacji, ' +
    'a nie ze zmodyfikowanej.',
  'privacy.credit.purchases':
    '<strong>Zakupy</strong>: identyfikator transakcji Apple, produkt (1, 5 lub 10 godzin), czas zakupu, informacja, ' +
    'czy był to zakup testowy (sandbox) oraz czy zwrócono za niego pieniądze.',
  'privacy.credit.usage':
    '<strong>Użycie</strong>: kiedy każda sesja tłumaczenia się zaczęła i zakończyła, jej tryb (tłumaczenie głosowe lub tylko ' +
    'napisy), ile czasu zużyła, ile kluczy tymczasowych pobrała, a także każda zmiana salda.',
  'privacy.credit.trial':
    '<strong>5 darmowych minut</strong> przysługuje raz na urządzenie. Aby nie można ich było odbierać wielokrotnie, aplikacja ' +
    'przekazuje serwerowi jednorazowy token Apple DeviceCheck; serwer używa go, aby poprosić Apple o sprawdzenie, a następnie ' +
    'ustawienie pojedynczego bitu, który Apple przechowuje dla tego urządzenia w naszym imieniu („darmowe minuty wykorzystane”). ' +
    'Token jest używany raz i nie jest przechowywany, a Apple przechowuje dla nas tylko ten bit, nie ujawniając nam, ' +
    'o które urządzenie chodzi.',
  'privacy.credit.never':
    'Serwer <strong>nigdy nie otrzymuje</strong> twojej mowy, napisów ani tłumaczeń, twojego imienia i nazwiska, adresu e-mail, ' +
    'numeru telefonu, lokalizacji ani kontaktów, ani twoich danych płatniczych.',
  'privacy.key.title': 'Korzystanie z własnego klucza Alibaba Cloud',
  'privacy.key.p': 'W tym trybie aplikacja nie łączy się z naszym serwerem i <strong>nie zbieramy niczego</strong>.',
  'privacy.both.title': 'W obu przypadkach',
  'privacy.both.p':
    'Aplikacja nie zawiera zewnętrznych narzędzi analitycznych, reklam ani mechanizmów śledzenia. Nie prowadzimy analityki ' +
    'ani reklam, nie śledzimy cię w innych aplikacjach i witrynach oraz nie sprzedajemy ani nie udostępniamy żadnych danych.',
  'privacy.logs.title': 'Logi serwera i okres przechowywania',
  'privacy.logs.ip':
    'Twój adres IP jest używany wyłącznie w pamięci do ograniczania liczby żądań (by zapobiegać nadużyciom) i jest usuwany ' +
    'godzinę po twoim ostatnim żądaniu; nie jest zapisywany w logach ani przechowywany. Logi serwera rejestrują tylko zdarzenia, ' +
    'takie jak „zarejestrowano urządzenie” (tylko z pierwszymi 8 znakami ID konta), „zaksięgowano zakup” (produkt i informacja, ' +
    'czy był to zakup testowy), „uwzględniono zwrot” (identyfikator transakcji) oraz błędy. Logi serwera są automatycznie ' +
    'usuwane po 30 dniach.',
  'privacy.logs.ledger':
    'Co godzinę na serwerze tworzona jest migawka rejestru rozliczeń; przechowywanych jest 48 najnowszych, a zaszyfrowana kopia ' +
    'jest przechowywana w innej lokalizacji przez 30 dni. Dane konta, zakupów i użycia są przechowywane, dopóki konto istnieje, ' +
    'ponieważ są potrzebne do uzgadniania rozliczeń i obsługi zwrotów przez Apple.',
  'privacy.speech.title': 'Dokąd trafia twoja mowa',
  'privacy.speech.intro':
    'W obu trybach dźwięk z mikrofonu trafia <strong>na żywo i bezpośrednio z telefonu do Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Nigdy nie przechodzi przez nasz serwer; nie możemy go usłyszeć i nie mamy czego przechowywać:',
  'privacy.speech.credit':
    'Przy kupowaniu czasu aplikacja łączy się z <code>dashscope-intl.aliyuncs.com</code> (Singapur) przez nasze konto ' +
    'Alibaba Cloud: nasz serwer wydaje aplikacji jedynie klucz tymczasowy, który wygasa po 60 sekundach, a dźwięk jest ' +
    'przetwarzany na podstawie naszej umowy z Alibaba Cloud.',
  'privacy.speech.key':
    'Z własnym kluczem aplikacja łączy się z serwisem wybranym w ustawieniach (<code>dashscope-intl.aliyuncs.com</code> ' +
    'lub <code>dashscope.aliyuncs.com</code>) przy użyciu twojego klucza, a dźwięk jest przetwarzany na podstawie ' +
    '<strong>twojej</strong> umowy z Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Informacje o tym, co Alibaba Cloud robi z dźwiękiem, znajdziesz w ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">jej polityce prywatności</a>.',
  'privacy.speech.hosts':
    'Aplikacja łączy się wyłącznie z Alibaba Cloud Model Studio, naszym serwerem (tylko przy kupowaniu czasu) i usługami Apple ' +
    '(zakupy w aplikacji, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Tłumaczenie głosem osoby mówiącej</strong> (domyślnie włączone, można je wyłączyć w ustawieniach): Alibaba Cloud ' +
    'na żywo naśladuje głos osoby mówiącej na podstawie tego samego dźwięku, który tłumaczy, podążając za tym, kto akurat mówi — ' +
    'dotyczy to obu rozmówców. Ani aplikacja, ani my nie zbieramy, nie przechowujemy ani nie przesyłamy osobno żadnego odcisku ' +
    'głosu; to ten sam dźwięk, który i tak jest wysyłany do tłumaczenia.',
  'privacy.device.title': 'Co zostaje na twoim telefonie',
  'privacy.transcripts.title': 'Transkrypcje',
  'privacy.transcripts.p':
    'Gotowe wiersze są zapisywane w plikach, po jednym na dzień, w kontenerze samej aplikacji. <strong>Nigdy nie są wysyłane</strong> ' +
    'i są wyłączone z kopii zapasowej iCloud. Możesz je przeglądać, eksportować lub usuwać w sekcji „Historia” w aplikacji; ' +
    'usunięcie aplikacji usuwa również je.',
  'privacy.account.title': 'ID konta',
  'privacy.account.p':
    'Opisane wyżej losowe ID konta jest przechowywane w pęku kluczy iOS, a jeśli pęk kluczy iCloud jest włączony, synchronizuje się ' +
    'między twoimi urządzeniami z tym samym kontem Apple (z szyfrowaniem end-to-end zapewnianym przez Apple). Usunięcie aplikacji ' +
    'go nie usuwa, więc po ponownej instalacji saldo nadal jest na miejscu.',
  'privacy.apikey.title': 'Klucze API',
  'privacy.apikey.p':
    'Klucze API, które wpisujesz samodzielnie, są przechowywane w <strong>pęku kluczy</strong> iOS z oznaczeniem, że można je ' +
    'odczytać tylko na tym urządzeniu i tylko wtedy, gdy jest odblokowane. Nigdy nie są wysyłane i nie przenoszą się na inne ' +
    'urządzenie przez kopię zapasową.',
  'privacy.mic.title': 'Mikrofon',
  'privacy.mic.p':
    'Mikrofon jest używany dopiero po stuknięciu „Start”. Aktywna sesja nadal nagrywa, tłumaczy i zapisuje transkrypcje, gdy ' +
    'przełączysz się na inną aplikację lub zablokujesz ekran. Stuknij „Stop”, aby zakończyć nagrywanie. Systemowe przerwy ' +
    'w dźwięku, takie jak połączenia, wstrzymują sesję; wznawia się ona, gdy system na to pozwoli. Pomarańczowy systemowy ' +
    'wskaźnik mikrofonu pokazuje, kiedy trwa nagrywanie.',
  'privacy.purchase.title': 'Zakupy',
  'privacy.purchase.p':
    'Kupowanie czasu i „Wszystkie języki” (przy własnym kluczu) odbywają się przez <strong>zakupy w aplikacji Apple</strong>. ' +
    'Płatność w całości obsługuje Apple; <strong>nigdy nie otrzymujemy ani nie widzimy</strong> twojej metody płatności, ' +
    'imienia i nazwiska ani danych rozliczeniowych.',
  'privacy.purchase.credit':
    'Kupowanie czasu: aplikacja prosi Apple o zapisanie twojego ID konta w transakcji, a następnie wysyła podpisaną przez Apple ' +
    'transakcję do naszego serwera w celu weryfikacji i zaksięgowania; serwer dolicza czas tylko do konta wskazanego w transakcji. ' +
    'Zwroty obsługuje Apple, które powiadamia nasz serwer, aby ten odebrał odpowiedni czas.',
  'privacy.purchase.all':
    '„Wszystkie języki”: aplikacja jedynie pyta system, czy ten zakup został dokonany; nasz serwer nie bierze w tym udziału.',
  'privacy.delete.title': 'Dostęp i usuwanie',
  'privacy.delete.p':
    'Twoje ID konta znajdziesz w aplikacji w sekcji „Ustawienia” → „Pozostały czas”, obok przycisku „Kopiuj”. Aby zobaczyć ' +
    'lub usunąć dane, które nasz serwer o tobie przechowuje, wyślij je na <a href="mailto:winer632@qq.com">winer632@qq.com</a>, ' +
    'a usuniemy wszystkie rekordy tego konta na serwerze (migawki i kopia w innej lokalizacji wygasają po upływie swoich okresów ' +
    'przechowywania). Po usunięciu pozostałego czasu nie da się przywrócić. O zwrot pieniędzy za zakupy należy prosić Apple.',
  'privacy.children.title': 'Dzieci',
  'privacy.children.p':
    'Ta aplikacja jest przeznaczona do tłumaczenia w sprawach służbowych i codziennych. Nie jest skierowana do dzieci ' +
    'i świadomie nie zbiera od nich żadnych danych.',
  'privacy.changes.title': 'Zmiany',
  'privacy.changes.p':
    'Jeśli ta polityka istotnie się zmieni, zaktualizujemy datę na górze strony. Aplikacja nie wymaga rejestracji i nie mamy ' +
    'jak się z tobą skontaktować, dlatego źródłem informacji jest ta strona.',
  'privacy.contact.title': 'Kontakt',
  'privacy.contact.p': 'Wszelkie pytania dotyczące prywatności: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
