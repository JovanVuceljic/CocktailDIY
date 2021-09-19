import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchDrinks } from '../api/functions.js';
import Drink from './Drink.js';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
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


	const fetchData = (keyword) => {

		fetchDrinks(keyword).then(res => {
			setDrinks(res)
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});

		fetchCategories().then(res => {
			setCategories(res)
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});
	}


const handleClick = (c) => {
	console.log(c);
}
	const setSearch = (value) => {
		console.log(value);
		setKeyword(value)
	}

	useEffect(() => {
		fetchData(keyword)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<input type="text" placeholder="Search.." onChange={setSearch} />
			<Grid>
				{categories && categories.map((c, i) => {
				return (<Category onClick={() => handleClick(c.strCategory)} key={i}> {c.strCategory} </Category>)
			})}
			</Grid>
			<Grid>
				{drinks && drinks.map((el, i) => {
					return (<Drink key={i} drink={el} />)
				})}
			</Grid>
		</div>
	)

}

export default Drinks
