import React, { useState } from 'react';

function ToDoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Adicionar</button>
    </form>
  );
}

export default ToDoForm;
