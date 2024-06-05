import { todoType } from "@/types/todoTypes";
import ChangedTodo from "./ChangedTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className={`w-full flex items-center justify-center bg-white py-3 px-6 md:px-16 rounded-2xl text-black text-lg `}
      style={todoStyle}
    >
      <ChangedTodo todo={todo} />
      <span className="text-center font-bold uppercase w-full ">
        {todo.title}
      </span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
