import styles from './navTop.module.css'
import { FaTruck } from 'react-icons/fa'

const NavTop = () => {
  return (
    <div className={styles.navTopwrapper}>
      <div>
        <FaTruck />
        <p>Fri fragt ved køb over 499,-</p>
      </div>
    </div>
  )
}

export default NavTop
