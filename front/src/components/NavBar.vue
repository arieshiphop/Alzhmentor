<template>
  <header class="header">
    <a href="/" class="logo">
      <img class="normal-logo" src="../assets/logo.png" alt="Alzhmentor logo" />
      <img
        class="small-logo"
        src="../assets/logoonly.png"
        alt="Small alzhmenetor logo"
      />
    </a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="nav-icon"></span
    ></label>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#exercises">Exercises</a></li>
      <li><a href="#profile">Profile</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: Montserrat;
}

.logo {
  width: 15rem;
}
.logo img {
  width: 100%;
}
a {
  color: #000;
}

/* header */
.small-logo {
  display: none;
}
.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 99999;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  float: left;
  padding: 10px 20px;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .nav-icon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .nav-icon:before,
.header .menu-icon .nav-icon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .nav-icon:before {
  top: 5px;
}

.header .menu-icon .nav-icon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .nav-icon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .nav-icon:before {
  transform: rotate(-45deg);
  top: 0;
}

.header .menu-btn:checked ~ .menu-icon .nav-icon:after {
  transform: rotate(45deg);
  top: 0;
}

/* 48em = 768px @ 16pt font */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
@media (max-width: 30em) {
  .normal-logo {
    display: none;
  }
  .logo img {
    width: 10vw;
  }
  .small-logo {
    display: block;
  }
}
</style>
