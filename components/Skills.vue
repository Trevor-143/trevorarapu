<template>
    <div class="skills" id="skills" >
        <div class="inner">
            <div class="top">
                <h3 data-aos="fade-up" data-aos-duration="1000">Let me show you my toys. </h3>
                <p data-aos="fade-up" data-aos-duration="1000">Yap! These are all my favorite toys at this time. Am learning Rust 🦀 And am
                    loving it so these will be edited later.</p>
            </div>
            <div class="skillList">
                <div data-aos="fade-up" data-aos-duration="1000" class="each" v-for="(one, idx) in tech">
                    <img :src="one.img" alt="stack image">
                    <div class="last">
                        <h3>{{ one.name }}</h3>
                        <p>{{ one.category }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const tech = ref([
    { name: 'JavaScript', img: '/stack/js.png', category: 'Web development' },
    { name: 'Css', img: '/stack/css.webp', category: 'Web development' },
    { name: 'Html', img: '/stack/html.png', category: 'Web development' },
    { name: 'Vue 3 js', img: '/stack/vuejs.png', category: 'Front-end development' },
    { name: 'Nuxt 3 js', img: '/stack/nuxtjs.png', category: 'Front-end developement' },
    { name: 'Node js', img: '/stack/nodejs.png', category: 'Back-end developement' },
    { name: 'Ionic', img: '/stack/ionic.jpeg', category: 'App developement' },
    { name: 'Firebase', img: '/stack/firebase.png', category: 'Data Storage & Auth' },
    { name: 'Figma', img: '/stack/figma.png', category: 'Design' },
    { name: 'Canva', img: '/stack/canva.webp', category: 'Design' },
    { name: 'Capacitor js', img: '/stack/capacitor.png', category: 'App developement' },
    { name: 'Appwrite', img: '/stack/appwrite.png', category: 'Data Storage & Auth' },
    { name: 'TinyMCE', img: '/stack/tinyMCE.png', category: 'Writting' },
    { name: 'Imagekit', img: '/stack/imagekit.jpeg', category: 'Image Optimisation' }
])

</script>

<style lang="scss" scoped>
.skills {
    padding: 1rem;
    margin: 6rem 0;

    .inner {
        display: flex;
        align-items: center;
        flex-direction: column;

        .top {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;

            h3 {
                font-size: 2rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            }

            p {
                max-width: 700px;
            }
        }

        .skillList {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
            max-width: 1350px;
            width: 100%;
            margin-top: 2rem;

            .each {
                padding: 2rem;
                width: 100%;
                border: 2px solid #eeeeee;
                background-color: #f3f3f3;
                border-radius: var(--mainRadius);

                img {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    display: block;
                    object-fit: cover;
                    margin-bottom: 0.5rem;
                }

                .last {
                    p {
                        display: -webkit-box;
                        line-clamp: 1;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        font-size: 0.8rem;
                    }
                }
            }
        }
    }
}

@media (prefers-color-scheme: dark) {

    .skills {
        .inner {
            .top {
                color: #eeeeee;

                h3 {
                    color: #ffffff;
                }
            }

            .skillList {
                .each {
                    border: 2px solid #2c2c2c;
                    background-color: #131313;

                    color: #eeeeee;
                }
            }
        }
    }

}
</style>