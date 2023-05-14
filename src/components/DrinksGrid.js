import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NoticeMessage from './NoticeMessage';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 32% 32% 32%;
	grid-column-gap: 2%;
	
	@media only screen and (max-width: 680px) {
		grid-template-columns: 49% 49%;	
	}
`;

const DrinkWrap = styled.div`
	box-shadow: 0 0 3px 1px rgb(0 0 0 / 25%);
	border-radius: 3px;
	margin-bottom: 14px;
	overflow: hidden;
	position: relative;
	&>div {
    display: grid;
		overflow: hidden;
	}
	img {
		transition: transform 0.3s ease-in-out;
	}
	&:hover {
		img {
			transform: scale(1.1);
		}
	}
`;

const Heading = styled.h3`
	color: white;
	background: rgba(0,0,0,0.5);
	text-align: center;
	margin: 0;
	padding: 7px;
	margin-top: -4px;
	letter-spacing: 1px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	width: 100%;
`;


const Img = styled.img`
	width: 100%;
`;

const LoadMore = styled.div`
	box-shadow: 0 0 2px 1px rgb(0 0 0 / 20%);
	color: #555;
	padding: 10px 0;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 13px;
	font-weight: bold;
	max-width: 150px;
	text-align: center;
	background: white;
	margin: 30px auto;
	cursor: pointer;
	user-select: none;
	&:hover {	
		opacity: 0.8;
	}
	&:active {	
		box-shadow: inset 0 0 2px 1px rgb(0 0 0 / 20%);
	}
`;

const DrinksGrid = (props) => {
	
	const [limit, setLimit] = useState(12)
	const { elements, hideMessage } = props;
	const gridItems = elements.slice(0, limit) || [];

	return (
		<div>
			{!hideMessage && <NoticeMessage message={`Showing ${limit < elements.length ? limit : elements.length} out of ${elements.length} results`} />}
			<Grid>
				{gridItems.map((el, i) => {
					return (<Drink key={i} drink={el} />)
				})}
			</Grid>
			{gridItems.length !== elements.length ? <LoadMore onClick={() => setLimit(limit + 6)}>Load More</LoadMore> : ""}
		</div>
	)
}


const Drink = ({ drink }) => {

	const { idDrink, strDrink, strDrinkThumb, strImageAttribution } = drink;

	return (
		<Link to={`/drink/${idDrink}`}>
			<DrinkWrap>
				<div>
					<Img src={strDrinkThumb} alt={strImageAttribution} />
				</div>
				<Heading>{strDrink}</Heading>
			</DrinkWrap>
		</Link>
	)
}

export default DrinksGrid;