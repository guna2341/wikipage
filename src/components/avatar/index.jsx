import React from 'react'
import { Avatar } from '@heroui/avatar'

export const AvatarComponent = ({
    className,
    classNames,
    src,
    size,
    isBordered,
    isDisabled = false,
    radius,
    color,
}) => {
    return (
        <Avatar
            className={className}
            classNames={classNames}
            src={src}
            size={size}
            isDisabled={isDisabled}
            isBordered={isBordered}
            radius={radius}
            color={color}
        />
  )
}

