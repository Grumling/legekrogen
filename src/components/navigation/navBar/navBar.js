'use client'
import Image from 'next/image'
import styles from './navBar.module.css'
import { FaBars, FaCircleXmark, FaCartShopping } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Basket from '@/components/basket/basket'

const NavBar = () => {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsToggled(!isToggled)
    setIsOpen(!isOpen)
    if (isOpenCart) {
      setIsOpenCart(false)
    }
  }

  const handleCartToggle = () => {
    setIsOpenCart(!isOpenCart)
    if (isOpen) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setIsOpen(false)
    setIsOpenCart(false)
    setIsToggled(false)
  }, [])

  return (
    <div className={styles.navBarwrapper}>
      <nav>
        <div className={styles.navItemsAlignment}>
          <Link href='/'>
            <figure>
              <Image
                className={styles.logo}
                src='/logo/legekrogen_logo.png'
                alt='logo'
                width={100}
                height={100}
              />
            </figure>
          </Link>
          <div className={styles.NavIcons}>
            <FaCartShopping onClick={handleCartToggle} />
            <div className={styles.burgerMenu} onClick={handleToggle}>
              {isToggled ? <FaCircleXmark /> : <FaBars />}
            </div>
          </div>
        </div>

        <div
          className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}
          onClick={handleToggle}
        >
          <Link href='/'>Forside</Link>
          <Link href='/products'>Produkter</Link>
          <Link href='/faq'>FAQ</Link>
          <Link href='/CustomerClub'>Kundeklubben</Link>
        </div>

        <div
          className={`${styles.dropdownCart} ${
            isOpenCart ? styles.dropdownCartOpen : ''
          }`}
          onClick={handleCartToggle}
        >
          <Basket />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
