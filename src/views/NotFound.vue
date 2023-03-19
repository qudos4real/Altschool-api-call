<template>
    <div>
        <h1>404 - Page not found</h1>
        <p class="route">
            <router-link to="/">Go back to home</router-link>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.route {
    font-size: 1.5rem;
    color: aqua;
}
div h1 {
    font-size: 2rem;
    color: red;
}
</style>