import { DropdownItemProps } from "common/types/dropdown-item";
import { useViewModel } from "./viewmodel";
import { cx } from "@emotion/css";
import { HintMessage } from "../hint-message";

type FieldDropdownProps = {
	name: string;
	items: DropdownItemProps[];
	placeholder?: string;
	initialValue?: DropdownItemProps;
};

const FieldDropdown = ({
	name,
	items,
	placeholder,
	initialValue,
}: FieldDropdownProps) => {
	const {
		isOpen,
		selectedItem,
		getToggleButtonProps,
		getMenuProps,
		highlightedIndex,
		getItemProps,
		isShowError,
		errorMessage,
	} = useViewModel({ name, items, initialValue });

	return (
		<div className="relative w-full">
			<button
				type="button"
				{...getToggleButtonProps()}
				className="border-b  w-full text-left py-3 focus:border-primary-500 flex justify-between items-center"
			>
				<p>{selectedItem?.label || placeholder}</p>
			</button>
			<ul
				className={cx(
					"mt-2 bg-white w-full shadow-md z-10",
					isOpen ? "absolute" : "hidden"
				)}
				{...getMenuProps()}
			>
				{items.map((item, index) => (
					<li
						key={`${item.value}${index}`}
						{...getItemProps({ item, index })}
						className="p-[2px] cursor-pointer"
					>
						<p className={cx(highlightedIndex ? "bg-blue-500" : "bg-white")}>
							{item.label}
						</p>
					</li>
				))}
			</ul>

			<HintMessage
				message={errorMessage}
				isShow={isShowError && errorMessage}
			/>
		</div>
	);
};

export { FieldDropdown };
