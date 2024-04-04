'use client'
import styles from './footer.module.css'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={styles.footerwrapper}>
      <div className={styles.footer}>
        <h3>Kundeservice</h3>
        {/* Mail Info */}
        <div className={styles.footerEmail}>
          <FaEnvelope />
          <p>kontakt@legehjørnet.dk</p>
        </div>
        {/* Phone Info */}
        <div className={styles.footerPhone}>
          <FaPhone />
          <p>+45 23 45 67 89</p>
        </div>
        {/* SoMe Info */}
        <p className={styles.footerSoMeText}>Følg os</p>
        <div className={styles.footerSoMeIcons}>
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default Footer
