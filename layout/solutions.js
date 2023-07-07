import SolutionsCard from '@/components/solutionsCard'
import React from 'react'
import styles from "./solutions.module.css"
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router';
import en from '../locales/en'
import tr from '../locales/tr'

const Solutions = () => {

    const [cardData, setCard] = useState(null);
    const builder = imageUrlBuilder(sanityClient)
    const [cardsShow, setCardsShow] = useState(false);
    const [displayButton, setDisplayButton] = useState(true);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;

    useEffect(() => {
        const windowSize = window.innerWidth;
        if (windowSize < 576) {
            setDisplayButton(false);
            setCardsShow(true);
        }
    }, [])

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "homeCards"]{
        card,
        "title" : title.${locale},
        image
        }`)
            .then((data) => setCard(data))
            .catch(console.error);
    }, [])

    const handleShow = () => {
        setCardsShow(!cardsShow);
    }

    return (
        <div className={styles.solutions}>
            {cardData && cardData.map((post, index) =>
                <h1 key={index} className={styles.header}>{post.title}</h1>
            )
            }
            <div className={styles.cardWrapper}>
                {cardsShow == false ? cardData && cardData[0].card.slice(0, 3).map((post, index) =>
                    <SolutionsCard key={index} title={post.title[locale]} text={post.text[locale]} image={urlFor(post.image.asset._ref).url()} />
                ) :
                    cardData && cardData[0].card.map((post, index) =>
                        <SolutionsCard key={index} title={post.title[locale]} text={post.text[locale]} image={urlFor(post.image.asset._ref).url()} />
                    )
                }
            </div>
            {displayButton ?
                <p onClick={handleShow} className={styles.show}>{cardsShow ? t.showLess : t.showMore}</p>
                : undefined
            }
        </div>
    )
}

export default Solutions