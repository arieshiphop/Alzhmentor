<template>
  <NavBar></NavBar>
  <main>
    <section class="register-form">
      <h1>Register</h1>
      <form class="field">
        <span class="p-float-label">
          <InputText id="username" type="text" v-model="user" />
          <label for="username">Username</label>
        </span>
        <span class="p-float-label">
          <InputText
            id="password"
            type="password"
            v-model="password"
            @keyup.enter="onButtonClicked()"
            autocomplete="password"
          />
          <label for="password">password</label>
        </span>
      </form>
    </section>
    <section class="register-form">
      <h1>Login</h1>
      <form class="field">
        <span class="p-float-label">
          <InputText id="username" type="text" v-model="user" />
          <label for="username">Username</label>
        </span>
        <span class="p-float-label">
          <InputText
            id="password"
            type="password"
            v-model="password"
            @keyup.enter="onButtonClicked()"
            autocomplete="password"
          />
          <label for="password">password</label>
        </span>
      </form>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import { useStorage } from "@vueuse/core";
import { login } from "@/services/auth.js";
import NavBar from "@/components/NavBar";
import InputText from "primevue/inputtext";

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
$pink: #fab4cb;
$meat: #dfc19d;
$yellow-white: #e5e7b5;

.p-float-label {
  margin-top: 1rem;
}
main {
  font-family: Montserrat;
  display: grid;
  place-content: center;
  width: 100vw;
  height: 100vh;
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

button:hover {
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
    img {
      width: 80vw;
    }
    p {
      line-height: 1.4;
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
