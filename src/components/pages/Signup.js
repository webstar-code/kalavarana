import React from 'react'
import SignupComp from '../auth/SignupComp'
import { connect } from 'react-redux'
import { history } from '../../history'

const Signup = (props) => {
    // if (props.user) {
    //     if (props.user?.id) {
    //         history.push('/');
    //     }
    // }
    return (
        <SignupComp />
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return { user: state.user?.user }
}
export default connect(mapStateToProps)(Signup)
