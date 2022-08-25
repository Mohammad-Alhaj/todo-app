import React from "react";
import { useState,useEffect } from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {

  const initialValue = ()=>{
   let saveData = localStorage.getItem('todos')

   return saveData?JSON.parse(saveData):[]
  }

    const [list, setList] = useState(initialValue);
    console.log('from list',list);
    const [incomplete, setIncomplete] = useState([]);

    function toggleComplete(id) {
            const items = list.map( item => {
              if ( item.id == id ) {
                item.complete = ! item.complete;
              }
              return item;
            });
        
            setList(items);
        
          }
          function deleteItem(id) {
            const items = list.filter( item => item.id !== id );
            setList(items);
          }

         

          useEffect(()=>{
            let just = JSON.stringify(list)
            console.log(just);
            localStorage.setItem('todos',just)
          },[list])


    return (
        <SettingsContext.Provider value={{setList,list,toggleComplete,incomplete,setIncomplete,deleteItem}}>
            {props.children}
        </SettingsContext.Provider>
    )
}