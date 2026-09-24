/**
 * 网站文案 · Español。从英文（三个页面的 HTML）翻译，键和页面上的 data-i18n 一一对应；
 * 链接、<code>、邮箱原样保留。提到 App 里的按钮和菜单时，用 public/i18n/es.js 里的原话。
 */
siteI18n('es', {
  'nav.support': '← Soporte',
  'nav.setup': 'Cómo obtener una API Key',
  'nav.privacy': 'Política de privacidad',

  // setup.html
  'setup.doc.title': 'Cómo obtener una API Key de Qwen · Duo Interpreter',
  'setup.title': 'Cómo obtener una API Key de Qwen',
  'setup.sub': 'Unos diez minutos. Hazlo desde un navegador de escritorio; solo el último paso se hace en el teléfono.',
  'setup.intro':
    'La app <strong>no incluye saldo de traducción</strong>. Se conecta a Alibaba Cloud Model Studio con tu propia cuenta, ' +
    'y Alibaba Cloud te cobra según lo que uses. Tu voz nunca pasa por nuestros servidores.',
  'setup.remember':
    '<strong>Dos cosas que conviene tener presentes</strong>: casi todos los fallos vienen de una de ellas. ' +
    'La clave debe crearse en la región de <strong>Singapur (Singapore)</strong>; las claves de otras regiones no funcionan aquí. ' +
    'Y la clave <strong>se muestra completa una sola vez</strong>: cuando cierras ese cuadro de diálogo, ya no se puede volver a ver.',
  'setup.s1.title': 'Crea una cuenta de Alibaba Cloud',
  'setup.s1.signup':
    'Regístrate en <a href="https://www.alibabacloud.com/" target="_blank" rel="noreferrer">alibabacloud.com</a>. ' +
    'Basta con una dirección de correo electrónico: <strong>no necesitas un número de teléfono de China continental</strong>.',
  'setup.s1.sso': 'También puedes iniciar sesión con una cuenta de Google o GitHub y saltarte el formulario.',
  'setup.s1.card':
    'Antes de poder activar los servicios tendrás que agregar una tarjeta de crédito o PayPal. ' +
    'Agregarla no tiene ningún cargo; solo se cobra el uso real.',
  'setup.s1.alt': 'Página de inicio de sesión de Alibaba Cloud',
  'setup.s2.title': 'Cambia la región a Singapur',
  'setup.s2.p':
    'Abre la consola de Model Studio en <a href="https://modelstudio.console.alibabacloud.com/ap-southeast-1" target="_blank" rel="noreferrer">modelstudio.console.alibabacloud.com/ap-southeast-1</a> ' +
    'y comprueba que <strong>arriba a la derecha la región sea Singapore</strong>. El enlace ya lleva ahí, ' +
    'pero al iniciar sesión a veces vuelves a una región predeterminada, así que vale la pena comprobarlo.',
  'setup.s2.alt': 'Consola de Model Studio con la región en Singapur',
  'setup.s2.caption':
    'La región está arriba a la derecha. El botón <strong>API-KEY</strong> de abajo a la izquierda es a donde vas después: ' +
    'no está en la navegación principal.',
  'setup.s3.title': 'Activa Model Studio',
  'setup.s3.p':
    'La primera vez te pedirá que actives el servicio: acepta las condiciones y confirma. ' +
    'Si tu cuenta ya está activada, no verás esta pantalla; pasa directamente al siguiente paso.',
  'setup.s4.title': 'Abre la página de API Key',
  'setup.s4.p':
    'Haz clic en el botón <strong>API-KEY</strong> de la <strong>esquina inferior izquierda</strong> de la consola. ' +
    'Es un botón aparte, con forma de píldora, y no un elemento de la navegación principal, por eso es fácil pasarlo por alto la primera vez.',
  'setup.s4.alt': 'La página de API Key con el botón Create API Key',
  'setup.s4.caption': 'Una vez en esta página, haz clic en <strong>Create API Key</strong>, a la derecha.',
  'setup.s5.title': 'Crea la clave',
  'setup.s5.p':
    'Haz clic en <strong>Create API Key</strong>. Elige el espacio de trabajo predeterminado, pon los permisos en <strong>All</strong>, ' +
    'deja la descripción vacía si quieres y confirma.',
  'setup.s5.alt': 'El cuadro de diálogo Create API Key',
  'setup.s6.title': 'Copia la clave entera, en ese mismo momento',
  'setup.s6.copy':
    'La clave empieza con <code>sk-</code> y es larga: <strong>cópiala completa</strong>. ' +
    'Si le faltan los últimos caracteres, falla exactamente igual que una clave incorrecta. Usa el botón de copiar del cuadro de diálogo.',
  'setup.s6.download':
    'El cuadro de diálogo también ofrece <strong>Download</strong>, que guarda la clave en un archivo: ' +
    'es más seguro que depender solo del portapapeles.',
  'setup.s6.note':
    '<strong>Cuando se cierra este cuadro de diálogo, la clave completa ya no se puede recuperar.</strong> ' +
    'Si la pierdes, elimina esa clave y crea otra; no afecta a nada más.',
  'setup.s6.alt': 'El cuadro de diálogo que muestra la clave una sola vez, con Copy y Download',
  'setup.s6.caption': 'En esta captura, la clave y los dominios dedicados están tapados.',
  'setup.s7.title': 'Pégala en la app y toca “Probar”',
  'setup.s7.p':
    'De vuelta en el teléfono: en <strong>Ajustes → Forma de pago</strong>, elige “Usar mi propia clave de Alibaba Cloud” ' +
    'y aparecerá la sección <strong>API Key de Qwen</strong>. Deja el sitio en <strong>Internacional · Singapur</strong>, ' +
    'pega la clave, toca <strong>Guardar</strong> y luego <strong>Probar</strong>. ' +
    'Si ves en verde “Conectado: la clave funciona”, ya está.',
  'setup.s7.start':
    'Por último, cierra los ajustes, elige los idiomas en “Yo hablo” y “La otra persona”, y empieza. ' +
    'Chino ⇄ inglés es gratis; una sola compra de “Todos los idiomas” en los ajustes desbloquea el resto.',
  'setup.s7.alt': 'Los ajustes de la app con la clave guardada y la prueba superada',
  'setup.s7.caption': 'Esa línea verde es la señal de que todo funciona.',
  'setup.help.title': 'Si no se conecta',
  'setup.help.badKey':
    '<strong>“API Key no válida”</strong>: nueve de cada diez veces, la región es incorrecta. ' +
    'Comprueba que la consola diga Singapore arriba a la derecha; si no, cámbiala y <strong>crea una clave nueva</strong>, ' +
    'porque una clave no se puede pasar de una región a otra. Asegúrate también de que no se haya cortado el final al pegarla.',
  'setup.help.forbidden':
    '<strong>“Esta clave no puede usar el modelo”</strong>: la cuenta todavía no ha activado Model Studio o no tiene saldo disponible. ' +
    'Revísalo en la consola.',
  'setup.help.timeout':
    '<strong>“Se agotó el tiempo de conexión”</strong>: el teléfono no consigue llegar a <code>dashscope-intl.aliyuncs.com</code>. ' +
    'Prueba con otra red, por ejemplo con datos móviles en lugar del Wi-Fi de la oficina.',
  'setup.help.noKey':
    '<strong>¿Quieres probarla primero o no consigues una clave?</strong> No hace falta ninguna: ' +
    '<strong>Ajustes → Forma de pago → Comprar tiempo (sin registro)</strong>. ' +
    'Un dispositivo nuevo recibe 5 minutos gratis: toca “Iniciar” para probarla; después, compra tiempo en la app y funcionan todos los idiomas.',
  'setup.help.contact':
    '¿Sigue sin funcionar? Escribe a <a href="mailto:winer632@qq.com">winer632@qq.com</a> indicando tu dispositivo, ' +
    'la versión de iOS y el mensaje exacto que mostró el botón “Probar”; así lo resolvemos mucho antes. ' +
    '<strong>Por favor, no nos envíes tu clave.</strong>',

  // index.html
  'index.doc.title': 'Soporte · Duo Interpreter',
  'index.title': '🎙 Duo Interpreter · Soporte',
  'index.sub':
    'Interpretación bidireccional para conversaciones cara a cara. Subtítulos y voz sobre la marcha, y la dirección se detecta sola.',
  'index.trial.title': 'Pruébala con cinco minutos gratis',
  'index.trial.p':
    'Sin registro y sin clave: la primera vez que abres la app en un dispositivo nuevo, te regala ' +
    '<strong>cinco minutos gratis</strong>, que se muestran arriba. Elige “Yo hablo” y “La otra persona” encima de los subtítulos, ' +
    'toca “Iniciar” y habla: es interpretación de verdad, con subtítulos y voz al momento. ' +
    'Cada dispositivo recibe la prueba una sola vez; después, compra tiempo en la app o usa tu propia clave de Alibaba Cloud.',
  'index.pay.title': 'Para usarla de verdad',
  'index.pay.intro': 'Hay dos formas de pago, que se eligen en <strong>Ajustes → Forma de pago</strong>:',
  'index.pay.credit':
    '<strong>Comprar tiempo de interpretación en la app</strong> (la opción predeterminada): sin cuenta de ningún tipo; ' +
    'abres la app y empiezas, con cinco minutos gratis en un dispositivo nuevo. Hay paquetes de 1, 5 y 10 horas, ' +
    'válidos para todos los idiomas. Con traducción hablada, cada minuto cuenta como un minuto; solo con subtítulos, cuenta un tercio.',
  'index.pay.key':
    '<strong>Usar tu propia clave de Alibaba Cloud</strong>: Alibaba Cloud te cobra directamente lo que uses. ' +
    'En ese caso, chino ⇄ inglés es gratis; todo lo demás se desbloquea con una sola compra de “Todos los idiomas”, para siempre, ' +
    'incluidos los idiomas que lleguen más adelante. ' +
    '<a href="./setup.html">Guía paso a paso para obtener una API Key →</a>',
  'index.langs.title': 'Idiomas',
  'index.langs.intro':
    'Elígelos en las dos columnas que hay encima de los subtítulos: “Yo hablo” a la izquierda y “La otra persona” a la derecha. ' +
    'Estos 24 idiomas se interpretan entre sí (todas las combinaciones salvo las pocas que se indican abajo), ' +
    'y la dirección se detecta sola:',
  'index.langs.list':
    'Chino, inglés, japonés, coreano, alemán, francés, español, portugués, italiano, ruso, hindi, indonesio, vietnamita, ' +
    'árabe, tailandés, turco, filipino, polaco, urdu, hebreo, persa, malayo, neerlandés, bengalí',
  'index.langs.bangla':
    '<strong>El bengalí solo tiene subtítulos</strong>: lo que dicen los demás se muestra en bengalí como texto, sin voz; ' +
    'si hablas en bengalí, sí recibes traducción hablada.',
  'index.langs.unpaired':
    'Quedan fuera unas pocas combinaciones: indonesio con malayo e hindi con urdu (quienes los hablan ya se entienden entre sí), ' +
    'y árabe, urdu y persa entre ellos (usan el mismo alfabeto y la app todavía no puede saber quién está hablando).',
  'index.langs.cantonese': '<strong>Cantonés ⇄ mandarín</strong>: con voz en un sentido y solo subtítulos en el otro.',
  'index.faq.title': 'Preguntas frecuentes',
  'index.faq.sound.q': 'No se oye nada',
  'index.faq.sound.a':
    'Revisa el <strong>interruptor Tono/Silencio</strong>, encima de los botones de volumen en el lateral izquierdo: ' +
    'si se ve naranja, está en silencio. Luego asegúrate de que el selector de voz de la parte superior no esté en “🔇 Sin voz” ' +
    'y de que no estés traduciendo al bengalí o al cantonés, que solo tienen subtítulos. ' +
    'Si sigue sin oírse, sube el volumen: el auricular y el altavoz tienen niveles de volumen independientes.',
  'index.faq.earpiece.q': 'Escuchar en privado en lugar de en voz alta',
  'index.faq.earpiece.a':
    'Cambia el selector de voz de la parte superior a <strong>📞 Auricular</strong> y la traducción sonará por el auricular, ' +
    'con el teléfono pegado a la oreja como en una llamada. Puedes cambiarlo en cualquier momento, incluso en plena sesión.',
  'index.faq.mic.q': '“El sistema desconectó el micrófono”',
  'index.faq.mic.a':
    'Normalmente es porque otra app tomó el micrófono (una llamada, un mensaje de voz, una grabadora) ' +
    'o porque unos auriculares Bluetooth cambiaron de modo. Toca “Detener” y vuelve a “Iniciar” para recuperarlo. ' +
    'Si con Bluetooth pasa a menudo, prueba con el micrófono integrado o con unos auriculares con cable.',
  'index.faq.echo.q': 'Acople o eco al usar el altavoz',
  'index.faq.echo.a':
    'En una misma sala, el micrófono vuelve a captar lo que sale por el altavoz. ' +
    'En <strong>Ajustes → Control del eco</strong>, elige “Bajar micro al reproducir” o “Silenciar micro al reproducir”, ' +
    'o simplemente baja el volumen. Con el auricular, esto no ocurre.',
  'index.faq.stuck.q': 'Los subtítulos dejaron de actualizarse',
  'index.faq.stuck.a':
    'La barra de la parte superior muestra el estado de la sesión. Las causas habituales son una caída de la red ' +
    'o que el sistema haya silenciado el micrófono, algo que se indica de forma explícita. ' +
    'Normalmente se soluciona deteniendo e iniciando de nuevo. Si compraste tiempo, revisa el tiempo restante arriba; ' +
    'con tu propia clave, los problemas de cuota que devuelve Alibaba Cloud se muestran tal cual.',
  'index.faq.phone.q': 'Cambiar a un teléfono nuevo',
  'index.faq.phone.a':
    'El tiempo comprado pertenece a tu cuenta, un ID aleatorio que la app crea y guarda en el Llavero de iCloud: ' +
    'inicia sesión con la misma Cuenta de Apple en el teléfono nuevo, con el Llavero de iCloud activado, y ahí tendrás tu saldo. ' +
    '“Todos los idiomas”, si lo compraste usando tu propia clave, se recupera sin pagar de nuevo en ' +
    '<strong>Ajustes → Todos los idiomas → Restaurar compras</strong>.',
  'index.faq.cantonese.q': '¿Por qué cantonés ⇄ mandarín solo tiene voz en un sentido?',
  'index.faq.cantonese.a':
    'El modelo puede <strong>entender</strong> y <strong>escribir</strong> cantonés, pero no <strong>hablarlo</strong>: ' +
    'en la tabla de idiomas del proveedor figura como solo subtítulos. Por eso, si hablas en cantonés oyes la traducción en mandarín, ' +
    'y si hablas en mandarín solo ves subtítulos en cantonés. Los dos se escriben con caracteres chinos, así que la dirección ' +
    'no se puede detectar automáticamente: fíjala con el selector de dirección.',
  'index.faq.direction.q': 'La dirección a veces se invierte, por ejemplo entre español y portugués',
  'index.faq.direction.a':
    'Cuando los dos idiomas comparten alfabeto (inglés, español, portugués, italiano, francés, alemán, indonesio, vietnamita, etc.), ' +
    'la detección se basa en las palabras y puede dudar con frases cortas o nombres propios. ' +
    'Estas combinaciones tienen un control de dirección adicional en la parte superior: ' +
    'cámbialo de “Dirección · automática” a una dirección fija para dejarla establecida.',
  'index.contact.title': 'Contacto',
  'index.contact.p':
    'Para preguntas, sugerencias y consultas sobre reembolsos, escribe a <a href="mailto:winer632@qq.com">winer632@qq.com</a>; ' +
    'solemos responder en uno o dos días hábiles. Si nos indicas el dispositivo, la versión de iOS, los dos idiomas ' +
    'y si compraste tiempo o usas tu propia clave, todo irá mucho más rápido. ' +
    'Si compraste tiempo, incluye el <strong>ID de cuenta</strong> que aparece en Ajustes.',

  // privacy.html
  'privacy.doc.title': 'Política de privacidad · Duo Interpreter',
  'privacy.title': 'Política de privacidad',
  'privacy.sub': 'Duo Interpreter · Última actualización: 24 de septiembre de 2026',
  'privacy.translated':
    'Esta política es una traducción. Si difiere de la <a href="?lang=en">versión en inglés</a>, prevalece la versión en inglés.',
  'privacy.short':
    '<strong>En resumen:</strong> la app funciona de dos maneras. De forma predeterminada compras tiempo de interpretación, sin registro: ' +
    'tu voz va directamente de tu teléfono a Alibaba Cloud Model Studio para traducirse y <strong>nunca pasa por nuestro servidor</strong>; ' +
    'nuestro servidor solo guarda un número de cuenta generado al azar, cuánto tiempo compraste y cuánto usaste. ' +
    'Si en cambio usas tu propia clave de Alibaba Cloud, no recopilamos nada. No hay analíticas, publicidad ni seguimiento, ' +
    'y las transcripciones se quedan en tu teléfono.',
  'privacy.collect.title': 'Qué recopilamos',
  'privacy.collect.intro': 'Depende de lo que hayas elegido en Ajustes → Forma de pago.',
  'privacy.credit.title': 'Comprar tiempo (opción predeterminada, sin registro)',
  'privacy.credit.intro':
    'Para recordar cuánto tiempo compraste y evitar abusos, la app se comunica con nuestro servidor <code>api.duo-interpreter.com</code> ' +
    '(alojado en Microsoft Azure, en Singapur). El servidor guarda:',
  'privacy.credit.id':
    '<strong>Un ID de cuenta aleatorio</strong>: un número (un UUID) que la app genera la primera vez que la usas. ' +
    'No tiene nada que ver con tu nombre, correo electrónico, número de teléfono ni Cuenta de Apple. ' +
    'Se guarda en tu Llavero de iCloud, así que tu saldo se conserva aunque reinstales la app y te acompaña a teléfonos nuevos ' +
    'con la misma Cuenta de Apple.',
  'privacy.credit.device':
    '<strong>Credenciales del dispositivo</strong>: para cada dispositivo, el identificador y la clave pública de una clave de Apple App Attest, ' +
    'junto con cuándo se registró y cuándo se usó por última vez. Sirven para demostrar que las solicitudes vienen de una copia ' +
    'auténtica de esta app y no de una modificada.',
  'privacy.credit.purchases':
    '<strong>Compras</strong>: el ID de transacción de Apple, el producto (1, 5 o 10 horas), cuándo se compró, ' +
    'si fue una compra de prueba (sandbox) y si se reembolsó.',
  'privacy.credit.usage':
    '<strong>Uso</strong>: cuándo empezó y terminó cada sesión de interpretación, su modo (traducción hablada o solo subtítulos), ' +
    'cuánto tiempo consumió, cuántas claves temporales pidió y cada cambio en tu saldo.',
  'privacy.credit.trial':
    '<strong>La prueba de 5 minutos</strong> se da una sola vez por dispositivo. Para evitar que se reclame más de una vez, ' +
    'la app entrega al servidor un token de un solo uso de Apple DeviceCheck; el servidor lo usa para pedirle a Apple que consulte ' +
    'y luego active un único bit que Apple guarda para este dispositivo en nuestro nombre (“prueba usada”). ' +
    'El token se usa una vez y no se almacena, y Apple solo guarda ese bit para nosotros, sin decirnos de qué dispositivo se trata.',
  'privacy.credit.never':
    'El servidor <strong>nunca recibe</strong> tu voz, tus subtítulos ni tus traducciones; tu nombre, correo electrónico, ' +
    'número de teléfono, ubicación ni contactos; ni tus datos de pago.',
  'privacy.key.title': 'Usar tu propia clave de Alibaba Cloud',
  'privacy.key.p': 'En este modo, la app no se comunica con nuestro servidor y <strong>no recopilamos nada</strong>.',
  'privacy.both.title': 'En ambos casos',
  'privacy.both.p':
    'La app no contiene analíticas, publicidad ni seguimiento de terceros. No usamos analíticas ni anuncios, ' +
    'no te seguimos a través de otras apps o sitios web, y no vendemos ni compartimos ningún dato.',
  'privacy.logs.title': 'Registros del servidor y conservación',
  'privacy.logs.ip':
    'Tu dirección IP solo se usa en memoria para limitar la frecuencia de las solicitudes (para evitar abusos) ' +
    'y se descarta una hora después de tu última solicitud; no se registra ni se almacena. ' +
    'Los registros del servidor solo anotan eventos, como “se registró un dispositivo” (con solo los primeros 8 caracteres del ID de cuenta), ' +
    '“se acreditó una compra” (el producto y si fue una compra de prueba), “se aplicó un reembolso” (el ID de transacción) y errores. ' +
    'Los registros del servidor se eliminan automáticamente a los 30 días.',
  'privacy.logs.ledger':
    'Cada hora se toma en el servidor una instantánea del libro contable y se conservan las 48 más recientes; además, ' +
    'se guarda una copia cifrada en otra ubicación durante 30 días. Los registros de cuenta, compras y uso se conservan ' +
    'mientras exista la cuenta, porque se necesitan para cuadrar la contabilidad y gestionar los reembolsos de Apple.',
  'privacy.speech.title': 'Adónde va tu voz',
  'privacy.speech.intro':
    'En ambos modos, el audio de tu micrófono va <strong>en tiempo real y directamente de tu teléfono a Alibaba Cloud Model Studio</strong> ' +
    '(Qwen LiveTranslate). Nunca pasa por nuestro servidor; no podemos oírlo ni tenemos nada que guardar:',
  'privacy.speech.credit':
    'Cuando compras tiempo, la app se conecta a <code>dashscope-intl.aliyuncs.com</code> (Singapur) con nuestra cuenta de Alibaba Cloud: ' +
    'nuestro servidor solo emite para la app una clave temporal que caduca a los 60 segundos, ' +
    'y el audio se trata según nuestro acuerdo con Alibaba Cloud.',
  'privacy.speech.key':
    'Con tu propia clave, la app se conecta al sitio que elegiste en los ajustes ' +
    '(<code>dashscope-intl.aliyuncs.com</code> o <code>dashscope.aliyuncs.com</code>) con tu clave, ' +
    'y el audio se trata según <strong>tu</strong> acuerdo con Alibaba Cloud.',
  'privacy.speech.alibaba':
    'Para saber qué hace Alibaba Cloud con el audio, consulta ' +
    '<a href="https://www.alibabacloud.com/help/en/legal/latest/alibaba-cloud-international-website-privacy-policy" target="_blank" rel="noreferrer">su política de privacidad</a>.',
  'privacy.speech.hosts':
    'La app solo se conecta a Alibaba Cloud Model Studio, a nuestro servidor (solo al comprar tiempo) ' +
    'y a los servicios de Apple (compras dentro de la app, App Attest, DeviceCheck).',
  'privacy.speech.voice':
    '<strong>Traducir con la voz de quien habla</strong> (activado de forma predeterminada; se puede desactivar en los ajustes): ' +
    'Alibaba Cloud imita en tiempo real la voz de quien habla a partir del mismo audio que traduce, y sigue a quien esté hablando ' +
    'en cada momento, sea cual sea de las dos personas de la conversación. Ni la app ni nosotros recopilamos, almacenamos ni subimos ' +
    'por separado ninguna huella de voz; es el mismo audio que ya se envía para traducir.',
  'privacy.device.title': 'Lo que se queda en tu teléfono',
  'privacy.transcripts.title': 'Transcripciones',
  'privacy.transcripts.p':
    'Las frases terminadas se escriben en un archivo por día dentro del contenedor propio de la app. ' +
    '<strong>Nunca se suben</strong> y están excluidas de la copia de seguridad de iCloud. ' +
    'Puedes leerlas, exportarlas o eliminarlas en “Historial”, dentro de la app; si eliminas la app, se eliminan con ella.',
  'privacy.account.title': 'ID de cuenta',
  'privacy.account.p':
    'El ID de cuenta aleatorio descrito arriba se guarda en el llavero de iOS y, si el Llavero de iCloud está activado, ' +
    'se sincroniza entre tus dispositivos con la misma Cuenta de Apple (con cifrado de extremo a extremo de Apple). ' +
    'Eliminar la app no lo borra, así que tu saldo sigue ahí después de reinstalarla.',
  'privacy.apikey.title': 'API Keys',
  'privacy.apikey.p':
    'Las API Keys que escribes tú mismo se guardan en el <strong>llavero</strong> de iOS, marcadas como legibles solo en este dispositivo ' +
    'y solo mientras está desbloqueado. Nunca se suben ni pasan a otro dispositivo a través de copias de seguridad.',
  'privacy.mic.title': 'Micrófono',
  'privacy.mic.p':
    'El micrófono solo se usa después de que tocas “Iniciar”. Una sesión activa sigue grabando, traduciendo y guardando transcripciones ' +
    'cuando cambias de app o bloqueas la pantalla. Toca “Detener” para terminar la captura. ' +
    'Las interrupciones de audio del sistema, como las llamadas, pausan la sesión, que se reanuda cuando el sistema lo permite. ' +
    'El indicador naranja de micrófono del sistema muestra cuándo la captura está activa.',
  'privacy.purchase.title': 'Compras',
  'privacy.purchase.p':
    'Tanto la compra de tiempo como “Todos los idiomas” (con tu propia clave) se hacen mediante las ' +
    '<strong>compras dentro de la app de Apple</strong>. Apple gestiona el pago de principio a fin; ' +
    '<strong>nunca recibimos ni vemos</strong> tu método de pago, tu nombre ni tus datos de facturación.',
  'privacy.purchase.credit':
    'Compra de tiempo: la app le pide a Apple que registre tu ID de cuenta en la transacción y luego envía la transacción, ' +
    'firmada por Apple, a nuestro servidor para verificarla y acreditarla; el servidor solo acredita la cuenta indicada en la transacción. ' +
    'Los reembolsos los gestiona Apple, que avisa a nuestro servidor para que retire el tiempo correspondiente.',
  'privacy.purchase.all': '“Todos los idiomas”: la app solo le pregunta al sistema si se ha comprado; nuestro servidor no interviene.',
  'privacy.delete.title': 'Acceso y eliminación',
  'privacy.delete.p':
    'Tu ID de cuenta está en la app, en Ajustes → Tiempo restante, con un botón “Copiar”. ' +
    'Para ver o eliminar lo que nuestro servidor guarda sobre ti, envíalo a <a href="mailto:winer632@qq.com">winer632@qq.com</a> ' +
    'y eliminaremos todos los registros de esa cuenta en el servidor (las instantáneas y la copia externa caducan al terminar ' +
    'sus periodos de conservación). El tiempo restante no se puede recuperar después de la eliminación. ' +
    'Los reembolsos de compras se solicitan a Apple.',
  'privacy.children.title': 'Menores',
  'privacy.children.p':
    'Esta app está pensada para la interpretación profesional y cotidiana. No está dirigida a menores ' +
    'y no recopila a sabiendas ningún dato de ellos.',
  'privacy.changes.title': 'Cambios',
  'privacy.changes.p':
    'Si esta política cambia de forma sustancial, actualizaremos la fecha de arriba. La app no requiere registro ' +
    'y no tenemos forma de contactarte, así que esta página es la referencia.',
  'privacy.contact.title': 'Contacto',
  'privacy.contact.p': 'Para cualquier pregunta sobre privacidad: <a href="mailto:winer632@qq.com">winer632@qq.com</a>.',
});
