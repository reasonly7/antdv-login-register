<script setup lang="ts">
import { logout } from "@/composables/useLogin";
import { Card } from "ant-design-vue";
import { onMounted } from "vue";
import LoginForm from "./login-form/LoginForm.vue";

onMounted(logout);
</script>

<template>
  <div class="login-view">
    <Card title="Login" class="login-card" :bordered="false">
      <LoginForm />
    </Card>
  </div>
</template>

<style scoped lang="less">
.login-view {
  height: 100%;
  background-color: #d3e3fd;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-card {
    width: 300px;
  }
}
</style>
