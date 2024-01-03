import React from 'react';
import axios from 'axios';
import { deleteTodoAPI } from '../services/api';  // Adjust the path as needed

function DeleteTodo({ todoId, onDelete }) {
  
  const handleDelete = async () => {
    try {
      const response = await deleteTodoAPI(todoId);
      if (response.status === 204) { 
        onDelete(todoId); 
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteTodo;
