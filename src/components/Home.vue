<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <!--   <div style=" background-color:black;display:block;">-->
    <img class="circleImg" :src="require('@/assets/saga2.jpg')" />
    <!-- </div>-->
    <br />
    <br />
    <div class="container">
      <h1 style="text-align:center">WHO ARE WE</h1>
      <br />
      <p style="text-align:center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        ratione? Corporis, quibusdam quo. Facilis autem alias corporis odit
        dolorum quo repellendus, ipsum recusandae fuga voluptatem sit blanditiis
        sint itaque nisi. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Labore, reprehenderit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime, ratione? Corporis, quibusdam quo. Facilis
        autem alias corporis odit dolorum quo repellendus, ipsum recusandae fuga
        voluptatem sit blanditiis sint itaque nisi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Labore, reprehenderit?
      </p>
      <div class="button">
        <v-btn small rounded color="success" dark>KNOW MORE</v-btn>
      </div>
    </div>
    <div>
      <Cards></Cards>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
export default {
  name: "Home",
  components: {
    Cards: Cards
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: 1
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: 2
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: 3
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: 4
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circleImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: auto;
  border-radius: 50%;
  position: relative;
  top: 20px;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
