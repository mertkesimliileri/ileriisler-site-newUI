import React from 'react'
import styles from "./carousel.module.css"
import CarouselCard from '@/components/carouselCard'
import 'react-alice-carousel/lib/alice-carousel.css';
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import { RiLightbulbLine } from "@react-icons/all-files/ri/RiLightbulbLine";
import { BiCube } from "@react-icons/all-files/bi/BiCube";
import HomeForm from '@/components/homeForm';

const Carousel = () => {

    const [carouselData, setCarousel] = useState(null);
    const [progress, setProgress] = useState("33.3%");
    const [step, setStep] = useState(1);
    const [firstOption, setFirstOption] = useState(null);
    const [secondOption, setSecondOption] = useState(null);


    let text;
    const project1 = "Yeni bir proje"
    const project2 = "Mevcut Proje"

    if (step === 1) {
        text = "Ready to make digital superpower?"
    } else if (step === 2) {
        text = "Is this a new project?"
    } else if (step === 3) {
        text = "İletişim bilgileriniz"
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "homeSlider"]{
        title,
        item
        }`)
            .then((data) => setCarousel(data))
            .catch(console.error);
    }, [])

    const handleFirstSelection = (title) => {
        setFirstOption(title);
        setProgress("66.6%");
        setStep(2);
    }

    const handleSecondSelection = (title) => {
        setSecondOption(title);
        setProgress("100%");
        setStep(3);
    }

    const Content = () => {
        if (step === 1) {
            return carouselData && carouselData[0].item.map((post, index) =>
                <button style={{ border: "none", background: "white" }} onClick={() => handleFirstSelection(post.title)} key={index}>
                    <CarouselCard title={post.title} text={post.text} />
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
                    <div style={{ width: progress }} className={styles.progress}></div>
                </div>
                <p className={styles.step}>Step {step} of 3</p>
            </div>
        </div>
    )
}

export default Carousel