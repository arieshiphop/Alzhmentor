<template>
  <NavBar></NavBar>

  <main>
    <nav class="navbar">
      <ul>
        <li @click="getAllUsers" :class="{ active: showUsers }">Users</li>
        <li @click="showTerminalFunc" :class="{ active: showTerminal }">
          Terminal
        </li>
      </ul>
    </nav>
    <section class="cards" v-if="showUsers">
      <h2>Users</h2>
      <div class="card-container">
        <input
          type="text"
          v-model="userSearch"
          placeholder="Search by username..."
        />
        <article class="card" v-for="user in filteredUser" :key="user.id">
          <h3>Username: {{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p>Level: {{ user.level }}</p>
          <Button
            @click="deleteUser(user)"
            label="Delete user"
            class="p-button-danger"
          />
        </article>
      </div>
    </section>
    <Terminal
      v-if="showTerminal"
      welcomeMessage="Welcome to admin terminal"
      prompt="admin $: "
      class="dark-demo-terminal"
    />
  </main>
</template>

<script>
import TerminalService from "primevue/terminalservice";
import Terminal from "primevue/terminal";
import NavBar from "@/components/NavBar";
import {
  getAdmin,
  getUsernameById,
  setLevel,
  getUserStats,
} from "../services/terminal";
import api from "../services/api.js";
import Button from "primevue/button";
import Swal from "sweetalert2";

export default {
  components: {
    NavBar,
    Terminal,
    Button,
  },
  created() {
    this.getAllUsers();
  },
  data() {
    return {
      users: [],
      userSearch: "",
      showTerminal: false,
      showUsers: true,
    };
  },
  computed: {
    filteredUser() {
      return this.users.filter((user) => {
        return user.name.toLowerCase().includes(this.userSearch.toLowerCase());
      });
    },
  },
  methods: {
    async getAllUsers() {
      const response = await fetch(`${api.API_PATH}/users`);
      const data = await response.json();
      this.showUsers = true;
      this.showTerminal = false;
      this.users = data;
    },

    showTerminalFunc() {
      this.showTerminal = true;
      this.showUsers = false;
    },
    async deleteUser(user) {
      Swal.fire({
        title: "Do you want to delete this user account?",
        showDenyButton: true,
        confirmButtonText: `Delete`,
        denyButtonText: `Don't delete`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("User deleted!", "", "success");
          if (user.level != "999") {
            const response = await fetch(`${api.API_PATH}/users/${user.id}`, {
              method: "DELETE",
            });
            if (response.statusText.toLowerCase() == "ok") {
              this.getAllUsers();
            }
          } else {
            Swal.fire("You can't delete this user!", "", "error");
          }
        } else if (result.isDenied) {
          Swal.fire("User not deleted", "", "error");
          return "";
        }
      });
    },

    async commandHandler(text) {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;
      switch (command) {
        case "help":
          response = `
          Available commands:
          help - show this help
          getUserByUserId userId - show user by id
          getAdmin - give admin yourself
          setLevel userId level - delete user
          `;
          break;
        case "getAdmin":
          getAdmin();
          response = "You are now admin";
          break;
        case "getUserStats":
          user = await getUserStats(text, argsIndex);
          console.log(user);
          response =
            "El usuario es " +
            user["name"] +
            " con un nivel de " +
            user["level"];
          break;
        case "getUserById":
          let user = await getUsernameById(text, argsIndex);
          response =
            "The name of the user id " + user["id"] + " is: " + user["name"];
          break;

        case "setLevel":
          setLevel(text);
          response = "You setted level";
          break;
        default:
          response = "Unknown command: " + command;
      }

      TerminalService.emit("response", response);
    },
  },
  mounted() {
    TerminalService.on("command", this.commandHandler);
  },
  beforeUnmount() {
    TerminalService.off("command", this.commandHandler);
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: Montserrat;
}
// p {
//   margin-top: 0;
// }
// div {
//   height: calc(100vh - 50px);
// }
input {
  border: transparent;
  padding: 0.5rem 0;
  box-shadow: 0px 0px 4px black;
  border-radius: 3px;
}
.card {
  background: white;
  border: transparent;
  border-radius: 4px;
  padding: 0.6rem;
  margin: 0.6rem;
}
.card-container {
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  overflow: scroll;
  gap: 0.4rem;
}
.cards {
  text-align: center;
  margin-top: 1rem;
}

.navbar ul {
  display: flex;
  gap: 2rem;
  li {
    list-style: none;
  }
}
.navbar ul li:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.active {
  border-bottom: 2px solid red;
}
::v-deep(.dark-demo-terminal) {
  background-color: #212121;
  height: 70vh;
  width: 50vw;
  color: #ffffff;

  .p-terminal-command {
    color: #80cbc4;
  }

  .p-terminal-prompt {
    color: #ffd54f;
  }

  .p-terminal-response {
    color: #9fa8da;
  }
}
</style>
