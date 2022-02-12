import presetDates from './constants';
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
					setDate({value, label});
				}}
				value={value}
				isActive={value.getTime() === date.value.getTime()}
                key={label}
			/>
		))}
	</>
);

export default PresetDates;
