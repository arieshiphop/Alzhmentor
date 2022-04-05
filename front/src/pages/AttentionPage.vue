<template>
  <main>
    <Chips :max="3" v-model="options">
      <template #chip="slotProps">
        <div>
          <span>{{ slotProps.value }}</span>
          <i class="pi pi-user-plus" style="font-size: 14px"></i>
        </div>
      </template>
    </Chips>
    {{ randomNumber }}
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
    };
  },
  mounted() {
    this.createRandomSecuency();
  },
  methods: {
    createRandomSecuency() {
      this.randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
      return this.randomNumber;
    },
    checkIfOptionsAreCorrect() {
      if (this.options.includes(this.randomNumber.toString())) {
        okAlert("Correct", "You are correct!");
        this.createRandomSecuency();
        this.clearList();
      } else {
        onError("Incorrect", "You are incorrect!");
        this.createRandomSecuency();
        this.clearList();
      }
      for (let option of this.options) {
        if (option === this.randomNumber.toString()) {
        } else {
          alert("está mal");
        }
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
</style>