<template>
  <div class="navItem">
    <div class="leftAlign">
      <ul>
        <li v-for="routes in links" :key="routes.id">
          <router-link class="spacing" :to="`${routes.page}`">{{ routes.text }}</router-link>
        </li>
      </ul>
    </div>
    <div class="rightAlign">
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div>
        <v-btn small rounded color="success" dark>DONATE</v-btn>

        <v-btn style="margin:20px;" small rounded color="success" dark>JOIN US</v-btn>
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
        { id: 0, text: "Home", page: "/" },
        { id: 1, text: "Who Are We ", page: "/WhoAreWe" },
        { id: 2, text: "What We Do", page: "/WhatWeDo" },
        { id: 3, text: "Gallery", page: "/Gallery" },
        { id: 4, text: "Blog", page: "/Blog" },
        { id: 5, text: "Contact Us", page: "/Contact" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgb(40, 44, 52);
}
.navItem {
  display: flex;
}
.leftAlign {
  width: 60%;
}

.rightAlign {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content: space-between;
  width: 40%;
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

.spacing {
  display: block;
  margin-right: 10px;
  color: white;
  text-decoration: none;
  padding: 20px;
}
li .spacing:hover {
  background-color: #4caf50;
}
</style>
