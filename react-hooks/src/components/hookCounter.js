import { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Increment Counter using React Hooks</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
