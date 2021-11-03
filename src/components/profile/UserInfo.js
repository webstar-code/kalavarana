import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { notify, userStateChanged } from '../../actions';
import Msg from '../notification/Msg'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import LoadingSpinner from '../LoadingSpinner'

const UserInfo = (props) => {
  // console.log(props);

  const [name, setName] = useState(props.user.name);
  const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);
  const [email, setEmail] = useState(props.user.email);
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true)
  const [isNumber, setIsNumber] = useState(true)
  const [phoneCount, setPhoneCount] = useState(0);

  useEffect(() => {
    setName(props.user.name)
    setEmail(props.user.email)
    setPhoneNumber(props.user.phoneNumber);
  }, [props.user.id])

  const validate = (type, value) => {
    if (type == 'number' && phoneCount != phoneNumber.length) {
      console.log(phoneCount, phoneNumber.length);
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
  const handleUpdate = () => {
    console.log("update");
    if (email === '' && name === '' && phoneNumber === '') {
      setIsEmail(false)
      setIsName(false)
      setIsNumber(false)
    }


    // if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    //   setIsEmail(false);
    // } else {
    //   setIsEmail(true);
    // }
    // if (!name.match(/^[a-zA-Z]+$/)) {
    //   setIsName(false);
    // } else {
    //   setIsName(true);
    // }

    // validate('name', name);
    // validate('email', email);
    // validate('number', phoneNumber);
    console.log(isNumber)
    if (phoneCount != phoneNumber.length) {
      setIsNumber(false)
    } else {
      setIsNumber(true)
      db.users.doc(props.user.id).update({
        name,
        phoneNumber,
        email
      }).then(() => {
        props.notify("profile updated", false);
        db.users.doc(props.user.id).get().then((doc) =>{
          props.userStateChanged(doc.data());
        })
        // message("profile updated");
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  return (
    <>
      <Msg />
      <div className="w-full md:w-3/5 py-12 px-6 md:px-12 flex flex-col justify-center ml-auto ">
        {props.user.id ?
          <>
            <h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
              <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
              Profile Details</h1>
            <div className="info">
              <TextField
                required
                style={{ marginTop: '40px', maxWidth: '350px' }}
                autoComplete="off"
                id="outlined-basic"
                label="FULL NAME"
                variant="outlined"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
              />
              {!isName && <p className="text-red-500">Name is required</p>}

              {/* <div className="" style={{ marginTop: '40px' }}> */}
              <TextField
                required
                style={{ marginTop: '40px', maxWidth: '350px' }}
                autoComplete="off"
                id="outlined-basic"
                label="EMAIL ADDRESS"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
              />
              <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber} setPhoneCount={setPhoneCount} containerStyle={{ maxWidth: '350px', marginTop: '40px' }} />

              {!isNumber && <p className="text-red-500">Number is required</p>}

              <button onClick={() => handleUpdate()} className="update-profile-btn bg-primary">Update Info</button>
            </div>
          </>
          :
          <>
            <LoadingSpinner />
          </>}
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  // console.log(state);
  return { user: state.user?.user }
}
export default connect(mapStateToProps, { notify, userStateChanged })(UserInfo)
