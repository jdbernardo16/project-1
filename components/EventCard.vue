<script setup lang="ts">
import { computed } from "vue";

interface Props {
    day: string;
    monthYear: string;
    title: string;
    highlighted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    highlighted: false,
});

// Base classes + conditional classes for the main card container
const cardClasses = computed(() => [
    "flex items-stretch rounded-lg overflow-hidden", // Added rounded corners and overflow hidden
    props.highlighted
        ? "bg-pcci-blue text-text-light"
        : "bg-bg-gray text-text-dark",
]);

// Base classes + conditional classes for the date block
const dateBlockClasses = computed(() => [
    "flex flex-col justify-center items-center w-28 shrink-0 px-4 py-3 text-center", // Adjusted width, added shrink-0, adjusted padding
    props.highlighted
        ? "bg-bg-light text-pcci-blue"
        : "bg-gray-200 text-text-dark", // Conditional background and text
]);

// Classes for the day text
const dayClasses = computed(() => [
    "block font-familjen text-3xl font-bold leading-none", // Style from Figma hint style_7JERTB
    // Text color is handled by dateBlockClasses
]);

// Classes for the month/year text
const monthYearClasses = computed(() => [
    "block font-familjen text-base leading-tight mt-1", // Style from Figma hint style_CJP9C4, added spacing
    // Text color is handled by dateBlockClasses
]);

// Classes for the title block container
const titleBlockClasses = computed(() => [
    "flex items-center flex-1 px-6 py-4", // Takes remaining space, padding
    // Text color is handled by cardClasses
]);

// Classes for the title text
const titleClasses = computed(() => [
    "font-familjen text-lg font-medium", // Style from Figma hint style_MZ0XM7
    // Text color is handled by cardClasses
]);
</script>

<template>
    <div :class="cardClasses">
        <div :class="dateBlockClasses">
            <span :class="dayClasses">{{ day }}</span>
            <span :class="monthYearClasses">{{ monthYear }}</span>
        </div>
        <div :class="titleBlockClasses">
            <p :class="titleClasses">{{ title }}</p>
        </div>
    </div>
</template>

<style scoped>
/* Ensure theme variables like --color-pcci-blue, --color-text-light, --color-bg-gray, */
/* --color-text-dark, --color-bg-light, and --font-familjen are correctly mapped */
/* in your Tailwind configuration (tailwind.config.js or main.css). */
</style>
