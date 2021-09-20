import axios from 'axios';

const API_URL = "https://thecocktaildb.com/api/json/v1/1/";
const config = { mode: 'no-cors' };


export const fetchIngridientDrinks = (ingridient = '') => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${API_URL}filter.php?i=${ingridient}`, config)
			.then(res => {
				resolve(res.data.drinks);
			})
			.catch(err => {
				console.error(err.message);
				reject();
			});
	});
}

export const fetchGlassDrinks = (glass = '') => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${API_URL}filter.php?g=${glass}`, config)
			.then(res => {
				resolve(res.data.drinks);
			})
			.catch(err => {
				console.error(err.message);
				reject();
			});
	});
}

export const fetchGlasses = () => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${API_URL}list.php?g=list`, config)
			.then(res => {
				resolve(res.data.drinks);
			})
			.catch(err => {
				console.error(err.message);
				reject();
			});
	});
}

export const fetchIngridients = () => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${API_URL}list.php?i=list`, config)
			.then(res => {
				resolve(res.data.drinks);
			})
			.catch(err => {
				console.error(err.message);
				reject();
			});
	});
}

export const fetchDrink = (id) => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${API_URL}lookup.php?i=${id}`, config)
			.then(res => {
				resolve(res.data.drinks);
			})
			.catch(err => {
				console.error(err.message);
				reject();
			});
	});
}

