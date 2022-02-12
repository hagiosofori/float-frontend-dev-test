import React from 'react';
import './App.css';
import Datepicker from './datepicker';
import useCalendar from './hooks/useCalendar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

function App() {
	const { show: showDatePicker, setShow, date, setDate } = useCalendar(); // todo: specify the types. either as props to the datepicker component, or as the return value of useCalendar

	return (
		<Page>
			<Sidebar />
			<Main>
				<Header>
					<h3>Overview</h3>
				</Header>

				<main>
					<Datepicker
						show={showDatePicker}
						setShow={setShow}
						date={date}
						setDate={setDate}
					/>
				</main>
			</Main>
		</Page>
	);
}

export default App;

const Page = styled.div`
	display: flex;
`;

const Main = styled.div`
	padding: 25px;
`;

const Header = styled.header`
	margin-bottom: 55px;

	h3 {
		text-align: left;
	}
`;
