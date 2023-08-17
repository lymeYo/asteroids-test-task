import { API_KEY_NASA, type Tasteroid, type TasteroidData } from '@/constants'

interface getAsteroidByIdReturnType {
  asteroidData: TasteroidData
}
export const getAsteroidById = async (id: number): Promise<getAsteroidByIdReturnType> => {
  const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY_NASA}`
  const result: any = await fetch(url, {
    method: 'GET'
  })
  const data = await result.json()
  const asteroidData: TasteroidData = {
    name: data.name,
    size: parseInt(data.estimated_diameter.meters.estimated_diameter_min),
    isDanger: data.is_potentially_hazardous_asteroid,
    closeApproachData: data.close_approach_data.map((fullApproachData: any) => ({
      date: fullApproachData.close_approach_date,
      kmPerSec: parseInt(fullApproachData.relative_velocity.kilometers_per_second),
      distance: parseInt(fullApproachData.miss_distance.kilometers).toLocaleString(),
      orbitingBody: fullApproachData.orbiting_body
    }))
  }

  return { asteroidData }
}
