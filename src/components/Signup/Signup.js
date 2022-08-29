import { useState,useContext } from "react"
import { contextAuth } from "../context/contextAuth"
import { When } from "react-if"



export default function Signup(props){

    const [enterUsername,setEnterUsername] = useState('')
    const [enterPassword,setEnterPassword] = useState('')


    const {isValid,handleSignup} 
    = useContext(contextAuth)

    const handleUsername = (e)=>{
        setEnterUsername(e.target.value)
     }
     const handlePassword = (e)=>{
        setEnterPassword(e.target.value) 
     }
     const handleSubmit = (e)=>{
        e.preventDefault()
        handleSignup(enterUsername,enterPassword)
        e.target.reset()
       
     }


    return(
        <div>
            <When condition={!isValid}>
            <h2>signup</h2>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type='text' name='username'  onChange={handleUsername}></input>
                <label>password</label>
                <input type='text' name='password' onChange={handlePassword}></input>
                <button type='submit'>Signup</button>
            </form>
            </When>
        </div>
    )
}