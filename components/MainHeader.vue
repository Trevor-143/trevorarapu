<template>
    <div class="mainHeader">
        <div class="first">
            <div class="logo" data-aos="fade">
                <img src="/images/trevor.jpg" alt="Trevor Arapu">
                <p>Trevor Arapu</p>
            </div>
            <div class="jumps">
                <button data-aos="fade-down" data-aos-delay="0">Projects</button>
                <button data-aos="fade-down" data-aos-delay="50">Stack</button>
                <button data-aos="fade-down" data-aos-delay="100">Reviews</button>
                <button data-aos="fade-down" data-aos-delay="150">About</button>
                <button data-aos="fade-down" data-aos-delay="200">Contact</button>
                <button data-aos="fade-down" data-aos-delay="250">GitHub</button>
                <button data-aos="fade-down" data-aos-delay="300">LinkedIn</button>
                <button data-aos="fade-down" data-aos-delay="350">Resume</button>
            </div>
            <div class="toggle" @click="toggleMiniMenu">
                <Icon name="svg-spinners:pulse-multiple" />
            </div>
        </div>
        <div class="smallMenu" :class="isMiniMenu?'showMini':''" >
            <button data-aos="fade-down" data-aos-delay="0">
                <Icon name="ri:archive-stack-line" /> Projects
            </button>
            <button data-aos="fade-down" data-aos-delay="50">
                <Icon name="ic:baseline-code-off" /> Stack
            </button>
            <button data-aos="fade-down" data-aos-delay="100">
                <Icon name="material-symbols:edit-square-outline-sharp" /> Reviews
            </button>
            <button data-aos="fade-down" data-aos-delay="150">
                <Icon name="material-symbols:account-circle-outline" /> About
            </button>
            <button data-aos="fade-down" data-aos-delay="200">
                <Icon name="material-symbols:call-log-outline-sharp" /> Contact
            </button>
            <button data-aos="fade-down" data-aos-delay="250">
                <Icon name="uil:github-alt" /> GitHub
            </button>
            <button data-aos="fade-down" data-aos-delay="300">
                <Icon name="streamline:computer-logo-linkedin-network-linkedin-professional" /> LinkedIn
            </button>
            <button data-aos="fade-down" data-aos-delay="350">
                <Icon name="material-symbols:attach-file" /> Resume
            </button>
        </div>
    </div>
</template>

<script setup>

const isMiniMenu = useCookie('isMiniMenu', { sameSite: 'lax' })

const toggleMiniMenu = () => {
    isMiniMenu.value = !isMiniMenu.value
}

</script>

<style lang="scss" scoped>
.mainHeader {
    position: fixed;
    // mix-blend-mode: difference;
    z-index: 1;
    display: flex;
    flex-direction: column;

    .first {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding: 0.8rem;
        background-color: rgba(255, 255, 255, 0.7);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;

        .logo {
            display: flex;
            align-items: center;

            img {
                width: 45px;
                border-radius: 50%;
                object-fit: cover;
                border: 5px solid #eeeeee;
            }

            p {
                margin-left: 0.5rem;
                font-size: 0.8rem;
                text-transform: uppercase;
                font-weight: 600;
            }
        }


        .jumps {
            display: flex;
            align-items: center;

            button {
                font-size: 0.8rem;
                margin-left: 2rem;
                border: none;
                background: none;
                color: var(--lightText);

                &:last-child {
                    margin-right: 1.2rem;
                }

                &:hover {
                    font-weight: 600;
                    cursor: pointer;
                }

            }
        }

        .toggle {
            display: none;
            background-color: rgba(119, 119, 119, 0.5);
            border-radius: 50%;

            span {
                font-size: 3rem;
            }

            .miniMenu {
                display: none;
            }
        }
    }

    .smallMenu {
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.7);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        width: 100vw;
        padding: 1rem;
        padding-left: 2rem;
        margin-top: 4.5rem;
        transform: translateY(-100%);
        opacity: 0;

        button {
            width: fit-content;
            margin-bottom: 1.5rem;
            background: none;
            border: none;
            font-size: 1.1rem;

            display: flex;
            align-items: center;

            span {
                font-size: 1.5rem;
                margin-right: 1rem;
            }
        }
    }

    .showMini {
        transform: translateY(0);
        opacity: 1;
    }
}


@media (max-width: 850px) {
    .mainHeader {
        .first {
            .jumps {
                display: none;
            }

            .toggle {
                display: flex;
            }
        }
    }
}

@media (prefers-color-scheme: dark) {
    .mainHeader {
        .first {
            background-color: rgba(0, 0, 0, 0.7);
            color: #ffffff;

            .jumps {
                button {
                    color: #eeeeee;
                }
            }
        }

        .smallMenu {
            background-color: rgba(0, 0, 0, 0.7);

            button {
                width: fit-content;
                margin-bottom: 1.5rem;
                background: none;
                border: none;
                font-size: 1.1rem;
                color: #eeeeee;
                display: flex;
                align-items: center;

                span {
                    font-size: 1.5rem;
                    margin-right: 1rem;
                }
            }
        }
    }
}
</style>