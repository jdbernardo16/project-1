<script setup lang="ts">
import { computed } from "vue";
import MagazineCover from "./MagazineCover.vue";
import BaseButton from "./BaseButton.vue";
import FlipBook from "@gladesinger/flipbook-vue3";
import "@gladesinger/flipbook-vue3/dist/style.css";

// Placeholder data for magazine covers based on available images
const magazines = [
    { title: "4TH QUARTER 2023", imageUrl: "/images/magazine-cover-5.png" },
    { title: "3RD QUARTER 2023", imageUrl: "/images/magazine-cover-4.png" },
    { title: "2ND QUARTER 2023", imageUrl: "/images/magazine-cover-3.png" },
    { title: "1ST QUARTER 2023", imageUrl: "/images/magazine-cover-2.png" },
    // Add more pages as needed, potentially including the cover multiple times or specific page images
    {
        title: "Page 2 Placeholder",
        imageUrl: "/images/magazine-flipbook-page2.png",
    },
    { title: "Page 3 Placeholder", imageUrl: "/images/magazine-cover-5.png" }, // Reusing images for example
    { title: "Page 4 Placeholder", imageUrl: "/images/magazine-cover-4.png" },
];

// Extract image URLs for the FlipBook component
// The first page (cover) might need special handling depending on desired behavior (e.g., null for single cover)
// For this example, we'll just use the cover image as the first page.
const flipbookPages = computed(() => [
    "/images/magazine-flipbook-cover.png", // Cover page
    ...magazines.map((mag) => mag.imageUrl), // Subsequent pages from the magazines array
    // Add more static page URLs if needed
    "/images/magazine-flipbook-page2.png",
]);
</script>

<template>
    <div class="px-4 md:px-16 lg:px-32 py-16 bg-background-alt">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
                Latest Online Magazine
            </h2>
            <p class="text-lg text-text-secondary max-w-2xl mx-auto">
                Stay updated on local offers and resources that matter to you.
            </p>
        </div>

        <div
            class="flex flex-col lg:flex-row items-center lg:items-start gap-12 xl:gap-24"
        >
            <div class="w-full lg:w-1/2 xl:w-2/5 flex-shrink-0 relative">
                <!-- Replace placeholder image with FlipBook component -->
                <div class="slider-wrap w-full relative">
                    <FlipBook
                        v-slot="flipbook"
                        class="flipbook"
                        :pages="flipbookPages"
                        :gloss="0"
                        :click-to-zoom="true"
                        alt="Book slide"
                    >
                        <button
                            aria-label="Previous"
                            class="flipbook-button button-prev"
                            :class="{ disabled: !flipbook.canFlipLeft }"
                            @click="flipbook.flipLeft"
                        >
                            <IconArrow />
                        </button>
                        <button
                            aria-label="Next"
                            class="flipbook-button button-next"
                            :class="{ disabled: !flipbook.canFlipRight }"
                            @click="flipbook.flipRight"
                        >
                            <IconArrow />
                        </button>
                    </FlipBook>
                </div>
            </div>

            <div class="w-full lg:w-1/2 xl:w-3/5">
                <!-- <div class="flex overflow-x-auto space-x-6 pb-4 mb-8">
                    <MagazineCover
                        v-for="(mag, index) in magazines"
                        :key="index"
                        :title="mag.title"
                        :image-url="mag.imageUrl"
                        class="flex-shrink-0 w-48"
                    />
                </div> -->

                <div class="flex justify-center lg:justify-end mt-8">
                    <BaseButton
                        text="View all"
                        variant="secondary"
                        icon="/icons/arrow-up-right.svg"
                        icon-position="right"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom scrollbar styling for better appearance */
.overflow-x-auto::-webkit-scrollbar {
    height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: var(--color-bg-gray); /* Use theme variable */
    border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: var(--color-text-medium); /* Use theme variable */
    border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-dark); /* Use theme variable */
}

/* Hide scrollbar for Firefox */
.overflow-x-auto {
    scrollbar-width: thin;
    scrollbar-color: var(--color-text-medium) var(--color-bg-gray); /* Use theme variables */
}

.slider-wrap {
    position: relative;
    width: 100vw;
    max-width: 1120px;
    margin: 0 auto;
}

.slider-wrap .flipbook {
    width: 100%;
    height: 410px;
    display: block;
}

.slider-wrap .flipbook img {
    max-width: 100%;
}

.slider-wrap .flipbook-button {
    position: absolute;
    top: 50%;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    outline: none;
}

.slider-wrap .flipbook-button.button-prev {
    left: -64px;
    transform: translateY(-50%);
}
.slider-wrap .flipbook-button.button-next {
    right: -64px;
    transform: rotate(180deg) translateY(50%);
}
.slider-wrap .flipbook-button.disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
}
</style>
