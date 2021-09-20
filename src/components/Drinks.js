import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Drink from './Drink.js';
import { 
	fetchCategories, 
	fetchDrinksByKeyword, 
	fetchDrinksByCategory, 
	fetchDrinksByFilter 
} from '../api/functions.js';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;    
	margin: 0 -5px;
`;
const Filters = styled.div`
	display: flex;
	margin: 20px -10px;
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
const Category = styled.a`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
margin: 5px;
box-shadow:  0 0 1px 1px rgba(0,0,0,0.5);
cursor: pointer;
user-select: none;
	&:hover {
    opacity: 0.8;
		box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5);
  }
`;

const Drinks = () => {

	const [drinks, setDrinks] = useState(null);
	const [categories, setCategories] = useState(null);
	const [keyword, setKeyword] = useState("");
	const [category, setCategory] = useState("");
	const [filter, setFilter] = useState("");
	const [isAlcoholic, setAlcoholic] = useState(false);

	
	const fetchInitialData = () => {
		fetchCategories().then(res => {
			setCategories(res)
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});
	}

	const fetchData = () => {

		if(category){
			console.log("fetching by category");
			fetchDrinksByCategory().then(res => {
				setDrinks(res)
			}).catch(err => {
				setDrinks(null)
				console.error(err);
			});
		}
			
		if(keyword){
			console.log("fetching by keyword");
			fetchDrinksByKeyword(keyword).then(res => {
				setDrinks(res)
			}).catch(err => {
				setDrinks(null)
				console.error(err);
			});
		}			
		if(filter){
			console.log("fetching by keyword");
			fetchDrinksByFilter(filter).then(res => {
				setDrinks(res)
			}).catch(err => {
				setDrinks(null)
				console.error(err);
			});
		}
	}

	const clearFilters = () => {
		setCategory('')
		setKeyword('')
		
	}
	
	const handleFilter = e => {
		setAlcoholic(!isAlcoholic)
		setFilter(isAlcoholic ? "Alcoholic" : "Non_Alcoholic")
	}

	const handleSelect = (e) => {
		clearFilters()
		setCategory(e.target.value)
	}
	const handleKeywordChange = e => {
		clearFilters()
		setKeyword(e.target.value)
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keyword, category, isAlcoholic]);

	useEffect(() => {
		fetchInitialData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Filters>
				<InputWrap>
					<input type="text" placeholder="Search.." onChange={handleKeywordChange}  />
				</InputWrap>
				{/* <InputWrap>
					<select onChange={handleSelect}>
						{categories && categories.map((c, i) => {
							return (
								<option key={i}> {c.strCategory} </option>
							)
						})}
					</select>
				</InputWrap> */}
				<input type="checkbox" onChange={handleFilter} value={isAlcoholic}  />
			</Filters>
			<Grid>
				{drinks && drinks.map((el, i) => {
					return (<Drink key={i} drink={el} />)
				})}
			</Grid>
		</div>
	)

}

export default Drinks
