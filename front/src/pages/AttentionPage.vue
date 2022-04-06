<template>
  <main>
    <h2 v-bind:class="{ cleared: disabledClass }">
      {{ randomNumber }}
    </h2>
    <Chips :max="3" v-model="options">
      <template #chip="slotProps">
        <div>
          <span>{{ slotProps.value }}</span>
          <i class="pi pi-user-plus" style="font-size: 14px"></i>
        </div>
      </template>
    </Chips>

    <button @click="checkIfOptionsAreCorrect">Check</button>
  </main>
</template>

<script>
import Chips from "primevue/chips";
import Swal from "sweetalert2";
import { okAlert, onError } from "@/services/alerts.js";

export default {
  components: {
    Chips,
  },
  data() {
    return {
      options: [],
      randomNumber: 0,
      play: 0,
      disabledClass: false,
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
      return this.randomNumber;
    },
    disableNumber() {
      setInterval(() => {
        let timeInterval = 5000;
        this.disabledClass = true;
      }, timeInterval);
    },

    checkIfOptionsAreCorrect() {
      if (this.options.includes(this.randomNumber.toString())) {
        Swal.fire({
          title: "Nice!",
          text: "You found the number!",
          icon: "success",
          confirmButtonText: "Play again",
        }).then((e) => {
          console.log("funciona");
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
          console.log("funciona");
          this.createRandomSecuency();
          this.clearList();
        });
      }
    },
    clearList() {
      const listCleared = [];
      this.options = listCleared;
    },
  },
};
</script>

<style>
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
</style>