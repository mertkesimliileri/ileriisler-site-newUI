import React from 'react'
import styles from  "./homeForm.module.css"

const HomeForm = (props) => {
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
            <input className={styles.input} style={{display: "none"}} value={props.firstValue} type="text" id="firstSelection" name="firstSelection" />
            <input className={styles.input} style={{display: "none"}} value={props.secondValue} type="text" id="secondSelection" name="secondSelection" />
          </div>
        </div>
        <div className={styles.buttonRow}>
          <input className={styles.button} type="submit" value="Send" />
        </div>
      </form>
    </div>
  )
}

export default HomeForm