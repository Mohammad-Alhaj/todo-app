import React from "react";
import { useState } from "react";
export const SettingsControlContext = React.createContext();
export default function SettingsControl(props) {
    
    const [tasksForPage,setTaskForPage] = useState(2);


    return (
        <SettingsControlContext.Provider value={{tasksForPage,setTaskForPage}}>
            {props.children}
        </SettingsControlContext.Provider>
    )
}