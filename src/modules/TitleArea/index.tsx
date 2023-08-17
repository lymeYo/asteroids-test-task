import MainTitle from '@/components/MainTitle'
import styles from './styles.module.css'

const TitleArea = () => {
  return (
    <div className={styles.container} data-testid='title-area'>
      <div className={styles.wrapper}>
        <MainTitle />
        <div className={styles['image-area-wrapper']}>
          <div className={styles['image-area']}></div>
        </div>
      </div>
    </div>
  )
}

export default TitleArea
