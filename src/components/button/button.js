import styles from './button.module.css'

const Button = ({ buttonText, buttonClass, buttonLink }) => {
  return (
    <button className={`${styles.buttonWrapper} ${buttonClass}`} type='submit'>
      <a href={buttonLink}>{buttonText}</a>
    </button>
  )
}

export default Button
