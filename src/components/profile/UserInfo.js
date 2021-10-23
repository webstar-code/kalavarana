import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { message, notify } from '../../actions';
import Msg from '../notification/Msg'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';


const UserInfo = (props) => {
  console.log(props);
  const [countryCode, setCountryCode] = useState('+91')
  const [name, setName] = useState(props.user.name);
  const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);
  const [email, setEmail] = useState(props.user.email);
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true)
  const [isNumber, setIsNumber] = useState(true)
  const [phoneCount, setPhoneCount] = useState();

  useEffect(() => {
    console.log("re render");
  }, [props.user.id])

  const validate = (type, value) => {
    if (type == 'number' && phoneCount != phoneNumber.length) {
      setIsName(false);
    } else {
      setIsName(true);
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
    if (email === '' && name === '' && phoneNumber === '') {
      setIsEmail(false)
      setIsName(false)
      setIsNumber(false)
    }

    validate('name', name);
    validate('email', email);
    validate('number', phoneNumber);

    console.log(phoneNumber);
    if (name && email && phoneNumber && isName && isNumber && isEmail) {
      db.users.doc(props.user.id).update({
        name,
        phoneNumber,
        email
      }).then(() => {
        props.notify("profile updated", false);
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
        <h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
          <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
          Profile Details</h1>
        <div className="info">
          <TextField
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

          {/* <FormControl variant="outlined" >
              <InputLabel id="demo-simple-select-outlined-label">COUNTRY</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                label="Age"
              >
                <option ria-label="None" value="">
                </option>
                <option selected={true} value={'India'}>India</option>
                <option value={'USA'}>USA</option>
                <option value={'Italy'}>Italy</option>
              </Select>
            </FormControl>
            {!isEmail && <p className="text-red-500">Email is required</p>} */}

          {/* </div> */}


          <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber} setPhoneCount={setPhoneCount} containerStyle={{ maxWidth: '350px', marginTop: '40px' }} />

          {!isNumber && <p className="text-red-500">Name is required</p>}

          <button onClick={() => handleUpdate()} className="update-profile-btn bg-primary">Update Info</button>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  console.log(state);
  return { user: state.user?.user }
}
export default connect(mapStateToProps, { notify })(UserInfo)
