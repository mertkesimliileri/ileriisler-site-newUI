import React from 'react'
import styles from "./banner.module.css"
import Button from '@/components/button'
import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
import Image from 'next/image';
import bannerImg from "../public/bannerImg.png"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapperText}>
        <p className={styles.subHeader}>Create an abstraction</p>
        <h2 className={styles.header}>There is no limit</h2>
        <h1 className={styles.headerBld}>Creative Media</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, tus venenatis, </p>
        <Button buttonType={1}>Start explore <HiOutlineChevronRight className={styles.icon} /></Button>
      </div>
      <div className={styles.wrapperImg}>
        <Image
          src={bannerImg}
          alt="banner image"
          width={520}
          height={424}
        />
      </div>
    </div>
  )
}

export default Banner