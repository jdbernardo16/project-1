<script setup lang="ts">
// No script logic needed for this static footer yet
</script>

<template>
    <footer
        class="bg-pcci-blue text-text-light font-familjen relative overflow-hidden pt-16 pb-8"
    >
        <!-- Optional Background Pattern -->
        <img
            src="/images/footer-pattern.svg"
            alt=""
            class="absolute bottom-0 left-0 w-full h-auto opacity-10 pointer-events-none"
            aria-hidden="true"
        />

        <div class="container mx-auto px-4 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                <!-- About PCCI &amp; Social -->
                <div class="md:col-span-4 space-y-6">
                    <h3 class="font-bold text-lg">About PCCI</h3>
                    <p class="text-sm opacity-80">
                        The Philippine Canine Club, Inc. (PCCI) is the premier
                        kennel club in the Philippines, dedicated to the
                        promotion of purebred dogs and responsible dog
                        ownership.
                    </p>
                    <div>
                        <h4 class="font-bold text-md mb-3">Follow us on</h4>
                        <div class="flex space-x-3">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-bg-light p-2 rounded-full hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/icons/facebook.svg"
                                    alt="Facebook"
                                    class="h-5 w-5"
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-bg-light p-2 rounded-full hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/icons/instagram.svg"
                                    alt="Instagram"
                                    class="h-5 w-5"
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bg-bg-light p-2 rounded-full hover:opacity-80 transition-opacity"
                            >
                                <!-- Assuming twitter-x.svg is the correct icon -->
                                <img
                                    src="/icons/twitter-x.svg"
                                    alt="Twitter"
                                    class="h-5 w-5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Navigation Links -->
                <div
                    class="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <!-- Pages -->
                    <div>
                        <h4 class="font-bold text-md mb-4">Pages</h4>
                        <ul class="space-y-2 text-sm">
                            <li>
                                <NuxtLink
                                    to="/"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Home
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/about"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    About Us
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/clubs"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Clubs
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/latest-updates"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Latest Updates
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-bold text-md mb-4">Quick links</h4>
                        <ul class="space-y-2 text-sm">
                            <li>
                                <NuxtLink
                                    to="/faq"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    FAQ’s
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/contact"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Contact Us
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/rules"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Rules and Regulations
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/privacy"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Data Privacy Act
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Partners -->
                    <div>
                        <h4 class="font-bold text-md mb-4">Partners</h4>
                        <ul class="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Department of Tourism
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Department of Agriculture
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    Our Dogs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="opacity-80 hover:opacity-100"
                                >
                                    The Kennel Club
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <hr class="border-t border-white/20 mb-8" />

            <!-- Copyright -->
            <div class="text-center text-xs text-text-light opacity-50">
                © {{ new Date().getFullYear() }} Philippine Canine Club Inc. All
                rights reserved.
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
/* Using Tailwind utility classes primarily */
.container {
    max-width: 1200px; /* Or your project's standard container width */
}
</style>
