import { createI18n } from 'vue-i18n'
import vnMessage from './vn.json'
import enMessage from './en.json'
/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
const messages = {
   vn: vnMessage,
   en: enMessage,
}

export default createI18n({
  locale: 'vn',
  fallbackLocale: 'vn',
  messages: messages
})
