import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './inputstyle.css'
import '../../styles/auth.css'
import { connect } from 'react-redux'
import { sigin } from '../../actions'
import Msg from '../notification/Msg'
import TextField from '@material-ui/core/TextField';
import { COLLAGE, KALAVARANA_LOGO } from '../../assetsKalavarna'
import { useLocation } from 'react-router-dom';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import Loader from "react-loader-spinner";
import Loading from '../Loading';

const SignupComp = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState(props.mobNo ? props.mobNo : '+917427854917')
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true)
  const [isNumber, setIsNumber] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  // const [validate,setValidate]=useState({isName:true,isNumber:true,isEmail:true,hasOtp:true})
  const location = useLocation();
  console.log(location.state);

  console.log(props.mobNo)
  const validate = (type, value) => {
    if (type == 'number' && !value.match(/^\d{10}$/)) {
      setIsNumber(false);
    } else {
      setIsNumber(true);
    }

    if (type == 'email' && !value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }

    if (type == 'name' && !value.match(/^[a-zA-Z]+$/)) {
      setIsName(false);
    } else {
      setIsName(true);
    }

  }

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    // check validation of email, name, number
    // if (email === '' && name === '' && number === '') {
    //   setIsEmail(false)
    //   setIsName(false)
    //   setIsNumber(false)
    // }

    // validate('email', email);
    // validate('name', name);
    // validate('number', number);

    // if (name && email && number && isName && isNumber && isEmail) {
    //   console.log("all good");
    //   setIsName(true)
    //   setIsNumber(true)
    //   setIsEmail(true)
    //   setIsLoading(true)
    //   props.sigin(number, email, name, location.state.uid)
    // }
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

          <h1 className="text-2xl font-bold flex items-center py-10 text-primary"><AiOutlineArrowLeft className="text-xl mr-4" />Just a small step,</h1>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="EMAIL"
            label="EMAIL"
            variant="outlined"
            autoComplete="off"
            className={` p-2 my-2 outline-none border border-gray w-full ${!isEmail && 'border border-red-500'}`} />
          {!isEmail && <p className="text-red-500">Email is required</p>}

          <TextField
            style={{ marginTop: '10px' }}
            onChange={(e) => {
              setName(e.target.value)
            }}
            label="NAME"
            variant="outlined"
            placeholder="NAME"
            className={`p-2 my-2 outline-none border border-gray w-full ${!isName && 'border border-red-500'}`} />
          {!isName && <p className="text-red-500">Name is required</p>}

          {/* <TextField
            style={{ marginTop: '10px' }}
            disabled
            defaultValue={props.mobNo}
            // value={props.mobNo ? props.mobNo : number}
            variant="outlined"
            label="PHONE"
            type="text"
            placeholder="PHONE"
            className={`p-2 my-2 outline-none border border-gray w-full ${!isNumber && 'border border-red-500'}`} /> */}

          <PhoneNumberInput value={number}
            disabled
          />
          <button type="submit" className="w-full sm:w-1/2 flex justify-center items-center py-2 px-3 my-2 text-white mt-8 bg-primary">
            {isLoading ? <Loading /> : 'Proceed'}</button>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { user: state?.user?.user, mobNo: state.mobNo.mobNo }
}
export default connect(mapStateToProps, { sigin })(SignupComp)
