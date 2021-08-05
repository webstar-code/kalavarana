import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link ,useHistory } from 'react-router-dom';
const ProfileNavigation = () => {
    const history=useHistory();
    const path =history.location.pathname;
    return (
        <div className="profile-nav">
            <h1>< KeyboardBackspaceIcon/> Profile</h1>
            <p className="font-bold text-sm">PROFILE AND DETAILS</p>
            <div className="nav">
               <Link to="/profile"><p className={`${path==='/profile'&& 'active'}`}>Profile Details</p></Link>
               <Link to="/profile/address"><p className={`${path==='/profile/address'&& 'active'}`}>My Address <ChevronRightIcon /></p></Link>
               <Link to="/profile/orders"><p className={`${path==='/profile/orders'&& 'active'}`}>My Order</p></Link>
                <Link to="/profile/whislist"><p className={`${path==='/profile/whislist'&& 'active'}`}>Wish List</p></Link>
            </div>
              <  p className="font-bold text-gray-600 text-sm pt-6">POLICY AND COOKIES</p>
               <div className="nav bottom">
                   <p>Privacy Policy</p>
               <p>Terms of Service</p>
               <p>Return Policy</p>
                 <p>Logout</p>
               </div>
        </div>
    )
}

export default ProfileNavigation
