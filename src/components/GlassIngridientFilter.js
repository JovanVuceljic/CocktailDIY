import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; 

import DrinksGrid from './DrinksGrid.js';
import { fetchGlassDrinks, fetchIngridientDrinks, fetchGlasses, fetchIngridients } from '../api/functions.js';

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


const GlassIngridientFilter = () => {
	const [drinks, setDrinks] = useState([]);

	const [glass, setGlass] = useState(null);
	const [ingridient, setIngridient] = useState(null);

	const [glassTypes, setGlassTypes] = useState("");
	const [ingridients, setIngridients] = useState("");

	const [filteredByGlass, setFilteredByGlass] = useState([]);
	const [filteredByIngridient, setFilteredByIngridient] = useState([]);


	const initialFetch = () => {
		fetchGlasses().then(res => {
			setGlassTypes(res)
		}).catch(err => {
			console.error(err);
		});

		fetchIngridients().then(res => {
			setIngridients(res)
		}).catch(err => {
			console.error(err);
		});
	}

	const fetchData = () => {
		fetchGlassDrinks(glass).then(res => {
			setFilteredByGlass(res || [])
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});

		fetchIngridientDrinks(ingridient).then(res => {
			setFilteredByIngridient(res || [])
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});
		
		//const merged = filteredByGlass.concat(filteredByIngridient).unique();
		const merged = filteredByGlass.filter(element => filteredByIngridient.includes(element));
		
		console.log(filteredByGlass.length);
		console.log(filteredByIngridient.length);
		console.log(merged.length);
		setDrinks(merged)
		console.log("---------------------");

	}


	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [glass, ingridient]);

	useEffect(() => {
		console.log('initial fetch');
		initialFetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleGlassSelect = (e) => {
		setGlass(e.target.value)
	}

	const handleIngridientSelect = (e) => {
		setIngridient(e.target.value)
	}

	return (
		<div>
			<Filters>
				<InputWrap>
					<select onChange={handleGlassSelect}>
						<option>Select glass type..</option>
						{glassTypes && glassTypes.map((c, i) => {
							return (
								<option key={i}> {c.strGlass} </option>
							)
						})}
					</select>
				</InputWrap>
				<InputWrap>
					<select onChange={handleIngridientSelect}>
						<option>Select ingridient..</option>
						{ingridients && ingridients.map((c, i) => {
							return (
								<option key={i}> {c.strIngredient1} </option>
							)
						})}
					</select>
				</InputWrap>
			</Filters>
			{drinks && <DrinksGrid elements={drinks} />}
		</div>
	)

}



export default GlassIngridientFilter
