import "./App.css";
import { useState } from "react";

// refactoring - enhancing the code and
// breaking or compartmentalising the code in
// smaller chunks.

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // submit logic
    // a single string inside todoList which an array.
    // mention the array method which add a new element
    // to the array
    // spread operator will either - copy the whole array

    const copiedTodo = [...todoList];
    copiedTodo.push(todo);
    setTodoList(copiedTodo);
    setTodo("");
  }

  function EditTodo(i) {
    const edited = prompt("enter a new value");
    const copiedTodo = [...todoList];
    copiedTodo[i] = edited;
    setTodoList(copiedTodo);
  }

  // filter for arrays

  function DeleteTodo(p) {
    const copiedTodo = [...todoList];
    const filtered = copiedTodo.filter((e) => {
      return e !== copiedTodo[p];
    });

    setTodoList(filtered);
  }

  return (
    <div>
      <h1>Todo App</h1>

      {/* function reference */}

      <form onSubmit={(e) => handleSubmit(e)} id="todoForm">
        <input
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          value={todo}
          type="text"
          name="todo"
          id="todoInput"
        />
        <button>Add Todo</button>
      </form>

      {/* jsx syntax */}

      <div>
        {todoList.map((e, i) => {
          return (
            <div key={i} className="singleTodo">
              <h4 id="unique_id">{e}</h4>
              <div>
                <button onClick={() => EditTodo(i)}>Edit</button>
                <button onClick={() => DeleteTodo(i)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
