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
    padding: 1rem;
    background-color: #121212;
    font-family: Inter, sans-serif;
    border-radius: .5rem;
    color: white;
    border: 1px gray solid;
  }
</style>
