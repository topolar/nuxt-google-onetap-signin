<template>
    <div class="overflow-hidden rounded">
        <div ref="googleSignInButton"></div>
    </div>
</template>

<script setup>
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
    }
});
</script>