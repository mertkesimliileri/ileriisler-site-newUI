import React from 'react'
import styles from "./form.module.css"
import { ImAttachment } from "@react-icons/all-files/im/ImAttachment";
import { useRef, useState } from 'react';
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'

const Form = () => {

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

    const handleFile = (e) => {
        setFileName(e.target.files[0].name);
    }

    return (
        <div className={styles.formWrapper}>
            <h1>{t.formHeader}</h1>
            <form className={styles.form}>
                <div>
                    <label htmlFor="cv">{t.formCv}</label>
                    <input ref={ref} onChange={handleFile} accept=".pdf" style={{ display: "none" }} type="file" id="cv" name="cv" />
                    <button onClick={handleClick}><ImAttachment style={{ color: "#FFF", marginRight: "12px" }} />{t.formAttach}</button>
                    <label style={{ color: "#9096AE" }}>{fileName}</label>
                </div>
                <div>
                    <label htmlFor="fname">{t.formFullName}</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label htmlFor="email">{t.formMail}</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">{t.formPhone2}</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div>
                    <label htmlFor="company">{t.formCompany2}</label>
                    <input type="text" id="company" name="company" />
                </div>
                <h2>{t.formLinks}</h2>
                <div>
                    <label htmlFor="linkedIn">{t.formLin}</label>
                    <input type="url" id="linkedIn" name="linkedIn" />
                </div>
                <div>
                    <label htmlFor="portfolio">{t.formPortfolio}</label>
                    <input type="url" id="portfolio" name="portfolio" />
                </div>
                <h2>{t.formAdditionalInfo}</h2>
                <div className={styles.trow}>
                    <textarea placeholder={t.formMessage} maxLength={500} onChange={(e) => setCharCount(e.target.value.length)} className={styles.textarea}></textarea>
                    <p>{charCount}/500</p>
                </div>
                <div style={{width: "60%", height:"1px", background: "#E9E9E9"}}></div>
                <div className={styles.checkbox}>
                    <input type="checkbox" id="confirm" name="confirm" value="confirm" />
                    <label htmlFor="confirm">{t.formCheckbox}</label>
                </div>
                <div className={styles.buttonRow}>
                    <input className={styles.button} type="submit" value={t.formSend} />
                </div>
            </form>
        </div>
    )
}

export default Form