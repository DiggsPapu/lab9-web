import {
  expect, it, describe, vi,
} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Button from './button'

describe('Testing the button component', () => {
  it('Can be clicked 5 times:'), () => {
    const spy = vi.fn()
    render(<Button click={spy} text="This is a test" />)
    const element = screen.getByText('This is a test')
    fireEvent.click(element)
    fireEvent.click(element)
    fireEvent.click(element)
    fireEvent.click(element)
    fireEvent.click(element)
    expect(spy).toHaveBeenCalledTimes(5)
    screen.debug()
  }
})
