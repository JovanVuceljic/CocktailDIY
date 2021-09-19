import React from 'react';
import styled from 'styled-components';


const HeaderWrap = styled.div`
  background-color: black;
	height: 60px;
	width: 100%;
	`;
	
	const Menu = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	align-items: ceneter;
	justify-conent: center;
`;

const MenuItem = styled.a`
	display: flex; 
	justify-content: center;
	align-items: center;
	color: white; 
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
	padding: 0 15px;
	cursor: pointer;
	user-select: none;
`;

const Header = (props) => {
	return (
		<HeaderWrap>
			<Menu>
				<MenuItem>Home</MenuItem>
				<MenuItem>Cocktails</MenuItem>
				<MenuItem>About</MenuItem>
				<MenuItem>Author</MenuItem>
			</Menu>
		</HeaderWrap>
	)
}

export default Header;