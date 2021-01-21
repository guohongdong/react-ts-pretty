import React from 'react';
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonType, ButtonProps, ButtonSize } from './button'

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'testClass'
}

const disabledProps = {
    disabled: true,
    onClick: jest.fn()
}


test('组件是否正确渲染', () => {
    const wrapper = render(<Button {...defaultProps}>hello</Button>)
    const element = wrapper.getByText('hello') as HTMLButtonElement
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()

})

test('渲染不同属性组件', () => {
    const wrapper = render(<Button {...testProps}>hello</Button>)
    const element = wrapper.getByText('hello')
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-primary btn-lg testClass')
})

test('渲染link类型组件', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href='https://www.npmjs.com/'>link</Button>)
    const element = wrapper.getByText('link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
})

test('渲染组件禁用情况', () => {
    const wrapper = render(<Button {...disabledProps}>disabled</Button>)
    const element = wrapper.getByText('disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
    expect(element).toHaveClass('btn')
})



