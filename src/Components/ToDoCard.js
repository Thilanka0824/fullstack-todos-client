import React from "react";

const ToDoCard = ({ toDo, urlEndpoint }) => {
  // const { toDoList } = props
  const id = toDo.id;

  console.log("toDo", toDo);

  const handleSetToDoComplete = async () => {
    const response = await fetch(`${urlEndpoint}/todos/update-one/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isComplete: toDo.isComplete ? false : true,
      }),
    });
  };

  const handleDeleteToDo = async () => {
    const response = await fetch(`${urlEndpoint}/todos/delete-one/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="todo-card">
      <h2>{toDo.title}</h2>
      <p>ID: {toDo.id}</p>
      <p>Description: {toDo.description}</p>
      <p>Priority: {toDo.priority}</p>
      <p>Is Complete: {toDo.isComplete ? "Complete" : "Nope"}</p>
      <button
        onClick={() => {
          handleSetToDoComplete();
        }}
      >
        Toggle
      </button>
      <p>Creation Date: {toDo.creationDate.toString().substring(0, 19)}</p>
      <p>Last Modified: {toDo.lastModified.toString().substring(0, 19)}</p>
      <p>Completed Date: {toDo.completedDate !== null && toDo.completedDate}</p>
        <br/>
        <br/>
        <button className="delete-button" onClick={(e)=>{
            handleDeleteToDo()
        }}>Delete ToDo</button>
    </div>
  );
};

export default ToDoCard;
