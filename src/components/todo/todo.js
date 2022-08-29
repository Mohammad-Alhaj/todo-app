import React, { useEffect, useState,useContext } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import './todo.css'
import {Button,Form} from 'react-bootstrap';
import List from '../List/List'
import {SettingsContext} from '../context/context.js';
import { contextAuth } from '../context/contextAuth.js';
import { When } from "react-if"
import Auth from '../Auth/Auth.js';

const ToDo = () => {
  let counter = 0
const {list,setList ,incomplete,setIncomplete} = useContext(SettingsContext)
const {isValid} = useContext(contextAuth)

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    let save = uuid()
    item.id = save
    item.complete = false;
    setList([...list, item]);

  }


  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <div className='form'>
      <When condition={isValid}>
    
    <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
    <div className='container_form'>

        <Auth action="delete">
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
    
    </Auth>


    <List />

    </div>
    </When>
  
    </div>
  );
};




export default ToDo;
