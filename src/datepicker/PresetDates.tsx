import PresetDateOption from './PresetDateOption';
import { PresetDatesProps } from './@types';

const PresetDates = ({ date, setDate, options }: PresetDatesProps) => (
	<>
		{options.keys.map((key) => {
			const { label, value, activeIcon, inactiveIcon } = options[key];
			return (
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
			);
		})}

		<PresetDateOption
			label="Custom"
			activeIcon="/icons/custom-active.svg"
			inactiveIcon="/icons/custom-inactive.svg"
			onClick={() => null}
			value={new Date()}
			isActive={date.label === 'Custom'}
			key="Custom"
			clickable={false}
		/>
	</>
);

export default PresetDates;
