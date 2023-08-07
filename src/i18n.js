import { createI18n } from 'vue-i18n'


import messages from "@intlify/unplugin-vue-i18n/messages";

export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VUE_APP_I18N_LOCALE || "ar",
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "ar",
    messages: messages
  })