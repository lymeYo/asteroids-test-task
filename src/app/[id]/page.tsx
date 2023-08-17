import { useParams } from 'next/navigation'

import { getAsteroidById } from '@/api/getAsteroidById'
import AsteroidPage from '@/app-pages/asteroid'
import { type TasteroidData } from '@/constants'

export default async function Page({ params }: any) {
  const { id: asteroidId } = params
  try {
    const { asteroidData } = await getAsteroidById(asteroidId)
    return <AsteroidPage asteroidData={asteroidData} />
  } catch (err) {
    throw new Error('Something went wrong')
  }
}
