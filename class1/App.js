import React from "react";
import { createRoot } from "react-dom/client";

const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      Hello React using using JSX
    </h1>
  );
};

const data = <h1>javascript variable</h1>; //JS

const num = 100;

const elem = <span>React elem</span>; //react element

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {data}
    {elem}
    {num}
    <h1 className="heading">React from functional component</h1>
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
