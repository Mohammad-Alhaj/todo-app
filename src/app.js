import React from 'react';

import ToDo from './components/todo/todo.js';
import './App.css'
import Settings from './components/context/context.js';
import SettingsControl from './components/context/ControlSetting'
export default function App () {

    return (
      <div>

        <div className='header'>Home</div>
          <SettingsControl>
        <Settings>
        <ToDo />

        </Settings>
          </SettingsControl>
      </div>
      );

}
