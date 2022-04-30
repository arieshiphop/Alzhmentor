<template>
  <NavBar></NavBar>
  <main>
    <section class="first-content">
      <h1>Register</h1>
      <div class="grid p-fluid">
        <form action="">
          <div class="col-12 md:col-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
              </span>
              <InputText placeholder="Username" v-model="user" />
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-eye"></i>
              </span>
              <InputText
                type="password"
                placeholder="Password"
                v-model="password"
                autocomplete="password"
              />
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-envelope"></i>
              </span>
              <InputText placeholder="Email" required v-model="email" />
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <i class="pi pi-phone"></i>
              </span>
              <InputText placeholder="Phone number" v-model="phone" />
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="p-inputgroup">
              <InputText placeholder="Avatar" v-model="avatar" />
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                <p>Bio</p>
              </span>
              <Textarea v-model="bio" :autoResize="true" rows="5" cols="30" />
            </div>
          </div>
        </form>
      </div>
      <Button label="Register" @click="onRegisterClicked" />
    </section>
  </main>
</template>

<script>
// º is an alias to /src

import NavBar from "@/components/NavBar";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Avatar from "primevue/avatar";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import { v4 as uuidv4 } from "uuid";
import api from "../services/api.js";
import config from "../config.js";
import { isUsernameRegistered } from "../services/auth.js";
export default {
  name: "HomePage",
  components: {
    NavBar,
    InputText,
    Password,
    Avatar,
    Textarea,
    FileUpload,
    Button,
  },
  data() {
    return {
      user: "",
      password: "",
      avatar: "",
      email: "",
      phone: "",
      bio: "",
    };
  },
  methods: {
    isValidEmail() {
      let emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.email.match(emailRegex);
    },
    isValidPhone() {
      let phoneRegex = /^\d{9}$/;
      return this.phone.match(phoneRegex);
    },
    isNotEmptyForm() {
      if (
        this.user != "" &&
        this.password != "" &&
        this.email != "" &&
        this.phone != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    isValidForm() {
      if (this.isValidEmail() && this.isValidPhone() && this.isNotEmptyForm()) {
        return true;
      } else {
        return false;
      }
    },
    createNewUser(user_id) {
      let newUser = {
        id: user_id,
        name: this.user,
        password: this.password,
        avatar: this.avatar,
        email: this.email,
        phone: this.phone,
        bio: this.bio,
        level: "0",
        experiencie: "0",
      };
      return newUser;
    },
    async onRegisterClicked() {
      let user_id = uuidv4();
      if (this.isValidForm()) {
        const settings = config.createFetchSettings(
          "POST",
          "",
          JSON.stringify(this.createNewUser(user_id))
        );
        
        let response = await fetch(`${api.API_PATH}users`, settings);
        localStorage.setItem(
          "user",
          JSON.stringify(this.createNewUser(user_id))
        );
        localStorage.setItem("isLogged", true);
        this.$router.push(`/profile`);

        return response;
      } else {
        alert("Please fill the form correctly");
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
//cant not scroll the page in y axis

button {
  width: 15rem;
  height: 5rem;
}
.col-12 {
  margin: 1rem;
}
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

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .first-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5rem;
  }
}

::selection {
  color: $pink;
  background: $blue-grey;
}
@media screen and(max-width:600px) {
  main .first-content {
    height: 85vh;
    h1 {
      font-size: 2rem;
    }

    p {
      line-height: 1;
    }
  }
  main .first-content p {
    font-size: 5vw;
    width: 80%;
  }
}

.field {
  color: black;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
