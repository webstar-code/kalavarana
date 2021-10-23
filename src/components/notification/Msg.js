import React from 'react'
import { connect } from 'react-redux'
import './style.css'
const Msg = ({ msg }) => {
    console.log(msg.err);
    return (
        <div className={`hide z-50 py-3 px-3 text-white fixed top-32 rounded ${msg.err ? 'bg-red-500' : 'bg-primary'} ${msg.msg && 'show'}`}>{msg.msg}</div>
    )
}

const mapStateToProps = (state) => {
    return { msg: state.notification }
}

export default connect(mapStateToProps)(Msg)
