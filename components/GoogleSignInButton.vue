<template>
    <div class="overflow-hidden rounded">
        <div ref="googleSignInButton">
            <UButton variant="ghost" color="black" :loading="!mounted || gsiLoaded === null"></UButton>
        </div>
    </div>
</template>

<script setup>
const { gsiLoaded } = useAuth();
const googleSignInButton = ref(null);
const mounted = ref(false);

console.log('SB gsiLoaded', gsiLoaded.value);

function initButton() {
    if (typeof window !== 'undefined' && window.google && gsiLoaded.value === true) {
        window.google.accounts.id.renderButton(
            googleSignInButton.value, // Vykreslení tlačítka do divu.
            {
                theme: 'filled_blue',
                size: 'large',
            }
        );
    }
}

watch(gsiLoaded, (value) => {
    if (gsiLoaded === true && mounted) {
        initButton();
    }
    if (gsiLoaded === false) {
        const toast = useToast();
        toast.add({ title: 'Error occured', description: 'Google Sign-in library not loaded properly!', color: 'red' })
    }
})
onMounted(() => {
    mounted.value = true;
    console.log('GoogleSignInButton onMounted');
    initButton();
});
</script>