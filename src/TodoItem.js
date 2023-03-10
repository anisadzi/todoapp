import React from 'react';

function TodoItem({ item, toggleCompleted }) {
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => toggleCompleted(item.id)} />
      {item.text}
    </li>
  );
}

export default TodoItem;

//toggle complete, when the user clicks
