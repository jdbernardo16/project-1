<script lang="ts" setup>
const slides = [
    {
        title: "Rules & Regulations",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];
</script>
<template>
    <general-carousel :items="slides" />
    <section class="flex flex-col items-center self-stretch py-30 px-32">
        <div class="flex flex-col gap-12 w-[800px]">
            <h2
                class="font-grotesk font-bold text-5xl leading-tight text-text-dark"
            >
                Access and download rules and regulations below:
            </h2>
            <div class="grid grid-cols-2 gap-12">
                <div class="space-y-3">
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">PCCI Bylaws</span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Articles of Incorporation
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Affiliated Clubs
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                </div>
                <div class="space-y-3">
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">Agility</span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            PCCI Code of Ethics
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">Dog Show</span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                </div>
                <div class="space-y-3">
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Judges Development and Licensing Committee
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Obedience Trials
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">Registration</span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                </div>
                <div class="space-y-3">
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Revised Election Code of the Philippine Canine Club,
                            Inc.
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Trial Board Rules
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                    <a
                        href="#"
                        class="flex items-center gap-3 text-pcci-orange font-grotesk text-lg leading-tight group space-x-3"
                    >
                        <span class="group-hover:underline">
                            Department of Agriculture Administrative Order 32
                            Series of 2000
                        </span>
                        <img
                            src="/icons/arrow-up-right.svg"
                            alt=""
                            class="w-3 h-3"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
