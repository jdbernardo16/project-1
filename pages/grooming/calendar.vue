<script lang="ts" setup>
import BaseTextInput from "@/components/shared/BaseTextInput.vue";
import BaseButton from "@/components/shared/BaseButton.vue";

// Placeholder data for events and pagination
const events = [
    {
        id: 1,
        date: "March 12-13",
        title: "Introduction to Professional Dog Grooming",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "register", // 'register' or 'results'
    },
    {
        id: 2,
        date: "March 12-13",
        title: "Level C Qualification Seminar",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "register",
    },
    {
        id: 3,
        date: "March 12-13",
        title: "4th PCCI Grooming Certification and Competition",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
    {
        id: 4,
        date: "March 12-13",
        title: "PCCI National Dog Show",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
    {
        id: 5,
        date: "March 12-13",
        title: "PCCI Obedience Trials",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
    {
        id: 6,
        date: "March 12-13",
        title: "Canine Good Citizen (CGC) Program",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
    {
        id: 7,
        date: "March 12-13",
        title: "PCCI Canine Grooming Expo",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
    {
        id: 8,
        date: "March 12-13",
        title: "Professional Groomers' Challenge",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
    {
        id: 9,
        date: "March 12-13",
        title: "Creative Canine Grooming Showcase",
        time: "9:00 AM - 12:00 PM",
        location: "Smart Araneta Coliseum",
        judges: "Micky Sung (Taiwan) | Christy Wang (China)",
        image: "/images/grooming-calendar-image.png", // Placeholder image
        status: "results",
    },
];

const currentPage = ref(1);
const totalPages = ref(3); // Example total pages

const slides = [
    {
        title: "Grooming Certification",
        description:
            "Register for Grooming Certification - PH Circuit 2024 now!",
        image: "/images/hero-background.jpg",
        buttonText: "Register Now",
        buttonLink: "/grooming/certification",
    },
];
</script>

<template>
    <general-carousel :items="slides" />
    <section class="px-4 py-16 sm:px-8 md:px-16 lg:px-32 sm:py-20">
        <div class="mx-auto max-w-[1000px]">
            <!-- Month/Year Navigation (Hidden on mobile, shown md and up) -->
            <div
                class="mb-8 hidden items-center justify-between space-x-8 rounded-md bg-pcci-blue px-8 py-4 md:flex"
            >
                <div
                    class="flex items-center gap-6 flex-1 justify-between px-6"
                >
                    <button aria-label="Previous month">
                        <Icon
                            name="mdi:chevron-left"
                            class="!size-6 text-white"
                        />
                    </button>
                    <span class="font-familjen text-lg text-white">August</span>
                    <button aria-label="Next month">
                        <Icon
                            name="mdi:chevron-right"
                            class="!size-6 text-white"
                        />
                    </button>
                </div>
                <div class="flex items-center gap-3">
                    <span class="font-familjen text-lg text-white">2025</span>
                    <Icon name="mdi:chevron-down" class="!size-6 text-white" />
                </div>
            </div>

            <!-- Title, Search, Filter -->
            <div class="mb-8">
                <h2
                    class="font-familjen text-2xl font-bold text-black md:text-3xl mb-8"
                >
                    August 2025
                    <!-- Display current month/year -->
                </h2>
                <div
                    class="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 w-full"
                >
                    <div class="relative flex-1">
                        <base-text-input
                            name="search"
                            placeholder="Search here"
                            class="h-12"
                        />
                        <Icon
                            name="fluent:search-24-regular"
                            class="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-500"
                        />
                    </div>
                    <base-button
                        variant="tertiary"
                        size="md"
                        icon-right="mdi:filter-variant"
                        class="h-12"
                    >
                        Filters
                    </base-button>
                </div>
            </div>

            <!-- Event Grid -->
            <div>
                <div
                    v-for="event in events"
                    :key="event.id"
                    class="flex overflow-hidden bg-white shadow-sm p-6 border-b last:border-0 border-neutral/10"
                >
                    <div class="aspect-[254/234] w-[254px]">
                        <img
                            :src="event.image"
                            :alt="event.title"
                            class="h-full w-full object-cover"
                        />
                    </div>
                    <div class="flex flex-1 flex-col justify-between p-6">
                        <div>
                            <p class="mb-1 text-xs font-medium text-gray-600">
                                {{ event.date }}
                            </p>
                            <h3
                                class="mb-4 font-familjen text-lg font-bold leading-tight text-black"
                            >
                                {{ event.title }}
                            </h3>
                            <div
                                class="mb-4 grid grid-cols-2 text-sm text-gray-700 gap-3"
                            >
                                <div>
                                    <div class="flex items-center space-x-1">
                                        <Icon
                                            name="mdi:clock-outline"
                                            class="size-4 text-gray-500"
                                        />
                                        <span class="text-xs">Time</span>
                                    </div>
                                    <span
                                        class="font-medium text-gray-800 pl-1.5"
                                    >
                                        {{ event.time }}
                                    </span>
                                </div>
                                <div>
                                    <div class="flex items-center space-x-1">
                                        <Icon
                                            name="mdi:map-marker-outline"
                                            class="size-4 text-gray-500"
                                        />
                                        <span class="text-xs">Location</span>
                                    </div>
                                    <span
                                        class="font-medium text-gray-800 pl-1.5"
                                    >
                                        {{ event.location }}
                                    </span>
                                </div>

                                <div>
                                    <div class="flex items-center space-x-1">
                                        <Icon
                                            name="mdi:account-outline"
                                            class="size-4 text-gray-500"
                                        />
                                        <span class="text-xs">Judge/s</span>
                                    </div>
                                    <span
                                        class="font-medium text-gray-800 pl-1.5"
                                    >
                                        {{ event.judges }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <base-button
                            v-if="event.status === 'register'"
                            variant="primary"
                            size="md"
                            class="mt-4 w-fit"
                        >
                            Register Now
                        </base-button>
                        <base-button
                            v-else-if="event.status === 'results'"
                            tag="a"
                            href="#"
                            variant="secondary"
                            size="md"
                            icon-right="mdi:arrow-top-right"
                            class="mt-4 w-fit"
                        >
                            View Results
                        </base-button>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex items-center justify-center gap-2">
                <base-button
                    variant="ghost"
                    size="md"
                    :disabled="currentPage === 1"
                    aria-label="Previous page"
                    icon-left="mdi:chevron-left"
                    @click="currentPage--"
                />
                <base-button
                    v-for="page in totalPages"
                    :key="page"
                    :variant="currentPage === page ? 'primary' : 'ghost'"
                    size="md"
                    class="!size-9 text-sm"
                    @click="currentPage = page"
                >
                    {{ page }}
                </base-button>
                <!-- Add logic for ellipsis (...) if needed for many pages -->
                <base-button
                    variant="ghost"
                    size="md"
                    :disabled="currentPage === totalPages"
                    aria-label="Next page"
                    icon-right="mdi:chevron-right"
                    @click="currentPage++"
                />
            </div>
        </div>
    </section>
</template>
