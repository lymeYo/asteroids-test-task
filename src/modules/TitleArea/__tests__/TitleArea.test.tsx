import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import TitleArea from '..'

test('render TitleAre component', () => {
  const titleAreaText = 'ARMAGEDDON 2023'
  render(<TitleArea />)

  const titleAreaEl = screen.getByTestId('title-area')
  expect(titleAreaEl).toBeInTheDocument()
  expect(titleAreaEl).toHaveTextContent(titleAreaText)
})
