import React from 'react';

function AddTodo({ addTodo, editText, setEditText, isEditing }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(editText);
    };

    return (
        <div className="AddTodo">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder={isEditing ? "Update your todo" : "Add a new todo"}
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}

export default AddTodo;
