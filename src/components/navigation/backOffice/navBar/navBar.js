'use client'
import Link from 'next/link'
import styles from './navBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBarWrapper}>
      <nav>Backoffice - Navigation</nav>
      <div>
        <Link href='/backoffice'>orders</Link>
        <Link href='/backoffice'>products</Link>
        <Link href='/backoffice'>questions</Link>
        <Link href='/backoffice'>reviews</Link>
        <Link href='/backoffice'>subscribers</Link>
        <Link href='/backoffice'>users</Link>
      </div>
    </div>
  )
}

export default NavBar
