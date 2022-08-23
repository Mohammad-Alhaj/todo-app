import React from 'react';

import ToDo from './components/todo/todo.js';
import './App.css'
import Settings from './components/context/context.js';
export default function App () {

    return (
      <div>

        <div className='header'>Home</div>
        <Settings>
        <ToDo />
        </Settings>
      </div>
      );

}
