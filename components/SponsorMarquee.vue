<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules"; // Removed FreeMode
// Removed import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";

defineProps({
    data: {
        type: Object,
        default: null,
    },
});

const modules = [Autoplay, Pagination]; // Removed FreeMode

// Partner logos (replace with your actual image paths)
const sponsorLogos = [
    {
        src: "/images/sponsor-logo-1.png",
        alt: "Partner Logo 1",
    },
    {
        src: "/images/sponsor-logo-2.png",
        alt: "Partner Logo 2",
    },
    {
        src: "/images/sponsor-logo-3.png",
        alt: "Partner Logo 3",
    },
    {
        src: "/images/sponsor-logo-4.png",
        alt: "Partner Logo 4",
    },
    {
        src: "/images/sponsor-logo-5.png",
        alt: "Partner Logo 5",
    },
    {
        src: "/images/sponsor-logo-6.png",
        alt: "Partner Logo 6",
    },
    {
        src: "/images/sponsor-logo-1.png",
        alt: "Partner Logo 1",
    },
    {
        src: "/images/sponsor-logo-2.png",
        alt: "Partner Logo 2",
    },
    {
        src: "/images/sponsor-logo-3.png",
        alt: "Partner Logo 3",
    },
    {
        src: "/images/sponsor-logo-4.png",
        alt: "Partner Logo 4",
    },
    {
        src: "/images/sponsor-logo-5.png",
        alt: "Partner Logo 5",
    },
    {
        src: "/images/sponsor-logo-6.png",
        alt: "Partner Logo 6",
    },
];
</script>

<template>
    <div class="w-full py-16 bg-offwhite">
        <Swiper
            :modules="modules"
            :slides-per-view="5"
            :loop="true"
            :autoplay="{ delay: 0, disableOnInteraction: false }"
            :speed="5000"
        >
            <SwiperSlide
                v-for="(logo, index) in sponsorLogos"
                :key="index"
                class="relative"
            >
                <img class="h-[120px]" :src="logo.src" alt="Partner Logo" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
:deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
}
</style>
