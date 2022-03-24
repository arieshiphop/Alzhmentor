<template>
  <NavBar></NavBar>
  <main>
    <section>
      <h1>{{ dineroEntregado }}</h1>
      <input type="text" v-model="dineroOfrecido" />
      <h2 v-if="dineroEntregado == dineroOfrecido" style="color: green">
        Completado
      </h2>
      <h2 v-else style="color: red">Equivocado</h2>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      dineroEntregado: "",
      dineroOfrecido: "",
    };
  },
  mounted() {
    this.formatMoney();
  },
  methods: {
    formatMoney() {
      let numeroAleatorio = Math.random() * 100;
      this.dineroEntregado = numeroAleatorio.toFixed(2);
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