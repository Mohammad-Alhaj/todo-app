import React from "react";
import { useState } from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    function toggleComplete(id) {
        console.log({id});
            const items = list.map( item => {
              if ( item.id == id ) {
                item.complete = ! item.complete;
              }
              return item;
            });
        
            setList(items);
        
          }
          function deleteItem(id) {
            console.log('from deleteID',id);
            const items = list.filter( item => item.id !== id );
            setList(items);
          }



    return (
        <SettingsContext.Provider value={{setList,list,toggleComplete,incomplete,setIncomplete,deleteItem}}>
            {props.children}
        </SettingsContext.Provider>
    )
}