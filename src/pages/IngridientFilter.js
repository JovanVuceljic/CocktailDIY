import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DrinksGrid from '../components/DrinksGrid.js';
import NoticeMessage from '../components/NoticeMessage.js';
import { fetchIngridientDrinks, fetchIngridients } from '../api/functions.js';

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


const IngridientFilter = () => {

	const [drinks, setDrinks] = useState(null);
	const [ingridient, setIngridient] = useState(null);
	const [ingridients, setIngridients] = useState("");

	const initialFetch = () => {
		fetchIngridients().then(res => {
			setIngridients(res)
		}).catch(err => {
			console.error(err);
		});
	}

	const fetchData = () => {
		fetchIngridientDrinks(ingridient).then(res => {
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
		ingridient && fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ingridient]);

	const handleIngridientSelect = (e) => {
		setIngridient(e.target.value)
	}

	return (
		<div>
			<Filters>
				<InputWrap>
					<select onChange={handleIngridientSelect}>
						<option> Select ingridient.. </option>
						{ingridients && ingridients.map((c, i) => {
							return (
								<option key={i}> {c.strIngredient1} </option>
							)
						})}
					</select>
				</InputWrap>
			</Filters>
			{drinks == null ? <NoticeMessage message="Select option" />
				: drinks.length ? <DrinksGrid elements={drinks} />
					: <NoticeMessage message="No data for given filter" />}
		</div>
	)

}

export default IngridientFilter
