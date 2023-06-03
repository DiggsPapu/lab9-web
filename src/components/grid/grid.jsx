import React from 'react'
import { enteredValue, evaluateExpression } from '../../store/operation'
import styles from './grid.module.css'
import Button from '../button/button'

export default function grid() {
  const array = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '=']

  return (
    <div className={styles.container}>
      {
            array.map((value) => (
              <Button key={value} text={value} fontColor="orange" backgroundColor="black" upperCase bordered circular click={value === '=' ? evaluateExpression : enteredValue(value)} />
            ))
        }
    </div>
  )
}
