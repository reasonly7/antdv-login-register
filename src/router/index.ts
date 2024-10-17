import LoginView from "@/views/login-view/LoginView.vue";
import RegisterView from "@/views/register-view/RegisterView.vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", name: "LoginView", component: LoginView },
    { path: "/register", name: "RegisterView", component: RegisterView },
  ],
});
