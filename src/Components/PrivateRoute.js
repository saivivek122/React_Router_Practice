import React from 'react'
import { Navigate } from 'react-router';
import {useGlobalContext} from "../Context/AuthContextProvider"

const PrivateRoute = ({children}) => {
    const {isAuth}=useGlobalContext()  // is auth false bydefault
    
    if(!isAuth){
       return <Navigate to={"/login"}/>
    }
    return children

}

export default PrivateRoute
