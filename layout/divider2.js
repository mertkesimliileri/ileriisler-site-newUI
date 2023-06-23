import React from 'react'
import styles from "./divider2.module.css"
import Button from '@/components/button'
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Divider2 = () => {

  const [dividerData, setDivider] = useState(null);

  useEffect(() => {
      sanityClient.fetch(`*[_type == "divider2"]{
      title,
      text,
      buttonText
      }`)
          .then((data) => setDivider(data))
          .catch(console.error);
  }, [])

  return (
    <div>
       {dividerData && dividerData.map((post, index) => 
        <div className={styles.divider} key={index}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.text}>{post.text}</p>
          <Link href="/contact"><Button buttonType={3}>{post.buttonText}</Button></Link>
        </div>
        )}
    </div>
  )
}

export default Divider2