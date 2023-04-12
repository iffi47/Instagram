<template>
  <v-container class="grey-lighten-5"> </v-container>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CameraView'
})
</script>
<style>
@media (min-width: 1024px) {
  .camera {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
