import React from 'react'
import PropTypes from 'prop-types'
import styles from './display.module.css'

export default function display({ fontColor, backgroundColor, value }) {
  function lengthBiggerThan9() {
    if (value > 10) {
      return (value.slice(0, 9))
    }
    return value
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
  value: PropTypes.string.isRequired,
}
