import React, { useState } from 'react';
import Todo from './ToDo/Todo';
import TodoForm from './ToDo/TodoForms';



const TodoList = () => {
    const [todos, SetTodos] = useState([]);

    const addToDo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]

        SetTodos(newTodos)
        
    }
//    console.log(todos);
   
     const completeTodo = id => {
         let updateToDos = todos.map(todo => {
             if(todo.id === id){
                 todo.isComplete = !todo.isComplete
             }
             return todo
         })
         SetTodos(updateToDos);

     } 
    // remove to do ============================================== 
     const removeTodo = id =>{
         const removeArr = [...todos].filter(todo => todo.id !== id);
         SetTodos(removeArr);
     }

  


// update todo ========================================================
    //  const updateTodo =(todoId, newValue)=>{
    //     if (!todoId.text || /^\s*$/.test(todoId.text)) {
    //         return;
    //     }
    //     SetTodos(prev =>prev.map(item=>(item.id === todoId? newValue:item)))
    //  }

     const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        SetTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };




    // console.log(todos);
    return (
        <div>
            <h1> To Do </h1>
             <TodoForm onSubmit = {addToDo}></TodoForm>
           {/* <TodoForm onSubmit ={addToDo} /> */}
           <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}></Todo>
         
        </div>
    );
};

export default TodoList;