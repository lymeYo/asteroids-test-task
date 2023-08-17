import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AsteroidsList from '..'
import Title from '../Title'
import { type TviewStatus, type Tmood } from '../constants'

const asteroidsListProps = {
  mood: 'sending' as Tmood,
  asteroids: []
}
const titleProps = {
  mood: 'sending' as Tmood,
  viewStatus: 'km' as TviewStatus,
  setViewStatus: (status: TviewStatus) => {}
}

test('render AsteroidsList component inside basket (with sending mood)', () => {
  render(<AsteroidsList {...asteroidsListProps} />)
  render(<Title {...titleProps} />)

  const asteroidsListEl = screen.getByTestId('asteroids-list')
  const basketTitleEl = screen.getAllByTestId('asteroids-list-basket-title')[0]
  expect(asteroidsListEl).toBeInTheDocument()
  expect(asteroidsListEl).toContainElement(basketTitleEl)
})
