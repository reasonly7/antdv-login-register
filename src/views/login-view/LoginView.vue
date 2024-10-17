<script setup lang="ts">
import { Card, Flex } from "ant-design-vue";
import LoginForm from "./login-form/LoginForm.vue";
import { onMounted } from "vue";
import { useCaptcha } from "@/composables/useCaptcha";
import { useLogin } from "./useLogin";

const captcha = useCaptcha();
const login = useLogin();

onMounted(() => {
  captcha.refresh();
});
</script>

<template>
  <div class="login-view">
    <Card title="Login" class="card-wrapper" :bordered="false">
      <LoginForm
        v-model:formModel="login.formModel"
        :captcha="captcha.img"
        :loading="login.loading"
        @login="login.submit(captcha.sessionId!).then(captcha.refresh)"
        @refresh="captcha.refresh()"
      ></LoginForm>

      <Flex justify="flex-end">
        <RouterLink to="/register">To Register</RouterLink>
      </Flex>
    </Card>
  </div>
</template>

<style scoped lang="less">
.login-view {
  background-color: #d3e3fd;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-wrapper {
    width: 270px;
  }
}
</style>
