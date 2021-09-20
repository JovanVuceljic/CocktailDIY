import React from 'react';
import styled from 'styled-components';

const ImageWrap = styled.div`
	width: 100%;
`;
const Home = () => {

	return (
		<div>
			<ImageWrap>
				<img src="/cocktail.jpg" alt="Cocktail header"/>
			</ImageWrap>
			<h1>Cocktails</h1>

			<p>A cocktail is an alcoholic mixed drink. Most commonly, cocktails are either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. Cocktails vary widely across regions of the world, and many websites publish both original recipes and their own interpretations of older and more famous cocktails.</p>
		
			<p>The origins of the word cocktail have been debated. The first written mention of cocktail as a beverage appeared in The Farmers Cabinet, 1803 in the United States. The first definition of a cocktail as an alcoholic beverage appeared three years later in The Balance and Columbian Repository (Hudson, New York) May 13, 1806. Traditionally, cocktail ingredients included spirits, sugar, water and bitters, however, this definition evolved throughout the 1800s, to include the addition of a liqueur.</p>

			<p>In 1862 Jerry Thomas published a bartenders’ guide called How to Mix Drinks; or, The Bon Vivant's Companion which included 10 cocktail recipes using bitters to differentiate from other drinks such as punches and cobblers. Cocktails continued to evolve and gain popularity throughout the 1900s, and in 1917 the term "cocktail party" was coined by Mrs. Julius S. Walsh Jr. of St. Louis, Missouri. With wine and beer being less available during the Prohibition in the United States (1920–1933), liquor-based cocktails became more popular due to accessibility, followed by a decline in popularity during the late 1960s. The early to mid-2000s saw the rise of cocktail culture through the style of mixology which mixes traditional cocktails and other novel ingredients.</p>

			<p>In the modern world and the Information Age, cocktail recipes are widely shared online on websites like Allrecipes.com and Food.com. Cocktails and restaurants that serve them are frequently covered and reviewed in tourism magazines and guides. Some cocktails, such as the Mojito, Manhattan, and Martini have become both staples in most restaurants and pop culture phenomena, martinis specifically being associated with James Bond due to the Goldfinger phrase "shaken, not stirred".</p>
			
			<p><a target="_blank" href="https://en.wikipedia.org/wiki/Cocktail" rel="noreferrer">Read more..</a></p>
		</div>
	)

}

export default Home
