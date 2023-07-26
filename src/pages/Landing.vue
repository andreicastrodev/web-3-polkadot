<template lang="">
    <div class="landing">
        <TheLandingOverlay/>
        <TheAnimatedObjectVue/>
        <TheGallery/>
    </div>
</template>
<script>
import TheAnimatedObjectVue from '../components/UI/TheAnimatedObject.vue';
import TheLandingOverlay from "../components/UI/TheLandingOverlay.vue"
import TheGallery from '../components/UI/Gallery/TheGallery.vue';
export default {
     
    components:{
        TheAnimatedObjectVue,
        TheLandingOverlay,
        TheGallery
    }
}
</script>
<style scoped lang="scss">
    .landing{
        position: relative;
        overflow: hidden;
    }
</style>