import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
import page from "../lib/page.mjs";
const html = htm.bind(h);

class PaymentMethod extends Component {
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


    goConfirmOrder() {
        let payment = document.getElementById("payment");
        payment.setAttribute("style", "display:none");

        let confirm = document.getElementById("confirm");
        confirm.setAttribute("style", "display:flex");
    }

    goOrderCompletion() {
        console.log("test1")
        let completion = document.getElementById("completion");
        completion.setAttribute("style", "display:flex");

        let payment = document.getElementById("payment");
        payment.setAttribute("style", "display:none");
    }




    render() {
        return html`
            <div id="payment">
                <h1>PAYMENT METHOD</h1>
                <div class="guest-info">
                    <span class="name">Name: </span> <input placeholder="Your Name" />
                    <span class="phone">Phone Number: </span> <input placeholder="Your Phone Number" />
                    <span class="address">Address:  </span> <input placeholder="Your Address" />
                    <span class="post-code">Post code: </span>  <input placeholder="Your Post Code" />
                    <span class="credit">Credit Card Number: </span> <input placeholder="Your Credit Card Number" />
                </div>
                <div class="footer">
                    <button class="one" onClick="${this.goConfirmOrder}">Back</button>
                    <button class="two" onClick="${this.goOrderCompletion}">Confirm</button>
                </div>
            </div>
        `
    }
}

export default PaymentMethod;