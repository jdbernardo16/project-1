<script lang="ts" setup>
import BaseSelector from "@/components/shared/BaseSelector.vue";
import BaseTextInput from "@/components/shared/BaseTextInput.vue";
const options = [
    { label: "Latest to oldest", value: "latest" },
    { label: "Oldest to latest", value: "oldest" },
];

const slides = [
    {
        title: "Examination Results",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];
</script>

<template>
    <general-carousel :items="slides" />

    <!-- Circulars Section -->
    <section class="px-4 sm:px-8 md:px-16 lg:px-32 py-16 sm:py-20">
        <div class="max-w-[1000px] mx-auto">
            <!-- Search and Sort Controls -->
            <div
                class="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-4 sm:gap-11"
            >
                <div class="relative w-10/12">
                    <base-text-input name="search" placeholder="Search here" />
                    <Icon
                        name="fluent:search-24-regular"
                        class="absolute top-1/2 -translate-y-1/2 right-4 !size-6"
                    />
                </div>
                <div class="relative w-2/12">
                    <base-selector
                        name="sort"
                        placeholder="Latest to oldest"
                        :options="options"
                    />
                    <!-- Dropdown content would go here -->
                </div>
            </div>

            <!-- Circulars List -->
            <div class="space-y-8">
                <!-- Sample Circular Item 1 -->
                <div v-for="i in 5" class="border-b border-neutral/10 pb-6">
                    <div
                        class="flex flex-col sm:flex-row justify-between items-start mb-1.5 space-x-4"
                    >
                        <p class="text-sm text-neutral/72">June 29, 2023</p>
                        <a
                            href="#"
                            class="flex items-center text-pcci-orange font-medium text-lg hover:text-orange-600 whitespace-nowrap space-x-2"
                        >
                            <span>View</span>
                            <img src="/images/arrow-up-right.svg" alt="View" />
                        </a>
                    </div>
                    <div>
                        <h3
                            class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-2"
                        >
                            Reminder To Prospective Puppy Buyers and Sellers
                        </h3>
                        <p class="text-lg text-neutral/72 font-medium">
                            PCCI Office, Cubao Quezon City 
                        </p>
                    </div>
                </div>
            </div>
            <!-- Pagination would go here -->
        </div>
    </section>
</template>
