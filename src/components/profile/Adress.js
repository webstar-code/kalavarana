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
import { history } from '../../history'

const Adress = (props) => {
	const [showForm, setShowForm] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const getActiveAdd = (addIndex) => {
		setActiveIndex(addIndex)
	}

	return (
		<>
			<Msg />
			<div className="profile-page">
				<ProfileNavigation />
				<div className="w-full md:w-3/5 py-12 px-6 md:px-12 flex flex-col justify-center ml-auto ">

					<div className="md:mr-auto">
						<h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
							<span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
							My Address</h1>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center">
							{
								props.addresses.map((address, i) => (
									<AddressCard
										key={i} getActiveAdd={getActiveAdd}
										i={i}
										address={address}
									/>
								))
							}
							<div className="w-80 h-40 mt-4 flex flex-col p-2 items-center justify-center cursor-pointer 
					rounded-md border-dashed border border-black hover:border-primary hover:scale-110"
								onClick={() => {
									if(props.userId) {
										setShowForm(true);
									}else{
										history.push('/login');
									}
								}}>
								<div className="add-icon self-center">
									<AddIcon className="icon-add" />
								</div>
								<h3 className="self-center">Add New Address</h3>
							</div>
						</div>


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
