import React, { useState, useReducer, useEffect } from "react";
import DialogList from "../DialogList";
import Chat from "../Chat/Chat";
import MessageArea from "../MessageArea";
import styles from "./Dashboard.module.scss";
import { getMessages } from "../../api/getMessages";
import reducer from "../../reducers/messageReducer";
import { CONSTANTS } from "../../constants";

const { ACTIONTYPES } = CONSTANTS;

function Dashboard() {
	const [user, setUser] = useState({
		id: 0,
		userName: "test",
		imageSrc: "/images/userImage.jpg",
	});

	const [state, dispatch] = useReducer(reducer, {
		messages: [],
		error: null,
	});

	useEffect(() => {
		getMessages()
      .then( ( data ) => {
        console.log(data.comments)
				dispatch({
					type: ACTIONTYPES.GET_MESSAGE_SUCCESS,
					payload: data.comments,
				});
			})
			.catch((error) => {
				dispatch({
					type: ACTIONTYPES.GET_MESSAGE_ERROR,
					error,
				});
      } );
	}, []);

	return (
		<article className={styles["flex-row"]}>
			<DialogList />
			<div className={styles["flex-column"]}>
        <Chat messages={state.messages} />
				<MessageArea />
			</div>
		</article>
	);
}

export default Dashboard;

