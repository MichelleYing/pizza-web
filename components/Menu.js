import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
import MenuItem from './MenuItem.js';
import page from "../lib/page.mjs";
const html = htm.bind(h);

class Menu extends Component {
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

    createPizzaItems() {
        let pizzas = [
            {itemName: "Pizza A", price: 5, vegetarian: "is vegeterain", detail:"spicy, fruite apple orange, onion, green curry"},
            {itemName: "Pizza B"},
            {itemName: "Pizza C"},
            {itemName: "Pizza D"},
            {itemName: "Pizza E"},
            {itemName: "Pizza F"},
            {itemName: "Pizza G"},
            {itemName: "Pizza H"},
            {itemName: "Pizza I"},
            {itemName: "Pizza J"}
        ];
        let pizzaItems = html`
            ${
                pizzas.map(function(pizza) {
                    return html`<${MenuItem} itemName="${pizza.itemName}" 
                                             price="${pizza.price}" 
                                             vegetarian="${pizza.vegetarian}" 
                                             detail="${pizza.detail}" />`;
                })
            }
        `;
        return pizzaItems;
    }

    createDessertItems() {
        let desserts = [
            {itemName: "Dessert A", price: 5,  detail:"spicy,  orange"},
            {itemName: "Dessert B" ,price: 5,  detail:"spicy,  orange"},
            {itemName: "Dessert C" ,price: 5,  detail:"spicy,  orange"},
            {itemName: "Dessert D" ,price: 5,  detail:"spicy,  orange"}
        ];
        let dessertItems = html`
            ${
                desserts.map(function(dessert) {
                    return html`<${MenuItem} itemName="${dessert.itemName}" 
                                             price="${dessert.price}" 
                                             vegetarian="" 
                                             detail="${dessert.detail}" />`;
                })
            }
        `;
        return dessertItems;
    }

    createDrinkItems() {
        let drinks = [
            {itemName: "Drink A", price: 5,  detail:"spicy, fruite apple orange"},
            {itemName: "Drink B", price: 5,  detail:"spicy, fruite apple orange"},
           
        ];
        let drinkItems = html`
            ${
                drinks.map(function(drink) {
                    return html`<${MenuItem} itemName="${drink.itemName}" 
                                             price="${drink.price}" 
                                             vegetarian="" 
                                             detail="${drink.detail}" />`;
                })
            }
        `;
        return drinkItems;
    }

    goConfirmOrder() {
        page.redirect("/confirm");
    }

    render() {
        return html`
            <div id="menu">
                <h1>MENU</h1>
                <div class="menu-body">
                    <div class="pizza">
                        <h3>PIZZA</h3>
                        <div class="pizza-items">
                            ${this.createPizzaItems()}
                        </div>
                    </div>
                    <div class="others">
                        <div class="dessert">
                            <h3>DESSERT</h3>
                            <div class="dessert-items">
                                ${this.createDessertItems()}
                            </div>
                        </div>
                        <div class="drink">
                            <h3>DRINK</h3>
                            <div class="drink-items">
                                ${this.createDrinkItems()}
                            </div>
                        </div>
                    </div>     
                </div>

                <div class="footer">
                    <div class="footer-upper">
                        <strong> Estimated Price: $35</strong>
                    </div>

                    <div class="footer-lower">
                        <button onClick="${this.goConfirmOrder}">Order</button>
                    </div>
                </div>
                
            </div>
        `
    }
}

export default Menu;