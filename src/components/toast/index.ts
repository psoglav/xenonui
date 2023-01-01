import { ref, computed, h, render, nextTick } from "vue"
import type { VNode } from "vue"
import type { ToastModel, ToastOptions, ToastPosition } from "./types"
import Toast from "./Toast.vue"
import type { ToastProps } from "./Toast.vue"

const instances = ref<ToastProps[]>([])

const defaultOptions: ToastOptions = {
  position: "bottom-right"
}

const renderInstances = () => {
  const positions = instances.value.map((i) => i.position)

  let root = h(
    "div",
    {},
    positions.map((pos) =>
      h(
        "div",
        { class: ["toast-container", "toast-container--" + pos] },
        instances.value.filter((i) => i.position == pos).map((i) => h(Toast, i))
      )
    )
  )

  render(root, document.body)
}

export const useToast = (options: ToastOptions = defaultOptions) => {
  options = { ...defaultOptions, ...options }
  return {
    fire(msg: string) {
      let item = { message: msg, ...options }
      instances.value.push(item)
      renderInstances()
    }
  }
}
