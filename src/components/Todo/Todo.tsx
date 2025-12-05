import "./Todo.css";

type TodoProps = {
  todo: any;
  deleteTodo: any;
  handleIsDone: any;
};
export const Todo = ({ todo, deleteTodo, handleIsDone }: TodoProps) => {
  return (
    <div className="toDoBlock">
      <div key={todo.id} className="todos">
        <input
          type={"checkbox"}
          checked={todo.isDone}
          onChange={() => handleIsDone(todo.id)}
        />
        <li className={`todoLi ${todo.isDone ? "underline" : ""}`}>
          {todo.text.length > 30 ? todo.text.slice(0, 30) + "..." : todo.text}
        </li>
        <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};
