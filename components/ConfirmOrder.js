import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
const html = htm.bind(h);

class ConfirmOrder extends Component {
    constructor() {
        super();
        this.state = { 
            time: new Date().toLocaleString() 
        };
    }
    
    // Lifecycle: Called whenever our component is created
    componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: new Date().toLocaleString() });
        }, 1000);
    }
    
    // Lifecycle: Called just before our component will be destroyed
    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }

    render() {
        return html`
            <div id="confirm-order">
                <form>
                    <span id="aa">Current Time: ${this.state.time} </span>
                    <input type="text" />
                    <button type="submit">Update</button>
                </form>
            </div>
        `
    }
}

export default ConfirmOrder;