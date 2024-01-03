// hooks/useFetchTodos.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://192.168.0.93:8000/todos');
        setTodos(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, loading, error };
};

export default useFetchTodos;
