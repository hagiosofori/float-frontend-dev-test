import PresetDateOption from './PresetDateOption';
import { PresetDatesProps } from './@types';

const PresetDates = ({ date, setDate, options }: PresetDatesProps) => (
	<>
		{options.map(({ label, value, activeIcon, inactiveIcon }) => (
			<PresetDateOption
				label={label}
				activeIcon={activeIcon}
				inactiveIcon={inactiveIcon}
				onClick={() => {
					setDate({ value, label });
				}}
				value={value}
				isActive={label === date.label}
				key={label}
			/>
		))}
		<PresetDateOption
			label="Custom"
			activeIcon="/icons/custom-active.svg"
			inactiveIcon="/icons/custom-inactive.svg"
			onClick={() => {}}
			value={new Date()}
			isActive={date.label === 'Custom'}
			key="Custom"
		/>
	</>
);

export default PresetDates;
