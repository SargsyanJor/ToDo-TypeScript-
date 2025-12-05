import { useState } from "react";
import "./Input.css";
import { Todo } from "../Todo/Todo";

export const Input = () => {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<Itodo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  type Itodo = {
    id: number;
    text: string;
    isDone: boolean;
  };

  const addTodo = () => {
    const newTodo: Itodo = {
      id: Date.now(),
      text: text,
      isDone: false,
    };

    if (text.trim()) {
      setTodo((prev) => {
        return [...prev, newTodo];
      });
    }
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleIsDone = (id: number) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="sectionInput">
        <input
          className="addInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button className="addBTN" onClick={addTodo} type="submit">
          +
        </button>
      </form>

      <div className="sectionTodos">
        {todo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleIsDone={handleIsDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
