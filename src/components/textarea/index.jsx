import React from 'react'
import {Textarea} from "@heroui/input";

export const TextField = ({
    className,
    classNames,
    isClearable,
    maxRows,
    minRows,
    placeholder,
    onKeyDown,
    disableAutosize,
    disabled = false,
    onChange
}) => {

    function handleOnChange(e) {
        onChange(e);
    }

  return (
      <Textarea
          onChange={handleOnChange}
          disableAutosize={disableAutosize}
          isDisabled={disabled}
          onKeyDown={onKeyDown}
          maxRows={maxRows}
          minRows={minRows}
          placeholder={placeholder}
          isClearable={isClearable}
          className={className}
          classNames={{
              base: "w-full",
              mainWrapper: "w-full",
              inputWrapper: "px-4",
              innerWrapper: "flex gap-1",
              ...classNames
          }}
      />
  )
}

