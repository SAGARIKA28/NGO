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
      <h1 style="text-align:center;color: whitesmoke;">WHO ARE WE</h1>
      <br />
      <p style="text-align:center;color: whitesmoke;">
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
      <br />
      <hr class="divider" />
    </div>
    <br />
    <img class="circleImg" :src="require('@/assets/saga2.jpg')" />
    <br />
    <br />
    <h1 style="text-align:center;color: whitesmoke;">WHAT WE DO</h1>
    <br />
    <div class="container cards">
      <v-row>
        <v-col cols="12" sm="3" md="4" v-for="(content, index) in CardContents" :key="index">
          <cards :img=" content.src" :title=" content.title" />
        </v-col>
      </v-row>
    </div>

    <br />
    <div class="container">
      <div class="button">
        <v-btn small rounded color="success" dark>LOAD MORE</v-btn>
      </div>
      <br />
      <hr class="divider" />
    </div>
    <img class="circleImg" :src="require('@/assets/saga2.jpg')" />
    <br />
    <br />
    <h1 style="text-align:center;color: whitesmoke;">LATEST BLOGS</h1>
    <br />
    <div class="container cards">
      <v-row>
        <v-col cols="12" sm="3" md="4" v-for="(content, index) in  BlogContents" :key="index">
          <BlogCard
            :title="content.title"
            :avatar="content.avatar"
            :author="content.author"
            :img=" content.src"
            :descp="content.about"
          />
        </v-col>
      </v-row>
    </div>
    <br />
    <div class="container">
      <div class="button">
        <v-btn small rounded color="success" dark>LOAD MORE</v-btn>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import BlogCard from "./Cards.vue";
import Cards from "./DoCard.vue";
export default {
  name: "Home",
  components: {
    BlogCard: BlogCard,
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
      ],
      CardContents: [
        {
          id: 1,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "EDUCATION"
        },
        {
          id: 2,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "CULTURE"
        },
        {
          id: 3,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "OLD-AGE"
        }
      ],
      BlogContents: [
        {
          id: 1,
          title: "Book Distribution",
          avatar: "saga2.jpg",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          author: "Sagarika Sundi",
          about:
            "jbbfubfubfubfbfjhbdjbdjfbjdfbjsbhdfjwbfuefbcjbaksjdwiyeufrfhvchhvschvhcvwcvwyvyvcte"
        },
        {
          id: 2,
          title: "Tree Plantation",
          avatar: "saga2.jpg",
          author: "Sagarika Sundi",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          about:
            "jbbfubfubfubfbfjhbdjbdjfbjdfbjsbhdfjwbfuefbcjbaksjdwiyeufrfhvchhvschvhcvwcvwyvyvcte"
        },
        {
          id: 3,
          title: "OLD-AGE Vists",
          avatar: "saga2.jpg",
          author: "Sagarika Sundi",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          about:
            "jbbfubfubfubfbfjhbdjbdjfbjdfbjsbhdfjwbfuefbcjbaksjdwiyeufrfhvchhvschvhcvwcvwyvyvcte"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background-color: rgb(40, 44, 52);
}
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
.cards {
  justify-content: space-between;
}
.divider {
  border: 2px solid #4caf50;
}
</style>
