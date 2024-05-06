import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>To-Do App</h1>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: '1', padding: '8px', fontSize: '16px' }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: todo.completed ? '#f0f0f0' : 'inherit',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}

            <div style={{ marginLeft: 'auto' }}>
              <button
                onClick={() => toggleTodo(todo.id)}
                style={{ marginRight: '5px', backgroundColor: '#17a2b8', padding: '8px 12px', fontSize: '14px', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>

              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ backgroundColor: '#dc3545', padding: '8px 12px', fontSize: '14px', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
