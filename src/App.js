import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>My To-Do App</h1>
      <Form updateTodos={setTodos} todos={todos} />
      {todos.map(todo => <div>
        <p>{todo.title}</p>
        <p>{todo.description}</p>
        <p>{todo.important ? "Important" : ""}</p>
        <p>{todo.category}</p>
      </div>)}
    </div>
  );
}

export default App;
