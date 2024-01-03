import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.93:8000/',
});

export const fetchTodos = () => api.get('todos');

export const createTodoAPI = (todoData) => api.post('todos', todoData, {
  headers: {
    'Content-Type': 'application/json'
  }
}); 

export const updateTodoAPI = (id, todoData) => {
  return axios.put(`http://192.168.0.93:8000/todos/${id}`, todoData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}


 


export const deleteTodoAPI = (id) => api.delete(`todos/${id}`);

export default api;
