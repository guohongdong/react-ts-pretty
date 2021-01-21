import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames';

type MenuType = 'horizontal' | 'vertical'

interface MenuProps {
    defaultIndex?: number,
    className?: string;
    style?: CSSProperties,
    mode?: MenuType,
    onSelect?: (defaultIndex: number) => void
}

const Menu: FC<MenuProps> = (props) => {
    let { className, style, mode, children } = props
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            { children }
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu