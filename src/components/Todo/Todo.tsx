import "./Todo.css";

type TodoProps = {
  todo: any;
  deleteTodo: any;
  handleIsDone: any;
};
export const Todo = ({ todo, deleteTodo, handleIsDone }: TodoProps) => {
  return (
    <div>
      <div key={todo.id}>
        <input
          type={"checkbox"}
          checked={todo.isDone}
          onChange={() => handleIsDone(todo.id)}
        />
        <li>{todo.text}</li>
        <button onClick={() => deleteTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};
