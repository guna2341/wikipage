import { Button } from '@heroui/button'
import React from 'react'

export const ButtonComponent = ({
  ref,
  onClick,
  color = "primary",
  variant = "solid",
  children = "button",
  className,
  classnames,
  endContent,
  startContent,
  isLoading = false,
  isIconOnly = false,
  isDisabled = false
}) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      classnames={classnames}
      className={className}
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
}