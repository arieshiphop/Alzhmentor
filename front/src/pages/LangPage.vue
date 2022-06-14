<template>
  <NavBar></NavBar>
  <main>
    <PagTitle title="Show me your lang" />
    <section>
      <article>
        <h2>
          Write a short sentence or short story with words from the same group.
        </h2>
        <div class="words">
          <p v-for="word in words" :key="word">{{ word }} -</p>
        </div>
        <InputText placeholder="Sentence" v-model="sentence" />
        <Button label="Send" @click="sendGameLog" />
      </article>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Swal from "sweetalert2";
import { sendLogToProfile } from "@/services/logs.js";
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
      words: [],
      sentence: "",
      count: "",
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async sendGameLog() {
      for (const word in this.words) {
        if (this.sentence.includes(this.words[word])) {
          this.count++;
        }
      }
      if (this.count >= 3) {
        Swal.fire({
          title: "Sucess!",
          text: "Continue",
          icon: "success",
          confirmButtonText: "Continue",
        }).then(async (response) => {
          if (response.isConfirmed) {
            await sendLogToProfile(
              this.words,
              this.sentence,
              true,
              "Languages"
            );
            this.count = 0;
            this.sentence = "";
            this.words = [];
            this.loadData();
          }
        });
      } else {
        if (this.count == "") {
          this.count = 0;
        }
        Swal.fire({
          title: "Failed!",
          text: `Fail, you marked ${this.count} words`,
          icon: "error",
          confirmButtonText: "Continue",
        }).then(async (response) => {
          if (response.isConfirmed) {
            await sendLogToProfile(
              this.words,
              this.sentence,
              false,
              "Languages"
            );
            this.count = 0;
            this.sentence = "";
            this.words = [];
            this.loadData();
          }
        });
      }
    },
    async loadData() {
      while (this.words.length < 5) {
        let response = await fetch(
          "https://random-word-api.herokuapp.com/word"
        );
        let data = await response.json();
        this.words.push(data[0]);
      }
    },
  },
};
</script>

<style>
* {
  font-family: Poppins;
}

article {
  text-align: center;
}
</style>
