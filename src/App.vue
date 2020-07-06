<template>
  <v-app>
    <div>LOGO OF THE NGO</div>
    <Nav></Nav>
    <router-view />
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav: Nav
  }
};
</script>
