import { API_KEY_NASA, type Tasteroid } from '@/constants'

const currentDate = '2023-08-16'

interface getAsteroidsReturnType {
  asteroids: Tasteroid[]
  nextResponse: string
}
export const getAsteroids = async (
  url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate}&end_date=${currentDate}&api_key=${API_KEY_NASA}`
): Promise<getAsteroidsReturnType> => {
  const result: any = await fetch(url, {
    method: 'GET'
  })
  const data = await result.json()
  const allAsteroidsObject = data.near_earth_objects
  const datesArrayFromObject = Object.keys(allAsteroidsObject).sort(
    (objA, objB) => +objA.replaceAll('-', '') - +objB.replaceAll('-', '')
  )

  const asteroids: Tasteroid[] = []

  for (const asteroidsByDate of datesArrayFromObject) {
    allAsteroidsObject[asteroidsByDate].forEach((asteroidData: any) => {
      const asteroid: Tasteroid = {
        date: asteroidsByDate,
        distance: {
          km: parseInt(
            asteroidData.close_approach_data[0].miss_distance.kilometers
          ).toLocaleString(),
          lunarOrbits: parseInt(asteroidData.close_approach_data[0].miss_distance.lunar)
        },
        size: parseInt(asteroidData.estimated_diameter.meters.estimated_diameter_min),
        isDanger: asteroidData.is_potentially_hazardous_asteroid,
        name: asteroidData.name,
        id: asteroidData.id
      }
      asteroids.push(asteroid)
    })
  }

  return { asteroids, nextResponse: data.links.next }
}
