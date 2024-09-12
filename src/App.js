import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import './App.css'; // Mantenha a importação do CSS

function App() {
  const [todos, setTodos] = useState([]);

  // Função para adicionar novas tarefas
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
    const removeTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <ToDoForm onSubmit={addTodo} />

        {/* Renderizar a lista de tarefas abaixo do formulário */}
        <div className="todo-list">
          {todos.length === 0 ? <p>Nenhuma tarefa adicionada.</p> : todos.map((todo, index) => (
            <div key={index} className="todo-item">
              {todo.text}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

