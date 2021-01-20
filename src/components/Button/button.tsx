import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = "primary",
    Dafault = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string,
    btnType?: ButtonType,
    size?: ButtonSize,
    disabled?: boolean
    children: React.ReactNode
    href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps&AnchorButtonProps> 

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        btnType,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props
    const classes = classNames('btn', className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Dafault
}

export default Button