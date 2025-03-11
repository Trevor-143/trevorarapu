<template>
    <div class="clientReviews" id="reviews">
        <div class="top">
            <h3 data-aos="fade-down" >What Are people saying?</h3>
            <p data-aos="fade-up" >Hey hey! if the projects a not convincing enough, let see what my clients are saying about working with
                me.😁 </p>
        </div>
        <div class="revCont">
            <ReviewsContainer :clientReviews="Testimonials" />
        </div>
    </div>
</template>

<script setup>
import { collection, getDocs } from "firebase/firestore";
import { DataStore } from "../firebase/config"

const Testimonials = ref([])
const getTests = async () => {
    const temp = []
    const querySnapshot = await getDocs(collection(DataStore, "reviews"));
    querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());
        const one = {
            id: doc.id,
            ...doc.data()
        }
        temp.push(one)
    });
    Testimonials.value = temp
    console.log(Testimonials.value)
}

onMounted(() => {
    getTests()
})

</script>

<style lang="scss" scoped>
.clientReviews {

    display: flex;
    flex-direction: column;

    .top {
        padding-top: 6rem;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 3rem;

        h3 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        p {
            max-width: 700px;
        }
    }
    .revCont {
        margin-bottom: 4rem;
    }
}

@media (max-width: 950px) {
    .clientReviews {
        padding: 1rem;

        .top {
            h3 {
                font-size: 1.5rem;
            }
        }
    }
}

@media (prefers-color-scheme: dark) {
    .clientReviews {
        .top {
            color: #eeeeee;
        }
    }
}

</style>