import React, { CSSProperties, FC, useContext } from 'react';
import classNames from 'classnames'
import { MenuContext } from './menu'

interface MenuItemProps {
    index: number,
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
    const context = useContext(MenuContext);
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })

    const handleClick = () => {
        if (context.onSelect && !disabled) {
            context.onSelect(index)
        }
    }

    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}
MenuItem.defaultProps = {
    disabled: false
}

export default MenuItem