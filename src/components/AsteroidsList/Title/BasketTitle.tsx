import styles from './styles.module.css'

const BasketTitle = () => {
  return (
    <div className={styles.wrapper} data-testid='asteroids-list-basket-title'>
      <div className={styles.title}>Заказ отправлен!</div>
    </div>
  )
}
export default BasketTitle
