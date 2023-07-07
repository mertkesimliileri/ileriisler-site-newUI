import React from 'react'
import styles from "./contactForm.module.css"
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { useState } from 'react'

const ContactForm = () => {

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
            <form className={styles.form}>
                <div>
                    <label htmlFor="fname">{t.formFname}</label>
                    <input className={styles.input} type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label htmlFor="lname">{t.formLname}</label>
                    <input className={styles.input} type="text" id="lname" name="lname" />
                </div>
                <div>
                    <label htmlFor="cname">{t.formCompany3}</label>
                    <input className={styles.input} type="text" id="cname" name="cname" />
                </div>
                {showForm ?
                    <>
                        <div>
                            <label htmlFor="bmail">{t.formBusinessMail}</label>
                            <input className={styles.input} type="email" id="bmail" name="bmail" />
                        </div>
                        <div>
                            <label htmlFor="jtitle">{t.formTitle2}</label>
                            <input className={styles.input} type="text" id="jtitle" name="jtitle" />
                        </div>
                        <div>
                            <label htmlFor="country">{t.formCountry}</label>
                            <input className={styles.input} type="text" id="country" name="country" />
                        </div>
                        <div>
                            <input className={styles.button} type="submit" value={t.formSubmit} />
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