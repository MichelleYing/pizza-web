import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
import ConfirmOrderItem from './ConfirmOrderItem.js';
import page from "../lib/page.mjs";
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
        let details = [
            {itemName: "Pizza A", itemNum: "5", itemPrice: "11.50"},
            {itemName: "Pizza A", itemNum: "5", itemPrice: "5.50"},
            {itemName: "Pizza A", itemNum: "5", itemPrice: "7.50"}
            
           
        ];
        let confirmOrderItems = html`
            ${
                details.map(function(detail) {
                    return html`<${ConfirmOrderItem} itemName="${detail.itemName}" 
                                                     itemNum="${detail.itemNum}"  
                                                     itemPrice="${detail.itemPrice}"/>`;
                })
            }
        `;
        return confirmOrderItems;
    }




    goPaymentMethod() {
        page.redirect("/payment");
    }

    goMenu() {
        page.redirect("/menu");
    }


    render() {
        return html`
            <div id="confirm">
                <h1>CONFIRM ORDER</h1>
                <div class="confirm-body"> 
                    <div class="confirm-body-title">
                        <span class="left">Item Name</span>
                        <span class="middle">Unit Price</span>
                        <span class="right">Units</span>
                    </div>
                    <div class="items-name-num"> 
                        ${this.createConfirmOrderItems()}  
                    </div>
                </div>

                <div class="footer">
                    <div class="footer-upper">
                        <span class="one">Estimated Preparation Time: 10mins</span>
                        <span class="two">Estimated Delivery Time: 10mins</span>
                        <div class="three">
                            <span>Enter Discount Code for <strong>10%</strong> Off</span>
                            <input placeholder="Discount Code" />
                        </div>
                    </div>

                    <div class="footer-middle">
                        Total Price: $30.00
                    </div>

                    <div class="footer-lower">
                        <button class="one" onClick="${this.goMenu}">Back</button>
                        <button class="two" onClick="${this.goPaymentMethod}">Pay</button>
                    </div>
                </div>
                
            </div>
        `
    }
}

export default ConfirmOrder;