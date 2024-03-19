import Image from 'next/image'
import styles from './product.module.css'
import { useEffect, useState } from 'react'
import { useBasket } from '@/context/basket'

const Product = ({ filterFunc = () => true }) => {
  const [products, setProducts] = useState([])
  const { basket, setBasket } = useBasket() // Use basket from context

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product])
  }

  return (
    <div className={styles.productwrapper}>
      {/* CARD - Product */}
      <div className={styles.centerCards}>
        <div className={styles.cardWrapper}>
          {products.filter(filterFunc).map((product, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.ImageDisocuntContainer}>
                {product.discountInPercent > 0 && (
                  <div className={styles.discountTag}>
                    {product.discountInPercent}%
                  </div>
                )}
                {/* Card Image */}
                <Image
                  className={styles.productImage}
                  src={product.image}
                  alt='product'
                  width={320}
                  height={320}
                />
              </div>
              <div className={styles.cardInfo}>
                {/* Card - title and Price */}
                <div className={styles.cardTitle}>{product.title}</div>
                <div className={styles.cardPrice}>{product.price} Kr.</div>
                <button onClick={() => addToBasket(product)}>
                  Add to basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
