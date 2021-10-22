import React from 'react'
import LoginComp from '../auth/LoginComp'
import { connect } from 'react-redux'
import { history } from '../../history'

const Login = (props) => {
    // if (props.user) {
    //     if (props.user?.id) {
    //         history.push('/')
    //     }
    // }
    return (
        <LoginComp />
    )
}
const mapStateToProps = (state) => {
    return { user: state.user?.user }
}
export default connect(mapStateToProps)(Login)
