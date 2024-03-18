'use client'
import styles from './footer.module.css'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={styles.footerwrapper}>
      <div className={styles.footerTop}>
        <p>Kunne du også tænke dig at blive medlem af vores</p>
        <h2>Kundeklub?</h2>
        <div className={styles.footerButton} type='submit'>
          Bliv medlem nu!
        </div>
      </div>
      <div className={styles.footerBottom}>
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
        <div className={styles.footerBottomSoMeIcons}>
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default Footer
