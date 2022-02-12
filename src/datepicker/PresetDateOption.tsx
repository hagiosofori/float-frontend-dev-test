import { PresetDate } from './@types';
const PresetDateOption = ({
	activeIcon,
	inactiveIcon,
	label,
	isActive,
	onClick,
}: PresetDate & { isActive: boolean; onClick: () => void }) => {
	return (
		<button
			style={{
				display: 'flex',
				padding: '10px 8px',
				background: isActive ? '#F1F1EF' : 'transparent',
				cursor: 'pointer',
				color: isActive ? '#0E9888' : '#90908C',
				fontWeight: isActive ? 600 : 400,
				border: 'none',
			}}
			onClick={onClick}
            data-testid={label}
		>
			<img
				src={isActive ? activeIcon : inactiveIcon}
				alt={`${label} date`}
				style={{ marginRight: '13px' }}
				width="20px"
				height="20px"
			/>
			{label}
		</button>
	);
};

export default PresetDateOption;
