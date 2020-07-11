<template>
  <div>
    <v-carousel :show-arrows="false" hide-delimiters cycle="2ms" height="500">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <h1>{{item.title}}</h1>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "The Old Book"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "The Old Tree"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "The Old Car"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "The Old House"
        }
      ]
    };
  }
};
</script>