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

const UserInfo = (props) => {
  console.log(props);
  const [countryCode, setCountryCode] = useState('+91')
  const [name, setName] = useState(props.user.name);
  const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);
  const [email, setEmail] = useState(props.user.email);
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true)
  const [isNumber, setIsNumber] = useState(true)

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
  const handleUpdate = () => {
    if (email === '' && name === '' && phoneNumber === '') {
      setIsEmail(false)
      setIsName(false)
      setIsNumber(false)
    }

    validate('name', name);
    validate('email', email);
    // validate('number', phoneNumber);

    console.log(phoneNumber);
    if (name && email && phoneNumber && isName && isNumber && isEmail) {
      db.users.doc(props.user.id).update({
        name,
        phoneNumber,
        email
      }).then(() => {
        console.log("props.user updated")
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

          <div className="flex" style={{ marginTop: '40px', maxWidth: '350px' }}
          >
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
              error={!isNumber ? true : false}
              helperText={!isNumber ? 'Please enter a vaild number' : ''}
              autoComplete="off"
              id="outlined-basic"
              label="PHONE"
              variant="outlined"
              color={!isNumber ? "secondary" : 'primary'}
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}
              value={phoneNumber}
              placeholder="PHONE NUMBER"
              className={` border-0 ${!isNumber && 'border border-red-500'}`}
            />
          </div>
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
