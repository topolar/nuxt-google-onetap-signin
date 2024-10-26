<template>
    <div ref="capture" class="relative shiny-capture">
        <div
            class="w-[340px] h-full p-4 overflow-hidden border border-white/30 rounded-lg bg-white/50 dark:bg-black/30 shadow">
            <div class="flex gap-2">
                <div class="text-3xl">{{ did }}.</div>
                <div>
                    <div class="font-bold">{{ title }}</div>
                    <div class="text-justify">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <div ref="overlay" class="shiny-overlay rounded-lg bg-wheit/70 dark:bg-white/30"></div>
    </div>
</template>

<script lang="ts" setup>


const props = defineProps<{ title: string, did: string }>();
const capture = ref<HTMLElement>();
const overlay = ref<HTMLElement>();
const mouseMove = (event: MouseEvent) => {
    if (!capture.value || !overlay.value) return;
    const x = event.pageX - capture.value.offsetLeft;
    const y = event.pageY - capture.value.offsetTop;
    const xc = x - capture.value.offsetWidth / 2;
    const yc = y - capture.value.offsetHeight / 2;
    // const xr = Math.max(-20, Math.min(20, xc / 20));
    // const yr = Math.max(-20, Math.min(20, yc / 20));
    const len = Math.sqrt(xc * xc + yc * yc);
    const scale = 1 + (1 - Math.min(1, len / 200)) / 20;
    // console.log('scale ' + props.did, scale, len, xr)

    capture.value.style.setProperty("--shiny-scale", `${scale}`);
    // capture.value.style.setProperty("--shiny-rx", `${xr}deg`)
    // capture.value.style.setProperty("--shiny-ry", `${-yr}deg`)

    overlay.value.style.setProperty("--shiny-x", `${x}px`)
    overlay.value.style.setProperty("--shiny-y", `${y}px`)
}

onMounted(() => {
    window.addEventListener("mousemove", mouseMove)
})

onUnmounted(() => {
    window.removeEventListener("mousemove", mouseMove)
})
</script>

<style>
.shiny-overlay {
    --shiny-size: 25rem;
    --shiny-x: 10000px;
    --shiny-y: 10000px;
    position: absolute;
    inset: 0;
    pointer-events: none;
    user-select: none;
    opacity: 1;
    mask: radial-gradient(var(--shiny-size) var(--shiny-size) at var(--shiny-x) var(--shiny-y), white 1%, transparent 50%);
    transition: 400ms mask ease;
    mix-blend-mode: lighten;
    will-change: mask;
}

.shiny-capture {
    --shiny-scale: 1;
    /* --shiny-rx: 0deg; */
    /* --shiny-ry: 0deg; */
    scale: var(--shiny-scale);
    transition: 100ms scale ease;
    /* transform: perspective(2000px) rotate3d(0, 1, 0, var(--shiny-rx)) rotate3d(1, 0, 0, var(--shiny-ry)); */
    /* transform:  rotate3d(1, 0, 0, var(--shiny-rx)); */
}
</style>