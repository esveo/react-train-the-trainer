import { ReactNode } from "react";
import "./button.css";

export function Button(props: { children: ReactNode }) {
  return (
    <button className="button">
      Text ist: {props.children}
    </button>
  );
}
