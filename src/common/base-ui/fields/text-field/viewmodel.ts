import { useMemo } from "react";
import { useField } from "react-final-form";

export const useViewModel = ({
	name,
	type,
}: {
	name: string;
	type: string;
}) => {
	const { input, meta } = useField(name, { type });

	const isShowError = useMemo(() => {
		if (
			(meta.error && meta.touched) ||
			(meta.submitError && !meta.touched && !meta.dirtySinceLastSubmit)
		) {
			return true;
		}

		return false;
	}, [meta]);

	const errorMessage = meta.error ?? meta.submitError;

	return { input, isShowError, errorMessage };
};
