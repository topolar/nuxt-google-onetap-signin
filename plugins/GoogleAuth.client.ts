import { useAuthStore } from "~/store/useAuthStore";

declare global {
    interface Window {
        google: { accounts: google.accounts }
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const store = useAuthStore();
    if (store.token) {
        console.log("GoogleAuthPlugin we have token, no auth call!");
        return;
    }
    if (import.meta.client) {
        const config = useRuntimeConfig();
        console.log("GoogleAuthPlugin Importing gsi");
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = () => {
            console.log('GoogleAuthPlugin gsi-loaded, initialize');
            window.google.accounts.id.initialize({
                client_id: config.public.gaClientId,
                callback: handleCredentialResponse
            });

            window.google.accounts.id.prompt((notification) => {
                console.log('GoogleAuthPlugin notification', notification);
                if (notification.isNotDisplayed()) {
                    store.setError('not-displayed');
                    console.log('not-displayed!');
                }
                if (notification.isSkippedMoment()) {
                    const reason = notification.getSkippedReason();
                    store.setError(`skipped_${reason}`);
                    console.log('skipped!', reason);
                }
                if (notification.isDismissedMoment()) {
                    store.setError('dismissed');
                    console.log('dismissed!');
                }

            }); // Zobrazí One-Tap dialog.
        };
        document.head.appendChild(script);
    }

    function handleCredentialResponse(response: any) {
        console.log('GoogleAuthPlugin retrieved credential');
        store.setToken(response.credential);
    }
});
