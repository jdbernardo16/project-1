<template>
    <div class="bg-offwhite">
        <div class="px-32 py-16 max-w-[1440px] m-auto">
            <div class="flex space-x-16">
                <!-- Left Column: Image -->
                <div class="aspect-[536/456] relative w-1/2">
                    <img
                        src="/images/benefits-image.png"
                        alt="Benefits of registering your dog"
                        class="object-cover w-full h-full"
                    />
                </div>

                <!-- Right Column: Content -->
                <div class="w-1/2">
                    <h2
                        class="text-5xl font-bold text-text-dark font-familjen mb-8"
                    >
                        Benefits of registering your dog
                    </h2>
                    <div class="space-y-4">
                        <BenefitItem
                            v-for="(benefit, index) in benefits"
                            :key="index"
                            :text="benefit"
                        />
                    </div>
                    <BaseButton
                        text="Register my dog now"
                        variant="primary"
                        class="mt-12"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BenefitItem from "./BenefitItem.vue";
import BaseButton from "./BaseButton.vue";

const benefits = [
    "Compliance helps avoid fines and legal issues.",
    "Registered dogs often receive a tag with a unique ID number. If your dog gets lost, this tag can help reunite you with your pet.",
    "Registration can provide access to local dog parks, training programs, and other community resources and events.",
    "Registration serves as proof of ownership, which can be useful in case of disputes or if your dog is stolen.",
];
</script>

<style scoped>
/* Add any component-specific styles here if needed */
/* Using theme variables via Tailwind utilities */
h2 {
    font-size: var(--text-5xl);
    color: var(--color-text-dark);
    font-family: var(--font-familjen);
}
</style>
