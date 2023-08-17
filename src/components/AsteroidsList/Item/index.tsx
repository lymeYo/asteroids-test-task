import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useMemo } from 'react'

import { type Tmood, type TviewStatus } from '../constants'
import { type Tasteroid } from '@/constants'

import AsteroidImg from '@/ui/images/asteroid.png'
import styles from './styles.module.css'

interface ItemProps extends Tasteroid {
  viewStatus: TviewStatus
  mood: Tmood
  handleToOrder: () => void
  isOrdered?: boolean
}
const Item = ({
  id,
  date,
  distance,
  size,
  isDanger,
  name,
  viewStatus,
  mood,
  handleToOrder,
  isOrdered = false
}: ItemProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/${id}`)
  }

  const isAsteroidLarge = size > 100
  const localeDate = useMemo(
    () =>
      new Date(date)
        .toLocaleDateString('ru', {
          year: 'numeric',
          day: 'numeric',
          month: 'short'
        })
        .replace(/(\.|г)/gm, ''),
    [date]
  )
  return (
    <div className={styles.wrapper}>
      <h4 onClick={handleClick} className={styles.date}>
        {localeDate}
      </h4>
      <div className={styles.info}>
        <div className={styles['distance-area']}>
          <span className={styles.distance}>
            {viewStatus === 'km' ? `${distance.km} км` : `${distance.lunarOrbits} лунных орбит`}
          </span>
          {/* <span className={styles['arrow-img-wrapper']}>
            <img src={ArrowImg} alt='' />
          </span> */}
          <span className={styles.arrow}></span>
        </div>
        <div className={styles['asteroid-img-wrapper']}>
          <Image src={AsteroidImg} width={isAsteroidLarge ? 40 : 20} height={40} alt='Asteroid' />
        </div>
        <div className={styles['name-area']}>
          <span className={styles.name}>{name}</span>
          <span className={styles.size}>
            <span>&#8960;</span>
            {size} м
          </span>
        </div>
      </div>
      <div className={styles['button-area']}>
        {mood === 'searching' ? (
          <button className={isOrdered ? styles['button-inactive'] : ''} onClick={handleToOrder}>
            {isOrdered ? 'В корзине' : 'Заказать'}
          </button>
        ) : (
          ''
        )}
        {isDanger ? <span>⚠ Опасен</span> : ''}
      </div>
    </div>
  )
}
export default Item
