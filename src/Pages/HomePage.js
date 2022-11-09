import React from "react";
import ToDoCard from "../Components/ToDoCard";

const HomePage = ({toDoList}) => {
//   const { toDoList } = props;
    console.log("homepage", toDoList)
  return (
    <div>
      {/* {toDoList} */}
      {/* <ToDoCard /> */}
      <h1>Fullstack ToDo Application</h1>
      {toDoList.map((toDo, index)=>{
            return <ToDoCard key={index} toDoList={toDo} />
        })}
        
    </div>
  );
};

export default HomePage;