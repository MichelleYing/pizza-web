import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';


const html = htm.bind(h);

function FunctionalComponent (props) {
    return html`<h1>Hello ${props.name}!</h1>`;
}

export default FunctionalComponent;