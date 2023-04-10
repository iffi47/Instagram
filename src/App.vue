<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app class="bg-white text--grey-10" border="true">
      <v-app-bar-title class="text-hotel-grand">Instagram</v-app-bar-title>
      <!-- -->

      <v-tabs d-flex grow="boolean">
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
      <v-container fluid>
        <!--  vue-router -->

        <RouterView />
      </v-container>
    </v-main>

    <v-footer app>
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
.v-toolbar-title__placeholder {
  /* font-family: 'Grand Hotel', cursive; */
  font-size: 60px;
  text-align: center;
}
</style>
