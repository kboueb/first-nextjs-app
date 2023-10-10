import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from './components/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Bienvenue sur<br/>mi.Blog</h1>
        <p className={styles.desc}>
          lorem ipsum dolor sit amet, consectetur adip nonum soc et beata in ea rebum.
        </p>
        <Button url="/portfolio" text="voir les réalisations" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='Hero image' className={styles.img} />
      </div>
    </div>
  )
}
