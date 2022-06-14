<template>
  <NavBar></NavBar>
  <main>
    <PagTitle title="Remember..." />
    <section class="main-container">
      <h1>{{ actualWord }}</h1>
      <InputText placeholder="Sentence" v-model="sentence" />
      <Button @click="checkIfOptionsAreCorrect" label="Verify"></Button>
    </section>
  </main>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Swal from "sweetalert2";
import { sendLogToProfile } from "@/services/logs.js";
import { addExperiencie } from "@/services/levels.js";
import PagTitle from "../components/PagTitle.vue";

export default {
  components: {
    NavBar,
    InputText,
    Button,
    PagTitle,
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
    checkIfOptionsAreCorrect() {
      if (this.sentence == this.fullWord) {
        Swal.fire({
          title: "Nice!",
          text: "You found the word!",
          icon: "success",
          confirmButtonText: "Play again",
        }).then((e) => {
          sendLogToProfile(this.fullWord, this.sentence, true, "Memory");
          addExperiencie();
          this.sentence = "";
          this.fullWord = "";
          this.actualWord = "";
          this.splitText();
        });
      } else {
        Swal.fire({
          title: "Fail!",
          text: "You didn't find the word!",
          icon: "error",
          confirmButtonText: "Play again",
        }).then((e) => {
          sendLogToProfile(this.fullWord, this.sentence, false, "Memory");
          window.speechSynthesis.cancel();
          this.sentence = "";
          this.fullWord = "";
          this.actualWord = "";
          this.splitText();
        });
      }
    },
    readText(text) {
      if ("speechSynthesis" in window) {
        let message = new SpeechSynthesisUtterance();
        message.text = text;
        window.speechSynthesis.speak(message);
        console.log("texto", message.text);
        console.log(this.fullWord);
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
