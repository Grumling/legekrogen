import Image from 'next/image'
import styles from './hero.module.css'

const Hero = ({ title, subTitle, imagePath, extraText, subTitleClass }) => {
  return (
    <div className={styles.heroWrapper}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.heroFontsWrapper}>
        {/* pass prop for hero title */}
        <h2 className={styles.heroTitle}>{title}</h2>
        {/* pass prop for hero sub title */}
        <p className={`${styles.heroSubTitle} ${subTitleClass}`}>{subTitle}</p>
        <h3 className={styles.heroExtraText}>{extraText}</h3>
      </div>
      <Image
        className={styles.heroImage}
        /* pass prop for img path */
        src={imagePath}
        alt='hero'
        width={863}
        height={1300}
      />
    </div>
  )
}

export default Hero
