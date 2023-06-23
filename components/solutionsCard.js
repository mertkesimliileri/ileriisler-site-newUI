import React from 'react'
import Image from 'next/image'
import styles from "./solutionsCard.module.css"

const SolutionsCard = (props) => {
  return (
    <div className={styles.card}>
        <Image
          src={props.image}
          alt="card image"
          width={52}
          height={52}
          className={styles.chart}
        />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default SolutionsCard