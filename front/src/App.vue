<template>
  <router-view />
</template>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
}
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  animation: puff-in 1s ease-out forwards;
}
@keyframes puff-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
$blue-grey: #1a3a38;
$pink: #fab4cb;
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
body {
  background: #77a1d3; /* fallback for old browsers */
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
}
button:hover {
  cursor: pointer;
  font-weight: bold;
}

::selection {
  color: $pink;
  background: $blue-grey;
}
</style>
