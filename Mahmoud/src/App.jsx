import { useState } from "react";
import "./App.css";
import PopupMenu from "./Components/PopupMenu";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");
  const [viewPopup, setViewPopup] = useState(false);

  const handleChangeIncrement = () => {
    setCounter((previous) => previous + 1);

    if (counter >= 10) {
      setCounter((previous) => previous + 9);
      document.body.style.backgroundColor = color;
      setViewPopup(true);
    }
    if (counter >= 100) {
      setCounter((previous) => previous + 90);
    }
  };
  const handleChangeDecrement = () => {
    setCounter((previous) => previous - 1);
    if (counter <= -10) {
      setCounter((previous) => previous - 9);
      setViewPopup(false);
    }
    if (counter <= -100) {
      setCounter((previous) => previous - 90);
    }
  };

  return (
    <>
      {viewPopup && <PopupMenu isOpen={viewPopup} />}

      <h1>{counter}</h1>
      <div>
        <button onClick={handleChangeIncrement}>Increase</button>
        <button onClick={handleChangeDecrement}>Decrese</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
