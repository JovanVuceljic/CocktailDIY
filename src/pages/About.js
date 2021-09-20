import React from 'react';

const About = () => {

	return (
		<div>
			<h1>Project details</h1>

			<h2>API</h2>
			<p>Using Free JSON API from <a target="_blank" href="https://www.thecocktaildb.com/" rel="noreferrer">TheCocktailDB</a> which is an open, crowd-sourced database of drinks and cocktails from around the world. </p>

			<h2>Technologies</h2>
			<ul>
				<li>Node.js</li>
				<li>React.js with <a target="_blank" href="https://create-react-app.dev/" rel="noreferrer">Create React App</a></li>
			</ul>

			<h2>Additional npm packages</h2>
			<ul>
				<li>axios</li>
				<li>react</li>
				<li>react-dom</li>
				<li>react-router-dom</li>
				<li>react-scripts</li>
				<li>styled-components</li>
				<li>web-vitals</li>
			</ul>

		</div>
	)

}

export default About
