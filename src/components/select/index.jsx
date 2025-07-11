import { Select, SelectItem } from '@heroui/select'

export const SelectComponent = ({
  data = [],
  label = "",
  size = "sm",
  variant = "bordered",
  className,
  classNames,
  placeholder,
  ariaLabel, // Add this prop for accessibility
  ariaLabelledBy // Add this prop for accessibility
}) => {
  return (
    <div>
      <Select
        className={`max-w-xs ${className}`}
        placeholder={placeholder}
        label={label}
        size={size}
        variant={variant}
        aria-label={!label ? (ariaLabel || placeholder || "Select an option") : undefined}
        aria-labelledby={ariaLabelledBy}
        classNames={{
          trigger: "shadow-none",
          ...classNames
        }}
      >
        {data.map((item) => (
          <SelectItem key={item.key}
            className='py-2.5 data-[hover=true]:bg-gray-100 data-[focus-visible=true]:outline-0 data-[selectable=true]:focus:bg-gray-1000'
          >{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}