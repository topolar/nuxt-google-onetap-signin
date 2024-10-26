<template>
    <div class="bg-white/30 dark:bg-black/20 py-8 mt-16">
        <div
            class="max-w-[1280px] mx-auto text-center text-gray-600 dark:text-gray-300 min-h-48 flex items-start justify-between">
            <div>© 2024 Miroslav Topolář</div>
            <div>
                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                        variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                    <template #fallback>
                        <div class="w-8 h-8" />
                    </template>
                </ClientOnly>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<style></style>