<template>
  <div>
    <DisplayBlog />
  </div>
</template>

<script>
import DisplayBlog from "../components/BlogComponents/BlogDisplay";
export default {
  name: "Blog",
  components: {
    DisplayBlog: DisplayBlog
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  background-color: rgb(40, 44, 52);
}
</style>
