<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <!-- -->
      <v-tabs bg-color="white">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/camera"><v-icon>mdi-phone</v-icon>Camera</v-tab>
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
      This is Footer
    </v-footer>
  </v-app>
</template>
<script setup>
import { RouterView } from 'vue-router'
</script>
<style scoped></style>
