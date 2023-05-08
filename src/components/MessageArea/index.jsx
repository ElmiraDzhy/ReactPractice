import React, { useState } from "react";
import styles from "./MessageArea.module.scss";

function MessageArea(props) {
  const [ text, setText ] = useState( "" );
  const { addMessage } = props;

	const changeHandler = ({ target: { value } }) => {
		setText(value);
  };
  
  const submitHandler = ( event ) => {
    event.preventDefault();
    addMessage( text );
  }

	return (
		<form className={styles.container} onSubmit={submitHandler}>
			<textarea
				value={text}
				onChange={changeHandler}
				className={styles["text-area"]}
			/>
			<button type="submit" className={styles.button}>{"->"}</button>
		</form>
	);
}

export default MessageArea;

