import { useState } from "react";
import { Button } from "./button/Button";

function Greeting(props: { formal: boolean }) {
  return (
    <h1>Hello world {props.formal ? <b> Sir</b> : null}</h1>
  );
}

const links = [
  { label: "Google", url: "https://google.com" },
  { label: "Facebook", url: "https://facebook.com" },
  { label: "Twitter", url: "https://twitter.com" },
];

export function App() {
  // destructuring
  const [showText, setShowText] = useState(false);

  return (
    <>
      <h1 onClick={() => setShowText(!showText)}>
        Hello World! <Button>Test</Button>
      </h1>

      {showText ? (
        <p>Extratext wird angezeigt</p>
      ) : (
        <p>Kein extra Text</p>
      )}

      <Greeting formal />
      <Greeting formal={false} />
      <br />
      <br />
      {links.map((link) => (
        <a key={link.label} href={link.url}>
          {link.label}
        </a>
      ))}

      <ListExample />
    </>
  );
}

function ListExample() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <ul onClick={() => setList([...list].reverse())}>
      {list.map((item) => (
        <li key={item}>
          {item} <input />
        </li>
      ))}
    </ul>
  );
}
