import { Button } from '@heroui/button'
import React from 'react'

export const ButtonComponent = React.forwardRef(({
  type,
  onClick,
  color = "primary",
  variant = "solid",
  children = "button",
  className,
  classNames, // Fixed: should be classNames (capital N)
  endContent,
  startContent,
  isLoading = false,
  isIconOnly = false,
  isDisabled = false,
}, ref) => {
  return (
    <Button
      ref={ref}
      type={type}
      variant={variant}
      radius={"md"}
      classNames={{
        ...classNames 
      }}
      className={`pl-3 rounded-lg bg-purple-600 ${className || ''}`}
      color={color}
      isLoading={isLoading}
      startContent={startContent}
      endContent={endContent}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      onPress={onClick}
    >
      {children}
    </Button>
  )
})