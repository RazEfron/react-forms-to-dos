import { useState } from "react";

const Form = ({ updateTodos, todos }) => {
  //   const [textInputs, setText] = useState({ title: "", description: "" });
  //   const [description, setDescription] = useState("")
  //   const [title, setTitle] = useState("")
  //   const [checked, setChecked] = useState(false);
  //   const [category, setCategory] = useState("");
  //   const [toDoInfo, setToDoInfo] = useState({title: "", checked: false, category: ""})

  const [toDo, setTodo] = useState({
    title: "",
    description: "",
    important: false,
    category: "",
  });

  function resetForm() {
    setTodo({
      title: "",
      description: "",
      important: false,
      category: "",
    });
  }

  //   function handleTextChange(e) {
  //     const newObj = structuredClone(textInputs);
  //     newObj[e.target.id] = e.target.value;
  //     setText(newObj);
  //   }

  function handleFormChange(e) {
    const newToDoObj = structuredClone(toDo);

    if (e.target.id === "important") {
      newToDoObj[e.target.id] = e.target.checked;
    } else {
      newToDoObj[e.target.id] = e.target.value;
    }

    setTodo(newToDoObj);
  }

  //   function handleTextChange(e, key) {
  //     const newObj = structuredClone(textInputs);
  //     newObj[key] = e.target.value;
  //     setText(newObj);
  //     console.log(textInputs);
  //   }

  //   function handleCheckboxChange(e) {
  //     console.log(e.target.checked);
  //     setChecked(!checked);
  //   }

  //   function handleCategoryChange(e) {
  //     // console.log(e.target.value);
  //     setCategory(e.target.value); // async runs after sync
  //     console.log(category); // sync code runs before a sync
  //   }

  function handleFormSubmit(e) {
    e.preventDefault();
    todos.push(toDo);
    updateTodos([...todos]);
    resetForm();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        id="title"
        onChange={handleFormChange}
        value={toDo.title}
      />
      <br />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <input
        type="text"
        id="description"
        onChange={handleFormChange}
        value={toDo.description}
      />

      <br />
      <br />
      <label htmlFor="important">Important</label>

      <input
        type="checkbox"
        id="important"
        checked={toDo.important}
        onChange={handleFormChange}
      />
      <br />
      <br />
      <label htmlFor="category">Category</label>

      <select onChange={handleFormChange} value={toDo.category} id="category">
        <option value=""></option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <br />
      <br />
      <input type="submit" value="create to do" />
    </form>
  );
};
// 1. A user types in the input field
// 2. That triggers the onChange event
// 3. The onCahnge event handler (handleTitleChange) updates the title piece of state using e.target.title.value
// 4. The component re-renders with the new value from the state
export default Form;
