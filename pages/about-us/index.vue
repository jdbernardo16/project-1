<script lang="ts" setup></script>
<template>
    <general-carousel />
    <section class="px-32 py-16 space-y-16">
        <!-- Vision & Mission -->
        <div class="space-y-10">
            <!-- Vision -->
            <div class="flex items-center gap-16">
                <img
                    src="/images/vision-image.png"
                    alt="Vision Image"
                    class="w-1/2 object-cover rounded-lg"
                />
                <div class="w-1/2 space-y-8">
                    <h2 class="text-5xl font-bold text-gray-800">Vision</h2>
                    <p class="text-base text-gray-700 leading-relaxed">
                        The PCCI is a full-service oriented canine club at par
                        with the worlds best kennel clubs, recognized for its
                        integrity, its efficiency, its capacity to exceed its
                        members’ service needs and expectations and committed to
                        all facets and activities that involve purebred dogs.
                    </p>
                </div>
            </div>
            <!-- Mission -->
            <div class="flex items-center gap-16">
                <div class="w-1/2 space-y-8">
                    <h2 class="text-5xl font-bold text-gray-800">Mission</h2>
                    <p class="text-base text-gray-700 leading-relaxed">
                        To promote the integrity of the purebred dog registry,
                        to encourage ethical breeding practices, to organize
                        world-class canine exhibitions, to disseminate canine
                        information & education and to support purebred canine
                        welfare.
                    </p>
                </div>
                <img
                    src="/images/mission-image.png"
                    alt="Mission Image"
                    class="w-1/2 object-cover rounded-lg"
                />
            </div>
        </div>

        <!-- History -->
        <div class="space-y-16">
            <img
                src="/images/history-image.png"
                alt="History Image"
                class="w-full h-64 object-cover rounded-lg"
            />
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

        <!-- Services -->
        <div class="text-center space-y-16">
            <h2 class="text-5xl font-bold text-gray-800">Services</h2>
            <div class="flex justify-between items-start gap-4">
                <!-- Service 1 -->
                <div
                    class="flex flex-col items-center gap-4 text-center flex-1 px-4"
                >
                    <img
                        src="/images/service-dog-registration.png"
                        alt="Dog Registration Service"
                        class="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-lg font-bold text-gray-800">
                        Dog Registration
                    </h3>
                    <p class="text-base text-gray-700 leading-relaxed">
                        The Philippine Canine Club, Inc. was organized on March
                        21, 1963, as a non-stock
                    </p>
                </div>
                <div
                    class="border-l-4 border-yellow-500 h-48 self-center"
                ></div>
                <!-- Separator -->
                <!-- Service 2 -->
                <div
                    class="flex flex-col items-center gap-4 text-center flex-1 px-4"
                >
                    <img
                        src="/images/service-membership.png"
                        alt="Membership Service"
                        class="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-lg font-bold text-gray-800">Membership</h3>
                    <p class="text-base text-gray-700 leading-relaxed">
                        The Philippine Canine Club, Inc. was organized on March
                        21, 1963, as a non-stock
                    </p>
                </div>
                <div
                    class="border-l-4 border-yellow-500 h-48 self-center"
                ></div>
                <!-- Separator -->
                <!-- Service 3 -->
                <div
                    class="flex flex-col items-center gap-4 text-center flex-1 px-4"
                >
                    <img
                        src="/images/service-events.png"
                        alt="Events Service"
                        class="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 class="text-lg font-bold text-gray-800">Events</h3>
                    <p class="text-base text-gray-700 leading-relaxed">
                        The Philippine Canine Club, Inc. was organized on March
                        21, 1963, as a non-stock
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
