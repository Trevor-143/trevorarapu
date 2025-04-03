<template>
    <div class="mainStart" >
        <MainHeader />
        <div class="next">
            <IntroText />
            <Projects />
        </div>
        <Skills />
        <ClientReviews />
        <Companies />
        <NewAbout />
        <ContactLinks />
        <MainFooter />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.mainStart {
    position: relative;
    overflow: hidden;
    .next {
        margin-top: 4.5rem;
        padding: 0.8rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

</style>