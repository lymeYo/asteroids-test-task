import { type Tasteroid } from '@/constants'
import { type Tmood, type TviewStatus } from '../constants'
import Item from '../Item'
import styles from './styles.module.css'

interface ListProps {
  viewStatus: TviewStatus
  mood: Tmood
  items: Tasteroid[]
  handleOrdered?: (id: string) => void
  orderedIds?: string[]
}
const List = ({ viewStatus, mood, items, handleOrdered, orderedIds }: ListProps) => {
  // console.log(items);

  return (
    <ul className={styles.list}>
      {items.map(item => {
        const handleClick = () => {
          if (handleOrdered != null) handleOrdered(item.id)
        }
        return (
          <li key={item.id}>
            <Item
              {...item}
              viewStatus={viewStatus}
              mood={mood}
              handleToOrder={handleClick}
              isOrdered={orderedIds?.includes(item.id)}
            />
          </li>
        )
      })}
    </ul>
  )
}
export default List
