import { DropdownItemProps } from "common/types/dropdown-item";
import { useSelect } from "downshift";
import { useEffect, useMemo } from "react";
import { useField } from "react-final-form";

export const useViewModel = ({
	name,
	items,
	initialValue,
}: {
	name: string;
	items: DropdownItemProps[];
	initialValue?: DropdownItemProps;
}) => {
	const { input, meta } = useField(name);

	const {
		isOpen,
		selectedItem,
		getToggleButtonProps,
		getMenuProps,
		getItemProps,
		highlightedIndex,
	} = useSelect({
		items,
		initialSelectedItem: initialValue,
		onSelectedItemChange: (change) => {
			input.onChange(change.selectedItem?.value);
		},
	});

	useEffect(() => {
		if (initialValue) {
			input.onChange(initialValue?.value);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

	return {
		isOpen,
		selectedItem,
		getToggleButtonProps,
		getMenuProps,
		highlightedIndex,
		getItemProps,
		isShowError,
		errorMessage,
	};
};
