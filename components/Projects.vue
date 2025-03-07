<template>
    <div class="container">
        <div class="inner">
            <img data-aos="fade-up" data-aos-duration="1000" v-for="i in images" :src="i" alt="project image">
        </div>
    </div>
</template>

<script setup>

const images = [
    '/images/caaleeMobile.png',
    '/images/markDoneWeb.png',
    '/images/homestead.png',
    '/images/caaleeWeb.png',
    '/images/markDoneMobile.png',
    '/images/lionking.png',
]

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    max-width: 1350px;
    width: 100%;

    .inner {

        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

        img {
            width: 100%;
            border-radius: 0.5rem;
        }

    }
}

@media (max-width: 700px) {
    .container {
        .inner {
            grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

        }
    }
}
</style>