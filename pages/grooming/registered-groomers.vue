<script lang="ts" setup>
import BaseSelector from "@/components/shared/BaseSelector.vue";
import BaseTextInput from "@/components/shared/BaseTextInput.vue";

const slides = [
    {
        title: "List of Registered Groomers",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];

const options = [
    { label: "Latest to oldest", value: "latest" },
    { label: "Oldest to latest", value: "oldest" },
];

// Placeholder data for registered groomers based on Figma
const registeredGroomers = [
    {
        id: 1,
        name: "Macatingrao, Felix",
        salon: "PETBERO",
        contact: "09175744488",
        area: "Pampanga",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 2,
        name: "Trinidad, Jonel Mar",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "Quezon City",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 3,
        name: "Badera, Rene",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "Manila",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 4,
        name: "Banag, Arjay",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "Bulacan",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 5,
        name: "Bulanadi, Romir",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "West Ave, Quezon City",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 6,
        name: "Bordeos, Alexis",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "Malolos, Bulacan",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 7,
        name: "Cafirma, Lovington",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "Novalitches, Quezon City",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 8,
        name: "Macatingrao, Felix",
        salon: "PETBERO",
        contact: "09175744488",
        area: "Pampanga",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
    {
        id: 9,
        name: "Trinidad, Jonel Mar",
        salon: "TOP NOTCH DOG GROOMING",
        contact: "09175744488",
        area: "Quezon City",
        specialty:
            "Coat Maintenance and Styling, Show Grooming, Hygiene and Health, Behavioral Grooming",
    },
];
</script>
<template>
    <general-carousel :items="slides" />

    <section>
        <div class="max-w-[1000px] m-auto py-32">
            <div
                class="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-4 sm:gap-11"
            >
                <div class="relative w-full sm:w-10/12">
                    <base-text-input name="search" placeholder="Search here" />
                    <Icon
                        name="fluent:search-24-regular"
                        class="absolute top-1/2 -translate-y-1/2 right-4 !size-6 text-gray-600"
                    />
                </div>
                <div class="relative w-full sm:w-2/12">
                    <base-selector
                        name="sort"
                        placeholder="A - Z"
                        :options="options"
                    />
                    <!-- Dropdown content would go here -->
                </div>
            </div>
            <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                <div
                    v-for="groomer in registeredGroomers"
                    :key="groomer.id"
                    class="border-b border-neutral/7 pb-6"
                >
                    <div class="flex flex-col gap-2 mb-4">
                        <h3 class="text-2xl font-bold text-neutral-900">
                            {{ groomer.name }}
                        </h3>
                        <p class="text-lg font-semibold text-neutral/72">
                            {{ groomer.salon }}
                        </p>
                    </div>
                    <div class="flex space-x-6 mb-4">
                        <div>
                            <div class="flex items-center space-x-1 mb-1">
                                <Icon
                                    name="fluent:phone-20-regular"
                                    class="!size-6 text-gray-600"
                                />
                                <p class="text-base text-neutral/72">
                                    Contact Number
                                </p>
                            </div>
                            <p class="text-lg font-medium text-neutral-900">
                                {{ groomer.contact }}
                            </p>
                        </div>
                        <div>
                            <div class="flex items-center space-x-1">
                                <Icon
                                    name="fluent:cursor-20-regular"
                                    class="!size-6 text-gray-600"
                                />
                                <p class="text-base text-neutral/72">Area</p>
                            </div>
                            <p class="text-lg font-medium text-neutral-900">
                                {{ groomer.area }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center space-x-1">
                            <Icon
                                name="fluent:star-20-regular"
                                class="!size-6 text-gray-600"
                            />
                            <p class="text-base text-neutral/72">Specialty</p>
                        </div>
                        <p class="text-lg text-neutral-900">
                            {{ groomer.specialty }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
