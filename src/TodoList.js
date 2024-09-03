import React from 'react';

function TodoList({ todos, toggleTodo, removeTodo, startEditing }) {
    return (
        <ul className="TodoList">
            {todos.map((todo, index) => (
                <li key={index} className={todo.completed ? 'completed' : ''}>
                    <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                    <button onClick={() => startEditing(index)}>✎</button>
                    <button onClick={() => removeTodo(index)}>&times;</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
