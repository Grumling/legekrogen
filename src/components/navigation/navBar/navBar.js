'use client'
import Image from 'next/image'
import styles from './navBar.module.css'
import { FaBars, FaCircleXmark } from 'react-icons/fa6'
import { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle the toggling of the burger menu
  const handleToggle = () => {
    setIsToggled(!isToggled)
    setIsOpen(!isOpen)
  }

  // Function to handle the toggling of the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

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
          {/* Burger menu icons */}
          <div className={styles.burgerMenu} onClick={handleToggle}>
            {isToggled ? <FaCircleXmark /> : <FaBars />}
          </div>
        </div>

        {/* MENU */}
        <div
          className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}
          onClick={toggleDropdown}
        >
          <Link href='/'>Forside</Link>
          <Link href='/products'>Produkter</Link>
          <Link href='/faq'>FAQ</Link>
          <Link href='/CustomerClub'>Kundeklubben</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
