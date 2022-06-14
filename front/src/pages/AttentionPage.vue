<template>
  <NavBar></NavBar>
  <main>
    <PagTitle title="Pay attention" />
    <h2 v-bind:class="{ cleared: disabledClass }">
      {{ randomNumber }}
    </h2>
    <InputText v-model="option"></InputText>
    <p>Write the possible answer in the input, then click button.</p>
    <Button label="Check" @click="checkIfOptionsAreCorrect" />
  </main>
</template>

<script>
import { sendLogToProfile } from "@/services/logs.js";
import InputText from "primevue/inputtext";
import Swal from "sweetalert2";
import Button from "primevue/button";
import NavBar from "../components/NavBar.vue";
import { addExperiencie } from "@/services/levels.js";
import PagTitle from "../components/PagTitle.vue";
export default {
  components: {
    Button,
    NavBar,
    InputText,
    PagTitle,
  },
  data() {
    return {
      option: "",
      randomNumber: 0,
      play: 0,
      disabledClass: false,
      timeInterval: 5000,
    };
  },
  mounted() {
    this.createRandomSecuency();
  },
  methods: {
    createRandomSecuency() {
      this.disabledClass = false;
      this.randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
      this.disableNumber();
    },
    disableNumber() {
      setInterval(() => {
        this.timeInterval = 5000;
        this.disabledClass = true;
      }, this.timeInterval);
    },

    checkIfOptionsAreCorrect() {
      if (this.option == this.randomNumber) {
        Swal.fire({
          title: "Nice!",
          text: "You found the number!",
          icon: "success",
          confirmButtonText: "Play again",
        }).then((e) => {
          sendLogToProfile(this.randomNumber, this.option, true, "Attention");
          addExperiencie();
          this.createRandomSecuency();
          this.clearList();
        });
      } else {
        Swal.fire({
          title: "Fail!",
          text: "You didn't find the number!",
          icon: "error",
          confirmButtonText: "Play again",
        }).then((e) => {
          sendLogToProfile(this.randomNumber, this.option, false, "Attention");
          this.createRandomSecuency();
          this.clearList();
        });
      }
    },
    clearList() {
      this.option = "";
    },
  },
};
</script>

<style scoped>
main {
  animation: puff-in 1s ease-out forwards;
  gap: 1.5rem;
}
@keyframes puff-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@import url("https://fonts.googleapis.com/css2?family=Wendy+One&display=swap");

body {
  font-family: "Wendy One", sans-serif;
  background: #f7ca05;
  display: flex;
  align-content: center;
  justify-content: center;
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.cleared {
  display: none;
}
p {
  text-align: center;
  width: 15rem;
}
</style>
