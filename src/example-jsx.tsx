import { createRoot } from "react-dom/client";

const simple = <button>Hi</button>;

const heading = (
  <>
    <button>Text</button>
    <div>
      <h1 id="heading-one">Hallo Welt</h1>
      <button className="test">Klick mich</button>
      <label htmlFor="test"></label>

      <img src="..."></img>
    </div>
  </>
);

console.log(heading);

const root = document.getElementById("root")!;

// if (!root) throw new Error("Should never happen");

createRoot(root).render(heading);

export {};
