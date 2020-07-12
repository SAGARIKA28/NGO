<template>
  <div class="container">
    <h1 style="text-align:center;color: whitesmoke; font-size:3rem">BLOGS</h1>
    <hr class="divider" />
    <div class="search-box">
      <input style="color:white; width:90%" id="search-input" type="text" placeholder="Search for relevant blogs...">
      <button id="search-btn"><i class="material-icons">search</i></button>
    </div>
    
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card class="card" color="grey lighten-4" shaped @click="$router.push(`/Blog/${item.title}`)">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              <v-card-text style="font-size:1rem">  
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </v-card-text>
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
  border: 1px solid #4caf50;
  margin: 2rem 0 2rem 0;
}

.card{
  margin-top: 1rem;
}
.card:hover{
  cursor: pointer;
  transform: translateX(10px);
  transition: all 0.5s ease;
}

.search-box{
  color: whitesmoke ;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  margin: auto;
}
input:focus{
  outline: none;
}
</style>
