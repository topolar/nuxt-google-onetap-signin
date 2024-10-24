<template>
    <div class="bg-gradient-to-tr from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-700">
        <PageHeader />
        <div class="max-w-[1280px] mx-auto">
            <div class="p-2 min-h-[80vh]">
                <slot></slot>
            </div>
        </div>
        <PageFooter />
    </div>
</template>