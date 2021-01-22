import React, { CSSProperties, FC, createContext, useState } from 'react';
import classNames from 'classnames';

type MenuType = 'horizontal' | 'vertical'
type SelectCallBack = (defaultIndex: number) => void
interface MenuProps {
    defaultIndex?: number,
    className?: string;
    style?: CSSProperties,
    mode?: MenuType,
    onSelect?: SelectCallBack
}
interface IMenuContext {
    index: number,
    onSelect?: SelectCallBack
}
export const MenuContext = createContext<IMenuContext>({
    index: 0,
})
const Menu: FC<MenuProps> = (props) => {
    let { className, style, mode, children, defaultIndex, onSelect } = props
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const [currentActive, setActive] = useState(defaultIndex)
    const handleClick = (index: number) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu