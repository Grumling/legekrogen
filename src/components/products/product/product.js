import Image from 'next/image'
import styles from './product.module.css'
import { useEffect, useState } from 'react'
import { useBasket } from '@/context/basket'

const Discount = ({ discountInPercent, price }) => {
  if (discountInPercent === 0) return null

  return (
    <div>
      <div>Sparet: {(price * discountInPercent) / 100} Kr.</div>
    </div>
  )
}

const Product = ({ filterFunc = () => true }) => {
  const [products, setProducts] = useState([])
  const { basket, setBasket, addToBasket } = useBasket() // Use basket from context

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

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
                <div className={styles.cardPrice}>
                  {product.discountInPercent > 0 ? (
                    <>
                      <span
                        style={{
                          textDecoration: 'line-through',
                          color: 'rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        {product.price} Kr.
                      </span>
                      <span>
                        {' '}
                        {product.price -
                          (product.price * product.discountInPercent) /
                            100}{' '}
                        Kr.
                      </span>
                    </>
                  ) : (
                    `${product.price} Kr.`
                  )}
                </div>
                <Discount
                  discountInPercent={product.discountInPercent}
                  price={product.price}
                />
                <div className={styles.cardButton}>
                  <button
                    className={styles.cardButton}
                    onClick={() => addToBasket(product._id)}
                  >
                    Køb
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
