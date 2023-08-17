import { type TviewStatus } from '../constants'
import styles from './styles.module.css'

interface MainListTitleProps {
  setViewStatus: (mode: TviewStatus) => void
  curViewStatus: TviewStatus
}
const MainListTitle = ({ setViewStatus, curViewStatus }: MainListTitleProps) => {
  const handleKm = () => {
    setViewStatus('km')
  }

  const handleLunarOrbits = () => {
    setViewStatus('lunar orbits')
  }

  return (
    <div
      className={`${styles.wrapper} ${styles['with-padding']}`}
      data-testid='asteroids-list-main-title'
    >
      <div className={styles['title-area']}>
        <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
        <div className={styles.options}>
          <span
            onClick={handleKm}
            className={curViewStatus === 'km' ? styles.active : styles.inactive}
          >
            в километрах
          </span>
          &nbsp;|&nbsp;
          <span
            onClick={handleLunarOrbits}
            className={curViewStatus === 'km' ? styles.inactive : styles.active}
          >
            в лунных орбитах
          </span>
        </div>
      </div>
    </div>
  )
}
export default MainListTitle
