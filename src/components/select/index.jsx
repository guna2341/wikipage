import { Select, SelectItem } from '@heroui/select'

export const SelectComponent = ({
  data = [],
  label = "",
  size = "sm",
  variant = "bordered",
  className,
  classNames,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div>
      <Select
        className={`max-w-xs ${className}`}
        placeholder={placeholder}
        label={label}
        size={size}
        variant={variant}
        value={value}
        onChange={onChange}
        classNames={{
          trigger: "shadow-none",
          ...classNames
        }}
      >
        {data.map((item) => (
          <SelectItem
            key={item.key}
            value={item.key}
            className='py-2.5 data-[hover=true]:bg-gray-100 data-[focus-visible=true]:outline-0 data-[selectable=true]:focus:bg-gray-100'
          >
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
