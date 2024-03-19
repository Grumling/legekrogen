'use client'
import Hero from '@/components/heroe/hero'
import styles from './page.module.css'
import Product from '@/components/products/product/product'
import CustomerReviews from '@/components/frontpage/customerReviews/customerReviews'
import SectionTitle from '@/components/sectionTitle/sectionTitle'
import CtaMembership from '@/components/ctaMembership/ctaMembership'

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero - Props changeable */}
      <Hero
        title={'At lege er at leve'}
        subTitle={'Her hos os har vi et stort udvalg af legetøj i høj kvalitet'}
        imagePath='/heros/forsiden.jpg'
      />

      {/* Section title and stubtitle */}
      <SectionTitle
        title={'Et udpluk af vores'}
        subTitle={'LEGETØJ'}
        background='var(--background-lightPurple)'
      />

      {/* SECTION - Recommended */}
      <Product filterFunc={(product) => product.recommended} />

      {/* Customer Reviews */}
      <CustomerReviews />
      <CtaMembership />
    </main>
  )
}
