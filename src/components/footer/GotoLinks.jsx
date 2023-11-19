import React from 'react'
import styles from './footer.module.scss'
const GotoLinks = ({first,second,third,fourth}) => {
  return (
    <>
        <div className={styles.wrapper}>
            <p>{first}</p>
            <p>{second}</p>
            <p>{third}</p>
            <p>{fourth}</p>
           
        </div>
    </>
  )
}

export default GotoLinks