import { ref } from "vue"

const state = ref([])

export const useState = () => state

export const useToast = () => {
  return {
    fire() {
      state.value.push()
    },
  }
}
