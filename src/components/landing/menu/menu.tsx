import {FC} from 'react'
import Categories from './categories/categories'
import FoodListGroup from './food-list-group'
import MenuGallery from './menu-gallery/menu-gallery'
import './style.css'
export interface MenuProps {}

const Menu: FC<MenuProps> = () => {
	return (
		<div className="menu" id="section_menu">
			<Categories />
			<FoodListGroup />
			<MenuGallery />
		</div>
	)
}

export default Menu
