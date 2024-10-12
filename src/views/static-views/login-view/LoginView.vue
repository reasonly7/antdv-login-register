<script setup lang="ts">
import { logout } from "@/composables/useLogin";
import { onMounted } from "vue";

onMounted(logout);
</script>

<template>
  <div>login</div>
</template>

<style scoped lang="less"></style>
