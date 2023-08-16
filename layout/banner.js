import React from 'react'
import styles from "./banner.module.css"
import Button from '@/components/button'
import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
import Image from 'next/image';
import sanityClient from "../sanity/lib/sanityClient"
import bannerImg from "../public/bannerImg.png"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import useCamelize from '@/hooks/useCamelize';

const Banner = () => {

  const [bannerData, setBanner] = useState(null);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    sanityClient.fetch(`*[_type == "homeBanner"]{
    "subTitle" : subTitle.${locale},
    "text" : text.${locale},
    "title" : title.${locale},
    "titleBold" : titleBold.${locale},
    "buttonText" : buttonText.${locale},
    "navButton": navButton[]->{
    ...
    pageName,
      _id
    }
    }`)
      .then((data) => setBanner(data))
      .catch(console.error);
  }, [])

  return (
    <div className={styles.banner}>
      <div className={styles.wrapperText}>
        {bannerData && bannerData.map((post, index) => <div className={styles.box} key={index}>
          <p className={styles.subHeader}>{post.subTitle}</p>
          <h1 className={styles.headerBld}>{post.title}</h1>
          <h1 className={styles.headerBld2}>{post.titleBold}</h1>
          <p className={styles.text}>{post.text}</p>
          <Link href={"/pages/" + useCamelize(post.navButton[0][locale])}>
            <Button buttonType={1}>{post.buttonText} <HiOutlineChevronRight className={styles.icon} /></Button>
          </Link>
        </div>
        )}
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