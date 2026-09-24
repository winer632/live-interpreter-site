/**
 * 三个页面的多语言。正文写在 HTML 里（英文），其余 24 种在 i18n/<code>.js，按需加载一份，
 * 把带 data-i18n 的元素原地换掉（data-i18n 填 innerHTML，data-i18n-alt 填图片的 alt）。
 * 语言和 App 界面的 25 种一一对应（public/i18n.js 的 LANGS），有测试盯着。
 *
 * 用哪种语言：网址里的 ?lang= → 浏览器的首选语言（iPhone 的 Safari 就是系统语言）→ 英文。
 * ?lang= 给两处用：页面上的语言切换，以及 App 打开链接时带上自己的界面语言——
 * App 里可以手动选界面语言，波斯语、菲律宾语在 iOS 上也设不成系统语言，只看系统语言会对不上。
 * 手动切的语言不存进浏览器：下次从 App 打开照样跟随系统，只在站内链接上带着 ?lang= 走。
 *
 * 这个文件在 <head> 里同步加载：要赶在正文画出来之前决定语言，不然会先闪一下英文。
 */
(function () {
  var NAMES = {
    en: 'English', zh: '简体中文', 'zh-Hant': '繁體中文', ja: '日本語', ko: '한국어',
    de: 'Deutsch', fr: 'Français', es: 'Español', pt: 'Português', it: 'Italiano',
    ru: 'Русский', hi: 'हिन्दी', id: 'Bahasa Indonesia', vi: 'Tiếng Việt', ar: 'العربية',
    th: 'ไทย', tr: 'Türkçe', fil: 'Filipino', pl: 'Polski', ur: 'اردو', he: 'עברית',
    fa: 'فارسی', ms: 'Bahasa Melayu', nl: 'Nederlands', bn: 'বাংলা',
  };
  var RTL = ['ar', 'ur', 'fa', 'he'];
  /** <html lang> 的写法。简体标成 zh-Hans，浏览器才会挑简体字形，而不是按日文或繁体去画 */
  var HTML_LANG = { zh: 'zh-Hans' };

  /** 语言标签对应哪套文案，规则和 App 的 uiLanguageOf 一样；没有这种语言时返回 null */
  function supported(tag) {
    var lower = String(tag || '').toLowerCase().replace(/_/g, '-');
    if (lower.indexOf('zh') === 0) return /hant|-tw|-hk|-mo/.test(lower) ? 'zh-Hant' : 'zh';
    var base = lower.split('-')[0];
    base = { iw: 'he', 'in': 'id', tl: 'fil' }[base] || base;
    return NAMES.hasOwnProperty(base) ? base : null;
  }

  function fromSystem() {
    var tags = (navigator.languages || []).concat(navigator.language || []);
    for (var i = 0; i < tags.length; i++) {
      var code = supported(tags[i]);
      if (code) return code;
    }
    return null;
  }

  var chosen = supported(new URLSearchParams(location.search).get('lang'));
  var lang = chosen || fromSystem() || 'en';
  var root = document.documentElement;
  var table = null;
  var parsed = false;

  /** i18n/<code>.js 加载完调这个交出文案 */
  window.siteI18n = function (code, strings) {
    if (code !== lang) return;
    table = strings;
    markLanguage(lang);
    render();
  };

  if (lang !== 'en') {
    markLanguage(lang);
    root.classList.add('i18n-wait');
    var script = document.createElement('script');
    script.src = 'i18n/' + lang + '.js';
    script.onerror = showEnglish;
    document.head.appendChild(script);
    // 网慢或文件出错时宁可先给英文，也别一直空着；文案晚到了照样会换上
    setTimeout(showEnglish, 3000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    parsed = true;
    addPicker();
    render();
  });

  function render() {
    if (!parsed || (lang !== 'en' && !table)) return;
    if (table) {
      each('[data-i18n]', function (el) {
        var text = table[el.getAttribute('data-i18n')];
        // 只在部分语言里有的段落（比如隐私政策的「译文以英文为准」）默认 hidden，有文案才露出来
        if (text != null) { el.innerHTML = text; el.hidden = false; }
      });
      each('[data-i18n-alt]', function (el) {
        var text = table[el.getAttribute('data-i18n-alt')];
        if (text != null) el.alt = text;
      });
    }
    if (chosen) {
      each('a[href^="./"]', function (a) {
        var url = new URL(a.getAttribute('href'), location.href);
        url.searchParams.set('lang', lang);
        a.href = url.href;
      });
    }
    reveal();
  }

  function reveal() {
    root.classList.remove('i18n-wait');
  }

  function showEnglish() {
    if (table) return;
    markLanguage('en');
    reveal();
  }

  /** <html lang dir>：屏幕阅读器按它念，浏览器按它挑字形、定排版方向 */
  function markLanguage(code) {
    root.lang = HTML_LANG[code] || code;
    root.dir = RTL.indexOf(code) >= 0 ? 'rtl' : 'ltr';
  }

  function addPicker() {
    var slot = document.querySelector('[data-lang-picker]');
    if (!slot) return;
    var select = document.createElement('select');
    select.setAttribute('aria-label', 'Language');
    for (var code in NAMES) {
      var option = new Option(NAMES[code], code, false, code === lang);
      option.lang = HTML_LANG[code] || code;
      select.appendChild(option);
    }
    select.onchange = function () {
      var url = new URL(location.href);
      url.searchParams.set('lang', select.value);
      location.href = url.href;
    };
    slot.appendChild(select);
  }

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }
})();
