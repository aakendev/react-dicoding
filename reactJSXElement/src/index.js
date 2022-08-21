import React from "react";
import { createRoot } from "react-dom/client";

const element = (
  <div>
    <h1>AAKEN Developer</h1>
    <ul>
      <li>Name: AAKEN Developer</li>
      <li>Address: Surabaya, East Java, Indonesia</li>
      <li>Job: Freelance Web Developer</li>
    </ul>
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(element);
