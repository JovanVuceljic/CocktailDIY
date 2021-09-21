import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import DrinksGrid from '../components/DrinksGrid.js';
import NoticeMessage from '../components/NoticeMessage.js';
import {
	fetchGlassDrinks,
	fetchGlasses,
	fetchIngridientDrinks,
	fetchIngridients,
	fetchCategories,
	fetchCategoryDrinks
} from '../api/functions.js';

const Filters = styled.div`
	display: flex;
	margin: 30px 0;
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
const SelectType = styled.select`
	text-transform: capitalize;
`;


const FilterCocktails = () => {

	const [drinks, setDrinks] = useState(null);
	const [message, setMessage] = useState("");

	const [glass, setGlass] = useState("");
	const [ingridient, setIngridient] = useState(null);
	const [category, setCategory] = useState(null);

	const [glassTypeList, setGlassTypeList] = useState([]);
	const [ingridientList, setIngridientList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('category');

	const initialFetch = () => {
		fetchGlasses().then(res => {
			setGlassTypeList(res)
		}).catch(err => {
			console.error(err);
		});
		fetchIngridients().then(res => {
			setIngridientList(res)
		}).catch(err => {
			console.error(err);
		});
		fetchCategories().then(res => {
			setCategoryList(res)
		}).catch(err => {
			console.error(err);
		});
	}

	const fetchByGlass = () => {
		fetchGlassDrinks(glass).then(res => {
			setDrinks(res || [])
			setMessage(`Showing results for filter by glass type with selected: ${glass}`);
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});
	}

	const fetchByIngridient = () => {
		fetchIngridientDrinks(ingridient).then(res => {
			setMessage(`Showing results for filter by ingridient with selected: ${ingridient}`);
			setDrinks(res || [])
		}).catch(err => {
			console.error(err);
		});
	}

	const fetchByCategories = () => {
		fetchCategoryDrinks(category).then(res => {
			setMessage(`Showing results for filter by category with selected: ${category}`);
			setDrinks(res || [])
		}).catch(err => {
			console.error(err);
		});
	}


	useEffect(() => {
		initialFetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		switch (selectedFilter) {
			case 'glass':
				glass && fetchByGlass()
				break;
			case 'ingridient':
				ingridient && fetchByIngridient();
				break;
			case 'category':
				category && fetchByCategories();
				break;

			default:
				setDrinks([])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [glass, ingridient, category]);


	const handleTypeSelect = (e) => {
		setSelectedFilter(e.target.value);
	}

	const handleGlassSelect = (e) => {
		setGlass(e.target.value)
	}

	const handleIngridientSelect = (e) => {
		setIngridient(e.target.value)
	}

	const handleCategorySelect = (e) => {
		setCategory(e.target.value)
	}


	return (
		<div>
			<h1>Filter cocktails</h1>
			<Filters>
				<InputWrap>
					<SelectType onChange={handleTypeSelect}>
						<option>category</option>
						<option>ingridient</option>
						<option>glass</option>
					</SelectType>
				</InputWrap>
				<InputWrap>
					{selectedFilter === 'glass' ?
						(<select onChange={handleGlassSelect}>
							<option> Select glass type.. </option>
							{glassTypeList && glassTypeList.map((el, i) => {
								return (
									<option key={i}> {el.strGlass} </option>
								)
							})}
						</select>)
						: selectedFilter === 'ingridient' ?
							(<select onChange={handleIngridientSelect}>
								<option> Select ingridient.. </option>
								{ingridientList && ingridientList.map((el, i) => {
									return (
										<option key={i}> {el.strIngredient1} </option>
									)
								})}
							</select>)
							: (<select onChange={handleCategorySelect}>
								<option> Select category.. </option>
								{categoryList && categoryList.map((el, i) => {
									return (
										<option key={i}> {el.strCategory} </option>
									)
								})}
							</select>)
					}
				</InputWrap>
			</Filters>
			{drinks == null ? <NoticeMessage message="Select option" /> :
				drinks.length ? (
					<Fragment>
						<NoticeMessage message={message} />
						<DrinksGrid elements={drinks} />
					</Fragment>) :
					<NoticeMessage message="No data for given filter" />
			}
		</div>
	)

}


export default FilterCocktails
