<template>
  <TheHeader/>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*,
*::after,
*::before{
	margin:0;
	padding:0;
	box-sizing: inherit;
}
	

html {
  font-family: "Roboto", sans-serif;
}



</style>