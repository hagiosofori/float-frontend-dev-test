import Datepicker from './datepicker';
import { DatepickerProps } from './datepicker/@types';
import useCalendar from './hooks/useCalendar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

function App() {
	const { show: showDatePicker, setShow, date, setDate }: DatepickerProps = useCalendar();

	return (
		<Page>
			<Sidebar />
			<Main>
				<Header>
					<h3>Overview</h3>
				</Header>

				<main>
					<form>
						<Datepicker
							show={showDatePicker}
							setShow={setShow}
							date={date}
							setDate={setDate}
						/>
					</form>
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
