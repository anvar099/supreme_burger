import classes from './slider.module.css'

import {Swiper, SwiperSlide} from 'swiper/react'
import imgSandwich from '../../../assets/images/hero/sandwich.png'
import imgPizza from '../../../assets/images/hero/pizza.png'
import imgBurger from '../../../assets/images/hero/burger.png'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation} from 'swiper/core'
import SliderBox from './slider-box'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay])
function Slide() {
	const data = [
		{
			img: imgSandwich,
			class: classes.imgSandwich,
			title: 'Breakfas Sendwich',
			text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
			price: '$13',
		},
		{
			img: imgPizza,
			class: classes.imgPizza,
			title: 'Sicilian pizza',
			text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
			price: '$35',
		},
		{
			img: imgBurger,
			class: classes.imgBurger,
			title: 'Chesse Burger',
			text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
			price: '$15',
		},
	]
	let next = document.querySelector('.swiper-button-next')
	console.log(next)

	return (
		<div className={classes.slider}>
			<h2> Popular Recipes</h2>
			<div className={classes.slide}>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					navigation={true}
					loop={true}
					// eslint-disable-next-line react/jsx-no-duplicate-props
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						600: {
							slidesPerView: 2,
							spaceBetween: -40,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: -50,
						},
						1024: {
							slidesPerView: 2,
							spaceBetween: -50,
						},
						1250: {
							slidesPerView: 3,
							spaceBetween: -60,
						},

						1500: {
							slidesPerView: 3,
							spaceBetween: -80,
						},
					}}
					className={classes.mySwiper}
				>
					{data.map((data, idx) => {
						return (
							<SwiperSlide className={classes.prev} key={idx}>
								<SliderBox data={data} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default Slide
