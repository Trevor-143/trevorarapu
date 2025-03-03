<template>
    <div class="mainHeader">
        <div class="first">
            <div class="logo" data-aos="fade" >
                <img src="/images/trevor.jpg" alt="Trevor Arapu">
                <p>Trevor Arapu</p>
            </div>
            <div class="jumps">
                <button data-aos="fade-down" data-aos-delay="0" >Projects</button>
                <button data-aos="fade-down" data-aos-delay="50" >Stack</button>
                <button data-aos="fade-down" data-aos-delay="100" >Reviews</button>
                <button data-aos="fade-down" data-aos-delay="150" >About</button>
                <button data-aos="fade-down" data-aos-delay="200" >Contact</button>
                <button data-aos="fade-down" data-aos-delay="250" >GitHub</button>
                <button data-aos="fade-down" data-aos-delay="300" >LinkedIn</button>
                <button data-aos="fade-down" data-aos-delay="350" >Resume</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mainHeader {
    position: fixed;
    // mix-blend-mode: difference;
    z-index: 1;

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
    }
}
</style>