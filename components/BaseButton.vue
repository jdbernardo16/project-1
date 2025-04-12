<script setup lang="ts">
import { computed } from "vue";

interface Props {
    text: string;
    to?: string;
    variant?: "primary" | "secondary";
    icon?: string; // Expecting full path like '/icons/arrow-up-right.svg'
    iconPosition?: "left" | "right";
}

const props = withDefaults(defineProps<Props>(), {
    variant: "primary",
    iconPosition: "right",
});

const baseClasses =
    "inline-flex items-center justify-center gap-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pcci-orange cursor-pointer"; // Added focus styles for accessibility

const variantClasses = computed(() => {
    switch (props.variant) {
        case "secondary":
            // Link-style: orange text, underline on hover, icon
            return "text-pcci-orange font-medium hover:underline text-base"; // Assuming text-base from theme
        case "primary":
        default:
            // Button-style: orange bg, dark text, padding, rounded
            return "bg-pcci-orange text-text-dark font-medium px-6 py-4 hover:opacity-90 text-base"; // Assuming text-base, radius-md from theme
    }
});

const iconClasses = computed(() => {
    return props.iconPosition === "left" ? "flex-row" : "flex-row-reverse";
});

// Combine all classes
const combinedClasses = computed(() => [
    baseClasses,
    variantClasses.value,
    props.icon ? iconClasses.value : "",
]);
</script>

<template>
    <NuxtLink v-if="to" :to="to" :class="combinedClasses">
        <img
            v-if="props.icon && props.iconPosition === 'left'"
            :src="props.icon"
            alt=""
            class="h-4 w-4"
            aria-hidden="true"
        />
        <span>{{ text }}</span>
        <img
            v-if="props.icon && props.iconPosition === 'right'"
            :src="props.icon"
            alt=""
            class="h-4 w-4"
            aria-hidden="true"
        />
    </NuxtLink>
    <button v-else type="button" :class="combinedClasses">
        <img
            v-if="props.icon && props.iconPosition === 'left'"
            :src="props.icon"
            alt=""
            class="h-4 w-4"
            aria-hidden="true"
        />
        <span>{{ text }}</span>
        <img
            v-if="props.icon && props.iconPosition === 'right'"
            :src="props.icon"
            alt=""
            class="h-4 w-4"
            aria-hidden="true"
        />
    </button>
</template>

<style scoped>
/* Scoped styles can be added if needed, but Tailwind should handle most cases */
/* Using theme variables directly in Tailwind classes */
.bg-pcci-orange {
    background-color: var(--color-pcci-orange);
}
.text-pcci-orange {
    color: var(--color-pcci-orange);
}
.text-text-dark {
    color: var(--color-text-dark);
}
.rounded-md {
    border-radius: var(
        --radius-md,
        0.375rem
    ); /* Use theme variable with fallback */
}
.text-base {
    font-size: var(--text-base, 1rem); /* Use theme variable with fallback */
    line-height: var(
        --text-base-leading,
        1.5rem
    ); /* Optional: Add line-height if defined */
}
.font-medium {
    font-weight: 500; /* Standard Tailwind value */
}
/* Add focus ring color */
.focus-visible\:ring-pcci-orange:focus-visible {
    --tw-ring-color: var(--color-pcci-orange);
}
</style>
