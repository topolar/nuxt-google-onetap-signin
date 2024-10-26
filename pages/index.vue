<template>
    <div class="flex gap-2 items-center justify-center mt-4">
        <UIcon name="i-heroicons-cursor-arrow-ripple" class="w-12 h-12" />
        <h1 class="text-3xl font-bold tracking-tighter">OneTapLogin</h1>
    </div>
    <div class="text-center max-w-[600px] mx-auto">
        Google OneTap/Button Sign-in example. Made with <strong>Nuxt 3</strong>, <strong>Pinia</strong> and <strong>Nuxt
            UI</strong>.
        Received user information are just displayed and <strong>not used</strong> in any other way.
    </div>

    <div class="max-w-96 mx-auto my-8 flex flex-col gap-2">
        <div v-if="user" class="flex flex-col gap-2">

            <UAlert color="green" icon="i-heroicons-check-circle" variant="solid" title="Successfully signed!">
                <template #description>
                    <div class="flex gap-2 p-2 items-center">
                        <UAvatar :src="user.picture" size="xl" />
                        <div class="flex flex-col gap-1">
                            <div class="font-bold">{{ user.name }}</div>
                            <div>{{ user.email }}</div>
                        </div>
                    </div>
                </template>
            </UAlert>
        </div>
        <div v-else>
            <UAlert color="yellow" icon="i-heroicons-exclamation-triangle" variant="solid" title="User not signed!">
                <template #description>
                    <div class="flex flex-col gap-2">

                        <div>Wait for Sign-in dialog or use Sign-in button. </div>
                        <div>Sign-in dialog closed by small cross will be hidden forever!</div>
                        <div>
                            You can enable it again in
                            <span class="font-bold mt-2">chrome://settings/content/federatedIdentityApi</span>
                        </div>
                    </div>
                </template>
            </UAlert>
        </div>
    </div>

    <h1 class="text-center text-3xl font-bold mt-4 mb-8">How it works?</h1>

    <div class="flex flex-wrap gap-8 justify-center items-stretch">
        <ShinyPanel did="1" title="Development Environment">
            Google Sign-in doesn't work on localhost.
            Your app must be running on some real domain.
            You can setup it by <strong>mkcert</strong> tool.
            Alternatively you can use ngrok, serveo or any
            other tool.
        </ShinyPanel>
        <ShinyPanel did="2" title="Google API access">
            Open Google Cloud Console, create project,
            create <strong>Credentials</strong> for web app and define <strong>OAuth content
                screen</strong>.
            Store ClientID and Secret to env variables.
        </ShinyPanel>
        <ShinyPanel did="3" title="Persistent store">
            This example is using Pinia with pinia-plugin-persistedstate plugin to
            store signed user information in cookies. You can find it in <strong>useAuthStore.ts</strong>.
        </ShinyPanel>
        <ShinyPanel did="4" title="Composable for fast user access">
            useAuth composable makes user properties easy to access.
            See <strong>useAuth.ts</strong>.
        </ShinyPanel>
        <ShinyPanel did="5" title="Google Sign-in Library">
            Create Nuxt client plugin to load and activate Google
            sign-in library.
            See <strong>GoogleAuth.client.ts</strong>.
        </ShinyPanel>
        <ShinyPanel did="6" title="Token validation API">
            Create access point for checking user token
            and receiving User information.
            See <strong>server/api/auth/google.ts</strong>.
        </ShinyPanel>
    </div>
</template>

<script setup lang="ts">
const { user } = useAuth();
// console.log('userEmail', user.value?.email);
</script>