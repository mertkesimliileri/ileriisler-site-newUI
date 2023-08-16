import React from 'react'
import styles from "./joinUs.module.css"
import Image from 'next/image'
import Button from '@/components/button'
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useCamelize from '@/hooks/useCamelize'

const JoinUs = () => {

  const [joinData, setJoin] = useState(null);
  const builder = imageUrlBuilder(sanityClient)

  const router = useRouter();
  const {locale} = router;

  function urlFor(source) {
    return builder.image(source)
  }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "homeImage"]{
        "title" : title.${locale},
        "text" : text.${locale},
        "buttonText" : buttonText.${locale},
        image,
        "navButton": navButton[]->{
          ...
          pageName,
          _id
        }
        }`)
            .then((data) => setJoin(data))
            .catch(console.error);
    }, [])

  return (
    <div className={styles.join}>
        {joinData && joinData.map((post, index) => 
        <Image 
        src={urlFor(post.image.asset._ref).url()}
        alt="join us"
        width={646}
        height={418} 
        className={styles.image}
        key={index}
        />
        )}
        <div className={styles.box}></div>
        {joinData && joinData.map((post, index) => 
        <div key={index} className={styles.textWrapper}>
            <p className={styles.title}>{post.title}</p>
            <p className={styles.text}>{post.text}</p>
            <Link href={"/pages/" + useCamelize(post.navButton[0][locale])}>
              <Button buttonType={4}>{post.buttonText}</Button>
            </Link> 
        </div>
        )}
    </div>
  )
}

export default JoinUs