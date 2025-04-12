<template>
    <div
        class="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-white/10 bg-pcci-blue shadow-md"
    >
        <img
            :src="imageUrl"
            :alt="title"
            class="h-full w-full object-cover"
            loading="lazy"
        />
        <div
            class="absolute left-0 right-0 top-0 bg-gradient-to-b from-black/50 to-transparent px-3 py-2 text-center"
        >
            <span
                class="font-jakarta text-xs font-bold uppercase text-text-light"
            >
                {{ title }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    imageUrl: string;
}>();
</script>
