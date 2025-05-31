import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext)
if(loading){
    return <Loading></Loading>
}
    if(!user){
       return <Navigate to='/signin'></Navigate>
    }
    return children
};

export default PrivateRoutes;