import Vue from 'vue'
import VueI18n from 'vue-i18n'
// default language
import zhCN from './lang/zh'
Vue.use(VueI18n)

export const defaultLang = 'zh'

const messages = {
  'zh': {
    ...zhCN
  }
}

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages
})

export default i18n

const loadedLanguages = [defaultLang]

const _lan = localStorage.getItem('language')
// 从缓存設置中加载当前语言
if (_lan !== null && defaultLang !== _lan) {
  loadLanguageAsync(_lan)
}

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

/**
 * i18n Render
 * @param key
 * @returns rendered string
 */
export function i18nRender (key) {
  return i18n.t(key)
}

export function loadLanguageAsync (lang = defaultLang) {
  return new Promise(resolve => {
    if (i18n.locale !== lang) {
      if (!loadedLanguages.includes(lang)) {
        return import(/* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(msg => {
          i18n.setLocaleMessage(lang, msg.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        })
      }
      return resolve(setI18nLanguage(lang))
    }
    return resolve(lang)
  })
}
