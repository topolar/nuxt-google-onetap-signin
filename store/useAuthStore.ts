import { ref } from 'vue'
import type { ApiAuthGoogleDTO } from '~/server/api/auth/google';

export const useAuthStore = defineStore(
    'auth',
    () => {
        const token = ref<string>(); // state
        const user = ref<User>();
        const error = ref<string>()
        const setToken = async (newToken: string | null) => {
            user.value = undefined;
            error.value = undefined;
            token.value = undefined;
            if (!newToken) return;
            try {
                // read user data
                const result = await $fetch<ApiAuthGoogleDTO>('/api/auth/google', {
                    method: 'POST',
                    body: { token: newToken },
                });
                if (result.success) {
                    token.value = newToken;
                    user.value = result.user;
                } else {
                    error.value = result.error;
                }
            } catch (err) {
                error.value = 'Error fetching user details';
            }
        }
        //computed - getters
        // functions - setters
        return { user, error, token, setToken }
    },
    {
        persist: true,
    },
)