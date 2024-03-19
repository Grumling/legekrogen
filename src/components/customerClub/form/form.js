'use client'
import Button from '@/components/button/button'
import styles from './form.module.css'
import { useState } from 'react'
import FormComplete from '../formComplete/formComplete'

const Form = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    fetch('http://localhost:3000/api/subscriber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      .then(() => {
        setSubmitted(true)
      })
  }

  return (
    <div className={styles.formWrapper}>
      {submitted ? (
        <FormComplete />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            required
            name='name'
            type='text'
            placeholder='Fulde navn'
          ></input>
          <input required name='email' type='email' placeholder='Email'></input>
          <textarea
            required
            name='message'
            type='textbox'
            placeholder='Hvem køber du legetøj til?'
          ></textarea>
          <Button
            buttonClass={styles.ColorChange}
            buttonText={'Bliv medlem nu!'}
          />
        </form>
      )}
    </div>
  )
}

export default Form
