<template>
  <v-app>
    <div id="navigation-icon" v-if="mobileView">
      <v-icon id="navmenu">menu</v-icon>
    </div>
    <Nav v-if="!mobileView" style="position:fixed; width:100%"></Nav>
    <router-view style="padding-top: 100px;" />
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
<style>
*{
  font-family: 'Montserrat' ;
}

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
