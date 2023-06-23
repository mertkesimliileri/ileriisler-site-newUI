import React from 'react'
import styles from "./brands.module.css"
import Image from 'next/image';
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'

const Brands = () => {

  const [brandData, setBrand] = useState(null);
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    sanityClient.fetch(`*[_type == "homeBrands"]{
    brands
    }`)
      .then((data) => setBrand(data))
      .catch(console.error);
  }, [])

  return (
    <div className={styles.brands}>
      {brandData && brandData[0].brands.map((post, index) =>
        <Image
          src={urlFor(post.asset._ref).url()}
          alt={post.caption}
          width={130}
          height={32}
          key={post._key}
        />
      )}
    </div>
  )
}

export default Brands