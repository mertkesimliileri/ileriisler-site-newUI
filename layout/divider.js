import React from 'react'
import styles from "./divider.module.css"
import Button from '@/components/button'
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Divider = () => {

    const [dividerData, setDivider] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "divider1"]{
        title,
        text,
        buttonText
        }`)
            .then((data) => setDivider(data))
            .catch(console.error);
    }, [])

    return (
        <div>
            {dividerData && dividerData.map((post, index) => <div className={styles.divider} key={index}>
            <div className={styles.textWrapper}>
                <h1 className={styles.header}>{post.title}</h1>
                <p className={styles.text}>{post.text}</p>
            </div>
            <div className={styles.button}>
                <Link href="/howWork"><Button buttonType={3}>{post.buttonText}</Button></Link>
            </div>
            </div>
              )}
        </div>
    )
}

export default Divider