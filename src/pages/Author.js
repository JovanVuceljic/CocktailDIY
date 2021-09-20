import React from 'react';
import styled from 'styled-components';

const AuthorImage = styled.div`
	width: 300px;
	border-radius: 50%;
	overflow: hidden;
`;

const Content = styled.div`
	display: flex;
`;

const Info = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	justify-content: center;
	margin-left: 50px;
	font-size: 18px;
	letter-spacing: 1px;
`;


const SocialLinks = styled.div`
	display: flex;
	align-items: left;
	list-style-type: none;
	padding: 20px 0;
	img {
		height: 50px;
		margin-right: 15px;
		&:hover {
			opacity: 0.7;
		}
	}
`;

const Author = () => {

	return (
		<div>
			<h1>Author details</h1>
			<Content>
				<AuthorImage>
					<img src="jovan-vuceljic.jpg" alt="author" />
				</AuthorImage>
				<Info>
					<div>Name: Jovan Vučeljić</div>
					<div>Index: 162/14</div>
					<div>Birth: 07.07.1992.</div>
					<div>Occupation: Frontend developer</div>
					<SocialLinks>
						<li><a target="_blank" href="https://rs.linkedin.com/in/jovan-vuceljic" rel="noreferrer"><img src="linkedin-brands.svg" alt="linkedin" /></a></li>
						<li><a target="_blank" href="https://github.com/JovanVuceljic/" rel="noreferrer"><img src="github-brands.svg" alt="github" /></a></li>
						<li><a target="_blank" href="https://jovanvuceljic.github.io/portfolio/" rel="noreferrer"><img src="address-card-solid.svg" alt="portfolio" /></a></li>
					</SocialLinks>
				</Info>
			</Content>

		</div>
	)

}

export default Author
