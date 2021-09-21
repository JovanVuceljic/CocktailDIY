import React from 'react';
import styled from 'styled-components';

const AuthorImage = styled.div`
	max-width: 300px;
	div {
		border-radius: 50%;
		overflow: hidden;
	}
`;

const Content = styled.div`
	display: flex;
	@media only screen and (max-width: 680px) {
		flex-direction: column;
    align-items: center;
	}
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
	a {
		display: block;
		margin-right: 10px;
	}
	img {
    height: 35px;
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
					<div>
						<img src="jovan-vuceljic.jpg" alt="author" />
					</div>
				</AuthorImage>
				<Info>
					<div>Name: Jovan Vučeljić</div>
					<div>Index: 162/14</div>
					<div>Birth: 07.07.1992.</div>
					<div>Occupation: Frontend developer</div>
					<SocialLinks>
						<a target="_blank" href="https://rs.linkedin.com/in/jovan-vuceljic" rel="noreferrer"><img src="linkedin-brands.svg" alt="linkedin" /></a>
						<a target="_blank" href="https://github.com/JovanVuceljic/" rel="noreferrer"><img src="github-brands.svg" alt="github" /></a>
						<a target="_blank" href="https://jovanvuceljic.github.io/portfolio/" rel="noreferrer"><img src="address-card-solid.svg" alt="portfolio" /></a>
					</SocialLinks>
				</Info>
			</Content>

		</div>
	)

}

export default Author
