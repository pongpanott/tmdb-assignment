import React from "react";
import { useViewModel } from "./viewmodel";
import { cx } from "@emotion/css";
import { BaseComponentProps } from "common/types/base-component";
import { Label } from "../label";
import { HintMessage } from "../hint-message";

type TextFieldProps = BaseComponentProps & {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	maxLength?: number;
};

const TextField = ({
	className,
	name,
	type = "text",
	label,
	placeholder,
	maxLength,
}: TextFieldProps) => {
	const { input, errorMessage, isShowError } = useViewModel({ name, type });

	return (
		<div>
			<Label label={label} />
			<input
				{...input}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				className={cx(className)}
			/>
			<HintMessage
				message={errorMessage}
				isShow={isShowError && errorMessage}
			/>
		</div>
	);
};

export { TextField };
