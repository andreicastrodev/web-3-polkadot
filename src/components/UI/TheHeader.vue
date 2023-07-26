<template lang="">
   <header class="header"> 
    <div class="header__block">
    <h1 class="header__title">90210-</h1>
    </div>
    <div class="header__block">
        <UserLogin/>
    </div>
   </header>
</template>
<script>
import UserLogin from '../User/UserLogin.vue';
export default {
    components:{
        UserLogin
    }


}
</script>
<style scoped lang="scss">
    .header{
        background-color: black;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__block{

        }

        &__title{
            font-size:  2rem;
            text-transform: uppercase;
            letter-spacing: 5px;
            color: #fff;
        }
    }

         
         

         

         

</style>