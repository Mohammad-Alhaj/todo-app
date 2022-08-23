import {SettingsContext} from "../context/context"
import { useContext ,useState} from "react"
import Pagination from "../Pagination/Pagination"; 

export default function List(props){
  const {list,toggleComplete,deleteItem} = useContext(SettingsContext)

  const [currentPage, setCurrentPage] = useState(1);
  const [tasksForPage] = useState(4);
function toggle (id){
  toggleComplete(id)
  deleteItem(id)
}


const indexOfLastPost = currentPage * tasksForPage;
const indexOfFirstPost = indexOfLastPost - tasksForPage;
const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

function pag() {
  
  setCurrentPage(pageNumber);
  
} 



    return(
        <>
         {
             
             currentPosts.map((item,index) => (
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
  
  
    }

<div className='page'>
        <Pagination tasksForPage={tasksForPage}
          totalPosts={list.length}
          paginate={pag} />
      </div>
        </>
    )
}