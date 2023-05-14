import React, { useState, useEffect, Fragment, useContext } from 'react';
import styled from 'styled-components';

import DrinksGrid from '../components/DrinksGrid.js';
import NoticeMessage from '../components/NoticeMessage.js';
import { CocktailContext } from '../CocktailContext.js';
import {
	fetchGlassDrinks,
	fetchGlasses,
	fetchIngridientDrinks,
	fetchIngridients,
	fetchCategories,
	fetchCategoryDrinks,
	fetchDrinksByName
} from '../api/functions.js';

const Filters = styled.div`
	display: flex;
	margin: 30px -10px;
	@media only screen and (max-width: 680px) {
		flex-direction: column;
		div {
			width: unset;
		}
	}
`;

const InputWrap = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	input, select {
		border:  1px solid rgba(0,0,0,0.5);
		width: 100%;
		height: 30px;
		outline-color: rgba(0,0,0,0.5);
	}
`;

const SortSelect = styled.div`
	display: flex;
	height: 30px;
	padding: 10px;
	max-width: 30px;
	width: 100%;
	margin-left: auto;
`;

const LastVisitedCocktails = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 20px;
	height: 100px;
	overflow: hidden;
	box-shadow: inset 0 0 6px 1px rgb(0 0 0 / 10%);
	background: rgba(128,128,128,0.1);
	padding: 10px 25px;
	span {
		letter-spacing: 2px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
    align-items: center;
    display: flex;
    margin-right: 20px;
    min-width: 100px;
	}
	div {
    width: 100%;
		div{
			grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px; 
			grid-column-gap: 10px;
			opacity: 0.8;
			h3 {
				font-size: 10px;
				letter-spacing: 0;
			}
		}
	}
`;

const FilterCocktails = () => {

	const [keyword, setKeyword] = useState("");
	const [glass, setGlass] = useState(null);
	const [ingridient, setIngridient] = useState(null);
	const [category, setCategory] = useState(null);
	const [sortType, setSortType] = useState(1);

	const [glassTypeList, setGlassTypeList] = useState([]);
	const [ingridientList, setIngridientList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);

	const [drinks, setDrinks] = useState(null);
	const [drinksByName, setDrinksByName] = useState(null);
	const [drinksByCategory, setDrinksByCategory] = useState(null);
	const [drinksByGlass, setDrinksByGlass] = useState(null);
	const [drinksByIngridient, setDrinksByIngridient] = useState(null);

	const initialFetch = () => {
		fetchGlasses()
		.then(res => setGlassTypeList(res))
		.catch(err => console.error(err));

		fetchIngridients()
		.then(res => setIngridientList(res))
		.catch(err => console.error(err));
		
		fetchCategories()
		.then(res => setCategoryList(res))
		.catch(err => console.error(err));
	}


	const fetchByName = () => {
		fetchDrinksByName(keyword)
		.then(res => setDrinksByName(res))
		.catch(err => {
			setDrinks(null)
			console.error(err);
		});
	}

	const fetchByCategories = () => {
		fetchCategoryDrinks(category)
		.then(res => setDrinksByCategory(res))
		.catch(err => console.error(err));
	}

	const fetchByGlass = () => {
		fetchGlassDrinks(glass)
		.then(res => setDrinksByGlass(res))
		.catch(err => console.error(err));
	}

	const fetchByIngridient = () => {
		fetchIngridientDrinks(ingridient)
		.then(res => setDrinksByIngridient(res))
		.catch(err => console.error(err));
	}


	const intersectionLogic = (firstSet, ...sets) => {
		const intersect = (a, b) => new Set([...a].filter(item => [...b].some(x => x.idDrink === item.idDrink)));
		sets.forEach(sItem => firstSet = intersect(firstSet, sItem));
		return firstSet;
	}

	const filterData = () => {
		const sets = [];

		drinksByName && sets.push(new Set(drinksByName))
		drinksByCategory && sets.push(new Set(drinksByCategory))
		drinksByIngridient && sets.push(new Set(drinksByIngridient))
		drinksByGlass && sets.push(new Set(drinksByGlass))

		const filtered = intersectionLogic(...sets);

		return filtered ? [...filtered] : [];
	}


	useEffect(() => {
		initialFetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		glass && fetchByGlass()
		ingridient && fetchByIngridient();
		category && fetchByCategories();
		keyword && fetchByName();
		setSortType(1)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [glass, ingridient, category, keyword]);


	useEffect(() => {
		setDrinks(filterData)
		setSortType(1)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [drinksByIngridient, drinksByName, drinksByGlass, drinksByCategory]);


	useEffect(() => {
		drinks && setDrinks(drinks.sort((a, b) => sortType * a.strDrink > b.strDrink ? 1 : -1));
	}, [sortType, drinks])

	const handleGlassSelect = (e) => setGlass(e.target.value)
	const handleIngridientSelect = (e) => setIngridient(e.target.value)
	const handleCategorySelect = (e) => setCategory(e.target.value)
	const handleSearch = (e) => setKeyword(e.target.value)
	const handleSortType = () => setSortType(sortType * -1)
	
	const { visitedCocktails } = useContext(CocktailContext);
	
	return (
		<div>
			{visitedCocktails.length > 0 && (
				<LastVisitedCocktails>
					<span>Last viewed</span>
					<DrinksGrid elements={visitedCocktails} hideMessage={true} />
				</LastVisitedCocktails>
			)}
			<h1>Filter cocktails</h1>
			<Filters>
				<InputWrap>
					<input type="search" onChange={handleSearch} placeholder={`Serach by name..`} />
				</InputWrap>
				<InputWrap>
					<select onChange={handleCategorySelect}>
						<option> Select category.. </option>
						{categoryList && categoryList.map((el, i) => 
							<option key={i}> {el.strCategory} </option>
						)}
					</select>
				</InputWrap>
				<InputWrap>
					<select onChange={handleGlassSelect}>
						<option> Select glass type.. </option>
						{glassTypeList && glassTypeList.map((el, i) => 
							<option key={i}> {el.strGlass} </option>
						)}
					</select>
				</InputWrap>
				<InputWrap>
					<select onChange={handleIngridientSelect}>
						<option> Select ingridient.. </option>
						{ingridientList && ingridientList.map((el, i) => 
							<option key={i}> {el.strIngredient1} </option>	
						)}
					</select>
				</InputWrap>
				<SortSelect onClick={handleSortType}>
					{sortType === 1 ? <img src="/sort-alpha-down-solid.svg" alt="sort asc icon" /> :
						<img src="/sort-alpha-up-solid.svg" alt="sort desc icon" />}
				</SortSelect>
			</Filters>
			{drinks == null ? <NoticeMessage message="Select option" /> :
				drinks.length ? (
					<Fragment>
						<DrinksGrid elements={drinks} />
					</Fragment>
				) : 
				<NoticeMessage message="No data for given filters" />
			}
		</div>
	)

}


export default FilterCocktails
