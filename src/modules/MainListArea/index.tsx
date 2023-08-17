import { useEffect, useRef, useState } from 'react'

import MainTitle from '@/components/MainTitle'
import AsteroidsList from '@/components/AsteroidsList'
import BgImagePlanet from '@/components/BgImagePlanet'

import styles from './styles.module.css'
import { type Tasteroid } from '@/constants'
import { getAsteroids } from '@/api/getAsteroids'

interface ListAreaProps {
  items: Tasteroid[]
  nextResponse: string
  handleAsteroids: (newAsteroids: Tasteroid[]) => void
  handleOrderedAstroids: (id: string) => void
  orderedAsteroidsIds: string[]
}
const ListArea = ({
  items,
  nextResponse,
  handleAsteroids,
  handleOrderedAstroids,
  orderedAsteroidsIds
}: ListAreaProps) => {
  const nextResponseRef = useRef<string>(nextResponse)
  const isResponseSending = useRef<boolean>(false)

  const isScrolledBottom = () => {
    return Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight - 50
  }

  useEffect(() => {
    const handleScroll = () => {
      const handleFetch = async () => {
        if (isScrolledBottom() && !isResponseSending.current) {
          isResponseSending.current = true
          const { asteroids, nextResponse } = await getAsteroids(nextResponseRef.current)
          nextResponseRef.current = nextResponse
          handleAsteroids(asteroids)
          isResponseSending.current = false
        }
      }
      handleFetch()
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles['title-area']}>
        <BgImagePlanet />
        <MainTitle />
      </div>
      <AsteroidsList
        mood={'searching'}
        asteroids={items}
        handleOrdered={handleOrderedAstroids}
        orderedIds={orderedAsteroidsIds}
      />
    </div>
  )
}
export default ListArea
