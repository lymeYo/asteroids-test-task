export const API_KEY_NASA = 'kb96SoeG8XuEL8qAinbftOrNjs8ZrhMjqYlWXi1c'

export interface Tasteroid {
  date: string
  distance: {
    km: string
    lunarOrbits: number
  }
  size: number
  isDanger: boolean
  name: string
  id: string
}

export interface TapproachData {
  date: string
  kmPerSec: string
  distance: string
  orbitingBody: string
}

export interface TasteroidData {
  name: string
  size: number
  isDanger: boolean
  closeApproachData: TapproachData[]
}
