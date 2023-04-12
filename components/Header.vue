<template>
    <div class="p-5 text-xl font-bold flex flex-row space-x-7 items-center">
        <Burger @click="toggleSidebar" />

        <nuxt-link to="/" v-if="header">
            Luke Sheppard
        </nuxt-link>
    </div>
</template>

<script setup>
const emit = defineEmits(['toggleSidebar']);

defineProps({
    header: { type: Boolean, default: true },
});

const toggleSidebar = () => emit('toggleSidebar');
</script>
