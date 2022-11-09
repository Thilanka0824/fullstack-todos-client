import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import { useEffect, useState } from 'react';
import ErrorPage from './Components/ErrorPage';



const urlEndpoint = process.env

const App = () => {
  const [toDoList, setToDoList] = useState([])

  useEffect(()=>{
    const fetchTodos = async () => {
      const result = await fetch('http://localhost:4000/todos/all')
      const fetchedToDos = await result.json();
      console.log("fetchedToDos", fetchedToDos)
      setToDoList(fetchedToDos.todo)
    }
    fetchTodos()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage toDoList={toDoList}/>
        },
        
      ]
    }
  ], [])

  return (
    <div className="App">
      <RouterProvider router={router} />  {/* All router objects are passed to this component to render your app and enable the rest of the APIs. */}
    
    </div>
  );
}

export default App;
