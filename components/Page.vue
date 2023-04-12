<template>
    <div class="flex flex-row transition-all ease-in-out" :class="{ 'pl-[40vw] sm:pl-[30vw] md:pl-[20vw]': sidebarOpen }">
        <Sidebar :open="sidebarOpen" @closeSidebar="toggleSidebar" />

        <div>
            <Header @toggleSidebar="toggleSidebar" :header="header" />
            <div class="ml-[7vw] mt-2">
                <div>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    header: { type: Boolean, default: true },
});

const sidebarOpen = ref(false);

const toggleSidebar = () => {
    sidebarOpen.value = ! sidebarOpen.value;
};

useServerSeoMeta({
    title: 'Luke Sheppard',
    ogTitle: 'Luke Sheppard',
    ogType: 'website',
    ogUrl: 'https://luke-sheppard.com',
    ogLocale: 'en_GB',
});

const structuredData = {
    "@context": 'http://www.schema.org',
    "@type": 'Person',
    name: 'Luke Sheppard',
    jobTitle: 'Contract Software Developer',
    url: 'https://luke-sheppard.com',
};

useHead({
    script: [{ innerHTML: JSON.stringify(structuredData), type: 'application/ld+json' }]
})
</script>
