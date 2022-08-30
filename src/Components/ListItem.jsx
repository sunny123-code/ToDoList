import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem(props) {

    const{item}=props;
   const[deleteValue, setDeleteValue]=useState(false)

  const deleteItem=()=>{
    setDeleteValue(true);
  }

    console.log(item)
  return (
   <> 
    <div className='listitem'>
 
      <span  onClick={deleteItem}><DeleteIcon color='error'/></span>
      <li className="line" style={{textDecoration: deleteValue ? "line-through": "none"}}>{item}</li>
    
    
  
      </div>

   </>
  )
 
}

export default ListItem