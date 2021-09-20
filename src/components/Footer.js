import React from 'react';
import styled from 'styled-components';


const FooterWrap = styled.div`
  background-color: #111;
	height: 60px;
	width: 100%;
	color: #666;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 1px 1px rgba(0,0,0,0.4);
	`;


const Footer = (props) => {
	return (
		<FooterWrap>
			<p>Jovan Vučeljić 162/14 2021</p>
		</FooterWrap>
	)
}

export default Footer;