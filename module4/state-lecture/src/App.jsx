import "./App.css";
import { useStore } from "./store";
import { Link } from "react-router-dom";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Wake up" },
  //   { id: 2, text: "Shower" },
  // ]);
  const { todos, setTodos } = useStore();

  return (
    <>
      <Link to="/edit" className="">
        Edit
      </Link>
      <h1 className="text-amber-500 font-bold"> Todos</h1>
      <form
        action=""
        onSubmit={(e) => {
          //log out the value from our input
          e.preventDefault();
          console.log(document.querySelector("#todo-input").value);
          const value = document.querySelector("#todo-input").value;
          //issue when all the items is deleted i cant add new values
          let id = 1
          if (todos.length){
           id = todos[todos.length-1].id +1;
          }
          setTodos([
            ...todos,
            {
              id: id,
              text: value,
            },
          ]);
        }}
      >
        <label htmlFor="todo-input">Todo item</label>
        <input
          type="text"
          id="todo-input"
          name="todo-input"
          className="border block"
        />
        <button type="submit" className="border rounded p-1">
          Add
        </button>
      </form>
      <div className="this will be our container for todo items">
        {todos.map((item) => (
          <div key={item.id}>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
