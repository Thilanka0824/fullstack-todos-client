import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const ToDoFormPage = ({ setShouldRefetch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const navigate = useNavigate();
  const redirectHome = () => {
    
    navigate("/home-page");

  };

  const handleCreateToDo = async () => {
    setShouldRefetch(true);

    const response = await fetch(`http://localhost:4000/todos/create-one`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        priority,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    setShouldRefetch(false);
  };

  return (
    <div className="todo-form">
      <h1>ToDo Form</h1>
      <label>Title: </label>
      <input
        value={title}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <label>Description: </label>
      <input
        value={description}
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <label>Priority</label>
      <select
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value);
          console.log("setPriority complete");
        }}
      >
        <option></option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          handleCreateToDo();
          redirectHome();
        }}
      >
        Create ToDo
      </button>
      <br />
    </div>
  );
};

export default ToDoFormPage;
