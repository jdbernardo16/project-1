<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination as SwiperPagination } from "swiper/modules"; // Renamed to avoid conflict
import "swiper/css";
import "swiper/css/pagination";

// Array of image URLs for each slide
const slides = [
    {
        title: "Costume Contest",
        description: "Direct message Philippine Canine Club, Inc. to join!",
        image: "/images/hero-background.jpg",
    },
    {
        title: "Costume Contest",
        description: "Direct message Philippine Canine Club, Inc. to join!",
        image: "/images/hero-background.jpg",
    },
];
</script>
<template>
    <div
        class="relative h-[calc(100vh-88px)] overflow-hidden bg-cover bg-center w-full text-white"
    >
        <!-- Swiper Component for Text Content -->
        <Swiper
            :modules="[SwiperPagination]"
            :pagination="{
                clickable: true,
                el: '.swiper-pagination-custom',
            }"
            class="h-full w-full"
        >
            <SwiperSlide
                v-for="(slide, index) in slides"
                :key="index"
                class="relative"
            >
                <!-- Background Image -->
                <img
                    :src="slide.image"
                    alt="Slide Background"
                    class="w-full h-full object-cover"
                />
                <!-- Gradient Overlay -->
                <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pcci-blue/60 z-10"
                ></div>
                <!-- Text Content Container -->
                <div
                    class="z-20 flex h-full flex-col justify-end absolute top-0 left-0 w-full p-16"
                >
                    <!-- Text Content -->
                    <div>
                        <h1
                            class="font-familjen text-5xl font-bold leading-tight md:text-7xl"
                        >
                            {{ slide.title }}
                        </h1>
                        <p class="mt-3 max-w-sm text-base md:mt-4 md:max-w-md">
                            {{ slide.description }}
                        </p>
                    </div>
                    <div class="h-10"></div>
                </div>
            </SwiperSlide>

            <!-- Custom Pagination Element -->
            <div
                class="swiper-pagination-custom mt-8 flex justify-center gap-3"
            ></div>
        </Swiper>
        <div class="absolute -bottom-3 left-0 w-full z-30">
            <img src="/images/intersect.svg" alt="Intersect" class="w-full" />
        </div>
    </div>
</template>

<style scoped>
/* Scoped styles if needed, but relying on Tailwind */

/* Custom styles for Swiper pagination bullets */
:deep(.swiper-pagination-custom) {
    /* Position pagination at the bottom */
    bottom: 20px !important; /* Adjust as needed */
    position: absolute;
    width: 100%;
    left: 0; /* Ensure it spans the full width */
    text-align: center;
    z-index: 30; /* Ensure pagination is above images/overlays */
}

:deep(.swiper-pagination-bullet) {
    @apply rounded-full opacity-100 transition-colors duration-300;
    margin: 0 6px !important; /* Add spacing between dots */
    background-color: rgba(255, 255, 255, 0.5); /* Default bullet color */
}

:deep(.swiper-pagination-bullet-active) {
}
</style>
