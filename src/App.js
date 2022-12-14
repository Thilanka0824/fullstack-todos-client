import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
import ErrorPage from "./Components/ErrorPage";
import ToDoFormPage from "./Pages/ToDoFormPage";
import LogInPage from "./Pages/LogInPage";


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const result = await fetch("http://localhost:4000/todos/all");
      const fetchedToDos = await result.json();
      // console.log("fetchedToDos", fetchedToDos);
      setToDoList(fetchedToDos.todo); // .todo is the same ----->
    };
    fetchTodos();
  }, [shouldRefetch]);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <GlobalLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <LogInPage toDoList={toDoList}
                urlEndpoint={urlEndpoint}
                setShouldRefetch={setShouldRefetch} />
            ),
          },
          {
            path: "/home-page",
            element: <HomePage
                toDoList={toDoList}
                urlEndpoint={urlEndpoint}
                setShouldRefetch={setShouldRefetch}
              />,
          },
          {
            path: "/todo-form",
            element: (
              <ToDoFormPage
                urlEndpoint={urlEndpoint}
                setShouldRefetch={setShouldRefetch}
              />
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <header className="App-header">
      <div className="App">
        <RouterProvider router={router} />{" "}
        {/* All router objects are passed to this component to render your app and enable the rest of the APIs. */}
      </div>
    </header>
  );
};

export default App;
