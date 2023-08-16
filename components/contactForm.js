import React from 'react'
import styles from "./contactForm.module.css"
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { useState } from 'react'
import { sendContactForm } from "../lib/contactApi";

const ContactForm = () => {

    const initialValues = {
        fname: "",
        lname: "",
        email: "",
        title: "",
        company: "",
        country: "",
    }

    const initState = { values: initialValues }

    const [state, setState] = useState(initState);

    const { values } = state;
    const [validation, setValidation] = useState({
        fname: false,
        lname: false,
        email: false
    });
    const [displayRequired, setDisplayRequired] = useState(false);
   
    const handleChange = ({ target }) => {
        if (target.name === "fname" && target.value.length > 0) {
            validation.fname = true;
        } else if (target.name === "fname" && target.value.length == 0) {
            validation.fname = false;
        }
        if (target.name === "lname" && target.value.length > 0) {
            validation.lname = true;
        } else if (target.name === "lname" && target.value.length == 0) {
            validation.lname = false;
        }
        if (target.name === "email" && target.value.length > 0) {
            validation.email = true;
        } else if (target.name === "email" && target.value.length == 0) {
            validation.email = false;
        }
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            }
        }));
    }

    const onSubmit = async (e) => {
        setDisplayRequired(true);
        if (!validation.fname || !validation.lname || !validation.email) {
            e.preventDefault();
        }
        if (validation.email && validation.fname && validation.lname) {
            await sendContactForm(values);
        }
    }

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;
    const [iconDisplay, setIconDisplay] = useState("block");
    const [showForm, setShowForm] = useState(false);

    const handleIcon = () => {
        setIconDisplay("none");
        setShowForm(true);
    }

    return (
        <div>
            <form method="POST" className={styles.form}>
                <div>
                    <label htmlFor="fname">{t.formFname} {displayRequired && !validation.fname ? <span>*</span> : undefined}</label>
                    <input className={styles.input} value={values.fname} onChange={handleChange} type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label htmlFor="lname">{t.formLname} {displayRequired && !validation.lname ? <span>*</span> : undefined}</label>
                    <input className={styles.input} value={values.lname} onChange={handleChange} type="text" id="lname" name="lname" />
                </div>
                <div>
                    <label htmlFor="company">{t.formCompany3}</label>
                    <input className={styles.input} value={values.company} onChange={handleChange} type="text" id="company" name="company" />
                </div>
                {showForm ?
                    <>
                        <div>
                            <label htmlFor="email">{t.formBusinessMail} {displayRequired && !validation.email ? <span>*</span> : undefined}</label>
                            <input className={styles.input} value={values.email} onChange={handleChange} type="email" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="title">{t.formTitle2}</label>
                            <input className={styles.input} value={values.title} onChange={handleChange} type="text" id="title" name="title" />
                        </div>
                        <div>
                            <label htmlFor="country">{t.formCountry}</label>
                            <input className={styles.input} value={values.country} onChange={handleChange} type="text" id="country" name="country" />
                        </div>
                        <div>
                            <input disabled={!validation.fname || !validation.lname || !validation.email ? true : false} className={styles.button} onClick={(e)=> onSubmit(e)} type="submit" value={t.formSubmit} />
                        </div>
                    </>
                    : undefined
                }

            </form>
            <BsChevronDown style={{ display: iconDisplay }} onClick={handleIcon} className={styles.down} />
        </div>
    )
}

export default ContactForm