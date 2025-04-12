<script lang="ts" setup></script>

<template>
    <general-carousel />

    <!-- Circulars Section -->
    <section class="bg-white px-4 sm:px-8 md:px-16 lg:px-32 py-16 sm:py-20">
        <div class="max-w-screen-xl mx-auto">
            <!-- Search and Sort Controls -->
            <div
                class="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-4 sm:gap-8"
            >
                <div class="relative w-full sm:w-auto sm:flex-grow max-w-md">
                    <input
                        type="text"
                        placeholder="Search here"
                        class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base font-medium text-gray-700 placeholder-gray-400"
                    />
                    <img
                        src="/icons/search-icon.svg"
                        alt="Search"
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    />
                </div>
                <div class="relative w-full sm:w-auto">
                    <button
                        class="flex items-center justify-between w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span>Latest to oldest</span>
                        <img
                            src="/icons/chevron-down.svg"
                            alt="Sort"
                            class="ml-2 h-5 w-5 text-gray-600"
                        />
                    </button>
                    <!-- Dropdown content would go here -->
                </div>
            </div>

            <!-- Circulars List -->
            <div class="space-y-8">
                <!-- Sample Circular Item 1 -->
                <div class="border-b border-gray-200 pb-6">
                    <div
                        class="flex flex-col sm:flex-row justify-between items-start mb-3.5 gap-4"
                    >
                        <h3
                            class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1"
                        >
                            Reminder To Prospective Puppy Buyers and Sellers
                        </h3>
                        <a
                            href="#"
                            class="flex items-center text-orange-500 font-medium text-lg hover:text-orange-600 whitespace-nowrap"
                        >
                            <span>View</span>
                            <img
                                src="/icons/arrow-up-right.svg"
                                alt="View"
                                class="ml-1.5 h-5 w-5"
                            />
                        </a>
                    </div>
                    <div
                        class="flex flex-wrap items-center space-x-8 sm:space-x-11 pl-0 sm:pl-2 text-sm"
                    >
                        <div class="flex flex-col mt-2 sm:mt-0">
                            <div class="flex items-center text-gray-600 mb-0.5">
                                <img
                                    src="/icons/hashtag.svg"
                                    alt=""
                                    class="mr-1 h-4 w-4"
                                />
                                <span class="text-base">Circular number</span>
                            </div>
                            <span
                                class="font-semibold text-gray-800 text-base sm:text-lg"
                            >
                                2021-004
                            </span>
                        </div>
                        <div class="flex flex-col mt-2 sm:mt-0">
                            <div class="flex items-center text-gray-600 mb-0.5">
                                <img
                                    src="/icons/calendar.svg"
                                    alt=""
                                    class="mr-1 h-4 w-4"
                                />
                                <span class="text-base">Date issued</span>
                            </div>
                            <span
                                class="font-semibold text-gray-800 text-base sm:text-lg"
                            >
                                5/17/2021
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Sample Circular Item 2 -->
                <div class="border-b border-gray-200 pb-6">
                    <div
                        class="flex flex-col sm:flex-row justify-between items-start mb-3.5 gap-4"
                    >
                        <h3
                            class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1"
                        >
                            Late Litter Registration
                        </h3>
                        <a
                            href="#"
                            class="flex items-center text-orange-500 font-medium text-lg hover:text-orange-600 whitespace-nowrap"
                        >
                            <span>View</span>
                            <img
                                src="/icons/arrow-up-right.svg"
                                alt="View"
                                class="ml-1.5 h-5 w-5"
                            />
                        </a>
                    </div>
                    <div
                        class="flex flex-wrap items-center space-x-8 sm:space-x-11 pl-0 sm:pl-2 text-sm"
                    >
                        <div class="flex flex-col mt-2 sm:mt-0">
                            <div class="flex items-center text-gray-600 mb-0.5">
                                <img
                                    src="/icons/hashtag.svg"
                                    alt=""
                                    class="mr-1 h-4 w-4"
                                />
                                <span class="text-base">Circular number</span>
                            </div>
                            <span
                                class="font-semibold text-gray-800 text-base sm:text-lg"
                            >
                                2021-003
                            </span>
                        </div>
                        <div class="flex flex-col mt-2 sm:mt-0">
                            <div class="flex items-center text-gray-600 mb-0.5">
                                <img
                                    src="/icons/calendar.svg"
                                    alt=""
                                    class="mr-1 h-4 w-4"
                                />
                                <span class="text-base">Date issued</span>
                            </div>
                            <span
                                class="font-semibold text-gray-800 text-base sm:text-lg"
                            >
                                4/28/2021
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Sample Circular Item 3 -->
                <div class="border-b border-gray-200 pb-6">
                    <div
                        class="flex flex-col sm:flex-row justify-between items-start mb-3.5 gap-4"
                    >
                        <h3
                            class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1"
                        >
                            Registration of Additional Puppy in a Registered
                            Litter
                        </h3>
                        <a
                            href="#"
                            class="flex items-center text-orange-500 font-medium text-lg hover:text-orange-600 whitespace-nowrap"
                        >
                            <span>View</span>
                            <img
                                src="/icons/arrow-up-right.svg"
                                alt="View"
                                class="ml-1.5 h-5 w-5"
                            />
                        </a>
                    </div>
                    <div
                        class="flex flex-wrap items-center space-x-8 sm:space-x-11 pl-0 sm:pl-2 text-sm"
                    >
                        <div class="flex flex-col mt-2 sm:mt-0">
                            <div class="flex items-center text-gray-600 mb-0.5">
                                <img
                                    src="/icons/hashtag.svg"
                                    alt=""
                                    class="mr-1 h-4 w-4"
                                />
                                <span class="text-base">Circular number</span>
                            </div>
                            <span
                                class="font-semibold text-gray-800 text-base sm:text-lg"
                            >
                                2020-1118-2
                            </span>
                        </div>
                        <div class="flex flex-col mt-2 sm:mt-0">
                            <div class="flex items-center text-gray-600 mb-0.5">
                                <img
                                    src="/icons/calendar.svg"
                                    alt=""
                                    class="mr-1 h-4 w-4"
                                />
                                <span class="text-base">Date issued</span>
                            </div>
                            <span
                                class="font-semibold text-gray-800 text-base sm:text-lg"
                            >
                                11/18/2020
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Add more circular items as needed -->
            </div>
            <!-- Pagination would go here -->
        </div>
    </section>
</template>
