import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const addTodo = (text) => {
        if (text.trim() === '') return; // Prevent adding empty todos
        if (editIndex !== null) {
            // Update existing todo
            const updatedTodos = todos.map((todo, index) =>
                index === editIndex ? { ...todo, text } : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null);
            setEditText('');
        } else {
            // Add new todo
            setTodos([...todos, { text, completed: false }]);
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditText(todos[index].text);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <AddTodo
                addTodo={addTodo}
                editText={editText}
                setEditText={setEditText}
                isEditing={editIndex !== null}
            />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                startEditing={startEditing}
            />
        </div>
    );
}

export default App;
