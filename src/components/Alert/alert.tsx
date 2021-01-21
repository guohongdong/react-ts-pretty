import React, { FC, HTMLAttributes, useState } from 'react';
import classNames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface BaseAlertProps {
    title?: string,
    description: string,
    type: AlertType,
    closable?: boolean,
    isShow?: boolean,
    onClose?: () => void
}
type AlertProps = Partial<BaseAlertProps & HTMLAttributes<HTMLElement>>

const Alert: FC<AlertProps> = (props) => {
    const {
        title,
        className,
        description,
        type,
        closable,
        onClose,
        ...resProps
    } = props
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type
    })
    const [show, setShow] = useState(true)

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
        setShow(false);
    };

    return show ? (<div
        className={classes}
        {...resProps}
    >
        {title && <span className="alert-title">{title}</span>}
        {description && <p className="alert-desc">{description}</p>}
        {closable && <span className="alert-close" onClick={handleClose}>X</span>}
    </div>) : null
}

Alert.defaultProps = {
    type: 'default',
    closable: false
}

export default Alert