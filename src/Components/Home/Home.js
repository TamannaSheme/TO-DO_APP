import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../TodoList';

const Home = () => {
    return (
        <div>
            <h1>  if You want to go To-Do page please <Link to='/todolist'> click here</Link>  </h1>
             <p> Or toggole form Navab </p>
        </div>
    );
};

export default Home;