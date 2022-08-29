import React, { useState, useEffect } from "react";
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
let url = 'https://hiservice.herokuapp.com/'
export const contextAuth = React.createContext();
export default function ContextLoginA(props) {
    // for signup


    // status of user is login or did't
    const[isValid,setIsValid] = useState(false)
    const[user,setUser] = useState({
        actions:cookie.load('actions') || []
    })
    console.log(user);
    useEffect(()=>{

        if(cookie.load('token')){
            setIsValid(true)
            setUser(user)
        }else{
            setIsValid(false)
            setUser({})
        }

    },[])

    async  function handleLogin (username,password){
        try{
            let response = await superagent.post(`${url}users/login`)
            .set('authorization',`Basic ${base64.encode(`${username}:${password}`)}`)
            console.log(response.body);
            validUser(response.body)
        }catch(err){
        
        }
      
    }

    function validUser(userinfo){
        if(userinfo.token){
            setIsValid(true)
            setUser(userinfo)
            cookie.save('token',userinfo.token)
            cookie.save('actions',userinfo.actions)
        }else{
            setIsValid(false)
            setUser({})
        }
    }

    async  function handleSignup (username,password){
        try{
            let response = await superagent.post(`${url}users/signup`)
            .send({'username':username,
                    'password':password
        })
            console.log(response.body);
        }catch(err){
        
        }
      
    }

const conDo = (action)=>{

return user?.actions?.includes(action)

}



    const state = {
        // enterUsername:enterUsername, 
        // setEnterUsername:setEnterUsername, 
        // username:username, 
        // handleLogin:handleLogin, 
        // isValid:isValid, 
        // setIsValid:setIsValid, 
    }

    return(
        <>
        <contextAuth.Provider value={{isValid,handleLogin,
            setIsValid,handleSignup,conDo
            
            
            }}>
            {props.children}
        </contextAuth.Provider>
        </>
    )
}