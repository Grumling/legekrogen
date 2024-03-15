import styles from './sectionTitle.module.css'

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.sectionTitlewrapper}>
      <div className={styles.sectionPlacer}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionsubTitle}>{subTitle}</p>
      </div>
    </div>
  )
}

export default SectionTitle
