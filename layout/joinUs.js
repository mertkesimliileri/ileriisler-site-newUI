import React from 'react'
import styles from "./joinUs.module.css"
import Image from 'next/image'
import joinImg from "../public/image 22.png"
import Button from '@/components/button'

const JoinUs = () => {
  return (
    <div className={styles.join}>
        <Image 
        src={joinImg}
        alt="join us"
        width={646}
        height={418} 
        className={styles.image}
        />
        <div className={styles.box}></div>
        <div className={styles.textWrapper}>
            <p className={styles.title}>Together we make extraordinary impact</p>
            <p className={styles.text}>Create an  abstraction Create an  abstraction Create an  abstraction Create an  abstraction Create an   Create an  </p>
            <Button buttonType={4}>Join us</Button>
        </div>
    </div>
  )
}

export default JoinUs