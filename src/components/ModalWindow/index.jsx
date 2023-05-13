import React from 'react'
import styles from './ModalWindow.module.scss'

function ModalWindow( {children} ) {
  return (
    <article className={ styles.container }>
      <div className={styles.wrapper}>
      {children}
      </div>
    </article>
  )
}

export default ModalWindow
