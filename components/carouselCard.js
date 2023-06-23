import React from 'react'
import styles from "./carouselCard.module.css"
import { useState, useEffect } from 'react';

const CarouselCard = (props) => {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const windowSize = window.innerWidth;
    if (windowSize < 576) {
      setMobile(true);
    }
  }, [])

  return (
    <div className={styles.card}>
        <h2 className={styles.title}>{props.title}</h2>
        {mobile ? undefined :
          <p className={styles.text}>{props.text}</p>
        }
    </div>
  )
}

export default CarouselCard