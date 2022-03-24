<template>
  <NavBar></NavBar>
  <main>
    <section>
      <h1>{{ startMoney }}</h1>
      <input type="text" v-model="givedMoney" />
      <h2 v-if="startMoney == givedMoney" style="color: green">Completado</h2>
      <h2 v-else style="color: red">Equivocado</h2>
      <button @click="sendGameLog">Enviar</button>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { sendLogToProfile } from "@/services/logs.js";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      startMoney: "",
      givedMoney: "",
    };
  },
  mounted() {
    this.createRandomPrice();
  },
  methods: {
    createRandomPrice() {
      let randomNumber = Math.random() * 100;
      this.startMoney = randomNumber.toFixed(2);
    },
    async sendGameLog() {
      if (this.startMoney == this.givedMoney) {
        await sendLogToProfile(this.startMoney, this.givedMoney, true);
        console.log("Bien");
      } else {
        await sendLogToProfile(this.startMoney, this.givedMoney, false);
        console.log("Error");
      }
      this.createRandomPrice();
      this.givedMoney = "";
    },
  },
};
</script>

<style scoped>
section {
  display: grid;
  place-content: center;
  height: 90vh;
}
</style>