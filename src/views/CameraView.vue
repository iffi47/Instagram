<template>
  <v-container class="grey-lighten-5">
    <div class="pa-6 d-flex justify-center w-75">
      <v-img
        class="camera-preview"
        aspect-ratio="16/9"
        cover
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      ></v-img>
    </div>
    <div class="text-center pa-md">
      <v-btn color="grey-darken-4" size="large" icon="mdi-camera"></v-btn>
      <v-row no-gutters="true" justify="center" class="mt-4">
        <v-col cols="12"><v-text-field class="w-25" label="Label"></v-text-field></v-col>
        <v-col cols="12"><v-text-field class="w-25" label="Label"></v-text-field></v-col>
      </v-row>
    </div>
  </v-container>
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
  .camera-preview {
    border: 2px solid #212121;
    border-radius: 10px;
  }
}
</style>
