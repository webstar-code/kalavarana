import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux'
import { updateAddress, getAddresses } from '../../actions/address'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Country, State } from 'country-state-city';


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

  const options = Country.getAllCountries().map((i) => i.name);
  const [states, setStates] = useState([]);

  useEffect(() => {
    // console.log(State.getStatesOfCountry(getCountryCode(country)));
    const countryStates = State.getStatesOfCountry(getCountryCode(country)).map(i => i.name);
    setStates(countryStates);
  }, [country]);

  const getCountryCode = (countryName) => {
    let code = '';
    Country.getAllCountries().forEach((country) => {
      if (country.name === countryName) {
        console.log(country, countryName);
        code = country.isoCode;
      }
    })
    return code;
  }


  const submitForm1 = () => {
    // console.log(country)
    setShowFirstForm(false)
  }
  const submitAddress = (e) => {
    e.preventDefault()
    props.updateAddress(props.id, { name, number, country, state, addressType, pinCode, addressLine1, addressLine2, landmark, city }, props.getAddresses)
    setShowFirstForm(true)
    props.setShowForm(false)
  }

  return (
    <div className="add-full" onClick={() => props.setShowForm(false)}>
      {showFirstForm && (<form onSubmit={submitForm1} onClick={(e) => e.stopPropagation()} >
        <h1>Add New Address</h1>
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="FULL NAME"
          variant="outlined"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required

        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="MOBILE NUMBER"
          variant="outlined"
          placeholder="Mobile Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          required
          type="number"

        />
        <Autocomplete
          autoComplete={false}
          value={country}
          onChange={(event, newValue) => {
            setCountry(newValue);
          }}
          id="controllable-states-demo"
          options={options}
          style={{ width: '100%' }}
          renderInput={(params) => <TextField required {...params} label="Country" variant="outlined" />}
        />

        <Autocomplete
          autoComplete={false}
          id="combo-box-demo"
          value={state}
          onChange={(event, newValue) => {
            setState(newValue);
          }}
          options={states}
          style={{ width: '100%' }}
          renderInput={(params) => <TextField required {...params} label="State" variant="outlined" />}
        />

        <button type="submit" className="update-profile-btn" >NEXT</button>
      </form>)}


      {!showFirstForm && (<form onSubmit={submitAddress} onClick={(e) => e.stopPropagation()} className="nextForm" >
        <h1>Add New Address</h1>
        <FormControl variant="outlined" required>
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
          required
          type="number"
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="FLAT, HOUSE NO., BUILDING, COMPANY,"
          variant="outlined"
          onChange={(e) => setAddressLine1(e.target.value)}
          placeholder="FLAT, HOUSE, BUILDING, COMPANY"
          value={addressLine1}
          required
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="AREA, COLONY, STREET, SECTOR, VILLAGE"
          variant="outlined"
          placeholder="AREA, COLONY, STREET, SECTOR, VILLAGE"
          onChange={(e) => setAddressLine2(e.target.value)}
          value={addressLine2}
          required
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="LANDMARK"
          variant="outlined"
          placeholder="LANDMARK"
          value={landmark}
          onChange={(e) => setLanmark(e.target.value)}
          required
        />
        <TextField
          autoComplete="off"
          id="outlined-basic"
          label="TOWN/CITY"
          variant="outlined"
          placeholder="TOWN/CITY"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required
        />


        <button className="update-profile-btn" type="submit">UPDATE</button>
      </form>)}
    </div>
  )
}

export default connect(null, { updateAddress, getAddresses })(EditAddressForm)
