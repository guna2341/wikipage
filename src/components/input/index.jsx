import { Input } from '@heroui/input'

export const InputField = ({
  startContent,
  endContent,
  placeholder,
  label,
  classname,
  classnames,
  size,
  onChange,
  value,
  variant,
  radius,
  disabled,
  isReadOnly
}) => {
  return (
    <div>
      <Input
        isReadOnly={isReadOnly}
        isDisabled={disabled}
        radius={radius}
        variant={variant}
        value={value}
        onChange={onChange}
        size={size}
        className={classname}
        classNames={{
          base: "w-full",
          mainWrapper: "w-full",
          inputWrapper: "px-4",
          innerWrapper: "flex gap-1",
          ...classnames
        }}
        label={label}
        placeholder={placeholder}
        startContent={startContent}
        endContent={endContent}
      />
    </div>
  )
}

