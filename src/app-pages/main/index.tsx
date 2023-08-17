'use client'

import { useState, useMemo } from 'react'

import TitleArea from '@/modules/TitleArea'
import ListArea from '@/modules/MainListArea'
import Basket from '@/modules/BasketPreview'
import { type Tasteroid } from '@/constants'

import styles from './styles.module.css'
import BgImagePlanet from '@/components/BgImagePlanet'
import MainTitle from '@/components/MainTitle'
import BasketListArea from '@/modules/BasketListArea'

interface MainProps {
  initialAsteroids: Tasteroid[]
  nextResponse: string
}
const Main = ({ initialAsteroids, nextResponse }: MainProps) => {
  const [asteroids, setAsteroids] = useState<Tasteroid[]>(initialAsteroids ?? [])
  const [orderedAsteroidsIds, setOrderedAsteroidsIds] = useState<string[]>([])
  const orderedAsteroids = useMemo(
    () => asteroids.filter(asteroid => orderedAsteroidsIds.includes(asteroid.id)),
    [asteroids, orderedAsteroidsIds]
  )
  const handleAsteroids = (newAsteroids: Tasteroid[]) => {
    setAsteroids(prevAsteroids => [...prevAsteroids].concat(newAsteroids))
  }
  const handleOrderedAstroids = (id: string) => {
    setOrderedAsteroidsIds(prevAsteroids => {
      if (prevAsteroids.includes(id)) return prevAsteroids.filter(asteroidId => asteroidId != id)
      else return prevAsteroids.concat([id])
    })
  }
  const [isBasketOpen, setBasketOpen] = useState<boolean>(false)

  return !isBasketOpen ? (
    <div className={styles['main-wrapper']}>
      <TitleArea />
      <ListArea
        handleOrderedAstroids={handleOrderedAstroids}
        orderedAsteroidsIds={orderedAsteroidsIds}
        handleAsteroids={handleAsteroids}
        items={asteroids}
        nextResponse={nextResponse}
      />
      <Basket itemsCount={orderedAsteroids.length} setBasketOpen={setBasketOpen} />
    </div>
  ) : (
    <div className={styles['basket-wrapper']}>
      <BgImagePlanet />
      <MainTitle />
      <BasketListArea items={orderedAsteroids} />
    </div>
  )
}
export default Main
