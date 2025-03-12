<template>
    <div class="container" id="projects">
        <div class="inner">
            <div data-aos="fade-up" class="each" v-for="i in projects" :key="i.id">
                <img data-aos-duration="1000" :src="i.image" :alt="i.name">
                <div class="cover">
                    <h3>{{ i.name }}</h3>
                    <p>{{ i.des }}</p>
                    <button @click="openLink(i.link)">View more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { projects } from '~/assets/js/usables';

const images = [
    '/images/caaleeMobile.png',
    '/images/markDoneWeb.png',
    '/images/homestead.png',
    '/images/atekerWeb.png',
    '/images/caaleeWeb.png',
    '/images/markDoneMobile.png',
    '/images/lionking.png',
]

const openLink = (link) => {
    window.open(link, '_blank')
}

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
        gap: 0.5rem;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

        .each {
            position: relative;
            border-radius: var(--mainRadius);
            overflow: hidden;
            z-index: 1;

            img {
                width: 100%;
                display: block;
            }

            .cover {
                z-index: 1;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

                padding: 2rem;
                opacity: 0;
                color: #eeeeee;

                h3 {
                    color: #ffffff;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 0.9rem;
                }

                button {
                    background-color: #ffffff;
                    color: #000000;
                    border: none;
                    margin-top: 1rem;
                    padding: 0.8rem 1.5rem;
                    border-radius: var(--mainRadius);
                    font-weight: 600;
                    cursor: pointer;
                }
            }

            &:hover {
                .cover {
                    opacity: 1;
                }
            }
        }

    }
}

@media (max-width: 700px) {
    .container {
        .inner {
            grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

            .each {
                .cover {
                    padding: 1rem;
                }
            }
        }
    }
}

@media (prefers-color-scheme: dark) {
    .container {
        .inner {
            .each {
                .cover {
                    button {
                        background-color: #000000;
                        color: #ffffff;
                        border: 2px solid #ffffff;
                    }
                }
            }
        }
    }
}
</style>