import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'
import {deleteAdress} from '../../actions/address'
import EditIcon from '@material-ui/icons/Edit';
const AddressCard = (props) => {

    const handleDelete=()=>{
      props.deleteAdress(props?.add?.id)
    }

    return (
        <div className="address-card">
            <div className="title">
            <h1 className="font-bold">{props?.add?.name}</h1>
            <div className="icons">
                <div className="icon" onClick={handleDelete}>
                 <DeleteIcon/>
                </div>
                <div className="icon">
                  <EditIcon/>
                </div>
            </div>
            </div>
            <p className="add-text">{props?.add?.adress1},{props?.add?.adress2},{props?.add?.landmark},<br/>{props?.add?.city},{props?.add?.pinCode},{props?.add?.state},{props?.add?.country}</p>
        </div>
    )
}

export default connect(null,{deleteAdress})(AddressCard)
