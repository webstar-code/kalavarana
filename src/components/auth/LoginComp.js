import React, { useState } from 'react'
import './inputstyle.css'
import firebase from '../../firebase'
import { connect } from 'react-redux'
import { sigin, submitOtp } from '../../actions'
import sideImg from '../../assets/img/login.png'
// import loginLogo from '../../assetsKalavarna/logos/kalavarana-logo.png';
import { COLLAGE, KALAVARANA_LOGO, PAINTING1, PAINTING2, PAINTING3 } from '../../assetsKalavarna';
import Msg from '../notification/Msg'
import TextField from '@material-ui/core/TextField';
import LoadingSpinner from '../LoadingSpinner'

const LoginComp = (props) => {
  const [number, setNumber] = useState('')
  const [isNumber, setIsNumber] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [sigin, setSigIn] = useState(props.showOtp ? true : false)
  const [otp, setOtp] = useState('')
  const [hasNum, setHasNum] = useState(true);

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    if (!number.match(/^\d{10}$/) || number === '') {
      setHasNum(false)
      setIsLoading(false)
    }
    else {
      setHasNum(true)
      // setIsNumber(true)
      setIsLoading(true)
      setUpRecaptcha();
      props.sigin(number)
    }
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    props.submitOtp(otp)
    setIsLoading(false)
    setSigIn(true)
  };


  return (
    <div className="auth-screen mt-8 flex items-center justify-center w-11/12 h-11/12 my-auto mx-auto px-20">
      {/*notifation*/}
      <Msg />
      <div className="login-img flex w-1/2 h-full">
        <img src={COLLAGE} alt="loginImg" className="w-full h-full" />
      </div>

      <div className="welcome-screen px-32 flex flex-col items-center justify-evenly text-sm rounded w-1/2 h-full">
        <form onSubmit={onSignInSubmit} className="flex flex-col text-sm w-full">
          <img src={KALAVARANA_LOGO} alt="ANA" style={{ width: '125px', marginLeft: '-8px' }} />
          <h1 className="text-2xl font-bold py-12">Welcome, to kalavarana</h1>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="PHONE"
            variant="outlined"
            color={!hasNum ? "secondary" : 'primary'}
            onChange={(e) => {
              setNumber(e.target.value)
              setHasNum(true)
            }}
            placeholder="PHONE"
            className={`${!hasNum && 'border border-red-500'}`}
          />
          {/* <input 
           onChange={(e)=>{
             setNumber(e.target.value)
             setHasNum(true)
            }}
           type="text" 
           placeholder="PHONE"  
           className={`p-2 my-2 outline-none border border-gray w-full ${!hasNum&& 'border border-red-500'}`}/> */}
          {!hasNum && <p className="text-red-500">Number is required</p>}
          {!props.showOtp && <button type="submit" className="auth-btn flex items-center justify-center w-1/2 mt-8 py-2 px-3 my-2 text-white" style={{ background: '#08263F' }}>
            {isLoading ? <LoadingSpinner /> : 'Proceed'}</button>}
          <div id="recaptcha-container"></div>
        </form>

        {props.showOtp && (<form onSubmit={onSubmitOtp} className="flex flex-col items-start justify-evenly text-sm rounded w-full">
          <div className="otp-input pr-4 flex items-center justify-between my-2 outline-none border border-gray w-full">
            <TextField
              autoComplete="off"
              id="outlined-basic"
              label="OTP"
              variant="outlined"
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
            />
            {/* <input 
           onChange={(e)=>setOtp(e.target.value)}
           type="number" 
           placeholder="OTP"  
           className="h-full outline-none w-5/6" /> */}
            <span className="h-full text-black">RESEND</span>
          </div>
          <button type="submit" className="auth-btn py-2 px-6 my-2 text-white" style={{ background: '#08263F' }}> {sigin ? <LoadingSpinner /> : 'Login'}</button>
          <div id="recaptcha-container"></div>
        </form>)}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    msg: state.notification,
    mobNo: state.mobNo.mobNo,
    showOtp: state.showOtp.showOtp
  }
}
export default connect(mapStateToProps, { sigin, submitOtp })(LoginComp)
