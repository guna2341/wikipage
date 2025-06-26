import { Select, SelectItem } from '@heroui/select'

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
      <Select className={`max-w- ${className}`} label={label} size={size} variant={variant}
        classNames={{
          trigger: "shadow-none",
          ...classNames
        }} >
        {data.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
