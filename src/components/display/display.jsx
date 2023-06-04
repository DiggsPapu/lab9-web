import React from 'react'
import PropTypes from 'prop-types'
import styles from './display.module.css'

export default function display({ fontColor, backgroundColor, value }) {
  return (
    <div className={styles.display} style={{ backgroundColor, color: fontColor }}>
      <p placeholder="0" style={{ color: fontColor, backgroundColor }}>{value}</p>
    </div>
  )
}
display.propTypes = {
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.string.isRequired,
}
