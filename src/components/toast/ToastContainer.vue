<script setup>
import ToastItem from './ToastItem.vue'
import {useState} from '.'

const state = useState()
</script>

<template>
  <teleport to="body" :disabled="!state.length">
    <div class="toast-container">
      <toast-item v-for="(item, i) in state" :key="i" :message="item.message" />
    </div>
  </teleport>
</template>

<style>
  .toast-container {
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: .5rem;
  }
</style>