<script setup lang="ts">
import { Card } from "ant-design-vue";
import RegisterForm from "./register-form/RegisterForm.vue";
import { onMounted } from "vue";
import { useCaptcha } from "@/composables/useCaptcha";
import { useRegister } from "./useRegister";

const captcha = useCaptcha();
const register = useRegister();

onMounted(() => {
  captcha.refresh();
});
</script>

<template>
  <div class="register-view">
    <Card title="Register" class="card-wrapper" :bordered="false">
      <RegisterForm
        v-model:formModel="register.formModel"
        :captcha="captcha.img"
        :loading="register.loading"
        @register="register.submit(captcha.sessionId!).then(captcha.refresh)"
        @refresh="captcha.refresh()"
      ></RegisterForm>

      <RouterLink to="/login">Back to Login</RouterLink>
    </Card>
  </div>
</template>

<style scoped lang="less">
.register-view {
  background-color: #EFF2EF;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-wrapper {
    width: 270px;
  }
}
</style>
