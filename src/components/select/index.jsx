import { Select, SelectItem } from '@heroui/select'
import React from 'react'

export const SelectComponent = ({
    data = [],
    label = "",
    size = "sm",
    variant = "bordered",
    className,
    classNames
}) => {
  return (
    <div>
        <Select className={`max-w-xs ${className}`} label={label} size={size} variant={variant} classNames={classNames} >
        {data.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
