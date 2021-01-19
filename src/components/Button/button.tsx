import React, { FC } from 'react';
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'small'
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

const Button: FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
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