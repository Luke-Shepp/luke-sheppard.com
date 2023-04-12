<template>
    <div class="p-1 md:p-4 pt-10">
        <div class="space-y-3">
            <div class="text-7xl">👨‍💻</div>
            <h1 class="text-4xl font-semibold">
                Luke Sheppard
            </h1>
            <h2 class="text-2xl font-medium">
                Contract & Freelance Software Developer
            </h2>
        </div>
        <div class="mt-12 flex space-x-5">
            <a href="https://github.com/Luke-Shepp" class="flex group items-center" target="_blank" rel="noreferrer">
                <LogosGitHub />
                <p class="group-hover:text-[#0077B5] font-medium">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/luke-shepp/" class="flex group items-center" target="_blank" rel="noreferrer">
                <LogosLinkedIn />
                <p class="group-hover:text-[#0077B5] font-medium">LinkedIn</p>
            </a>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'noheader',
});
</script>
