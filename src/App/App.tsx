import { useState } from "react";
import "../App/Styles/App.css";
import { Input } from "../components/Input/Input";
import { Todo } from "../components/Todo/Todo";

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
      <section>
        <div className="container">
          <Input text = {text} handleSubmit ={handleSubmit} setText ={setText}  addTodo ={addTodo} />
        </div>
      </section>

      {todo.map((todo) => (
        <Todo  key={todo.id} todo ={todo} handleIsDone={handleIsDone} deleteTodo ={deleteTodo}/>
      ))}
    </div>
  );
}

export default App;
