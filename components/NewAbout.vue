<template>
    <div class="aboutPage">
        <div class="inner">
            <img data-aos="fade-right" data-aos-duration="1000" src="/images/trevor.jpg" alt="Trevor's image">
            <h3 data-aos="fade-up" > <Icon name="typcn:info-large-outline" /> Something small about myself.</h3>
            <p data-aos="fade-left" data-aos-duration="1000" >Hi, my name is Arapu Trevor, and I am a software developer with approximately 2 years of experience. I
                specialize in front-end development using JavaScript, CSS, and HTML. Additionally, I have experience
                working with different frameworks, including Vue with Nuxt.js. Currently, my main focus is on enhancing
                my skills in front-end development.</p>
            <p data-aos="fade-left" data-aos-duration="1000" >I also love building beautiful mobile applications with Ionic. My discovery of Nuxt-Ionic led me to
                explore the Ionic Framework itself, and I thoroughly enjoyed working with it. Currently, I use
                Vue-Ionic, as Nuxt-Ionic is still in development at the time of writing.</p>
            <p data-aos="fade-left" data-aos-duration="1000" >I am passionate about creating user-friendly and responsive web applications that deliver an exceptional
                user experience. During my free time, I indulge in gaming and writing blogs. Currently, I contribute to
                caalee.com, a wallpaper web app that I both designed and built. Additionally, I take pride in creating
                all the wallpapers featured on the platform.</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.aboutPage {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8rem 0;
    padding: 2rem 5rem;

    .inner {
        max-width: 1350px;
        width: 100%;

        img {
            width: 200px;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
            object-fit: cover;
        }

        h3 {
            margin: 1rem 0;
            display: flex;
            align-items: center;

            span {
                font-size: 3rem;
            }
        }

        p {
            margin: 1rem 0;
        }
    }
}
</style>