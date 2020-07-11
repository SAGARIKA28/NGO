<template>
  <div class="card">
    <v-card max-width="344" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey">
          <img :src="require(`../assets/${avatar}`)" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{title}}</v-list-item-title>
          <v-list-item-subtitle>{{author}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img :src="img" height="194"></v-img>

      <v-card-text>{{descp}}</v-card-text>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Read</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon style="color:red;">mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ["title", "avatar", "author", "img", "descp"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }

</style>
