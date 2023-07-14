import React from 'react'
import styles from "./carousel.module.css"
import CarouselCard from '@/components/carouselCard'
import 'react-alice-carousel/lib/alice-carousel.css';
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import { RiLightbulbLine } from "@react-icons/all-files/ri/RiLightbulbLine";
import { BiCube } from "@react-icons/all-files/bi/BiCube";
import HomeForm from '@/components/homeForm';
import { BiChevronLeft } from "@react-icons/all-files/bi/BiChevronLeft"
import { useRouter } from 'next/router';
import en from '../locales/en'
import tr from '../locales/tr'
import imageUrlBuilder from '@sanity/image-url'

const Carousel = () => {

    const [carouselData, setCarousel] = useState(null);
    const [progress, setProgress] = useState(33.3);
    const [step, setStep] = useState(1);
    const [firstOption, setFirstOption] = useState(null);
    const [secondOption, setSecondOption] = useState(null);
    const router = useRouter();
    const {locale} = router;
    const builder = imageUrlBuilder(sanityClient)
    const t = locale === 'en' ? en : tr;

    let text;
    const project1 = t.project1
    const project2 = t.project2

    if (step === 1) {
        text = t.homeFormTitle1;
    } else if (step === 2) {
        text = t.homeFormTitle2;
    } else if (step === 3) {
        text = t.homeFormTitle3;
    }

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "homeSlider"]{
        "title" : title.${locale},
        item
        }`)
            .then((data) => setCarousel(data))
            .catch(console.error);
    }, [])

    const handleFirstSelection = (title) => {
        setFirstOption(title.en);
        setProgress(66.6);
        setStep(2);
    }

    const handleSecondSelection = (title) => {
        setSecondOption(title);
        setProgress(100);
        setStep(3);
    }

    const handleBack = () => {
        setStep(step - 1);
        setProgress(progress - 33.3)
    }

    const Content = () => {
        if (step === 1) {
            return carouselData && carouselData[0].item.map((post, index) =>
                <button className={styles.cardWrapper} style={{ border: "none", background: "white" }} onClick={() => handleFirstSelection(post.title)} key={index}>
                    <CarouselCard title={post.title[locale]} imageSrc={urlFor(post.mobileImage.asset._ref).url()} text={post.text[locale]} />
                </button>
            )
        } else if (step === 2) {
            return <>
                <div onClick={() => handleSecondSelection(project1)} className={styles.card}>
                    <div>
                        <RiLightbulbLine />
                        <p>{project1}</p>
                    </div>

                </div>
                <div onClick={() => handleSecondSelection(project2)} className={styles.card}>
                    <div>
                        <BiCube />
                        <p>{project2}</p>
                    </div>
                </div>
            </>
        } else if (step === 3) {
            return <HomeForm firstValue={firstOption} secondValue={secondOption} />
        }
    }

    return (
        <div className={styles.carousel}>
            <h1 className={styles.header}>{text}</h1>
            <div className={styles.box}>
                <div className={styles.wrapper}>
                    <Content />
                </div>
                <div className={styles.bar}>
                    <div style={{ width: progress + "%" }} className={styles.progress}></div>
                </div>
                {locale === "en" ?
                    <p className={styles.step}>{step != 1 ? <BiChevronLeft onClick={handleBack} className={styles.backIcon} /> : undefined } Step {step} of 3</p> 
                    :
                    <p className={styles.step}>{step != 1 ? <BiChevronLeft onClick={handleBack} className={styles.backIcon} /> : undefined } {step}/3 Aşama</p>
                }
                
            </div>
        </div>
    )
}

export default Carousel