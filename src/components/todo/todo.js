import React, { useEffect, useState,useContext } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import './todo.css'
import {Button,Form} from 'react-bootstrap';
import List from '../List/List'
import {SettingsContext} from '../context/context.js';
const ToDo = () => {
  let counter = 0
const {list,setList ,incomplete,setIncomplete} = useContext(SettingsContext)
  const [defaultValues] = useState({
    difficulty: 4,
  });
  // const [list, setList] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    let save = uuid()
    item.id = save
    item.complete = false;
    setList([...list, item]);

  }

  function randomNumber(id){
    
    return ++counter
  }
  // function deleteItem(id) {
  //   const items = list.filter( item => item.id !== id );
  //   setList(items);
  // }

//   function toggleComplete(id) {
// console.log({id});
//     const items = list.map( item => {
//       if ( item.id == id ) {
//         item.complete = ! item.complete;
//       }
//       return item;
//     });

//     setList(items);

//   }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <div className='form'>
    
    <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
    <div className='container_form'>

      <Form className='form_bootstrap' onSubmit={handleSubmit}>
      <h2>Add To Do Item</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To do item</Form.Label>
        <Form.Control onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Assigned to</Form.Label>
        <Form.Control onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
      </Form.Group>
      <div className='submit'>

      <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />

      </div>
    
      <Button variant="primary" type="submit">
      Add item
      </Button>
    </Form>
    


    <List />

    
      {/* {
      list.length <=3? 
      
      list.map(item => (
   
        <div className='card' key={item.id}>
          <div className='first'>
          <div className='complete' onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}
          </div>
          <span className='assigned'>{item.assignee}</span>

          </div>
          <hr />
          <div className='seconde'>
          <p className='toDo'>{item.text}</p>
          <p className='difficulty'> Difficulty: {item.difficulty}</p>
          </div>
       
    
      
        </div>
      ))
      :<List/>
    } */}

    </div>
    </div>
  );
};




export default ToDo;
