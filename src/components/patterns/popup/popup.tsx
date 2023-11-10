"use client";

import { Button } from "@/components/basics/button";
import { ChildrenProps, PopupCardProps } from "./types";
import { usePopupContext } from "./context";

const Card = ({ children, ...props }: ChildrenProps) => {
	return (
		<div className="container relative bg-cyan-100 p-4 rounded" {...props}>
			{children}
		</div>
	);
};

export const PopupCard = ({
	children,
	closeButton,
	...props
}: PopupCardProps) => {
	const { closePopup } = usePopupContext();

	return (
		<Card {...props}>
			{closeButton && (
				<Button
					onClick={closePopup}
					className="absolute -top-1 -right-1 shadow-md rounded-full"
				>
					x
				</Button>
			)}
			{children}
		</Card>
	);
};
