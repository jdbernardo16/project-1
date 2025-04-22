<script lang="ts" setup>
import BaseSelector from "@/components/shared/BaseSelector.vue";
import BaseTextInput from "@/components/shared/BaseTextInput.vue";
const slides = [
    {
        title: "Grooming Gallery",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];

const options = [
    { label: "Latest to oldest", value: "latest" },
    { label: "Oldest to latest", value: "oldest" },
];
</script>
<template>
    <general-carousel :items="slides" />

    <section>
        <div class="max-w-[1174px] m-auto py-32">
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
                        placeholder="A - Z"
                        :options="options"
                    />
                    <!-- Dropdown content would go here -->
                </div>
            </div>
            <div class="w-full grid grid-cols-3 gap-x-8 gap-y-32 mt-32">
                <a
                    href="/grooming/gallery/qwerty"
                    v-for="i in 9"
                    class="gallery-group block group/gallery"
                >
                    <div class="w-full aspect-square mb-6 overflow-hidden">
                        <img
                            src="/images/hero-background.jpg"
                            alt="Grooming Gallery 1"
                            class="w-full h-full object-cover group-hover/gallery:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div>
                        <p class="text-sm text-neutral/72 font-extralight">
                            June 29, 2024
                        </p>
                        <p class="text-2xl font-semibold h-16 line-clamp-2">
                            Introduction to Professional Dog Grooming
                        </p>
                        <p class="text-lg font-medium text-neutral/72">
                            Nikki Chou
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>
<style scoped scss>
.gallery-group {
    &:nth-child(3n + 2) {
        transform: translateY(-64px);
    }
}
</style>
