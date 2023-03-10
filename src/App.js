import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false); //hidden

  const addTodo = (newItem) => {
    setItems([...items, newItem]);
  }

  const toggleCompleted = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(updatedItems);
  }

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  }

  const filteredItems = items.filter(item => showCompleted || !item.completed);

  //if showCompleted = true, al items are in the filteredItems. 
  //if false, only completed with false can be in the filteredItems.

  return (
    <div className="todo-app">
      <h1 className="title">To-Do List</h1>
      <p className="nameandid">Anisa Dzikra Qalbiah - 2502043116</p>
      <TodoForm addTodo={addTodo} />
      <TodoList items={filteredItems} toggleCompleted={toggleCompleted} />
      <button className="filter-button" onClick={toggleShowCompleted}>{showCompleted ? 'Show All' : 'Show Completed'}</button>
    </div>
  );
}

export default App;

