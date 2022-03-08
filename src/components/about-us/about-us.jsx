import React, {Component} from 'react'
import {img1, img2, back} from '../../utils/imgExport'
import {AboutAs as About} from './style'

export default class AboutUs extends Component {
	render() {
		return (
			<About id="section_about">
				<h1>About Us</h1>
				<div className="grid">
					<div>
					<p>
						Supreme Döner Kebab from heart of Turkey, made with tradition and decades of experience. Now coming to UK. We have opened our first branch in Uxbridge. Since then we have expanded to two more locations in Mitcham and Kentish Town. More branches coming soon. 
					</p>
					<p>
							Supreme Döner Kebab is the brainchild of Fevzi Güngör. He was born in Turkey grew up in south London. Since young age he worked in his father's coffee shops and many other businesses. When he inherited his father's business it was no more than three shops. Now those three shops have been turned into more than 20 various shops across London: Coffee Shops, Restaurants, Fish and Chips and Kebab Shop etc.
  						
					</p>
					<p>
						Fevzi Güngör's experience of a lifetime in this field combined with the best taste of Turkey  Supreme Döner Kebab is ready to take over the UK.
					</p>
					</div>
					
					<div className="imgs">
						<img src={img1} alt="Item" />
						<img src={img2} alt="Item" />
					</div>
					<img className="absolute" src={back} alt="" />
				</div>
			</About>
		)
	}
}
