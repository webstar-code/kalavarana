import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions'
import Header from '../Header'
import '../../styles/profile.css'
import UserInfo from '../profile/UserInfo'
import ProfileNavigation from '../profile/ProfileNavigation'
import { history } from '../../history'
import { Redirect } from 'react-router'
const Profile = (props) => {
  // console.log(props.user.id)
  useEffect(() => {
    console.log("changed")
    console.log(props.user)
  }, [props.user.id])

    return (
        <>
        {/* {!props.user.id && <Redirect to='/login' /> } */}
        <div className="profile-page" >
          <ProfileNavigation/>
          <UserInfo />
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
 return{user:state.user?.user}
}
export default connect(mapStateToProps,{logout})(Profile)
