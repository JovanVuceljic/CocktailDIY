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
				<h3>{strDrink}</h3>
				<div>
					<Img src={strDrinkThumb} alt={strImageAttribution} />
				</div>
			</DrinkWrap>
		</Link>
	)
}

export default DrinksGrid;