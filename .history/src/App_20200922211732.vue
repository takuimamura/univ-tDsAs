<template>
  <div>
    <amplify-authenticator>
      <!-- <router-link to="/manage">Management View</router-link> -->
      <!-- <Header></Header> -->
      aws-amplify-react
    </amplify-authenticator>
    <Body></Body>
    <!-- <router-link to="/manage">Management View</router-link> -->

    <!-- <div class="column">
      <amplify-sign-out class="is-pulled-right"></amplify-sign-out>
    </div>-->
    <!-- </amplify-authenticator> -->
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
// import Manage from "./components/Manage.vue";

window.LOG_LEVEL = "VERBOSE";

export default {
  // name: "Authenticator",
  components: {
    // Header,
    Body
    // Manage,
  },
  name: "Authenticator",
  data: function() {
    return {};
  },

  mounted() {
    const title = "ALC";
    const description = "";
    document.title = title;
    document
      .querySelector("meta[property='og:title']")
      .setAttribute("content", title);
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description);
    document
      .querySelector("meta[property='og:description']")
      .setAttribute("content", description);
  }
};
</script>
<!-- <style lang="sass" src="./styles.scss" /> -->

<style lang="css" src="./components/styles.css" />
