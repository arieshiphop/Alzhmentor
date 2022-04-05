<template>
  <NavBar></NavBar>
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
$blue-grey: #1a3a38;
$pink: #fab4cb;
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
body {
  background: #77a1d3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e684ae,
    #79cbca,
    #77a1d3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #e684ae, #79cbca, #77a1d3);
}
button:hover {
  cursor: pointer;
  font-weight: bold;
}

::selection {
  color: $pink;
  background: $blue-grey;
}
</style>
