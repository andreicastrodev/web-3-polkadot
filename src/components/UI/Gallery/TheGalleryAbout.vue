<template lang="">
    <div class="about">
        <h1 class="about__title">About</h1>
        <p class="about__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus reiciendis velit, deleniti voluptatem similique quia aspernatur vitae sapiente magnam minus corporis eveniet,
         beatae soluta excepturi? Nobis rerum numquam libero! </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
    .about{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        gap: 2rem;
        &__title{
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        &__content{
            letter-spacing: 2px;
            font-weight: 500;
            width: 70%;
        }
    }

</style>