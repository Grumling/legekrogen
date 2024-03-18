'use client'
import { useEffect, useState } from 'react'
import styles from './accordion.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Accordion = () => {
  const [questions, setQuestions] = useState([])
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch('/api/questions')
      const data = await response.json()
      setQuestions(data)
    }

    getQuestions()
  }, [])

  return (
    <div>
      {questions.map((item, index) => (
        <div className={styles.AccordionccordionWrapper} key={index}>
          <div
            className={styles.accordionQuestion}
            onClick={() => setOpenIndex(index)}
          >
            {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}

            {item.question}
          </div>
          {openIndex === index && (
            <>
              <div className={styles.line}></div>
              <div
                className={`${styles.accordionAnswer} ${
                  openIndex === index ? styles.open : styles.closed
                }`}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
