import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CameraView from '../views/CameraView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/camera',
      name: 'cameraPage',
      component: CameraView
    }
  ]
})
// console.log(router)
export default router
