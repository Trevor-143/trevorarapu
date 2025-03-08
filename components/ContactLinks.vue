<template>
    <div class="contLinks" id="contact" >
        <div class="inner">
            <a data-aos="fade-up" data-aos-delay="100" href="tel:+256 756 447856">
                <Icon name="mdi:phone-dial" />
            </a>
            <a data-aos="fade-up" data-aos-delay="200" href="mailto:trevorarapu2@gmail.com">
                <Icon name="logos:google-gmail" />
            </a>
            <a data-aos="fade-up" data-aos-delay="300" href="https://github.com/Trevor-143/">
                <Icon name="logos:git-icon" />
            </a>
            <a data-aos="fade-up" data-aos-delay="400"
                href="https://www.linkedin.com/in/arapu-trevor?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuJANjAAdT3yQZrBDLrG%2Bfw%3D%3D">
                <Icon name="logos:linkedin-icon" />
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10rem;

    .inner {
        display: flex;
        align-items: center;

        a {
            border: 2px solid #eeeeee;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            background-color: #f5f5f5;

            span {
                font-size: 3rem;

                &:first-child {
                    color: #000000;
                }
            }
        }
    }
}

@media (prefers-color-scheme: dark) {
    .contLinks {
        .inner {
            a {
                border: 2px solid #2c2c2c;
                background-color: #131313;

                span {
                    &:first-child {
                        color: #ffffff;
                    }
                }
            }
        }
    }
}

@media (max-width: 700px) {
    .contLinks {
        .inner {
            a {
                width: 60px;
                height: 60px;
                margin: 0.4rem;

                span {
                    font-size: 1.7rem;
                }
            }
        }
    }
}
</style>