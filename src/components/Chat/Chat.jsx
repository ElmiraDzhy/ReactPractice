import React from 'react'
import styles from './Chat.module.scss'
import ChatItem from './ChatItem'


function Chat( props ) {
  const { messages } = props;
  const mapToVChat = messages.map( m => <ChatItem key={m.id} message={m}/>);
  return (
    <div className={styles.container}>
      {mapToVChat}
    </div>
  )
}

export default Chat;
