import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DrinksGrid from '../components/DrinksGrid.js';
import NoticeMessage from '../components/NoticeMessage.js';
import { fetchGlassDrinks, fetchGlasses } from '../api/functions.js';

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



//const filteredArray = array1.filter(value => array2.includes(value));

const GlassFilter = () => {

	const [drinks, setDrinks] = useState(null);
	const [glass, setGlass] = useState("");
	const [glassTypes, setGlassTypes] = useState("");

	const fetchData = () => {
		fetchGlassDrinks(glass).then(res => {
			setDrinks(res || [])
		}).catch(err => {
			setDrinks(null)
			console.error(err);
		});
	}

	const initialFetch = () => {
		fetchGlasses().then(res => {
			setGlassTypes(res)
		}).catch(err => {
			console.error(err);
		});
	}

	useEffect(() => {
		initialFetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		glass && fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [glass]);

	const handleGlassSelect = (e) => {
		setGlass(e.target.value)
	}

	return (
		<div>
			<Filters>
				<InputWrap>
					<select onChange={handleGlassSelect}>
						<option> Select glass type.. </option>
						{glassTypes && glassTypes.map((c, i) => {
							return (
								<option key={i}> {c.strGlass} </option>
							)
						})}
					</select>
				</InputWrap>
			</Filters>
			{drinks == null ? <NoticeMessage message="Select option" /> :
				drinks.length ? <DrinksGrid elements={drinks} /> :
					<NoticeMessage message="No data for given filter" />}
		</div>
	)

}


export default GlassFilter
