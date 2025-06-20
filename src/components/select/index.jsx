import { Select, SelectItem } from '@heroui/select'
import React from 'react'

export const SelectComponent = ({
    data = []
}) => {
  return (
    <div>
        <Select className="max-w-xs" label="Select an animal">
        {data.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
