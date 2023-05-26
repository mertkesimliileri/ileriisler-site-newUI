import React from 'react'
import styles from "./carouselCard.module.css"

const CarouselCard = (props) => {
  return (
    <div className={styles.card}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default CarouselCard