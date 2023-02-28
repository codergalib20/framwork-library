import { useState } from "react";

export default function HookPreviousState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const code =
    'import { useState } from "react"; \n export default function HookPreviousState() { const initialCount = 0; const [count, setCount] = useState(initialCount);  const increment = () => { for (let i = 0; i < 5; i++) {  setCount((prevCount) => prevCount + 1); }};const decrement = () => {if (count >= 3) {for (let i = 0; i < 3; i++) {setCount((prevCount) => prevCount - 1);}} else {alert("Number less then decrement");}};console.log(initialCount);return (<div><h2>Hooks Previous State value</h2>Count : {count}<button onClick={() => setCount(0)}>Reset</button><button onClick={increment}>Increment</button><button onClick={decrement}>Decrement</button></div>);} ';

  const decrement = () => {
    if (count >= 3) {
      for (let i = 0; i < 3; i++) {
        setCount((prevCount) => prevCount - 1);
      }
    } else {
      alert("Number less then decrement");
    }
  };
  console.log(initialCount);
  return (
    <div>
      <h2>Hooks Previous State value</h2>
      Count : {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>{code}</div>
    </div>
  );
}
