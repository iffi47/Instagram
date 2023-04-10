<template>
  <div class="camera">
    <h1>This is an Camera page page This is really a camera page</h1>
  </div>
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
