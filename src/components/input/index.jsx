import { Input } from '@heroui/input'

export const InputField = ({
  id,
  type,
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
  isInvalid,
  errorMessage,
  isReadOnly,
  required
}) => {
  return (
    <div>
      <Input
        id={id}
        type={type}
        required={required}
        isReadOnly={isReadOnly}
        isDisabled={disabled}
        radius={radius}
        variant={variant}
        value={value}
        onChange={onChange}
        size={size}
        className={classname}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        classNames={{
          base: "w-full",
          mainWrapper: "w-full",
          inputWrapper: "px-4 ring-0 outline-0 group-data-[focus-visible=true]:ring-0",
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

