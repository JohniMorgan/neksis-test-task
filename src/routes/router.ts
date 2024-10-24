import { createWebHistory, createRouter } from "vue-router";

import FormPage from "../pages/FormPage.vue";
import MainPage from "../pages/MainPage.vue";


const routes = [
    {path: '/', component: MainPage},
    {path: '/add', component: FormPage}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})