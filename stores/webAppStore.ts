import type { TelegramWebApps } from 'telegram-webapps-types';

export const useWebAppStore = defineStore('webApp', () => {
    const webApp = ref<TelegramWebApps.WebApp>()

    const initWebApp = () => {
        //@ts-ignore
        webApp.value = window.Telegram?.WebApp
    }

    return { webApp, initWebApp }
});