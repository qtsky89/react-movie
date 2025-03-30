import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("render");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click me</button>
    </>
  );
}

export default App;
