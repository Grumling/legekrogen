'use client'
import Hero from '@/components/heroe/hero'
import styles from './page.module.css'
import SectionTitle from '@/components/sectionTitle/sectionTitle'

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <Hero
        title='At lege er at leve'
        subTitle='Her hos os har vi et stort udvalg af legetøj i høj kvalitet'
        imagePath='/heros/forsiden.jpg'
      />
      <SectionTitle title={'Et udpluk af vores'} subTitle={'LEGETØJ'} />
    </main>
  )
}
