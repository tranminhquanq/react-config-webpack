import * as React from "react";

export interface AppProps {
  name: string;
  age: string;
}

export default function App(props : AppProps) {
return <h1>Hello, my name is {props.name}. I'm {props.age} years old </h1>
}
