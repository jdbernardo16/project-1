<script setup lang="ts">
import EventCard from "./EventCard.vue";
import BaseButton from "./BaseButton.vue";

const events = [
    {
        day: "17",
        monthYear: "Jan 2024",
        title: "Introduction to professional dog grooming",
    },
    {
        day: "12",
        monthYear: "March 2024",
        title: "Level C Qualification Seminar",
    },
    {
        day: "21",
        monthYear: "May 2024",
        title: "4th PCCI grooming certification and competition",
    },
    {
        day: "16-17",
        monthYear: "July 2024",
        title: "Introduction to professional dog grooming",
    },
    {
        day: "20-21",
        monthYear: "August 2024",
        title: "Introduction to professional dog grooming",
    },
];
</script>

<template>
    <div class="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-white">
        <h3 class="text-3xl font-bold text-pcci-blue-dark mb-8">
            Grooming Calendar 2024
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <!-- Left Column: Background Image -->
            <div
                class="bg-[url('/images/grooming-calendar-image.png')] bg-cover bg-center rounded-lg h-96"
            ></div>

            <!-- Right Column: Event List -->
            <div class="h-96 overflow-y-auto space-y-1 pr-2">
                <!-- Added pr-2 for scrollbar spacing -->
                <EventCard
                    v-for="(event, index) in events"
                    :key="index"
                    :day="event.day"
                    :monthYear="event.monthYear"
                    :title="event.title"
                    :highlighted="index === 0"
                />
            </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end items-center gap-4 mt-8">
            <BaseButton
                text="View all"
                variant="secondary"
                icon="/icons/arrow-up-right.svg"
            />
            <BaseButton text="Register my dog now" variant="primary" />
        </div>
    </div>
</template>

<style scoped>
/* Custom scrollbar styling (optional, Tailwind doesn't directly style scrollbars easily) */
/* For Webkit browsers */
div[class*="overflow-y-auto"]::-webkit-scrollbar {
    width: 6px;
}

div[class*="overflow-y-auto"]::-webkit-scrollbar-track {
    background: #f1f1f1; /* Or use a theme color */
    border-radius: 3px;
}

div[class*="overflow-y-auto"]::-webkit-scrollbar-thumb {
    background: #888; /* Or use a theme color */
    border-radius: 3px;
}

div[class*="overflow-y-auto"]::-webkit-scrollbar-thumb:hover {
    background: #555; /* Or use a theme color */
}

/* For Firefox */
div[class*="overflow-y-auto"] {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1; /* thumb track */
}
</style>
