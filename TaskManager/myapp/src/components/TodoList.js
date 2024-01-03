import React from 'react';
import axios from 'axios';
import DeleteTodo from './deleteTodo';
import UpdateTodoForm from './updateTodo';
import useFetchTodos from '../hooks/useFetchTodos';

const TodoList = () => {
    const { todos, loading, error } = useFetchTodos();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <div key={todo.id}>
                        <h3>Task {todo.id}</h3>
                        <li>{todo.name}</li>
                        <li>{todo.description}</li>
                        <li>{todo.finished ? "Completed" : "Pending"}</li>
                        <li>{todo.due_date}</li>
                        <li>{todo.input_time}</li>
                        <UpdateTodoForm todo={todo} />
                        <DeleteTodo todoId={todo.id} />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
