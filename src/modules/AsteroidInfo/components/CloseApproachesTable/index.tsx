import { type TapproachData, type TasteroidData } from '@/constants'

import styles from './styles.module.css'

interface CloseApproachesTableProps {
  data: TapproachData[]
}

const CloseApproachesTable = ({ data }: CloseApproachesTableProps) => {
  console.log('data', data)

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles['column-name']}>Дата максимального сближения</div>
        <div className={styles['column-name']}>Расстояние от земли в км</div>
        <div className={styles['column-name']}>Скорость в км/c</div>
        <div className={styles['column-name']}>По чьей орбите летел</div>
        {data.map(info => (
          <>
            <div>{info.date}</div>
            <div>{info.distance}</div>
            <div>{info.kmPerSec}</div>
            <div>{info.orbitingBody}</div>
          </>
        ))}
      </div>
    </div>
  )
}
export default CloseApproachesTable
