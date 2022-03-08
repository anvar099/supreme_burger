import React, {useEffect, useState} from 'react'
import './Styles.css'
import data from '../../../mock/locationData'

const AddressCard = ({id}) => {
	const [card, setCard] = useState({})
	useEffect(() => {
		setCard(data.slice(3, 12).filter(({id: idx}) => id === idx)[0])
	}, [id])
	return (
		<div className="addressContainer">
			<div key={card?.id}>
				<img src={card?.img} className="addressImg" alt="img" />
				<div className="addressTitle">Address</div>
				<div className="addressSubtitle">{card?.locationCity}</div>
				<div className="addressTitle">Call</div>
				<div className="addressSubtitle">{card?.phoneNumber}</div>
				<div>
					<div className="addressTitle1">Working Hours</div>
					<div className="addressSubtitle">
						<div>Mon 11:00am - 11:00pm</div>
						<div>Tue 11:00am - 11:00pm</div>
						<div>Wed 11:00am - 11:00pm</div>
						<div>Thu 11:00am - 11:00pm</div>
						<div>Fri 11:00am - 11:00pm</div>
						<div>Sat 11:00am - 11:00pm</div>
						<div>Sun 12:00am - 10:00pm</div>
					</div>
				</div>
				<div className="addressBtn">
					<a href={card?.linkLocation} className="addressBtnLink">
						View in map
					</a>
				</div>
			</div>
		</div>
	)
}

export default AddressCard
