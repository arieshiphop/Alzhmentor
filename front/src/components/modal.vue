<template>
  <transition name="fade" appear>
    <div class="modal-over" v-if="showModal" @coin-added="callModal">
      <h1>hola</h1>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    callModal(showModal) {
      this.showModal = showModal;
      console.log("hola");
    },
  },

  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Montserrat, sans-serif;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>