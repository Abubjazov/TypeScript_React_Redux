import {Component} from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
    color?: string 
}
interface AppState {
    counter: number
}

class App extends Component<AppProps, AppState> {

    // state = { counter: 0 }
    constructor(props: AppProps) {
        super(props)

        this.state = { counter: 0 }
    }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1})
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1})
    }

    render() {
        return (
            <div>
                <button onClick={ this.onIncrement }>+</button>
                <button onClick={ this.onDecrement }>-</button>
                <h1>{ this.state.counter }</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
