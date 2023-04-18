import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Features/UserSlice';

const Logout = () => {
    const user=useSelector(selectUser)
    const dispatch=useDispatch();

    const handle=(e)=>{
        e.preventDefault();
        dispatch(logout())
    }
  return (
    <div>
        <h3>Hello{user.name}</h3>
        <button onClick={handle}>Back</button>
    </div>
  )
}

export default Logout