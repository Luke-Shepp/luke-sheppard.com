<template>
    <div :class="visibilyClasses" class="px-5 py-3 drop-shadow-2xl w-[40vw] sm:w-[30vw] md:w-[20vw] bg-[#e3e3e3] h-screen transition-all ease-in-out fixed tabindex-0">
        <div>
            <ul class="space-y-3 text-lg mt-4">
                <li class="hover:pl-3 transition-all ease-in-out">
                    <nuxt-link @click="close" to="/">Home</nuxt-link>
                </li>
                <li class="hover:pl-3 transition-all ease-in-out">
                    <nuxt-link @click="close" to="/portfolio">Portfolio</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['closeSidebar']);

const props = defineProps({
    open: { type: Boolean, default: false },
});

const visibilyClasses = computed(() =>
    props.open
        ? 'left-0'
        : '-left-[100%]'
);

const close = () => emit('closeSidebar');

</script>
