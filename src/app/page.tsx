import { log } from 'console'

import MainPage from '@/app-pages/main'
import { type Tasteroid } from '@/constants'
import { getAsteroids } from '@/api/getAsteroids'

export default async function Home() {
  let initialAsteroids: Tasteroid[] = []
  let initialNextResponse = ''

  try {
    const { asteroids, nextResponse } = await getAsteroids()
    initialAsteroids = asteroids
    initialNextResponse = nextResponse
  } catch (err) {
    console.error(err)
  }

  return <MainPage initialAsteroids={initialAsteroids} nextResponse={initialNextResponse} />
}
