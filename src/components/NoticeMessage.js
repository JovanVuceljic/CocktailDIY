import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
	width: 100%;
	text-align: center;
	color: rgba(0,0,0,0.6);
		`;

const NoticeMessage = ({ message = "No data" }) => {
	return (<Message>{message}</Message>)
}

export default NoticeMessage
