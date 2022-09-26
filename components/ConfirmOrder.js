import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
import ConfirmOrderItem from './ConfirmOrderItem.js';
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


    createConfirmOrderItems() {
        let detils = [
            {itemName: "Pizza A", itemNum: "5"},
            
           
        ];
        let confirmOrderItems = html`
            ${
                detils.map(function(detil) {
                    return html`<${ConfirmOrderItem} itemName="${detils.itemName}" 
                                                     itemNum="${detils.itemNum}"  />`;
                })
            }
        `;
        return confirmOrderItems;
    }




    goPaymentMethod() {
        let menu = document.getElementById("menu");
        menu.setAttribute("style", "display:none");

        let confirm = document.getElementById("confirm-order");
        confirm.setAttribute("style", "display:none");

        let payment = document.getElementById("payment-method");
        confirm.setAttribute("style", "display:flex");
    }


    render() {
        return html`
            <div id="confirm">
                <h1>CONFIRM ORDER</h1>
                <div class="confirm-body"> 
                    <h3>ITEM NAME & NUM</h3>
                    <div class="items-name-num"> 
                        ${this.createConfirmOrderItems()}  
                    </div>
                </div>

                <div class="footer">
                    <div class="footer-upper">
                        total price
                    </div>

                    <div class="footer-lower">
                        time
                        <button onClick="${this.goPayment}">Pay</button>
                    </div>
                </div>
                
            </div>
        `
    }
}

export default ConfirmOrder;