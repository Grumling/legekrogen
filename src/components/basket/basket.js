import { useBasket } from '@/context/basket'
import styles from './basket.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Basket = () => {
  const { basket, name, removeFromBasket, addMoreToBasket } = useBasket()
  const [basktItems, setBasketItems] = useState([])

  const totalPrice = basktItems.reduce((total, basketItem) => {
    return total + basketItem.price * basketItem.amount
  }, 0)

  useEffect(() => {
    const getProductByRange = async () => {
      // Finder alle id´er.
      let idRange = basket.map((item) => item.id)

      console.log('ID Range', basket, idRange)

      if (idRange.length > 0) {
        let products = await fetch('api/products?range=' + idRange)
        products = await products.json()

        products.map((product) => {
          console.log('PRODUCT', product)
          let basketAmount = basket.find((item) => item.id === product._id)

          if (basketAmount) {
            product.amount = basketAmount.amount
          }
        })

        setBasketItems(products)
      } else {
        setBasketItems([]) //DET HER FJERNEDE LAST DELETD BASKET ITEM?
      }
    }

    getProductByRange()
  }, [basket])

  return (
    <div className={styles.container}>
      {basket.length === 0 ? <h2>Der er ingen varer i kurven.</h2> : null}
      {basktItems.map((basketItem) => {
        return (
          <div className={styles.basketItemWrapper} key={basketItem._id}>
            <div className={styles.productBasketInfo}>
              {basketItem.title}
              <br />
              <div>Stk. [{basketItem.amount}]</div>
              {''}{' '}
              <div className={styles.basketButtonWrapper}>
                <button
                  className={styles.buttonRemoveAdd}
                  onClick={(event) => {
                    event.stopPropagation()
                    removeFromBasket(basketItem._id)
                  }}
                >
                  -
                </button>
                <button
                  className={styles.buttonRemoveAdd}
                  onClick={(event) => {
                    event.stopPropagation()
                    addMoreToBasket(basketItem._id)
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.productPrice}>{basketItem.price} Kr.</div>
            <Image
              className={styles.productImage}
              src={basketItem.image}
              alt={basketItem.title}
              width={80}
              height={70}
            />
          </div>
        )
      })}
      {totalPrice > 0 && (
        <div className={styles.totalPrice}>
          I alt <u>{totalPrice} Kr</u>
        </div>
      )}
    </div>
  )
}
export default Basket
