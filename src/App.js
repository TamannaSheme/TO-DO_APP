import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequeirAuth';
import TodoList from './Components/TodoList';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className='todo-app'>
      <NavBar> </NavBar>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/conact' element={<Contact></Contact>}></Route>
            {/* <Route path='/todolist' element={<TodoList></TodoList>}></Route> */}
            <Route path='todolist' element=
             {<RequireAuth>
              <TodoList></TodoList>
             </RequireAuth>}>

            </Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
