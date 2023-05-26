import React from 'react'
import styles from "./brands.module.css"
import Image from 'next/image';
import bbc from "../public/bbc.png"
import unilever from "../public/unilever.png"
import deloitte from "../public/deloitte.png"

const Brands = () => {
  return (
    <div className={styles.brands}>
        <Image
          src={bbc}
          alt="bbc"
          width={112}
          height={32}
        />
         <Image
          src={bbc}
          alt="bbc"
          width={112}
          height={32}
        />
         <Image
          src={deloitte}
          alt="deloitte"
          width={147}
          height={32}
        />
         <Image
          src={unilever}
          alt="unilever"
          width={149}
          height={32}
        />
         <Image
          src={deloitte}
          alt="deloitte"
          width={147}
          height={32}
        />
    </div>
  )
}

export default Brands