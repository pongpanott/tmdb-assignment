type LabelProps = {
	label?: string;
};

const Label = ({ label }: LabelProps) => {
	if (!label) return null;

	return <label>{label}</label>;
};

export { Label };
