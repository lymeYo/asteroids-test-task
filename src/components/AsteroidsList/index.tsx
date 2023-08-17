import { useState } from 'react'

import Title from './Title'
import { type Tmood, type TviewStatus } from './constants'

import styles from './styles.module.css'
import List from './List'
import { type Tasteroid } from '@/constants'

interface AsteroidsListProps {
  mood: Tmood
  asteroids: Tasteroid[]
  handleOrdered?: (id: string) => void
  orderedIds?: string[]
}
const AsteroidsList = ({ mood, asteroids, handleOrdered, orderedIds }: AsteroidsListProps) => {
  const [viewStatus, setViewStatus] = useState<TviewStatus>('km')

  return (
    <div
      className={`${styles.body} ${mood === 'sending' ? styles['with-padding'] : ''}`}
      data-testid='asteroids-list'
    >
      <Title viewStatus={viewStatus} setViewStatus={setViewStatus} mood={mood} />
      <List
        mood={mood}
        viewStatus={viewStatus}
        items={asteroids}
        handleOrdered={handleOrdered}
        orderedIds={orderedIds}
      />
    </div>
  )
}
export default AsteroidsList
