<template>
    <div class="skills" >
        <div class="inner">
            <div class="top">
                <h3 data-aos="fade-up" >Let me show you my toys. <span>😁</span> </h3>
            </div>
            <div class="skillList">
                <div data-aos="fade-up" class="each" v-for="(one, idx) in tech" >
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
    { name: 'Appwrite', img: '/stack/appwrite.png', category: 'Data Storage & Auth' }
])

</script>

<style lang="scss" scoped>

.skills {
    padding: 1rem;
    margin: 3rem 0;

    .inner {
        display: flex;
        align-items: center;
        flex-direction: column;

        .top {
            text-align: center;
            display: flex;
            align-items: center;

            h3 {
                font-size: 1.5rem;
                font-weight: 700;
                display: flex;
                align-items: center;

                span {
                    font-size: 3rem;
                }
            }
        }
        .skillList {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 1300px;
            margin-top: 2rem;

            .each {
                padding: 2rem;
                width: 15rem;
                margin: 0.5rem;
                border: 2px solid #eeeeee;
                background-color: #fcfcfc;
                border-radius: 0.5rem;

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

</style>