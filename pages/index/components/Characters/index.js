// Dependencies
import React from 'react'

// Utils
import BaseComponent from 'utils/BaseComponent'

// Styles
import styles from './styles.scss'

export default class Characters extends BaseComponent {
  render() {
    const number = Math.floor(Math.random() * 4) + 1
    return (
      <section className={`${styles.Characters} ${styles.Section}`}>
        <div className={`${styles.Content}`}>
          <h1>{number}</h1>
        </div>
      </section>
    )
  }
}
