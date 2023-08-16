import React from 'react'
import styles from "./form.module.css"
import { ImAttachment } from "@react-icons/all-files/im/ImAttachment";
import { useRef, useState } from 'react';
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'
import { sendCareersForm } from "../lib/careersFormApi";

const Form = (props) => {

    const initialValues = {
        cv: "",
        fname: "",
        email: "",
        phone: "",
        title: "",
        company: "",
        linkedIn: "",
        portfolio: "",
        message: "",
        confirm: false,
        appliedRole: props.appliedRole
    }

    const initState = { values: initialValues }

    const [state, setState] = useState(initState);
    const [checkBox, setCheckBox] = useState(true);
    const [applied, setApplied] = useState(false);
    const [validation, setValidation] = useState({
        fname: false,
        phone: false,
        email: false,
        cv: false
    });
    const [displayRequired, setDisplayRequired] = useState(false);

    const { values } = state;

    const handleChange = ({ target, dataTransfer }) => {
        if (target.name === "message") {
            setCharCount(target.value.length);
        }
        if (target.name === "confirm") {
            setCheckBox(!checkBox);
        }
        if (target.name === "fname" && target.value.length > 0) {
            validation.fname = true;
        } else if (target.name === "fname" && target.value.length == 0) {
            validation.fname = false;
        }
        if (target.name === "phone" && target.value.length > 0) {
            validation.phone = true;
        } else if (target.name === "phone" && target.value.length == 0) {
            validation.phone = false;
        }
        if (target.name === "email" && target.value.length > 0) {
            validation.email = true;
        } else if (target.name === "email" && target.value.length == 0) {
            validation.email = false;
        }
        if (target.name === "cv" && target.files.length > 0) {
            validation.cv = true;
        } else if ((target.name === "cv" && target.files.length == 0)) {
            validation.cv = false;
        }
        if (target.name === "cv") {
            setFileName(target.files[0].name);
            const reader = new FileReader();
            reader.onload = function(){
                const dataURL = reader.result;
                setState((prev) => ({
                    ...prev,
                    values: {
                        ...prev.values,
                        [target.name]: dataURL,
                    }
                }));
            };
            reader.readAsDataURL(target.files[0]);
        } else {
            setState((prev) => ({
                ...prev,
                values: {
                    ...prev.values,
                    [target.name]: target.value,
                }
            }));
        }

    }

    const onSubmit = async (e) => {
        setDisplayRequired(true);
        if (!validation.fname || !validation.phone || !validation.email || !validation.cv) {
            e.preventDefault();
        }
        if (validation.email && validation.fname && validation.phone && validation.cv) {
            await sendCareersForm(values)
        } 
    }

    const ref = useRef(null);
    const [fileName, setFileName] = useState("");
    const [charCount, setCharCount] = useState(0);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;

    const handleClick = (e) => {
        e.preventDefault();
        ref.current.click();
    };

    return (
        <div className={styles.formWrapper}>
            <h1>{t.formHeader}</h1>
            <form method="POST" className={styles.form}>
                <div>
                    <label htmlFor="cv">{t.formCv} {displayRequired && !validation.cv ? <span>*</span> : undefined}</label>
                    <input ref={ref} onChange={handleChange} accept=".pdf" style={{ display: "none" }} type="file" id="cv" name="cv" />
                    <button onClick={handleClick}><ImAttachment style={{ color: "#FFF", marginRight: "12px" }} />{t.formAttach}</button>
                    <label style={{ color: "#9096AE" }}>{fileName}</label>
                </div>
                <div>
                    <label htmlFor="fname">{t.formFullName} {displayRequired && !validation.fname ? <span>*</span> : undefined}</label>
                    <input type="text" id="fname" value={values.fname} onChange={handleChange} name="fname" />
                </div>
                <div>
                    <label htmlFor="email">{t.formMail} {displayRequired && !validation.email ? <span>*</span> : undefined}</label>
                    <input type="email" id="email" value={values.email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="phone">{t.formPhone2} {displayRequired && !validation.phone ? <span>*</span> : undefined}</label>
                    <input type="tel" id="phone" value={values.phone} onChange={handleChange} name="phone" />
                </div>
                <div>
                    <label htmlFor="company">{t.formCompany2}</label>
                    <input type="text" id="company" value={values.company} onChange={handleChange} name="company" />
                </div>
                <h2>{t.formLinks}</h2>
                <div>
                    <label htmlFor="linkedIn">{t.formLin}</label>
                    <input type="text" id="linkedIn" value={values.linkedIn} onChange={handleChange} name="linkedIn" />
                </div>
                <div>
                    <label htmlFor="portfolio">{t.formPortfolio}</label>
                    <input type="text" id="portfolio" value={values.portfolio} onChange={handleChange} name="portfolio" />
                </div>
                <h2>{t.formAdditionalInfo}</h2>
                <div className={styles.trow}>
                    <textarea placeholder={t.formMessage} maxLength={500} name="message" onChange={handleChange} className={styles.textarea}></textarea>
                    <p>{charCount}/500</p>
                </div>
                <div style={{ width: "60%", height: "1px", background: "#E9E9E9" }}></div>
                <div className={styles.checkbox}>
                    <input type="checkbox" id="confirm" name="confirm" value={checkBox} onChange={handleChange} />
                    <label htmlFor="confirm">{t.formCheckbox}</label>
                </div>
                <div className={styles.buttonRow}>
                    <input disabled={!validation.fname || !validation.phone || !validation.email || !validation.cv ? true : false} onClick={onSubmit} className={styles.button} type="submit" value={t.formSend} />
                </div>
            </form>
        </div>
    )
}

export default Form