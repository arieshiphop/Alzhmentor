<template>
  <NavBar></NavBar>
  <main>
    <Terminal
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
import { getUser } from "../services/api.js";
export default {
  components: {
    NavBar,
    Terminal,
  },
  methods: {
    async getUserByUserId(userId) {
      let response = await fetch(`http://localhost:5000/api/users/${userId}`);
      let data = await response.json();
      return data;
    },
    async commandHandler(text) {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;
      let giveRoleParams = [];
      let userGivedRole = {};
      switch (command) {
        case "getAdmin":
          let user = getUser();
          user.level = 999;
          localStorage.setItem("user", JSON.stringify(user));
          console.log(localStorage.getItem("user"));
          response = "You are admin now" + " " + user.level;
          break;
        case "getUserByUserId":
          let userId = text.substring(argsIndex + 1);
          let data = await this.getUserByUserId(userId);
          response =
            "The username of the user id " + userId + " is: " + data.name;
          break;
        case "giveRole":
          giveRoleParams = text.split(" ");
          userGivedRole = {
            user_id: giveRoleParams[1],
            level: giveRoleParams[2],
          };
          console.log(userGivedRole);
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
// p {
//   margin-top: 0;
// }
div {
  height: calc(100vh - 50px);
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