import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items, toggleCompleted }) {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} item={item} toggleCompleted={toggleCompleted} />
      ))}
    </ul>
  );
}

export default TodoList;
