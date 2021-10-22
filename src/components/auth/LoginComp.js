import React, { useEffect, useState } from 'react'
import './inputstyle.css'
import firebase from '../../firebase'
import { connect } from 'react-redux'
import { sigin, submitOtp, login } from '../../actions'
import { COLLAGE, KALAVARANA_LOGO } from '../../assetsKalavarna';
import Msg from '../notification/Msg'
import TextField from '@material-ui/core/TextField';
import LoadingSpinner from '../LoadingSpinner'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const LoginComp = (props) => {
  const [otp, setOtp] = useState('')
  const [number, setNumber] = useState('')
  const [isNum, setIsNum] = useState(true);
  const [countryCode, setCountryCode] = useState('+91')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false);
  }, [props.noti.err]);

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
    if (!number.match(/^\d{10}$/) || number === '' || countryCode === '') {
      setIsNum(false)
    }
    else {
      setIsNum(true)
      setIsLoading(true)
      setUpRecaptcha();
      props.login({number, countryCode});
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
          <h1 className="text-2xl font-bold py-12 text-primary">Welcome, to kalavarana</h1>
          <div className="flex">

              <Select
              className="border border-r-0 px-2 h-14 rounded-sm border-gray-200"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="+91">
                  {countryCode}
                </MenuItem>
                <MenuItem value={+61}>+61</MenuItem>
                <MenuItem value={+21}>+21</MenuItem>
                <MenuItem value={+144}>+144</MenuItem>
              </Select>
              {/* <FormHelperText>Without label</FormHelperText> */}

            <TextField
              error={!isNum ? true : false}
              helperText={!isNum ? 'Please enter a vaild number' : ''}
              autoComplete="off"
              id="outlined-basic"
              label="PHONE"
              variant="outlined"
              color={!isNum ? "secondary" : 'primary'}
              onChange={(e) => {
                setNumber(e.target.value)
              }}
              placeholder="PHONE"
              className={` border-0 ${!isNum && 'border border-red-500'}`}
            />
          </div>

          {!isNum && <p className="text-red-500">Number is required</p>}


          {!props.showOtp && <button type="submit" className="w-full sm:w-1/2 flex justify-center items-center py-2 px-3 my-2 text-white mt-8 bg-primary">
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
            <span className="h-full text-black cursor-pointer" onClick={() => props.login(number)}>RESEND</span>
          </div>
          <button type="submit" className="w-full sm:w-1/2 flex justify-center items-center py-2 px-3 my-2 text-white mt-8 bg-primary">
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
    noti: state.notification
  }
}
export default connect(mapStateToProps, { login, sigin, submitOtp })(LoginComp)
