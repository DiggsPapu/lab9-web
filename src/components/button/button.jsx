import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

export default function button({
  text, fontColor, backgroundColor, upperCase, bordered, circular, click, id,
}) {
  return (
    <div
      className={styles.Button}
      style={{ fontColor }}
    >
      <button type="button" data-testid={id} onClick={click} className={circular ? styles.buttonCircular : styles.buttonNormal} style={bordered ? { backgroundColor, color: fontColor, border: '1px solid black' } : { color: fontColor, backgroundColor }}>{upperCase === true ? text.toUpperCase() : text}</button>
    </div>
  )
}
button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  upperCase: PropTypes.bool,
  bordered: PropTypes.bool,
  circular: PropTypes.bool,
  click: PropTypes.func,
  id: PropTypes.string,
}
