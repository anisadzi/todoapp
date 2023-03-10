import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem) {
      const newItemObj = {
        id: Date.now(), //date for the identifier
        text: newItem,
        completed: false
      };
      addTodo(newItemObj);
      setNewItem('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
