import FoodProperties from './food-properties/food-properties'
const FoodListGroup = () => {
	return (
		<div className="food-container">
			<FoodProperties imgUrl={0} />
			<FoodProperties imgUrl={1} />
			<FoodProperties imgUrl={2} />
			<FoodProperties imgUrl={3} />
			<FoodProperties imgUrl={4} />
			<FoodProperties imgUrl={5} />
			<FoodProperties imgUrl={6} />
			<FoodProperties imgUrl={7} />
		</div>
	)
}

export default FoodListGroup
