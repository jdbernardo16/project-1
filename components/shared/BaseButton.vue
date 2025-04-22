<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { NuxtLink } from "#components";

interface Props {
    tag?: "button" | "a" | "nuxt-link";
    to?: string | Record<string, unknown>; // Route location for nuxt-link
    href?: string; // URL for 'a' tag
    variant?: "primary" | "secondary" | "tertiary" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    iconLeft?: string;
    iconRight?: string;
    fullWidth?: boolean;
    ariaLabel?: string; // For accessibility, especially for icon-only buttons
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
    to: undefined,
    href: undefined,
    variant: "primary",
    size: "md",
    disabled: false,
    iconLeft: undefined,
    iconRight: undefined,
    fullWidth: false,
    ariaLabel: undefined,
});

const componentType = computed(() => {
    if (props.tag === "nuxt-link" && props.to) {
        return NuxtLink;
    }
    if (props.tag === "a" && props.href) {
        return "a";
    }
    return "button";
});

const commonClasses = computed(() => [
    "inline-flex items-center justify-center font-familjen font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150",
    {
        "w-full": props.fullWidth,
        "disabled:opacity-50 disabled:cursor-not-allowed": props.disabled,
    },
]);

const variantClasses = computed(() => {
    switch (props.variant) {
        case "secondary":
            return "!p-0 text-pcci-orange hover:text-orange-600";
        case "tertiary":
            return "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 focus:ring-gray-300";
        case "ghost": // Example: Pagination arrows
            return "border border-transparent text-gray-500 hover:bg-gray-100 focus:ring-gray-300";
        case "primary": // Default
        default:
            return "bg-pcci-orange text-black hover:bg-orange-500 focus:ring-pcci-orange";
    }
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case "sm": // Smaller padding/text if needed
            return "px-3 py-1.5 text-sm";
        case "lg": // Larger padding/text if needed
            return "px-8 py-4 text-lg";
        case "md": // Default - matches existing buttons
        default:
            return "px-6 py-3 text-base"; // Adjusted from calendar for consistency
    }
});

// Specific classes for icon-only buttons (like pagination arrows)
const iconOnlySizeClasses = computed(() => {
    if (!slots.default && (props.iconLeft || props.iconRight)) {
        switch (props.size) {
            case "sm":
                return "size-8";
            case "lg":
                return "size-12";
            case "md":
            default:
                return "size-9"; // Matches pagination arrows
        }
    }
    return "";
});

const iconSizeClass = computed(() => {
    switch (props.size) {
        case "sm":
            return "size-4";
        case "lg":
            return "size-6";
        case "md":
        default:
            return "size-5";
    }
});

const slots = useSlots();

const buttonAttributes = computed(() => {
    const attrs: Record<string, any> = {};
    if (componentType.value === "button") {
        attrs.type = "button";
        attrs.disabled = props.disabled;
    }
    if (componentType.value === "a") {
        attrs.href = props.href;
        attrs.target = "_blank"; // Default for external links
        attrs.rel = "noopener noreferrer";
    }
    if (componentType.value === NuxtLink) {
        attrs.to = props.to;
    }
    if (props.ariaLabel) {
        attrs["aria-label"] = props.ariaLabel;
    }
    return attrs;
});
</script>

<template>
    <component
        :is="componentType"
        :class="[
            commonClasses,
            variantClasses,
            sizeClasses,
            iconOnlySizeClasses, // Apply specific size for icon-only
        ]"
        v-bind="buttonAttributes"
    >
        <Icon
            v-if="iconLeft"
            :name="iconLeft"
            :class="[iconSizeClass, { 'mr-2': !!slots.default }]"
            aria-hidden="true"
        />
        <slot />
        <Icon
            v-if="iconRight"
            :name="iconRight"
            :class="[iconSizeClass, { 'ml-2': !!slots.default }]"
            aria-hidden="true"
        />
    </component>
</template>
