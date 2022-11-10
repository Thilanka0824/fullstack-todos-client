import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import { useEffect, useState } from 'react';
import ErrorPage from './Components/ErrorPage';
import ToDoFormPage from './Pages/ToDoFormPage';



const urlEndpoint = process.env

const App = () => {
  const [toDoList, setToDoList] = useState([])

  useEffect(()=>{
    const fetchTodos = async () => {
      const result = await fetch('http://localhost:4000/todos/all')
      const fetchedToDos = await result.json();
      console.log("fetchedToDos", fetchedToDos)
      setToDoList(fetchedToDos.todo) // .todo is the same ----->
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
          element: <HomePage toDoList={toDoList} urlEndpoint={urlEndpoint}/>
        },
        {
          path: '/todo-form',
          element: <ToDoFormPage urlEndpoint={urlEndpoint}/>,
        }
      ]
    }
  ], [])

  return (
    <header className='App-header'>
      <div className="App">
        <RouterProvider router={router} />  {/* All router objects are passed to this component to render your app and enable the rest of the APIs. */}

      </div>
    </header>
    
  );
}

export default App;
