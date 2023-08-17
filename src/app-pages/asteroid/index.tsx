'use client'

import { type TasteroidData } from '@/constants'

import styles from './styles.module.css'
import AsteroidInfo from '@/modules/AsteroidInfo'

interface AsteroidPageProps {
  asteroidData: TasteroidData
}
const AsteroidPage = ({ asteroidData }: AsteroidPageProps) => {
  console.log('asteroidData', asteroidData)
  return <AsteroidInfo asteroidData={asteroidData} />
}
export default AsteroidPage
