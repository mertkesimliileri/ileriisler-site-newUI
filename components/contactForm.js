import React from 'react'
import styles from "./contactForm.module.css"

const ContactForm = () => {
  return (
    <div>
        <form className={styles.form}>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input className={styles.input} type="text" id="fname" name="fname" />
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input className={styles.input} type="text" id="lname" name="lname" />
                </div>
                <div>
                    <label htmlFor="cname">Company Name</label>
                    <input className={styles.input} type="text" id="cname" name="cname" />
                </div>
                <div>
                    <label htmlFor="bmail">Business Mail</label>
                    <input className={styles.input} type="email" id="bmail" name="bmail" />
                </div>
                <div>
                    <label htmlFor="jtitle">Job Title</label>
                    <input className={styles.input} type="text" id="jtitle" name="jtitle" />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input className={styles.input} type="text" id="country" name="country" />
                </div>
                <div>
                    <input className={styles.button} type="submit" value="Submit" />
                </div>
            </form>
    </div>
  )
}

export default ContactForm