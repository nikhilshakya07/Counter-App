import { useState } from "react"
import "./App.css";
export default function App() {

  const [count, setcount] = useState(0);
  return (
      <div className="container">
        <h1>Counter App</h1>
        <div className="display">
          <span>{count}</span>
        </div>
        <div className="button-group">
          <button className = "increment button" onClick={() => {setcount(count + 1)}}>Increase</button>
          <button className="decrement button" onClick={() => {setcount(count - 1)}}>Decrease</button>
          <button className="reset button" onClick={() => {setcount(0)}}>Reset</button>
        </div>
      </div>
  )
}