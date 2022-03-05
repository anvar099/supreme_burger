import React, {useState} from 'react'
import './Styles.css'
import data from '../../mock/locationData'
import {MdLocationPin} from 'react-icons/md'
import LocationCard from './locationCard/locationCard'

const OurBranches = () => {
	const [active, setActive] = useState(4)
	return (
		<>
			<div className="branchContainer">
				<div className="branchTitle">Our Branches</div>
				<div className="branchContent">
					<div className="branchRow">
						<div className="branchColumn branchCol">
							{data.slice(3, 8).map(({id, title, location}) => (
								<div key={id}>
									<button
										onClick={() => setActive(id)}
										className="branchButton"
									>
										<div>
											<MdLocationPin className="branchIcon" />
										</div>
										<div>
											<div className="branchBtnTitle">{title}</div>
											<div className="branchBtnTitleMini">{location}</div>
										</div>
									</button>
								</div>
							))}
						</div>
						<div className="branchColumn branchCol">
							{data.slice(8, 12).map(({id, title, location}) => (
								<div key={id}>
									<button
										onClick={() => setActive(id)}
										className="branchButton"
									>
										<div>
											<MdLocationPin className="branchIcon" />
										</div>
										<div>
											<div className="branchBtnTitle">{title}</div>
											<div className="branchBtnTitleMini">{location}</div>
										</div>
									</button>
								</div>
							))}
						</div>
						<div className="branchColumn branchColAddress">
							<LocationCard id={active} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OurBranches
