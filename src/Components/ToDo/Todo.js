import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import TodoForm from './TodoForms';

const Todo = ({todos,completeTodo,removeTodo,updateTodo}) => {
   console.log(todos);
    
        const [edit,setEdit] = useState({
            id:null,
            value:''
        });
    
        const submitUpdate = value=>{
            updateTodo(edit.id,value)
            setEdit({
                id:null, 
                value:''
            })
        }

        if(edit.id){
            return <TodoForm edit={edit} onSubmit={submitUpdate} />

        }
    
        return todos.map((toDo,index)=>(
            <div className={toDo.isComplete? 'toDo-row complete' : 'toDo-row'} key={index}>
    
        <div key={toDo.id} onClick={() => completeTodo(toDo.id)}>
                   {toDo.text}
                   </div>
                   <div className='icons'>
                   <AiOutlineCloseCircle 
                   onClick={()=>removeTodo(toDo.id)}
                   className='delete-icon'
                   />
                   <FiEdit
                   onClick={()=>setEdit({id: toDo.id,value:toDo.text})}
                   className='edit-icon'/>
                     
                  
                 </div>
    
    
            </div>
        ))
       
 
        
};

export default Todo;