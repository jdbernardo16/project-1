<template>
    <div class="flex items-start gap-3">
        <img :src="iconSrc" alt="Benefit icon" class="w-6 h-6 flex-shrink-0" />
        <p class="text-base text-text-dark font-familjen">
            {{ text }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true,
    },
    iconSrc: {
        type: String,
        default: "/icons/paw.svg",
    },
});
</script>
