import { useMemo } from 'react'

import styles from './styles.module.css'

interface BasketProps {
  setBasketOpen: (isOpen: boolean) => void
  itemsCount: number
}
const Basket = ({ setBasketOpen, itemsCount }: BasketProps) => {
  const handleSend = () => {
    setBasketOpen(true)
  }
  const countString: string = useMemo(() => {
    if (itemsCount == 0 || (itemsCount > 4 && itemsCount < 21)) return `${itemsCount} астероидов`
    else if (itemsCount % 10 == 1) return `${itemsCount} астероид`
    else if (itemsCount % 10 > 1 && itemsCount % 10 < 5) return `${itemsCount} астероида`
    return `${itemsCount} астероидов`
  }, [itemsCount])

  return (
    <div className={styles.container} data-testid='basket-preview'>
      <div className={styles.wrapper}>
        <div className={styles.basket}>
          <div className={styles.title}>
            <span>Корзина</span>
            <span className={styles['asteroids-amount']}>{countString}</span>
          </div>
          <button onClick={handleSend}>Отправить</button>
        </div>
      </div>
    </div>
  )
}
export default Basket
