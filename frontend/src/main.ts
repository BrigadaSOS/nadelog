import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import messages from "@intlify/unplugin-vue-i18n/messages"

import {createPinia } from "pinia";
import {createI18n} from "vue-i18n";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {getStartingLocale} from "./utils/i18n.ts";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
//
export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getStartingLocale(),
    fallbackLocale: 'en',
    availableLocales: ['es', 'en'],
    messages
})

const app = createApp(App)
document.documentElement.classList.add('dark')

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
