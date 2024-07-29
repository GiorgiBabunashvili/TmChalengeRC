import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const enteredName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(enteredName.current.value);
    enteredName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredPlayerName : "unknow entity"}</h2>
      <p>
        <input type="text" ref={enteredName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
