import React from 'react';
import styled from 'styled-components';


const FooterWrap = styled.div`
  background-color: black;
	height: 60px;
	width: 100%;
	color: #666;
	display: flex;
	align-items: center;
	justify-content: center;
	`;
	

const Footer = (props) => {
	return (
		<FooterWrap>
			<p>copyright © Jovan Vučeljić 162/14 2021</p>
		</FooterWrap>
	)
}

export default Footer;