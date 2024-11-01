import React, { createContext, useContext, useState } from "react";


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const AuthContext=createContext()




export const AuthContextProvider=({children})=>{
    const[isAuth,setIsAuth]=useState("")
    const login=()=>{
        setIsAuth(true)
        toast("logged in");
    }
    
    const logout=()=>{
        setIsAuth(false)
        toast("logged out")
    }
    return(
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useGlobalContext=()=>{
    return useContext(AuthContext)
}