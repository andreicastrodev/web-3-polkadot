<template lang="">

<button class="btn">
    <slot> </slot>
</button>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
    .btn {
            background-image: linear-gradient(to right, black 0%, red  51%, black  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
            border-color: none;
            letter-spacing: 2px;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            border-radius: 10px;
            display: block;
            cursor: pointer;

            &:hover{
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
            transform: translateY(-2px);
            }

            &:active{
                transform: translateY(2px);
            }
          }

</style>