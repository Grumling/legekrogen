'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const BasketContext = createContext()

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

  useEffect(() => {
    const basket = localStorage.getItem('basket')
    if (basket) {
      setBasket(JSON.parse(basket))
    }
  }, [])

  // Add to basket
  const addToBasket = (id, amount = 1) => {
    let basket = localStorage.getItem('basket')
    if (basket) {
      basket = JSON.parse(basket)

      let itemInBasket = basket.find((item) => item.id === id)
      console.log(itemInBasket)

      if (itemInBasket) {
        let sum = parseInt(itemInBasket.amount) + parseInt(amount)

        itemInBasket.amount = sum
      } else {
        basket.push({
          id: id,
          amount: amount,
        })
      }
    } else {
      basket = []
      basket.push({
        id: id,
        amount: amount,
      })
    }

    localStorage.setItem('basket', JSON.stringify(basket))
    setBasket(basket)
  }

  // Remove from basket
  const removeFromBasket = (id) => {
    console.log(`Fjernede products ${id} fra basket`) // LOG!
    let basket = JSON.parse(localStorage.getItem('basket')) || []

    let itemInBasket = basket.find((item) => item.id === id)

    if (itemInBasket) {
      itemInBasket.amount -= 1

      if (itemInBasket.amount <= 0) {
        basket = basket.filter((item) => item.id !== id)
      }
    }

    localStorage.setItem('basket', JSON.stringify(basket))
    setBasket(basket)
  }

  const addMoreToBasket = (id) => {
    let newBasket = basket.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 }
      } else {
        return item
      }
    })

    localStorage.setItem('basket', JSON.stringify(newBasket))
    setBasket(newBasket)
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        setBasket,
        removeFromBasket,
        addMoreToBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => useContext(BasketContext)
