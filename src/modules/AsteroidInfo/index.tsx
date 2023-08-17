import { type TasteroidData } from '@/constants'
import Header from './components/Header'
import CloseApproachesTable from './components/CloseApproachesTable'
import BgImagePlanet from '@/components/BgImagePlanet'

interface AsteroidInfoProps {
  asteroidData: TasteroidData
}
const AsteroidInfo = ({ asteroidData }: AsteroidInfoProps) => {
  return (
    <div>
      <BgImagePlanet />
      <Header name={asteroidData.name} size={asteroidData.size} isDanger={asteroidData.isDanger} />
      <CloseApproachesTable data={asteroidData.closeApproachData} />
    </div>
  )
}
export default AsteroidInfo
