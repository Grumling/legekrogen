import Hero from '@/components/heroe/hero'
import styles from './page.module.css'
import Accordion from '@/components/faq/accordion/accordion'

export default function Faq() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero - Props changeable */}
      <Hero
        subTitleClass={styles.SubTitleClass}
        title={'Har du nogle'}
        subTitle={'SPØRGSMÅL?'}
        extraText={
          'Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os'
        }
        imagePath='/heros/faq.jpg'
      />
      {/* Accordion */}
      <Accordion />
    </main>
  )
}
