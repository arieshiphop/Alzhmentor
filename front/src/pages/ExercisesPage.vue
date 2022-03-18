<template>
  <NavBar></NavBar>
  <main>
    <section>
      <h1>What do you want to train today?</h1>
      <article>
        <div class="redondel">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2018_24/2462811/180612-memory-ideas-tricks-devices-ac-451p.jpg"
            alt=""
          />
          <p>Memory</p>
        </div>
        <div class="redondel">
          <img
            src="https://stimuluspro.com/www/book/imagenes/911/lenguaje.png"
            alt=""
          />
          <p>Languaje</p>
        </div>
        <div class="redondel">
          <img
            src="https://blog.neuronup.com/wp-content/uploads/2019/07/atencion.jpg"
            alt=""
          />
          <p>Attention</p>
        </div>
        <div class="redondel">
          <img
            src="https://ecommercenews.eu/wp-content/uploads/2013/06/most_common_payment_methods_in_europe.png"
            alt=""
          />
          <p>Payments</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

// main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }
section {
  display: grid;
  place-content: center;
  height: 90vh;
  h1 {
    text-align: center;
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
  article {
    flex-direction: column;
    .redondel {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: -1em;
      width: 100%;
      height: 5rem;
      font-size: 1.6rem;
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