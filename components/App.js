import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
// import {Route} from '../lib/preact-router.js';
import FunctionalComponent from './FunctionalComponent.js';
import ClassComponent from './ClassComponent.js';
import ConfirmOrder from './ConfirmOrder.js';
import PaymentMethod from './PaymentMethod.js';
import Menu from './Menu.js';
import OrderCompletion from './OrderCompletion.js';

const html = htm.bind(h);

// App 包括五个界面
class App extends Component {
    render() {
        return html`
            <div>
                <${Menu} />
                <${ConfirmOrder} />
                <${PaymentMethod} />

            </div>
        `;
    }
}















// class App extends Component {
//     render() {
//         return html`
//             <div>
//                 <${FunctionalComponent} name="Ming"/>
//                 <${ClassComponent} />
//             </div>
//         `;
//     }
// }

  

export default App;