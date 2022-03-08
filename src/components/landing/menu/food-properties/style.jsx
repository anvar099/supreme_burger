// import Data from './data'
import styled from 'styled-components'
const FoodProperty = styled.div`
	transform: scale(${size => (size ? 1 : 1)});
	max-width: 600px;
	margin: 3px 12%;

	.food-property-card{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	img {
		align-self: center;
		justify-self: center;
		grid-area: img;
	}
	.recommend {
		text-align: center;
		border-radius: 18px;
		font-weight: 600;
		font-size: 9px;
		width: 90px;
		height: 18px;
		line-height: 18px;
		background: #ffc339;
		grid-area: rec;
		margin: 0;
	}
	.food-name {
		grid-area: h3;
		margin-top: 10px;
		font-size: 18px;
		font-weight: 700;
	}
	.cost {
		font-weight: bold;
		font-size: 24px;
		color: #ffc339;
		display: flex;
		justify-content: center;

	}
	.data {
		color: #a4a4a4;
		grid-area: data;
		font-size: 11px;
		max-width: 450px;
	}
	.line {
		max-width: 60px;
		height: 10px;
		border-top: 1px solid #a4a4a4;
	}
	@media screen and (max-width: 900px) {
		margin: 3px auto;
		grid-template-areas:
			'img img img '
			'rec rec p'
			'h3 h3 cost'
			'data data cost';
	}
`
export default FoodProperty
