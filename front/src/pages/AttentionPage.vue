<template>
  <NavBar></NavBar>
  <main>
    <h2 v-bind:class="{ cleared: disabledClass }">
      {{ randomNumber }}
    </h2>
    <Chips :max="3" v-model="options" separator="," class="input">
      <template #chip="slotProps">
        <div>
          <span>{{ slotProps.value }}</span>
          <i class="pi pi-user-plus" style="font-size: 14px"></i>
        </div>
      </template>
    </Chips>
    <p>Pulsa enter para añadir posible respuesta</p>
    <Button label="Check" @click="checkIfOptionsAreCorrect" />
  </main>
</template>

<script>
import { sendLogToProfile } from "@/services/logs.js";
import Chips from "primevue/chips";
import Swal from "sweetalert2";
import Button from "primevue/button";
import { addExperiencie } from "@/services/levels.js";
export default {
  components: {
    Button,
    Chips,
  },
  data() {
    return {
      options: [],
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
      if (this.options.includes(this.randomNumber.toString())) {
        Swal.fire({
          title: "Nice!",
          text: "You found the number!",
          icon: "success",
          confirmButtonText: "Play again",
        }).then((e) => {
          sendLogToProfile(this.randomNumber, this.options, true, "Attention");
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
          sendLogToProfile(this.randomNumber, this.options, false, "Attention");
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
  animation: puff-in 1s ease-out forwards;
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
.p-chips {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
}

.p-chips-multiple-container {
  display: flex;
  flex-wrap: nowrap;
}
</style>