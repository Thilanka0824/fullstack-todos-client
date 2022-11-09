import React from 'react'

const ToDoCard = ({toDoList}) => {
    // const { toDoList } = props
    console.log("toDoList", toDoList)
    return (
        <div>
            <h2>{toDoList.title}</h2>
            <p>ID: {toDoList.id}</p>
            <p>Description: {toDoList.description}</p>
            <p>Priority: {toDoList.description}</p>
            <p>Is Complete: {toDoList.isComplete ? "Complete" : "Nope"}</p>
            <p>Creation Date: {toDoList.creationDate.toString().substring(0,19)}</p>
            <p>Last Modified: {toDoList.lastModified.toString().substring(0,19)}</p>
            <p>Completed Date: {toDoList.completedDate !== null && toDoList.completedDate}</p>
        </div>
    )
}

export default ToDoCard