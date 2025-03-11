<template>
    <ClientOnly>
        <swiper-container ref="containerRef" :init="false">

            <swiper-slide v-for="slide in props.clientReviews" :key="slide.$id">

                <div class="each">

                    <div class="stars">
                        <div class="star">
                            <span class="inDark" v-for="(i, index) in slide.number" :key="index">
                                <Icon name="ic:round-star" color="fff16f" data-aos="fade-down" :data-aos-delay="index + 100" />
                            </span>
                        </div>
                    </div>

                    <div class="top">
                        <Icon data-aos="fade-left" class="openq" name="gravity-ui:quote-open" />
                        <p data-aos="fade" >{{ slide.message }}</p>
                        <Icon data-aos="fade-right" class="closeq" name="gravity-ui:quote-close" />
                    </div>

                    <div class="reviewer">
                        <Icon name="svg-spinners:3-dots-move" />
                        <h3 data-aos="fade-up" >{{ slide.name }}</h3>
                        <Icon name="svg-spinners:3-dots-move" />
                    </div>
                </div>

            </swiper-slide>

        </swiper-container>
    </ClientOnly>
</template>

<script setup>

const props = defineProps(['clientReviews'])

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            shadow: true,
            translate: [0, 0, -400],
        },
    },
})

onMounted(() => {
    console.log(swiper.instance)
})
</script>

<style lang="scss">
swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);

    .each {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;

        .stars {
            color: #dac400;
        }

        .top {
            position: relative;

            span {
                position: absolute;
                font-size: 3rem;
                color: rgba(119, 119, 119, 0.4);
            }

            .openq {
                top: 0;
                left: 0;
                margin-top: -1rem;
                margin-left: -1rem;
            }

            p {
                font-size: 1.5rem;
                line-height: 3.2rem;
                font-weight: 500;
                display: -webkit-box;
                line-clamp: 3;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                margin: 2rem;
            }

            .closeq {
                bottom: 0;
                right: 0;
                margin-bottom: -1rem;
                margin-right: -1rem;
            }
        }

        .reviewer {
            display: flex;
            align-items: center;
            margin-top: 1rem;
            color: #7a7a7a;

            h3 {
                margin: 0 1rem;

            }
        }
    }

}

@media (prefers-color-scheme: dark) {

    swiper-slide {
        background-color: #000000;
        color: rgb(255, 255, 255);

        .each {
            .stars {
                color: #fff16f;
            }
        }
    }
}

@media (max-width: 950px) {
    swiper-slide {
        .each {

            .top {
                .openq {
                    margin-top: 0rem;
                    margin-left: 0rem;
                }

                .closeq {
                    margin-bottom: 0rem;
                    margin-right: 0rem;
                }
            }
        }
    }
}

@media (max-width: 500px) {
    swiper-slide {
        .each {
            .top {
                p {
                    font-size: 1.2rem;
                    line-height: 2.5rem;
                    line-clamp: 4;
                    -webkit-line-clamp: 4;
                }
            }
        }
    }
}
</style>