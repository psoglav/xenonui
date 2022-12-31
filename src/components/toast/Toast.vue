<script lang="ts" setup>
import type { ToastPosition } from "./types"

export interface ToastProps {
  message: string
  position?: ToastPosition
  duration?: number
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
  padding: 1rem 1.5rem;
  background-color: $primary;
  font-family: Inter, sans-serif;
  border-radius: 1rem;
  border: 1px black solid;
  width: 100%;
  max-width: 200px;
  color: white;
}
</style>
