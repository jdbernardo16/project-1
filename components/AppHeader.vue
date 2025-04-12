<script setup lang="ts">
// No script logic needed for this static header structure yet
</script>

<template>
    <header
        class="bg-light text-text-dark font-familjen px-20 py-6 w-full fixed z-[100] top-0 left-0 right-0"
    >
        <div class="container mx-auto flex items-center justify-between">
            <!-- Logo -->
            <NuxtLink to="/">
                <img
                    src="/images/header-logo.png"
                    alt="PCCI Logo"
                    class="h-10"
                />
                <!-- Adjust height as needed -->
            </NuxtLink>

            <!-- Navigation -->
            <nav>
                <ul class="flex items-center space-x-6 text-sm font-semibold">
                    <li>
                        <NuxtLink to="/" class="hover:text-pcci-orange">
                            HOME
                        </NuxtLink>
                    </li>
                    <li class="flex items-center">
                        <NuxtLink to="/about" class="hover:text-pcci-orange">
                            ABOUT US
                        </NuxtLink>
                        <img
                            src="/icons/chevron-down.svg"
                            alt="Dropdown"
                            class="ml-1 h-3 w-3"
                        />
                    </li>
                    <li class="flex items-center">
                        <NuxtLink to="/grooming" class="hover:text-pcci-orange">
                            GROOMING
                        </NuxtLink>
                        <img
                            src="/icons/chevron-down.svg"
                            alt="Dropdown"
                            class="ml-1 h-3 w-3"
                        />
                    </li>
                    <li>
                        <NuxtLink to="/clubs" class="hover:text-pcci-orange">
                            CLUBS
                        </NuxtLink>
                    </li>
                    <li class="flex items-center">
                        <NuxtLink to="/members" class="hover:text-pcci-orange">
                            MEMBERS
                        </NuxtLink>
                        <img
                            src="/icons/chevron-down.svg"
                            alt="Dropdown"
                            class="ml-1 h-3 w-3"
                        />
                    </li>
                    <li class="flex items-center">
                        <NuxtLink to="/shows" class="hover:text-pcci-orange">
                            SHOWS
                        </NuxtLink>
                        <img
                            src="/icons/chevron-down.svg"
                            alt="Dropdown"
                            class="ml-1 h-3 w-3"
                        />
                    </li>
                    <li>
                        <NuxtLink
                            to="/latest-updates"
                            class="hover:text-pcci-orange"
                        >
                            LATEST UPDATES
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/faqs" class="hover:text-pcci-orange">
                            FAQ’S
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="hover:text-pcci-orange">
                            CONTACT US
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <!-- Actions -->
            <div class="flex items-center space-x-4">
                <button class="hover:text-pcci-orange">
                    <img
                        src="/icons/search-icon.svg"
                        alt="Search"
                        class="h-5 w-5"
                    />
                </button>
                <button class="hover:text-pcci-orange relative h-5 w-5">
                    <!-- Combining the two parts for the person icon -->
                    <img
                        src="/icons/person-icon-part1.svg"
                        alt="Profile"
                        class="absolute inset-0 h-full w-full"
                    />
                    <img
                        src="/icons/person-icon-part2.svg"
                        alt=""
                        class="absolute inset-0 h-full w-full"
                    />
                </button>
                <button
                    class="bg-pcci-orange text-text-dark font-medium rounded-md px-4 py-2 text-sm hover:opacity-90"
                >
                    Register Dog
                </button>
            </div>
        </div>
    </header>
    <div class="spacer h-22"></div>
</template>

<style scoped>
/* Scoped styles if needed, but Tailwind should handle most */
</style>
