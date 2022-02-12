import React from 'react';
import Calendar from 'react-calendar';
import { DatepickerProps } from './@types';
import PresetDates from './PresetDates';
import styled from 'styled-components';
import presetDates from './constants';

const ConditionalRender = ({
	children,
	condition,
}: {
	children: React.ReactChild;
	condition: boolean;
}) => {
	if (!condition) return null;
	return <>{children} </>;
};

export default function Datepicker({ date, setDate, show, setShow }: DatepickerProps) {
	function toggleShowDate(show: boolean) {
		setShow(!show);
	}

	return (
		<>
			<div
				style={{
					display: 'flex',
					width: '135px',
					height: '30px',
					alignItems: 'center',
					border: '1px solid #E3E3E0',
					borderRadius: '8px',
					boxShadow: '0px 1px 0px rgba(20, 20, 0, 0.051)',
					padding: '5px 14px',
					marginBottom: '8px',
				}}
				onClick={() => toggleShowDate(show)}
				data-testid="input"
			>
				<input
					placeholder="Select a date"
					style={{
						minWidth: '0',
						fontSize: '13px',
						border: 'none',
						outline: 'none',
						color: '#706F6C',
					}}
					type="text"
					onClick={(e) => {
						e.preventDefault();
					}}
					value={date.label}
					onChange={() => {}}
				/>
				<img src="/plus-icon.svg" alt="plus" width="10px" height="10px" />
			</div>
			<ConditionalRender condition={show}>
				<CalendarContainer show={show}>
					<div
						style={{
							width: '100px',
							background: '#F9F9F8',
							padding: '25px',
							minWidth: '141px',
							borderRadius: '12px 0 0 12px',
						}}
					>
						<PresetDates options={presetDates} date={date} setDate={setDate} />
					</div>
					<Calendar value={date.value} />
				</CalendarContainer>
			</ConditionalRender>
		</>
	);
}

//todo: implement a smooth entrance/exit transition

const CalendarContainer = styled.div<{ show: boolean }>`
	display: ${(props) => (props.show ? 'flex' : 'none')};
	border-radius: 12px;
`;
