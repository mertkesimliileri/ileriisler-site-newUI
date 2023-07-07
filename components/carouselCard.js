import React from 'react'
import styles from "./carouselCard.module.css"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const CarouselCard = (props) => {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const windowSize = window.innerWidth;
    if (windowSize < 576) {
      setMobile(true);
      console.log(props.imageSrc)
    }
  }, [])

  return (
    <div className={styles.card}>
        {mobile ? 
          <Image
          src={props.imageSrc}
          alt="card image"
          width={42}
          height={42}
          className={styles.icon}
        /> : undefined
        }
        <h2 className={styles.title}>{props.title}</h2>
        {mobile ? undefined :
          <p className={styles.text}>{props.text}</p>
        }
    </div>
  )
}

export default CarouselCard