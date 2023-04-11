<template>
  <!-- App.vue -->

  <v-app id="app">
    <v-app-bar class="bg-white text--grey-10" elevation="2" density="comfortable">
      <v-app-bar-title
        tag="h1"
        class="text-hotel-grand"
        height="30px"
        text="Instagram"
      ></v-app-bar-title>
      <!-- -->
      <v-divider class="border-opacity-25 hidden-sm-and-down" inset vertical></v-divider>
      <v-tabs d-flex grow="boolean" class="hidden-sm-and-down">
        <v-tab hide-slider="false" to="/">
          <v-icon icon="mdi-home-outline" size="large"></v-icon
        ></v-tab>
        <v-tab hide-slider="false" to="/camera"
          ><v-icon size="large" icon="mdi-camera-outline"></v-icon
        ></v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->

      <!--  vue-router -->

      <RouterView />
    </v-main>

    <v-footer app class="hidden-md-and-up">
      <!-- -->

      <v-tabs d-flex grow="boolean">
        <v-tab hide-slider="false" to="/">
          <v-icon icon="mdi-home-outline" size="large"></v-icon
        ></v-tab>
        <v-tab hide-slider="false" to="/camera"
          ><v-icon size="large" icon="mdi-camera-outline"></v-icon
        ></v-tab>
      </v-tabs>
    </v-footer>
  </v-app>
</template>
<script setup>
import { RouterView } from 'vue-router'
</script>
<style scoped>
#app {
  background-color: #e0e0e0;
}
.v-toolbar-title__placeholder {
  /* font-family: 'Grand Hotel', cursive; */
  font-size: 60px;
  text-align: center;
}
.constrain {
  max-width: 975px;
  margin: 0 auto;
}
</style>
