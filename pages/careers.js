import React from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'
import Button from '@/components/button'
import Footer from '@/layout/footer'
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import Header from '@/layout/header'
import styles from "./careers.module.css"
import Link from 'next/link'
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import SolutionsCard from '@/components/solutionsCard'
import Form from "@/components/form";

const Careers = () => {

    const [careersData, setCareers] = useState(null);
    const [cardData, setCard] = useState(null);
    const [showSection, setShowSection] = useState(true);
    const builder = imageUrlBuilder(sanityClient)
    const [active, setActive] = useState("all");
    const [show, setShow] = useState(null);
    const [open, setOpen] = useState(false);

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "careers"]{
      banner,
      content,
      cardsTitle,
      cardsText,
      buttonText,
      contentButton,
      text,
      positions,
      secondText,
      secondTitle
      }`)
            .then((data) => setCareers(data))
            .catch(console.error);
        sanityClient.fetch(`*[_type == "homeCards"]{
                card,
                title,
                image
                }`)
            .then((data) => setCard(data))
            .catch(console.error);
    }, [])

    const showPositions = () => {
        setShowSection(false);
    }

    return (
        <div>
            <Header buttonType={5} navType={2} />
            {careersData && careersData.map((post, index) =>
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={urlFor(post.banner.asset._ref).url()}
                        alt="banner"
                        width={1441}
                        height={400}
                        sizes="100vw"
                        style={{ width: '100%', height: '400px', position: "absolute" }}
                    />
                </div>
            )}
            <h1 className={styles.title}>Careers</h1>
            {showSection ?
                <>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className={styles.content}>
                            <div className={styles.sections}>
                                <Link className={styles.first} href="/whatWeDo"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />What we do</Link>
                                <Link className={styles.second} href="/insights">Insights <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                            </div>
                            <div className={styles.contentWrapper}>
                                {careersData && careersData.map((post, index) =>
                                    <SanityBlockContent key={index} blocks={post.content} />
                                )}
                            </div>
                            {careersData && careersData.map((post, index) =>
                                <Button onClick={showPositions} buttonType={8} key={index}>{post.contentButton}</Button>
                            )}
                        </div>
                    </div>
                    <div className={styles.cardText}>
                        {careersData && careersData.map((post, index) =>
                            <div key={index}>
                                <h1>{post.cardsTitle}</h1>
                                <p>{post.cardsText}</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.cardSection}>
                        <div className={styles.cardWrapper}>
                            {cardData && cardData[0].card.map((post, index) =>
                                <SolutionsCard key={index} title={post.title} text={post.text} image={urlFor(post.image.asset._ref).url()} />
                            )
                            }
                        </div>
                    </div> </> :
                <div className={styles.positionsWrapper}>
                    <div className={styles.sections}>
                        <Link className={styles.first} href="/whatWeDo"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />What we do</Link>
                        <Link className={styles.second} href="/insights">Insights <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                    </div>
                    <h1>Açık Pozisyonlar</h1>
                    <div className={styles.categories}>
                        <button onClick={() => setActive("all")} className={active == "all" ? "active" : "tab"}>All</button>
                        <button onClick={() => setActive("software")} className={active == "software" ? "active" : "tab"}>Yazılım</button>
                        <button onClick={() => setActive("management")} className={active == "management" ? "active" : "tab"}>Yönetim</button>
                    </div>
                    {careersData && careersData[0].positions.filter(pos => pos.category === active).map((post, index) =>
                        <div className={styles.positionWrapper}>
                            <div className={styles.position}>
                                <div className={styles.post}>
                                    <p>{post.title}</p>
                                    <button>Remote</button>
                                </div>
                                <FiChevronDown />
                            </div>
                        </div>
                    )}
                    {active === "all" && careersData && careersData[0].positions.map((post, index) =>
                        <div key={index} onClick={() => { setShow(index); setOpen(!open) }} style={show === index && open ? { paddingBottom: "40px" } : { paddingBottom: "0" }} className={styles.positionWrapper}>
                            <div className={styles.position}>
                                <div className={styles.post}>
                                    <p>{post.title}</p>
                                    <button>Remote</button>
                                </div>
                                <FiChevronDown />
                            </div>
                            <div style={show === index && open ? { display: "block" } : { display: "none" }} className={styles.details}>
                                <SanityBlockContent blocks={post.details} />
                                <div className={styles.buttonWrapper}>
                                    <button>Apply</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
            {showSection ?
                <>
                    {careersData && careersData.map((post, index) =>
                        <div key={index} className={styles.divider}>
                            <h1 className={styles.dividerText}>{post.text}</h1>
                            <Button onClick={showPositions} style={{ width: "249px" }} buttonType={7}>{post.buttonText}</Button>
                        </div>
                    )}
                </> :
                <>
                    {careersData && careersData.map((post, index) =>

                        <div key={index} className={styles.secondDivider}>
                            <div>
                                <h1 className={styles.dividerText}>{post.secondTitle}</h1>
                                <p>{post.secondText}</p>
                            </div>
                        </div>
                    )}
                    <Form />
                </>}
            <Footer background={true} hideColumns={true} />
        </div>
    )
}

export default Careers