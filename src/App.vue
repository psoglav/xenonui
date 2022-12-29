<script setup lang="ts">
import { useToast } from '@/components/toast'

const toast = useToast({ duration: 1500 })

toast.fire('successfully toasted')
</script>

<template>
  
</template>
