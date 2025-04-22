<script lang="ts" setup>
const slides = [
    {
        title: "About Us",
        description: "Be a member now!",
        image: "/images/hero-background.jpg",
    },
];
</script>
<template>
    <general-carousel :items="slides" />
    <!-- Vision & Mission -->
    <section>
        <div class="space-y-10 max-w-[1000px] mx-auto pt-32 pb-16">
            <!-- Vision -->
            <div class="flex items-center space-x-16">
                <div class="w-[322px] aspect-square relative">
                    <img
                        src="/images/vision-image.png"
                        alt="Vision Image"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="flex-1 space-y-8">
                    <h2 class="text-5xl font-bold text-gray-800">Vision</h2>
                    <p class="text-gray-700">
                        The PCCI is a full-service oriented canine club at par
                        with the worlds best kennel clubs, recognized for its
                        integrity, its efficiency, its capacity to exceed its
                        members’ service needs and expectations and committed to
                        all facets and activities that involve purebred dogs.
                    </p>
                </div>
            </div>
            <!-- Mission -->
            <div class="flex items-center space-x-16">
                <div class="flex-1 space-y-8">
                    <h2 class="text-5xl font-bold text-gray-800">Mission</h2>
                    <p class="text-gray-700">
                        To promote the integrity of the purebred dog registry,
                        to encourage ethical breeding practices, to organize
                        world-class canine exhibitions, to disseminate canine
                        information & education and to support purebred canine
                        welfare.
                    </p>
                </div>
                <div class="w-[322px] aspect-square relative">
                    <img
                        src="/images/mission-image.png"
                        alt="Vision Image"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- History -->
    <section>
        <div class="max-w-[1000px] m-auto space-y-16 pb-16">
            <div class="w-full aspect-[2/1] relative">
                <img
                    src="/images/history-image.png"
                    alt="History Image"
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="space-y-8">
                <h2 class="text-5xl font-bold text-gray-800">History</h2>
                <div class="text-base text-gray-700 leading-relaxed space-y-4">
                    <p>
                        The Philippine Canine Club, Inc. was organized on March
                        21, 1963, as a non-stock, non-profit service-oriented
                        corporation for the purpose of promoting and encouraging
                        the love for pure-bred dogs. The Club's charter extends
                        until the year 2038 and authorizes PCCI to maintain a
                        registry of pure-bred dogs or stud books and to conduct
                        dog shows and competitions.
                    </p>
                    <p>
                        In addition to the studbooks, PCCI maintains a registry
                        of regular and associate members, and of litters and
                        kennel names. PCCI issues registration certificates and
                        certified pedigree certificates of dogs and confers
                        championship titles, obedience and field trial titles to
                        qualified dogs. PCCI issues dog show judging licenses to
                        qualified members for individual breeds, groups of
                        breeds and all breeds of pure-bred dogs.
                    </p>
                    <p>
                        As a federal member of the Federation Cynologique
                        Internationale (FCI), an international organization of
                        registering bodies based in Brussels, Belgium, PCCI is
                        the only accredited registering body in the Philippines
                        for purebred dogs. PCCI documents are recognized by the
                        national registry organizations in all FCI-member
                        countries, in the United States, by the American Kennel
                        Club, in Canada by the Canadian Kennel Club and in the
                        United Kingdom by the Kennel Club. PCCI is also a member
                        of the FCI Asia, Africa & Oceania Section.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services -->
    <section>
        <div class="max-w-[1000px] text-center space-y-16 m-auto pb-32">
            <h2 class="text-5xl font-bold text-gray-800">Services</h2>
            <div class="relative">
                <div
                    class="w-full h-1 absolute top-1/2 -translate-y-[1/2] bg-pcci-orange z-0"
                ></div>
                <div class="flex justify-between items-start gap-4 relative">
                    <!-- Service 1 -->
                    <div
                        class="flex flex-col items-center gap-4 text-center flex-1 max-w-[217px] px-4 bg-offwhite"
                    >
                        <div class="w-[140px] m-auto">
                            <img
                                src="/images/service-dog-registration.png"
                                alt="Dog Registration Service"
                                class="w-full h-full m-auto mb-4"
                            />
                        </div>
                        <h3 class="text-lg font-bold text-gray-800">
                            Dog Registration
                        </h3>
                        <p class="text-base text-gray-700 leading-relaxed">
                            The Philippine Canine Club, Inc. was organized on
                            March 21, 1963, as a non-stock
                        </p>
                    </div>

                    <!-- Service 2 -->
                    <div
                        class="flex flex-col items-center gap-4 text-center flex-1 max-w-[217px] px-4 bg-offwhite"
                    >
                        <div class="w-[140px] m-auto">
                            <img
                                src="/images/service-membership.png"
                                alt="Dog Registration Service"
                                class="w-full h-full m-auto mb-4"
                            />
                        </div>
                        <h3 class="text-lg font-bold text-gray-800">
                            Membership
                        </h3>
                        <p class="text-base text-gray-700 leading-relaxed">
                            The Philippine Canine Club, Inc. was organized on
                            March 21, 1963, as a non-stock
                        </p>
                    </div>

                    <!-- Service 3 -->
                    <div
                        class="flex flex-col items-center gap-4 text-center flex-1 max-w-[217px] px-4 bg-offwhite"
                    >
                        <div class="w-[140px] m-auto">
                            <img
                                src="/images/service-events.png"
                                alt="Dog Registration Service"
                                class="w-full h-full m-auto mb-4"
                            />
                        </div>
                        <h3 class="text-lg font-bold text-gray-800">Events</h3>
                        <p class="text-base text-gray-700 leading-relaxed">
                            The Philippine Canine Club, Inc. was organized on
                            March 21, 1963, as a non-stock
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
