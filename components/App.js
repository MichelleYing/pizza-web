import { h, Component, render } from '../lib/preact.js';
import htm from '../lib/htm.js';
import ConfirmOrder from './ConfirmOrder.js';
import PaymentMethod from './PaymentMethod.js';
import Menu from './Menu.js';
import OrderCompletion from './OrderCompletion.js';
import page from "../lib/page.mjs";

const html = htm.bind(h);

// App 包括五个界面
class App extends Component {
    constructor() {
        super();
        this.state = { 
            route: Menu
        };

        //设置页面路径
        page.base("/#")
        page();

        page('/menu', () => {
            this.setState({ route: Menu });
        });

        page('/confirm', () => {
            this.setState({route: ConfirmOrder});
        });

        page('/payment', () => {
            this.setState({route: PaymentMethod});
        });

        page('/completion', () => {
            this.setState({route: OrderCompletion});
        });
    }

    componentDidMount() {
        // update time every second
        
    }
    
    componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
    }

    render() {
        return html`
            <div>
                <${this.state.route} />
            </div>
        `;
    }
}

export default App;