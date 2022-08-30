import React from "react";
import { useState,useEffect } from "react";
import superagent from 'superagent';
import cookie from 'react-cookies';
export const SettingsContext = React.createContext();
let url = 'https://todoappmohammadalhaj.herokuapp.com/'

export default function Settings(props) {

  // const initialValue = ()=>{
  //  let saveData = localStorage.getItem('todos')

  //  return saveData?JSON.parse(saveData):[]
  // }

    const [list, setList] = useState([]);
    console.log('from list',list);
    const [incomplete, setIncomplete] = useState([]);
    const [todo, setTodo] = useState('');
    const [Assigned, SetAssigned] = useState('');

  // Send todo th database
    async  function handleAdd (todo,Assigned){
      // console.log(data.todo,data.AssignedTo);
      try{
        let response = await superagent.post(`${url}api/v2/todos`).set(
          'authorization',`Bearer ${cookie.load('token')}`
        )
        .send({
          'todo':todo,
          'AssignedTo':Assigned
        })
      }catch(err){
      
      }
    
  }
   // get todos from database
    async  function handleGetTodos (){
      try{
        let response = await superagent.get(`${url}api/v2/todos`).set(
          'authorization',`Bearer ${cookie.load('token')}`
        )
        setList(response.body)
   
        
        // console.log(response);
      }catch(err){
      
      }
      
    }

useEffect(()=>{
         handleGetTodos()
        //  setList(list)
          },[todo])
          // Delete todo
          async  function handleDelete (id){
            try{
              let response = await superagent.delete(`${url}api/v2/todos/${id}`).set(
                'authorization',`Bearer ${cookie.load('token')}`
              )
              handleGetTodos ()
              
              // console.log(response);
            }catch(err){
            
            }
            
          }

          // Update state
          async  function handleUpdate (data){
            console.log(data);
            let complete = data.complete === false?true:false
            console.log(complete);
            try{
              let response = await superagent.put(`${url}api/v2/todos/${data.id}`).set(
                'authorization',`Bearer ${cookie.load('token')}`
              ).send({'complete':complete})
               handleGetTodos ()
         
              
            }catch(err){
            
            }
            
          }



    function toggleComplete(id) {
            const items = list.map( item => {
              if ( item.id == id ) {
                item.complete = ! item.complete;
              }
              return item;
            });
        
            setList(items);
        
          }
          // function deleteItem(id) {
          //   const items = list.filter( item => item.id !== id );
          //   setList(items);
          // }

         

          // useEffect(()=>{
          //   let just = JSON.stringify(list)
          //   localStorage.setItem('todos',just)
          // },[list])


    return (
        <SettingsContext.Provider value={{setList,list,toggleComplete,
        incomplete,setIncomplete,handleDelete,SetAssigned,setTodo,handleAdd,
        todo,Assigned,handleGetTodos,handleUpdate
        }}>
            {props.children}
        </SettingsContext.Provider>
    )
}