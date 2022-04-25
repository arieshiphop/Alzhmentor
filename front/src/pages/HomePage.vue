<template>
  <NavBar></NavBar>
  <main>
    <section class="first-content">
      <img src="../assets/logo.png" alt="" />
      <p>
        Recently, there have been many people who have witnessed their loved
        ones suffering from Alzheimer's and other forms of dementia 👩‍🦳. Through
        a web application, we will try to help them by training their brain and
        memory 🧠.
      </p>
      <form class="field">
        <span class="p-float-label">
          <InputText
            id="username"
            type="text"
            v-model="user"
            autocomplete="off"
          />
          <label for="username">Username</label>
        </span>
        <span class="p-float-label">
          <InputText
            id="password"
            type="password"
            v-model="password"
            @keyup.enter="onButtonClicked()"
          />
          <label for="password">password</label>
        </span>
      </form>
      <router-link to="/register">Not registered yet? Register</router-link>
    </section>

    <section class="buttons">
      <button @click="onButtonClicked" class="startb">Login</button>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import { useStorage } from "@vueuse/core";
import { login } from "@/services/auth.js";
import NavBar from "@/components/NavBar";
import InputText from "primevue/inputtext";
import { okAlert, onError } from "@/services/alerts.js";
export default {
  name: "HomePage",
  components: {
    NavBar,
    InputText,
  },
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

      if (response.statusText.toLowerCase() == "unauthorized") {
        onError("Bad", "Username or password is incorrect");
      } else {
        const loginUser = await response.json();
        this.localUser = loginUser;
        localStorage.setItem("user", JSON.stringify(this.localUser));
        localStorage.setItem("isLogged", true);
        okAlert("Welcome", "You are logged in", this.$router);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
$bg: #0c0e0e;
$blue-grey: #1a3a38;
$pink: #fab4cb;
$meat: #dfc19d;
$yellow-white: #e5e7b5;

.p-float-label {
  margin-top: 1rem;
}
main {
  font-family: Montserrat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .first-content {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 40vw;
      margin-bottom: 3rem;
    }
    p {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      font-family: montserrat;
      color: white;
      text-shadow: 1px 1px 4px black;
      width: 60%;
      font-weight: bold;
      padding: 1.2rem;
      line-height: 3;
    }
  }
}

button:hover {
  cursor: pointer;
  font-weight: bold;
}

::selection {
  color: $pink;
  background: $blue-grey;
}
@media screen and(max-width:1000px) {
  .buttons {
    width: 80vw !important;
    gap: 2rem;
  }
  main .first-content {
    height: 90vh;
    h1 {
      font-size: 0.3rem;
    }

    p {
      line-height: 1;
    }
  }
  main .first-content p {
    font-size: 3vw;
    width: 80%;
  }
}
@media screen and(max-width:600px) {
  .buttons {
    width: 80vw !important;
    gap: 2rem;
  }
  main .first-content {
    height: 90vh;
    img {
      width: 60vw;
      margin-bottom: 0.5rem;
    }
    p {
      line-height: 1.5;
    }
  }
  main .first-content p {
    font-size: 3.5vw;
    width: 80%;
  }
}
.buttons {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -4vh;
  transition: 0.2s ease-in;
  .startb {
    background: #1e90ff;
    width: 10rem;
    border-radius: 4px;
    height: 3rem;
    border: transparent;
    box-shadow: 2px 2px 4px black;
    color: white;
    text-shadow: 0px 1px 2px black;
  }
  .seemoreb {
    background: $pink;
    width: 10rem;
    border-radius: 4px;
    height: 3rem;
    border: transparent;
    box-shadow: 2px 2px 4px black;
    color: white;
    text-shadow: 0px 1px 2px black;
  }
}
.field {
  color: black;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
