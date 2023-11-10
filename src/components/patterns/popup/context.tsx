"use client";

import { MouseEvent, createContext, useContext, useState } from "react";
import { ChildrenProps } from "./types";

interface PopupContextInterface {
	closePopup: (event: MouseEvent<HTMLElement>) => void;
	showPopup: boolean;
}

const PopupContext = createContext({} as PopupContextInterface);
export const usePopupContext = () => useContext(PopupContext);

export default function PopupContextProvider({ children }: ChildrenProps) {
	const [showPopup, setShowPopup] = useState(true);

	const closePopup = () => setShowPopup(false);
	const toggle = (event: MouseEvent<HTMLElement>) => {
		const target = event.target as Element;
		if (target.id === "popup-area") closePopup();
	};

	if (!showPopup) return null;

	return (
		<PopupContext.Provider
			value={{
				showPopup,
				closePopup,
			}}
		>
			<section
				onClick={toggle}
				id="popup-area"
				className="fixed top-0 left-0 z-50 bg-black bg-opacity-60 w-full h-screen flex justify-center items-center px-4"
			>
				{children}
			</section>
		</PopupContext.Provider>
	);
}
