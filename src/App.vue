<template>
  <v-app>
    <div>LOGO OF THE NGO</div>
    <div id="navigation-icon" v-if="mobileView">
      <v-icon id="navmenu">menu</v-icon>
    </div>
    <Nav v-if="!mobileView"></Nav>
    <router-view />
    <Footer></Footer>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav: Nav,
    Footer: Footer
  },
  data: () => {
    return {
      mobileView: false,
      showNav: false
    };
  }
};
</script>
<style scoped>
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
#navmenu {
  font-size: 2rem;
  color: black;
}
</style>
