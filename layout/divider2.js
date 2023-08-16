import React from 'react'
import styles from "./divider2.module.css"
import Button from '@/components/button'
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import useCamelize from '@/hooks/useCamelize'

const Divider2 = () => {

  const [dividerData, setDivider] = useState(null);

  const router = useRouter();
  const {locale} = router;

  useEffect(() => {
      sanityClient.fetch(`*[_type == "divider2"]{
        "title" : title.${locale},
        "text" : text.${locale},
        "buttonText" : buttonText.${locale},
        "navButton": navButton[]->{
          ...
          pageName,
          _id
      }
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
          <Link href={"/pages/" + useCamelize(post.navButton[0][locale])}><Button buttonType={3}>{post.buttonText}</Button></Link>
        </div>
        )}
    </div>
  )
}

export default Divider2