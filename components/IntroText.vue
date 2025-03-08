<template>
    <div class="mainIntro" id="intro" >
        <div class="inner">
            <h1 data-aos="fade-down" data-aos-duration="1000" >Hey there! I'm a Front-End developer with some Back-End knowledge, and I also love design.</h1>
            <p data-aos="fade-up" >Basically, it means I am capable of taking on a project solo from beginning to end, and it won't suck, depending on its scale though. <span>😂</span></p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mainIntro {
    max-width: 1350px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner {
        margin-top: 15vh;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;

        h1 {
            font-family: "Montserrat", sans-serif;
            font-size: 3rem;
            max-width: 900px;
        }

        p {
            max-width: 700px;
            margin-top: 1rem;

            span {
                font-size: 1rem;
            }
        }

        span {
            font-size: 3rem;
            width: 3rem;
        }
    }
}

@media (prefers-color-scheme: dark) {
    .mainIntro {
        .inner {
            color : #eeeeee;

            h1 {
                color: #ffffff;
            }
        }
    }
}

@media (max-width: 700px) {
    .mainIntro {
        .inner {
            margin-top: 7vh;
            
            h1 {
                font-size: 2rem;
            }
        }
    }
}

</style>