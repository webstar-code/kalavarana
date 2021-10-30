import React, { useEffect, useState } from 'react'
import './inputstyle.css'
import firebase from '../../firebase'
import { connect } from 'react-redux'
import { sigin, submitOtp, login } from '../../actions'
import { COLLAGE, KALAVARANA_LOGO } from '../../assetsKalavarna';
import Msg from '../notification/Msg'
import TextField from '@material-ui/core/TextField';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import Loader from "react-loader-spinner";
import { history } from '../../history'

const LoginComp = (props) => {
  const [otp, setOtp] = useState('')
  const [number, setNumber] = useState('')
  const [isNum, setIsNum] = useState(true);
  const [countryCode, setCountryCode] = useState('+91')
  const [isLoading, setIsLoading] = useState(false)
  const [phoneCount, setPhoneCount] = useState();

  useEffect(() => {
    setIsLoading(false);
  }, [props.noti.err]);

  useEffect(() => {
    if(props.user.id) {
      history.goBack();
    }
  }, [props.user.id]);

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
  
    // console.log(isNum);
    if (phoneCount != number.length) {
      setIsNum(false);
    } else {
      setIsNum(true)
      setIsLoading(true)
      setUpRecaptcha();
      props.login({ number: '+' + number, countryCode });
    }
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    props.submitOtp(otp)
  };

  return (
    <div className="mt-8 flex items-center justify-center w-11/12 h-11/12 mx-auto px-4 sm:px-20">
      <Msg />

      <div className="w-1/2 h-full hidden md:flex">
        <img src={COLLAGE} alt="loginImg" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center justify-evenly text-sm rounded w-full md:w-1/2 h-full px-4 sm:px-8 lg:px-32">
        <form onSubmit={onSignInSubmit} className="flex flex-col text-sm w-full">

          <img src={KALAVARANA_LOGO} alt="ANA" style={{ width: '125px' }} className="mx-auto sm:-ml-2" />
          <h1 className="text-2xl font-bold py-12 text-primary">Welcome to Kalavarana</h1>

          <PhoneNumberInput value={number} setValue={setNumber} setPhoneCount={setPhoneCount}containerStyle={{ maxWidth: '350px'}}/>

          {!isNum && <p className="text-red-500">Number is required</p>}


          {!props.showOtp && <button type="submit" className="w-full md:w-32 flex justify-center items-center py-2 px-3 my-2 text-white mt-8 bg-primary">
            {isLoading ? <Loader type="TailSpin" color="#fff" height={15} width={15} /> : 'Proceed'}</button>}
          <div id="recaptcha-container"></div>

        </form>

        {props.showOtp && (<form onSubmit={onSubmitOtp} className="flex flex-col items-start justify-evenly text-sm rounded w-full">
          <div className="otp-input pr-4 flex items-center justify-between my-2 outline-none border border-gray" style={{width: '350px'}}>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              label="OTP"
              variant="outlined"
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
              style={{maxWidth: '350px'}}
            />
            <span className="h-full text-black cursor-pointer" onClick={() => props.login(number)}>RESEND</span>
          </div>
          <button type="submit" className="w-full md:w-32 flex justify-center items-center py-2 px-3 my-2 text-white mt-8 bg-primary">
            {/* {sigin ? <LoadingSpinner /> : 'Login'} */}
            Login
          </button>
          <div id="recaptcha-container"></div>
        </form>)}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    msg: state.notification,
    mobNo: state.mobNo.mobNo,
    showOtp: state.showOtp.showOtp,
    noti: state.notification,
    user: state.user.user
  }
}
export default connect(mapStateToProps, { login, sigin, submitOtp })(LoginComp)
