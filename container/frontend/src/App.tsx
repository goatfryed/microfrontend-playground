import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import {NavBar} from "./NavBar";

function App() {

  return (
    <>
        <NavBar />
        <section className="section">
            <div className="container">
                Hello micro frontends
            </div>
        </section>
    </>
  );
}

export default App;
