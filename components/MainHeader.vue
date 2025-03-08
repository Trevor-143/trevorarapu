<template>
    <div class="mainHeader">
        <div class="first">
            <div class="logo" data-aos="fade">
                <img src="/images/trevor.jpg" alt="Trevor Arapu">
                <p>Trevor Arapu</p>
            </div>
            <div class="jumps">
                <button data-aos="fade-down" data-aos-delay="0" @click="scrollToSection('intro')"
                    :class="{ active: activeSection === 'intro' }">Start</button>
                <button data-aos="fade-down" data-aos-delay="0" @click="scrollToSection('projects')"
                    :class="{ active: activeSection === 'projects' }">Projects</button>
                <button data-aos="fade-down" data-aos-delay="50" @click="scrollToSection('skills')"
                    :class="{ active: activeSection === 'skills' }">Toys</button>
                <button data-aos="fade-down" data-aos-delay="100" @click="scrollToSection('reviews')"
                    :class="{ active: activeSection === 'reviews' }">Reviews</button>
                <button data-aos="fade-down" data-aos-delay="150" @click="scrollToSection('about')"
                    :class="{ active: activeSection === 'about' }">About</button>
                <button data-aos="fade-down" data-aos-delay="200" @click="scrollToSection('contact')"
                    :class="{ active: activeSection === 'contact' }">Contact</button>
                <button data-aos="fade-down" data-aos-delay="250" @click="goToExternal('git')" >GitHub</button>
                <button data-aos="fade-down" data-aos-delay="300" @click="goToExternal('linkedIn')" >LinkedIn</button>
                <button data-aos="fade-down" data-aos-delay="350" @click="downloadResume('/images/Resume.pdf', 'TrevorArapu.pdf')" > <Icon name="line-md:download-outline-loop" /> Resume</button>
            </div>
            <div class="toggle" @click="toggleMiniMenu">
                <Icon name="svg-spinners:pulse-multiple" />
            </div>
        </div>
        <div class="smallMenu" :class="isMiniMenu ? 'showMini' : ''" @click="toggleMiniMenu" >
            <button data-aos="fade-down" data-aos-delay="0" @click="scrollToSection('intro')" >
                <Icon name="line-md:hazard-lights-loop" /> Start
            </button>
            <button data-aos="fade-down" data-aos-delay="0" @click="scrollToSection('projects')" >
                <Icon name="ri:archive-stack-line" /> Projects
            </button>
            <button data-aos="fade-down" data-aos-delay="50" @click="scrollToSection('skills')" >
                <Icon name="ic:baseline-code-off" /> Stack
            </button>
            <button data-aos="fade-down" data-aos-delay="100" @click="scrollToSection('reviews')" >
                <Icon name="material-symbols:edit-square-outline-sharp" /> Reviews
            </button>
            <button data-aos="fade-down" data-aos-delay="150" @click="scrollToSection('about')" >
                <Icon name="material-symbols:account-circle-outline" /> About
            </button>
            <button data-aos="fade-down" data-aos-delay="200" @click="scrollToSection('contact')" >
                <Icon name="material-symbols:call-log-outline-sharp" /> Contact
            </button>
            <button data-aos="fade-down" data-aos-delay="250" @click="goToExternal('git')" >
                <Icon name="uil:github-alt" /> GitHub
            </button>
            <button data-aos="fade-down" data-aos-delay="300" @click="goToExternal('linkedIn')" >
                <Icon name="streamline:computer-logo-linkedin-network-linkedin-professional" /> LinkedIn
            </button>
            <button data-aos="fade-down" data-aos-delay="350" @click="downloadResume('/images/Resume.pdf', 'TrevorArapu.pdf')" >
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

const activeSection = ref('');

const handleScroll = () => {
    const intro = document.getElementById('intro');
    const projects = document.getElementById('projects');
    const skills = document.getElementById('skills');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    // const testis = document.getElementById('testis');
    // Add more sections as needed

    const offset = 50; // Adjust this offset as needed

    if (intro && intro.getBoundingClientRect().top <= offset) {
        activeSection.value = 'intro';
    }

    if (projects && projects.getBoundingClientRect().top <= offset) {
        activeSection.value = 'projects';
    }
    if (skills && skills.getBoundingClientRect().top <= offset) {
        activeSection.value = 'skills';
    }
    // if (testis && testis.getBoundingClientRect().top <= offset) {
    //     activeSection.value = 'testis';
    // }
    if (about && about.getBoundingClientRect().top <= offset) {
        activeSection.value = 'about';
    }
    if (contact && contact.getBoundingClientRect().top <= offset) {
        activeSection.value = 'contact';
    }
};

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const goToExternal = (where) => {
    if(where === 'git') {
        window.open('https://github.com/Trevor-143/', '_blank')
    }
    if(where === 'linkedIn') {
        window.open('https://www.linkedin.com/in/arapu-trevor/', '_blank')
    }
}

const downloadResume = (resume, name) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', resume, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
        if (xhr.status === 200) {
            const blob = xhr.response;
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = name;
            a.click();
            URL.revokeObjectURL(a.href);
        } else {
            console.error('Failed to download the image.');
        }
    };
    xhr.send();
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});


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

                &:last-child {
                    background-color: #000000;
                    color: #eeeeee;
                    padding: 0.5rem 1rem;
                    border-radius: var(--mainRadius);
                    font-weight: 600;
                    display: flex;
                    align-items: center;

                    span {
                        margin-right: 0.5rem;
                        font-size: 1.5rem;
                    }
                }
            }

            .active {
                color: #000000;
                font-weight: 800;
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


@media (max-width: 950px) {
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