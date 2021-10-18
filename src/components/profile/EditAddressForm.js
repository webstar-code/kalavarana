import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux'
import { updateAddress, getAddresses } from '../../actions/address'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import '../../styles/addressform.css'
const EditAddressForm = (props) => {
  const [country, setCountry] = useState(props.country)
  const [addressType, setAddressType] = useState(props.addressType)
  const [pinCode, setPinCode] = useState(props.pinCode)
  const [addressLine1, setAddressLine1] = useState(props.addressLine1)
  const [addressLine2, setAddressLine2] = useState(props.addressLine2)
  const [landmark, setLanmark] = useState(props.landmark)
  const [city, setCity] = useState(props.city)
  const [name, setName] = useState(props.name)
  const [number, setNumber] = useState(props.number)
  const [showFirstForm, setShowFirstForm] = useState(true)
  const [state, setState] = useState(props.state)

  const submitAddress = (e) => {
    e.preventDefault()
    props.updateAddress(props.id, { name, number, country, state, addressType, pinCode, addressLine1, addressLine2, landmark, city }, props.getAddresses)
    setShowFirstForm(true)
    props.setShowForm(false)
  }

  return (
    <div className="add-full" onClick={() => props.setShowForm(false)}>
      {showFirstForm && (<form onClick={(e) => e.stopPropagation()} >
        <h1>Add New Address</h1>
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="FULL NAME"
          variant="outlined"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="MOBILE NUMBER"
          variant="outlined"
          placeholder="Mobile Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}

        />

        <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label"> COUNTRY</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="STATE"
          >
            <option ria-label="None" value="">
            </option>
            <option selected={true} value={'India'}>India</option>
            <option value={'USA'}>USA</option>
            <option value={'Italy'}>Italy</option>
          </Select>
        </FormControl>


        <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">STATE/REGION</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={state}
            onChange={(e) => setState(e.target.value)}
            label="STATE"
          >
            <option ria-label="None" value="">
            </option>
            <option selected={true} value={'Maharashtra'}>Maharashtra</option>
            <option value={'Goa'}>Goa</option>
            <option value={'Gujrat'}>Gujrat</option>
          </Select>
        </FormControl>

        <button onClick={() => setShowFirstForm(false)} className="update-profile-btn" >NEXT</button>
      </form>)}


      {!showFirstForm && (<form onSubmit={submitAddress} onClick={(e) => e.stopPropagation()} className="nextForm" >
        <h1>Add New Address</h1>
        <FormControl variant="outlined" >
          <InputLabel id="demo-simple-select-outlined-label">ADDRESS TYPE</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={addressType}
            onChange={(e) => setAddressType(e.target.value)}
            label="Age"
          >
            <option selected ria-label="None" value="">
              Select
            </option>
            <option selected={true} value={'Home'}>Home</option>
            <option value={'Office'}>Office</option>
            <option value={'Store'}>Store</option>
          </Select>
        </FormControl>

        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="PIN CODE"
          variant="outlined"
          placeholder="PIN CODE"
          onChange={(e) => setPinCode(e.target.value)}
          value={pinCode}
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="FLAT, HOUSE NO., BUILDING, COMPANY,"
          variant="outlined"
          onChange={(e) => setAddressLine1(e.target.value)}
          placeholder="FLAT, HOUSE, BUILDING, COMPANY"
          value={addressLine1}

        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="AREA, COLONY, STREET, SECTOR, VILLAGE"
          variant="outlined"
          placeholder="AREA, COLONY, STREET, SECTOR, VILLAGE"
          onChange={(e) => setAddressLine2(e.target.value)}
          value={addressLine2}
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="LANDMARK"
          variant="outlined"
          placeholder="LANDMARK"
          value={landmark}
          onChange={(e) => setLanmark(e.target.value)}
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="TOWN/CITY"
          variant="outlined"
          placeholder="TOWN/CITY"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />


        <button className="update-profile-btn" type="submit">UPDATE</button>
      </form>)}
    </div>
  )
}

export default connect(null, { updateAddress, getAddresses })(EditAddressForm)
