import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// styled component as object
const HeaderWrap = styled.div({
	backgroundColor: '#111',
	height: '60px',
	width: '100%',
	boxShadow: '0 0 1px 1px rgba(0,0,0,0.4)',
});

// styled component as string 
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
	&:first-child {
		padding-left: 0;
	}
	a {
		color: white; 
		text-decoration: none;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover {
			opacity: 0.7;
		}
	}
`;

const Bars = styled.img`
	display:none;
	@media only screen and (max-width: 680px) {
    display: block;
    height: 40px;
    margin-left: auto;
    width: 60px;
    padding-top: 10px;
	}
`;

const Menu = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	align-items: ceneter;
	justify-conent: center;
	@media only screen and (max-width: 1280px) {
		padding: 0 50px;
	}
	@media only screen and (max-width: 680px) {
		display: none;
		flex-direction: column;
		position: absolute;
		top: 60px;	
		left: 0;
		width:100%;
		height: auto;
		background: #151515;
		padding: 10px 0;
		a {
			padding: 5px 0;
		}
	}
`;

const Header = (props) => {

	const [toggleMenu, setToggleMenu] = useState(false);


	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<HeaderWrap>
			<Bars src="/bars-solid.svg" alt="menu bars" onClick={handleToggleMenu} />
			<Menu className={toggleMenu && 'open'}>
				<MenuItem><Link to="/">Home</Link></MenuItem>
				<MenuItem><Link to="/search-cocktails">Search Cocktails</Link></MenuItem>
				<MenuItem><Link to="/filter-cocktails">Filter Cocktails</Link></MenuItem>
				<MenuItem><Link to="/about">About</Link></MenuItem>
				<MenuItem><Link to="/author">Author</Link></MenuItem>
			</Menu>
		</HeaderWrap>
	)
}

export default Header;