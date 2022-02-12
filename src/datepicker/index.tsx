import Calendar from 'react-calendar';
import { DatepickerProps } from './@types';
import PresetDates from './PresetDates';
import styled, { keyframes } from 'styled-components';
import presetDates from './constants';
import format from 'date-fns/format';
import colors from '../colors';
import ConditionalRender from '../ConditionalRender';

export default function Datepicker({ date, setDate, show, setShow }: DatepickerProps) {
	function toggleShowDate(show: boolean) {
		setShow(!show);
	}

	return (
		<>
			<InputContainer
				onClick={(e) => {
					e.stopPropagation();
					toggleShowDate(show);
				}}
				data-testid="input"
			>
				<Input
					type="text"
					onClick={(e) => {
						e.preventDefault();
					}}
					value={date.label}
					onChange={() => null}
				/>
				<img src="/plus-icon.svg" alt="plus" width="10px" height="10px" />
			</InputContainer>
			<ConditionalRender condition={show}>
				<CalendarContainer show={show} onClick={(e) => e.stopPropagation()}>
					<PresetDatesContainer>
						<PresetDates options={presetDates} date={date} setDate={setDate} />
					</PresetDatesContainer>
					<Calendar
						value={date.value}
						onChange={(value: Date) => {
							const label = determineSelectedDateLabel(value);
							setDate({ label, value });
						}}
						formatShortWeekday={(_, date: Date) => format(date, 'ccccc')}
					/>
				</CalendarContainer>
			</ConditionalRender>
		</>
	);
}

const appear = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
`;

const InputContainer = styled.div`
	display: flex;
	width: 135px;
	height: 30px;
	align-items: center;
	border: 1px solid ${colors.darkgrey};
	border-radius: 8px;
	box-shadow: 0px 1px 0px rgba(20, 20, 0, 0.051);
	padding: 5px 14px;
	margin-bottom: 8px;
`;

const Input = styled.input`
	min-width: 0;
	font-size: 13px;
	border: none;
	outline: none;
	color: ${colors.text};
	cursor: pointer;
`;

const PresetDatesContainer = styled.div`
	width: 100px;
	background: ${colors.lightgrey};
	padding: 25px;
	min-width: 141px;
	border-radius: 12px 0 0 12px;
`;

const CalendarContainer = styled.div<{ show: boolean }>`
	display: ${(props) => (props.show ? 'flex' : 'none')};
	border-radius: 12px;
	min-height: 300px;
	animation: ${appear} 0.2s ease-in-out;

	.react-calendar {
		border: 1px solid #f3f3f2;
		border-radius: 0 12px 12px 0;
		max-width: 280px;
		padding: 10px;
	}

	.react-calendar__tile--active {
		background: #0e9888 !important;
		border-radius: 6px;
		color: #ffffff !important;
	}

	.react-calendar__month-view__days__day--neighboringMonth,
	.react-calendar__month-view__weekdays {
		color: #c8c7c1 !important;
	}

	.react-calendar__tile--now {
		background: transparent;
	}

	.react-calendar__navigation__next-button,
	.react-calendar__navigation__prev-button {
		color: #0e9888;
		font-size: 16px;
	}

	.react-calendar__month-view__days__day--weekend,
	.react-calendar__month-view__days__day {
		color: #706f6c;
		font-weight: 600;
		background: transparent;
	}

	.react-calendar__month-view__days__day:hover {
		background: #0e98881a;
		border-radius: 6px;
	}

	.react-calendar__navigation__label__labelText {
		color: #706f6c;
		font-weight: 600;
	}

	.react-calendar__navigation__next2-button,
	.react-calendar__navigation__prev2-button {
		display: none;
	}
`;

export function determineSelectedDateLabel(date: Date) {
	const foundPresetDate = presetDates.find((each) => {
		return (
			each.value.getDate() === date.getDate() &&
			each.value.getMonth() === date.getMonth() &&
			each.value.getFullYear() === date.getFullYear()
		);
	});
	return foundPresetDate?.label || 'Custom';
}
