<template>
    <div class="flex gap-2 items-center justify-between h-12  bg-slate-400 p-2">
        <div class="text-white text-xl font-bold">OneTapLogin</div>
        <div class="flex gap-2 items-center">
            <template v-if="user">
                <img class="w-8 h-8" :src="user.picture" />
                <!-- <div>{{ user.name }}</div> -->
                <button @click="logout">Logout</button>
            </template>
            <template v-else>
                <GoogleSignInButton />
            </template>
        </div>
    </div>

</template>

<script lang="ts" setup>
const { user, error, logout } = useAuth();
console.log('userEmail', user.value?.email);
</script>

<style></style>