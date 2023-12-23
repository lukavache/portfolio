import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ka from '../locales/ka.json'

//import { defineComponent, useI18n } from 'vue'

export const defaultLocale = 'en';
export const availablelanguages = ['ka', 'en'];

//type MessageSchema = typeof en

//export const i18n = createI18n<[MessageSchema], 'en' | 'ka'>({
export const i18n = createI18n({
    legacy: false,
    //globalInjection: true,
    locale: 'en',
    messages: {en, ka}
});

export default i18n;