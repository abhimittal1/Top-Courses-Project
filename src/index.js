import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {FcLike} from "react-icon";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <App />
        <ToastContainer />
    </div>
);
