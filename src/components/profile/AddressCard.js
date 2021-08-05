import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'
import EditAddressForm from './EditAddressForm';
import {deleteAdress} from '../../actions/address'
import EditIcon from '@material-ui/icons/Edit';
import WarningIcon from '@material-ui/icons/Warning';
const AddressCard = (props) => {

  const [showModal,setShowModal]=useState(false)
 const [showForm,setShowForm]=useState(false)
    const handleDelete=()=>{
      props.deleteAdress(props?.add?.id)
      setShowModal(false)
    }

    return (
      <>
        <div className="address-card">
            <div className="title">
            <h1 className="font-bold">{props?.add?.name}</h1>
            <div className="icons">
                <div className="icon" onClick={()=>setShowModal(true)}>
                 <DeleteIcon/>
                </div>
                <div className="icon" onClick={()=>setShowForm(true)}>
                  <EditIcon/>
                </div>
            </div>
            </div>
            <p className="add-text">{props?.add?.adress1},{props?.add?.adress2},{props?.add?.landmark},<br/>{props?.add?.city},{props?.add?.pinCode},{props?.add?.state},{props?.add?.country}</p>
        </div>
        { showModal&&(<div className="delete-modal" onClick={()=>setShowModal(false)}>
          <div className="innerModal" onClick={(e)=>e.stopPropagation()}>
            <WarningIcon className="text-red-500"/>
            <h1 className="py-3">Are you sure you want delete address?</h1>
            <button onClick={handleDelete} className="delet-btn">Delete</button>
          </div>
        </div>)}
        {showForm&&(<EditAddressForm 
        id={props?.add?.id} setShowForm={setShowForm}
        name={props?.add?.name}
        number={props?.add?.number}
        country={props?.add?.country}
        state={props?.add?.state}
        timing={props?.add?.timing}
        pinCode={props?.add?.pinCode}
        adress1={props?.add?.adress1}
        adress2={props?.add?.adress2}
        landmark={props?.add?.landmark}
        city={props?.add?.city}
        />)}
        </>
    )
}

export default connect(null,{deleteAdress})(AddressCard)
