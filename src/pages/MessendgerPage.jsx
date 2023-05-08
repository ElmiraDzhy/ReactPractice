import React from 'react'
import Dashboard from '../components/Dashboard'
import styles from './MessangerPage.module.scss'

function MessendgerPage() {
  return (
    <div className={styles['msg-wrapper']}>
      <Dashboard/>
    </div>
  )
}

export default MessendgerPage
