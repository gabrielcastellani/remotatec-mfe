import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 
import "primeflex/primeflex.css";

import React from "react";
import ReactDOM from "react-dom";

import { Container } from "./components/HomePage";

const App = () => <Container />

ReactDOM.render(<App />, document.getElementById("app"));
