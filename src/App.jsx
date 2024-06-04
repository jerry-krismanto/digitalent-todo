import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [
    {
      id: 1,
      title: "Belajar React",
      completed: false,
    },
    {
      id: 2,
      title: "Belajar Tailwind",
      completed: false,
    },
    {
      id: 3,
      title: "Belajar Next.js",
      completed: false,
    },
  ];

  const saveTodo = (newTodo = Object) => {
    const newTodos = [...todoList, newTodo];
    setTodoList(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const [todoList, setTodoList] = useState(todos);

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodoList(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold m-12 text-center">To do app</h1>
        <div className="flex justify-center flex-col mx-[36rem]">
          <p className="text-lg font-semibold mb-4">
            Pro tip: Tekan Todo untuk menandainya sebagai selesai !
          </p>
          <AddTodo saveTodo={saveTodo} />
          <ul>
            {todoList.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
