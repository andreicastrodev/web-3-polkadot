<template lang="">

    <main class="main__block">
        <div class="main__block--left"><UserActions/></div>
        <div class="main__block--right"><UserView/></div>
    </main>
</template>
<script>
import UserActions from '../../components/User/UserActions.vue';
import UserView from '../../components/User/UserView.vue';
export default {
    components:{
        UserActions,
        UserView
    }
}
</script>
<style lang="scss">

    .main__block{
        color: white;
        background-color:rgba(0,0,0,1);
        padding: 2rem;
        gap: 2rem;
        display: flex;
        height: 127vh;
        justify-content: baseline;
        &--left{
            flex-basis: 30%;
        }

        &--right{
            flex-basis: 70%;

        }
    }
</style>