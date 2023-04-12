<template>
    <Page :header="false">
        <slot />
    </Page>
</template>

<style>
* {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: rgb(35, 74, 82);
    transition: color .25s ease-out, fill .25s ease-out;
}

body {
    background-color: #fafafa;
}
</style>
