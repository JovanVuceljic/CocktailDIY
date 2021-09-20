import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;    
	margin: 0 -5px;
`;

const DrinkWrap = styled.div`
	max-width: 300px;
	box-shadow: 0 0 3px 1px rgb(0 0 0 / 25%);
	border-radius: 3px;
	margin-bottom: 14px;
	overflow: hidden;
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
	color:white;
	background: #111;
	text-align: center;
	margin: 0;
	padding: 7px;
	margin-top: -4px;
	letter-spacing: 1px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;


const Img = styled.img`
	width: 100%;
`;

const DrinksGrid = (props) => {
	const { elements } = props;
	return (
		<Grid>
			{elements && elements.map((el, i) => {
				return (<Drink key={i} drink={el} />)
			})}
		</Grid>)
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