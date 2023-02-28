import { useState } from "react";

export default function HookPreviousState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h2>Hooks Previous State value</h2>
      Count : {count}
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}
