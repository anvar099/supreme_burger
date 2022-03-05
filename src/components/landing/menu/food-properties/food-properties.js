import FoodProperty from './style.jsx'
import Data from './data.js'
const FoodProperties = numberOfImg => {
	const {imgURL, price, title, description, isRecommended} = Data
	return (
		<>
			<FoodProperty>
				<img
					src={imgURL[numberOfImg.imgUrl]}
					alt="png"
					style={{
						height: '60px',
						width: '60px',
						margin: '20px',
					}}
				/>
				<p className="recommend">{isRecommended}</p>
				<span className="line"></span>
				<h3 className="food-name">{title}</h3>
				<p className="data">{description}</p>
				<div className="cost">${price}</div>
			</FoodProperty>
		</>
	)
}

export default FoodProperties

// import FoodProperty from './style.jsx'
// import data from './data.js'
// const FoodProperties = numberOfImg => {

// 	return (
// 		<>
// 			<FoodProperty>
// 				{data.map(({id, imgURL, price, title, description, isRecommended}) => (
// 					<div key={id} className="foodPropertyRow">
// 						<img
// 							src={imgURL}
// 							alt="png"
// 							style={{
// 								height: '60px',
// 								width: '60px',
// 								margin: '20px',
// 							}}
// 						/>
// 						<p className="recommend">{isRecommended}</p>
// 						<span className="line"></span>
// 						<h3 className="food-name">{title}</h3>
// 						<p className="data">{description}</p>
// 						<div className="cost">${price}</div>
// 					</div>
// 				))}
// 			</FoodProperty>
// 		</>
// 	)
// }

// export default FoodProperties
