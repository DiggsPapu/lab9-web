import React from 'react'
import PropTypes from 'prop-types'
import { useStore } from '@nanostores/react'
import operation from '../../store/operation'
import styles from './display.module.css'

export default function display({ fontColor, backgroundColor }) {
  const value = useStore(operation)
  function lengthBiggerThan9() {
    if (value.showingValue > 9) { return (value.showingValue.slice(0, 8)) }
    return value.showingValue
  }
  return (
    <div className={styles.display} style={{ backgroundColor, color: fontColor }}>
      <p style={{ color: fontColor, backgroundColor }}>{lengthBiggerThan9()}</p>
    </div>
  )
}
display.propTypes = {
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}
