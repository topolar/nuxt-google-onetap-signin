<template>
    <div class="flex gap-2 items-center justify-center mt-4">
        <UIcon name="i-heroicons-cursor-arrow-ripple" class="w-12 h-12" />
        <div class="text-3xl font-bold tracking-tighter">OneTapLogin</div>
    </div>
    <div v-if="user" class="flex flex-col gap-2">
        User content here!
    </div>
    <div v-else>
        <div class="max-w-96 mx-auto my-8">
            <UAlert icon="i-heroicons-command-line" color="primary" variant="solid" title="User not signed-in!"
                description="Use one-tap login dialog or button" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { user } = useAuth();
// console.log('userEmail', user.value?.email);
</script>