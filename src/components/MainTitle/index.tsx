import styles from './styles.module.css'

const MainTitle = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>ARMAGEDDON 2023</h1>
      <span className={styles.subtitle}>
        ООО “Команда им. Б. Уиллиса”. <br /> Взрываем астероиды с 1998 года.
      </span>
    </div>
  )
}
export default MainTitle
