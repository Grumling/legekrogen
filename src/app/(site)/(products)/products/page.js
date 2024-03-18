'use client'
import Hero from '@/components/heroe/hero'
import styles from './page.module.css'
import Product from '@/components/products/product/product'
import SectionTitle from '@/components/sectionTitle/sectionTitle'

export default function Products() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero - Props changeable */}
      <Hero
        title={'På udkig efter nyt'}
        subTitle={'LEGETØJ?'}
        imagePath='/heros/produkter.jpg'
      />

      <SectionTitle
        title={'Alt vores'}
        subTitle={'LEGETØJ'}
        background='var(--background-lightPurple)'
      />

      <Product />
    </main>
  )
}
