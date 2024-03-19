import Button from '@/components/button/button'
import styles from './formComplete.module.css'

const FormComplete = () => {
  console.log('FormComplete is being rendered')
  return (
    <div className={styles.formCompleteWrapper}>
      <div className={styles.overlay}></div>
      <h1>Tak!</h1>

      <p>Vi er så glade for at du vil være en del af vores kundeklub. </p>

      <p>
        Tag et kig i din indbakke. Vi har givet dig fri fragt på din første
        ordre.
      </p>

      <Button buttonText={'TIL FORSIDEN'} buttonLink={'/'} />
    </div>
  )
}

export default FormComplete
