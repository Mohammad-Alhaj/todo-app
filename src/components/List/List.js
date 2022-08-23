import {SettingsContext} from "../context/context"
import { useContext ,useState} from "react"

export default function List(props){

  const {list,toggleComplete,deleteItem} = useContext(SettingsContext)

  // const [color,setColor] = useState('red')
  // const [deletes,setDelete] = useState("false")
console.log(list);
function toggle (id){
  toggleComplete(id)
  deleteItem(id)
}
// function setDe(){
//   setDelete('true')
// }
    return(
        <>
         {
             
             list.map((item,index) => (
        <div className='card' key={index}>
          <div className='first'>
          <div className='complete' onClick={() =>  toggle(item.id)}>Complete: {item.complete.toString()}
          </div>
          <span className='assigned'>{item.assignee}</span>

          </div>
          <hr />
          <div className='seconde'>
          <p className='toDo'>{item.text}</p>
          {/* <button onClick={()=>setDe()} className="delete">{deletes}</button> */}
          <p className='difficulty'> Difficulty: {item.difficulty}</p>
          </div>
       
    
      
        </div>
      ))
  
    //   <List/>
    }
        </>
    )
}