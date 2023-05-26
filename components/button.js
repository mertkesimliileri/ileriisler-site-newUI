import React from 'react'
import styles from "./button.module.css"

const Button = (props) => {
  
  let button;

  if(props.buttonType === 1) {
    button = <button className={styles.button1}>{props.children}</button>
  } else if(props.buttonType === 2) {
    button = <button className={styles.button2}>{props.children}</button>
  } else if(props.buttonType === 3) {
    button = <button className={styles.button3}>{props.children}</button>
  } else if(props.buttonType === 4) {
    button = <button className={styles.button4}>{props.children}</button>
  }

  return (
    <div>{button}</div>
  )
}

export default Button