import React from 'react'
import styles from "./contactUsForm.module.css"
import { useState } from 'react'
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'
import { sendContactUsForm } from "../lib/contactUsApi";

const ContactUsFrom = () => {

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    title: "",
    company: "",
    message: "",
    confirm: false
  }

  const initState = {values: initialValues }

  const [state, setState] = useState(initState);
  const [checkBox, setCheckBox] = useState(true);
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [validation, setValidation] = useState({
    fname: false,
    lname: false,
    email: false
  });
  const [displayRequired, setDisplayRequired] = useState(false);

  const { values } = state;

  const handleChange = ({target}) => {
    if(target.name === "message") {
      setCharCount(target.value.length);
    }
    if(target.name === "confirm") {
      setCheckBox(!checkBox);
    }
    if(target.name === "fname" && target.value.length > 0) {
      validation.fname = true;
    } else if(target.name === "fname" && target.value.length == 0) {
      validation.fname = false;
    }
    if(target.name === "lname" && target.value.length > 0) {
      validation.lname = true;
    } else if(target.name === "lname" && target.value.length == 0) {
      validation.lname = false;
    }
    if(target.name === "email" && target.value.length > 0) {
      validation.email = true;
    } else if(target.name === "email" && target.value.length == 0) {
      validation.email = false;
    }
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name] : target.value,
      }
    }));
  } 

  const onSubmit = async (e) => {
    setDisplayRequired(true);
    e.preventDefault();
    if(!validation.fname || !validation.lname || !validation.email) {
      e.preventDefault();
    }
    if (validation.email && validation.fname && validation.lname) {
      await sendContactUsForm(values).then((res) => {
        if(res.success) {
          setMessage(t.formSuccess);
          setShowSuccess(true)
        } else {
          setMessage(t.formError);
          setShowSuccess(true);
        }
      });
    }
  }

  const [charCount, setCharCount] = useState(0);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : tr;

  return (
    <div>
      <form method="POST" className={styles.form}>
        <div className={styles.row}>
          <div>
            <label htmlFor="fname">{t.formFname} {displayRequired && !validation.fname ? <span>*</span> : undefined} </label>
            <input className={styles.input} type="text" value={values.fname} onChange={handleChange} id="fname" name="fname" />
          </div>
          <div>
            <label htmlFor="lname">{t.formLname} {displayRequired && !validation.lname ? <span>*</span> : undefined}</label>
            <input className={styles.input} type="text" value={values.lname} onChange={handleChange} id="lname" name="lname" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="email">{t.formMail} {displayRequired && !validation.email ? <span>*</span> : undefined}</label>
            <input className={styles.input} type="email" value={values.email} onChange={handleChange} id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">{t.formPhone}</label>
            <input className={styles.input} type="phone" value={values.phone} onChange={handleChange} id="phone" name="phone" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="title">{t.formTitle}</label>
            <input className={styles.input} type="text" value={values.title} onChange={handleChange} id="title" name="title" />
          </div>
          <div>
            <label htmlFor="company">{t.formCompany}</label>
            <input className={styles.input} type="text" value={values.company} onChange={handleChange} id="company" name="company" />
          </div>
        </div>
        <div className={styles.trow}>
          <textarea placeholder={t.formMessage} maxLength={500} name="message" onChange={handleChange} className={styles.textarea}></textarea>
          <p>{charCount}/500</p>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="confirm" name="confirm" value={checkBox} onChange={handleChange} />
          <label htmlFor="confirm">{t.formCheckbox}</label>
        </div>
        {showError && 
          <p style={{color:'#C20713'}}>{message}</p>
        }
        {showSuccess && 
          <p style={{color:'#6CBA9F'}}>{message}</p>
        }
        <div className={styles.buttonRow}>
          <input disabled={!validation.fname || !validation.lname || !validation.email ? true : false} className={styles.button} onClick={(e)=> onSubmit(e)} type="submit" value={t.formSend} />
        </div>
      </form>
    </div>
  )
}

export default ContactUsFrom