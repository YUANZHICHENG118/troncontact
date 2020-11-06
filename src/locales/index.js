import Vue from 'vue'
import VueI18n from 'vue-i18n'
// default language
import ZH from './lang/zh'
import EN from './lang/en'
import KO from './lang/ko'
Vue.use(VueI18n)

export const defaultLang = 'zh'

const messages = {
  'zh': ZH,
  'en': EN,
  'ko': KO,
}

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages
})
export default i18n

