
import cookie from 'react-cookies';
import { useState,useContext } from "react"
import './Logout.css'

import { contextAuth } from "../context/contextAuth"
import { When } from "react-if"

export default function Logout(props){
    const {isValid} = useContext(contextAuth)

    const logout = ()=>{
        cookie.remove("token");
        cookie.remove("actions");
        window.location.reload()
     }
    return(<div className='logout'>
   <When condition={isValid}>
                <button onClick={logout}>Logout</button>
            </When>
    
    </div>)
}