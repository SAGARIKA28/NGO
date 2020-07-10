<template>
  <div>
    <div>
      <v-img
        :src="require('@/assets/coverpage.jpg')"
        aspect-ratio="3"
        class="fill-height bottom-gradient"
      ></v-img>
    </div>
    <div class="container">
      <h1 class="text" style="margin-top:10px;">
        <b>The Story Of A Lost Girl</b>
      </h1>
      <v-list-item>
        <v-list-item-avatar color="grey">
          <img :src="require('@/assets/saga2.jpg')" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline text">Sagarika Sundi</v-list-item-title>
          <v-list-item-subtitle class="text">Author | Jun 2, 2018 | Blog</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <hr id="divider" />

      <p class="text" style="margin-top:10px;">
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
      </p>
      <p class="text" style="margin-top:10px;">
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
        The growth of the non-profit sector in India, in the last two decades, has been phenomenal. Grassroots NGOs particularly, by engaging directly with the people, are able to participate in the thought-making process of the communities they work with, and thus have the capacity to bring about long-lasting positive change.
      </p>
      <hr id="divider" />
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
          </v-col>
          <div class="form">
            <v-col cols="12" md="6">
              <form>
                <span>
                  <label>Name:</label>
                </span>
                <input class="text inputbox" type="text" id="fname" name="fname" />
                <br />
                <br />
                <v-btn>Comment</v-btn>
              </form>
            </v-col>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#divider {
  border: 2px solid #4caf50;
}
.text {
  color: white;
}
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.form {
  margin-top: 12px;
  height: 40%;
  width: 50%;
  border-radius: 5px;
  background-color: gray;
  padding: 20px;
}
input[type="text"] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
