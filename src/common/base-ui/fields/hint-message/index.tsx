type HintMessageProps = {
	message: string;
	isShow?: boolean;
};

const HintMessage = ({ message, isShow = false }: HintMessageProps) => {
	return <p>{isShow ? message : null}</p>;
};

export { HintMessage };
