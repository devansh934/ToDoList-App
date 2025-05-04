import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default Home;
