<script setup lang="ts">
import AnnouncementCard from "./AnnouncementCard.vue";
import BaseButton from "./BaseButton.vue";

const announcements = [
    {
        imageUrl: "/images/announcement-card-1.png",
        date: "21 May 2024",
        title: "Please be aware that fake PCCI accounts are circulating",
    },
    {
        imageUrl: "/images/announcement-card-2.png",
        date: "24 September 2024",
        title: "Philippine Puppy Champion",
    },
    {
        imageUrl: "/images/announcement-card-3.png",
        date: "9 May 2024",
        title: "All walk-in registrations will be at the PCCI office starting May 20, 2024",
    },
];
</script>

<template>
    <div
        class="bg-pcci-blue px-4 sm:px-8 md:px-16 lg:px-32 py-16 relative overflow-hidden"
    >
        <!-- Decorative Patterns -->
        <img
            src="/images/announcement-deco-2.svg"
            alt=""
            class="absolute top-0 left-0 w-32 h-auto pointer-events-none z-0 opacity-50"
            aria-hidden="true"
        />
        <img
            src="/images/announcement-deco-3.svg"
            alt=""
            class="absolute top-10 right-5 w-48 h-auto pointer-events-none z-0 opacity-50"
            aria-hidden="true"
        />
        <img
            src="/images/announcement-deco-3.svg"
            alt=""
            class="absolute bottom-5 left-10 w-40 h-auto pointer-events-none z-0 opacity-50"
            aria-hidden="true"
        />
        <img
            src="/images/announcement-deco-3.svg"
            alt=""
            class="absolute bottom-10 right-10 w-24 h-auto pointer-events-none z-0 opacity-50"
            aria-hidden="true"
        />

        <div
            class="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8"
        >
            <!-- Text Content -->
            <div class="text-text-light max-w-xl">
                <h2
                    class="text-sm font-semibold uppercase tracking-widest text-pcci-yellow mb-2"
                >
                    {/* Approx style_HTSMGT */} ANNOUNCEMENTS
                </h2>
                <h3 class="text-3xl md:text-4xl font-bold mb-3">
                    {/* Approx style_8MLG58 */} Updates and important
                    information
                </h3>
                <p class="text-base md:text-lg mb-6">
                    {/* Approx style_7Z6MYJ */} Stay updated on local offers and
                    resources that matter to you.
                </p>
            </div>
            <!-- View All Button -->
            <div class="mt-4 lg:mt-0 lg:ml-8 flex-shrink-0">
                <BaseButton
                    text="View all"
                    variant="secondary"
                    icon="/icons/arrow-up-right.svg"
                />
            </div>
        </div>

        <!-- Announcement Cards List -->
        <div
            class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
            <AnnouncementCard
                v-for="(item, index) in announcements"
                :key="index"
                :image-url="item.imageUrl"
                :date="item.date"
                :title="item.title"
            />
        </div>
    </div>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
