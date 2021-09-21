import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchDrink } from '../api/functions.js';
import NoticeMessage from '../components/NoticeMessage.js';

const DrinkWrap = styled.div`
	max-width: 600px;
	margin: 30px auto;
`;
const Headline = styled.h1`
	letter-spacing: 1px;
	text-align: center;
	text-transform: uppercase;
	font-family: "sans-serif";
	font-size: 25px;    
	margin: 25px 0; 
	background: rgba(128,128,128,0.1);
	padding: 5px 0;
	border-top: 2px solid silver;
	border-bottom: 2px solid silver;
`;
const H2 = styled.h2`
	border-bottom: 2px solid black;
	padding-bottom: 5px;
`;
const Img = styled.img`
	width: 100%;
`;
const Ul = styled.ul`
	list-style-type: none;
	padding: 0;
	max-width: 350px;
	margin: 30px auto;
`;
const Li = styled.li`
	display: flex;
	width: 100%;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	padding-bottom: 4px;
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

	const { strIngredient1, strIngredient2, strIngredient3,
		strIngredient4, strIngredient5, strIngredient6, 
		strIngredient7, strIngredient8, strIngredient9,
		strMeasure1, strMeasure2, strMeasure3,
		strMeasure4, strMeasure5, strMeasure6, 
		strMeasure7, strMeasure8, strMeasure9,
	} = drink || {};
	console.log(drink);

	return (
		drink ? (
			<DrinkWrap>
				<Headline>{strDrink}</Headline>
				<div>
					<Img src={strDrinkThumb} alt={strImageAttribution} />
				</div>
				<H2>Instructions</H2>
				<p>{strInstructions}</p>
				<H2>Info</H2>
				<Ul>
					<Li><div>Category:</div><div>{strCategory}</div></Li>
					<Li><div>Alcoholic:</div><div>{strAlcoholic}</div></Li>
					<Li><div>Drink Alternate:</div><div>{strDrinkAlternate}</div></Li>
					<Li><div>Creative Commons Confirmed: </div><div>{strCreativeCommonsConfirmed}</div></Li>
					<Li><div>Glass:</div><div>{strGlass}</div></Li>
					<Li><div>IBA:</div><div>{strIBA}</div></Li>
				</Ul>
				<H2>Ingridients</H2>
				<Ul>
					{strIngredient1 && (<Li><div>{strIngredient1}:</div><div>{strMeasure1}</div></Li>)}
					{strIngredient2 && (<Li><div>{strIngredient2}:</div><div>{strMeasure2}</div></Li>)}
					{strIngredient3 && (<Li><div>{strIngredient3}:</div><div>{strMeasure3}</div></Li>)}
					{strIngredient4 && (<Li><div>{strIngredient4}:</div><div>{strMeasure4}</div></Li>)}
					{strIngredient5 && (<Li><div>{strIngredient5}:</div><div>{strMeasure5}</div></Li>)}
					{strIngredient6 && (<Li><div>{strIngredient6}:</div><div>{strMeasure6}</div></Li>)}
					{strIngredient7 && (<Li><div>{strIngredient7}:</div><div>{strMeasure7}</div></Li>)}
					{strIngredient8 && (<Li><div>{strIngredient8}:</div><div>{strMeasure8}</div></Li>)}
					{strIngredient9 && (<Li><div>{strIngredient9}:</div><div>{strMeasure9}</div></Li>)}
				</Ul>

			</DrinkWrap>
		) :
			<NoticeMessage message="That cocktail doesn't exist" />
	)
}

export default Drink;