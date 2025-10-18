import { addToast } from "@heroui/toast";

 export function toast(title, description, color) {
    addToast({
      title,
      description,
      variant: "flat",
      color,
    })
  }