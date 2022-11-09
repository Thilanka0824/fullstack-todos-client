import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const ToDoFormPage = ({ urlEndpoint }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };

  const handleCreateToDo = async () => {
    const response = await fetch(`http://localhost:4000/todos/create-one`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        priority,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
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
         
         

        }}
      >
        Create ToDo
      </button>
    </div>
  );
};

export default ToDoFormPage;
