import React from 'react';

import ToDo from './components/todo/todo.js';
import './App.css'
import Settings from './components/context/context.js';
import SettingsControl from './components/context/ControlSetting';
import ContextLoginA from './components/context/contextAuth.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Logout from './components/Logout/Logout.js';
export default function App () {

    return (
      <div>

        <ContextLoginA>
        <div className='header'>Home <Logout/></div>
          <SettingsControl>
        <Settings>
       
        <ToDo />
      <Login/>
      <Signup/>
      
        </Settings>
          </SettingsControl>
          </ContextLoginA>
      </div>
      );

}
