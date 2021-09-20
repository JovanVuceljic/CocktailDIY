import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchDrink } from '../api/functions.js';
import NoticeMessage from '../components/NoticeMessage.js';

const DrinkWrap = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;
const Img = styled.img`
	width: 100%;
`;
const Ul = styled.ul`
	list-style-type: none;
	padding: 0;
	max-width: 400px;
	margin: 50px auto;
`;
const Li = styled.li`
	display: flex;
	width: 100%;
	justify-content: space-between;
	width: 100%;
`;

const Drink = ({ match }) => {

	const [drink, setDrink] = useState(null);

	const { id } = match.params;

	const fetchData = () => {
		fetchDrink(id).then(res => {
			setDrink(res[0] || {})
		}).catch(err => {
			setDrink(null)
			console.error(err);
		});
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { strAlcoholic, strCategory, strCreativeCommonsConfirmed,
		strDrink, strDrinkAlternate, strDrinkThumb,
		strGlass, strIBA, strImageAttribution, strInstructions
	} = drink || {};


	return (
		drink ? (
			<DrinkWrap>
				<h3>{strDrink}</h3>
				<div>
					<Img src={strDrinkThumb} alt={strImageAttribution} />
				</div>
				<p>Instructions: {strInstructions}</p>
				<Ul>
					<Li><div>Category:</div><div>{strCategory}</div></Li>
					<Li><div>Alcoholic:</div><div>{strAlcoholic}</div></Li>
					<Li><div>Drink Alternate:</div><div>{strDrinkAlternate}</div></Li>
					<Li><div>Creative Commons Confirmed: </div><div>{strCreativeCommonsConfirmed}</div></Li>
					<Li><div>Glass:</div><div>{strGlass}</div></Li>
					<Li><div>IBA:</div><div>{strIBA}</div></Li>
				</Ul>
			</DrinkWrap>
		) :
			<NoticeMessage message="That cocktail doesn't exist" />
	)
}

export default Drink;