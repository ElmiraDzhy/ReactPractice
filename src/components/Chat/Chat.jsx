import React, {useEffect, useRef} from 'react'
import styles from './Chat.module.scss'
import ChatItem from './ChatItem'


function Chat( props ) {
  const { messages } = props;
  const chatEndPoint = useRef( null );
  
  const mapToVChat = messages.map( m => <ChatItem key={ m.id } message={ m } /> );
  
  const scrollIntoEndPoint = () => {
    chatEndPoint.current.scrollIntoView( {
      behavior: 'smooth',
    })
  }

  useEffect( () => {
    scrollIntoEndPoint()
  }, [ messages ] );

  return (
    <div className={styles.container}>
      { mapToVChat }
      <div ref={chatEndPoint}></div>
    </div>
  )
}

export default Chat;
