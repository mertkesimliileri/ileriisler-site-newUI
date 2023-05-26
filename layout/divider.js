import React from 'react'
import styles from "./divider.module.css"
import Button from '@/components/button'

const Divider = () => {
    return (
        <div className={styles.divider}>
            <div className={styles.textWrapper}>
                <h1 className={styles.header}>How it works</h1>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum has been the industry's standard 
                </p>
            </div>
            <div>
                <Button buttonType={3}>Discover more</Button>
            </div>
        </div>
    )
}

export default Divider