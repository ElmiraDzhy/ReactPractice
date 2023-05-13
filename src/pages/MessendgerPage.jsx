import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import styles from "./MessangerPage.module.scss";
import ModalWindow from "../components/ModalWindow";

function MessendgerPage() {
	const [error, setError] = useState(null);
	const [isOkay, setIsOkay] = useState(true);

	const onClick = () => {
		setError(new Error("This is my error"));
		setIsOkay((prev) => !prev);
	};

	const isOkayHandler = () => {
		setIsOkay((prev) => !prev);
	};

	console.dir(error);

	return (
		<div className={styles["msg-wrapper"]}>
			<Dashboard />
			{error && !isOkay && (
				<ModalWindow>
					<p>{error.message}</p>
					<button onClick={isOkayHandler}>Clik on me</button>
				</ModalWindow>
			)}
      <button onClick={ onClick }>Click</button>
		</div>
	);
}

export default MessendgerPage;

