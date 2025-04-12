<template>
    <div class="relative bg-pcci-blue px-32 py-16 overflow-hidden">
        <!-- Decorative Elements -->
        <img
            src="/images/announcement-deco-2.svg"
            alt=""
            class="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-50 pointer-events-none"
            width="300"
        />
        <img
            src="/images/announcement-deco-3.svg"
            alt=""
            class="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-50 pointer-events-none"
            width="400"
        />

        <div class="relative grid grid-cols-2 gap-16 items-center">
            <!-- Left Column: Swiper Carousel -->
            <div class="relative w-full aspect-[4/3]">
                <Swiper
                    :modules="[SwiperNavigation, SwiperPagination]"
                    :pagination="{
                        clickable: true,
                        el: '.swiper-pagination-custom',
                    }"
                    :navigation="{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }"
                    class="h-full w-full rounded-lg shadow-lg"
                >
                    <SwiperSlide v-for="(slide, index) in slides" :key="index">
                        <img
                            :src="slide.image"
                            alt="Announcement Image"
                            class="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                </Swiper>

                <!-- Custom Controls Container -->
                <div
                    class="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center"
                >
                    <!-- Custom Pagination -->
                    <div class="swiper-pagination-custom flex space-x-2"></div>

                    <!-- Custom Navigation Buttons -->
                    <div class="flex space-x-2">
                        <button
                            class="swiper-button-prev-custom p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                        >
                            <img
                                src="/icons/chevron-left.svg"
                                alt="Previous"
                                class="h-5 w-5"
                            />
                        </button>
                        <button
                            class="swiper-button-next-custom p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                        >
                            <img
                                src="/icons/chevron-right.svg"
                                alt="Next"
                                class="h-5 w-5"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right Column: Text Content Area -->
            <div class="relative flex flex-col text-light font-familjen z-0">
                <!-- Background Overlay Image -->
                <div class="absolute inset-0 z-[-1]">
                    <img
                        src="/images/overlay-dog.png"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                </div>

                <img
                    src="/images/sponsor-logo-3.png"
                    alt="FCI Sponsor Logo"
                    class="h-12 w-auto mb-6 self-start"
                />
                <h2 class="text-5xl font-bold mb-6">
                    FCI – Proud Sponsor of the Elite Paws Expo
                </h2>
                <p class="text-base">
                    Join us at the most prestigious event of the year! FCI is
                    thrilled to support the Elite Paws Expo, celebrating the
                    finest canine companions and the dedicated community
                    surrounding them. Discover excellence, passion, and the
                    future of dog shows.
                    <!-- Updated Description -->
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    Navigation as SwiperNavigation,
    Pagination as SwiperPagination,
} from "swiper/modules"; // Renamed imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Array of image URLs for the carousel
const slides = [
    { image: "/images/announcement-carousel-1.png" },
    { image: "/images/announcement-carousel-2.png" },
    { image: "/images/announcement-carousel-3.png" },
];
</script>

<style scoped>
/* Using theme variables via Tailwind utility classes */
.bg-pcci-blue {
    background-color: var(--color-pcci-blue);
}
.text-text-light {
    color: var(--color-text-light);
}
.font-familjen {
    font-family: var(--font-familjen);
}
.text-5xl {
    font-size: var(--text-5xl);
    line-height: 1.2; /* Adjust as needed */
}
.text-base {
    font-size: var(--text-base);
    line-height: 1.6; /* Adjust as needed */
}

/* Custom Swiper Control Styles */
:deep(.swiper-pagination-custom) {
    /* No extra positioning needed as it's placed via flexbox */
}

:deep(.swiper-pagination-bullet) {
    @apply rounded-full transition-colors duration-300 cursor-pointer;
    display: block; /* Ensure bullets are blocks */
}

:deep(.swiper-pagination-bullet-active) {
}

/* Hide default Swiper elements if necessary, though using custom classes should prevent conflicts */
:deep(.swiper-button-next),
:deep(.swiper-button-prev),
:deep(.swiper-pagination) {
    /* display: none; */ /* Uncomment if default elements appear */
}

/* Ensure custom buttons are interactive */
.swiper-button-prev-custom,
.swiper-button-next-custom {
    /* Styles already applied via Tailwind */
}

/* Style disabled state if needed */
:deep(.swiper-button-disabled) {
    @apply opacity-50 cursor-not-allowed;
}
</style>
