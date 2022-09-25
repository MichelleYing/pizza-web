import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
const html = htm.bind(h);

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date().toLocaleString(),
            itemName: props.itemName,
            price: props.price, 
            vegetarian: props.vegetarian, 
            detail: props.detail
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
            <div id="menu-item">
                <div class="pizza-item">
                    <div class="left">
                        - 1 +
                    </div>
                    <div class="middle">
                        <span class="pizza-name">
                            ${this.state.itemName}
                        </span>
                        <span class="pizza-detail">
                            ${this.state.vegetarian} ${this.state.detail}
                        </span>
                    </div>
                    <div class="right">
                        \$${this.state.price}
                    </div>
                </div>
                <hr />
            </div>
        `
    }
}

export default MenuItem;