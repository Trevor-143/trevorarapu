<template>
    <!-- <div class="comp"> -->
    <NuxtMarquee :gradientWidth="50" :gradient="true"
        :gradientColor="colorMode.value === 'light' ? '#ffffff' : '#000000'" :pauseOnHover="true">
        <div class="one" v-for="(i, idx) in companies" :key="idx">
            <img :src="i.image" :alt="i.name">
            <h4>{{ i.name }}</h4>
        </div>
    </NuxtMarquee>
    <!-- </div> -->
</template>

<script setup>

const colorMode = useColorMode()

const companies = [
    { image: 'https://ateker.vercel.app/logo/logo.webp', name: 'Ateker Villas' },
    { image: 'https://www.page256library.com/logo/logoLight.png', name: 'Page 256' },
    { image: 'https://www.tourguidesforumuganda.org/_vercel/image?url=%2Flogo%2FtourGuidesLogo.jpg&w=1536&q=100', name: 'Tour Guides Forum Uganda' },
    { image: 'https://www.mark-done.com/images/mark-done-logo.png', name: 'Mark Done' },
    { image: 'https://www.homesteadtoursandsafaris.com/images/logo.webp', name: 'Homestead safaris' },
    { image: 'https://www.thelionkingsafaris.com/images/lionSafari.png', name: 'The Lionking Safari LTD' },
    { image: 'https://www.caalee.com/logo/caalee_logo.png', name: 'Caalee' },
    { image: 'https://th.bing.com/th/id/OIP.CfI_xoH4JGVKhC2B-qyydAAAAA?w=139&h=150&c=7&r=0&o=5&pid=1.7', name: 'Zurilabs Africa' }
    // { image: '/images/atekerWeb.png', name: 'Ateker Villas' },
    // { image: '/images/atekerWeb.png', name: 'Ateker Villas' },
]

</script>

<style lang="scss" scoped>
// .comp {
//     width: 100%;
//     // background-color: red;
//     width: fit-content;

.one {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    padding: 1rem;
    border: 2px solid #eeeeee;
    background-color: #f3f3f3;
    border-radius: var(--mainRadius);
    padding: 1rem;

    img {
        height: 40px;
        margin-right: 0.5rem;
        border-radius: var(--mainRadius);
    }

    h4 {
        font-size: 0.8rem;
        font-weight: 400;
    }
}

@media (prefers-color-scheme: dark) {
    .one {
        border: 2px solid #2c2c2c;
        background-color: #131313;
        color: #eeeeee;
    }
}

// }</style>