import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", null, "AAKEN Developer");
const listItem1 = React.createElement("li", null, "Name : AAKEN Developer");
const listItem2 = React.createElement(
  "li",
  null,
  "Address : Surabaya, East Java, Indonesia"
);
const listItem3 = React.createElement(
  "li",
  null,
  "Job : Freelance Web Developer"
);

const unorderedList = React.createElement("ul", null, [
  listItem1,
  listItem2,
  listItem3,
]);
const container = React.createElement("div", null, [heading, unorderedList]);

const root = createRoot(document.getElementById("root"));

root.render(container);
