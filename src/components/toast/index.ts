import { ref } from "vue"

export interface ToastModel {
  message: string
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const state = ref<ToastModel[]>([])

export const useState = () => state

export const useToast = () => {
  return {
    fire(msg: string) {
      state.value.push({
        message: msg,
        position: 'bottom-right'
      })
    },
  }
}
