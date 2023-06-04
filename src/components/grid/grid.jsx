import React, { useState } from 'react'
import * as math from 'mathjs'
import styles from './grid.module.css'
import Button from '../button/button'
import Display from '../display/display'

export default function grid() {
  const array = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '=', 'C']
  const [values, setValues] = useState({
    result: 0, showingValue: '', stringOp: '', operated: false,
  })
  function handleNumbers(val) {
    if (!values.operated && (values.stringOp[values.stringOp.length - 1] === '+' || values.stringOp[values.stringOp.length - 1] === '-' || values.stringOp[values.stringOp.length - 1] === '*' || values.stringOp[values.stringOp.length - 1] === '/')) {
      setValues({
        result: values.result,
        showingValue: val,
        stringOp: values.stringOp + val,
      })
    } else if (values.operated) {
      setValues({
        result: values.result,
        showingValue: val,
        stringOp: val,
      })
    } else {
      setValues({
        result: values.result,
        showingValue: values.showingValue + val,
        stringOp: values.stringOp + val,
      })
    }
  }
  function handleSymbol(val) {
    setValues({
      result: values.result,
      showingValue: val,
      stringOp: `${values.stringOp}${val}`,
    })
  }
  function handleErase() {
    setValues({
      result: 0,
      showingValue: '',
      stringOp: '',
    })
  }
  function operate() {
    setValues({
      result: math.evaluate(values.stringOp),
      showingValue: math.evaluate(values.stringOp).toString(),
      stringOp: math.evaluate(values.stringOp).toString(),
      operated: true,
    })
  }
  const handleClick = (val) => {
    if (val === '+' || val === '-' || val === '*' || val === '/') {
      handleSymbol(val)
    } else if (val === '=') {
      operate()
    } else if (val === 'C') {
      handleErase()
    } else { handleNumbers(val) }
  }
  return (
    <>
      <Display fontColor="black" backgroundColor="yellow" value={values.showingValue} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {
              array.map((value) => (
                <Button
                  key={value}
                  text={value}
                  fontColor="orange"
                  backgroundColor="black"
                  upperCase
                  bordered
                  circular
                  click={() => { handleClick(value) }}
                />
              ))
          }
        </div>
      </div>
    </>
  )
}
