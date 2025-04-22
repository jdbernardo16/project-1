<script lang="ts" setup>
const slides = [
    {
        title: "Grooming Gallery",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];
</script>
<template>
    <general-carousel :items="slides" />

    <section>
        <div class="max-w-[1174px] m-auto pt-32 pb-20">
            <div class="mb-20">
                <p class="mb-1 text-sm text-neutral/72">June 29, 2024</p>
                <p class="font-semibold text-5xl">
                    Introduction to Professional Dog Grooming
                </p>
                <p class="text-lg">By Nikki Chou</p>
            </div>
            <div class="w-full grid grid-cols-3 gap-3">
                <div v-for="i in 9">
                    <div class="w-full aspect-square overflow-hidden">
                        <img
                            src="/images/hero-background.jpg"
                            alt="Grooming Gallery 1"
                            class="w-full h-full object-cover group-hover/gallery:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="max-w-[1174px] m-auto pb-32">
            <p class="text-2xl font-semibold mb-8">See more in Gallery</p>
            <div class="w-full grid grid-cols-3 gap-8">
                <a href="#" v-for="i in 3" class="block group/gallery">
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
