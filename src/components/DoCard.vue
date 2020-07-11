<template>
  <div class="card">
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img height="200" width="350" :src="img">
              <v-card-title>{{title}}</v-card-title>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "DoCard",
  props: ["img", "title"]
};
</script>

<style scoped>
  .card:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
  }
</style>