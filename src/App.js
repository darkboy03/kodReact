import React, {Component, useState, useEffect} from 'react';
import './App.css';
import List from './List.jsx';

const App=() =>{
  const [todos, setTodo] = useState(['공부합시다.']);
  const [newTodo, setNewTodo] = useState();
  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todos, newTodo]);

  }

  useEffect( () => {
    console.log ("잘되는지 봅시다 ", todos);
  },[todos])
  return (
    <>
    <h1>Kod React</h1>
    
    <form action="">
      <input type="text" name="" onChange={changeInputData}/>
      <button onClick={addTodo}>할일추가</button>
    </form>

    <List todos={todos}/>
    </>
  )
}

export default App;
