import {SettingsContext} from "../context/context"
import { useContext ,useState} from "react"
import Pagination from "../Pagination/Pagination"; 
import {SettingsControlContext} from '../context/ControlSetting'
import './List.css'
import {Button,Form} from 'react-bootstrap';

export default function List(props){
  const {list,toggleComplete,deleteItem,setList} = useContext(SettingsContext)
  const {tasksForPage,setTaskForPage} = useContext(SettingsControlContext)

  const [currentPage, setCurrentPage] = useState(1);
  // const [tasksForPage] = useState(2);
function toggle (id){
  // toggleComplete(id)
  deleteItem(id)
}

const [showCompleted,setCompleted] = useState([])

const indexOfLastPost = currentPage * tasksForPage;
const indexOfFirstPost = indexOfLastPost - tasksForPage;
const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

function pag() {
  
  setCurrentPage(pageNumber);
  
} 
const handleNumberOfTasks = (e)=>{
  e.preventDefault()
  setTaskForPage(e.target.number.value)
  e.target.reset()
}

// let state = false
const handleShowTasks=(e)=>{

  if(e.target.checked){

    let result = list.filter(ele=>ele.complete === true)
    setCompleted(list)
    setList(result)
  }else{
setList(showCompleted)
  }
}




    return(
        <>
        <div  className='form_bootstrap'>
<Form  onSubmit={handleNumberOfTasks}>
<Form.Group  controlId="formBasicEmail" >
        <Form.Label>Number of Items in one page</Form.Label>
        <Form.Control name="number" type="text" placeholder="Enter a number" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Update
      </Button>
      </Form>
 {
  console.log("list",list)
 }
      
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Show todos completed"
        name="check"
        onClick={handleShowTasks} 
      />
    
      </div>
         {
             
             currentPosts.map((item,index) => (
        <div className='card' key={index}>
          <div className='first'>
          <div style={{background:item.complete?'green':'red' }} className='complete' onClick={()=>toggleComplete(item.id)}>Complete: {item.complete.toString()}
          </div>
          <span className='assigned'>{item.assignee}</span>
          <button className='btn' onClick={() =>  toggle(item.id)}>X</button>

          </div>
          <hr />
          <div className='seconde'>
          <p className='toDo'>{item.text}</p>
          {/* <button onClick={()=>setDe()} className="delete">{deletes}</button> */}
          <p className='difficulty'> Difficulty: {item.difficulty}</p>
          </div>
       
    
      
        </div>
      ))
  
  
    }

<div className='page'>
        <Pagination tasksForPage={tasksForPage}
          totalPosts={list.length}
          paginate={pag} />
      </div>
        </>
    )
}