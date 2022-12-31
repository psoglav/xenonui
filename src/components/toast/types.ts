export type ToastPosition =  "top-left" | "top-right" | "bottom-left" | "bottom-right"

export interface ToastOptions {
  position?: ToastPosition
}

export interface ToastModel {
  message: string
  options: ToastOptions | undefined
}