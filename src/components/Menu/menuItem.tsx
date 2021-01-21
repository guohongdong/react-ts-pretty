import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames'

interface MenuItemProps {
    index?: string,
    disabled?: boolean,
    className?: string,
    style?: CSSProperties
}

const MenuItem: FC<MenuItemProps> = ({
    index,
    disabled,
    className,
    style,
    children
}) => {
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled
    })

    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}
MenuItem.defaultProps = {
    disabled:false
}

export default MenuItem