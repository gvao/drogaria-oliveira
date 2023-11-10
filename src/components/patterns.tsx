import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Logotipo = ({
	className,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
	<div
		id="logotipo"
		className={twMerge(
			"w-fit flex justify-center items-center aspect-square rounded-full overflow-hidden shadow-lg",
			className
		)}
	>
		<img src="/logotipo.png" alt="imagem" />
	</div>
);
