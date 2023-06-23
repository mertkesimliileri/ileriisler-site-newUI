import React from 'react'
import styles from "./form.module.css"
import { ImAttachment } from "@react-icons/all-files/im/ImAttachment";
import { useRef, useState } from 'react';

const Form = () => {

    const ref = useRef(null);
    const [fileName, setFileName] = useState("");
    const [charCount, setCharCount] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        ref.current.click();
    };

    const handleFile = (e) => {
        setFileName(e.target.files[0].name);
    }

    return (
        <div className={styles.formWrapper}>
            <h1>Contact Form</h1>
            <form className={styles.form}>
                <div>
                    <label htmlFor="cv">Resume/Cv</label>
                    <input ref={ref} onChange={handleFile} accept=".pdf" style={{ display: "none" }} type="file" id="cv" name="cv" />
                    <button onClick={handleClick}><ImAttachment style={{ color: "#FFF", marginRight: "12px" }} />ATTACH RESUME/ CV</button>
                    <label style={{ color: "#9096AE" }}>{fileName}</label>
                </div>
                <div>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div>
                    <label htmlFor="company">Current Company</label>
                    <input type="text" id="company" name="company" />
                </div>
                <h2>LINKS</h2>
                <div>
                    <label htmlFor="linkedIn">LinkedIn URL</label>
                    <input type="url" id="linkedIn" name="linkedIn" />
                </div>
                <div>
                    <label htmlFor="portfolio">Portfolio URL</label>
                    <input type="url" id="portfolio" name="portfolio" />
                </div>
                <h2>ADDITIONAL INFORMATION</h2>
                <div className={styles.trow}>
                    <textarea placeholder='Message' maxLength={500} onChange={(e) => setCharCount(e.target.value.length)} className={styles.textarea}></textarea>
                    <p>{charCount}/500</p>
                </div>
                <div style={{width: "60%", height:"1px", background: "#E9E9E9"}}></div>
                <div className={styles.checkbox}>
                    <input type="checkbox" id="confirm" name="confirm" value="confirm" />
                    <label htmlFor="confirm">Yes, İlerişler can contact me about future job opportunities for up to 2 years.</label>
                </div>
                <div className={styles.buttonRow}>
                    <input className={styles.button} type="submit" value="Send inquiry" />
                </div>
            </form>
        </div>
    )
}

export default Form