/*
<div id = "parent1">
    <div id = "child">
        <h1>I am a first one</h1>
        <h2>I am a second one</h2>
    <div>
    <div id = "child2">
        <h1>I am aaaaaa fisr one</h1>
        <h2>I am aaaaaa second one</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent1" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a first one"),
    React.createElement("h2", {}, "I am a second one"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a first one"),
    React.createElement("h2", {}, "I am a second one"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
