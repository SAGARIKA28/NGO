<template>
  <div>
    <blogSlider></blogSlider>
    <br />
    <br />
    <BlogCards></BlogCards>
    <!--<DisplayBlog />-->
  </div>
</template>

<script>
import BlogSlider from "../components/BlogComponents/BlogSlider.vue";
import BlogCards from "../components/BlogComponents/BlogCards.vue";

//import DisplayBlog from "./components/BlogComponents/BlogDisplay";

export default {
  name: "Blog",
  components: {
    // DisplayBlog: DisplayBlog,
    BlogSlider: BlogSlider,
    BlogCards: BlogCards
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background-color: rgb(40, 44, 52);
}
</style>
