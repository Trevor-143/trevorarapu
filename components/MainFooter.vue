<template>
    <div class="mainFooter">
        <div class="inner">
            <p>@ {{ currYear }}</p>
            <p>Trevor Arapu</p>
        </div>
    </div>
</template>

<script setup>

const currYear = new Date().getFullYear()

</script>

<style lang="scss" scoped>
.mainFooter {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
    border-top: #d3d3d3;
    padding: 5%;

    .inner {
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        p {
            display: flex;
            align-items: center;

            &:last-child {
                text-transform: uppercase;
                font-size: 0.9rem;
                font-weight: 800;
                margin-left: 1rem;
            }
        }
    }
}

@media (prefers-color-scheme: dark) {
    .mainFooter {
        background-color: #141414;
        border-top: #353535;

        .inner {
            color: #b6b6b6;
        }
    }
}
</style>