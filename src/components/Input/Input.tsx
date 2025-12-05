import "./Input.css";

type InputProp = {
  text: string;
  handleSubmit: any;
  setText: any;
  addTodo: any;
};

export const Input = ({ text, handleSubmit, setText, addTodo }: InputProp) => {
  return (
    <div className="section">
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
    </div>
  );
};
