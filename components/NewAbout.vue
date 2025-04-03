<template>
    <div class="aboutPage" id="about" >
        <div class="inner">
            <img data-aos="fade-up" data-aos-duration="1000" src="/images/trevor.jpg" alt="Trevor's image">
            <h3 data-aos="fade-up">
                <Icon name="typcn:info-large-outline" /> Something small about myself.
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000">Hi, my name is Arapu Trevor, and I am a software developer
                with about 3 years of experience. I
                specialize in front-end development using JavaScript, CSS, and HTML. Additionally, I have experience
                working with different frameworks, including Vue with Nuxt.js. Currently, my main focus is on enhancing
                my skills and making myself a well rounded software developer.</p>
            <p data-aos="fade-up" data-aos-duration="1000">I also love building beautiful mobile applications with
                Ionic. My discovery of Nuxt-Ionic led me to
                explore the Ionic Framework itself, and I thoroughly enjoyed working with it. Currently, I use
                Vue-Ionic, <span>as Nuxt-Ionic is still in development at the time of writing this.</span>. It's ready, I recently visited the nuxt-ionic page and i can't see the warning anymore. NUXT-IONIC here i come.</p>
            <p data-aos="fade-up" data-aos-duration="1000">I am passionate about creating user-friendly and responsive
                web applications that deliver an exceptional
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
    margin: 4rem 0;
    padding: 2rem 5rem;

    .inner {
        max-width: 1000px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        img {
            width: 300px;
            border-radius: 50%;
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

@media (prefers-color-scheme: dark) {
    .aboutPage {
        .inner {
            color: #eeeeee;

            img {
                border: 2px solid #eeeeee;
            }

            h3 {
                color: #ffffff;
            }
        }
    }
}

@media (max-width: 700px) {
    .aboutPage {
        padding: 2rem 1rem;
        .inner {
            img {
                width: 150px;
            }

        }
    }
}

</style>