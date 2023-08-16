import React from 'react'
import Header from '@/layout/header'
import sanityClient from "@/sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import styles from "./pageType1.module.css"
import Link from 'next/link';
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import SanityBlockContent from '@sanity/block-content-to-react'
import Button from '@/components/button'
import Footer from '@/layout/footer'
import { useRouter } from 'next/router'
import en from '@/locales/en'
import tr from '@/locales/tr'
import useCamelize from '@/hooks/useCamelize'


const PageType1 = (props) => {

    const [pageData, setPageData] = useState(null);
    const builder = imageUrlBuilder(sanityClient)
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;
   

    function urlFor(source) {
        return builder.image(source)
    }
    
    useEffect(() => {
        sanityClient.fetch(`*[_type == "pageType1"]{
      banner,
      "pageName" : pageName.${locale},
      "content1" : content1.${locale},
      "content2" : content2.${locale},
      "text" : text.${locale},
      "buttonText" : buttonText.${locale},
      contentImage,
      video,
      _id,
      "navButton": navButton[]->{
        ...
        pageName,
        _id,
      },
      "pageNav": pageNav[]->{
        ...
        pageName,
        _id
      }
      }`)
            .then((data) => setPageData(data))
            .catch(console.error);
    }, []);

    if (pageData && pageData.some(arr => useCamelize(arr.pageName) === props.pageName)) {
        return (
            <div>
                {pageData && pageData.filter(arr => useCamelize(arr.pageName) === props.pageName).map((post, index) =>
                    <div key={index}>
                        <Header buttonType={5} navType={2} />
    
                        <div className={styles.imageWrapper}>
                            <Image
                                src={urlFor(post.banner.asset._ref).url()}
                                alt="banner"
                                width={1441}
                                height={400}
                                sizes="100vw"
                                style={{ width: '100%', position: "absolute" }}
                            />
                        </div>
                        <h1 className={styles.title}>{post.pageName}</h1>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className={styles.content}>
                                <div className={styles.sections}>
                                    {post.pageNav && post.pageNav.map((page, index) => {
                                        if(index === 0) {
                                           return  <Link key={index} className={styles.first} href={"/pages/" + useCamelize(page[locale])}><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{page[locale]}</Link> 
                                        }
                                        if(index > 0) {
                                            return <Link key={index} className={styles.second} href={"/pages/" + useCamelize(page[locale])}>{page[locale]} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                                        }
                                    })}
                                </div>
                                <div className={styles.contentWrapper}>
                                    <div>
                                        <SanityBlockContent blocks={post.content1} />
                                        <div className={styles.secondText}>
                                            <SanityBlockContent style={{ paddingTop: "24px" }} blocks={post.content2} />
                                        </div>
                                    </div>
                                </div>
                                <video loop muted playsInline className={styles.video} autoPlay src={post.video}></video>
                            </div>
                        </div>
                        <div className={styles.divider}>
                            <h1 className={styles.dividerText}>{post.text}</h1>
                            <Link href={"/pages/" + useCamelize(post.navButton[0][locale])}><Button buttonType={6}>{post.buttonText}</Button></Link>
                        </div>
                        <Footer hideColumns={true} />
                    </div>
                )}
            </div>
    
        );
    } 

}

export default PageType1;