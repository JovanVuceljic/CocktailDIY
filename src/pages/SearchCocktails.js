import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import DrinksGrid from '../components/DrinksGrid.js';
import NoticeMessage from '../components/NoticeMessage.js';
import {
	fetchDrinksByName
} from '../api/functions.js';

const Filters = styled.div`
	display: flex;
	margin: 40px -5px 45px -5px;
`;

const InputWrap = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	input, select {
		box-shadow:  0 0 1px 1px rgba(0,0,0,0.5);
		border-color: transparent;
		width: 100%;
		height: 30px;
		outline: none;
	}
`;

const SearchCocktails = () => {

	const [drinks, setDrinks] = useState(null);
	const [keyword, setKeyword] = useState("");

	const fetchByName = (keyword) => {
		fetchDrinksByName(keyword).then(res => {
			setDrinks(res || [])
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});
	}

	useEffect(() => {
		fetchByName(keyword);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keyword]);


	const handleSearch = (e) => {
		setKeyword(e.target.value);
	}

	return (
		<div>
			<h1>Search cocktails</h1>
			<Filters>
				<InputWrap>
					<input type="search" onChange={handleSearch} placeholder={`Serach by name`} />
				</InputWrap>
			</Filters>
			{drinks != null && drinks.length ? (
				<Fragment>
					{keyword && <NoticeMessage message={`Showing results for search by name with keyword: ${keyword}`} />}
					<DrinksGrid elements={drinks} />
				</Fragment>) :
				<NoticeMessage message="No data for given filter" />
			}
		</div>
	)
}

export default SearchCocktails
