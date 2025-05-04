import React, { useState } from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo, editTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(index, newText);
    }
    setEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          value={newText}
          onChange={e => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={() => toggleComplete(index)}>{todo.text}</span>
      )}
      <div>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
