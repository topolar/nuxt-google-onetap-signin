import { useAuthStore } from "~/store/useAuthStore";

export const useAuth = () => {
    const store = useAuthStore();
    const { token, error, user } = storeToRefs(store);
    return {
        user,
        token,
        error,
        logout: async () => {
            await store.setToken(null);
            if (!window || !window.google) {
                // If there is no window.google, we need to reload page to load script 
                await navigateTo('/', { external: true });
            }
        }
    }
}