const ConditionalRender = ({
	children,
	condition,
}: {
	children: React.ReactChild;
	condition: boolean;
}) => {
	if (!condition) return null;
	return <>{children}</>;
};

export default ConditionalRender;
