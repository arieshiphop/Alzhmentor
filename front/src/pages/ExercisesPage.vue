<template>
  <NavBar></NavBar>
  <main>
    <section v-if="isLogged">
      <h1>What do you want to train today?</h1>
      <article>
        <div
          class="redondel"
          v-for="exercise in exercises"
          :key="exercise.name"
          @click="onExerciseClick(exercise)"
        >
          <img lazy :src="exercise.img" alt="{{exercise.name}}" />
          <p>{{ exercise.name }}</p>
        </div>
      </article>
    </section>
    <section v-else>
      <h1>You need to sign in</h1>
    </section>
  </main>
</template>

<script>
import { getIfIsLogged } from "@/services/state.js";
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },

  data() {
    return {
      exercises: [
        {
          name: "Memory",
          img: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2018_24/2462811/180612-memory-ideas-tricks-devices-ac-451p.jpg",
        },
        {
          name: "Language",
          img: "https://stimuluspro.com/www/book/imagenes/911/lenguaje.png",
        },
        {
          name: "Attention",
          img: "https://blog.neuronup.com/wp-content/uploads/2019/07/atencion.jpg",
        },
        {
          name: "Payments",
          img: "https://ecommercenews.eu/wp-content/uploads/2013/06/most_common_payment_methods_in_europe.png",
        },
      ],
    };
  },
  methods: {
    onExerciseClick(exercise) {
      this.$router.push(`/exercises/${exercise.name.toLowerCase()}`);
    },
  },
  computed: {
    isLogged() {
      return getIfIsLogged();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

section {
  display: grid;
  place-content: center;
  height: 90vh;
  h1 {
    text-align: center;
    text-shadow: 0px 0px 4px black;
    color: dodgerblue;
    font-size: 2rem;
    font-family: Montserrat;
  }
  article {
    display: flex;
    gap: 2rem;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 5rem;
    img {
      object-fit: cover;
      width: 15vw;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0px 0px 10px black;
    }
  }
}
@media screen and (max-width: 680px) {
  section {
    height: 100vh;
  }
  section h1 {
    font-size: 1.5rem;
    width: 15rem;
  }
  article {
    flex-direction: column;
    .redondel {
      display: flex;
      margin-top: -1em;
      width: 100%;
      height: 4rem;
      font-family: Montserrat;
      gap: 1.5rem;
      img {
        object-fit: cover;
        width: 15vw;
        height: 80%;
        border-radius: 50%;
        box-shadow: 0px 0px 10px black;
      }
    }
  }
}
@media screen and (max-width: 440px) {
  article {
    .redondel {
      img {
        width: 20vw;
      }
    }
  }
}
</style>
