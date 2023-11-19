import React from 'react'
import styles from './page.module.css'
const loading = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default loading