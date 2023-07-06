import React from 'react'
import styles from "./contactUsForm.module.css"
import { useState } from 'react'
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'

const ContactUsFrom = () => {

  const [charCount, setCharCount] = useState(0);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.row}>
          <div>
            <label htmlFor="fname">{t.formFname}</label>
            <input className={styles.input} type="text" id="fname" name="fname" />
          </div>
          <div>
            <label htmlFor="lname">{t.formLname}</label>
            <input className={styles.input} type="text" id="lname" name="lname" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="email">{t.formMail}</label>
            <input className={styles.input} type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">{t.formPhone}</label>
            <input className={styles.input} type="phone" id="phone" name="phone" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="title">{t.formTitle}</label>
            <input className={styles.input} type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="company">{t.formCompany}</label>
            <input className={styles.input} type="text" id="company" name="company" />
          </div>
        </div>
        <div className={styles.trow}>
          <textarea placeholder={t.formMessage} maxLength={500} onChange={(e) => setCharCount(e.target.value.length)} className={styles.textarea}></textarea>
          <p>{charCount}/500</p>
        </div>
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

export default ContactUsFrom