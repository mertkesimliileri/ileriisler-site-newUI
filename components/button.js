import React from 'react'
import styles from "./button.module.css"

const Button = (props) => {
  
  let button;

  if(props.buttonType === 1) {
    button = <button onClick={props.onClick} className={styles.button1}>{props.children}</button>
  } else if(props.buttonType === 2) {
    button = <button onClick={props.onClick} className={styles.button2}>{props.children}</button>
  } else if(props.buttonType === 3) {
    button = <button onClick={props.onClick} className={styles.button3}>{props.children}</button>
  } else if(props.buttonType === 4) {
    button = <button onClick={props.onClick} className={styles.button4}>{props.children}</button>
  } else if(props.buttonType === 5) {
    button = <button onClick={props.onClick} className={styles.button5}>{props.children}</button>
  } else if(props.buttonType === 6) {
    button = <button onClick={props.onClick} className={styles.button6}>{props.children}</button>
  } else if(props.buttonType === 7) {
    button = <button onClick={props.onClick} className={styles.button7}>{props.children}</button>
  } else if(props.buttonType === 8) {
    button = <button onClick={props.onClick} className={styles.button8}>{props.children}</button>
  }

  return (
    <div>{button}</div>
  )
}

export default Button