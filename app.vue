<template>
    <NuxtLoadingIndicator />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <UNotifications />
</template>

<script setup lang="ts">
import { useAuthStore } from './store/useAuthStore';

const toast = useToast();
const store = useAuthStore();
const { error } = storeToRefs(store);

watch(error, (value) => {
    if (value) {
        toast.add({ title: 'Error occured', description: value, color: 'red' })
        store.setError('');
    }
});
</script>

<style>
body {
    font-family: "Gabarito", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
</style>
