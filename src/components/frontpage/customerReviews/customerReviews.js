import SectionTitle from '@/components/sectionTitle/sectionTitle'
import styles from './customerReviews.module.css'
import { useEffect, useState } from 'react'

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetch('/api/reviews')
      const data = await response.json()
      setReviews(data)
    }

    getReviews()
  }, [])

  return (
    <div className={styles.customerReviewsWrapper}>
      <SectionTitle
        title={'Vores kunder'}
        subTitle={'UDTALER'}
        color='var(--font-color-blue)'
      />

      {reviews.map((reviews, index) => (
        <div className={styles.customerReviewReviewer} key={index}>
          {/* Review description */}
          <p>{reviews.description}</p>
          {/* review name */}
          <h4 className={styles.customerReviewReviewerName}>{reviews.name}</h4>
        </div>
      ))}
    </div>
  )
}

export default CustomerReviews
