import { type TviewStatus, type Tmood } from '../constants'
import MainListTitle from './MainListTitle'
import BasketTitle from './BasketTitle'
import styles from './styles.module.css'

interface TitleProps {
  mood: Tmood
  viewStatus: TviewStatus
  setViewStatus: (status: TviewStatus) => void
}
const Title = ({ mood, viewStatus, setViewStatus }: TitleProps) => {
  if (mood === 'searching')
    return <MainListTitle curViewStatus={viewStatus} setViewStatus={setViewStatus} />
  else return <BasketTitle />
}
export default Title
