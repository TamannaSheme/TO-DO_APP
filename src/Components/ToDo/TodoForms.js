import React, { useEffect, useRef, useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

 

     
    const inputRef =useRef(null)
    useEffect(()=>{
        inputRef.current.focus();
    })


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');

    }
    return (
        <div>
            <h1> To Do List </h1>
            <form className='todo-form' onSubmit={handleSubmit}>
                  {props.edit? (
                      <> 
                       <input 
                       type="text"
                       placeholder='Add a to do'
                       value={input}
                       name="text"  
                       id="1" 
                       className='to-do-input' 
                       onChange={handleChange}
                       ref={inputRef}/>
                
                       <input className='todo-button' type="submit" value="Update" />
                    </>
                  ): (
                      <> 
                    <input 
                    type="text"
                    placeholder='Add a to do'
                    value={input}
                    name="text"  
                    id="1" 
                    className='to-do-input' 
                    onChange={handleChange}
                    ref={inputRef}/>
             
                    <input className='todo-button' type="submit" value="Add" />
                 </>
                  )}
               
            </form>
           
        </div>
    );
};

export default TodoForm;