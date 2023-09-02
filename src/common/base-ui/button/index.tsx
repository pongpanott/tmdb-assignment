import React from "react";
import { cx } from "@emotion/css";
import { BaseComponentProps } from "../../types/base-component";

type ButtonProps = BaseComponentProps & {
	title: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
};

const Button = ({
	className,
	title,
	type = "button",
	onClick,
}: ButtonProps) => {
	return (
		<button type={type} className={cx(className)}>
			<p>{title}</p>
		</button>
	);
};

export { Button };
