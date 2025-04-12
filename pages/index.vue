<script setup>
import HeroCarousel from "~/components/HeroCarousel.vue";
import SponsorMarquee from "~/components/SponsorMarquee.vue";
import BenefitsSection from "~/components/BenefitsSection.vue";
import LiveShowcase from "~/components/LiveShowcase.vue";
import AnnouncementsSection from "~/components/AnnouncementsSection.vue"; // Featured one
import MagazineSection from "~/components/MagazineSection.vue";
import AnnouncementListSection from "~/components/AnnouncementListSection.vue"; // Card list one
import EventsSection from "~/components/EventsSection.vue";
</script>

<template>
    <div>
        <HeroCarousel />
        <SponsorMarquee />
        <BenefitsSection />
        <LiveShowcase />
        <AnnouncementsSection />
        <MagazineSection />
        <AnnouncementListSection />
        <EventsSection />
    </div>
</template>
