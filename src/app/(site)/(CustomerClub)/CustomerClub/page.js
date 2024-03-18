import Hero from '@/components/heroe/hero'
import styles from './page.module.css'
import Form from '@/components/customerClub/form/form'

export default function CustomerClub() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero - Props changeable */}
      <Hero
        subTitleClass={styles.SubTitleClass}
        title={'Bliv medlem af vores'}
        subTitle={'Kundeklub'}
        extraText={'og få ekslusive tilbud og nyheder før alle andre'}
        imagePath='/heros/medlem.jpg'
      />
      <Form />
    </main>
  )
}
