import BaseLayout from "@/components/BaseLayout.vue";
import LoginView from "@/views/static-views/login-view/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";
import * as dynamicRoutes from "@/composables/useDynamicRoutes";
import { isLogin } from "@/composables/useLogin";
import RegisterView from "@/views/static-views/register-view/RegisterView.vue";
import NotFoundView from "@/views/static-views/not-found-view/NotFoundView.vue";

export const enum StaticRouteName {
  BaseLayout = "BaseLayout",
  Login = "Login",
  Register = "Register",
  NotFound = "NotFound",
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: StaticRouteName.BaseLayout,
      component: BaseLayout,
      redirect: { name: StaticRouteName.Login },
      children: [
        { path: "/login", name: StaticRouteName.Login, component: LoginView },
        {
          path: "/register",
          name: StaticRouteName.Register,
          component: RegisterView,
        },
        {
          path: "/404",
          name: StaticRouteName.NotFound,
          component: NotFoundView,
        },
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  if (isLogin.value) {
    if (!dynamicRoutes.isReady.value) {
      await dynamicRoutes.init();
      return { ...to, replace: true };
    }
  } else {
    if (to.name !== StaticRouteName.Login) {
      return { name: StaticRouteName.Login };
    }
  }
});
