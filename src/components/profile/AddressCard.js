import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteAdress, getAddresses } from '../../actions/address';
import CancelPrompt from '../CancelPrompt';
import Msg from '../notification/Msg';
import EditAddressForm from './EditAddressForm';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import WarningIcon from '@material-ui/icons/Warning';

const AddressCard = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selected, setSelected] = useState(false);

  const handleDelete = () => {
    props.deleteAdress(props?.address?.id, props.getAddresses)
    setShowModal(false)
  }

  const handleActiveIndex = () => {
    if (!props.disable) {
      setSelected(true);
      props?.getActiveAdd(props.i, props?.address)
    }
  }


  //style={props.i===activeIndex?{border:'2px solid #000'}:null};
  return (
    <>
      <Msg />
      <div style={props?.style} onClick={handleActiveIndex} className={`cursor-pointer address-card p-2 `}>
        <div className="title">
          <h1 className="font-bold">{props?.address?.name}</h1>
          <div className="icons">
            {!props.disable && (<div className="icon" onClick={(e) => {
              e.stopPropagation()
              setShowModal(true)
            }}>
              <DeleteIcon />
            </div>)}
            {!props.disable && (<div className="icon" onClick={(e) => {
              e.stopPropagation()
              setShowForm(true)
            }}>
              <EditIcon />
            </div>)}
          </div>
        </div>
        <p className="address-text">{props?.address?.addressLine1},{props?.address?.addressLine2},{props?.address?.landmark},<br />{props?.address?.city},{props?.address?.pinCode},{props?.address?.state},{props?.address?.country}</p>
      </div>
      {showModal && <CancelPrompt setShowModal={setShowModal} callback={handleDelete} message="Are you sure you to delete this address?" />}
      {showForm && (<EditAddressForm
        id={props?.address?.id} setShowForm={setShowForm}
        name={props?.address?.name}
        number={props?.address?.number}
        country={props?.address?.country}
        addressType={props?.address?.addressType}
        state={props?.address?.state}
        pinCode={props?.address?.pinCode}
        addressLine1={props?.address?.addressLine1}
        addressLine2={props?.address?.addressLine2}
        landmark={props?.address?.landmark}
        city={props?.address?.city}
      />)}
    </>
  )
}

export default connect(null, { deleteAdress, getAddresses })(AddressCard)
