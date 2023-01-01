export const ToastPositions = ["top-left", "top-right", "bottom-left", "bottom-right"] as const

export type ToastPosition = typeof ToastPositions[number]

export interface ToastOptions {
  position?: ToastPosition
}

export interface ToastModel {
  message: string
  options: ToastOptions | undefined
}
