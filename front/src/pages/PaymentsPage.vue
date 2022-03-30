<template>
  <NavBar></NavBar>
  <main>
    <section>
      <h1>Money to pay: {{ startMoney }} 💵</h1>
      <h2>Paid money: {{ givedMoney }} 💸</h2>

      <!-- <h2 v-if="startMoney == givedMoney" style="color: green">Completado</h2>
      <h2 v-else style="color: red">Equivocado</h2> -->
      <article class="parent">
        <div v-for="coin in money.coins" :key="coin.value">
          <img
            @click="addMoney(coin)"
            class="money"
            :src="coin.img"
            alt="Money buttons"
          />
        </div>
      </article>
      <Button label="Submit" class="p-button-raised" @click="sendGameLog" />
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { sendLogToProfile } from "@/services/logs.js";
import coins from "@/coins.js";
import Swal from "sweetalert2";
import Button from "primevue/button";
import Dock from "primevue/dock";

export default {
  components: {
    NavBar,
    Button,
    Dock,
  },
  data() {
    return {
      startMoney: "",
      givedMoney: 0.0,
      money: coins,
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
      if (this.givedMoney != 0 || this.givedMoney != "") {
        if (this.startMoney == this.givedMoney) {
          Swal.fire({
            title: "Sucess!",
            text: "Continue",
            icon: "success",
            confirmButtonText: "Continue",
          });
          await sendLogToProfile(this.startMoney, this.givedMoney, true);
        } else {
          Swal.fire({
            title: "Failed!",
            text: `Continue, you marked ${this.givedMoney}$`,
            icon: "error",
            confirmButtonText: "Continue",
          });
          await sendLogToProfile(this.startMoney, this.givedMoney, false);
        }
        this.createRandomPrice();
        this.givedMoney = 0.0;
      }
    },
    addMoney(coin) {
      this.givedMoney = parseFloat(this.givedMoney) + parseFloat(coin.value);
      this.givedMoney =
        Math.round((this.givedMoney + Number.EPSILON) * 100) / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 2rem;
}
section {
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
.parent {
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(25rem, 5rem), 1fr));
  width: 60%;
  background: rgb(130, 122, 122);
  background: linear-gradient(
    45deg,
    rgba(130, 122, 122, 1) 0%,
    rgba(221, 214, 214, 1) 100%
  );
  div {
    width: 5rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 3rem;
    }
    img:hover {
      cursor: pointer;
      border: 2px solid black;
    }
  }
}
.money {
  width: 5vw;
}
</style>