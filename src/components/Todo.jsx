import PropType from "prop-types";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  Todo.propTypes = {
    todo: PropType.object.isRequired,
    deleteTodo: PropType.func,
    toggleTodo: PropType.func,
  };

  return (
    <div className="border-b border-b-slate-300 p-6 text-xl flex justify-between">
      <p
        className={`p-2 hover:cursor-pointer ${
          todo.completed ? "line-through text-slate-500" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}>
        {todo.title}
      </p>
      <button
        className="bg-red-500 text-white font-bold px-4 py-2 rounded-md"
        onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
