import React from 'react'
import styles from "./divider2.module.css"
import Button from '@/components/button'

const Divider2 = () => {
  return (
    <div className={styles.divider}>
        <h1 className={styles.title}>Let’s Create Something Beautiful Together</h1>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the and typesettingindustry. Lorem Ipsum has been the induindustry.</p>
        <Button buttonType={3}>Contact us</Button>
    </div>
  )
}

export default Divider2