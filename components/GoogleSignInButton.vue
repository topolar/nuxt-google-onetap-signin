<template>
    <div class="overflow-hidden rounded">
        <div ref="googleSignInButton">
            <UButton variant="ghost" color="black" :loading="true"></UButton>
        </div>
    </div>
</template>

<script setup>
const loading = ref(true);
const googleSignInButton = ref(null);

onMounted(() => {
    console.log('GoogleSignInButton onMounted');
    // Scripts should be loaded by GoogleAuthPlugin
    if (typeof window !== 'undefined' && window.google) {
        window.google.accounts.id.renderButton(
            googleSignInButton.value, // Vykreslení tlačítka do divu.
            {
                theme: 'filled_blue',
                size: 'large',
            }
        );
    } else {
        console.error('window or window.google not defined!');
        loading.value = false;
        const toast = useToast();
        toast.add({ title: 'Error occured', description: 'Google Sign-in library not loaded properly!', color: 'red' })
    }
});
</script>