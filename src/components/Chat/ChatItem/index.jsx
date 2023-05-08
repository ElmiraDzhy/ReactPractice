import React from 'react'
import styles from '../Chat.module.scss'


function ChatItem( props ) {
  const { message: {body } } = props;

  return (
    <div className={ styles['chat-item'] }>
      <img src='/images/userImage.jpg' alt="" className={ styles['message-avatar'] } />
      <div className={styles['message-body']}> {body} </div> 
    </div>
  )
}

export default ChatItem
