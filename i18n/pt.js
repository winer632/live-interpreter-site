/**
 * 网站文案 · Português (Brasil)，和 App 的 public/i18n/pt.js 同一变体。从英文（三个页面的 HTML）翻译，
 * 键和页面上的 data-i18n 一一对应；链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 pt.js 里的原话。
 */
siteI18n('pt', {
  'nav.support': '← Suporte',
  'nav.setup': 'Como obter uma API Key',
  'nav.privacy': 'Política de privacidade',

  // setup.html
  'setup.doc.title': 'Como obter uma API Key do Qwen · Duo Interpreter',
  'setup.title': 'Como obter uma API Key do Qwen',
  'setup.sub': 'Cerca de dez minutos. Faça pelo navegador de um computador; só o último passo é no celular.',
  'setup.intro':
    'O app <strong>não inclui crédito de tradução</strong>. Ele se conecta ao Alibaba Cloud Model Studio com a sua própria conta, ' +
    'e o Alibaba Cloud cobra você pelo que usar. Sua fala nunca passa pelos nossos servidores.',
  'setup.remember':
    '<strong>Duas coisas para ter em mente</strong> — quase todas as falhas vêm de uma delas. ' +
    'A chave precisa ser criada na região <strong>Singapura (Singapore)</strong>; chaves de outras regiões não funcionam aqui. ' +
    'E a chave <strong>aparece completa uma única vez</strong> — depois que você fecha essa janela, não dá mais para vê-la.',
  'setup.s1.title': 'Crie uma conta no Alibaba Cloud',
  'setup.s1.signup':
    'Cadastre-se em <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Basta um endereço de e-mail — <strong>não é preciso ter número de telefone da China continental</strong>.',
  'setup.s1.sso': 'Você também pode entrar com uma conta do Google ou do GitHub e pular o formulário.',
  'setup.s1.card':
    'Antes de ativar os serviços, você vai precisar adicionar um cartão de crédito ou PayPal. ' +
    'Adicionar não gera nenhuma cobrança; você paga só pelo uso real.',
  'setup.s1.alt': 'Página de login do Alibaba Cloud',
  'setup.s2.title': 'Mude a região para Singapura',
  'setup.s2.p':
    'Abra o console do Model Studio em <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'e confira se a região no <strong>canto superior direito mostra Singapore</strong>. O link já aponta para lá, ' +
    'mas às vezes o login leva de volta a uma região padrão, então vale conferir.',
  'setup.s2.alt': 'Console do Model Studio com a região em Singapura',
  'setup.s2.caption':
    'A região fica no canto superior direito. O botão <strong>API-KEY</strong>, no canto inferior esquerdo, é o próximo passo — ' +
    'ele não fica na navegação principal.',
  'setup.s3.title': 'Ative o Model Studio',
  'setup.s3.p':
    'No primeiro acesso, você precisa ativar o serviço: aceite os termos e confirme. ' +
    'Se a sua conta já estiver ativada, essa tela não aparece — vá direto para o próximo passo.',
  'setup.s4.title': 'Abra a página de API Key',
  'setup.s4.p':
    'Clique no botão <strong>API-KEY</strong> no <strong>canto inferior esquerdo</strong> do console. ' +
    'É um botão separado, em formato de pílula, e não um item da navegação principal, por isso é fácil não vê-lo na primeira vez.',
  'setup.s4.alt': 'A página de API Key com o botão Create API Key',
  'setup.s4.caption': 'Nesta página, clique em <strong>Create API Key</strong>, à direita.',
  'setup.s5.title': 'Crie a chave',
  'setup.s5.p':
    'Clique em <strong>Create API Key</strong>. Escolha o workspace padrão, defina as permissões como <strong>All</strong>, ' +
    'deixe a descrição em branco se quiser e confirme.',
  'setup.s5.alt': 'A janela Create API Key',
  'setup.s6.title': 'Copie a chave inteira na hora',
  'setup.s6.copy':
    'A chave começa com <code>sk-</code> e é longa — <strong>copie tudo</strong>. ' +
    'Uma chave sem os últimos caracteres falha exatamente como uma chave errada. Use o botão de copiar da janela.',
  'setup.s6.download':
    'A janela também oferece <strong>Download</strong>, que salva a chave em um arquivo — ' +
    'mais seguro do que depender só da área de transferência.',
  'setup.s6.note':
    '<strong>Depois que esta janela fecha, a chave completa não aparece mais.</strong> ' +
    'Se você perdê-la, é só apagar essa chave e criar outra — nada mais é afetado.',
  'setup.s6.alt': 'A janela que mostra a chave uma única vez, com Copy e Download',
  'setup.s6.caption': 'A chave e os domínios dedicados estão ocultos nesta captura de tela.',
  'setup.s7.title': 'Cole no app e toque em “Testar”',
  'setup.s7.p':
    'De volta ao celular: em <strong>Ajustes → Forma de pagamento</strong>, escolha “Usar minha própria chave do Alibaba Cloud” ' +
    'e a seção <strong>API Key do Qwen</strong> aparece. Deixe o site em <strong>Internacional · Singapura</strong>, ' +
    'cole a chave, toque em <strong>Salvar</strong> e depois em <strong>Testar</strong>. ' +
    'Um “Conectado — a chave funciona” em verde significa que está tudo pronto.',
  'setup.s7.start':
    'Por fim, feche os ajustes, escolha os idiomas em “Eu falo” e “A outra pessoa” e comece. ' +
    'Chinês ⇄ inglês é grátis; uma única compra de “Todos os idiomas” nos ajustes desbloqueia o resto.',
  'setup.s7.alt': 'Os ajustes do app com a chave salva e o teste aprovado',
  'setup.s7.caption': 'A linha verde é o sinal de que deu certo.',
  'setup.help.title': 'Se não conectar',
  'setup.help.badKey':
    '<strong>“API Key inválida”</strong> — em nove de cada dez casos, a região está errada. ' +
    'Confira se o console mostra Singapore no canto superior direito; se não, mude e <strong>crie uma chave nova</strong>, ' +
    'porque uma chave não pode ser transferida entre regiões. Confira também se nada ficou de fora no final ao colar.',
  'setup.help.forbidden':
    '<strong>“Esta chave não pode chamar o modelo”</strong> — a conta ainda não ativou o Model Studio ou não tem saldo disponível. ' +
    'Confira no console.',
  'setup.help.timeout':
    '<strong>“A conexão expirou”</strong> — o celular não consegue acessar <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Tente outra rede, por exemplo dados móveis em vez do Wi-Fi do escritório.',
  'setup.help.noKey':
    '<strong>Quer experimentar antes ou não consegue uma chave?</strong> Não precisa de chave: ' +
    '<strong>Ajustes → Forma de pagamento → Comprar tempo (sem criar conta)</strong>. ' +
    'Um dispositivo novo ganha 5 minutos grátis — toque em “Iniciar” para experimentar; depois, compre tempo no app e todos os idiomas funcionam.',
  'setup.help.contact':
    'Ainda não deu certo? Escreva para <a href="mailto:winer632@qq.com">winer632@qq.com</a> informando o aparelho, ' +
    'a versão do iOS e a mensagem exata que o botão “Testar” mostrou — isso agiliza muito. ' +
    '<strong>Por favor, não nos envie a sua chave.</strong>',

  // index.html
  'index.doc.title': 'Suporte · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Suporte',
  'index.sub':
    'Interpretação nos dois sentidos para conversas cara a cara. Legendas e voz enquanto você fala, com a direção detectada automaticamente.',
  'index.trial.title': 'Experimente com cinco minutos grátis',
  'index.trial.p':
    'Sem cadastro e sem chave: na primeira vez que você abre o app em um dispositivo novo, ele dá ' +
    '<strong>cinco minutos grátis</strong>, mostrados no topo. Escolha “Eu falo” e “A outra pessoa” acima das legendas, ' +
    'toque em “Iniciar” e é só falar — é interpretação de verdade, com legendas e voz em tempo real. ' +
    'Cada dispositivo ganha o teste uma única vez; depois disso, compre tempo no app ou use sua própria chave do Alibaba Cloud.',
  'index.pay.title': 'Para usar de verdade',
  'index.pay.intro': 'Há duas formas de pagar, escolhidas em <strong>Ajustes → Forma de pagamento</strong>:',
  'index.pay.credit':
    '<strong>Comprar tempo de interpretação no app</strong> (o padrão) — sem nenhum tipo de conta; é abrir e usar, ' +
    'com cinco minutos grátis em um dispositivo novo. Há pacotes de 1, 5 e 10 horas, que valem para todos os idiomas. ' +
    'Com tradução falada, um minuto custa um minuto; só com legendas, custa um terço.',
  'index.pay.key':
    '<strong>Usar sua própria chave do Alibaba Cloud</strong> — o Alibaba Cloud cobra você diretamente pelo que usar. ' +
    'Nesse caso, chinês ⇄ inglês é grátis; todo o resto é desbloqueado com uma única compra de “Todos os idiomas”, para sempre, ' +
    'inclusive idiomas adicionados depois. ' +
    '<a href="./setup.html">Guia passo a passo para obter uma API Key →</a>',
  'index.langs.title': 'Idiomas',
  'index.langs.intro':
    'Escolha nas duas colunas acima das legendas: “Eu falo” à esquerda, “A outra pessoa” à direita. ' +
    'Estes 24 idiomas são interpretados entre si — todas as combinações, exceto as poucas listadas abaixo —, ' +
    'com a direção detectada automaticamente:',
  'index.langs.list':
    'Chinês, inglês, japonês, coreano, alemão, francês, espanhol, português, italiano, russo, hindi, indonésio, vietnamita, ' +
    'árabe, tailandês, turco, filipino, polonês, urdu, hebraico, persa, malaio, holandês, bengali',
  'index.langs.bangla':
    '<strong>Bengali tem só legendas</strong>: o que os outros dizem aparece em bengali como texto, sem voz; ' +
    'quem fala bengali continua recebendo tradução falada.',
  'index.langs.unpaired':
    'Algumas combinações ficam de fora: indonésio com malaio e hindi com urdu (quem fala essas línguas já se entende), ' +
    'e árabe, urdu e persa entre si (mesmo alfabeto; o app ainda não consegue identificar quem está falando).',
  'index.langs.cantonese': '<strong>Cantonês ⇄ mandarim</strong> — com voz em um sentido, só legendas no outro.',
  'index.faq.title': 'Perguntas frequentes',
  'index.faq.sound.q': 'Sem som',
  'index.faq.sound.a':
    'Confira a <strong>chave Toque/Silencioso</strong>, acima dos botões de volume na lateral esquerda — ' +
    'se aparecer laranja, está no silencioso. Depois, verifique se o seletor de voz no topo não está em “🔇 Sem voz” ' +
    'e se você não está traduzindo para bengali ou cantonês, que têm só legendas. ' +
    'Se continuar sem som, aumente o volume: o receptor e o alto-falante têm níveis de volume separados.',
  'index.faq.earpiece.q': 'Ouvir com privacidade em vez de em voz alta',
  'index.faq.earpiece.a':
    'Mude o seletor de voz no topo para <strong>📞 Receptor</strong> e a tradução sai pelo receptor, ' +
    'com o celular no ouvido como numa ligação. Dá para trocar a qualquer momento, inclusive no meio da sessão.',
  'index.faq.mic.q': '“O sistema desconectou o microfone”',
  'index.faq.mic.a':
    'Normalmente outro app pegou o microfone — uma ligação, uma mensagem de voz, um gravador — ou um fone Bluetooth mudou de modo. ' +
    'Toque em “Parar” e inicie de novo para voltar ao normal. ' +
    'Se isso se repetir com Bluetooth, tente o microfone embutido ou um fone com fio.',
  'index.faq.echo.q': 'Microfonia ou eco ao usar o alto-falante',
  'index.faq.echo.a':
    'No mesmo ambiente, o som do alto-falante é captado de novo pelo microfone. ' +
    'Em <strong>Ajustes → Tratamento de eco</strong>, escolha “Mic baixo na reprodução” ou “Mic mudo na reprodução”, ' +
    'ou simplesmente abaixe o volume. Usando o receptor, isso não acontece.',
  'index.faq.stuck.q': 'As legendas pararam de atualizar',
  'index.faq.stuck.a':
    'A barra no topo mostra o estado da sessão. As causas mais comuns são uma queda de rede ou o sistema ter silenciado o microfone, ' +
    'o que é avisado explicitamente. Parar e iniciar de novo normalmente resolve. ' +
    'Com tempo comprado, confira o tempo restante no topo; com sua própria chave, ' +
    'um problema de cota do Alibaba Cloud é repassado exatamente como vem.',
  'index.faq.phone.q': 'Trocando de celular',
  'index.faq.phone.a':
    'O tempo comprado pertence à sua conta, um ID aleatório que o app cria e guarda nas Chaves do iCloud: ' +
    'no celular novo, entre com a mesma Conta Apple, com as Chaves do iCloud ativadas, e o saldo estará lá. ' +
    '“Todos os idiomas”, comprado ao usar sua própria chave, volta sem custo em ' +
    '<strong>Ajustes → Todos os idiomas → Restaurar compras</strong>.',
  'index.faq.cantonese.q': 'Por que cantonês ⇄ mandarim só tem voz em um sentido',
  'index.faq.cantonese.a':
    'O modelo consegue <strong>entender</strong> e <strong>escrever</strong> cantonês, mas não <strong>falar</strong> — ' +
    'na tabela de idiomas do provedor, ele aparece como só legendas. Por isso, quem fala cantonês ouve a tradução em mandarim; ' +
    'quem fala mandarim recebe só legendas em cantonês. Os dois lados usam caracteres chineses, então a direção ' +
    'não pode ser detectada automaticamente — defina-a no seletor de direção.',
  'index.faq.direction.q': 'A direção às vezes se inverte, por exemplo entre espanhol e português',
  'index.faq.direction.a':
    'Quando os dois idiomas usam o mesmo alfabeto (inglês, espanhol, português, italiano, francês, alemão, indonésio, vietnamita etc.), ' +
    'a detecção se baseia nas palavras e pode oscilar em frases curtas ou nomes. ' +
    'Essas combinações ganham um controle de direção extra no topo — mude de “Direção · automática” para uma direção fixa para travá-la.',
  'index.contact.title': 'Fale conosco',
  'index.contact.p':
    'Perguntas, sugestões e dúvidas sobre reembolso: escreva para <a href="mailto:winer632@qq.com">winer632@qq.com</a>. ' +
    'Costumamos responder em um ou dois dias úteis. Informar o aparelho, a versão do iOS, os dois idiomas ' +
    'e se você comprou tempo ou usa sua própria chave agiliza bastante. ' +
    'Para tempo comprado, inclua o <strong>ID da conta</strong> que aparece nos Ajustes.',

  // privacy.html
  'privacy.doc.title': 'Política de privacidade · Duo Interpreter',
  'privacy.title': 'Política de privacidade',
  'privacy.sub': 'Duo Interpreter · Última atualização: 24 de setembro de 2026',
  'privacy.translated':
    'Esta política é uma tradução. Se houver diferença em relação à <a href="?lang=en">versão em inglês</a>, prevalece a versão em inglês.',
  'privacy.short':
    '<strong>Resumindo:</strong> o app funciona de duas formas. Por padrão, você compra tempo de interpretação, sem cadastro: ' +
    'sua fala vai direto do seu celular para o Alibaba Cloud Model Studio para ser traduzida e <strong>nunca passa pelo nosso servidor</strong>; ' +
    'nosso servidor guarda apenas um número de conta gerado aleatoriamente, quanto tempo você comprou e quanto usou. ' +
    'Se, em vez disso, você usar sua própria chave do Alibaba Cloud, não coletamos nada. ' +
    'Não há análise de uso, publicidade nem rastreamento, e as transcrições ficam no seu celular.',
  'privacy.collect.title': 'O que coletamos',
  'privacy.collect.intro': 'Depende do que você escolheu em Ajustes → Forma de pagamento.',
  'privacy.credit.title': 'Comprar tempo (o padrão, sem cadastro)',
  'privacy.credit.intro':
    'Para lembrar quanto tempo você comprou e evitar abusos, o app se comunica com o nosso servidor <code>api.duo-interpreter.com</code> ' +
    '(hospedado no Microsoft Azure, em Singapura). O servidor guarda:',
  'privacy.credit.id':
    '<strong>Um ID de conta aleatório</strong>: um número (um UUID) que o app gera na primeira vez que você o usa. ' +
    'Ele não tem nenhuma relação com seu nome, e-mail, número de telefone ou Conta Apple. ' +
    'Fica guardado nas suas Chaves do iCloud, então seu saldo continua lá depois de reinstalar o app ' +
    'e acompanha você em celulares novos com a mesma Conta Apple.',
  'privacy.credit.device':
    '<strong>Credenciais do dispositivo</strong>: para cada dispositivo, o identificador e a chave pública de uma chave do Apple App Attest, ' +
    'com a data do registro e do último uso. Elas comprovam que as solicitações vêm de uma cópia autêntica deste app, ' +
    'e não de uma versão modificada.',
  'privacy.credit.purchases':
    '<strong>Compras</strong>: o ID da transação da Apple, o produto (1, 5 ou 10 horas), quando foi comprado, ' +
    'se foi uma compra de teste (sandbox) e se foi reembolsado.',
  'privacy.credit.usage':
    '<strong>Uso</strong>: quando cada sessão de interpretação começou e terminou, o modo (tradução falada ou só legendas), ' +
    'quanto tempo usou, quantas chaves temporárias solicitou e cada alteração no seu saldo.',
  'privacy.credit.trial':
    '<strong>O teste de 5 minutos</strong> é concedido uma única vez por dispositivo. Para evitar que seja pedido de novo, ' +
    'o app entrega ao servidor um token de uso único do Apple DeviceCheck; o servidor o usa para pedir à Apple que verifique ' +
    'e depois marque um único bit que a Apple guarda para este dispositivo em nosso nome (“teste usado”). ' +
    'O token é usado uma vez e não é armazenado, e a Apple guarda para nós apenas esse bit, sem nos dizer qual é o dispositivo.',
  'privacy.credit.never':
    'O servidor <strong>nunca recebe</strong> sua fala, legendas ou traduções; seu nome, e-mail, número de telefone, ' +
    'localização ou contatos; nem seus dados de pagamento.',
  'privacy.key.title': 'Usar sua própria chave do Alibaba Cloud',
  'privacy.key.p': 'Neste modo, o app não se comunica com o nosso servidor e <strong>não coletamos nada</strong>.',
  'privacy.both.title': 'Em qualquer um dos modos',
  'privacy.both.p':
    'O app não contém ferramentas de análise, publicidade ou rastreamento de terceiros. Não fazemos análise de uso nem exibimos anúncios, ' +
    'não rastreamos você em outros apps ou sites e não vendemos nem compartilhamos nenhum dado.',
  'privacy.logs.title': 'Logs do servidor e retenção',
  'privacy.logs.ip':
    'Seu endereço IP é usado apenas na memória para limitar a taxa de solicitações (para evitar abusos) ' +
    'e é descartado uma hora após sua última solicitação; ele não é registrado nem armazenado. ' +
    'Os logs do servidor registram apenas eventos, como “um dispositivo foi registrado” (com apenas os 8 primeiros caracteres do ID da conta), ' +
    '“uma compra foi creditada” (o produto e se foi uma compra de teste), “um reembolso foi aplicado” (o ID da transação) e erros. ' +
    'Os logs do servidor são apagados automaticamente após 30 dias.',
  'privacy.logs.ledger':
    'A cada hora, o servidor tira um snapshot do registro contábil e mantém os 48 mais recentes; ' +
    'além disso, uma cópia criptografada fica guardada em outro local por 30 dias. ' +
    'Os registros de conta, compras e uso são mantidos enquanto a conta existir, ' +
    'porque são necessários para conciliar as contas e processar reembolsos da Apple.',
  'privacy.speech.title': 'Para onde vai a sua fala',
  'privacy.speech.intro':
    'Nos dois modos, o áudio do seu microfone vai <strong>em tempo real e direto do seu celular para o Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Ele nunca passa pelo nosso servidor; não temos como ouvi-lo e não há nada para guardarmos:',
  'privacy.speech.credit':
    'Quando você compra tempo, o app se conecta a <code>dashscope-intl.aliyuncs.com</code> (Singapura) usando a nossa conta do Alibaba Cloud: ' +
    'nosso servidor apenas emite para o app uma chave temporária que expira após 60 segundos, ' +
    'e o áudio é tratado conforme o nosso contrato com o Alibaba Cloud.',
  'privacy.speech.key':
    'Com sua própria chave, o app se conecta ao site que você escolheu nos ajustes ' +
    '(<code>dashscope-intl.aliyuncs.com</code> ou <code>dashscope.aliyuncs.com</code>) usando a sua chave, ' +
    'e o áudio é tratado conforme o <strong>seu</strong> contrato com o Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Para saber o que o Alibaba Cloud faz com o áudio, consulte a ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">política de privacidade dele</a>.',
  'privacy.speech.hosts':
    'O app se conecta apenas ao Alibaba Cloud Model Studio, ao nosso servidor (só quando você compra tempo) ' +
    'e aos serviços da Apple (compras dentro do app, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Falar a tradução com a voz de quem fala</strong> (ativado por padrão; pode ser desativado nos ajustes): ' +
    'o Alibaba Cloud imita em tempo real a voz de quem fala a partir do mesmo áudio que traduz, acompanhando quem estiver falando — ' +
    'as duas pessoas da conversa. Nem o app nem nós coletamos, armazenamos ou enviamos separadamente qualquer impressão vocal; ' +
    'é o mesmo áudio já enviado para tradução.',
  'privacy.device.title': 'O que fica no seu celular',
  'privacy.transcripts.title': 'Transcrições',
  'privacy.transcripts.p':
    'As frases finalizadas são gravadas em um arquivo por dia, dentro do contêiner do próprio app. ' +
    'Elas <strong>nunca são enviadas</strong> e ficam fora do backup do iCloud. ' +
    'Você pode ler, exportar ou apagar as transcrições em “Histórico”, no app; apagar o app as remove.',
  'privacy.account.title': 'ID da conta',
  'privacy.account.p':
    'O ID de conta aleatório descrito acima fica guardado nas Chaves do iOS e, se as Chaves do iCloud estiverem ativadas, ' +
    'é sincronizado entre seus dispositivos com a mesma Conta Apple (com criptografia de ponta a ponta da Apple). ' +
    'Apagar o app não o remove, então seu saldo continua lá depois de reinstalar.',
  'privacy.apikey.title': 'API Keys',
  'privacy.apikey.p':
    'As API Keys que você mesmo digita ficam guardadas nas <strong>Chaves</strong> do iOS, marcadas como legíveis só neste dispositivo ' +
    'e só enquanto ele está desbloqueado. Elas nunca são enviadas e não passam para outro dispositivo por meio de backup.',
  'privacy.mic.title': 'Microfone',
  'privacy.mic.p':
    'O microfone só é usado depois que você toca em “Iniciar”. Uma sessão ativa continua gravando, traduzindo e salvando transcrições ' +
    'quando você troca de app ou bloqueia a tela. Toque em “Parar” para encerrar a captura. ' +
    'Interrupções de áudio do sistema, como ligações, pausam a sessão; ela é retomada quando o sistema permite. ' +
    'O indicador laranja de microfone do sistema mostra quando a captura está ativa.',
  'privacy.purchase.title': 'Compras',
  'privacy.purchase.p':
    'A compra de tempo e a de “Todos os idiomas” (ao usar sua própria chave) são feitas pelas ' +
    '<strong>compras dentro do app da Apple</strong>. A Apple cuida do pagamento de ponta a ponta; ' +
    '<strong>nunca recebemos nem vemos</strong> seu método de pagamento, seu nome ou seus dados de cobrança.',
  'privacy.purchase.credit':
    'Compra de tempo: o app pede à Apple que registre seu ID da conta na transação e depois envia a transação, assinada pela Apple, ' +
    'ao nosso servidor para verificação e crédito; o servidor credita apenas a conta indicada na transação. ' +
    'Os reembolsos são tratados pela Apple, que avisa nosso servidor para retirar o tempo.',
  'privacy.purchase.all': '“Todos os idiomas”: o app apenas pergunta ao sistema se ele já foi comprado; nosso servidor não participa.',
  'privacy.delete.title': 'Acesso e exclusão',
  'privacy.delete.p':
    'Seu ID da conta fica no app em Ajustes → Tempo restante, com um botão “Copiar”. ' +
    'Para ver ou apagar o que nosso servidor guarda sobre você, envie-o para <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'e apagaremos todos os registros dessa conta no servidor (os snapshots e a cópia em outro local expiram ao fim ' +
    'dos respectivos períodos de retenção). O tempo restante não pode ser recuperado após a exclusão. ' +
    'Reembolsos de compras são solicitados à Apple.',
  'privacy.children.title': 'Crianças',
  'privacy.children.p':
    'Este app é voltado para interpretação profissional e do dia a dia. Ele não se destina a crianças ' +
    'e não coleta intencionalmente nenhuma informação delas.',
  'privacy.changes.title': 'Alterações',
  'privacy.changes.p':
    'Se esta política mudar de forma significativa, atualizaremos a data no topo. O app não tem cadastro ' +
    'e não temos como entrar em contato com você, então esta página é o registro oficial.',
  'privacy.contact.title': 'Contato',
  'privacy.contact.p': 'Qualquer dúvida sobre privacidade: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
