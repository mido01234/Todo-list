import "./App.css";
import { useRef, useState } from "react";
function App() {
  {
    /**index.js creates virtual dom by calling the root from index.html which creates a 
single page application that renders the app
index.js renders the app
 */
  }
  const [x, setx] = useState([]);
  const inputref = useRef();
  // contains all tasks
  // here outside return there are functions or states that works in background

  const add = () => {
    const value = inputref.current.value;
    const bigData = { completed: false, value };
    if (value === "") {
      return false;
    }
    console.log(value);
    setx([...x, bigData]);
    inputref.current.value = "";
  };
  const itemDone = (index) => {
    const newx = [...x];
    newx[index].completed = !newx[index].completed;

    setx(newx);
  };
  console.log(x);

  const toDelete = (index) => {
    const newx = [...x];

    newx.splice(index, 1);
    setx(newx);
  };

  return (
    // the return contains elements that renders on screen
    <div className="App">
      <h2>TO do List</h2>

      <ul>
        {/** here are the list items */}
        {x.map(({ value, completed }, index) => {
          {
            /** map over all items and renders items */
          }
          return (
            <div className="Task">
              <li
                className={completed ? "doneStyle" : ""}
                onClick={() => itemDone(index)}
              >
                {value}
              </li>
              <span onClick={() => toDelete(index)}>❌</span>
              <hr/>
            </div>
          );
        })}
      </ul>
      <input ref={inputref} placeholder="Enter your task" />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
