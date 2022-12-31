import { ref, watch, h, render } from "vue"
import type { VNode } from "vue"
import type { ToastModel, ToastOptions, ToastPosition } from "./types"
import Toast from "./Toast.vue"
import type { ToastProps } from "./Toast.vue"

const instances = ref<ToastProps[]>([])

const defaultOptions: ToastOptions = {
  position: "bottom-right"
}

export const useToast = (options: ToastOptions = defaultOptions) => {
  options = { ...defaultOptions, ...options }
  return {
    fire(msg: string) {
      let item = { message: msg }
      instances.value.push(item)
      let vnode = h(
        "div",
        { class: ["toast-container", "toast-container--" + options.position] },
        instances.value.map((i) => h(Toast, i))
      )
      render(vnode, document.body)
    }
  }
}
