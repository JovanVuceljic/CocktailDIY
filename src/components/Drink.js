import React from 'react';
import styled from 'styled-components';

const DrinkWrap = styled.div`
	max-width: 300px;
`;
const Img = styled.img`
	width: 100%;
`;
const Ul = styled.ul`
	list-style-type: none;
	padding: 0;
`;
const Li = styled.li`
	display: flex;
	width: 100%;
	justify-content: space-between;
	width: 100%;
`;

const Drink = ({ drink }) => {
	// console.log(drink);
	//dateModified, idDrink, strImageSource
	const { strAlcoholic, strCategory, strCreativeCommonsConfirmed, strDrink, strDrinkAlternate, strDrinkThumb, strGlass, strIBA, strImageAttribution } = drink;

	return (
		<DrinkWrap>
			<h3>{strDrink}</h3>
			<div>
				<Img src={strDrinkThumb} alt={strImageAttribution} />
			</div>
			<Ul>
				<Li><div>Category:</div><div>{strCategory}</div></Li>
				<Li><div>Alcoholic:</div><div>{strAlcoholic}</div></Li>
				<Li><div>Drink Alternate:</div><div>{strDrinkAlternate}</div></Li>
				<Li><div>Creative Commons Confirmed: </div><div>{strCreativeCommonsConfirmed}</div></Li>
				<Li><div>Glass:</div><div>{strGlass}</div></Li>
				<Li><div>IBA:</div><div>{strIBA}</div></Li>
			</Ul>
		</DrinkWrap>
	)
}

export default Drink;