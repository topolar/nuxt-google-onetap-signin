import { useAuthStore } from "~/store/useAuthStore";

export const useAuth = () => {
    const store = useAuthStore();
    const { token, error, user } = storeToRefs(store);
    const logout = async () => {
        await store.setToken(null);
        /** @ts-ignore */
        if (!window || !window.google) {
            await navigateTo('/', { external: true });
        }
    }
    return {
        user,
        token,
        error,
        logout
    }
}