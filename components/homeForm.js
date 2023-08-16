import React from 'react'
import styles from  "./homeForm.module.css"
import { useState } from 'react'
import { sendHomeForm } from "../lib/homeFormApi";

const HomeForm = (props) => {

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    title: "",
    company: "",
    firstSelection: props.firstValue,
    secondSelection: props.secondValue,
  }
  
  const initState = {values: initialValues }

  const [state, setState] = useState(initState);

  const { values } = state;
  const [validation, setValidation] = useState({
    fname: false,
    lname: false,
    email: false
  });
  const [displayRequired, setDisplayRequired] = useState(false);

  const handleChange = ({target}) => {
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
    if(!validation.fname || !validation.lname || !validation.email) {
      e.preventDefault();
    }
    if (validation.email && validation.fname && validation.lname) {
      await sendHomeForm(values);
    }
  }

  return (
    <div>
      <form method="POST" className={styles.form}>
        <div className={styles.row}>
          <div>
            <label htmlFor="fname">First Name {displayRequired && !validation.fname ? <span>*</span> : undefined}</label>
            <input className={styles.input} type="text" id="fname" value={values.fname} onChange={handleChange} name="fname" />
          </div>
          <div>
            <label htmlFor="lname">Last Name {displayRequired && !validation.lname ? <span>*</span> : undefined}</label>
            <input className={styles.input} type="text" id="lname" value={values.lname} onChange={handleChange} name="lname" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="email">Email {displayRequired && !validation.email ? <span>*</span> : undefined}</label>
            <input className={styles.input} type="email" id="email" value={values.email} onChange={handleChange} name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone number (optional)</label>
            <input className={styles.input} type="phone" id="phone" value={values.phone} onChange={handleChange} name="phone" />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label htmlFor="title">Title (optional)</label>
            <input className={styles.input} type="text" id="title" value={values.title} onChange={handleChange} name="title" />
          </div>
          <div>
            <label htmlFor="company">Company (optional)</label>
            <input className={styles.input} type="text" id="company" value={values.company} onChange={handleChange} name="company" />
            <input className={styles.input} style={{display: "none"}} value={props.firstValue} onChange={handleChange} type="text" id="firstSelection" name="firstSelection" />
            <input className={styles.input} style={{display: "none"}} value={props.secondValue} onChange={handleChange} type="text" id="secondSelection" name="secondSelection" />
          </div>
        </div>
        <div className={styles.buttonRow}>
          <input disabled={!validation.fname || !validation.lname || !validation.email ? true : false} onClick={(e)=> onSubmit(e)} className={styles.button}  type="submit" value="Send" />
        </div>
      </form>
    </div>
  )
}

export default HomeForm