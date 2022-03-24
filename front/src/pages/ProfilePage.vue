<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="profile-header">
      <div class="profile-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Image"
        />
      </div>
      <div class="profile-nav-info">
        <h3 class="user-name">{{ userName.name }}</h3>
        <div class="address">
          <p id="state" class="state">Bilbao,</p>
          <span id="country" class="country">España</span>
        </div>
      </div>
    </div>

    <div class="main-bd">
      <div class="left-side">
        <div class="profile-side">
          <p class="mobile-no"><i class="fa fa-phone">663422322</i></p>
          <p class="user-mail">
            <i class="fa fa-envelope">{{ userName.name }}@gmail.com</i>
          </p>
          <div class="user-bio">
            <h3>Bio</h3>
            <p class="bio">
              Lorem ipsum dolor sit amet, hello how consectetur adipisicing
              elit. Sint consectetur provident magni yohoho consequuntur,
              voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
            </p>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="nav">
          <ul>
            <li class="user-post active">Log</li>
            <li class="user-setting">Settings</li>
          </ul>
        </div>
        <section class="log-container">
          <article v-for="log in logs" :key="log.id">
            <h1>Log-{{ log.log_id }}</h1>
            <ul>
              <li>Entry money: {{ log.dinero_entregado }}$</li>
              <li>Gived money: {{ log.dinero_ofrecido }}$</li>
              <li>Hour: {{ log.hora }}</li>
              <li>Completed: {{ log.completado }}</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { useStorage } from "@vueuse/core";
import { getUser } from "@/services/api.js";
import config from "@/config.js";
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      userName: "",
      logs: [],
    };
  },
  mounted() {
    this.getUserData();
    this.getUserLogs(this.userName.id);
  },
  methods: {
    async getUserData() {
      this.userName = getUser();
    },
    async getUserLogs(userId) {
      let response = await fetch(`${config.API_PATH}/users/${userId}/logs`);
      let data = await response.json();
      this.logs = data;
    },
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Bree+Serif&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.log-container {
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
}
.log-container article {
  background: rgba(255, 255, 255, 0.6);

  padding: 2rem;
  text-align: center;
  box-shadow: 2px 2px 4px black;
}
.log-container article ul {
  list-style: none;
}

.profile-header {
  background: #fff;
  width: 100%;
  display: flex;
  height: 190px;
  position: relative;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
}

.profile-img {
  float: left;
  width: 340px;
  height: 200px;
}

.profile-img img {
  border-radius: 50%;
  height: 30vh;
  width: 15vw;
  border: 5px solid #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50px;
  top: 60px;
  z-index: 5;
  background: #fff;
}

.profile-nav-info {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
}

.profile-nav-info h3 {
  font-variant: small-caps;
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
}

.profile-nav-info .address {
  display: flex;
  font-weight: bold;
  color: #777;
}

.profile-nav-info .address p {
  margin-right: 5px;
}

.profile-option {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  outline: none;
  background: #e40046;
}

.profile-option:hover {
  background: #fff;
  border: 1px solid #e40046;
}

.profile-option:hover span {
  background: #e40046;
}

.main-bd {
  width: 100%;
  display: flex;
  padding-right: 15px;
}
.right-side {
  width: 100%;
}
.profile-side {
  width: 300px;
  background: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  padding: 90px 30px 20px;
  font-family: "Bree Serif", serif;
  margin-left: 10px;
  z-index: 99;
}

.profile-side p {
  margin-bottom: 7px;
  color: #333;
  font-size: 14px;
}

.profile-side p i {
  color: #e40046;
  margin-right: 10px;
}

.mobile-no i {
  transform: rotateY(180deg);
  color: #e40046;
}

.profile-btn {
  display: flex;
}

/* button.chatbtn,
button.createbtn {
  border: 0;
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  background: #e40046;
  color: #fff;
  font-family: "Bree Serif";
  font-size: 1rem;
  margin: 5px 2px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
  transition: background 0.3s ease-in-out;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.3);
} */

button.chatbtn:hover,
button.createbtn:hover {
  background: rgba(288, 0, 70, 0.9);
}

button.chatbtn i,
button.createbtn i {
  margin-right: 5px;
}

.nav {
  width: 100%;
  z-index: -1;
}

.nav ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  height: 40px;
  background: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

.nav ul li {
  padding: 10px;
  width: 100%;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease-in-out;
}

.nav ul li:hover,
.nav ul li.active {
  box-shadow: 0px -3px 0px rgba(288, 0, 70, 0.9) inset;
}

.profile-body {
  width: 100%;
  z-index: -1;
}

.tab {
  display: none;
}

.tab {
  padding: 20px;
  width: 100%;
  text-align: center;
}

@media (max-width: 1100px) {
  .profile-side {
    width: 250px;
    padding: 90px 15px 20px;
  }

  .profile-img img {
    height: 200px;
    width: 200px;
    left: 50px;
    top: 50px;
  }
}

@media (max-width: 900px) {
  body {
    margin: 0 20px;
  }

  .profile-header {
    display: flex;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding-bottom: 20px;
  }

  .profile-img {
    float: left;
    width: 100%;
    height: 200px;
  }

  .profile-img img {
    position: relative;
    height: 30vh;
    width: 200px;
    left: 0px;
    top: 3.5rem;
  }

  .profile-nav-info {
    text-align: center;
  }

  .profile-option {
    right: 20px;
    top: 75%;
    transform: translateY(50%);
  }

  .main-bd {
    flex-direction: column;
    padding-right: 0;
  }

  .profile-side {
    width: 100%;
    text-align: center;
    padding: 20px;
    margin: 5px 0;
  }

  .profile-nav-info .address {
    justify-content: center;
  }
}

@media (max-width: 400px) {
  .profile-option {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 83%;
  }

  .profile-option .notification .alert-message {
    top: -3px;
    right: -4px;
    padding: 4px;
    height: 15px;
    width: 15px;
    font-size: 0.7rem;
  }

  .profile-nav-info h3 {
    font-size: 1.9rem;
  }

  .profile-nav-info .address p,
  .profile-nav-info .address span {
    font-size: 0.7rem;
  }
}
#see-more-bio,
#see-less-bio {
  color: blue;
  cursor: pointer;
  text-transform: lowercase;
}
.tab h1 {
  font-family: "Bree Serif", sans-serif;
  display: flex;
  justify-content: center;
  margin: 20px auto;
}
</style>