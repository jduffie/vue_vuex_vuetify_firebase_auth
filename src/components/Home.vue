<template>
    <div>
        <p> The Home Page</p>
    </div>
</template>

<script>
    export default {
        name: "Home.vue",
        computed: {
            meetups() {
                return this.$store.getters.featuredMeetups
            }
        }
    }
</script>

<style scoped>

</style>
