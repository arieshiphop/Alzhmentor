<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="profile-header">
      <div class="profile-img">
        <img :src="user.avatar" alt="Profile Image" />
      </div>
      <div class="profile-nav-info">
        <h3 class="user-name">{{ user.name }}</h3>
        <button @click="logOut">Log Out</button>
      </div>
    </div>

    <div class="main-bd">
      <div class="left-side">
        <div class="profile-side">
          <p class="mobile-no">
            <i class="fa fa-phone">{{ user.phone }}</i>
          </p>
          <p class="user-mail">
            <i class="fa fa-envelope">{{ user.email }}</i>
          </p>
          <div class="user-bio">
            <h3>Bio</h3>
            <p class="bio">
              {{ user.bio }}
            </p>
            <h3>Level:</h3>
            <p :class="{ adminRank: isAdmin }">
              {{ user.level }}
            </p>
            <span v-if="!isAdmin">
              <h3>Experiencie:</h3>
              <ProgressBar :value="percentLeft" />
              <p>Exp for next level: {{ expLeft }}</p>
            </span>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="nav">
          <ul>
            <li
              class="user-post"
              v-bind:class="{ active: showLogs }"
              @click="getUserLogs(user.id)"
            >
              Log
            </li>
            <li
              class="user-setting"
              v-bind:class="{ active: showStats }"
              @click="getUserStats"
            >
              Stats
            </li>
          </ul>
        </div>
        <section v-if="showLogs" class="log-container">
          <article
            v-bind:class="{
              failed: log.completado == 0,
              completed: log.completado == 1,
            }"
            v-for="log in logs"
            :key="log.id"
          >
            <h1>Log-{{ log.log_id }}</h1>
            <ul>
              <li>Game: {{ log.juego }}</li>
              <li>Entry value: {{ log.dinero_entregado }}</li>
              <li>Gived value: {{ log.dinero_ofrecido }}</li>
              <li>Hour: {{ log.hora }}</li>
              <li>Completed: {{ log.completado }}</li>
            </ul>
          </article>
        </section>
        <section>
          <article v-if="showStats" class="stats-container">
            <h1>Stats</h1>
            <pie-chart :data="stats"></pie-chart>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from "@/services/api.js";
import config from "@/config.js";
import NavBar from "@/components/NavBar";
import Swal from "sweetalert2";
import { getPercentForNextLevel, getLevelName } from "@/services/levels.js";
import ProgressBar from "primevue/progressbar";
import { expForLevel } from "../services/levels";
export default {
  components: {
    NavBar,
    ProgressBar,
  },

  data() {
    return {
      user: "",
      logs: [],
      showLogs: true,
      showStats: false,
      failed: 0,
      completed: 0,
      stats: [],
      isAdmin: false,
      percentLeft: 0,
      expLeft: 0,
    };
  },

  mounted() {
    this.getUserData();
    this.getUserLogs(this.user.id);
    this.setUserLevel();
    this.setUserLevelPercent();
  },

  computed: {
    getUserStats() {
      let failed = this.logs.filter((log) => log.completado == 0);
      let completed = this.logs.filter((log) => log.completado == 1);
      this.showLogs = false;
      this.showStats = true;
      this.stats = [
        ["completed", completed.length],
        ["failed", failed.length],
      ];
    },
  },
  methods: {
    setUserLevel() {
      this.user.level = getLevelName();
      if (this.user.level == "Admin") {
        this.isAdmin = true;
      }
    },
    async getUserData() {
      this.user = getUser();
    },
    logOut() {
      Swal.fire({
        title: "Log Out?!",
        text: "Do you want to log out?",
        icon: "warning",
        confirmButtonText: "Continue",
        showCancelButton: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          //log out
          localStorage.removeItem("user");
          localStorage.setItem("isLogged", false);
          localStorage.removeItem("user");
          window.location.href = "/";
        } else {
          return "";
        }
      });
    },
    async getUserLogs(userId) {
      let response = await fetch(`${config.API_PATH}/users/${userId}/logs`);
      let data = await response.json();
      this.logs = data;
      this.showLogs = true;
      this.showStats = false;
    },
    setUserLevelPercent() {
      this.percentLeft = parseInt(getPercentForNextLevel());
      let level = getUser().level;
      let nextLevel = parseInt(level) + 1;
      this.expLeft = expForLevel[nextLevel] - parseInt(this.user.experiencie);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Bree+Serif&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.adminRank {
  background: gold;
  padding: 0.4rem;
  border-radius: 15px;
}
button {
  background: #ffcdcd;
  border-radius: 5px;
  padding: 0.4rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
}

.log-container {
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
}
.log-container article {
  padding: 2rem;
  text-align: center;
  box-shadow: 2px 2px 4px black;
}
.log-container .failed {
  background: rgba(255, 0, 0, 0.4);
}
.log-container .completed {
  background: rgba(30, 255, 0, 0.4);
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
  height: auto;
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
