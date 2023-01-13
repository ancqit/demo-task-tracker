import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://todo-api-mern.onrender.com/api/tasks",
});

export default API;