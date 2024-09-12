import React from 'react';

function ToDoItem({ todo }) {
  return (
    <div className="todo-row">
      {todo.text}
    </div>
  );
}

export default ToDoItem;
