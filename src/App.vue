<script setup lang="ts">
import { useToast } from '@/components/toast'
import ToastContainer from '@/components/toast/ToastContainer.vue'

const toast = useToast()

toast.fire('first toast!')
toast.fire('second toast...')
</script>

<template>
  <ToastContainer />
</template>
