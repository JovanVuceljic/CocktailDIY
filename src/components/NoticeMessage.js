import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
	width: 100%;
	text-align: center;
	color: rgba(0,0,0,0.6);
	margin-bottom: 30px;
`;

const NoticeMessage = ({ message = "No data" }) => <Message>{message}</Message>;

export default NoticeMessage
