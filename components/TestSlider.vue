<template>
    <div class="logos">
        <div class="logos-slide" ref="logosSlide">
            <img v-for="(img, index) in images" :key="index" :src="img" alt="logo" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([
    'https://source.unsplash.com/random/100x50?sig=1',
    'https://source.unsplash.com/random/100x50?sig=2',
    'https://source.unsplash.com/random/100x50?sig=3',
    'https://source.unsplash.com/random/100x50?sig=4',
    'https://source.unsplash.com/random/100x50?sig=5',
    'https://source.unsplash.com/random/100x50?sig=6',
    'https://source.unsplash.com/random/100x50?sig=7',
    'https://source.unsplash.com/random/100x50?sig=8'
]);

const logosSlide = ref(null);

onMounted(() => {
    if (logosSlide.value) {
        const clone = logosSlide.value.cloneNode(true);
        logosSlide.value.parentNode.appendChild(clone);
    }
});
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #f2f2f2;
}

@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

.logos {
    overflow: hidden;
    padding: 60px 0;
    background: white;
    white-space: nowrap;
    position: relative;
}

.logos:before,
.logos:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
}

.logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
    animation-play-state: paused;
}

.logos-slide {
    display: inline-block;
    animation: 35s slide infinite linear;
}

.logos-slide img {
    height: 50px;
    margin: 0 40px;
}
</style>