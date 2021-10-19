import React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { message, notify } from '../../actions';
import Msg from '../notification/Msg'

const UserInfo = ({ user, notify }) => {
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true)
  const [isNumber, setIsNumber] = useState(true)
  const [country, setCountry] = useState('United Arab Emirates')

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
      db.users.doc(user.id).update({
        name,
        phoneNumber,
        email
      }).then(() => {
        console.log("user updated")
        notify("profile updated", false);
        // message("profile updated");
      }).catch((err) => {

        console.log(err);
      })
    }
  }

  return (
    <>
      <Msg />
      <div className="w-full md:w-4/6 py-12 md:px-12 flex flex-col items-center justify-center ">
        <h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
          <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
          Profile Details</h1>
        <div className="info">
          <TextField
            style={{ marginTop: '40px' }}
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

          <div className="email-country" style={{ marginTop: '40px' }}>
            <TextField
              autoComplete="off"
              id="outlined-basic"
              label="EMAIL ADDRESS"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              style={{ marginRight: '20px' }}
            />

            <FormControl variant="outlined" >
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
            {!isEmail && <p className="text-red-500">Email is required</p>}

          </div>

          <TextField
            style={{ marginTop: '40px' }}
            autoComplete="off"
            id="outlined-basic"
            label="PHONE NUMBER"
            variant="outlined"
            onChange={(e) => {
              setPhoneNumber(e.target.value)
            }}
            value={phoneNumber}
          />
          {!isNumber && <p className="text-red-500">Name is required</p>}

          <button onClick={() => handleUpdate()} className="update-profile-btn bg-primary">Update Info</button>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return { user: state.user?.user }
}
export default connect(mapStateToProps, { notify })(UserInfo)
