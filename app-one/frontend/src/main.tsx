import React from "react";
import ReactDOM, {Root} from "react-dom/client";
import {App} from "./App";
import "./index.scss";
import "bulma/bulma.sass"

console.log("Hello from app one")

class WebComponent extends HTMLElement {
    #reactRoot: Root


    constructor() {
        super();
        this.#reactRoot = ReactDOM.createRoot(this);
    }

    connectedCallback() {
        this.#reactRoot.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
    }
}

customElements.define("goatfryed-mfs-app-one", WebComponent);
