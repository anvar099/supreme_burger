import img1 from '../../../../assets/images/food/food-category-imgs/001-burger.svg'
// import img2 from '../../../../assets/images/food/food-category-imgs/002-pizza.svg'
// import img3 from '../../../../assets/images/food/food-category-imgs/003-doughnut.svg'
// import img4 from '../../../../assets/images/food/food-category-imgs/004-hot dog.svg'
// import img5 from '../../../../assets/images/food/food-category-imgs/007-chicken thigh.svg'


import React, {useState} from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import data from '../../../mock/menuApi.json'
import FoodPropertyCard from '../food-properties/food-properties'

const Categories = () => {
    
		const [active, setActive] = useState(data?.menuGoods?.[0])
    return (
			<div className="menu_container">
				<h1 className="menu_head">Menu</h1>				
					<div className="categories">
						{data.menuGoods.map((menugoods, i) => {
							return (
								<div key={i} className="menu-content">
									<div className="section" key={menugoods?.keyId}>
										<div
											onClick={() => setActive(menugoods)}
										>
											<img src={img1} alt="icon" />
											<p>{menugoods?.title}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
		
				<FoodPropertyCard category={active} />
			</div>
		)

}
export default Categories;
