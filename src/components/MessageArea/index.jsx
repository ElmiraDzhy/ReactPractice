import React, { useState } from "react";
import styles from "./MessageArea.module.scss";
import Icon from "@mdi/react";
import { mdiSend } from "@mdi/js";

function MessageArea(props) {
	const [text, setText] = useState("");
	const { addMessage } = props;

	const changeHandler = ({ target: { value } }) => {
		setText(value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		text && addMessage(text);
	};

	return (
		<form
			className={styles.container}
			onSubmit={submitHandler}>
			<textarea
				value={text}
				onChange={changeHandler}
				className={styles["text-area"]}
			/>
			<button
				type="submit"
				className={styles.button}>
				<Icon
					path={mdiSend}
					size={1}
				/>
			</button>
		</form>
	);
}

export default MessageArea;

