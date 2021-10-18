import React, { useState, useEffect } from 'react'
import ProfileNavigation from './ProfileNavigation'
import Header from '../Header'
import { connect } from 'react-redux'
import { getAddresses } from '../../actions/address'
import AddressCard from './AddressCard'
import AddIcon from '@material-ui/icons/Add';
import AddressForm from './AddressForm';
import Msg from '../notification/Msg'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Adress = (props) => {
	const [showForm, setShowForm] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const getActiveAdd = (addIndex) => {
		setActiveIndex(addIndex)
	}

	return (
		<>
			<Header />
			<Msg />
			<div className="profile-page">
				<ProfileNavigation />
				<div className="address justify-start items-start md:justify-center md:items-start ">
					<h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
						<span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
						My Address</h1>
					{
						props.addresses.map((address, i) => (
							<AddressCard
								key={i} getActiveAdd={getActiveAdd}
								i={i}
								address={address}
								style={i === activeIndex ? { border: '2px solid #000' } : null} />
						))
					}
					<div className="w-80 h-40 mt-4 flex flex-col px-2 items-center justify-center cursor-pointer 
					rounded-md border-dashed border hover:border-primary hover:scale-110"
						onClick={() => setShowForm(true)}>
						<div className="add-icon">
							<AddIcon className="icon-add" />
						</div>
						<h3>Add New Address</h3>
					</div>
				</div>
			</div>
			{showForm && <AddressForm setShowForm={setShowForm} />}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		addresses: state.addresses,
		userId: state.user?.user?.userId,
	}
}

export default connect(mapStateToProps, { getAddresses })(Adress)
