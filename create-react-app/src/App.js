import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  return (
    <>
      {showing ? <Hello /> : null}
      <button onClick={() => setShowing((current) => !current)}>click</button>
    </>
  );
}

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
