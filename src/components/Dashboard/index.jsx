import React from 'react'
import DialogList from '../DialogList'
import Chat from '../Chat/Chat'
import MessageArea from '../MessageArea'
import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <article className={styles['flex-row']}>
      <DialogList />
      <div className={styles['flex-column']}>
      <Chat />
      <MessageArea/>
      </div>
    </article>
  )
}

export default Dashboard
