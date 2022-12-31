<script setup lang="ts">
import { useToast } from "@/components"
import { ref } from "vue"

const toast1 = useToast({
  position: "bottom-left"
})
const toast2 = useToast({
  position: "bottom-right"
})
const toast3 = useToast({
  position: "top-left"
})
const toast4 = useToast({
  position: "top-right"
})

const counter = ref(0)
</script>

<template>
  <div class="page-wrapper">
    <button @click="toast1.fire('Toast message ' + counter++)">
      bottom-left
    </button>
    <button @click="toast2.fire('Toast message ' + counter++)">
      bottom-right
    </button>
    <button @click="toast3.fire('Toast message ' + counter++)">top-left</button>
    <button @click="toast4.fire('Toast message ' + counter++)">
      top-right
    </button>
  </div>
</template>

<style lang="scss">
.page-wrapper {
  padding: 2rem;
  z-index: 10;
  position: absolute;

  button {
    display: block;
  }
}
</style>
