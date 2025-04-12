<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
    <div class="bg-offwhite">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>
