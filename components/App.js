import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
import FunctionalComponent from './FunctionalComponent.js';
import ClassComponent from './ClassComponent.js';
const html = htm.bind(h);

class App extends Component {
    render() {
        return html`
            <div>
                <${FunctionalComponent} name="Ming"/>
                <${ClassComponent} />
            </div>
        `;
    }
}

export default App;