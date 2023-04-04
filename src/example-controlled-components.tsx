import { useState } from "react";

export function App() {
  const [showCounter, setShowCounter] = useState(true);
  const [x, setX] = useState(0);
  const [text, setText] = useState("");

  const isTextValid = text.length < 10;

  console.log("APP renderered");

  function updateCount(newCount: number) {
    if (newCount > 20) return;

    setX(newCount);
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Counter
      </button>

      <button onClick={() => setX(x + 1)}>{x}</button>

      <input
        value={text}
        onChange={(event) => {
          const newText = event.currentTarget.value;
          setText(newText);
        }}
      />

      <br />
      <br />
      <br />

      {showCounter && (
        <CounterButton
          count={x}
          updateCount={updateCount}
        />
      )}
      {showCounter && (
        <CounterButton
          count={x}
          updateCount={updateCount}
        />
      )}
      {showCounter && (
        <CounterButton
          count={x}
          updateCount={updateCount}
        />
      )}
    </>
  );
}

function CounterButton(props: {
  count: number;
  updateCount: (newCount: number) => void;
}) {
  // const [count, setCount] = useState(props.initialCount);
  console.log("COUNTERBUTTON renderered");

  return (
    <button
      onClick={() => props.updateCount(props.count + 1)}
    >
      {props.count}

      {props.count > 10 && "ziemlich hoch"}
    </button>
  );
}
