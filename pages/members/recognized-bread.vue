<script lang="ts" setup>
const slides = [
    {
        title: "About Us",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];
</script>
<template>
    <general-carousel :items="slides" />
</template>
