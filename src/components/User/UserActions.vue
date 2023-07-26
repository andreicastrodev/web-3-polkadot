<template lang="">
    <div class="actions">
        <button class="actions__btn">Get User Info</button>
        <button class="actions__btn">Get Chain ID</button>
        <button class="actions__btn">Create NFT</button>
        <button class="actions__btn">My NFTs</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .actions{
        display:flex;
        flex-direction:  column;
        gap: 1rem;
        &__btn{
            padding: 1rem 1.5rem
        }
    }
</style>