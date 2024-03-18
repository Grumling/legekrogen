import styles from './form.module.css'

const Form = async () => {
  return (
    <form className={styles.formWrapper}>
      <input required type='text' placeholder='Fulde navn' />

      <input required type='email' placeholder='Email' />

      <textarea required placeholder='Hvem køber du legetøj til?' />

      <button type='submit'>Bliv medlem nu!</button>
    </form>
  )
}

export default Form
