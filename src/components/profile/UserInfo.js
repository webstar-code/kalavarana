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

const UserInfo = ({user}) => {
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);

  const [country, setCountry] = useState('United Arab Emirates')

  const handleUpdate = () => {
    db.users.doc(user.id).update({
      name,
      phoneNumber,
      email
    })
  }

  return (
    <div className="user-info">
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
          value={user?.name}
        />
        <div className="email-country" style={{ marginTop: '40px' }}>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="EMAIL ADDRESS"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={user?.email}
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
          value={user?.phoneNumber}
        />
        <button onClick={() => handleUpdate()} className="update-profile-btn bg-primary">Update Info</button>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return { user: state.user?.user }
}
export default connect(mapStateToProps, {})(UserInfo)
