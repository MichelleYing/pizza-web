import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
const html = htm.bind(h);

class ConfirmOrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleString(),
            itemName: props.itemName,
            itemNum: props.itemNum
        };
    }
    
    // Lifecycle: Called whenever our component is created
    componentDidMount() {
        // update time every second
    }
    
    // Lifecycle: Called just before our component will be destroyed
    componentWillUnmount() {
        // stop when not renderable
    }

    render() {
        return html`
            <div id="confirm-order-item">
                <div id="item-name-num">
                    <div class="left">
                        ${this.state.itemName}
                    </div>
                    <div class="right">
                        ${this.state.itemNum}
                    </div>
                    <hr />
                </div>
                <hr />
            </div>
        `
    }
}

export default ConfirmOrderItem;