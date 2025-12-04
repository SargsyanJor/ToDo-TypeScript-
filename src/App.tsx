import React, { useState } from "react";
import "./App.css";

function App() {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button onClick={addTodo} type="submit">
          +
        </button>
      </form>

      {todo.map((todo) => (
        <div key={todo.id}>
          <input
            type={"checkbox"}
            checked={todo.isDone}
            onChange={() => handleIsDone(todo.id)}
          />
          <li>{todo.text}</li>
          <button onClick={() => deleteTodo(todo.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default App;
