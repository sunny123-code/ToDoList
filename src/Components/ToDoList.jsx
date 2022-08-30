import React, { useState } from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ListItem from './ListItem';

function ToDoList() {
  
    const[item, setItem]=useState('Add Your LIst');
    const[todo, setTodo]=useState([]);
   
   const AddToDo=(event)=>{
       setItem(event.target.value);
   }

  const listTodo=()=>{
    setTodo((oldToto)=>{
        return [...oldToto, item]
    })
    setItem("Add Your List")
  }

  return (
     <>
     <div className="ToDoList">
       <div className='Content'>
        <h1>To Do List</h1>
        <div className="inputFiled">
        <input type="text" name="text" value={item} onChange={AddToDo} id="" />
        <Button 
        variant="contained"
        onClick={listTodo}
        ><AddIcon/></Button>
        </div>
        <div className="list">
         <ol>
           {
             
             todo.map((item, index)=>{
                return <ListItem item={item} key={index}/>
             })
            
           }
            </ol>
         </div>
       </div>
      
     </div>
     </>
  )
}

export default ToDoList