<template>
  <main>
    <section class="first-content">
      <h1 style="color: white">Alzhmentor</h1>
      <p>
        Recently, there have been many people who have witnessed their loved
        ones suffering from Alzheimer's and other forms of dementia. Through a
        web application, we will try to help them by training their brain and
        memory.
      </p>
      <section class="field">
        <label>User:</label>
        <input type="text" v-model="user" />
        <label>Password:</label>
        <input type="password" v-model="password" />
      </section>
    </section>

    <section class="buttons">
      <router-link to="/exercises">
        <button @click="onButtonClicked" class="startb">Login</button>
      </router-link>
      <button class="seemoreb">See more</button>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import { useStorage } from "@vueuse/core";
import { login } from "@/services/auth.js";

export default {
  name: "HomePage",
  data() {
    return {
      user: "",
      password: "",
      localUser: useStorage("user", {}),
    };
  },
  methods: {
    async onButtonClicked() {
      const response = await login(this.user, this.password);
      const loginStatus = response.status;
      const loginUser = await response.json();
      console.log(loginStatus);
      if (response.status === 401) {
        alert("unauthorized");
      } else {
        this.localUser = loginUser;
        localStorage.setItem("user", JSON.stringify(this.localUser));
        this.$router.push("/exercises");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
$bg: #0c0e0e;
$blue-grey: #1a3a38;
$pink: #f87390;
$meat: #dfc19d;
$yellow-white: #e5e7b5;

main {
  font-family: Montserrat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-image: url(../assets/old-man.jpg);
  background-repeat: no-repeat;

  .first-content {
    margin-top: -4rem;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: $pink !important;
      font-size: 6vw;
      text-shadow: 2px 2px 4px black;
      font-family: Montserrat;
    }
    p {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      font-family: montserrat;
      color: white;
      text-shadow: 1px 1px 4px black;
      width: 60%;
      font-weight: bold;
      font-size: 1.4vw;
      padding: 1.2rem;
    }
  }
}
button:hover {
  transform: scale(1.1);
  cursor: pointer;
  font-weight: bold;
}
::selection {
  color: $pink;
  background: $blue-grey;
}
@media screen and(max-width:600px) {
  .buttons {
    width: 80vw !important;
    gap: 2rem;
  }
  main .first-content {
    height: 90vh;
    h1 {
      font-size: 3rem;
    }
  }
  main .first-content p {
    font-size: 5vw;
    width: 80%;
  }
}
.buttons {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -4rem;
  .startb {
    background: dodgerblue;
    width: 10rem;
    border-radius: 4px;
    height: 3rem;
    border: transparent;
    box-shadow: 2px 2px 4px black;
  }
  .seemoreb {
    background: $pink;
    width: 10rem;
    border-radius: 4px;
    height: 3rem;
    border: transparent;
    box-shadow: 2px 2px 4px black;
  }
}
.field {
  color: black;
  margin-top: 2rem;
  display: flex;
  flex-flow: column;
  text-align: center;
}

label,
input {
  transition: all 200ms ease;
}

input {
  font-size: 1.2rem;
  border: 0;
  border-bottom: 1px solid #ccc;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 5px 0;
  &:focus {
    outline: 0;
    border-color: coral;
  }
  &:placeholder-shown {
    color: red;
    cursor: text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.125em) scale(1.5);
  }
}

label {
  color: #ccc;
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
</style>
