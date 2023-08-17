import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import BasketPreview from '..'

const basketPreviewProps = {
  setBasketOpen: (isOpen: boolean) => {},
  itemsCount: 0
}

test('render BasketPreview component', () => {
  render(<BasketPreview {...basketPreviewProps} />)

  const basketPreviewEl = screen.getByTestId('basket-preview')
  expect(basketPreviewEl).toBeInTheDocument()
})
