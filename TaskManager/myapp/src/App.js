import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewTodoForm from './components/newTodo';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
    <TodoList />
    <NewTodoForm />
    </div>
  );
}

export default App;