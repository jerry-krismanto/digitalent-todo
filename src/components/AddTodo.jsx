import { useState } from "react";
import PropType from "prop-types";

const AddTodo = ({ saveTodo }) => {
  AddTodo.propTypes = {
    saveTodo: PropType.func.isRequired,
  };

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo({
      id: Date.now(),
      title: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          type="text"
          placeholder="Tambahkan Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="p-2 border border-black rounded-md w-full mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
