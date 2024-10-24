<template>
    <div class="bg-white/30 dark:bg-black/20 top-0 sticky backdrop-blur">
        <div class="max-w-[1280px] mx-auto flex gap-2 items-center justify-between h-12 p-2">
            <div class="flex gap-2 items-center">
                <UIcon name="i-heroicons-cursor-arrow-ripple" class="w-5 h-5" />
                <div class="text-xl font-bold tracking-tighter">OneTapLogin</div>
            </div>
            <div class="flex gap-2 items-center">
                <template v-if="user">
                    <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
                        <UButton color="white" label="Account" trailing-icon="i-heroicons-chevron-down-20-solid">
                            <template #leading>
                                <UAvatar :src="user.picture" size="xs" />
                            </template>
                        </UButton>
                    </UDropdown>
                </template>
                <template v-else>
                    <GoogleSignInButton />
                </template>
            </div>
        </div>
    </div>


</template>

<script lang="ts" setup>
const { user, logout } = useAuth();

const items = [
    [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-left-end-on-rectangle',
        click: () => { open.value = false; logout() }
    }]
]
const open = ref(false)
</script>

<style></style>