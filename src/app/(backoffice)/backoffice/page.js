'use client'
import { orders, products } from '@/lib/db/seed/seedfile.mjs'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Backoffice() {
  const [subscribers, setSubscribers] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('/api/subscribers')
      .then((response) => response.json())
      .then((data) => setSubscribers(data))
  }, [])

  useEffect(() => {
    fetch('/api/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
  }, [])

  return (
    <main className={styles.pageWrapper}>
      <h2 className={styles.tableTitle}>Subscribers</h2>
      {subscribers.map((subscriber) => (
        <table key={subscriber.id}>
          <tr className={styles.table}>
            <td className={styles.name}>{subscriber.name}</td>
            <td className={styles.email}>{subscriber.email}</td>
            <td className={styles.message}>{subscriber.message}</td>
            <td className={styles.subscriber}>{subscriber.created}</td>
          </tr>
        </table>
      ))}
      <h2 className={styles.title}>Reviews</h2>
      {reviews.map((reviews) => (
        <table key={reviews.id}>
          <tr className={styles.table}>
            <td className={styles.name}>{reviews.name}</td>
            <th>
              <td className={styles.description}>{reviews.description}</td>
            </th>
          </tr>
        </table>
      ))}
      {/* <h2 className={styles.title}>Products</h2>
      {products.map((products) => (
        <table key={products.id}>
          <tr className={styles.table}>
            <td className={styles.name}>{products.title}</td>
            <td className={styles.email}>{products.image}</td>
            <td className={styles.description}>{products.price}kr</td>
            <td className={styles.description}>
              {products.discountInPercent}%
            </td>
            <td className={styles.description}>{products.recommended}</td>
            <td className={styles.description}>{products.created}</td>
          </tr>
        </table>
      ))} */}
      {/*    <h2 className={styles.title}>Orders</h2>
      {orders.map((orders) => (
        <table key={orders.id}>
          <tr className={styles.table}>
            <td className={styles.name}>{orders.email}</td>
            {orders.products.map((product, index) => (
              <div key={index}>{product.name}</div>
            ))}
          </tr>
        </table>
      ))} */}
    </main>
  )
}
