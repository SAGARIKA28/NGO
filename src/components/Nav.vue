<template>
  <div class="navItem">
    <div class="nav-container">
      <router-link to="/" style="text-decoration:none;"> 
        <div class="logo">
          <img src="../assets/AV-logo-bg.png" alt="logo" width="80px">
          <h2 style="color:white;" id="ngo-name">Akkum Vakkum</h2>
        </div>
      </router-link>
      <div class="leftAlign">
      <ul>
        <li v-for="routes in links" :key="routes.id">
          <router-link class="links" :to="`${routes.page}`">{{
            routes.text
          }}</router-link>
        </li>
        <li>
          <router-link class="special-link" to="/"> 
            <span style="display:flex; align-items:center;">Donate <i class="material-icons">card_giftcard</i></span>    
          </router-link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      links: [
        { id: 1, text: "Who Are We ", page: "/WhoAreWe" },
        { id: 2, text: "What We Do", page: "/WhatWeDo" },
        { id: 3, text: "Gallery", page: "/Gallery" },
        { id: 4, text: "Blog", page: "/Blog" },
        { id: 5, text: "Contact Us", page: "/Contact" },
        { id: 6, text: "Join Us", page: "/" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: white;
}
.navItem {
  display: flex;
  z-index: 1;
  background-color: rgb(40, 44, 52);
}

.nav-container{
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo{
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  list-style-type: none;
}

.links {
  display: block;
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: 15px;
}
.links:hover {
  color: #4caf50;
}

.special-link {
  display: block;
  color: white;
  font-weight: 500;
  text-decoration: none;
  background-color: #4caf50;
  padding: 15px;
  border: none;
  border-radius: 5px;
}

.special-link:hover{
  background-color: #3b883d;
}
</style>
