<template lang="">
    <main class="gallery">
        <div class="gallery__about"><TheGalleryAboutVue/></div>
        <div class="gallery__images"><TheGalleryImages/></div>
    </main>
</template>
<script>
import TheGalleryImages from './TheGalleryImages.vue';
import TheGalleryAboutVue from './TheGalleryAbout.vue';
export default {
    components:{
        TheGalleryImages,
        TheGalleryAboutVue
    }
}
</script>
<style lang="scss">
   .gallery{
    color: white;
    background-color: black;
    margin-top: -1rem;
    padding: 2rem;
    height: 100%;
   } 
</style>