<script setup lang="ts">
import { logout } from "@/composables/useLogin";
</script>

<template>
  <div>
    You have successfully logged in. Now, you can
    <button @click="logout">logout</button>
  </div>
</template>

<style scoped lang="less"></style>
