<template>
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import config from "@/config.js";
export default {
  components: {
    NavBar,
  },
  mounted() {
    this.getLoggedUser();
  },
  methods: {
    async getLoggedUser() {
      let user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(`${config.API_PATH}/users/${user.id}`);
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
    },
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
