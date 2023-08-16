import React from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'
import Button from '@/components/button'
import Footer from '@/layout/footer'
import sanityClient from "@/sanity/lib/sanityClient"
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
import { useRouter } from 'next/router'
import en from '@/locales/en'
import tr from '@/locales/tr'
import { useRef } from 'react';
import useCamelize from '@/hooks/useCamelize'

const Careers = (props) => {

    const [careersData, setCareers] = useState(null);
    const [showSection, setShowSection] = useState(true);
    const builder = imageUrlBuilder(sanityClient)
    const [active, setActive] = useState("all");
    const [show, setShow] = useState(null);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;
    const [showForm, setShowForm] = useState(false);
    const ref = useRef(null);
    const [role, setRole] = useState(null);

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "careers"]{
      banner,
      "content" : content.${locale},
      "cardsTitle" : cardsTitle.${locale},
      "cardsText" : cardsText.${locale},
      "buttonText" : buttonText.${locale},
      "contentButton" : contentButton.${locale},
      "text" : text.${locale},
      positions,
      "secondText" : secondText.${locale},
      "secondTitle" : secondTitle.${locale},
      card,
      _id,
      "pageName" : pageName.${locale},
      "pageNav": pageNav[]->{
        ...
        pageName,
      }
      }`)
            .then((data) => setCareers(data))
            .catch(console.error);
    }, [])

    const showPositions = () => {
        setShowSection(false);
        console.log(careersData);
    }

    const handleShowForm = () => {
        setShowForm(true);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 300)
    }

    const handleApply = () => {
        setShowForm(true);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 300)
    }

    if (careersData && careersData.some(arr => useCamelize(arr.pageName) === props.pageName)) {
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
                <h1 className={styles.title}>{t.nav4}</h1>
                {showSection ?
                    <>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className={styles.content}>
                                <div className={styles.sections}>
                                    {careersData[0].pageNav && careersData[0].pageNav.map((post, index) => {
                                        if (index === 0) {
                                            return <Link key={index} className={styles.first} href={"/pages/" + useCamelize(post[locale])}><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{post[locale]}</Link>
                                        }
                                        if (index > 0) {
                                            return <Link key={index} className={styles.second} href={"/pages/" + useCamelize(post[locale])}>{post[locale]} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                                        }
                                    })}
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
                                {careersData && careersData[0].card.map((post, index) =>
                                    <SolutionsCard key={index} title={post.title[locale]} text={post.text[locale]} image={urlFor(post.image.asset._ref).url()} />
                                )
                                }
                            </div>
                        </div> </> :
                    <div className={styles.positionsWrapper}>
                        <div className={styles.sections}>
                            <Link className={styles.first} href="/aboutUs"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{t.nav5}</Link>
                            <Link className={styles.second} href="/contact">{t.nav6} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                        </div>
                        <h1>{t.openings}</h1>
                        <div className={styles.categories}>
                            <button onClick={() => setActive("all")} className={active == "all" ? "active" : "tab"}>{t.all}</button>
                            <button onClick={() => setActive("software")} className={active == "software" ? "active" : "tab"}>{t.software}</button>
                            <button onClick={() => setActive("management")} className={active == "management" ? "active" : "tab"}>{t.management}</button>
                        </div>
                        {careersData && careersData[0].positions.filter(pos => pos.category === active).map((post, index) =>
                            <div key={index} onClick={() => { setShow(index); setOpen(!open) }} style={show === index && open ? { paddingBottom: "40px" } : { paddingBottom: "0" }} className={styles.positionWrapper}>
                                <div className={styles.position}>
                                    <div className={styles.post}>
                                        <p style={show === index && open ? { color: "#4A59D2" } : undefined}>{post.title[locale]}</p>
                                        <button style={show === index && open ? { background: "#4A59D2" } : undefined}>{t.remote}</button>
                                    </div>
                                    <FiChevronDown />
                                </div>
                                <div style={show === index && open ? { display: "block" } : { display: "none" }} className={styles.details}>
                                    <SanityBlockContent blocks={post.details[locale]} />
                                    <div className={styles.buttonWrapper}>
                                        <button onClick={() => { setRole(post.title[locale]); handleApply(); }}>{t.apply}</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {active === "all" && careersData && careersData[0].positions.map((post, index) =>
                            <div key={index} onClick={() => { setShow(index); setOpen(!open) }} style={show === index && open ? { paddingBottom: "40px" } : { paddingBottom: "0" }} className={styles.positionWrapper}>
                                <div className={styles.position}>
                                    <div className={styles.post}>
                                        <p style={show === index && open ? { color: "#4A59D2" } : undefined}>{post.title[locale]}</p>
                                        <button style={show === index && open ? { background: "#4A59D2" } : undefined}>{t.remote}</button>
                                    </div>
                                    <FiChevronDown />
                                </div>
                                <div style={show === index && open ? { display: "block" } : { display: "none" }} className={styles.details}>
                                    <SanityBlockContent blocks={post.details[locale]} />
                                    <div className={styles.buttonWrapper}>
                                        <button onClick={() => { setRole(post.title[locale]); handleApply(); }}>{t.apply}</button>
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
                                    <p style={{ paddingBottom: "36px" }}>{post.secondText}</p>
                                    <Button onClick={handleShowForm} buttonType={4}>{t.formHeader}</Button>
                                </div>
                            </div>
                        )}
                        {showForm ?
                            <div ref={ref}>
                                <Form appliedRole={role} />
                            </div>
                            : undefined
                        }
                    </>}
                <Footer background={true} hideColumns={true} />
            </div>
        )
    }
}

export default Careers