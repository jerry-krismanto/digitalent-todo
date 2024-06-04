import { useState } from "react";
import "./App.css";

function App() {
  const todos = [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Vue",
      completed: false,
    },
    {
      id: 3,
      title: "Learn Angular",
      completed: false,
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold m-12 text-center">To do app</h1>
    </>
  );
}

export default App;
