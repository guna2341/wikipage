import { Select, SelectItem } from '@heroui/select'
import React from 'react'

export const SelectComponent = ({
    data = [],
    label = "",
    size = "sm",
    variant = "bordered"
}) => {
  return (
    <div>
        <Select className="max-w-xs" label={label} size={size} variant={variant}>
        {data.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
