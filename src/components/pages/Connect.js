import React, { useState } from 'react'
import '../../styles/connect.css'
import { CONNECT, CHAT, PHONEICON, WATSAPP } from '../../assets'
import TextField from '@material-ui/core/TextField';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Home from '@material-ui/icons/Store';
import Accordain from '../Accordian'
import { firestore } from '../../firebase'
import { connect } from 'react-redux'
import { notify } from '../../actions'
import { history } from '../../history';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';

const Enquiry = (props) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [reason, setReason] = useState('')
	const [phoneCount, setPhoneCount] = useState();

	const saveData = (e) => {
		e.preventDefault()
		const ref = firestore.collection('ENQUIRIES').doc();
		ref.set({
			id: ref.id,
			name,
			email,
			phoneNumber,
			reason,
		}).then(() => {
			setName('')
			setEmail('')
			setPhoneNumber('')
			setReason('')
			props.notify("Enquiry sent")
		}).catch(err => {
			console.log(err);
			history.push('/Error');
		})
	}


	return (
		<>
			<div className="connect-area">
				<div className="connect">
					<div className="connect-banner">
						<div className="img-container">
							<img src={CONNECT} alt="" />
							<h1 className="img-text">
								LETS CONNECT
							</h1>
						</div>
						<div className="connect-from">
							<form onSubmit={saveData}>
								<TextField
									required
									value={name}
									autoComplete="off" id="outlined-basic" label="NAME" variant="outlined"
									onChange={(e) => setName(e.target.value)}
								/>
								<TextField
									required
									value={email}
									autoComplete="off" id="outlined-basic" label="EMAIL" variant="outlined"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<PhoneNumberInput />

								{/* <TextField
                                required

                                    value={phoneNumber}
                                    autoComplete="off" id="outlined-basic" label="PHONE" variant="outlined"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                /> */}
								<TextField
									required
									value={reason}
									autoComplete="off" id="outlined-basic" label="CONTACT REASON" variant="outlined"
									onChange={(e) => setReason(e.target.value)}
								/>
								<button type="submit" className="bg-primary">Submit</button>
							</form>
						</div>
					</div>
					<div className="faq-section">
						<div className="faq-title">
							<h1 className="text-3xl font-bold">Support & FAQ</h1>
							<div className="line"></div>
						</div>
						<div className="connect-detail">
							<img src={CHAT} alt="" />
							<div className="detail-des">
								<h1 className="text-2xl py-6 font-bold">We are always here to help you</h1>
								<p>If you face any problem with our service feel free to contact us directly</p>
								<div className="email">
									<MailOutlineIcon />
									<a href="mailto:info@kalavarana.com">info@kalavarana.com</a>
								</div>
								<div className="mobile">
									<img src={PHONEICON} alt="" />
									<p>+91 9108784301</p>
								</div>
								<div className="email">
									<Home />
									<p>Kalavarana,#147,tgr argade,Bethel nagar layout,<br />kodigehalli main road,K.r.puram, bangalore 36</p>
								</div>
								<a href="https://wa.me/917066397333" target="_blank"> <button> <img src={WATSAPP} alt="" /> WhatsApp us</button></a>
							</div>
						</div>
					</div>
					<div className="faq-acc">
						<h1 className="text-3xl font-bold">FAQs</h1>
						<div className="acc-area">
							<Accordain
								title="Lorem ipsum dolor sit amet?"
								accItems={['Your friend gets cashback worth 100 on placing their first successful order']}
							/>
							<Accordain
								title="Lorem ipsum dolor sit amet?"
								accItems={['Your friend gets cashback worth 100 on placing their first successful order']}
							/>
							<Accordain
								title="Lorem ipsum dolor sit amet?"
								accItems={['Your friend gets cashback worth 100 on placing their first successful order']}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return { user: state?.user?.user };
}

export default connect(mapStateToProps, { notify })(Enquiry);
