import AsteroidsList from '@/components/AsteroidsList'
import { type Tasteroid } from '@/constants'

interface BasketListAreaProps {
  items: Tasteroid[]
}

const BasketListArea = ({ items }: BasketListAreaProps) => {
  return <AsteroidsList mood={'sending'} asteroids={items} />
}
export default BasketListArea
