import { Route, Routes } from "react-router-dom";
import ClassCounter from "./components/classCounter";
import HookCounter from "./components/hookCounter";
import HookPreviousState from "./components/hookPreviousState";
import HomePage from "./home.page";
import UseState from "./hooks/useState";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/class-counter" element={<ClassCounter />} />
      <Route path="/hook-counter" element={<HookCounter />} />
      <Route path="/previous-value-counter" element={<HookPreviousState />} />
      <Route path="/use-state" element={<UseState />} />
    </Routes>
  );
}
export default App;
