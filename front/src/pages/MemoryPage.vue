<template>
  <NavBar></NavBar>
  <main>
    <section class="main-container">
      <h1>{{ actualWord }}</h1>
      <InputText placeholder="Sentence" v-model="sentence" />
      <Button @click="sendGameLog" label="Verify"></Button>
    </section>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Swal from "sweetalert2";
import { sendLogToProfile } from "@/services/logs.js";

export default {
  components: {
    NavBar,
    InputText,
    Button,
  },
  data() {
    return {
      actualWord: "",
      timeInterval: 2000,
      fullWord: "",
      sentence: "",
    };
  },
  created() {
    this.splitText();
  },
  methods: {
    async loadData() {
      let response = await fetch("https://random-word-api.herokuapp.com/word");
      let data = await response.json();
      console.log(data[0]);
      this.fullWord = data[0];
    },
    readText(text) {
      if ("speechSynthesis" in window) {
        let message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
      } else {
        alert("Sorry, your browser doesn't support text to speech!");
      }
    },

    splitText() {
      this.loadData();
      let i = 0;
      setInterval(() => {
        let word = this.fullWord;
        this.timeInterval = 2000;
        if (i < word.length) {
          this.readText(word[i]);
          this.actualWord = word[i];
          i++;
        }
      }, this.timeInterval);
    },
  },
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
</style>