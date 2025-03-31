import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);

  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (todo === "") {
            return;
          }
          setTodos((current) => {
            return [...current, todo];
          });
          setTodo("");
        }}
      >
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To do</button>
      </form>
    </div>
  );
}

// function Hello() {
//   useEffect(() => {
//     console.log("created");
//     return () => console.log("destroyed");
//   }, []);

//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);

//   return (
//     <>
//       {showing ? <Hello /> : null}
//       <button onClick={() => setShowing((current) => !current)}>click</button>
//     </>
//   );
// }

// import Button from "./Button";
// import styles from "./App.module.css";
// function App() {
//   const [count, setCount] = useState(0);
//   console.log("render");

//   useEffect(() => {
//     console.log("I run only once");
//   }, []);

//   const [keyword, setKeyword] = useState("");
//   useEffect(() => {
//     console.log(`search for ${keyword}`);
//   }, [keyword]);
//   return (
//     <>
//       <input
//         value={keyword}
//         onChange={(event) => setKeyword(event.target.value)}
//         type="text"
//         placeholder="Search here"
//       />
//       <h1>{count}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>click me</button>
//     </>
//   );
// }

export default App;
