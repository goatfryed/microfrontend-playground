import {createApp, App} from "vue";
import "./index.scss";
import "bulma/bulma.sass"
import AppComponent from "./App.vue";

console.log("Hello from app two")

class WebComponent extends HTMLElement {
    #app: App;


    constructor() {
        super();
        this.#app = createApp(AppComponent);
    }

    connectedCallback() {
        this.#app.mount(this);
    }
}

customElements.define("goatfryed-mfs-app-two", WebComponent);
