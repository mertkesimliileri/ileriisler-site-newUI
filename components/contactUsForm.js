import React from 'react'
import styles from "./contactUsForm.module.css"
import { useState } from 'react'

const ContactUsFrom = () => {

  const [charCount, setCharCount] = useState(0);

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.row}>
          <div>
            <label htmlFor="fname">First Name</label>
            <input className={styles.input} type="text" id="fname" name="fname" />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input className={styles.input} type="text" id="lname" name="lname" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone number (optional)</label>
            <input className={styles.input} type="phone" id="phone" name="phone" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="title">Title (optional)</label>
            <input className={styles.input} type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="company">Company (optional)</label>
            <input className={styles.input} type="text" id="company" name="company" />
          </div>
        </div>
        <div className={styles.trow}>
          <textarea placeholder='Message' maxLength={500} onChange={(e) => setCharCount(e.target.value.length)} className={styles.textarea}></textarea>
          <p>{charCount}/500</p>
        </div>
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

export default ContactUsFrom