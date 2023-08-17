import Image from 'next/image'

import { useRouter } from 'next/navigation'

import HomeImage from '@/ui/images/home.png'

import styles from './styles.module.css'

interface HeaderProps {
  name: string
  size: number
  isDanger: boolean
}

const Header = ({ name, size, isDanger }: HeaderProps) => {
  const router = useRouter()

  const mainPageCrossing = () => {
    router.push('/')
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={mainPageCrossing} className={styles['home-image']}>
        <Image src={HomeImage} alt='Home' width={24} height={24} />
      </div>
      <h1 className={styles.title}>
        <span className={styles.lettering}>Астероид</span>{' '}
        <span className={styles.name}>{name}</span>
      </h1>
      <div className={styles.info}>
        <span className={styles.size}>
          <span className={styles['diameter-symbol']}>&#8960;</span>
          <span>{size}м</span>
        </span>
        <span className={styles['danger-message']}>
          {isDanger ? '(Относится к категории опасных астероидов)' : ''}
        </span>
      </div>
    </div>
  )
}
export default Header
