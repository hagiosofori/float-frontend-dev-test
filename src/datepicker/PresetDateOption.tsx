import { PresetDate } from './@types';
import styled from 'styled-components';
import colors from '../colors';

const PresetDateOption = ({
	activeIcon,
	inactiveIcon,
	label,
	isActive,
	onClick,
	clickable = true,
}: PresetDate & { isActive: boolean; onClick: () => void; clickable?: boolean }) => {
	return (
		<PresetDateOptionContainer
			clickable={clickable}
			onClick={onClick}
			data-testid={label}
			isActive={isActive}
			type="button"
		>
			<img
				src={isActive ? activeIcon : inactiveIcon}
				alt={`${label} date`}
				width="20px"
				height="20px"
			/>
			{label}
		</PresetDateOptionContainer>
	);
};

export default PresetDateOption;

const PresetDateOptionContainer = styled.button<{ isActive: boolean; clickable: boolean }>`
	display: flex;
	padding: 10px 8px;
	background: ${(props) => (props.isActive ? colors.presetDateActiveBackground : 'transparent')};
	cursor: pointer;
	color: ${(props) => (props.isActive ? colors.teal : colors.otherMonthsDateText)};
	font-weight: ${(props) => (props.isActive ? 600 : 400)};
	border: none;
	min-width: 141px;
	border-radius: 6px;
	align-items: center;
    font-size: 14px;

	&:hover {
		background: ${(props) => (props.clickable ? colors.presetDateActiveBackground : '')};
		cursor: ${(props) => (props.clickable ? 'pointer' : 'not-allowed')};
	}

	img {
		margin-right: 13px;
	}
`;
