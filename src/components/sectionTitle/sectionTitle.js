import styles from './sectionTitle.module.css'

const SectionTitle = ({ title, subTitle, color, background }) => {
  return (
    <div
      className={styles.sectionTitlewrapper}
      style={{ backgroundColor: background }}
    >
      <div className={styles.sectionPlacer}>
        <h2 className={styles.sectionTitle} style={{ color: color }}>
          {title}
        </h2>
        <p className={styles.sectionsubTitle} style={{ color: color }}>
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default SectionTitle
