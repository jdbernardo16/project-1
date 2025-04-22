<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation as SwiperNavigation, EffectCards } from "swiper/modules"; // Renamed to avoid conflict
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// Define the interface for slide items (even if there's only one for now)
interface IItems {
    image: string;
}

// Define props using TypeScript generic syntax
const props = defineProps<{ items: IItems[] }>();

// Unique class names for navigation elements for this specific carousel
const prevButtonClass = "grooming-cert-swiper-button-prev";
const nextButtonClass = "grooming-cert-swiper-button-next";
</script>

<template>
    <div class="relative w-full">
        <Swiper
            :modules="[SwiperNavigation, EffectCards]"
            :navigation="{
                nextEl: `.${nextButtonClass}`,
                prevEl: `.${prevButtonClass}`,
            }"
            :effect="'cards'"
            class="h-full w-full media-slider"
        >
            <SwiperSlide
                v-for="(slide, index) in props.items"
                :key="index"
                class="relative"
            >
                <!-- Background Image -->
                <div class="w-full aspect-[800/506]">
                    <img
                        :src="slide.image"
                        alt="Grooming Certification Slide"
                        class="w-full h-full object-cover"
                    />
                </div>
            </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Buttons -->
        <div class="w-fit ml-auto mt-6 flex gap-2">
            <button
                :class="prevButtonClass"
                class="bg-[#FFCB6B] hover:bg-[#ffd58a] text-white rounded-full p-3 transition-colors"
                aria-label="Previous slide"
            >
                <img
                    src="/icons/chevron-left.svg"
                    alt="Previous"
                    class="w-5 h-5"
                />
            </button>
            <button
                :class="nextButtonClass"
                class="bg-pcci-orange hover:bg-orange-400 text-white rounded-full p-3 transition-colors"
                aria-label="Next slide"
            >
                <img
                    src="/icons/chevron-right.svg"
                    alt="Next"
                    class="w-5 h-5"
                />
            </button>
        </div>
    </div>
</template>

<style scss>
/* Add any specific scoped styles if Tailwind isn't sufficient */

/* Ensure buttons are easily clickable */
:deep(.grooming-cert-swiper-button-prev),
:deep(.grooming-cert-swiper-button-next) {
    cursor: pointer;
}

/* Hide default Swiper arrows if they appear */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    display: none;
}
.media-slider {
    .swiper-slide {
        background-color: #fff;

        img {
            opacity: 0.5;
        }
    }

    .swiper-slide-active {
        img {
            opacity: 1;
        }
    }

    .swiper-pagination {
        position: relative;
        left: 40px !important;
        bottom: -36px;
    }
}

@media (max-width: 768px) {
    .media-slider {
        .swiper-pagination {
            bottom: -28px;
        }
    }
}
</style>
