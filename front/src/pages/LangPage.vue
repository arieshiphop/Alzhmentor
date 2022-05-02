<template>
  <main>
    <section>
      <article>
        <h2>
          Escriba una frase o historia corta con las palabras de un mismo grupo.
        </h2>
        <p v-for=""></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      words: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      let response = await fetch(
        "https://palabras-aleatorias-public-api.herokuapp.com/multiple-random"
      );
      let data = await response.json();
      this.words = data.body;
    },
  },
};
</script>

<style>
article {
  text-align: center;
}
</style>