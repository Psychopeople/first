import HomeIndexView from '@/views/home/HomeIndexView.vue'
import MyScriptIndexView from '@/views/myscript/MyScriptIndexView.vue'
import NewStingsIndexView from '@/views/newthings/NewThingsIndexView.vue'
import NoteBookIndexView from '@/views/notebook/NoteBookIndexView.vue'
import NotFound from '@/views/error/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/", 
    name: "home",
    redirect: "/home/"
  }, 

  {
    path: "/home/", 
    name: "home_index",
    component: HomeIndexView
  },

  {
    path: "/myscript/",
    name: "myscript_index",
    component: MyScriptIndexView
  }, 

  {
    path: "/notebook/",
    name: "notebook_index",
    compontent: NoteBookIndexView
  },

  {
    path: "/newthings/",
    name: "newthings_index",
    compontent: NewStingsIndexView
  }, 

  {
    path: "/404/",
    name: "404",
    component: NotFound
  }, 
  
  {
    path: "/:catchAll(.*)", 
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
