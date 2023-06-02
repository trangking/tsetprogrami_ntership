import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//Component
import Form from "./Component/Form";
import Data_Form from "./Component/Data_Form"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Form",
    element: <Form />,
  },
  {
    path: "/Data_Form",
    element: <Data_Form />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
