
import { useState,useContext } from "react"
import { contextAuth } from "../context/contextAuth"
import { When } from "react-if"
import cookie from 'react-cookies';

export default function login(props){
    const {handleLogin,isValid} = useContext(contextAuth)
    
     // for login
     const [username,setUsername] = useState('')
     const [password,setPassword] = useState('')

     const handleUsername = (e)=>{
        setUsername(e.target.value)
     }
     const handlePassword = (e)=>{
        setPassword(e.target.value) 
     }
     const handleSubmit = (e)=>{
        e.preventDefault()
        handleLogin(username,password)
       
     }

     
    return(
        <div>
             
            <When condition={!isValid}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type='text' name='username' onChange={handleUsername}></input>
                <label>password</label>
                <input type='text' name='password' onChange={handlePassword}></input>
                <button type='submit'>Login</button>
            </form>
            </When>
           
        </div>
    )
}