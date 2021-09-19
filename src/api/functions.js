import axios from 'axios';

	export const fetchDrinks = (keyword = '') => {
		const config = { mode: 'no-cors' };
		return new Promise((resolve, reject) => {
			axios
				.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`, config)
				// .get(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`, config)
				.then(res => {
					console.log(res.data.drinks);
					resolve(res.data.drinks);
				})
				.catch(err => {
					console.error(err.message);
					reject();
				});
		});
	}


	export const fetchCategories = () => {
		const config = { mode: 'no-cors' };
		return new Promise((resolve, reject) => {
			axios
				.get(`https://thecocktaildb.com/api/json/v1/1/list.php?c=list`, config)
				.then(res => {
					console.log(res.data.drinks);
					resolve(res.data.drinks);
				})
				.catch(err => {
					console.error(err.message);
					reject();
				});
		});
	}
