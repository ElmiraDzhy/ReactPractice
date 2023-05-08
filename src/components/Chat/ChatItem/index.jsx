import React, { useContext } from "react";
import classNames from "classnames";
import styles from "../Chat.module.scss";
import UserContext from "../../../contexts/userContext";

function ChatItem(props) {
	const {
		message: { body },
	} = props;
	const user = useContext(UserContext);

	const className = classNames(styles["chat-item"], {
		[styles["chat-item-right"]]: props.message.user.id === user.id,
	});

	const img =
		props.message.user.id === user.id
			? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
			: "/images/userImage.jpg";

	return (
		<div className={className}>
			<img
				src={img}
				alt=""
				className={styles["message-avatar"]}
			/>
			<div className={styles["message-body"]}> {body} </div>
		</div>
	);
}

export default ChatItem;

