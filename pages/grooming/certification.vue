<script lang="ts" setup>
import BaseButton from "@/components/shared/BaseButton.vue";
import GroomingCertificationCarousel from "@/components/GroomingCertificationCarousel.vue";

const slides = [
    {
        title: "Grooming Certification",
        description: "Be a member now!",
        image: "/images/hero-background.jpg", // Assuming this is still needed for the top banner
    },
];

const certificationCarouselItems = [
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    {
        image: "/images/grooming/certification-carousel-1.png",
    },
    // Add more images here if the carousel should have multiple slides
];
</script>

<template>
    <div>
        <!-- Existing General Carousel -->
        <general-carousel :items="slides" />

        <!-- New Grooming Certification Section -->
        <section>
            <div class="max-w-[800px] m-auto w-full py-32">
                <div class="mb-10">
                    <!-- Text Content &amp; Button -->
                    <div class="flex flex-col gap-6 mb-10">
                        <h2
                            class="font-familjen text-4xl md:text-5xl font-bold text-text-dark leading-tight"
                        >
                            Register Your Dog for The 2ND FCI-PCCI Grooming
                            Certification &amp;amp; Competition!
                        </h2>
                        <p class="font-familjen text-base text-text-dark">
                            Entries for The 2ND FCI-PCCI Grooming Certification
                            &amp;amp; Competition are now open.
                        </p>
                        <div class="mt-2">
                            <base-button variant="primary" size="lg">
                                Register now
                            </base-button>
                        </div>
                    </div>

                    <!-- Image Carousel -->
                    <div class="w-full">
                        <GroomingCertificationCarousel
                            :items="certificationCarouselItems"
                        />
                    </div>
                </div>

                <!-- Facebook Link Section -->
                <div>
                    <p class="font-familjen text-base text-text-dark">
                        Be updated on our latest uploads. Follow our official
                        Facebook page
                        <a
                            href="https://www.facebook.com/PhilippineCircuitDogShow"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="hover:underline font-semibold"
                        >
                            @PhilippineCircuitDogShow
                        </a>
                        or click on the link below:
                        <br />
                        <a
                            href="https://www.facebook.com/PhilippineCircuitDogShow"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline font-light"
                        >
                            https://www.facebook.com/PhilippineCircuitDogShow
                        </a>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
