<script lang="ts" setup>
export interface ToastProps {
  message: string
}

defineProps<ToastProps>()
</script>

<template>
  <div class="toast-item">
    {{ message }}
  </div>
</template>

<style lang="scss">
  .toast-item {

  }
</style>
