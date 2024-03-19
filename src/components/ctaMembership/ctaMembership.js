import Button from '../button/button'
import styles from './ctaMembership.module.css'

const CtaMembership = () => {
  return (
    <div className={styles.ctaMembershipWrapper}>
      <p>Kunne du også tænke dig at blive medlem af vores</p>
      <h2>Kundeklub?</h2>
      <div className={styles.buttonPlacement}>
        <Button buttonText='Bliv medlem nu!' buttonLink='CustomerClub' />
      </div>
    </div>
  )
}

export default CtaMembership
