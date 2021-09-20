import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const HeaderWrap = styled.div`
  background-color: #111;
	height: 60px;
	width: 100%;
	box-shadow: 0 0 1px 1px rgba(0,0,0,0.4);
	`;

const Menu = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	align-items: ceneter;
	justify-conent: center;
`;

const MenuItem = styled.div`
	display: flex; 
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
	padding: 0 15px;
	cursor: pointer;
	user-select: none;
	color: white; 
	a {
		color: white; 
		text-decoration: none;
	}
`;

const Header = (props) => {
	return (
		<HeaderWrap>
			<Menu>
				<MenuItem><Link to="/">Home</Link></MenuItem>
				<MenuItem><Link to="/glass-filter">Glass filter</Link></MenuItem>
				<MenuItem><Link to="/ingridient-filter">Ingridient filter</Link></MenuItem>
				<MenuItem>About</MenuItem>
				<MenuItem>Author</MenuItem>
			</Menu>
		</HeaderWrap>
	)
}

export default Header;