<script setup lang="ts">
import userApi from "@/api/user.api";
import {
  Form,
  FormItem,
  Input,
  InputPassword,
  Button,
  Image,
} from "ant-design-vue";
import { onMounted, reactive, ref } from "vue";

interface UserFormModel {
  username?: string;
  password?: string;
  code?: string;
}
const formModel = reactive<UserFormModel>({});
const codeImgBase64 = ref("");

onMounted(async () => {
  codeImgBase64.value = (await userApi.captcha()) || "";
});
</script>

<template>
  <Form layout="vertical" :model="formModel">
    <FormItem label="Username" name="username" required>
      <Input v-model:value="formModel.username" autofocus />
    </FormItem>

    <FormItem label="Password" name="password" required>
      <InputPassword v-model:value="formModel.password" />
    </FormItem>

    <div>
      <FormItem name="code" required>
        <Input v-model:value="formModel.code" />
      </FormItem>

      <img :src="codeImgBase64" />
    </div>

    <FormItem>
      <Button block type="primary" htmlType="submit">Log in</Button>
    </FormItem>
  </Form>
</template>

<style scoped lang="less"></style>
