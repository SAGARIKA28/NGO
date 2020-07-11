<template>
  <div class="container">
    <h1 style="text-align:center;color: whitesmoke;">BLOGS</h1>
    <hr class="divider" />
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card class="card" color="grey lighten-3" shaped>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              <v-card-text
                class="headline font-weight-bold"
              >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>
              <v-card-actions>
                <v-btn text>Read Now</v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BlogCards",
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        title: "The Old Tree",
        artist: "Sagarika Sundi"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "The New Generation",
        artist: "Sachin Bhadoria"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "The New Generation",
        artist: "Sachin Bhadoria"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "The New Generation",
        artist: "Sachin Bhadoria"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        title: "The New Generation",
        artist: "Sachin Bhadoria"
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divider {
  border: 2px solid #4caf50;
}
</style>
