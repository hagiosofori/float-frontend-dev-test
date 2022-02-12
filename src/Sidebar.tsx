import styled from 'styled-components';
import colors from './colors';

export default function Sidebar() {
	return (
		<SidebarContainer>
			<UserDetailsContainer>
				<ImagePlaceholder />
				<div>
					<UserDetailsPlaceholder width={100} />
					<UserDetailsPlaceholder width={60} />
				</div>
			</UserDetailsContainer>
		</SidebarContainer>
	);
}

const SidebarContainer = styled.aside`
	max-width: 260px;
	width: 20vw;
	padding: 37px 25px;
	background: ${colors.lightgrey};
	min-height: 100vh;

	@media only screen and (max-width: 600px) {
		display: none;
	}
`;

const UserDetailsContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ImagePlaceholder = styled.div`
	background: ${colors.darkgrey};
	border-radius: 50%;
	width: 40px;
	min-width: 40px;
	min-height: 40px;
	height: 40px;
	margin-right: 10px;
`;

const UserDetailsPlaceholder = styled.div<{ width: number }>`
	background: ${colors.darkgrey};
	height: 10px;
	width: ${(props) => props.width}px;
	margin-bottom: 10px;
`;
