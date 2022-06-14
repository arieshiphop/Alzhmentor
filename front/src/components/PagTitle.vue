<template>
  <div class="box">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "PagTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 4vw;
  white-space: nowrap;
  overflow: hidden;
  color: #f7ca05;
  text-shadow: 0 10px 7px rgba(0, 0, 0, 0.4), 0 -4px 1px #fff;
  letter-spacing: -3px;
}

h3:hover {
  animation: glitch 0.3s linear infinite;
  cursor: pointer;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
@media screen and (max-width: 900px) {
  * {
    display: none;
  }
}
</style>
