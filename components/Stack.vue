<template>
    <div class="stackContainer">
        <div class="inner">
            <div class="topStack">
                <h2 data-aos="fade-up" data-aos-duration="1000" >
                    <Icon name="tabler:stack-3" />
                    Technology Stack
                </h2>
            </div>
            <div class="stackListCont" data-aos="fade-left" data-aos-duration="1000" >
                <div class="stackList" >
                    <div class="oneStack" v-for="(t, index) in tech" :key="index">
                        <img :src="t.img" :alt="t.name">
                        <div>
                            <h2>{{ t.name }}</h2>
                            <p>{{ t.category }}</p>
                        </div>
                    </div>
                </div>
                <div class="stackList">
                    <div class="oneStack" v-for="(t, index) in tech" :key="index">
                        <img :src="t.img" :alt="t.name">
                        <div>
                            <h2>{{ t.name }}</h2>
                            <p>{{ t.category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const tech = ref([
    { name: 'JavaScript', img: '/stack/js.png', category: 'Web development' },
    { name: 'Css', img: '/stack/css.png', category: 'Web development' },
    { name: 'Html', img: '/stack/html.png', category: 'Web development' },
    { name: 'Vue 3 js', img: '/stack/vuejs.png', category: 'Front-end development' },
    { name: 'Nuxt 3 js', img: '/stack/nuxtjs.png', category: 'Front-end developement' },
    { name: 'Node js', img: '/stack/nodejs.png', category: 'Back-end developement' },
    { name: 'Ionic', img: '/stack/ionic.png', category: 'App developement' },
    { name: 'Firebase', img: '/stack/firebase.png', category: 'Data Storage & Auth' },
    { name: 'Figma', img: '/stack/figma.png', category: 'Design' },
    { name: 'Capacitor js', img: '/stack/capacitor.png', category: 'App developement' },
    { name: 'Appwrite', img: '/stack/appwrite.png', category: 'Data Storage & Auth' }
])

</script>

<style lang="scss" scoped>
.stackContainer {
    .inner {
        margin: 5rem 0;
        overflow: hidden;

        .topStack {
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;

            h2 {
                max-width: 1350px;
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                font-size: 1rem;

                span {
                    margin-right: 1rem;
                    font-size: 2rem;
                }
            }

        }

        .stackListCont {
            display: flex;
            align-items: center;

            .stackList {
                display: flex;
                flex-direction: row;
                align-items: center;
                flex-wrap: nowrap;
                animation: tScroll 100s linear infinite;

                .oneStack {
                    display: flex;
                    flex-direction: row;
                    border: 1px solid #eeeeee;
                    padding: 1rem;
                    min-width: 310px;
                    margin: 0 1rem;

                    img {
                        max-height: 60px;
                        width: 100%;
                        width: auto;
                        margin-right: 1rem;
                        filter: grayscale(100%);
                    }

                    div {
                        display: flex;
                        flex-direction: column;

                        h2 {
                            font-size: 1rem;
                        }

                        p {
                            font-size: 0.8rem;
                        }
                    }

                    &:hover {
                        img {
                            filter: grayscale(0%);
                        }
                    }
                }
            }
        }
    }
}

@keyframes tScroll {

    to {
        transform: translateX(calc(-100% - 5px));
    }
}
</style>