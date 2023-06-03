import React from 'react'
import PropTypes from 'prop-types'
import { useStore } from '@nanostores/react'
import operation from '../../store/operation'
import styles from './display.module.css'

export default function display() {
  const value = useStore(operation)
  return (
    <div className={styles.display}>
      <p>{value.showingValue}</p>
    </div>
  )
}
display.propTypes = {
}
