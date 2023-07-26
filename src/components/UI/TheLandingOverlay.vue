<template lang="">
    <div class="overlay">
        <h1 class="overlay__title">The most Advanced Application</h1>
        <p class="overlay__text">Utilizing Polkadot: A cutting-edge blockchain platform connecting diverse blockchains,
         fostering innovation, and ensuring secure, scalable networks.</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .overlay{
        position: absolute;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        gap: 2rem;
        color: white;
        &__title{
            letter-spacing: 2px;
        }

        &__text{
            letter-spacing: 1px;
            line-height: 1.5rem;
            font-weight: 500;
        }
    }
</style>