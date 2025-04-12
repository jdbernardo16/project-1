<template>
    <NuxtLink
        href="#"
        class="block overflow-hidden rounded-lg border border-gray-200 bg-bg-light shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
        <img :src="imageUrl" alt="" class="aspect-video w-full object-cover" />
        <div class="p-4">
            <p class="mb-2 font-familjen text-sm text-text-medium">
                {{ date }}
            </p>
            <h3
                class="font-familjen text-lg font-semibold text-text-dark line-clamp-2"
            >
                {{ title }}
            </h3>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    imageUrl: string;
    date: string;
    title: string;
}>();
</script>
