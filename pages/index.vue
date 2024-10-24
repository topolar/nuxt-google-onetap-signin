<template>
    <h1>One Tap Login Example</h1>
    <div v-if="user" class="flex flex-col gap-2">
        User content here!
    </div>
    <div v-else>
        No user logged in!
    </div>
</template>

<script setup lang="ts">
    const { user } = useAuth();
    console.log('userEmail', user.value?.email);
</script>