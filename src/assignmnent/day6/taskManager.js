import TaskForm from "./taskForm";
import TaskList from "./taskList";
import "./taskManager.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "./axios";
import CircularProgress from "@mui/material/CircularProgress";

export default function TaskManager() {
  const [isEditing, setIsEditing] = useState(false);
  const [taskID, setTaskID] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    completed: false,
  });
  const { name } = formValues;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get();
      toast.success("Tasks Feteched");
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`/${id}`);
      getTasks();
      setIsLoading(false);
      toast.success("Task Deleted");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  const getSingleTask = async (task) => {
    setFormValues({ name: task.name, completed: false });
    setTaskID(task._id);
    setIsEditing(true);
  };
  const updateTask = async (e) => {
    e.preventDefault();
    if (name === "") return toast.error("Input field cannot be empty");
    setIsLoading(true);
    try {
      await axios.put(`/${taskID}`, formValues);
      setIsLoading(false);
      toast.success("Task Updated");
      setFormValues({ ...formValues, name: "" });
      setIsEditing(false);
      getTasks();
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  const completeTask = async (task) => {
    setIsLoading(true);
    const newFormValues = {
      name: task.name,
      completed: true,
    };
    try {
      await axios.put(`/${task._id}`, newFormValues);
      setIsLoading(false);
      toast.success("Task Completed");
      getTasks();
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const ctasks = tasks.filter((task) => {
      return task.completed === true;
    });
    setCompletedTasks(ctasks);
  }, [tasks]);
  const createTask = async (e) => {
    e.preventDefault();

    if (name === "") {
      return toast.error("Input fields can't be empty!");
    }
    try {
      await axios.post("", formValues);
      toast.success("Task Added");
      setFormValues({ ...formValues, name: "" });
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="taskContainer">
      <div className="todoBox">
        <h1>Task Manager</h1>
        <TaskForm
          name={name}
          handleInputChange={handleInputChange}
          createTask={createTask}
          isEditing={isEditing}
          updateTask={updateTask}
        />
        <hr />
        {isLoading && <CircularProgress />}
        {!isLoading && tasks.length === 0 ? (
          <div>No Entries Found!</div>
        ) : (
          <>
            {tasks.map((task, index) => {
              return (
                <TaskList
                  completeTask={completeTask}
                  getSingleTask={getSingleTask}
                  deleteTask={deleteTask}
                  key={task._id}
                  task={task}
                  index={index}
                />
              );
            })}
          </>
        )}
        {tasks.length > 0 && (
          <p>
            {completedTasks.length}/{tasks.length} <b>Task Completed</b>
          </p>
        )}
      </div>
    </div>
  );
}
