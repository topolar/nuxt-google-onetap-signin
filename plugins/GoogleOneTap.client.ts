import { useAuthStore } from "~/store/useAuthStore";

declare const window: { google: { accounts: google.accounts } } & Window;

export default defineNuxtPlugin((nuxtApp) => {
    const store = useAuthStore();
    if (store.token) {
        console.log("GoogleOneTapPlugin we have token, no auth call!");
        return;
    }
    if (import.meta.client) {
        const config = useRuntimeConfig();
        console.log("GoogleOneTapPlugin Importing gsi");
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = () => {
            console.log('GoogleOneTapPlugin gsi-loaded, initialize');
            window.google.accounts.id.initialize({
                client_id: config.public.gaClientId,
                callback: handleCredentialResponse,
            });

            window.google.accounts.id.prompt(); // Zobrazí One-Tap dialog.
        };
        document.head.appendChild(script);
    }

    function handleCredentialResponse(response: any) {
        console.log('GoogleOneTapPlugin retrieved credential');
        store.setToken(response.credential);
    }
});
